(() => {
  var e = {
      1836: function () {
        function e() {
          let e = Webflow.require("ix3");
          e.ready().then(() => {
            let a = e.getInstance();
            a &&
              (a.register(
                [
                  {
                    id: "i-4ee67a35",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top bottom",
                            end: "bottom 50%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["last-section"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-6e98d862"],
                    deleted: !1,
                  },
                  {
                    id: "i-a438389d",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["h-line"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-d95b79e1"],
                    deleted: !1,
                  },
                  {
                    id: "i-d96a4952",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "15% bottom",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["manifesto"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-76d26472"],
                    deleted: !1,
                  },
                  {
                    id: "i-ad72e2c0",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 85%",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:selector",
                          ".expertise-split",
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-a2cfd97d"],
                    deleted: !1,
                  },
                  {
                    id: "i-60ddf71c",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 85%",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["split-tag"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-5745009f"],
                    deleted: !1,
                  },
                  {
                    id: "i-358f741f",
                    triggers: [["wf:load", { controlType: "load" }]],
                    timelineIds: ["t-24f4bf9c"],
                    deleted: !1,
                  },
                  {
                    id: "i-6ae7ae9a",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "30% 85%",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["footer"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-3457a273"],
                    deleted: !1,
                  },
                  {
                    id: "i-cf8f3019",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 85%",
                            end: "bottom top",
                            scrub: null,
                            enter: "play",
                            leave: "none",
                            enterBack: "reverse",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["section-values"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-70287303"],
                    deleted: !1,
                  },
                  {
                    id: "i-2b1a9a90",
                    triggers: [["wf:load", { controlType: "load" }]],
                    timelineIds: ["t-ab84b4e4"],
                    deleted: !1,
                  },
                  {
                    id: "i-facd6c3b",
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "center left",
                            end: "bottom top",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:selector",
                          "",
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-27f80efa"],
                    deleted: !1,
                  },
                ],
                [
                  {
                    id: "t-6e98d862",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-ec8ded89",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { position: 0, ease: 0 },
                        tt: 2,
                        properties: { "wf:transform": { y: ["0%", "-100vh"] } },
                      },
                      {
                        id: "ta-b7986d79",
                        targets: [
                          [
                            "wf:class",
                            ["last-section-mask"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.23, position: 0, ease: 0 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["-120vh", "-120vh"],
                          },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-d95b79e1",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-d962622b",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1.2, position: 0, ease: 9 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0px", "100%"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-76d26472",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-03b4430a",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1.2,
                          position: 0,
                          stagger: { amount: 0.15 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["150%", "0%"],
                            rotation: ["2.5deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-a2cfd97d",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-1124b88e",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1.2,
                          position: 0,
                          stagger: { amount: 0.2 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["170%", "0%"],
                            rotation: ["3deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-5745009f",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-f57f465b",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1,
                          position: 0,
                          stagger: { amount: 0.2 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["200%", "0%"],
                            rotation: ["2deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-24f4bf9c",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-e22f1af9",
                        targets: [
                          [
                            "wf:selector",
                            ".load-split",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1.5,
                          position: 0,
                          stagger: { amount: 0.2 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["140%", "0px"],
                            rotation: ["2.5deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-3457a273",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-2625f543",
                        targets: [
                          [
                            "wf:class",
                            ["logo-footer"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 9 },
                        tt: 2,
                        properties: { "wf:transform": { y: ["120%", "0%"] } },
                      },
                    ],
                  },
                  {
                    id: "t-70287303",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-e8f4144d",
                        targets: [
                          [
                            "wf:class",
                            ["value-item__line"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1,
                          position: 0,
                          stagger: { amount: 1 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-093decaf",
                        targets: [
                          [
                            "wf:class",
                            ["value-divider"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1,
                          position: 0,
                          stagger: { amount: 0.5 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: { "wf:transform": { scale: [0, 1] } },
                      },
                      {
                        id: "ta-826e1eb5",
                        targets: [
                          [
                            "wf:selector",
                            ".value-icon svg",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0.2, ease: 9 },
                        tt: 2,
                        properties: { "wf:transform": { scale: [0, 1] } },
                      },
                      {
                        id: "ta-aabf0a3a",
                        targets: [
                          [
                            "wf:selector",
                            ".value-text h4",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1,
                          position: 0.4,
                          stagger: { amount: 0.15 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["120%", "0%"],
                            rotation: ["2.5deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                      {
                        id: "ta-57b0ecef",
                        targets: [
                          [
                            "wf:selector",
                            ".value-text p",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1.2,
                          position: 0.5,
                          stagger: { amount: 0.2 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            y: ["130%", "0%"],
                            rotation: ["2.5deg", "0deg"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-ab84b4e4",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-91eefaf3",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "68f77e4ac7ca6bd68b326cb4",
                              "6efb697d-d0ab-36b3-30f7-aca4aff8ec9f",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 9 },
                        tt: 2,
                        properties: { "wf:transform": { y: ["120%", "0%"] } },
                      },
                      {
                        id: "ta-24f7fd0b",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "68f77e4ac7ca6bd68b326cb4",
                              "f795206b-cfea-47c2-42e7-3d1c4abaf727",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 1.2,
                          position: 0,
                          stagger: { amount: 0.15 },
                          ease: 9,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            rotation: ["3deg", "0deg"],
                            y: ["120%", "0px"],
                          },
                        },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                  {
                    id: "t-27f80efa",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-3c5dbccc",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { position: 0, ease: 0 },
                        tt: 2,
                        properties: { "wf:transform": { y: ["100%", "0px"] } },
                        splitText: { type: "lines", mask: "lines" },
                      },
                    ],
                  },
                ]
              ),
              window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
              document.documentElement.classList.add("w-mod-ix3"));
          });
        }
        Webflow.require("ix2").init({
          events: {
            "e-37": {
              id: "e-37",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-38",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "1d07a7d5-3aec-a0a6-4f92-0536d18f5cb2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "1d07a7d5-3aec-a0a6-4f92-0536d18f5cb2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a787b14,
            },
            "e-38": {
              id: "e-38",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-37",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "1d07a7d5-3aec-a0a6-4f92-0536d18f5cb2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "1d07a7d5-3aec-a0a6-4f92-0536d18f5cb2",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a787b14,
            },
            "e-39": {
              id: "e-39",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-40",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "b228e91b-5def-1ae6-b4d2-bc8c19668f4a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "b228e91b-5def-1ae6-b4d2-bc8c19668f4a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a7c6bac,
            },
            "e-40": {
              id: "e-40",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-39",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "b228e91b-5def-1ae6-b4d2-bc8c19668f4a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "b228e91b-5def-1ae6-b4d2-bc8c19668f4a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a7c6bac,
            },
            "e-41": {
              id: "e-41",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-42",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "4ebae602-ae4c-cc9a-663d-ee8ee30ed02e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "4ebae602-ae4c-cc9a-663d-ee8ee30ed02e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a7c6c75,
            },
            "e-42": {
              id: "e-42",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-41",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "4ebae602-ae4c-cc9a-663d-ee8ee30ed02e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "4ebae602-ae4c-cc9a-663d-ee8ee30ed02e",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a3a7c6c75,
            },
            "e-43": {
              id: "e-43",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-18",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|f795206b-cfea-47c2-42e7-3d1c4abaf71f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|f795206b-cfea-47c2-42e7-3d1c4abaf71f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-18-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 25,
                },
              ],
              createdOn: 0x19a924fb893,
            },
            "e-44": {
              id: "e-44",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-45",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044aaa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044aaa",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-45": {
              id: "e-45",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-44",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044aaa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044aaa",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-46": {
              id: "e-46",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-47",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-47": {
              id: "e-47",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-46",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab1",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-48": {
              id: "e-48",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-49",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-49": {
              id: "e-49",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-48",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|2420727c-ed6a-0902-03dc-a603b3044ab7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19a9bb86fa0,
            },
            "e-50": {
              id: "e-50",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-51",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c7874956",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c7874956",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-51": {
              id: "e-51",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-50",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c7874956",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c7874956",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-52": {
              id: "e-52",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-53",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c787495d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c787495d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-53": {
              id: "e-53",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-52",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c787495d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c787495d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-54": {
              id: "e-54",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-55",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c7874963",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c7874963",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-55": {
              id: "e-55",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-54",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "77b08b28-eab5-8f18-46ff-4198c7874963",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "77b08b28-eab5-8f18-46ff-4198c7874963",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19abfaac302,
            },
            "e-56": {
              id: "e-56",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-57",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c545",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c545",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-57": {
              id: "e-57",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-56",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c545",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c545",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-58": {
              id: "e-58",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-59",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c54c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c54c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-59": {
              id: "e-59",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-58",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c54c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c54c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-60": {
              id: "e-60",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-61",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c552",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c552",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-61": {
              id: "e-61",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-60",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c552",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68f77e4ac7ca6bd68b326cb4|15fb51ef-bf0b-21b6-45a0-eed75180c552",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac047426e,
            },
            "e-62": {
              id: "e-62",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-63",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dac7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dac7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bacf20,
            },
            "e-63": {
              id: "e-63",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-62",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dac7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dac7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bacf20,
            },
            "e-64": {
              id: "e-64",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-65",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dacd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dacd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bacf20,
            },
            "e-65": {
              id: "e-65",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-64",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dacd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|137071fe-db2c-2232-c30c-6b9871b7dacd",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bacf20,
            },
            "e-66": {
              id: "e-66",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-67",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a631a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a631a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4baf90d,
            },
            "e-67": {
              id: "e-67",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-66",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a631a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a631a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4baf90d,
            },
            "e-68": {
              id: "e-68",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-69",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a6320",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a6320",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4baf90d,
            },
            "e-69": {
              id: "e-69",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-68",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a6320",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|2cae2378-55e7-6dea-3b5b-c810eb5a6320",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4baf90d,
            },
            "e-70": {
              id: "e-70",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-71",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3c6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3c6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bd731f,
            },
            "e-71": {
              id: "e-71",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-70",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3c6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3c6",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bd731f,
            },
            "e-72": {
              id: "e-72",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-73",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3cc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3cc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bd731f,
            },
            "e-73": {
              id: "e-73",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-72",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3cc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "68ffc96a2df8dfe540100f8c|8fc34f98-52bc-4588-c8ae-15f2d43db3cc",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4bd731f,
            },
            "e-74": {
              id: "e-74",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-75",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fc4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fc4",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4be525e,
            },
            "e-75": {
              id: "e-75",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-74",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fc4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fc4",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4be525e,
            },
            "e-76": {
              id: "e-76",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-77",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fca",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4be525e,
            },
            "e-77": {
              id: "e-77",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-76",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "691d9c7677adc18759704e63|45cd5df9-6c0a-cc60-45d4-dc6357e89fca",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ac4be525e,
            },
            "e-78": {
              id: "e-78",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OVER",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-19",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-79",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "698ef2bcc4f2f3d9a60e2e1f|51665e2c-e74f-b8de-6933-62c02c3f2477",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19c566ec581,
            },
            "e-79": {
              id: "e-79",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_OUT",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-20",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-78",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "698ef2bcc4f2f3d9a60e2e1f|51665e2c-e74f-b8de-6933-62c02c3f2477",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19c566ec581,
            },
          },
          actionLists: {
            "a-19": {
              id: "a-19",
              title: "test",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-19-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-7",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        zValue: 5,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-19-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        yValue: 40,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-19-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        yValue: -120,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-8",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-19-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        xValue: null,
                        yValue: -100,
                        xUnit: "%",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-19-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        zValue: -5,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19ab56977ef,
            },
            "a-20": {
              id: "a-20",
              title: "test 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-20-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        yValue: 40,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-20-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-20-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.color-white.first",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "c3f3be31-bd0a-c218-465a-14268439ca00",
                            "7b3f0996-d7d9-42b0-4951-fe200df02027",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-20-n-2",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuart",
                        duration: 700,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav-tag.hide.color-white.two",
                          selectorGuids: [
                            "0185991d-9a51-3ac7-ce1e-358d2433650b",
                            "485a56c3-52c5-04d5-eab8-9e1d6c0cdb86",
                            "8e6f4d25-58af-2082-06ef-293f62cc5e00",
                            "05dece0b-91d4-03a3-fec1-7cfc606f3b7e",
                          ],
                        },
                        zValue: 5,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19ab56977ef,
            },
            "a-18": {
              id: "a-18",
              title: "New Scroll Animation",
              continuousParameterGroups: [
                {
                  id: "a-18-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 51,
                      actionItems: [
                        {
                          id: "a-18-n",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".test",
                              selectorGuids: [
                                "09610ec5-63c4-8acb-d016-c547dc26f21e",
                              ],
                            },
                            widthValue: 50,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 95,
                      actionItems: [
                        {
                          id: "a-18-n-3",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "CHILDREN",
                              selector: ".test",
                              selectorGuids: [
                                "09610ec5-63c4-8acb-d016-c547dc26f21e",
                              ],
                            },
                            widthValue: 5.972,
                            widthUnit: "vw",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x19a926f1560,
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        }),
          "complete" === document.readyState
            ? e()
            : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e();
              });
      },
      6107: function (e, a, t) {
        t(9461),
          t(7624),
          t(286),
          t(8334),
          t(2338),
          t(3695),
          t(322),
          t(941),
          t(5134),
          t(9858),
          t(3973),
          t(1836);
      },
    },
    a = {};
  function t(n) {
    var i = a[n];
    if (void 0 !== i) return i.exports;
    var l = (a[n] = { id: n, loaded: !1, exports: {} });
    return e[n](l, l.exports, t), (l.loaded = !0), l.exports;
  }
  (t.m = e),
    (t.d = (e, a) => {
      for (var n in a)
        t.o(a, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: a[n] });
    }),
    (t.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id
          );
        },
      }),
      e
    )),
    (t.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      t.O = (a, n, i, l) => {
        if (n) {
          l = l || 0;
          for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
          e[d] = [n, i, l];
          return;
        }
        for (var c = 1 / 0, d = 0; d < e.length; d++) {
          for (var [n, i, l] = e[d], o = !0, s = 0; s < n.length; s++)
            (!1 & l || c >= l) && Object.keys(t.O).every((e) => t.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((o = !1), l < c && (c = l));
          if (o) {
            e.splice(d--, 1);
            var f = i();
            void 0 !== f && (a = f);
          }
        }
        return a;
      };
    })(),
    (t.rv = () => "1.3.9"),
    (() => {
      var e = { 198: 0 };
      t.O.j = (a) => 0 === e[a];
      var a = (a, n) => {
          var i,
            l,
            [d, c, o] = n,
            s = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (i in c) t.o(c, i) && (t.m[i] = c[i]);
            if (o) var f = o(t);
          }
          for (a && a(n); s < d.length; s++)
            (l = d[s]), t.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return t.O(f);
        },
        n = (self.webpackChunk = self.webpackChunk || []);
      n.forEach(a.bind(null, 0)), (n.push = a.bind(null, n.push.bind(n)));
    })(),
    (t.ruid = "bundler=rspack@1.3.9");
  var n = t.O(void 0, ["87", "265"], function () {
    return t(6107);
  });
  n = t.O(n);
})();
