(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{913:function(e,a,r){"use strict";r.r(a);var t=r(1),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",{attrs:{synopsis:""}},[e._v("Learn how to manage chain upgrades for your full and validator nodes.")]),e._v(" "),r("h2",{attrs:{id:"upgrade-categories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-categories"}},[e._v("#")]),e._v(" Upgrade Categories")]),e._v(" "),r("p",[e._v("There are 3 different categories for upgrades:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Planned or Unplanned Upgrades")]),e._v(": Chain upgrades can be scheduled at a given height through an upgrade proposal plan.")]),e._v(" "),r("li",[r("strong",[e._v("Breaking or Non-breaking Upgrades")]),e._v(": Upgrades can be API or State Machine breaking, which affects backwards compatibility. To address this, the application state or genesis file would need to be migrated in preparation for the upgrade.")]),e._v(" "),r("li",[r("strong",[e._v("Data Reset Upgrades")]),e._v(": Some upgrades will need a full data reset in order to clean the state. This can sometimes occur in the case of a rollback or hard fork.")])]),e._v(" "),r("p",[e._v("Additionally, validators can choose how to manage the upgrade according to their preferred option:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Automatic or Manual Upgrades")]),e._v(": Validator can run the "),r("code",[e._v("cosmovisor")]),e._v(" process to automatically perform the upgrade or do it manually.")])]),e._v(" "),r("h2",{attrs:{id:"planned-and-unplanned-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#planned-and-unplanned-upgrades"}},[e._v("#")]),e._v(" Planned and Unplanned Upgrades")]),e._v(" "),r("p",[e._v("Planned upgrades are coordinated scheduled upgrades that use the "),r("a",{attrs:{href:"https://docs.cosmos.network/main/modules/upgrade/",target:"_blank",rel:"noopener noreferrer"}},[e._v("upgrade module"),r("OutboundLink")],1),e._v(" logic. This facilitates smoothly upgrading Evmos to a new (breaking) software version as it automatically handles the state migration for the")]),e._v(" "),r("p",[e._v("Unplanned upgrades are upgrades where all the validators need to gracefully halt and shut down their nodes at exactly the same point in the process. This can be done by setting the "),r("code",[e._v("--halt-height")]),e._v(" flag when running the "),r("code",[e._v("evmosd start")]),e._v(" command.")]),e._v(" "),r("p",[e._v("If there are breaking changes during an unplanned upgrade (see below), validators will need to migrate the state and genesis before restarting their nodes.")]),e._v(" "),r("h3",{attrs:{id:"breaking-and-non-breaking-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-and-non-breaking-upgrades"}},[e._v("#")]),e._v(" Breaking and Non-Breaking Upgrades")]),e._v(" "),r("p",[e._v("Upgrades can be categorized as breaking or non-breaking according to the Semantic versioning ("),r("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semver"),r("OutboundLink")],1),e._v(") of the corresponding software "),r("a",{attrs:{href:"https://github.com/tharsis/evmos/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("release version"),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("i.e")]),e._v(" "),r("code",[e._v("vX.Y.Z")]),e._v("):")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Major version ("),r("code",[e._v("X")]),e._v(")")]),e._v(": backward incompatible API and state machine breaking changes.")]),e._v(" "),r("li",[r("strong",[e._v("Minor version ("),r("code",[e._v("Y")]),e._v(")")]),e._v(": new backward compatible features. These can be also be state machine breaking.")]),e._v(" "),r("li",[r("strong",[e._v("Patch version ("),r("code",[e._v("Z")]),e._v(")")]),e._v(": backwards compatible bug fixes, small refactors and improvements.")])]),e._v(" "),r("h4",{attrs:{id:"major-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#major-upgrades"}},[e._v("#")]),e._v(" Major Upgrades")]),e._v(" "),r("p",[e._v("If the new version you are upgrading to has breaking changes, you will have to:")]),e._v(" "),r("ol",[r("li",[e._v("Migrate genesis JSON")]),e._v(" "),r("li",[e._v("Migrate application state")]),e._v(" "),r("li",[e._v("Restart node")])]),e._v(" "),r("p",[e._v("This needs to be done to prevent "),r("a",{attrs:{href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing",target:"_blank",rel:"noopener noreferrer"}},[e._v("double signing or halting the chain during consensus"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("To upgrade the genesis file, you can either fetch it from a trusted source or export it locally using the "),r("code",[e._v("evmosd export")]),e._v(" command.")]),e._v(" "),r("h4",{attrs:{id:"minor-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minor-upgrades"}},[e._v("#")]),e._v(" Minor Upgrades")]),e._v(" "),r("p",[e._v("If the new version you are upgrading to has breaking changes, you will have to:")]),e._v(" "),r("ol",[r("li",[e._v("Migrate the state (if applicable)")]),e._v(" "),r("li",[e._v("Restart node")])]),e._v(" "),r("h4",{attrs:{id:"patch-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#patch-upgrades"}},[e._v("#")]),e._v(" Patch Upgrades")]),e._v(" "),r("p",[e._v("In order to update a patch:")]),e._v(" "),r("ol",[r("li",[e._v("Stop Node")]),e._v(" "),r("li",[e._v("Download new release binary manually")]),e._v(" "),r("li",[e._v("Restart node")])]),e._v(" "),r("h3",{attrs:{id:"data-reset-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-reset-upgrades"}},[e._v("#")]),e._v(" Data Reset Upgrades")]),e._v(" "),r("p",[e._v("Data Reset upgrades require node operators to fully reset the blockchain state and restart their nodes from a clean\nstate, but using the same validator keys.")]),e._v(" "),r("h3",{attrs:{id:"automatic-or-manual-upgrades"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automatic-or-manual-upgrades"}},[e._v("#")]),e._v(" Automatic or Manual Upgrades")]),e._v(" "),r("p",[e._v("With every new software release, we strongly recommend full nodes and validator operators to perform a software upgrade.")]),e._v(" "),r("p",[e._v("You can upgrade your node by either:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/validators/upgrades/automated.html"}},[e._v("automatically")]),e._v(" bumping the software version and restart the node once the upgrade occurs, or")],1),e._v(" "),r("li",[e._v("download the new binary and perform a "),r("RouterLink",{attrs:{to:"/validators/upgrades/manual.html"}},[e._v("manual upgrade")])],1)]),e._v(" "),r("p",[e._v("Follow the links in the options above to learn how to upgrade your node according to your preferred option.")])])}),[],!1,null,null,null);a.default=o.exports}}]);