(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{828:function(e,t,o){"use strict";o.r(t);var r=o(1),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("x/recovery")]),e._v(" module allows for state transitions that return IBC tokens that were previously transferred to EVMOS back to the source chains into the source accounts with the "),o("code",[e._v("Keeper.OnRecvPacket")]),e._v(" callback. The source chain must be authorized.")]),e._v(" "),o("h2",{attrs:{id:"withdraw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#withdraw"}},[e._v("#")]),e._v(" Withdraw")]),e._v(" "),o("p",[e._v("A user performs an IBC transfer to return the tokens that they previously transferred to their Cosmos "),o("code",[e._v("secp256k1")]),e._v(" address instead of the Ethereum "),o("code",[e._v("ethsecp256k1")]),e._v(" address. The behavior is implemented using an IBC"),o("code",[e._v("OnRecvPacket")]),e._v(" callback.")]),e._v(" "),o("ol",[o("li",[e._v("A user performs an IBC transfer to their own account by sending tokens from their address on an authorized chain (e.g. "),o("code",[e._v("cosmos1...")]),e._v(") to their evmos "),o("code",[e._v("secp2561")]),e._v(" address (i.e. "),o("code",[e._v("evmos1")]),e._v(")  which holds the stuck tokens.  This is done using a "),o("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/app/ics-020-fungible-token-transfer/README.md",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("FungibleTokenPacket")]),o("OutboundLink")],1),e._v(" IBC packet.")]),e._v(" "),o("li",[e._v("Check that the withdrawal conditions are met and skip to the next middleware if any condition is not satisfied:\n"),o("ol",[o("li",[e._v("recovery is enabled globally")]),e._v(" "),o("li",[e._v("channel is authorized")]),e._v(" "),o("li",[e._v("channel is not an EVM channel (as an EVM supports "),o("code",[e._v("eth_secp256k1")]),e._v(" keys and tokens are not stuck)")]),e._v(" "),o("li",[e._v("sender and receiver address belong to the same account as recovery is only possible for transfers to a sender's own account on Evmos. Both sender and recipient addresses are therefore converted from "),o("code",[e._v("bech32")]),e._v(" to "),o("code",[e._v("sdk.AccAddress")]),e._v(".")]),e._v(" "),o("li",[e._v("the sender/recipient account is a not vesting or module account")]),e._v(" "),o("li",[e._v("recipient pubkey is not a supported key ("),o("code",[e._v("eth_secp256k1")]),e._v(", "),o("code",[e._v("amino multisig")]),e._v(", "),o("code",[e._v("ed25519")]),e._v("), as in this case tokens are not stuck and don’t require recovery")])])]),e._v(" "),o("li",[e._v("Check if sender/recipient address is blocked by the "),o("code",[e._v("x/bank")]),e._v(" module and throw an acknowledgment error to prevent further execution along with the IBC middleware stack")]),e._v(" "),o("li",[e._v("Perform recovery to transfer the recipient’s balance back to the sender address with the IBC "),o("code",[e._v("OnRecvPacket")]),e._v(" callback. There are two cases:\n"),o("ol",[o("li",[e._v("First transfer from authorized source chain:\n"),o("ol",[o("li",[e._v("sends back IBC tokens that originated from the source chain")]),e._v(" "),o("li",[e._v("sends over all Evmos native tokens")])])]),e._v(" "),o("li",[e._v("Second and further transfers from a different authorized source chain\n"),o("ol",[o("li",[e._v("only sends back IBC tokens that originated from the source chain")])])])])]),e._v(" "),o("li",[e._v("If the recipient does not have any balance, return without recovering tokens")])])])}),[],!1,null,null,null);t.default=s.exports}}]);