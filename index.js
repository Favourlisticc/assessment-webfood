(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    48312: function(t, n, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return a(47925)
        }
        ])
    },
    47925: function(t, n, a) {
        "use strict";
        a.r(n),
        a.d(n, {
            __N_SSP: function() {
                return r
            },
            default: function() {
                return HomePage
            }
        });
        var e = a(85893)
          , i = a(24049)
          , o = a(65076)
          , c = a(34406)
          , r = !0;
        function HomePage(t) {
            let {content: n} = t
              , a = (0,
            c.Z)("homepage");
            return (0,
            e.jsxs)(e.Fragment, {
                children: [(0,
                e.jsx)(i.Z, {
                    canonicalLink: "https://www.wholefoodsmarket.com".concat(n.data.canonicalLink),
                    imageAlt: n.data.ogData.image.imageAltText,
                    noScriptImgSrc: null == a ? void 0 : a.noScriptImgSrc,
                    pageDescription: n.data.ogData.description,
                    pageTitle: n.data.seoTitle,
                    siteName: n.data.ogData.siteName,
                    trackingPixelJSCode: null == a ? void 0 : a.javaScriptCode
                }), (0,
                e.jsx)("div", {
                    id: "home",
                    children: (0,
                    e.jsx)(o.S, {
                        data: n.data
                    })
                })]
            })
        }
    },
    34406: function(t, n, a) {
        "use strict";
        var e = a(16357);
        n.Z = t=>{
            let n = e.TRACKING_PIXELS.find(n=>n.pageName === t);
            return null != n ? n : null
        }
    }
}, function(t) {
    t.O(0, [6066, 2004, 8091, 9774, 2888, 179], function() {
        return t(t.s = 48312)
    }),
    _N_E = t.O()
}
]);
