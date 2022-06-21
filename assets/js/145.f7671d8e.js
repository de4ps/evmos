(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{760:function(e,t,o){"use strict";o.r(t);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),o("p",[e._v("The erc20 module implements transaction hooks from the EVM in order to trigger token pair conversion.")]),e._v(" "),o("h2",{attrs:{id:"evm-hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#evm-hooks"}},[e._v("#")]),e._v(" EVM Hooks")]),e._v(" "),o("p",[e._v("The EVM hooks allows users to convert ERC20s to Cosmos Coins by sending an Ethereum tx transfer to the module account address. This enables native conversion of tokens via Metamask and EVM-enabled wallets for both token pairs that have been registered through a native Cosmos coin or an ERC20 token. Note that additional coin/token balance checks for sender and receiver to prevent malicious contract behaviour (as performed in the "),o("RouterLink",{attrs:{to:"/modules/erc20/03_state_transitions.html#21-erc20-to-coin"}},[o("code",[e._v("ConvertERC20")]),e._v(" msg")]),e._v(") cannot be done here, as the balance prior to the transaction is not avaialble in the hook.")],1),e._v(" "),o("h3",{attrs:{id:"registered-coin-erc20-to-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registered-coin-erc20-to-coin"}},[e._v("#")]),e._v(" Registered Coin: ERC20 to Coin")]),e._v(" "),o("ol",[o("li",[e._v("User transfers ERC20 tokens to the "),o("code",[e._v("ModuleAccount")]),e._v(" address to escrow them")]),e._v(" "),o("li",[e._v("Check if the ERC20 Token that was transferred from the sender is a native ERC20 or a native Cosmos Coin by looking at the "),o("a",{attrs:{href:"https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378#:~:text=A%20log%20record%20can%20be,or%20a%20change%20of%20ownership.&text=Each%20log%20record%20consists%20of,going%20on%20in%20an%20event",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum event logs"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("If the token contract address corresponds to the ERC20 representation of a native Cosmos Coin\n"),o("ol",[o("li",[e._v("Call "),o("code",[e._v("burn()")]),e._v(" ERC20 method from the  "),o("code",[e._v("ModuleAccount")]),e._v(". Note that this is the same as 1.2, but since the tokens are already on the ModuleAccount balance, we burn the tokens from the module address instead of calling "),o("code",[e._v("burnFrom()")]),e._v(". Also note that we don't need to mint because "),o("RouterLink",{attrs:{to:"/modules/erc20/03_state_transitions.html#11-coin-to-erc20"}},[e._v("1.1 coin to erc20")]),e._v(" escrows the coin")],1),e._v(" "),o("li",[e._v("Transfer Cosmos Coin to the bech32 account address of the sender hex address")])])])]),e._v(" "),o("h3",{attrs:{id:"registered-erc20-erc20-to-coin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registered-erc20-erc20-to-coin"}},[e._v("#")]),e._v(" Registered ERC20: ERC20 to Coin")]),e._v(" "),o("ol",[o("li",[e._v("User transfers coins to the"),o("code",[e._v("ModuleAccount")]),e._v(" to escrow them")]),e._v(" "),o("li",[e._v("Check if the ERC20 Token that was transferred is a native ERC20 or a native cosmos coin")]),e._v(" "),o("li",[e._v("If the token contract address is a native ERC20 token\n"),o("ol",[o("li",[e._v("Mint Cosmos Coin")]),e._v(" "),o("li",[e._v("Transfer Cosmos Coin to the bech32 account address of the sender hex")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);