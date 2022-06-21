(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{896:function(t,e,o){"use strict";o.r(e);var a=o(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"submit-a-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submit-a-proposal"}},[t._v("#")]),t._v(" Submit a Proposal")]),t._v(" "),o("p",[t._v("If you have a final draft of your proposal ready to submit, you may want to push your proposal live on the testnet first. These are the three primary steps to getting your proposal live on-chain.")]),t._v(" "),o("ol",[o("li",[t._v("("),o("strong",[t._v("Optional")]),t._v(") "),o("a",{attrs:{href:"#hosting-supplementary-materials"}},[t._v("Hosting supplementary materials")]),t._v(" for your proposal with IPFS (InterPlanetary File System)")]),t._v(" "),o("li",[o("a",{attrs:{href:"#formatting-the-json-file-for-the-governance-proposal"}},[t._v("Formatting the JSON file")]),t._v(" for the governance proposal transaction that will be on-chain")]),t._v(" "),o("li",[o("a",{attrs:{href:"#sending-the-transaction-that-submits-your-governance-proposal"}},[t._v("Sending the transaction")]),t._v(" that submits your governance proposal on-chain")])]),t._v(" "),o("h2",{attrs:{id:"hosting-supplementary-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hosting-supplementary-materials"}},[t._v("#")]),t._v(" Hosting supplementary materials")]),t._v(" "),o("p",[t._v("In general we try to minimize the amount of data pushed to the blockchain.\nHence, detailed documentation about a proposal is usually hosted on a separate\ncensorship resistant data-hosting platform, like IPFS.")]),t._v(" "),o("p",[t._v("Once you have drafted your proposal, ideally as a Markdown file, you\ncan upload it to the IPFS network:")]),t._v(" "),o("ol",[o("li",[t._v("either by "),o("a",{attrs:{href:"https://ipfs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("running an IPFS node and the IPFS software"),o("OutboundLink")],1),t._v(", or")]),t._v(" "),o("li",[t._v("using a service such as "),o("a",{attrs:{href:"https://pinata.cloud",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pinata.cloud"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v('Ensure that you "pin" the file so that it continues to be available on the network. You should get a URL like this: '),o("code",[t._v("https://ipfs.io/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD")]),t._v("\nThe value "),o("code",[t._v("QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD")]),t._v(" is called the "),o("code",[t._v("CID")]),t._v(" of\nyour file - it is effectively the file's hash.")]),t._v(" "),o("p",[t._v("If you uploaded a markdown file, you can use the IPFS markdown viewer to render\nthe document for better viewing. Links for the markdown viewer look like\n"),o("code",[t._v("https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/<CID>")]),t._v(", where "),o("code",[t._v("<CID>")]),t._v(" is your CID. For instance the link above would be:\n"),o("a",{attrs:{href:"https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/QmbkQNtCAdR1CNbFE8ujub2jcpwUcmSRpSCg8gVWrTHSWD",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ipfs.io/ipfs/QmTk...HSWD"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Share the URL with others and verify that your file is publicly accessible.")]),t._v(" "),o("p",[t._v("The reason we use IPFS is that it is a decentralized means of storage, making it resistant to censorship or single points of failure. This increases the likelihood that the file will remain available in the future.")]),t._v(" "),o("h2",{attrs:{id:"formatting-the-json-file-for-the-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#formatting-the-json-file-for-the-governance-proposal"}},[t._v("#")]),t._v(" Formatting the JSON file for the governance proposal")]),t._v(" "),o("p",[t._v("Prior to sending the transaction that submits your proposal on-chain, you must create a JSON file. This file will contain the information that will be stored on-chain as the governance proposal. Begin by creating a new text (.txt) file to enter this information. Use "),o("RouterLink",{attrs:{to:"/validators/governance/best_practices.html"}},[t._v("these best practices")]),t._v(" as a guide for the contents of your proposal. When you're done, save the file as a .json file. See the examples that follow to help format your proposal.")],1),t._v(" "),o("p",[t._v("Once on-chain, most people will rely upon network explorers to interpret this information with a graphical user interface (GUI).")]),t._v(" "),o("h2",{attrs:{id:"sending-the-transaction-that-submits-your-governance-proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sending-the-transaction-that-submits-your-governance-proposal"}},[t._v("#")]),t._v(" Sending the transaction that submits your governance proposal")]),t._v(" "),o("p",[t._v("For information on how to use "),o("code",[t._v("evmosd")]),t._v(" binary to submit an on-chain proposal through the governance module, please refer to the "),o("RouterLink",{attrs:{to:"/validators/quickstart/binary.html"}},[t._v("quickstart")]),t._v(" documentation.")],1),t._v(" "),o("h3",{attrs:{id:"cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),o("p",[t._v("This is the command format for using "),o("code",[t._v("evmosd")]),t._v(" (the command-line interface) to submit your proposal on-chain:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZtb3NkIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgXAogIC0tdGl0bGU9Jmx0O3RpdGxlJmd0OyBcCiAgLS1kZXNjcmlwdGlvbj0mbHQ7ZGVzY3JpcHRpb24mZ3Q7IFwKICAtLXR5cGU9JnF1b3Q7VGV4dCZxdW90OyBcCiAgLS1kZXBvc2l0PSZxdW90OzEwMDAwMDBhZXZtb3MmcXVvdDsgXAogIC0tZnJvbT0mbHQ7bXlrZXkmZ3Q7IFwKICAtLWNoYWluLWlkPSZsdDtjaGFpbl9pZCZndDsKICAtLW5vZGUgJmx0O2FkZHJlc3MmZ3Q7Cg=="}}),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[t._v("Use the "),o("code",[t._v("evmos tx gov --help")]),t._v(" flag to get more info about the governance commands")])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("evmosd")]),t._v(" is the command-line interface client that is used to send transactions and query Evmos")]),t._v(" "),o("li",[o("code",[t._v("tx gov submit-proposal param-change")]),t._v(" indicates that the transaction is submitting a parameter-change proposal")]),t._v(" "),o("li",[o("code",[t._v("--from mykey")]),t._v(" is the account key that pays the transaction fee and deposit amount")]),t._v(" "),o("li",[o("code",[t._v("--gas 500000")]),t._v(" is the maximum amount of gas permitted to be used to process the transaction\n"),o("ul",[o("li",[t._v("the more content there is in the description of your proposal, the more gas your transaction will consume")]),t._v(" "),o("li",[t._v("if this number isn't high enough and there isn't enough gas to process your transaction, the transaction will fail")]),t._v(" "),o("li",[t._v("the transaction will only use the amount of gas needed to process the transaction")])])]),t._v(" "),o("li",[o("code",[t._v("--fees")]),t._v(" is a flat-rate incentive for a validator to process your transaction\n"),o("ul",[o("li",[t._v("the network still accepts zero fees, but many nodes will not transmit your transaction to the network without a minimum fee")]),t._v(" "),o("li",[t._v("many nodes (including the Figment node) use a minimum fee to desincentivize transaction spamming")]),t._v(" "),o("li",[t._v("7500aevmos is equal to 0.0075 EVMOS")])])]),t._v(" "),o("li",[o("code",[t._v("--chain-id evmos_90001-2")]),t._v(" is Evmos Mainnet. For current and past chain-id's, please look at the "),o("a",{attrs:{href:"https://github.com/tharsis/mainnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("tharsis/mainnet resource"),o("OutboundLink")],1),t._v(" "),o("ul",[o("li",[t._v("the testnet chain ID is "),o("a",{attrs:{href:"https://testnet.mintscan.io/evmos",target:"_blank",rel:"noopener noreferrer"}},[t._v("evmos_9000-4"),o("OutboundLink")],1),t._v(". For current and past testnet information, please look at the "),o("a",{attrs:{href:"https://github.com/tharsis/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repository"),o("OutboundLink")],1)])])]),t._v(" "),o("li",[o("code",[t._v("--node")]),t._v(" is using a full node to send the transaction to the Evmos Mainnet")])]),t._v(" "),o("h3",{attrs:{id:"verifying-your-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifying-your-transaction"}},[t._v("#")]),t._v(" Verifying your transaction")]),t._v(" "),o("p",[t._v("After posting your transaction, your command line interface ("),o("code",[t._v("evmosd")]),t._v(") will provide you with the transaction's hash, which you can either query using evmosd or by searching the transaction hash using "),o("a",{attrs:{href:"https://www.mintscan.io/evmos",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mintscan"),o("OutboundLink")],1),t._v(" or any block explorer.")]),t._v(" "),o("h3",{attrs:{id:"depositing-funds-after-a-proposal-has-been-submitted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#depositing-funds-after-a-proposal-has-been-submitted"}},[t._v("#")]),t._v(" Depositing funds after a proposal has been submitted")]),t._v(" "),o("p",[t._v("Sometimes a proposal is submitted without having the minimum token amount deposited yet. In these cases you would want to be able to deposit more tokens to get the proposal into the voting stage. In order to deposit tokens, you'll need to know what your proposal ID is after you've submitted your proposal. You can query all proposals by the following command:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZtb3NkIHEgZ292IHByb3Bvc2Fscwo="}}),t._v(" "),o("p",[t._v("If there are a lot of proposals on the chain already, you can also filter by your own address. For the proposal above, that would be:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZtb3NkIHEgZ292IHByb3Bvc2FscyAtLWRlcG9zaXRvciBldm1vczFoeHY3bXB6dHZsbjQ1ZWdoZXo2ZXZ3MnlwY3c0dmptc21yOGNkeAo="}}),t._v(" "),o("p",[t._v("Once you have the proposal ID, this is the command to deposit extra tokens:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXZtb3NkIHR4IGdvdiBkZXBvc2l0ICZsdDtwcm9wb3NhbC1pZCZndDsgJmx0O2RlcG9zaXQmZ3Q7IC0tZnJvbSAmbHQ7bmFtZSZndDsK"}}),t._v(" "),o("p",[t._v("In our case above, the "),o("code",[t._v("<proposal-id>")]),t._v(" would be 59 as queried earlier.\nThe "),o("code",[t._v("<deposit>")]),t._v(" is written as "),o("code",[t._v("500000aevmos")]),t._v(", just like the example above.")]),t._v(" "),o("h3",{attrs:{id:"submit-your-proposal-to-the-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#submit-your-proposal-to-the-testnet"}},[t._v("#")]),t._v(" Submit your proposal to the testnet")]),t._v(" "),o("p",[t._v("You may want to submit your proposal to the testnet chain before the mainnet for a number of reasons:")]),t._v(" "),o("ol",[o("li",[t._v("To see what the proposal description will look like")]),t._v(" "),o("li",[t._v("To signal that your proposal is about to go live on the mainnet")]),t._v(" "),o("li",[t._v("To share what the proposal will look like in advance with stakeholders")]),t._v(" "),o("li",[t._v("To test the functionality of the governance features")])]),t._v(" "),o("p",[t._v("Submitting your proposal to the testnet increases the likelihood that you will discover a flaw before deploying your proposal on mainnet. A few things to keep in mind:")]),t._v(" "),o("ul",[o("li",[t._v("you'll need testnet tokens for your proposal (ask around for a faucet)")]),t._v(" "),o("li",[t._v("the parameters for testnet proposals are different (eg. voting period timing, deposit amount, deposit denomination)")]),t._v(" "),o("li",[t._v("the deposit denomination is in 'atevmos' instead of 'aevmos'")])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);