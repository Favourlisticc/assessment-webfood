"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8091], {
    46856: function(e, t, a) {
        a.d(t, {
            O: function() {
                return CCCommonQuestions
            }
        });
        var n = a(85893)
          , l = a(67294);
        let s = (0,
        l.createContext)({});
        var accordionContext = function(e) {
            let {preExpanded: t=[""], allowMultipleExpandedPanels: a=!1, children: i} = e
              , [c,o] = (0,
            l.useState)(t)
              , [r,d] = (0,
            l.useState)(null);
            return (0,
            n.jsx)(s.Provider, {
                value: {
                    expandedPanels: c,
                    allowMultipleExpandedPanels: a,
                    openPanelRef: r,
                    setOpenPanelRef: d,
                    updateActivePanels: e=>{
                        let t = c.includes(e) ? c.filter(t=>t !== e) : a ? [...c, e] : [e];
                        o(t)
                    }
                },
                children: i
            })
        };
        function Accordion(e) {
            let {allowMultipleExpandedPanels: t, className: a="accordion", preExpanded: l, ...s} = e;
            return (0,
            n.jsx)(accordionContext, {
                preExpanded: l,
                allowMultipleExpandedPanels: t,
                children: (0,
                n.jsx)("div", {
                    className: a,
                    "data-testid": "w-cms-accordion-wrapper",
                    "data-accordion-component": "Accordion",
                    ...s
                })
            })
        }
        function AccordionItem(e) {
            let {uuid: t, className: a="accordion__item", ...i} = e
              , {openPanelRef: c} = (0,
            l.useContext)(s);
            return (0,
            l.useLayoutEffect)(()=>{
                var e;
                "scrollRestoration"in window.history && (window.history.scrollRestoration = "manual"),
                null == c || null === (e = c.current) || void 0 === e || e.scrollIntoView({
                    behavior: "smooth"
                })
            }
            , [c]),
            (0,
            n.jsx)("div", {
                "data-accordion-component": "AccordionItem",
                className: a,
                ...i
            })
        }
        var i = a(16357);
        function getSiblingButtons(e) {
            let t = function getClosestAccordion(e) {
                return e && (e.matches('[data-accordion-component="Accordion"]') ? e : getClosestAccordion(e.parentElement))
            }(e);
            return t && Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))
        }
        function AccordionItemButton(e) {
            let {className: t="accordion__button", uuid: a, ...c} = e
              , {expandedPanels: o, updateActivePanels: r} = (0,
            l.useContext)(s);
            return (0,
            n.jsx)("div", {
                "aria-controls": "open-panel--".concat(a),
                "aria-expanded": o.some(e=>e === a),
                className: t,
                "data-accordion-component": "AccordionItemButton",
                "data-testid": "accordion-button",
                id: "accordion-button--".concat(a),
                onClick: ()=>r(a),
                onKeyDown: e=>{
                    let t = e.key;
                    if ((t === i.KEYS.ENTER || t === i.KEYS.SPACE || t === i.KEYS.SPACE_DEPRECATED) && (e.preventDefault(),
                    r(a)),
                    e.target instanceof HTMLElement)
                        switch (t) {
                        case i.KEYS.HOME:
                            e.preventDefault(),
                            function(e) {
                                var t;
                                let a = null !== (t = getSiblingButtons(e)) && void 0 !== t ? t : []
                                  , n = a[0];
                                n && n.focus()
                            }(e.target);
                            break;
                        case i.KEYS.END:
                            e.preventDefault(),
                            function(e) {
                                var t;
                                let a = null !== (t = getSiblingButtons(e)) && void 0 !== t ? t : []
                                  , n = a[a.length - 1];
                                n && n.focus()
                            }(e.target);
                            break;
                        case i.KEYS.LEFT_ARROW:
                        case i.KEYS.PAGE_UP:
                            e.preventDefault(),
                            function(e) {
                                var t;
                                let a = null !== (t = getSiblingButtons(e)) && void 0 !== t ? t : []
                                  , n = a.indexOf(e);
                                if (-1 !== n) {
                                    let e = a[n - 1];
                                    e && e.focus()
                                }
                            }(e.target);
                            break;
                        case i.KEYS.RIGHT_ARROW:
                        case i.KEYS.PAGE_DOWN:
                            e.preventDefault(),
                            function(e) {
                                var t;
                                let a = null !== (t = getSiblingButtons(e)) && void 0 !== t ? t : []
                                  , n = a.indexOf(e);
                                if (-1 !== n) {
                                    let e = a[n + 1];
                                    e && e.focus()
                                }
                            }(e.target)
                        }
                }
                ,
                role: "button",
                tabIndex: 0,
                ...c
            })
        }
        function AccordionItemHeading(e) {
            let {children: t} = e;
            return (0,
            n.jsx)("div", {
                "data-accordion-component": "AccordionItemHeading",
                "aria-level": 3,
                className: "accordion_heading",
                role: "heading",
                children: t
            })
        }
        function AccordionItemPanel(e) {
            let {className: t="accordion__panel", uuid: a, ...i} = e
              , {expandedPanels: c, setOpenPanelRef: o} = (0,
            l.useContext)(s)
              , r = !c.some(e=>e === a)
              , d = (0,
            l.useRef)(null);
            return (0,
            l.useEffect)(()=>{
                r || o(d)
            }
            , [r, o]),
            r ? null : (0,
            n.jsx)("div", {
                "aria-labelledby": "accordion-button--".concat(a),
                className: t,
                "data-accordion-component": "AccordionItemPanel",
                "data-testid": a,
                id: "open-panel--".concat(a),
                role: "region",
                ...i
            })
        }
        var c = a(10544);
        function CCCommonQuestions(e) {
            let {ccQuestionId: t, commonQuestions: a, title: l} = e;
            return (0,
            n.jsx)("div", {
                className: "w-cms-grid",
                children: (0,
                n.jsxs)("div", {
                    className: "accordion-group",
                    children: [(0,
                    n.jsx)("h2", {
                        className: "w-font-subhead-sm__sans common-questions__title",
                        children: l || "Common questions"
                    }), (0,
                    n.jsx)(Accordion, {
                        preExpanded: [t || ""],
                        children: (0,
                        n.jsx)(n.Fragment, {
                            children: a.map(e=>(0,
                            n.jsxs)(AccordionItem, {
                                uuid: e.id,
                                id: e.id,
                                children: [(0,
                                n.jsx)(AccordionItemHeading, {
                                    children: (0,
                                    n.jsxs)(AccordionItemButton, {
                                        uuid: e.id,
                                        children: [e.question, (0,
                                        n.jsxs)("i", {
                                            className: "w-accordion-icon",
                                            "aria-hidden": !0,
                                            children: [(0,
                                            n.jsx)("span", {}), (0,
                                            n.jsx)("span", {})]
                                        })]
                                    })
                                }), (0,
                                n.jsxs)(AccordionItemPanel, {
                                    uuid: e.id,
                                    children: [(0,
                                    n.jsx)(c._, {
                                        content: e.answer.bodyList
                                    }), (0,
                                    n.jsxs)("a", {
                                        href: "#".concat(e.id),
                                        className: "w-link-icon",
                                        children: [(0,
                                        n.jsx)("span", {
                                            className: "w-visually-hidden",
                                            children: "Direct link to question: ".concat(e.question)
                                        }), (0,
                                        n.jsx)("i", {
                                            className: "w-link-chain-icon",
                                            "aria-hidden": !0
                                        })]
                                    })]
                                })]
                            }, e.id))
                        })
                    })]
                })
            })
        }
    },
    10544: function(e, t, a) {
        a.d(t, {
            _: function() {
                return ArticleComponentMapper
            }
        });
        var n = a(85893)
          , l = a(67294)
          , s = a(21805);
        let ArticleComponentMapper = e=>{
            let {content: t} = e
              , a = []
              , i = ""
              , validateElementType = e=>{
                var t, a, n, l, s, i, c, o, r, d, m, u, h, x;
                let setTextGroup = e=>(null == e ? void 0 : e.type) === "listText" ? e.listText : validateElementType(e)
                  , setText = e=>(null == e ? void 0 : e.type) === "listText" ? "<li><p>".concat(e.listText, "</p></li>") : "<li><p>".concat(validateElementType(e), "</p></li>")
                  , buildList = e=>{
                    let t = e.listRichTextElements.length > 1;
                    return t ? "<li><p>".concat(e.listRichTextElements.map(e=>setTextGroup(e)).join(""), "</p></li>") : e.listRichTextElements.map(e=>setText(e)).join("")
                }
                ;
                switch (null == e ? void 0 : e.type) {
                case "rawView":
                    return null === (t = e.rawView) || void 0 === t ? void 0 : t.items[0];
                case "linkRichTextElement":
                    {
                        let t = (null === (a = e.linkRichTextElement) || void 0 === a ? void 0 : a.link.target.toLowerCase().includes("new")) ? "_blank" : "_self";
                        return "<a href=".concat(null === (n = e.linkRichTextElement) || void 0 === n ? void 0 : n.link.url, " target=").concat(t, " class='w-link' rel='noopener noreferrer' data-csa-c-content-id='").concat(null === (l = e.linkRichTextElement) || void 0 === l ? void 0 : l.linkText, "' data-csa-c-slot-id='Hyperlink' data-csa-c-type='link'><span>").concat(null === (s = e.linkRichTextElement) || void 0 === s ? void 0 : s.linkText, "</span>").concat("_blank" === t ? '<span class="sr-only"> opens in a new tab</span>' : "", "</a>")
                    }
                case "h2RichTextElement":
                    return '<h2 className="w-cms--body__heading">'.concat(null === (i = e.h2RichTextElement) || void 0 === i ? void 0 : i.text, "</h2>");
                case "h3RichTextElement":
                    return '<h3 className="w-cms--body__heading">'.concat(null === (c = e.h3RichTextElement) || void 0 === c ? void 0 : c.text, "</h3>");
                case "olRichTextElement":
                    {
                        let t = null === (o = e.olRichTextElement) || void 0 === o ? void 0 : o.listOfListOfElements.map(e=>buildList(e));
                        return "<ol>".concat(null == t ? void 0 : t.join(""), "</ol>")
                    }
                case "ulRichTextElement":
                    {
                        let t = null === (r = e.ulRichTextElement) || void 0 === r ? void 0 : r.listOfListOfElements.map(e=>buildList(e));
                        return "<ul>".concat(null == t ? void 0 : t.join(""), "</ul>")
                    }
                case "telephoneRichTextElement":
                    return '<a class="w-link" href="tel:'.concat(null === (d = e.telephoneRichTextElement) || void 0 === d ? void 0 : d.phoneNumber.replace(/-/g, ""), '" aria-label="').concat(null === (m = e.telephoneRichTextElement) || void 0 === m ? void 0 : m.phoneNumber.split("").join(" ").replace(/ -/g, "."), '."><span>').concat(null === (u = e.telephoneRichTextElement) || void 0 === u ? void 0 : u.linkText, "</span></a>");
                case "emailRichTextElement":
                    return '<a class="w-link" href="mailto:'.concat(null === (h = e.emailRichTextElement) || void 0 === h ? void 0 : h.emailAddress, '" target="_self"><span>').concat(null === (x = e.emailRichTextElement) || void 0 === x ? void 0 : x.emailAddress, "</span></a>");
                default:
                    return ""
                }
            }
            ;
            return (()=>{
                let buildElements = e=>e.map(e=>validateElementType(e)).reduce((e,t)=>e + t, "");
                return null == t || t.forEach(e=>e.component ? a.push({
                    type: "component",
                    component: e.component
                }) : e.elements ? 1 === e.elements.length && "ulRichTextElement" !== e.elements[0].type && "olRichTextElement" !== e.elements[0].type ? a.push({
                    type: "component",
                    component: e.elements[0]
                }) : (i = buildElements(e.elements),
                a.push({
                    type: "element",
                    element: i
                })) : a),
                a.map((e,t)=>"component" === e.type ? (0,
                n.jsx)(l.Fragment, {
                    children: (0,
                    n.jsx)(s.Z, {
                        content: [e.component],
                        wrapperClass: "w-cms--article-component"
                    })
                }, t) : (0,
                n.jsx)("section", {
                    className: "w-cms-grid w-cms--article-component",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms-richtext",
                        dangerouslySetInnerHTML: {
                            __html: e.element
                        }
                    })
                }, t))
            }
            )()
        }
    },
    65076: function(e, t, a) {
        a.d(t, {
            S: function() {
                return Home
            }
        });
        var n = a(85893)
          , l = a(67294)
          , s = a(92455)
          , i = a(41483);
        function BannerWithCTA(e) {
            let {bgImageDesktop: t, bgImageMobile: a, bgImageTablet: l, children: s, pageType: c} = e;
            return (0,
            n.jsxs)("div", {
                className: "w-cms--banner-with-cta w-cms-grid ".concat("HOME" === c ? "home" : "landing"),
                children: [(0,
                n.jsxs)("div", {
                    className: "w-cms--banner-with-cta__image-group",
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-cms--banner-with-cta__image w-desktop-only",
                        style: {
                            backgroundImage: "url(".concat(t, ")")
                        }
                    }), (0,
                    n.jsx)("div", {
                        className: "w-cms--banner-with-cta__image w-tablet-only",
                        style: {
                            backgroundImage: "url(".concat(l, ")")
                        }
                    }), (0,
                    n.jsx)("div", {
                        className: "w-cms--banner-with-cta__image w-mobile-only",
                        style: {
                            backgroundImage: "url(".concat(a, ")")
                        }
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--banner-with-cta__panel",
                    children: (0,
                    n.jsx)(i.Z, {
                        color: "white",
                        children: s
                    })
                })]
            })
        }
        var c = a(2055)
          , o = a(64656)
          , r = a(93967)
          , d = a.n(r)
          , SubNav_SubNav = function(e) {
            let {linkText: t, url: a, target: l, image: {desktopImageUrl: s, mobileImageUrl: i}} = e;
            return (0,
            n.jsxs)("a", {
                href: a,
                target: l,
                className: "mx-2 flex rounded-lg bg-aioli decoration-chard hover:underline mobile:flex-wrap mobile:focus:underline",
                ...(0,
                o.F)({
                    contentId: t,
                    contentSlotId: "Home subnav",
                    contentType: "CTA"
                }),
                "aria-label": t,
                children: [(0,
                n.jsx)("div", {
                    className: "flex flex-1 items-end p-4 text-left mobile:p-2",
                    children: (0,
                    n.jsx)("span", {
                        className: d()("bds--heading-4 mobile:bds--heading-6 max-w-[150px] text-chard mobile:max-w-[65px] mobile:focus:underline", {
                            subnav: "_blank" === l
                        }),
                        children: t
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "flex object-cover mix-blend-multiply",
                    children: [(0,
                    n.jsx)("img", {
                        src: s,
                        className: "w-[136px] mobile:hidden",
                        alt: ""
                    }), (0,
                    n.jsx)("img", {
                        src: i,
                        className: "w-[74px] tablet:hidden desktop:hidden",
                        alt: ""
                    })]
                })]
            })
        }
          , m = a(77058);
        function SubNavCatalog() {
            let {cateringLinkData: {shouldOpenNewTab: e, url: t}} = (0,
            l.useContext)(m.Z);
            return (0,
            n.jsx)("div", {
                className: "grid gap-3 mobile:grid-cols-2 mobile:py-4 tablet:grid-cols-2 desktop:grid-cols-4",
                children: c.sF.map(a=>{
                    let {linkText: l, url: s, target: i, image: c} = a;
                    return (0,
                    n.jsx)(SubNav_SubNav, {
                        linkText: l,
                        url: isCatering(l) ? t : s,
                        target: isCatering(l) ? e ? "_blank" : "_self" : i,
                        image: c
                    }, l)
                }
                )
            })
        }
        function isCatering(e) {
            return "Order Holiday Catering" === e
        }
        var u = a(40359)
          , h = a(21805);
        function Home(e) {
            var t;
            let {data: a} = e
              , {heroImage: l, welcomeMessage: i, seoTitle: o, headline: r, subHeadline: d, headlineCta: m, content: x} = a
              , p = u.constants.CONTENT_ASSET_LOCATION + (null == l ? void 0 : l.desktopImagePath)
              , v = u.constants.CONTENT_ASSET_LOCATION + (null == l ? void 0 : l.mobileImagePath)
              , w = u.constants.CONTENT_ASSET_LOCATION + (null == i ? void 0 : i.mobileImagePath)
              , g = u.constants.CONTENT_ASSET_LOCATION + (null == l ? void 0 : l.tabletImagePath)
              , T = i && (0,
            n.jsx)("div", {
                className: "w-cms--homepage-welcome w-desktop-only",
                style: {
                    backgroundImage: "url(".concat(w, ")")
                },
                children: (0,
                n.jsx)("h2", {
                    className: "w-cms--font-hero__sans",
                    children: null == i ? void 0 : i.caption
                })
            });
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsxs)("section", {
                    className: "w-cms--homepage-banner",
                    children: [(0,
                    n.jsx)("h1", {
                        className: "w-visually-hidden",
                        children: o
                    }), T, (0,
                    n.jsx)("div", {
                        className: "w-mobile-only",
                        children: (0,
                        n.jsx)(SubNavCatalog, {})
                    }), (0,
                    n.jsxs)(BannerWithCTA, {
                        bgImageDesktop: p,
                        bgImageMobile: v,
                        bgImageTablet: g,
                        pageType: "HOME",
                        children: [(0,
                        n.jsx)("h2", {
                            className: "w-cms--font-superhero",
                            children: r
                        }), (0,
                        n.jsx)("p", {
                            className: "w-cms--home__sub-header-text",
                            children: d
                        }), (0,
                        n.jsx)(s.Z, {
                            disclaimer: null == m ? void 0 : m.disclaimer,
                            headerLevel: 2,
                            lengthCheck: !0,
                            staticLink: !0,
                            styledLink: {
                                ariaLabel: null == m ? void 0 : m.ariaLabel,
                                linkText: null == m ? void 0 : m.linkText,
                                showIcon: null == m ? void 0 : m.showIcon,
                                style: null == m ? void 0 : m.style,
                                target: null == m ? void 0 : m.target,
                                url: null !== (t = null == m ? void 0 : m.url) && void 0 !== t ? t : ""
                            },
                            csaContentId: null == m ? void 0 : m.linkText,
                            csaContentType: c.ei.cta,
                            csaSlotId: "Home Marquee_".concat(r)
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "mt-6 mobile:hidden",
                        children: (0,
                        n.jsx)(SubNavCatalog, {})
                    })]
                }), (0,
                n.jsx)(h.Z, {
                    content: x
                })]
            })
        }
    },
    21805: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return ComponentMapper
            }
        });
        var n = a(85893)
          , l = a(67294)
          , s = a(92455)
          , i = a(23876)
          , c = a(22004)
          , o = a.n(c)
          , r = a(46066)
          , d = a(79759)
          , m = a(64656)
          , u = a(2055)
          , h = a(29910)
          , x = a(40359);
        let p = o();
        function Carousel(e) {
            let {description: t="", header: a="", items: s, showCaptions: i=!1, style: c} = e
              , [o,v] = (0,
            l.useState)(0)
              , w = (null == c ? void 0 : c.toLowerCase()) === "large"
              , g = {
                arrows: !0,
                beforeChange: (e,t)=>v(t),
                centerMode: !0,
                className: "w-cms--carousel__slider",
                dots: !0,
                focusOnSelect: !0,
                infinite: s.length > 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        centerMode: !0,
                        dots: !0,
                        initialSlide: 2,
                        slidesToShow: w ? 1 : 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        centerMode: !1,
                        arrows: !0,
                        dots: !0,
                        slidesToShow: 1
                    }
                }],
                slidesToScroll: 1,
                slidesToShow: w ? 1 : 3,
                speed: 500
            }
              , T = x.constants.CONTENT_ASSET_LOCATION
              , j = T.endsWith("/") ? T.slice(0, T.length - 1) : T
              , carouselClass = ()=>(null == c ? void 0 : c.toLowerCase()) === "small" ? "small" : "large"
              , carouselSlotIdentifier = ()=>{
                let e = null == c ? void 0 : c.toLowerCase();
                switch (e) {
                case "small":
                    return "Carousel Small_";
                case "large":
                    return "Carousel Large_";
                default:
                    return ""
                }
            }
              , b = (0,
            n.jsx)("button", {
                type: "button",
                "aria-label": "Next",
                className: "slick-arrow",
                ...(0,
                m.F)({
                    contentType: u.ei.scroll,
                    contentId: "Right",
                    contentSlotId: carouselSlotIdentifier() + a || ""
                }),
                children: "Next"
            })
              , _ = (0,
            n.jsx)("button", {
                type: "button",
                "aria-label": "Prev",
                className: "slick-arrow",
                ...(0,
                m.F)({
                    contentType: u.ei.scroll,
                    contentId: "Left",
                    contentSlotId: carouselSlotIdentifier() + a || ""
                }),
                children: "Previous"
            });
            return (0,
            n.jsxs)("section", {
                className: "w-cms--carousel carousel_".concat(carouselClass()),
                children: [(0,
                n.jsx)("div", {
                    className: "w-cms--carousel_rule ".concat(carouselClass())
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--carousel__".concat(carouselClass()),
                    "data-testid": "w-cms-slider",
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-cms--carousel_content ".concat((null == c ? void 0 : c.toLowerCase()) === "large" ? "w-cms-grid" : ""),
                        children: (0,
                        n.jsxs)("div", {
                            className: "w-cms--carousel__header-container",
                            children: [(0,
                            n.jsx)("h2", {
                                className: "w-cms--carousel__header",
                                children: a
                            }), (0,
                            n.jsx)("p", {
                                children: t
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        "data-testid": "w-cms-panel-title",
                        children: (0,
                        n.jsx)(r.Z, {
                            ...g,
                            prevArrow: _,
                            nextArrow: b,
                            children: s.map((e,t)=>{
                                var s, c, r, v, w, g, T, b, _, N, k;
                                let f = e.title ? (0,
                                n.jsxs)("a", {
                                    className: "w-link ".concat((null === (s = e.link) || void 0 === s ? void 0 : s.target) === "New Window/Tab" ? "w-link--external" : ""),
                                    href: null === (c = e.link) || void 0 === c ? void 0 : c.url,
                                    target: (null === (r = e.link) || void 0 === r ? void 0 : r.target) === "New Window/Tab" ? "_blank" : "_self",
                                    rel: "noreferrer",
                                    children: [(0,
                                    n.jsx)("span", {
                                        children: "".concat(e.title, " ")
                                    }), (null === (v = e.link) || void 0 === v ? void 0 : v.target) === "New Window/Tab" ? (0,
                                    n.jsx)("span", {
                                        className: "sr-only",
                                        children: "Opens in a new tab"
                                    }) : null]
                                }) : e.title
                                  , I = (null === (g = e.image) || void 0 === g ? void 0 : null === (w = g.desktopImagePath) || void 0 === w ? void 0 : w.includes("http")) ? "" : j
                                  , y = (null === (T = e.image) || void 0 === T ? void 0 : T.altText) || e.title;
                                return (0,
                                l.createElement)("div", {
                                    ...(0,
                                    m.F)({
                                        contentType: u.ei.link,
                                        contentId: null !== (k = e.title) && void 0 !== k ? k : "",
                                        contentSlotId: carouselSlotIdentifier() + a || ""
                                    }),
                                    key: e.title || t,
                                    hidden: o !== t || void 0,
                                    children: [e.video ? (0,
                                    n.jsx)("div", {
                                        className: "video-player-wrapper",
                                        children: (0,
                                        n.jsx)(p, {
                                            className: "video-player",
                                            url: e.video.videoIdentifier,
                                            style: {
                                                margin: "0 auto"
                                            },
                                            light: !e.video.previewImage.desktopImagePath || "".concat(x.constants.CONTENT_ASSET_LOCATION).concat(e.video.previewImage.imagePath),
                                            playing: !0,
                                            height: "100%",
                                            width: "100%"
                                        })
                                    }) : (0,
                                    n.jsxs)("picture", {
                                        children: [(0,
                                        n.jsx)("source", {
                                            media: "(max-width: ".concat(h.j$.MOBILE_MAX, ")"),
                                            srcSet: "".concat(I).concat((null === (b = e.image) || void 0 === b ? void 0 : b.mobileImagePath) || "")
                                        }), (0,
                                        n.jsx)("source", {
                                            media: "(max-width: ".concat(h.j$.TABLET_MAX, ")"),
                                            srcSet: "".concat(I).concat((null === (_ = e.image) || void 0 === _ ? void 0 : _.tabletImagePath) || "")
                                        }), (0,
                                        n.jsx)(d.Z, {
                                            alt: y,
                                            url: "".concat(I).concat((null === (N = e.image) || void 0 === N ? void 0 : N.desktopImagePath) || "")
                                        })]
                                    }), i ? (0,
                                    n.jsx)("div", {
                                        className: "w-cms--carousel__panel-title",
                                        children: (0,
                                        n.jsx)("p", {
                                            children: f
                                        })
                                    }) : null]
                                })
                            }
                            )
                        })
                    })]
                })]
            })
        }
        var v = a(46856);
        function PrimaryTopic(e) {
            let {children: t=null, classname: a="", description: l, headerText: s} = e;
            return (0,
            n.jsxs)("div", {
                className: "w-cms--primary-topic w-cms-grid ".concat(a),
                children: [(0,
                n.jsx)("div", {
                    className: "w-cms--primary-topic__heading",
                    children: (0,
                    n.jsx)("h2", {
                        className: "w-cms--font-headline__serif w-cms--fixed-divider",
                        children: s
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--primary-topic__content",
                    children: [(0,
                    n.jsx)("p", {
                        className: "w-cms--font-body__sans",
                        children: l
                    }), t]
                })]
            })
        }
        function SecondaryTopic(e) {
            let {children: t=null, classname: a=""} = e;
            return (0,
            n.jsx)("section", {
                className: "w-cms--secondary-topic w-cms-grid ".concat(a),
                children: (0,
                n.jsx)("div", {
                    className: "w-cms--secondary-topic__flex-wrapper",
                    children: t
                })
            })
        }
        var w = a(10341);
        function CCList(e) {
            let {listitems: t, style: a} = e
              , l = "PRIMARY-FEATURED-TOPICS" === a ? "primary" : "secondary";
            return (0,
            n.jsxs)(n.Fragment, {
                children: ["primary" === l ? (0,
                n.jsx)("div", {
                    className: "w-cms--primary-topic__wrapper",
                    children: t.topics.map((e,t)=>(0,
                    n.jsx)(PrimaryTopic, {
                        headerText: e.headline,
                        description: e.description,
                        children: (0,
                        n.jsxs)("div", {
                            className: "w-cms--".concat(l, "-topic__content-links"),
                            children: [e.popularQuestion ? (0,
                            n.jsxs)(n.Fragment, {
                                children: [(0,
                                n.jsx)("h3", {
                                    className: "w-cms--font-subhead-sm__sans",
                                    children: "Popular question"
                                }), (0,
                                n.jsx)(w.Z, {
                                    url: "".concat(e.canonicalLink, "#").concat(e.popularQuestion.id),
                                    target: "SAME TAB",
                                    style: "link-large",
                                    linkText: e.popularQuestion.question
                                })]
                            }) : null, (0,
                            n.jsx)(w.Z, {
                                url: e.canonicalLink,
                                target: "SAME TAB",
                                showIcon: !0,
                                style: "link",
                                linkText: "See all questions"
                            })]
                        })
                    }, t))
                }) : null, "secondary" === l ? (0,
                n.jsx)(SecondaryTopic, {
                    children: t.topics.map((e,t)=>(0,
                    n.jsx)(s.Z, {
                        styledLink: {
                            style: "link-white",
                            url: e.canonicalLink,
                            ariaLabel: e.headline,
                            showIcon: !0,
                            linkText: "See all questions"
                        },
                        headerText: e.headline,
                        subHeaderText: e.description,
                        headerLevel: 3
                    }, t))
                }) : null]
            })
        }
        var g = a(93967)
          , T = a.n(g)
          , j = a(41483);
        function ContentComponent(e) {
            let {align: t, style: a, image: l, header: s, description: i} = e
              , c = a.toLowerCase()
              , o = t.toLowerCase()
              , r = T()("w-cms--content", "w-cms-grid", {
                B1: "left" === o && "large" === c,
                B2: "left" === o && "small" === c,
                B3: "right" === o && "large" === c,
                B4: "right" === o && "small" === c,
                B5: "left" === o && "full-bleed" === c,
                B6: "right" === o && "full-bleed" === c
            });
            return (0,
            n.jsxs)("div", {
                className: r,
                children: [(0,
                n.jsx)(d.Z, {
                    url: l.desktopImagePath,
                    urlTablet: l.tabletImagePath,
                    urlMobile: l.mobileImagePath,
                    assetLocation: x.constants.CONTENT_ASSET_LOCATION
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--content__panel",
                    children: (0,
                    n.jsxs)(j.Z, {
                        color: "white",
                        children: [(0,
                        n.jsx)("h2", {
                            className: "w-cms--content__header-text",
                            children: s
                        }), (0,
                        n.jsx)("p", {
                            className: "w-cms--content__sub-header-text",
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })]
                    })
                })]
            })
        }
        let contentWithCTAStyle = e=>{
            let t = e.toLowerCase();
            switch (t) {
            case "card-overlay-right":
            case "card-overlay-left":
            case "cutout-right":
            case "cutout-left":
            case "square":
            case "split-left":
            case "split-right":
                return t;
            case "lower-right-cutout":
                return "cutout-right";
            case "standard-left":
                return "split-left";
            case "standard-right":
                return "split-right";
            default:
                return "card-overlay-left"
            }
        }
          , contentWithCTAShadow = (e,t)=>{
            let a = e.toLowerCase();
            return "card-overlay" === a || "card-overlay-left" === a || t
        }
          , contentWithCTASlotIdentifier = e=>{
            let t = e.toLowerCase();
            switch (t) {
            case "card-overlay":
                return "CC Overlay_";
            case "square":
                return "Content Square_";
            case "lower-right-cutout":
                return "LR Cutout_";
            case "split-left":
            case "split-right":
                return "Content Split_";
            default:
                return ""
            }
        }
        ;
        function ContentWithCTA(e) {
            let {imageModel: t, style: a, cta: l, header: i, description: c, alt: o} = e
              , r = "w-cms-component w-cms-grid w-cms--content-with-cta-new ".concat(contentWithCTAStyle(a));
            return (0,
            n.jsxs)("section", {
                "data-testid": "content-with-cta-section",
                className: r,
                children: [(0,
                n.jsx)(j.Z, {
                    color: "white",
                    shadow: contentWithCTAShadow(a, !1),
                    children: l ? (0,
                    n.jsx)(s.Z, {
                        styledLink: {
                            ariaLabel: l.ariaLabel,
                            linkText: l.linkText,
                            style: l.style || "button-primary",
                            target: l.target,
                            url: l.url,
                            showIcon: l.showIcon
                        },
                        headerText: i,
                        subHeaderText: c,
                        disclaimer: l.disclaimer,
                        headerLevel: 2,
                        lengthCheck: !0,
                        staticLink: !0,
                        csaContentType: u.ei.cta,
                        csaSlotId: contentWithCTASlotIdentifier(a) + i,
                        csaContentId: l.linkText
                    }) : null
                }), (0,
                n.jsx)(d.Z, {
                    alt: o,
                    assetLocation: t.desktopImagePath.includes("://") ? "" : x.constants.CONTENT_ASSET_LOCATION,
                    url: t.desktopImagePath,
                    url2X: t.desktopImagePath2X || t.desktopImagePath,
                    urlMobile: t.mobileImagePath,
                    urlMobile2X: t.mobileImagePath2X || t.mobileImagePath,
                    urlTablet: t.tabletImagePath,
                    urlTablet2X: t.tabletImagePath2X || t.tabletImagePath
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--content-with-cta__bg"
                })]
            })
        }
        function ContentWithLink(e) {
            let {description: t, header: a, image: l, link: s} = e;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--content-with-link",
                children: [(0,
                n.jsx)(d.Z, {
                    url: l.desktopImagePath,
                    urlTablet: l.tabletImagePath,
                    urlMobile: l.mobileImagePath,
                    alt: l.altText,
                    assetLocation: x.constants.CONTENT_ASSET_LOCATION
                }), (0,
                n.jsxs)("div", {
                    className: "content-block",
                    children: [(0,
                    n.jsx)("h2", {
                        className: "w-cms--font-subhead__sans",
                        children: a
                    }), t ? (0,
                    n.jsx)("p", {
                        className: "w-cms--font-body-long-lg__serif",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null, (null == s ? void 0 : s.linkText) && (null == s ? void 0 : s.url) ? (0,
                    n.jsx)("p", {
                        children: (0,
                        n.jsx)(w.Z, {
                            url: s.url,
                            style: "link",
                            target: s.target,
                            ariaLabel: s.ariaLabel,
                            staticLink: !0,
                            showIcon: !0,
                            linkText: s.linkText,
                            csaContentId: s.linkText,
                            csaSlotId: "Content Link_".concat(a),
                            csaType: u.ei.link
                        })
                    }) : null]
                })]
            })
        }
        var b = a(48371)
          , _ = a(84339);
        function ImageComponent(e) {
            let {altText: t, caption: a, image: l, style: s} = e
              , i = "centered" === s.toLowerCase() ? "right" : "bottom";
            return (0,
            n.jsx)("div", {
                className: "w-cms-component w-cms--image-with-caption ".concat(i),
                children: (0,
                n.jsxs)("figure", {
                    className: "w-cms-grid",
                    children: [(0,
                    n.jsx)(d.Z, {
                        url: l.desktopImagePath,
                        urlTablet: l.tabletImagePath,
                        urlMobile: l.mobileImagePath,
                        alt: t,
                        assetLocation: x.constants.CONTENT_ASSET_LOCATION
                    }), a ? (0,
                    n.jsx)("figcaption", {
                        children: a
                    }) : null]
                })
            })
        }
        function ImageOverlay(e) {
            var t;
            let {link: a, text: l, image: s, alt: i, textColor: c, showIcon: o=!1} = e
              , r = (null == c ? void 0 : c.toLowerCase()) || "light"
              , h = (null == a ? void 0 : a.linkText) && a.url
              , p = h ? (0,
            n.jsx)("a", {
                className: "w-button ".concat(("dark" === r ? "w-button--secondary" : "w-button--secondary-dark") + (o ? " w-button--external-icon" : "")),
                href: a.url,
                ...(0,
                m.F)({
                    contentType: u.ei.link,
                    contentId: null !== (t = null == a ? void 0 : a.linkText) && void 0 !== t ? t : "",
                    contentSlotId: "Home Image Overlay"
                }),
                children: (0,
                n.jsx)("span", {
                    children: a.linkText
                })
            }) : null;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--image-overlay",
                children: [(0,
                n.jsxs)("div", {
                    className: "w-cms--image-overlay__content",
                    children: [(0,
                    n.jsx)("h2", {
                        className: "w-cms--font-headline__sans ".concat("dark" === r ? "dark" : "light"),
                        children: l
                    }), p]
                }), (0,
                n.jsx)(d.Z, {
                    url: s.desktopImagePath,
                    urlTablet: s.tabletImagePath,
                    urlMobile: s.mobileImagePath,
                    alt: i,
                    assetLocation: x.constants.CONTENT_ASSET_LOCATION
                })]
            })
        }
        function LocalSupplier(e) {
            let {companyName: t="", description: a, image: l, link: s, localIcon: i=!1, location: c="", name: o="", productType: r=""} = e
              , m = a ? (0,
            n.jsx)("p", {
                className: "description-text",
                children: a
            }) : null
              , h = (null == s ? void 0 : s.url) ? (0,
            n.jsx)("p", {
                className: "description-link",
                children: (0,
                n.jsx)(w.Z, {
                    url: null == s ? void 0 : s.url,
                    style: "link-red",
                    target: null == s ? void 0 : s.target,
                    showIcon: !0,
                    ariaLabel: null == s ? void 0 : s.ariaLabel,
                    staticLink: !0,
                    linkText: null == s ? void 0 : s.linkText,
                    csaContentId: null == s ? void 0 : s.linkText,
                    csaSlotId: "Local Supplier_".concat(t),
                    csaType: u.ei.link
                })
            }) : null;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--featured-vendor",
                children: [(0,
                n.jsx)("div", {
                    className: "w-cms--featured_image",
                    children: (0,
                    n.jsx)(d.Z, {
                        assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                        url: l.desktopImagePath,
                        urlTablet: l.tabletImagePath,
                        urlMobile: l.mobileImagePath,
                        alt: l.altText
                    })
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--featured_details",
                    children: [(0,
                    n.jsx)("h2", {
                        className: "vendor-text",
                        children: t
                    }), (0,
                    n.jsx)("p", {
                        className: "product-type",
                        children: r
                    }), (0,
                    n.jsx)("h3", {
                        className: "founder-text",
                        children: o
                    }), (0,
                    n.jsx)("p", {
                        className: "location-text ".concat(i ? "location-icon" : ""),
                        children: c
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--featured_vertical-line w-desktop-only"
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--featured_description",
                    children: [m, h]
                })]
            })
        }
        function QuoteRichTextElement(e) {
            let {mainQuote: t} = e;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--pull-block-quote",
                children: [(0,
                n.jsx)("hr", {}), (0,
                n.jsx)("div", {
                    className: "w-cms--quote-wrapper",
                    children: (0,
                    n.jsxs)("blockquote", {
                        children: ["“", t, "”"]
                    })
                }), (0,
                n.jsx)("hr", {})]
            })
        }
        function Subhead(e) {
            let {headerText: t} = e;
            return (0,
            n.jsx)("section", {
                className: "w-cms-grid",
                children: (0,
                n.jsx)("div", {
                    className: "w-cms--body-container",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms--subhead",
                        children: (0,
                        n.jsx)("h2", {
                            children: t
                        })
                    })
                })
            })
        }
        function Table(e) {
            var t;
            let {data: a} = e
              , l = null == a ? void 0 : null === (t = a.parts) || void 0 === t ? void 0 : t[0]
              , buildTableData = (e,t)=>{
                var a;
                return null == e ? void 0 : null === (a = e.row) || void 0 === a ? void 0 : a.map((e,a)=>{
                    var l, s, i;
                    let c = null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l[0]
                      , getLink = ()=>{
                        var e, t, a, l, s, i;
                        return (0,
                        n.jsx)(w.Z, {
                            ariaLabel: null == c ? void 0 : null === (e = c.linkRichTextElement) || void 0 === e ? void 0 : e.ariaLabel,
                            target: null == c ? void 0 : null === (a = c.linkRichTextElement) || void 0 === a ? void 0 : null === (t = a.link) || void 0 === t ? void 0 : t.target,
                            url: null == c ? void 0 : null === (s = c.linkRichTextElement) || void 0 === s ? void 0 : null === (l = s.link) || void 0 === l ? void 0 : l.url,
                            style: "link",
                            staticLink: !0,
                            linkText: null == c ? void 0 : null === (i = c.linkRichTextElement) || void 0 === i ? void 0 : i.linkText
                        })
                    }
                    ;
                    return "header" === t ? (null == c ? void 0 : null === (i = c.linkRichTextElement) || void 0 === i ? void 0 : i.linkText) ? (0,
                    n.jsx)("th", {
                        children: (0,
                        n.jsx)("p", {
                            children: getLink()
                        })
                    }, a) : (0,
                    n.jsx)("th", {
                        children: (0,
                        n.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: null == c ? void 0 : c.listText
                            }
                        })
                    }, a) : (null == c ? void 0 : null === (s = c.linkRichTextElement) || void 0 === s ? void 0 : s.linkText) ? (0,
                    n.jsx)("td", {
                        children: (0,
                        n.jsx)("p", {
                            children: getLink()
                        })
                    }, a) : (0,
                    n.jsx)("td", {
                        children: (0,
                        n.jsx)("p", {
                            dangerouslySetInnerHTML: {
                                __html: null == c ? void 0 : c.listText
                            }
                        })
                    }, a)
                }
                )
            }
              , buildTableRows = (e,t)=>{
                var a;
                let l = -1
                  , s = null == e ? void 0 : null === (a = e.rows) || void 0 === a ? void 0 : a.map(e=>{
                    l++;
                    let a = buildTableData(e, t);
                    return (0,
                    n.jsx)("tr", {
                        children: a
                    }, l)
                }
                );
                return s
            }
              , s = (()=>{
                if (!l.tableHeadWrapperViewModel) {
                    var e, t, a, s, i, c;
                    l.tableHeadWrapperViewModel = {
                        __typename: "TableWrapperViewModel",
                        rows: [{
                            row: null !== (c = null == l ? void 0 : null === (a = l.tableBodyWrapperViewModel) || void 0 === a ? void 0 : null === (t = a.rows) || void 0 === t ? void 0 : null === (e = t[0]) || void 0 === e ? void 0 : e.row) && void 0 !== c ? c : []
                        }]
                    },
                    null == l || null === (i = l.tableBodyWrapperViewModel) || void 0 === i || null === (s = i.rows) || void 0 === s || s.shift()
                }
                let o = buildTableRows(null == l ? void 0 : l.tableHeadWrapperViewModel, "header")
                  , r = buildTableRows(null == l ? void 0 : l.tableBodyWrapperViewModel, "body");
                return (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("thead", {
                        children: o
                    }), (0,
                    n.jsx)("tbody", {
                        children: r
                    })]
                })
            }
            )();
            return (0,
            n.jsx)("section", {
                className: "w-cms-component w-cms-grid w-cms--table",
                children: (0,
                n.jsx)("div", {
                    className: "w-cms--table__content_block",
                    children: (0,
                    n.jsx)("div", {
                        className: "table-wrapper",
                        children: (0,
                        n.jsx)("table", {
                            cellSpacing: "0",
                            children: s
                        })
                    })
                })
            })
        }
        function ThreeVertical(e) {
            let {centerDescription: t, centerHeader: a, centerImage: l, centerLink: i, leftCta: c, leftDescription: o, leftHeader: r, leftImage: m, rightDescription: h, rightHeader: p, rightImage: v, rightLink: g, classParam: T=""} = e;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--vertical-3-up ".concat(T),
                "data-testid": "w-cms-vertical-3-section",
                children: [(0,
                n.jsx)("div", {
                    className: "w-cms--vertical-3-up__col1",
                    children: c ? (0,
                    n.jsx)(j.Z, {
                        color: "white",
                        shadow: !0,
                        children: (0,
                        n.jsx)(s.Z, {
                            styledLink: {
                                ariaLabel: c.ariaLabel,
                                linkText: c.linkText,
                                style: c.style || "button-primary",
                                target: c.target,
                                url: c.url,
                                showIcon: c.showIcon
                            },
                            headerText: r,
                            subHeaderText: o,
                            disclaimer: c.disclaimer,
                            headerLevel: 2,
                            lengthCheck: !0,
                            staticLink: !0,
                            csaSlotId: "3V_".concat(r),
                            csaContentType: u.ei.cta,
                            csaContentId: c.linkText
                        })
                    }) : null
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--vertical-3-up__col2",
                    children: [(0,
                    n.jsx)(d.Z, {
                        assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                        url: l.desktopImagePath,
                        urlTablet: l.tabletImagePath,
                        urlMobile: l.mobileImagePath,
                        alt: l.altText
                    }), a ? (0,
                    n.jsx)("h3", {
                        className: "w-cms--font-subhead-sm__sans",
                        children: a
                    }) : null, t ? (0,
                    n.jsx)("p", {
                        className: "w-cms--font-body__sans",
                        children: t
                    }) : null, (null == i ? void 0 : i.url) ? (0,
                    n.jsx)("p", {
                        children: (0,
                        n.jsx)(w.Z, {
                            url: i.url,
                            style: "link",
                            target: i.target,
                            showIcon: !0,
                            ariaLabel: i.ariaLabel,
                            staticLink: !0,
                            linkText: i.linkText,
                            csaSlotId: "3V_".concat(a),
                            csaType: u.ei.link,
                            csaContentId: i.linkText
                        })
                    }) : null]
                }), (0,
                n.jsxs)("div", {
                    className: "w-cms--vertical-3-up__col3",
                    children: [(0,
                    n.jsx)(d.Z, {
                        assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                        url: v.desktopImagePath,
                        urlTablet: v.tabletImagePath,
                        urlMobile: v.mobileImagePath,
                        alt: v.altText
                    }), p ? (0,
                    n.jsx)("h3", {
                        className: "w-cms--font-subhead-sm__sans",
                        children: p
                    }) : null, h ? (0,
                    n.jsx)("p", {
                        className: "w-cms--font-body__sans",
                        children: h
                    }) : null, (null == g ? void 0 : g.url) ? (0,
                    n.jsx)("p", {
                        children: (0,
                        n.jsx)(w.Z, {
                            url: g.url,
                            style: "link",
                            target: g.target,
                            showIcon: !0,
                            ariaLabel: g.ariaLabel,
                            staticLink: !0,
                            linkText: g.linkText,
                            csaSlotId: "3V_".concat(p),
                            csaType: u.ei.link,
                            csaContentId: g.linkText
                        })
                    }) : null]
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--vertical-3-up__bg1",
                    children: (0,
                    n.jsx)(d.Z, {
                        assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                        url: m.desktopImagePath,
                        urlTablet: m.tabletImagePath,
                        urlMobile: m.mobileImagePath,
                        alt: m.altText
                    })
                }), (0,
                n.jsx)("div", {
                    className: "w-cms--vertical-3-up__bg2",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms--vertical-3-up__bg"
                    })
                })]
            })
        }
        var N = a(46334);
        function Tiles(e) {
            let {items: t} = e
              , a = t.map((e,t)=>(0,
            n.jsx)(N.n, {
                tile: e
            }, t));
            return (0,
            n.jsx)("section", {
                className: "w-cms-component",
                children: (0,
                n.jsx)("div", {
                    className: "w-cms--flex-grid",
                    children: a
                })
            })
        }
        function TwoVertical(e) {
            let {cta: t, description: a, header: l, leftImage: i, rightImage: c} = e;
            return (0,
            n.jsx)("section", {
                className: "w-cms-component",
                children: (0,
                n.jsxs)("div", {
                    className: "w-cms--two-up w-cms-grid",
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-cms--two-up_spacer"
                    }), (0,
                    n.jsx)("div", {
                        className: "w-cms--two-up_main-image",
                        children: (0,
                        n.jsx)(d.Z, {
                            alt: i.altText,
                            assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                            url: i.desktopImagePath,
                            urlTablet: i.tabletImagePath,
                            urlMobile: i.mobileImagePath
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-cms--two-up_right-content",
                        children: [(0,
                        n.jsx)(s.Z, {
                            styledLink: {
                                ariaLabel: t.ariaLabel,
                                linkText: t.linkText,
                                style: t.style,
                                target: t.target,
                                url: t.url,
                                showIcon: t.showIcon
                            },
                            headerText: l,
                            subHeaderText: a,
                            disclaimer: t.disclaimer,
                            headerLevel: 2,
                            lengthCheck: !0,
                            staticLink: !0,
                            csaSlotId: "2V_".concat(l),
                            csaContentType: u.ei.cta,
                            csaContentId: t.linkText
                        }), (0,
                        n.jsx)("div", {
                            className: "w-cms--two-up_secondary-image",
                            children: (0,
                            n.jsx)(d.Z, {
                                alt: c.altText,
                                assetLocation: x.constants.CONTENT_ASSET_LOCATION,
                                url: c.desktopImagePath,
                                urlTablet: c.tabletImagePath,
                                urlMobile: c.mobileImagePath
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "w-cms--two-up_grey-bg"
                    })]
                })
            })
        }
        var k = a(50069);
        function VideoWithCaption(e) {
            let {videoCaption: t, videoDescription: a, videoId: l, videoPreviewImage: s} = e
              , i = l && (0,
            n.jsx)(k.n, {
                videoId: l,
                videoPreviewImage: s
            })
              , c = a && (0,
            n.jsx)("p", {
                className: "w-cms--font-disclaimer-caption",
                children: a
            })
              , o = t && (0,
            n.jsx)("h2", {
                className: "w-cms--font-subhead-sm__sans",
                children: t
            });
            return (0,
            n.jsxs)("div", {
                className: "w-video w-cms--video-with-caption",
                children: [o, i, c]
            })
        }
        let renderContent = (e,t)=>{
            switch (e.type) {
            case "rawView":
                return (0,
                n.jsx)("div", {
                    className: "w-cms-grid w-cms--article-component",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms-richtext",
                        dangerouslySetInnerHTML: {
                            __html: e.rawView.items[0]
                        }
                    })
                });
            case "linkRichTextElement":
                var a, l;
                return (0,
                n.jsx)("div", {
                    className: "w-cms-grid w-cms--article-component",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms-richtext",
                        children: (0,
                        n.jsx)(w.Z, {
                            url: (null === (a = e.link) || void 0 === a ? void 0 : a.url) || e.linkRichTextElement.link.url,
                            target: (null === (l = e.link) || void 0 === l ? void 0 : l.target) || e.linkRichTextElement.link.target,
                            staticLink: !0,
                            linkText: e.linkText || e.linkRichTextElement.linkText
                        })
                    })
                });
            case "h2RichTextElement":
                return (0,
                n.jsx)("div", {
                    className: "w-cms-grid w-cms--article-component",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms-richtext",
                        children: (0,
                        n.jsx)("h2", {
                            className: "w-cms--body__heading",
                            children: e.h2RichTextElement.text
                        })
                    })
                });
            case "h3RichTextElement":
                return (0,
                n.jsx)("div", {
                    className: "w-cms-grid w-cms--article-component",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms-richtext",
                        children: (0,
                        n.jsx)("h3", {
                            className: "w-cms--body__heading",
                            children: e.h3RichTextElement.text
                        })
                    })
                });
            case "cta":
                return (0,
                n.jsx)("section", {
                    className: "w-cms-grid",
                    children: (0,
                    n.jsx)("div", {
                        className: "w-cms--body-container",
                        children: (0,
                        n.jsx)(s.Z, {
                            styledLink: {
                                url: e.cta.url,
                                target: e.cta.target,
                                ariaLabel: e.cta.ariaLabel,
                                icon: e.cta.icon,
                                showIcon: e.cta.showIcon,
                                style: e.cta.style || "primary-button",
                                linkText: e.cta.linkText
                            },
                            headerText: e.cta.headerText,
                            subHeaderText: e.cta.subHeadline,
                            disclaimer: e.cta.disclaimer,
                            lengthCheck: !1,
                            headerLevel: 2,
                            staticLink: !0
                        })
                    })
                });
            case "contentWithCta":
                return (0,
                n.jsx)(ContentWithCTA, {
                    ...e.contentWithCta
                });
            case "tiles":
                return (0,
                n.jsx)(Tiles, {
                    ...e.tiles
                });
            case "imageOverlay":
                return (0,
                n.jsx)(ImageOverlay, {
                    ...e.imageOverlay
                });
            case "twoVertical":
                return (0,
                n.jsx)(TwoVertical, {
                    ...e.twoVertical
                });
            case "threeVertical":
                return (0,
                n.jsx)(ThreeVertical, {
                    ...e.threeVertical
                });
            case "ctaWithImage":
                return (0,
                n.jsx)(b.h, {
                    ...e.ctaWithImage
                });
            case "imageComponent":
                return (0,
                n.jsx)(ImageComponent, {
                    ...e.imageComponent
                });
            case "contentComponent":
                return (0,
                n.jsx)(ContentComponent, {
                    ...e.contentComponent
                });
            case "contentWithLink":
                return (0,
                n.jsx)(ContentWithLink, {
                    ...e.contentWithLink
                });
            case "quoteRichTextElement":
                return (0,
                n.jsx)(QuoteRichTextElement, {
                    mainQuote: e.quoteRichTextElement.quote
                });
            case "carousel":
                return (0,
                n.jsx)(Carousel, {
                    ...e.carousel,
                    showCaptions: !0
                });
            case "video":
                return (0,
                n.jsx)(VideoWithCaption, {
                    videoCaption: e.video.headline,
                    videoPreviewImage: e.video.previewImage,
                    videoDescription: e.video.description,
                    videoId: e.video.videoIdentifier
                });
            case "table":
                return (0,
                n.jsx)(Table, {
                    data: e.table
                });
            case "divider":
                return (0,
                n.jsx)(i.Z, {
                    ...e.divider
                });
            case "localSupplier":
                return (0,
                n.jsx)(LocalSupplier, {
                    ...e.localSupplier
                });
            case "ccList":
                return (0,
                n.jsx)(CCList, {
                    ...e.ccList
                });
            case "ccCommonQuestions":
                return (0,
                n.jsx)(v.O, {
                    ...e.ccCommonQuestions,
                    ccQuestionId: t
                });
            case "dropdownComponent":
                return (0,
                n.jsx)(_.h, {
                    ...e.dropdownComponent,
                    headline: e.dropdownComponent.headline || "Dropdown Nav"
                });
            case "subHeadComponent":
                return (0,
                n.jsx)(Subhead, {
                    headerText: e.subHeadComponent.subHead
                });
            default:
                return null
            }
        }
          , ComponentMapper = e=>{
            let {content: t, wrapperClass: a, id: s} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: t.filter(e=>!!e).map((e,t)=>a ? (0,
                n.jsx)("div", {
                    className: a,
                    children: renderContent(e, s || null)
                }, t) : (0,
                n.jsx)(l.Fragment, {
                    children: renderContent(e, s || null)
                }, t))
            })
        }
    },
    48371: function(e, t, a) {
        a.d(t, {
            h: function() {
                return CTAWithImage
            }
        });
        var n = a(85893);
        a(67294);
        var l = a(79759)
          , s = a(41483)
          , i = a(50069)
          , c = a(40359);
        function CTAWithImage(e) {
            let {altText: t, children: a=null, color: o, imageDesktop: r, imageMobile: d, imageTablet: m, shadow: u, videoId: h, videoPreviewImage: x} = e
              , p = (null == r ? void 0 : r.includes("http")) ? "" : c.constants.CONTENT_ASSET_LOCATION;
            return (0,
            n.jsxs)("section", {
                className: "w-cms-component w-cms-grid w-cms--cta-with-image",
                children: [(0,
                n.jsxs)("div", {
                    className: "w-cms--cta-with-image_visual",
                    children: [h ? (0,
                    n.jsx)(i.n, {
                        imageDesktop: r,
                        videoId: h,
                        videoPreviewImage: x
                    }) : null, r ? (0,
                    n.jsx)(l.Z, {
                        assetLocation: p,
                        url: r,
                        urlTablet: m,
                        urlMobile: d,
                        alt: t
                    }) : null]
                }), (0,
                n.jsx)(s.Z, {
                    color: o,
                    shadow: u,
                    children: a
                })]
            })
        }
    },
    84339: function(e, t, a) {
        a.d(t, {
            h: function() {
                return DropdownMenu
            }
        });
        var n = a(85893)
          , l = a(67294)
          , s = a(93967)
          , i = a.n(s)
          , c = a(64656)
          , o = a(2055)
          , r = a(30794);
        function DropdownMenu(e) {
            let {alignment: t, dropdown: a, headline: s, style: d} = e
              , [m,u] = (0,
            l.useState)("");
            (0,
            l.useEffect)(()=>{
                if (m) {
                    var e;
                    let t = a.items.find(e=>e.link.url === m)
                      , n = (null == t ? void 0 : null === (e = t.link.target) || void 0 === e ? void 0 : e.toLowerCase().includes("same")) ? "_self" : "_blank";
                    window.open(null == t ? void 0 : t.link.url, n)
                }
            }
            , [m, a]);
            let h = "".concat((0,
            r.uw)(s))
              , x = i()("w-cms--dropdown", "dropdown-".concat((null == t ? void 0 : t.toLowerCase()) || "center"), d);
            return (0,
            n.jsx)("div", {
                className: "w-cms-grid",
                children: (0,
                n.jsx)("div", {
                    className: x,
                    "data-testid": "w-cms-dropdown",
                    children: (0,
                    n.jsxs)("form", {
                        noValidate: !0,
                        children: [(0,
                        n.jsx)("label", {
                            htmlFor: h,
                            children: s
                        }), (0,
                        n.jsxs)("select", {
                            onChange: e=>{
                                u(e.target.value)
                            }
                            ,
                            defaultValue: a.defaultText,
                            "data-testid": "dropdown-select",
                            id: h,
                            children: [a.defaultText ? (0,
                            n.jsx)("option", {
                                disabled: !0,
                                "data-testid": "dropdown-placeholder",
                                children: a.defaultText
                            }) : null, a.items.map(e=>(0,
                            n.jsx)("option", {
                                value: e.link.url,
                                "data-testid": "dropdown-option",
                                ...(0,
                                c.F)({
                                    contentType: o.ei.menu,
                                    contentId: e.displayName,
                                    contentSlotId: "Dropdown_".concat(s)
                                }),
                                children: e.displayName
                            }, e.displayName))]
                        })]
                    })
                })
            })
        }
    },
    46334: function(e, t, a) {
        a.d(t, {
            n: function() {
                return Tile
            }
        });
        var n = a(85893);
        a(67294);
        var l = a(79759)
          , s = a(64656)
          , i = a(2055)
          , c = a(40359);
        function Tile(e) {
            let {tile: {ariaLabel: t, title: a, target: o, url: r, image: d}, styleName: m="simple", subHeaderText: u, csaSlotIdText: h, csaContentTypeText: x} = e
              , p = "simple" === m.toLowerCase() ? "w-cms--tile-simple" : "w-cms--tile-small"
              , v = (null == o ? void 0 : o.toLowerCase().includes("new")) ? "_blank" : "_self";
            return (0,
            n.jsxs)("div", {
                className: "w-cms--tile ".concat(p),
                "data-testid": "w-cms-tile",
                children: [(0,
                n.jsxs)("a", {
                    className: "w-cms--tile__link",
                    href: r,
                    target: v,
                    rel: "_blank" === v ? "noreferrer" : "",
                    "aria-label": t,
                    "data-testid": "w-cms-tile-link",
                    ...(0,
                    s.F)({
                        contentType: x || i.ei.link,
                        contentId: a || "",
                        contentSlotId: void 0 === h ? "Tile" : h + a
                    }),
                    children: [(0,
                    n.jsx)("div", {
                        className: "w-cms--tile__content",
                        children: (0,
                        n.jsx)(l.Z, {
                            alt: d.altText,
                            "aria-hidden": !d.altText,
                            assetLocation: c.constants.CONTENT_ASSET_LOCATION,
                            url: d.desktopImagePath,
                            urlMobile: d.mobileImagePath,
                            urlTablet: d.tabletImagePath
                        })
                    }), (0,
                    n.jsx)("h2", {
                        className: "w-cms--tile__header",
                        children: (0,
                        n.jsx)("span", {
                            children: a
                        })
                    }), "_blank" === v ? (0,
                    n.jsx)("span", {
                        className: "sr-only",
                        children: " Opens in a new tab"
                    }) : null]
                }), u ? (0,
                n.jsx)("p", {
                    children: u
                }) : null]
            })
        }
    },
    92455: function(e, t, a) {
        var n = a(85893);
        a(67294);
        var l = a(93967)
          , s = a.n(l)
          , i = a(10341)
          , c = a(79739)
          , o = a(2055)
          , r = a(16357);
        t.Z = function(e) {
            var t, a, l;
            let {headerLevel: d, headerText: m, lengthCheck: u, staticLink: h=!1, subHeaderText: x, disclaimer: p, styledLink: v, csaContentType: w, csaContentId: g, csaSlotId: T, linkHref: j, linkHrefQuery: b} = e
              , _ = null !== (t = null == m ? void 0 : m.length) && void 0 !== t ? t : 0
              , N = s()({
                medium: u && _ > 25,
                large: !(u && _ > 25)
            })
              , k = null != d ? d : 2
              , f = (0,
            c.Z)(null)
              , I = m && (0,
            n.jsx)("div", {
                "data-testid": "cta-header",
                className: "w-cms--cta__header-text",
                children: (()=>{
                    switch (k) {
                    case 1:
                        return (0,
                        n.jsx)("h1", {
                            "data-testid": "cta-header-text",
                            className: N,
                            dangerouslySetInnerHTML: {
                                __html: m.replace("\xae", "<span><sup>\xae</sup></span>")
                            }
                        });
                    case 3:
                        return (0,
                        n.jsx)("h3", {
                            "data-testid": "cta-header-text",
                            className: N,
                            dangerouslySetInnerHTML: {
                                __html: m.replace("\xae", "<span><sup>\xae</sup></span>")
                            }
                        });
                    default:
                        return (0,
                        n.jsx)("h2", {
                            "data-testid": "cta-header-text",
                            className: N,
                            dangerouslySetInnerHTML: {
                                __html: m.replace("\xae", "<span><sup>\xae</sup></span>")
                            }
                        })
                    }
                }
                )()
            })
              , y = x && (0,
            n.jsx)("div", {
                "data-testid": "cta-subheader",
                className: "w-cms--cta__sub-header-text",
                children: (0,
                n.jsx)("p", {
                    "data-testid": "cta-subheader-text",
                    dangerouslySetInnerHTML: {
                        __html: x
                    }
                })
            })
              , C = p && (0,
            n.jsx)("div", {
                "data-testid": "cta-disclaimer",
                className: "w-cms--cta__disclaimer-text",
                children: (0,
                n.jsx)("p", {
                    "data-testid": "cta-disclaimer-text",
                    className: "w-cms--font-disclaimer",
                    children: p
                })
            })
              , S = (null == v ? void 0 : v.linkText) && (null == v ? void 0 : v.url.includes("/")) && (0,
            n.jsx)("div", {
                className: "w-cms--cta__button-link",
                children: (0,
                n.jsx)(i.Z, {
                    as: v.url,
                    csaContentId: null != g ? g : null == v ? void 0 : v.linkText,
                    csaSlotId: null != T ? T : "CTA_".concat(null != m ? m : ""),
                    csaType: null != w ? w : o.ei.cta,
                    icon: v.icon,
                    linkHref: (l = v.url,
                    j && b ? {
                        pathname: j,
                        query: b
                    } : j && !b ? j : l),
                    linkText: v.linkText,
                    showIcon: v.showIcon,
                    staticLink: h,
                    style: v.style,
                    target: null == v ? void 0 : v.target,
                    url: v.url
                })
            })
              , L = (null == v ? void 0 : v.url) === r.DROPDOWN_TYPES.SHOPPING_LIST && (0,
            n.jsx)("div", {
                className: "w-cms--cta__button-link",
                children: (0,
                n.jsx)(i.Z, {
                    csaContentId: null != g ? g : null == v ? void 0 : v.linkText,
                    csaSlotId: null != T ? T : "CTA_".concat(null != m ? m : ""),
                    csaType: null != w ? w : o.ei.cta,
                    icon: v.icon,
                    linkHref: "",
                    linkText: null !== (a = v.linkText) && void 0 !== a ? a : v.url,
                    onClick: ()=>{
                        f(r.DROPDOWN_TYPES.SHOPPING_LIST, !0)
                    }
                    ,
                    showIcon: v.showIcon,
                    staticLink: !0,
                    style: v.style,
                    target: null == v ? void 0 : v.target,
                    url: ""
                })
            });
            return (0,
            n.jsxs)("div", {
                className: "w-cms--cta",
                children: [I, y, null != S ? S : L, C]
            })
        }
    },
    23876: function(e, t, a) {
        var n = a(85893);
        a(67294),
        t.Z = function(e) {
            let {size: t, style: a} = e;
            return (0,
            n.jsx)("div", {
                "data-testid": "divider-wrapper",
                className: "w-grid w-divider",
                children: (0,
                n.jsx)("hr", {
                    "data-testid": "divider-inner",
                    className: "divider-".concat(t.toLowerCase(), " divider-").concat(a.toLowerCase())
                })
            })
        }
    },
    24049: function(e, t, a) {
        var n = a(85893);
        a(67294);
        var l = a(9008)
          , s = a.n(l)
          , i = a(4298)
          , c = a.n(i)
          , o = a(40359);
        t.Z = function(e) {
            let {canonicalLink: t, imageAlt: a, imageSrc: l, noScriptImgSrc: i, pageDescription: r, pageTitle: d, siteName: m, trackingPixelJSCode: u} = e;
            return (0,
            n.jsxs)(s(), {
                children: [(0,
                n.jsx)("meta", {
                    property: "og:image",
                    content: null != l ? l : o.constants.OG_IMAGE
                }), (0,
                n.jsx)("meta", {
                    name: "twitter:image",
                    content: null != l ? l : o.constants.OG_IMAGE
                }), (0,
                n.jsx)("meta", {
                    property: "og:image:alt",
                    content: null != a ? a : o.constants.OG_IMAGE_ALT
                }), (0,
                n.jsx)("meta", {
                    name: "twitter:image:alt",
                    content: null != a ? a : o.constants.OG_IMAGE_ALT
                }), (0,
                n.jsx)("meta", {
                    property: "og:title",
                    content: d
                }), (0,
                n.jsx)("meta", {
                    name: "twitter:title",
                    content: d
                }), (0,
                n.jsx)("meta", {
                    name: "description",
                    content: r
                }), (0,
                n.jsx)("meta", {
                    property: "og:description",
                    content: r
                }), (0,
                n.jsx)("meta", {
                    name: "twitter:description",
                    content: r
                }), (0,
                n.jsx)("meta", {
                    property: "og:site_name",
                    content: null != m ? m : "Whole Foods Market"
                }), (0,
                n.jsx)("meta", {
                    name: "twitter:site",
                    content: "@WholeFoods"
                }), (0,
                n.jsx)("meta", {
                    property: "og:url",
                    content: t
                }), (0,
                n.jsx)("link", {
                    rel: "canonical",
                    href: t
                }), u ? (0,
                n.jsx)(c(), {
                    id: "tracking-pixel",
                    type: "text/javascript",
                    dangerouslySetInnerHTML: {
                        __html: u
                    }
                }) : null, i ? (0,
                n.jsx)("noscript", {
                    children: (0,
                    n.jsx)("img", {
                        height: "1",
                        width: "1",
                        alt: "",
                        src: i
                    })
                }) : null, (0,
                n.jsx)("title", {
                    children: d
                })]
            })
        }
    },
    79759: function(e, t, a) {
        var n = a(85893);
        a(67294),
        t.Z = function(e) {
            let {alt: t, assetLocation: a, class: l, dataSrc: s, dataTestId: i, height: c, imgClassName: o, imgLoading: r, onError: d, url: m, url2X: u, urlMobile2X: h, urlMobile: x, urlTablet2X: p, urlTablet: v, width: w} = e
              , g = m.includes("http://") || m.includes("https://") ? "" : null != a ? a : ""
              , T = g + m
              , j = u ? "".concat(g).concat(u) : ""
              , b = v ? "".concat(g).concat(v) : ""
              , _ = p ? "".concat(g).concat(p) : ""
              , N = x ? "".concat(g).concat(x) : ""
              , k = h ? "".concat(g).concat(h) : ""
              , f = x && h ? (0,
            n.jsx)("source", {
                "data-testid": "image-srcSet-urlMobile2X",
                media: "(max-width: 767px)",
                srcSet: "".concat(N, " 1x, ").concat(k, " 2x")
            }) : x && (0,
            n.jsx)("source", {
                "data-testid": "image-srcSet-urlMobile",
                media: "(max-width: 767px)",
                srcSet: N
            })
              , I = v && p ? (0,
            n.jsx)("source", {
                "data-testid": "image-srcSet-urlTablet2X",
                media: "(max-width: 1024px)",
                srcSet: "".concat(b, " 1x, ").concat(_, " 2x")
            }) : v && (0,
            n.jsx)("source", {
                "data-testid": "image-srcSet-urlTablet",
                media: "(max-width: 1024px)",
                srcSet: b
            })
              , y = u && (0,
            n.jsx)("source", {
                "data-testid": "image-srcSet-urlDesktop2X",
                media: "(min-width: 1025px)",
                srcSet: "".concat(T, " 1x, ").concat(j, " 2x")
            });
            return (0,
            n.jsxs)("picture", {
                className: l,
                children: [f, I, y, (0,
                n.jsx)("img", {
                    alt: null != t ? t : "",
                    "aria-hidden": !t || void 0,
                    className: o,
                    "data-src": s,
                    "data-testid": null != i ? i : "image-srcSet-urlDesktop",
                    height: c,
                    loading: r,
                    onError: d,
                    src: T,
                    width: w
                })]
            })
        }
    },
    41483: function(e, t, a) {
        var n = a(85893);
        a(67294);
        var l = a(93967)
          , s = a.n(l);
        t.Z = function(e) {
            var t;
            let {color: a, class: l, shadow: i=!1, children: c} = e
              , o = null !== (t = null == a ? void 0 : a.trim()) && void 0 !== t ? t : ""
              , r = s()({
                "w-cms--panel": !0,
                ["w-cms--panel-".concat(o)]: a,
                "w-cms--panel-shadow": i
            }, l);
            return (0,
            n.jsx)("div", {
                className: r,
                children: c
            })
        }
    },
    50069: function(e, t, a) {
        a.d(t, {
            n: function() {
                return Video
            }
        });
        var n = a(85893);
        a(67294);
        var l = a(22004)
          , s = a.n(l)
          , i = a(64656)
          , c = a(2055)
          , o = a(40359);
        function Video(e) {
            let {imageDesktop: t, videoId: a, videoPreviewImage: l} = e
              , r = !1
              , d = (null == l ? void 0 : l.imagePath.includes("http")) ? "" : o.constants.CONTENT_ASSET_LOCATION;
            switch (!0) {
            case !!l:
                r = "".concat(d).concat(l.imagePath);
                break;
            case !!t:
                r = "".concat(d).concat(t)
            }
            return (0,
            n.jsx)("section", {
                className: "w-video",
                children: (0,
                n.jsx)("div", {
                    className: "w-video_visual",
                    ...(0,
                    i.F)({
                        contentType: c.ei.video.toLowerCase(),
                        contentId: null != a ? a : "",
                        contentSlotId: c.ei.video
                    }),
                    children: a ? (0,
                    n.jsx)(s(), {
                        style: {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        },
                        url: "https://www.youtube.com/watch?v=".concat(a),
                        width: "100%",
                        height: "auto",
                        light: r,
                        controls: !0,
                        playing: !!r
                    }) : null
                })
            })
        }
    },
    2055: function(e, t, a) {
        a.d(t, {
            Gi: function() {
                return c
            },
            P6: function() {
                return r
            },
            ei: function() {
                return l
            },
            nG: function() {
                return o
            },
            sF: function() {
                return i
            }
        });
        var n, l, s = a(74257);
        let i = [{
            url: "https://www.amazon.com/alm/storefront?almBrandId=VUZHIFdob2xlIEZvb2Rz&ref_=US_TRF_ALL_UFG_WFM_REFER_0422063",
            linkText: "Grocery Pickup & Delivery",
            target: "_blank",
            image: {
                desktopImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Desktop-Sub-Nav/WFMOA-img.png",
                mobileImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Mobileweb-Sub-Nav/WFMOA-img.png",
                alt: ""
            }
        }, {
            url: "https://www.wholefoodsmarket.com/shop/choose",
            linkText: "Order Catering",
            target: "_self",
            image: {
                desktopImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Desktop-Sub-Nav/Catering-img.png",
                mobileImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Mobileweb-Sub-Nav/Catering-img.png",
                alt: ""
            }
        }, {
            url: s.Z6.ShippedToYou.url,
            linkText: s.Z6.ShippedToYou.name,
            target: "_self",
            image: {
                desktopImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Desktop-Sub-Nav/365-img.png",
                mobileImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Mobileweb-Sub-Nav/365-img.png",
                alt: ""
            }
        }, {
            url: s.Z6.SalesFlyer.url,
            linkText: "Weekly Sales",
            target: "_self",
            image: {
                desktopImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Desktop-Sub-Nav/Sale-img.png",
                mobileImageUrl: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/HomePageNav/Mobileweb-Sub-Nav/sale-img.png",
                alt: ""
            }
        }]
          , c = "Promotions, discounts, and offers available in stores may not be available for online orders. Orders online may reflect prices that exclude any discounts, promotions, or offers currently available in-store.";
        (n = l || (l = {})).cta = "CTA",
        n.link = "link",
        n.video = "Video",
        n.icon = "icon",
        n.menu = "menu",
        n.scroll = "scroll";
        let o = "Start Shopping"
          , r = "Load More"
    }
}]);
