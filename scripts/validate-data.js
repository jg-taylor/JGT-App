const data = require("../src/data.js");

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function isDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value + "T00:00:00Z"));
}

const gates = data.pf2Anchor.gates;
assert(gates.G0.date === "2026-05-20", "PF2.0 G0 date mismatch");
assert(gates.G1.date === "2026-06-10", "PF2.0 G1 date mismatch");
assert(gates.G2.date === "2026-07-08", "PF2.0 G2 date mismatch");
assert(gates.G3.date === "2026-09-16", "PF2.0 G3 date mismatch");
assert(gates.G4.date === "2026-11-11", "PF2.0 G4 date mismatch");

for (const [programme, releases] of Object.entries(data.programmeTiming)) {
  assert(Array.isArray(releases) && releases.length > 0, `${programme} has no releases`);
  for (const release of releases) {
    for (const key of ["SW_G0", "SW_G1", "SW_G2", "SW_G3", "SW_G4", "MRD", "MASS", "potentialHotfix"]) {
      if (release[key]) assert(isDate(release[key]), `${programme} ${release.release} ${key} is not yyyy-mm-dd`);
    }
    for (const build of release.builds || []) {
      for (const key of ["MRD", "SW_G4", "MASS"]) {
        if (build[key]) assert(isDate(build[key]), `${programme} ${release.release} ${build.phase} ${key} is not yyyy-mm-dd`);
      }
    }
  }
}

assert(data.featureFamilies["Media / Audio / Now Playing"].lenght === 1, "Media family should have exactly one UI owner");
assert(data.featureFamilies["Media / Audio / Now Playing"][0] === "Oli", "Media-related work must go to Oli");
assert(data.featureFamilies["Cluster / Driver Display"].includes("Jamie"), "Cluster family should include Jamie");
assert(data.featureFamilies["Cluster / Driver Display"].includes("New UI Lead"), "Cluster family should include New UI Lead");
assert(data.featureFamilies["Handover / Production Specs"].includes("Jamie"), "Handover should include Jamie");
assert(data.owners.Jamie.includes("final quality"), "Jamie should be final quality owner");
assert(data.owners.Jamie.includes("escalation"), "Jamie should be escalation owner");

const serializedFamilies = JSON.stringify(data.featureFamilies).toLowerCase();
assert(!serializedFamilies.includes("jymy"), "UX owner Jymy should not be populated in UI owner allocations");

assert(data.functionOwners["Digital Cockpit"].includes("Monisha Raju"), "Function owners should include Digital Cockpit data");
assert(data.contractWindow.start === "2026-05-15", "Contract window start mismatch");
assert(data.contractWindow.end === "2026-11-15", "Contract window end mismatch");

assert(data.pf2FeatureList.sourceFile.includes("PF2.0 FeatureList"), "PF2.0 feature list source missing");
assert(data.pf2FeatureList.producedBy === "Monisha Raju", "PF2.0 feature list producer mismatch");
assert(data.pf2FeatureList.totals.totalFeatures === 277, "PF2.0 total feature count mismatch");
assert(data.pf2FeatureList.totals.scopedFeatures === 72, "PF2.0 scoped feature count mismatch");
assert(data.pf2FeatureList.totals.requiredMaturity === "MVP Required", "PF2.0 maturity mismatch");
assert(data.pf2FeatureList.uiOwnerCounts.find(([owner, count]) => owner === "Oli" && count === 18), "PF2.0 Oli UI owner count mismatch");
assert(data.pf2FeatureList.scopedGroups.reduce((sum, group) => sum + group.count, 0) === 72, "PF2.0 scoped group totals mismatch");
assert(data.pf2FeatureList.impactCounts.soundRequired.find(([value, count]) => value === "Yes" && count === 2), "PF2.0 sound-required count mismatch");
assert(JSON.stringify(data.pf2FeatureList.scopedGroups).includes("MFL-FEAT-59"), "PF2.0 sound feature sample missing");

if (errors.length) {
  console.error("Data validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Data validation passed.");
console.log(`P35 releases: ${data.programmeTiming.P35_MY29.length}`);
console.log(`P47 releases: ${data.programmeTiming.P47_MY30.length}`);
console.log(`UI families: ${Object.keys(data.featureFamilies).length}`);
console.log(`PF2.0 scoped features: ${data.pf2FeatureList.totals.scopedFeatures}`);
