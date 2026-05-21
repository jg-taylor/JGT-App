(function (root) {
  const data = {
    source: {
      repository: "jg-taylor/JGT-App",
      issue: 1,
      title: "Codex task: update P35/P47 Gantt timing and UI owners"
    },
    pf2Anchor: {
      programme: "P35",
      release: "MR0.0.3 / PF2.0",
      gates: {
        G0: { date: "2026-05-20", label: "Functional requirements agreed with NIO" },
        G1: { date: "2026-06-10", label: "UX/UI negotiated and wireframes submitted to NIO" },
        G2: { date: "2026-07-08", label: "NIO work" },
        G3: { date: "2026-09-16", label: "NIO out to McLaren on outcomes" },
        G4: { date: "2026-11-11", label: "Vehicle-level SW business drop" }
      },
      notes: [
        "PF2.0 requires UX/UI commitment and wireframe handover by G1.",
        "Screens/hardware dependency may force mitigation path.",
        "Driver display mitigation: 12.3 inch, 8:3, 1920x720, same active area as Job1 intent.",
        "Infotainment display: 13.2 inch, 3:4, active area 201.096 x 268.128, 1440x1920."
      ]
    },
    pf2FeatureList: {
      sourceFile: "P35 Digital Cockpit_ PF2.0 FeatureList (2).xlsx",
      sourceType: "Direct JAMA export",
      producedBy: "Monisha Raju",
      exportedAt: "2026-05-18T10:10:22Z",
      protectedSourceColumns: "Columns A-J treated as source export; chart uses derived summaries only.",
      totals: {
        totalFeatures: 277,
        scopedFeatures: 72,
        p35p47ScopedFeatures: 72,
        requiredMaturity: "MVP Required"
      },
      featureOwnerCounts: [
        ["Anastasis", 48],
        ["Matt Wassell", 9],
        ["Monisha Raju", 6],
        ["Sebastian S", 5],
        ["Iulia Brotan", 2],
        ["Olga / Dominic", 2]
      ],
      uiOwnerCounts: [
        ["Oli", 18],
        ["New Head (UI Lead)", 14],
        ["JamesGT", 13],
        ["Jamie", 11],
        ["Bruno", 9],
        ["New Head (Design System)", 4],
        ["Laura", 3]
      ],
      impactCounts: {
        uiImpact: [["Dont Know", 69], ["No", 3]],
        uxImpact: [["Yes", 66], ["No", 6]],
        soundRequired: [["No", 70], ["Yes", 2]],
        screenImpact: [["N/A", 27], ["ICS", 14], ["Blank", 13], ["IC + ICS", 11], ["IC", 7]]
      },
      soundRequiredFeatures: [
        { id: "MFL-FEAT-59", name: "WTI Chimes", featureOwner: "Matt Wassell" },
        { id: "MFL-FEAT-60", name: "Acoustic Vehicle Alerting System ( AVAS )", featureOwner: "Matt Wassell" }
      ],
      scopedGroups: [
        {
          uiOwner: "Oli",
          count: 18,
          featureOwners: ["Anastasis", "Monisha Raju", "Sebastian S"],
          screenImpact: [["ICS", 11], ["N/A", 5], ["IC + ICS", 2]],
          samples: [
            "MFL-FEAT-40 Service History & Schedule",
            "MFL-FEAT-130 DAB",
            "MFL-FEAT-132 Sirius XM and ML",
            "MFL-FEAT-133 Bluetooth Music",
            "MFL-FEAT-134 USB Music",
            "MFL-FEAT-141 Automatic Playback resumption",
            "MFL-FEAT-142 Playback controls via Hard switch or Rotaries",
            "MFL-FEAT-144 Media Cards"
          ]
        },
        {
          uiOwner: "New Head (UI Lead)",
          count: 14,
          featureOwners: ["Anastasis", "Iulia Brotan"],
          screenImpact: [["IC + ICS", 7], ["IC", 6], ["ICS", 1]],
          samples: [
            "MFL-FEAT-67 Ambient Conditions",
            "MFL-FEAT-68 Energy Information",
            "MFL-FEAT-69 Energy Flow Visualisation",
            "MFL-FEAT-70 Gear Indicator",
            "MFL-FEAT-71 Odometer",
            "MFL-FEAT-72 Power Meter",
            "MFL-FEAT-73 International Speedometer",
            "MFL-FEAT-74 Tachometer"
          ]
        },
        {
          uiOwner: "JamesGT",
          count: 13,
          featureOwners: ["Anastasis"],
          screenImpact: [["N/A", 13]],
          samples: [
            "MFL-FEAT-226 Main Driver Display",
            "MFL-FEAT-229 Main Central Display",
            "MFL-FEAT-233 Binnacle Switch Left",
            "MFL-FEAT-234 Binnacle Switch Right",
            "MFL-FEAT-235 CCSP",
            "MFL-FEAT-236 Door Panel Windows, Blinds, etc",
            "MFL-FEAT-237 Interior Frunk Switch",
            "MFL-FEAT-238 Gear Selector"
          ]
        },
        {
          uiOwner: "Jamie",
          count: 11,
          featureOwners: ["Anastasis", "Iulia Brotan"],
          screenImpact: [["N/A", 9], ["IC", 1], ["ICS", 1]],
          samples: [
            "MFL-FEAT-161 IC: General Layout",
            "MFL-FEAT-224 Basic Android Auto Wireless integration",
            "MFL-FEAT-244 P, R, N, D, Manual, EPB",
            "MFL-FEAT-245 Seat Controls on Seats",
            "MFL-FEAT-246 Steering Column Joystick control",
            "MFL-FEAT-247 Multi-Functional Steering Wheel Controls",
            "MFL-FEAT-248 Steering Wheel Paddles",
            "MFL-FEAT-249 Main Steering Wheel Stalk - Left"
          ]
        },
        {
          uiOwner: "Bruno",
          count: 9,
          featureOwners: ["Matt Wassell"],
          screenImpact: [["Blank", 7], ["ICS", 1], ["IC + ICS", 1]],
          samples: [
            "MFL-FEAT-46 Audio Arbitration",
            "MFL-FEAT-50 Audio Channel Calibration",
            "MFL-FEAT-1229 Acoustic Space Mode",
            "MFL-FEAT-1235 Echo Cancellation and Noise Reduction (ECNR)",
            "MFL-FEAT-59 WTI Chimes",
            "MFL-FEAT-60 Acoustic Vehicle Alerting System ( AVAS )",
            "MFL-FEAT-61 ECNR ( Human to Human )",
            "MFL-FEAT-62 Bluetooth Sync"
          ]
        },
        {
          uiOwner: "New Head (Design System)",
          count: 4,
          featureOwners: ["Monisha Raju"],
          screenImpact: [["Blank", 4]],
          samples: [
            "MFL-FEAT-187 English - UK",
            "MFL-FEAT-188 English - USA",
            "MFL-FEAT-200 Simplified Chinese",
            "MFL-FEAT-201 Spanish"
          ]
        },
        {
          uiOwner: "Laura",
          count: 3,
          featureOwners: ["Anastasis", "Olga / Dominic"],
          screenImpact: [["Blank", 2], ["IC + ICS", 1]],
          samples: [
            "MFL-FEAT-123 IVA: WakeUpWord - Brand Specific",
            "MFL-FEAT-124 Wakeup by Push to Talk",
            "MFL-FEAT-176 Light Mode & Automatic Transition"
          ]
        }
      ],
      notes: [
        "PF2.0 scope includes 72 P35/P47 Digital Cockpit features, all MVP Required.",
        "UI Owner values are summarized from the workbook and do not alter columns A-J.",
        "Workbook UX Owner values are not used to populate the chart UX lane."
      ]
    },
    programmeTiming: {
      P35_MY29: [
        {
          release: "MR0.0.1",
          status: "in_progress",
          SW_G0: "2026-01-30",
          SW_G1: "2026-02-11",
          SW_G2: "2026-03-04",
          SW_G3: "2026-04-15",
          phase: "LabCar",
          MRD: "2026-04-20",
          SW_G4: "2026-07-03",
          scope: ["P35 PF1.0 NT3.0 LabCar Setup"]
        },
        {
          release: "MR0.1.0",
          status: "in_progress",
          SW_G0: "2026-04-15",
          SW_G1: "2026-05-06",
          SW_G2: "2026-05-27",
          SW_G3: "2026-07-10",
          phase: "MuleCar",
          MRD: "2026-07-06",
          SW_G4: "2026-08-28",
          potentialHotfix: "2026-11-30",
          scope: ["P35 PF1.0 NT3.0 MuleCar Build"]
        },
        {
          release: "MR0.0.3",
          platformDrop: "PF2.0",
          status: "not_started",
          SW_G0: "2026-05-20",
          SW_G1: "2026-06-10",
          SW_G2: "2026-07-08",
          SW_G3: "2026-09-16",
          phase: "LabCar",
          MRD: "2026-08-14",
          SW_G4: "2026-11-11",
          scope: ["P35 PF2.0 NT3.5 LabCar Setup"]
        },
        {
          release: "MR0.2.0",
          platformDrop: "PF2.0",
          status: "not_started",
          SW_G0: "2026-07-22",
          SW_G1: "2026-08-12",
          SW_G2: "2026-09-09",
          SW_G3: "2026-11-04",
          phase: "MuleCar",
          MRD: "2026-12-30",
          SW_G4: "2026-12-16",
          scope: ["P35 PF2.0 NT3.5 MuleCar Build"]
        },
        {
          release: "MR0.3.0",
          status: "not_started",
          SW_G0: "2026-11-11",
          SW_G1: "2026-12-02",
          SW_G2: "2027-01-13",
          SW_G3: "2027-03-31",
          phase: "VP",
          MRD: "2027-06-14",
          SW_G4: "2027-06-02",
          scope: ["P35 PF3.0 VP Build"]
        },
        {
          release: "MR0.5.0",
          status: "not_started",
          SW_G0: "2027-10-27",
          SW_G1: "2027-11-17",
          SW_G2: "2027-12-08",
          SW_G3: "2028-02-22",
          phase: "PP",
          MRD: "2028-05-15",
          SW_G4: "2028-04-26",
          scope: ["P35 PF3.6 PP Build"]
        }
      ],
      P47_MY30: [
        {
          release: "MR0.2.1",
          status: "not_started",
          SW_G0: "2026-09-09",
          SW_G1: "2026-10-14",
          SW_G2: "2026-11-11",
          SW_G3: "2027-01-06",
          builds: [
            { phase: "LabCar", MRD: "2026-12-07", SW_G4: "2027-02-17" },
            { phase: "MuleCar", MRD: "2027-01-08", SW_G4: "2027-02-17" }
          ],
          scope: ["P47 PF1.0 NT3.5 MuleCar Build", "P47 PF1.0 NT3.5 LabCar Setup"]
        },
        {
          release: "MR0.4.0",
          status: "not_started",
          SW_G0: "2027-03-25",
          SW_G1: "2027-04-22",
          SW_G2: "2027-05-27",
          SW_G3: "2027-07-09",
          phase: "VP0",
          MRD: "2027-09-03",
          SW_G4: "2027-08-19",
          scope: ["P47 PF3.0 VP0 Build"]
        },
        {
          release: "MR0.4.1",
          status: "not_started",
          SW_G0: "2025-07-15",
          SW_G1: "2025-08-12",
          SW_G2: "2025-09-16",
          SW_G3: "2025-11-11",
          builds: [
            { phase: "VP1", MRD: "2026-01-21", SW_G4: "2026-01-06" },
            { phase: "VP2", MRD: "2026-06-02", SW_G4: "2026-05-25" }
          ],
          scope: ["P47 PF3.5 VP1 Build", "P47 PF3.6 VP2 Build", "VP2 only bugfix based on VP1"]
        },
        {
          release: "MR0.6.0",
          status: "not_started",
          SW_G0: "2027-03-30",
          SW_G1: "2027-04-27",
          SW_G2: "2027-06-08",
          SW_G3: "2027-07-27",
          phase: "PP",
          MRD: "2027-09-15",
          SW_G4: "2027-09-14",
          scope: ["P47 PF4.0 PP Build"]
        },
        {
          release: "MR1.1.0",
          status: "not_started",
          SW_G0: "2027-08-10",
          SW_G1: "2027-09-07",
          SW_G2: "2027-10-12",
          phase: "Job1",
          SW_G3: "2027-11-23",
          SW_G4: "2028-01-11",
          MASS: "2028-02-28",
          scope: ["P47 PF4.0 Job1"]
        }
      ]
    },
    owners: {
      Jamie: ["UI lead", "production", "handover", "final quality", "escalation"],
      Oli: ["media", "audio", "now playing", "infotainment concepts", "refinement", "animation"],
      Laura: ["clean modern UI", "minimal cluster states", "motion", "widgets", "animation"],
      Bruno: ["ADAS", "3D", "renders", "ethereal style", "motion", "production support"],
      "New UI Lead": ["senior cluster design", "concept UI", "production cluster", "animation", "3D"],
      "Design System Head": ["components", "tokens", "handover prep", "productionisation", "Figma hygiene"]
    },
    featureFamilies: {
      "Cluster / Driver Display": ["New UI Lead", "Jamie", "Laura"],
      "Tachometer / Speedometer / Odometer": ["New UI Lead", "Jamie", "Laura"],
      "Drive Modes / Powertrain Visualisation": ["New UI Lead", "Laura", "Bruno"],
      "Media / Audio / Now Playing": ["Oli"],
      "Infotainment Widgets": ["Oli", "Laura", "Design System Head"],
      "ADAS / Vehicle Visualisation": ["Bruno", "Jamie"],
      "Notifications / Alerts / Status Patterns": ["Design System Head", "Laura", "Jamie"],
      "Iconography": ["Icon Master", "Design System Head", "Jamie"],
      "Design System / Components": ["Design System Head", "Jamie"],
      "Handover / Production Specs": ["Design System Head", "Jamie", "New UI Lead"]
    },
    contractWindow: {
      start: "2026-05-15",
      end: "2026-11-15",
      label: "Contract Window 1 (In Scope)",
      optionalSupportStarts: "2026-11-16"
    },
    roleTimelineMapping: [
      { role: "Lead P50 Designer", programmeTimeline: "P50" },
      { role: "Design System Owner", programmeTimeline: "P47" },
      { role: "Icon Master", programmeTimeline: "P47" }
    ],
    functionOwners: {
      "Digital Cockpit": ["Monisha Raju", "Alex BU"],
      "Software Features": ["Adam Cox"],
      "Vehicle Feature Management": ["Rui Zhang"],
      "P35 VLM": ["Freddie Chersworth / verify spelling"],
      "P47 VLM": ["Richard Mace"],
      "Software Quality": ["Shirin Li"],
      Closures: ["Simon Gill", "Haorong Zhao"],
      Integration: ["Christian Lee", "Tom D / verify surname"],
      Manufacturing: ["Thomas Zhong", "Lee Collins", "Daniel Li"],
      "Product / UX representative": ["Charlie Box"]
    },
    assumptions: [
      "UI and UX lanes are separate; UX is intentionally blank for Jymy to populate separately.",
      "Media-related UI ownership is assigned to Oli.",
      "Cluster-related items are owned together by the New UI Lead, Jamie and Laura.",
      "Jamie is shown as production escalation and final quality owner.",
      "Function-owner names with verification notes are editable data, not brittle UI copy."
    ]
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  } else {
    root.JGT_DATA = data;
  }
})(typeof window !== "undefined" ? window : globalThis);
