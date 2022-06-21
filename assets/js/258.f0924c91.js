(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{872:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"clients"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" Clients")]),e._v(" "),s("p",[e._v("A user can query the Evmos "),s("code",[e._v("x/vesting")]),e._v(" module using the CLI, gRPC, or REST.")]),e._v(" "),s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),s("p",[e._v("Find below a list of "),s("code",[e._v("evmosd")]),e._v(" commands added with the "),s("code",[e._v("x/vesting")]),e._v(" module. You can obtain the full list by using the "),s("code",[e._v("evmosd -h")]),e._v(" command.")]),e._v(" "),s("h3",{attrs:{id:"genesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[e._v("#")]),e._v(" Genesis")]),e._v(" "),s("p",[e._v("The genesis configuration commands allow users to configure the genesis "),s("code",[e._v("vesting")]),e._v(" account state.")]),e._v(" "),s("p",[s("code",[e._v("add-genesis-account")])]),e._v(" "),s("p",[e._v("Allows users to set up clawback vesting accounts at genesis, funded with an allocation of tokens, subject to clawback. Must provide a lockup periods file ("),s("code",[e._v("--lockup")]),e._v("), a vesting periods file ("),s("code",[e._v("--vesting")]),e._v("), or both.")]),e._v(" "),s("p",[e._v('If both files are given, they must describe schedules for the same total amount.\nIf one file is omitted, it will default to a schedule that immediately unlocks or vests the entire amount. The described amount of coins will be transferred from the --from address to the vesting account. Unvested coins may be "clawed back" by the funder with the clawback command. Coins may not be transferred out of the account if they are locked or unvested. Only vested coins may be staked. For an example of how to set this see '),s("a",{attrs:{href:"https://github.com/tharsis/evmos/pull/303",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXZtb3NkIGFkZC1nZW5lc2lzLWFjY291bnQgW2FkZHJlc3Nfb3Jfa2V5X25hbWVdIFtjb2luXVssW2NvaW5dXSBbZmxhZ3NdCg=="}}),e._v(" "),s("h3",{attrs:{id:"queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("query")]),e._v(" commands allow users to query "),s("code",[e._v("vesting")]),e._v(" account state.")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("balances")])])]),e._v(" "),s("p",[e._v("Allows users to query the locked, unvested and vested tokens for a given vesting account")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXZtb3NkIHF1ZXJ5IHZlc3RpbmcgYmFsYW5jZXMgW2FkZHJlc3NdIFtmbGFnc10K"}}),e._v(" "),s("h3",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("tx")]),e._v(" commands allow users to create and clawback "),s("code",[e._v("vesting")]),e._v(" account state.")]),e._v(" "),s("p",[s("strong",[s("code",[e._v("create-clawback-vesting-account")])])]),e._v(" "),s("p",[e._v("Allows users to create a new vesting account funded with an allocation of tokens, subject to clawback. Must provide a lockup periods file (--lockup), a vesting periods file (--vesting), or both.")]),e._v(" "),s("p",[e._v('If both files are given, they must describe schedules for the same total amount.\nIf one file is omitted, it will default to a schedule that immediately unlocks or vests the entire amount. The described amount of coins will be transferred from the --from address to the vesting account. Unvested coins may be "clawed back" by the funder with the clawback command. Coins may not be transferred out of the account if they are locked or unvested. Only vested coins may be staked. For an example of how to set this see '),s("a",{attrs:{href:"https://github.com/tharsis/evmos/pull/303",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXZtb3NkIHR4IHZlc3RpbmcgY3JlYXRlLWNsYXdiYWNrLXZlc3RpbmctYWNjb3VudCBbdG9fYWRkcmVzc10gW2ZsYWdzXQo="}}),e._v(" "),s("p",[s("strong",[s("code",[e._v("clawback")])])]),e._v(" "),s("p",[e._v("Allows users to create a transfer unvested amount out of a ClawbackVestingAccount. Must be requested by the original funder address (--from) and may provide a destination address (--dest), otherwise the coins return to the funder. Delegated or undelegating staking tokens will be transferred in the delegated (undelegating) state. The recipient is vulnerable to slashing, and must act to unbond the tokens if desired.")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXZtb3NkIHR4IHZlc3RpbmcgY2xhd2JhY2sgW2FkZHJlc3NdIFtmbGFnc10K"}}),e._v(" "),s("h2",{attrs:{id:"grpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),s("h3",{attrs:{id:"queries-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queries-2"}},[e._v("#")]),e._v(" Queries")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Verb")]),e._v(" "),s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("gRPC")])]),e._v(" "),s("td",[s("code",[e._v("evmos.vesting.v1.Query/Balances")])]),e._v(" "),s("td",[e._v("Gets locked, unvested and vested coins")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("GET")])]),e._v(" "),s("td",[s("code",[e._v("/evmos/vesting/v1/balances/{address}")])]),e._v(" "),s("td",[e._v("Gets locked, unvested and vested coins")])])])]),e._v(" "),s("h3",{attrs:{id:"transactions-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Verb")]),e._v(" "),s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("gRPC")])]),e._v(" "),s("td",[s("code",[e._v("evmos.vesting.v1.Msg/CreateClawbackVestingAccount")])]),e._v(" "),s("td",[e._v("Creates clawback vesting account")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("gRPC")])]),e._v(" "),s("td",[s("code",[e._v("/evmos.vesting.v1.Msg/Clawback")])]),e._v(" "),s("td",[e._v("Performs clawback")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("GET")])]),e._v(" "),s("td",[s("code",[e._v("/evmos/vesting/v1/tx/create_clawback_vesting_account")])]),e._v(" "),s("td",[e._v("Creates clawback vesting account")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("GET")])]),e._v(" "),s("td",[s("code",[e._v("/evmos/vesting/v1/tx/clawback")])]),e._v(" "),s("td",[e._v("Performs clawback")])])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);