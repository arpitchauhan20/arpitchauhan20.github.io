(function () {
  var STORAGE_KEY = "arpit-portfolio-version";
  var SESSION_PREFIX = "arpit-portfolio-reloaded-";

  /** Custom assets that should bypass browser cache after a deploy */
  var CACHE_BUST_ASSETS = [
    "css/responsive.css",
    "css/mobile-nav.css",
    "css/portfolio-page.css",
    "js/mobile-nav.js",
    "js/projects-scroll.js",
    "js/cache-update.js",
  ];

  function assetPath(url) {
    if (!url) return "";
    try {
      return new URL(url, location.href).pathname.replace(/^\//, "");
    } catch (e) {
      return url.split("?")[0].replace(/^\//, "");
    }
  }

  function withVersion(url, version) {
    var base = url.split("?")[0];
    return base + "?v=" + encodeURIComponent(version);
  }

  function applyCacheBust(version) {
    CACHE_BUST_ASSETS.forEach(function (path) {
      document
        .querySelectorAll('link[rel="stylesheet"], script[src]')
        .forEach(function (node) {
          var attr = node.tagName === "LINK" ? "href" : "src";
          var current = node.getAttribute(attr);
          if (!current || assetPath(current).indexOf(path) === -1) return;
          if (current.indexOf("v=" + version) !== -1) return;
          node.setAttribute(attr, withVersion(current, version));
        });
    });
  }

  function reloadForVersion(version) {
    var sessionKey = SESSION_PREFIX + version;
    if (sessionStorage.getItem(sessionKey)) return false;

    sessionStorage.setItem(sessionKey, "1");
    localStorage.setItem(STORAGE_KEY, version);

    var url = new URL(location.href);
    url.searchParams.set("v", version);
    location.replace(url.toString());
    return true;
  }

  function run(version) {
    var stored = localStorage.getItem(STORAGE_KEY);
    var param = new URL(location.href).searchParams.get("v");

    if (stored && stored !== version) {
      if (reloadForVersion(version)) return;
    }

    if (!stored) {
      localStorage.setItem(STORAGE_KEY, version);
    }

    if (param !== version) {
      var url = new URL(location.href);
      url.searchParams.set("v", version);
      history.replaceState(null, "", url.toString());
    }

    applyCacheBust(version);
  }

  fetch("version.json?_=" + Date.now(), { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("version fetch failed");
      return res.json();
    })
    .then(function (data) {
      var version = String(data && data.version ? data.version : "").trim();
      if (!version) return;
      run(version);
    })
    .catch(function () {
      /* Offline or missing file — site still works */
    });
})();
