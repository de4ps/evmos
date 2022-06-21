(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{767:function(e,d,t){"use strict";t.r(d);var c=t(1),l=Object(c.a)({},(function(){var e=this,d=e.$createElement,t=e._self._c||d;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),t("h2",{attrs:{id:"msgsubmitevidence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msgsubmitevidence"}},[e._v("#")]),e._v(" MsgSubmitEvidence")]),e._v(" "),t("p",[e._v("Evidence is submitted through a "),t("code",[e._v("MsgSubmitEvidence")]),e._v(" message:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gTXNnU3VibWl0RXZpZGVuY2UgcmVwcmVzZW50cyBhIG1lc3NhZ2UgdGhhdCBzdXBwb3J0cyBzdWJtaXR0aW5nIGFyYml0cmFyeQovLyBFdmlkZW5jZSBvZiBtaXNiZWhhdmlvciBzdWNoIGFzIGVxdWl2b2NhdGlvbiBvciBjb3VudGVyZmFjdHVhbCBzaWduaW5nLgptZXNzYWdlIE1zZ1N1Ym1pdEV2aWRlbmNlIHsKICBzdHJpbmcgICAgICAgICAgICAgIHN1Ym1pdHRlciA9IDE7CiAgZ29vZ2xlLnByb3RvYnVmLkFueSBldmlkZW5jZSAgPSAyOwp9Cg=="}}),e._v(" "),t("p",[e._v("Note, the "),t("code",[e._v("Evidence")]),e._v(" of a "),t("code",[e._v("MsgSubmitEvidence")]),e._v(" message must have a corresponding\n"),t("code",[e._v("Handler")]),e._v(" registered with the "),t("code",[e._v("x/evidence")]),e._v(" module's "),t("code",[e._v("Router")]),e._v(" in order to be processed\nand routed correctly.")]),e._v(" "),t("p",[e._v("Given the "),t("code",[e._v("Evidence")]),e._v(" is registered with a corresponding "),t("code",[e._v("Handler")]),e._v(", it is processed\nas follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTdWJtaXRFdmlkZW5jZShjdHggQ29udGV4dCwgZXZpZGVuY2UgRXZpZGVuY2UpIGVycm9yIHsKICBpZiBfLCBvayA6PSBHZXRFdmlkZW5jZShjdHgsIGV2aWRlbmNlLkhhc2goKSk7IG9rIHsKICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcCh0eXBlcy5FcnJFdmlkZW5jZUV4aXN0cywgZXZpZGVuY2UuSGFzaCgpLlN0cmluZygpKQogIH0KICBpZiAhcm91dGVyLkhhc1JvdXRlKGV2aWRlbmNlLlJvdXRlKCkpIHsKICAgIHJldHVybiBzZGtlcnJvcnMuV3JhcCh0eXBlcy5FcnJOb0V2aWRlbmNlSGFuZGxlckV4aXN0cywgZXZpZGVuY2UuUm91dGUoKSkKICB9CgogIGhhbmRsZXIgOj0gcm91dGVyLkdldFJvdXRlKGV2aWRlbmNlLlJvdXRlKCkpCiAgaWYgZXJyIDo9IGhhbmRsZXIoY3R4LCBldmlkZW5jZSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIHNka2Vycm9ycy5XcmFwKHR5cGVzLkVyckludmFsaWRFdmlkZW5jZSwgZXJyLkVycm9yKCkpCiAgfQoKICBjdHguRXZlbnRNYW5hZ2VyKCkuRW1pdEV2ZW50KAoJCXNkay5OZXdFdmVudCgKCQkJdHlwZXMuRXZlbnRUeXBlU3VibWl0RXZpZGVuY2UsCgkJCXNkay5OZXdBdHRyaWJ1dGUodHlwZXMuQXR0cmlidXRlS2V5RXZpZGVuY2VIYXNoLCBldmlkZW5jZS5IYXNoKCkuU3RyaW5nKCkpLAoJCSksCgkpCgogIFNldEV2aWRlbmNlKGN0eCwgZXZpZGVuY2UpCiAgcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),t("p",[e._v("First, there must not already exist valid submitted "),t("code",[e._v("Evidence")]),e._v(" of the exact same\ntype. Secondly, the "),t("code",[e._v("Evidence")]),e._v(" is routed to the "),t("code",[e._v("Handler")]),e._v(" and executed. Finally,\nif there is no error in handling the "),t("code",[e._v("Evidence")]),e._v(", an event is emitted and it is persisted to state.")])],1)}),[],!1,null,null,null);d.default=l.exports}}]);