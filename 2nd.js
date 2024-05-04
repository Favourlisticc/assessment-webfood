(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2004], {
    9996: function(e) {
        "use strict";
        var isMergeableObject = function(e) {
            var r;
            return !!e && "object" == typeof e && "[object RegExp]" !== (r = Object.prototype.toString.call(e)) && "[object Date]" !== r && e.$$typeof !== t
        }
          , t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

        function defaultArrayMerge(e, t, r) {
            return e.concat(t).map(function(e) {
                return cneUnlessOtherwiseSpecified(e, r)
            })
        }
        function getKeys(e) {
            return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                return Object.propertyIsEnumerable.call(e, t)
            }) : [])
        }
        function propertyIsOnObject(e, t) {
            try {
                return t in e
            } catch (e) {
                return !1
            }
        }
        function deepmerge(e, t, r) {
            (r = r || {}).arrayMerge = r.arrayMerge || defaultArrayMerge,
            r.isMergeableObject = r.isMergeableObject || isMergeableObject,
            r.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
            var o, n, a = Array.isArray(t);
            return a !== Array.isArray(e) ? cloneUnlessOtherwiseSpecified(t, r) : a ? r.arrayMerge(e, t, r) : (n = {},
            (o = r).isMergeableObject(e) && getKeys(e).forEach(function(t) {
                n[t] = cloneUnlessOtherwiseSpecified(e[t], o)
            }),
            getKeys(t).forEach(function(r) {
                (!propertyIsOnObject(e, r) || Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r)) && (propertyIsOnObject(e, r) && o.isMergeableObject(t[r]) ? n[r] = (function(e, t) {
                    if (!t.customMerge)
                        return deepmerge;
                    var r = t.customMerge(e);
                    return "function" == typeof r ? r : deepmerge
                }
                )(r, o)(e[r], t[r], o) : n[r] = cloneUnlessOtherwiseSpecified(t[r], o))
            }),
            n)
        }
        deepmerge.all = function(e, t) {
            if (!Array.isArray(e))
                throw Error("first argument should be an array");
            return e.reduce(function(e, r) {
                return deepmerge(e, r, t)
            }, {})
        }
        ,
        e.exports = deepmerge
    },
    49090: function(e) {
        function stdOnEnd(e, t) {
            e.onload = function() {
                this.onerror = this.onload = null,
                t(null, e)
            }
            ,
            e.onerror = function() {
                this.onerror = this.onload = null,
                t(Error("Failed to load " + this.src), e)
            }
        }
        e.exports = function(e, t, r) {
            var o = document.head || document.getElementsByTagName("head")[0]
              , n = document.createElement("script");
            "function" == typeof t && (r = t,
            t = {}),
            t = t || {},
            r = r || function() {}
            ,
            n.type = t.type || "text/javascript",
            n.charset = t.charset || "utf8",
            n.async = !("async"in t) || !!t.async,
            n.src = e,
            t.attrs && function(e, t) {
                for (var r in t)
                    e.setAttribute(r, t[r])
            }(n, t.attrs),
            t.text && (n.text = "" + t.text),
            ("onload"in n ? stdOnEnd : function(e, t) {
                e.onreadystatechange = function() {
                    ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null,
                    t(null, e))
                }
            }
            )(n, r),
            n.onload || stdOnEnd(n, r),
            o.appendChild(n)
        }
    },
    30845: function(e, t, r) {
        "use strict";
        r.r(t);
        var o = Number.isNaN || function(e) {
            return "number" == typeof e && e != e
        }
        ;
        function areInputsEqual(e, t) {
            if (e.length !== t.length)
                return !1;
            for (var r, n, a = 0; a < e.length; a++)
                if (!((r = e[a]) === (n = t[a]) || o(r) && o(n)))
                    return !1;
            return !0
        }
        t.default = function(e, t) {
            void 0 === t && (t = areInputsEqual);
            var r, o, n = [], a = !1;
            return function() {
                for (var i = [], l = 0; l < arguments.length; l++)
                    i[l] = arguments[l];
                return a && r === this && t(i, n) || (o = e.apply(this, i),
                a = !0,
                r = this,
                n = i),
                o
            }
        }
    },
    92703: function(e, t, r) {
        "use strict";
        var o = r(50414);
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction,
        e.exports = function() {
            function shim(e, t, r, n, a, i) {
                if (i !== o) {
                    var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function getShim() {
                return shim
            }
            shim.isRequired = shim;
            var e = {
                array: shim,
                bigint: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            return e.PropTypes = e,
            e
        }
    },
    45697: function(e, t, r) {
        e.exports = r(92703)()
    },
    50414: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    69590: function(e) {
        var t = "undefined" != typeof Element
          , r = "function" == typeof Map
          , o = "function" == typeof Set
          , n = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        e.exports = function(e, a) {
            try {
                return function equal(e, a) {
                    if (e === a)
                        return !0;
                    if (e && a && "object" == typeof e && "object" == typeof a) {
                        var i, l, s, u;
                        if (e.constructor !== a.constructor)
                            return !1;
                        if (Array.isArray(e)) {
                            if ((i = e.length) != a.length)
                                return !1;
                            for (l = i; 0 != l--; )
                                if (!equal(e[l], a[l]))
                                    return !1;
                            return !0
                        }
                        if (r && e instanceof Map && a instanceof Map) {
                            if (e.size !== a.size)
                                return !1;
                            for (u = e.entries(); !(l = u.next()).done; )
                                if (!a.has(l.value[0]))
                                    return !1;
                            for (u = e.entries(); !(l = u.next()).done; )
                                if (!equal(l.value[1], a.get(l.value[0])))
                                    return !1;
                            return !0
                        }
                        if (o && e instanceof Set && a instanceof Set) {
                            if (e.size !== a.size)
                                return !1;
                            for (u = e.entries(); !(l = u.next()).done; )
                                if (!a.has(l.value[0]))
                                    return !1;
                            return !0
                        }
                        if (n && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                            if ((i = e.length) != a.length)
                                return !1;
                            for (l = i; 0 != l--; )
                                if (e[l] !== a[l])
                                    return !1;
                            return !0
                        }
                        if (e.constructor === RegExp)
                            return e.source === a.source && e.flags === a.flags;
                        if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof a.valueOf)
                            return e.valueOf() === a.valueOf();
                        if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof a.toString)
                            return e.toString() === a.toString();
                        if ((i = (s = Object.keys(e)).length) !== Object.keys(a).length)
                            return !1;
                        for (l = i; 0 != l--; )
                            if (!Object.prototype.hasOwnProperty.call(a, s[l]))
                                return !1;
                        if (t && e instanceof Element)
                            return !1;
                        for (l = i; 0 != l--; )
                            if (("_owner" !== s[l] && "__v" !== s[l] && "__o" !== s[l] || !e.$$typeof) && !equal(e[s[l]], a[s[l]]))
                                return !1;
                        return !0
                    }
                    return e != e && a != a
                }(e, a)
            } catch (e) {
                if ((e.message || "").match(/stack|recursion/i))
                    return console.warn("react-fast-compare cannot handle circular refs"),
                    !1;
                throw e
            }
        }
    },
    60722: function(e, t, r) {
        var o = Object.create
          , n = Object.defineProperty
          , a = Object.getOwnPropertyDescriptor
          , i = Object.getOwnPropertyNames
          , l = Object.getPrototypeOf
          , s = Object.prototype.hasOwnProperty
          , __defNormalProp = (e,t,r)=>t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , __copyProps = (e,t,r,o)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let l of i(t))
                    s.call(e, l) || l === r || n(e, l, {
                        get: ()=>t[l],
                        enumerable: !(o = a(t, l)) || o.enumerable
                    });
            return e
        }
          , __toESM = (e,t,r)=>(r = null != e ? o(l(e)) : {},
        __copyProps(!t && e && e.__esModule ? r : n(r, "default", {
            value: e,
            enumerable: !0
        }), e))
          , __publicField = (e,t,r)=>(__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r),
        r)
          , u = {};
        ((e,t)=>{
            for (var r in t)
                n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(u, {
            default: ()=>Player
        }),
        e.exports = __copyProps(n({}, "__esModule", {
            value: !0
        }), u);
        var p = __toESM(r(67294))
          , c = __toESM(r(69590))
          , d = r(85741)
          , y = r(38045);
        let Player = class Player extends p.Component {
            constructor() {
                super(...arguments),
                __publicField(this, "mounted", !1),
                __publicField(this, "isReady", !1),
                __publicField(this, "isPlaying", !1),
                __publicField(this, "isLoading", !0),
                __publicField(this, "loadOnReady", null),
                __publicField(this, "startOnPlay", !0),
                __publicField(this, "seekOnPlay", null),
                __publicField(this, "onDurationCalled", !1),
                __publicField(this, "handlePlayerMount", e=>{
                    if (this.player) {
                        this.progress();
                        return
                    }
                    this.player = e,
                    this.player.load(this.props.url),
                    this.progress()
                }
                ),
                __publicField(this, "getInternalPlayer", e=>this.player ? this.player[e] : null),
                __publicField(this, "progress", ()=>{
                    if (this.props.url && this.player && this.isReady) {
                        let e = this.getCurrentTime() || 0
                          , t = this.getSecondsLoaded()
                          , r = this.getDuration();
                        if (r) {
                            let o = {
                                playedSeconds: e,
                                played: e / r
                            };
                            null !== t && (o.loadedSeconds = t,
                            o.loaded = t / r),
                            (o.playedSeconds !== this.prevPlayed || o.loadedSeconds !== this.prevLoaded) && this.props.onProgress(o),
                            this.prevPlayed = o.playedSeconds,
                            this.prevLoaded = o.loadedSeconds
                        }
                    }
                    this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval)
                }
                ),
                __publicField(this, "handleReady", ()=>{
                    if (!this.mounted)
                        return;
                    this.isReady = !0,
                    this.isLoading = !1;
                    let {onReady: e, playing: t, volume: r, muted: o} = this.props;
                    e(),
                    o || null === r || this.player.setVolume(r),
                    this.loadOnReady ? (this.player.load(this.loadOnReady, !0),
                    this.loadOnReady = null) : t && this.player.play(),
                    this.handleDurationCheck()
                }
                ),
                __publicField(this, "handlePlay", ()=>{
                    this.isPlaying = !0,
                    this.isLoading = !1;
                    let {onStart: e, onPlay: t, playbackRate: r} = this.props;
                    this.startOnPlay && (this.player.setPlaybackRate && 1 !== r && this.player.setPlaybackRate(r),
                    e(),
                    this.startOnPlay = !1),
                    t(),
                    this.seekOnPlay && (this.seekTo(this.seekOnPlay),
                    this.seekOnPlay = null),
                    this.handleDurationCheck()
                }
                ),
                __publicField(this, "handlePause", e=>{
                    this.isPlaying = !1,
                    this.isLoading || this.props.onPause(e)
                }
                ),
                __publicField(this, "handleEnded", ()=>{
                    let {activePlayer: e, loop: t, onEnded: r} = this.props;
                    e.loopOnEnded && t && this.seekTo(0),
                    t || (this.isPlaying = !1,
                    r())
                }
                ),
                __publicField(this, "handleError", (...e)=>{
                    this.isLoading = !1,
                    this.props.onError(...e)
                }
                ),
                __publicField(this, "handleDurationCheck", ()=>{
                    clearTimeout(this.durationCheckTimeout);
                    let e = this.getDuration();
                    e ? this.onDurationCalled || (this.props.onDuration(e),
                    this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100)
                }
                ),
                __publicField(this, "handleLoaded", ()=>{
                    this.isLoading = !1
                }
                )
            }
            componentDidMount() {
                this.mounted = !0
            }
            componentWillUnmount() {
                clearTimeout(this.progressTimeout),
                clearTimeout(this.durationCheckTimeout),
                this.isReady && this.props.stopOnUnmount && (this.player.stop(),
                this.player.disablePIP && this.player.disablePIP()),
                this.mounted = !1
            }
            componentDidUpdate(e) {
                if (!this.player)
                    return;
                let {url: t, playing: r, volume: o, muted: n, playbackRate: a, pip: i, loop: l, activePlayer: s, disableDeferredLoading: u} = this.props;
                if (!(0,
                c.default)(e.url, t)) {
                    if (this.isLoading && !s.forceLoad && !u && !(0,
                    y.isMediaStream)(t)) {
                        console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),
                        this.loadOnReady = t;
                        return
                    }
                    this.isLoading = !0,
                    this.startOnPlay = !0,
                    this.onDurationCalled = !1,
                    this.player.load(t, this.isReady)
                }
                e.playing || !r || this.isPlaying || this.player.play(),
                e.playing && !r && this.isPlaying && this.player.pause(),
                !e.pip && i && this.player.enablePIP && this.player.enablePIP(),
                e.pip && !i && this.player.disablePIP && this.player.disablePIP(),
                e.volume !== o && null !== o && this.player.setVolume(o),
                e.muted !== n && (n ? this.player.mute() : (this.player.unmute(),
                null !== o && setTimeout(()=>this.player.setVolume(o)))),
                e.playbackRate !== a && this.player.setPlaybackRate && this.player.setPlaybackRate(a),
                e.loop !== l && this.player.setLoop && this.player.setLoop(l)
            }
            getDuration() {
                return this.isReady ? this.player.getDuration() : null
            }
            getCurrentTime() {
                return this.isReady ? this.player.getCurrentTime() : null
            }
            getSecondsLoaded() {
                return this.isReady ? this.player.getSecondsLoaded() : null
            }
            seekTo(e, t, r) {
                if (!this.isReady) {
                    0 !== e && (this.seekOnPlay = e,
                    setTimeout(()=>{
                        this.seekOnPlay = null
                    }
                    , 5e3));
                    return
                }
                let o = t ? "fraction" === t : e > 0 && e < 1;
                if (o) {
                    let t = this.player.getDuration();
                    if (!t) {
                        console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                        return
                    }
                    this.player.seekTo(t * e, r);
                    return
                }
                this.player.seekTo(e, r)
            }
            render() {
                let e = this.props.activePlayer;
                return e ? p.default.createElement(e, {
                    ...this.props,
                    onMount: this.handlePlayerMount,
                    onReady: this.handleReady,
                    onPlay: this.handlePlay,
                    onPause: this.handlePause,
                    onEnded: this.handleEnded,
                    onLoaded: this.handleLoaded,
                    onError: this.handleError
                }) : null
            }
        }
        ;
        __publicField(Player, "displayName", "Player"),
        __publicField(Player, "propTypes", d.propTypes),
        __publicField(Player, "defaultProps", d.defaultProps)
    },
    70390: function(e, t, r) {
        var o = Object.create
          , n = Object.defineProperty
          , a = Object.getOwnPropertyDescriptor
          , i = Object.getOwnPropertyNames
          , l = Object.getPrototypeOf
          , s = Object.prototype.hasOwnProperty
          , __defNormalProp = (e,t,r)=>t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r
          , __copyProps = (e,t,r,o)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let l of i(t))
                    s.call(e, l) || l === r || n(e, l, {
                        get: ()=>t[l],
                        enumerable: !(o = a(t, l)) || o.enumerable
                    });
            return e
        }
          , __toESM = (e,t,r)=>(r = null != e ? o(l(e)) : {},
        __copyProps(!t && e && e.__esModule ? r : n(r, "default", {
            value: e,
            enumerable: !0
        }), e))
          , __publicField = (e,t,r)=>(__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r),
        r)
          , u = {};
        ((e,t)=>{
            for (var r in t)
                n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(u, {
            createReactPlayer: ()=>createReactPlayer
        }),
        e.exports = __copyProps(n({}, "__esModule", {
            value: !0
        }), u);
        var p = __toESM(r(67294))
          , c = __toESM(r(9996))
          , d = __toESM(r(30845))
          , y = __toESM(r(69590))
          , h = r(85741)
          , f = r(38045)
          , m = __toESM(r(60722));
        let b = (0,
        f.lazy)(()=>r.e(7664).then(r.t.bind(r, 83855, 23)))
          , _ = "undefined" != typeof window && window.document
          , P = void 0 !== r.g && r.g.window && r.g.window.document
          , g = Object.keys(h.propTypes)
          , O = _ || P ? p.Suspense : ()=>null
          , w = []
          , createReactPlayer = (e,t)=>{
            var r;
            return r = class extends p.Component {
                constructor() {
                    super(...arguments),
                    __publicField(this, "state", {
                        showPreview: !!this.props.light
                    }),
                    __publicField(this, "references", {
                        wrapper: e=>{
                            this.wrapper = e
                        }
                        ,
                        player: e=>{
                            this.player = e
                        }
                    }),
                    __publicField(this, "handleClickPreview", e=>{
                        this.setState({
                            showPreview: !1
                        }),
                        this.props.onClickPreview(e)
                    }
                    ),
                    __publicField(this, "showPreview", ()=>{
                        this.setState({
                            showPreview: !0
                        })
                    }
                    ),
                    __publicField(this, "getDuration", ()=>this.player ? this.player.getDuration() : null),
                    __publicField(this, "getCurrentTime", ()=>this.player ? this.player.getCurrentTime() : null),
                    __publicField(this, "getSecondsLoaded", ()=>this.player ? this.player.getSecondsLoaded() : null),
                    __publicField(this, "getInternalPlayer", (e="player")=>this.player ? this.player.getInternalPlayer(e) : null),
                    __publicField(this, "seekTo", (e,t,r)=>{
                        if (!this.player)
                            return null;
                        this.player.seekTo(e, t, r)
                    }
                    ),
                    __publicField(this, "handleReady", ()=>{
                        this.props.onReady(this)
                    }
                    ),
                    __publicField(this, "getActivePlayer", (0,
                    d.default)(r=>{
                        for (let t of [...w, ...e])
                            if (t.canPlay(r))
                                return t;
                        return t || null
                    }
                    )),
                    __publicField(this, "getConfig", (0,
                    d.default)((e,t)=>{
                        let {config: r} = this.props;
                        return c.default.all([h.defaultProps.config, h.defaultProps.config[t] || {}, r, r[t] || {}])
                    }
                    )),
                    __publicField(this, "getAttributes", (0,
                    d.default)(e=>(0,
                    f.omit)(this.props, g))),
                    __publicField(this, "renderActivePlayer", e=>{
                        if (!e)
                            return null;
                        let t = this.getActivePlayer(e);
                        if (!t)
                            return null;
                        let r = this.getConfig(e, t.key);
                        return p.default.createElement(m.default, {
                            ...this.props,
                            key: t.key,
                            ref: this.references.player,
                            config: r,
                            activePlayer: t.lazyPlayer || t,
                            onReady: this.handleReady
                        })
                    }
                    )
                }
                shouldComponentUpdate(e, t) {
                    return !(0,
                    y.default)(this.props, e) || !(0,
                    y.default)(this.state, t)
                }
                componentDidUpdate(e) {
                    let {light: t} = this.props;
                    !e.light && t && this.setState({
                        showPreview: !0
                    }),
                    e.light && !t && this.setState({
                        showPreview: !1
                    })
                }
                renderPreview(e) {
                    if (!e)
                        return null;
                    let {light: t, playIcon: r, previewTabIndex: o, oEmbedUrl: n} = this.props;
                    return p.default.createElement(b, {
                        url: e,
                        light: t,
                        playIcon: r,
                        previewTabIndex: o,
                        oEmbedUrl: n,
                        onClick: this.handleClickPreview
                    })
                }
                render() {
                    let {url: e, style: t, width: r, height: o, fallback: n, wrapper: a} = this.props
                      , {showPreview: i} = this.state
                      , l = this.getAttributes(e)
                      , s = "string" == typeof a ? this.references.wrapper : void 0;
                    return p.default.createElement(a, {
                        ref: s,
                        style: {
                            ...t,
                            width: r,
                            height: o
                        },
                        ...l
                    }, p.default.createElement(O, {
                        fallback: n
                    }, i ? this.renderPreview(e) : this.renderActivePlayer(e)))
                }
            }
            ,
            __publicField(r, "displayName", "ReactPlayer"),
            __publicField(r, "propTypes", h.propTypes),
            __publicField(r, "defaultProps", h.defaultProps),
            __publicField(r, "addCustomPlayer", e=>{
                w.push(e)
            }
            ),
            __publicField(r, "removeCustomPlayers", ()=>{
                w.length = 0
            }
            ),
            __publicField(r, "canPlay", t=>{
                for (let r of [...w, ...e])
                    if (r.canPlay(t))
                        return !0;
                return !1
            }
            ),
            __publicField(r, "canEnablePIP", t=>{
                for (let r of [...w, ...e])
                    if (r.canEnablePIP && r.canEnablePIP(t))
                        return !0;
                return !1
            }
            ),
            r
        }
    },
    22004: function(e, t, r) {
        var o, n, a = Object.create, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, u = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty, __copyProps = (e,t,r,o)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let n of s(t))
                    p.call(e, n) || n === r || i(e, n, {
                        get: ()=>t[n],
                        enumerable: !(o = l(t, n)) || o.enumerable
                    });
            return e
        }
        , c = {};
        ((e,t)=>{
            for (var r in t)
                i(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(c, {
            default: ()=>f
        }),
        e.exports = __copyProps(i({}, "__esModule", {
            value: !0
        }), c);
        var d = (n = null != (o = r(86497)) ? a(u(o)) : {},
        __copyProps(o && o.__esModule ? n : i(n, "default", {
            value: o,
            enumerable: !0
        }), o))
          , y = r(70390);
        let h = d.default[d.default.length - 1];
        var f = (0,
        y.createReactPlayer)(d.default, h)
    },
    71776: function(e, t, r) {
        var o = Object.defineProperty
          , n = Object.getOwnPropertyDescriptor
          , a = Object.getOwnPropertyNames
          , i = Object.prototype.hasOwnProperty
          , l = {};
        ((e,t)=>{
            for (var r in t)
                o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(l, {
            AUDIO_EXTENSIONS: ()=>w,
            DASH_EXTENSIONS: ()=>E,
            FLV_EXTENSIONS: ()=>k,
            HLS_EXTENSIONS: ()=>S,
            MATCH_URL_DAILYMOTION: ()=>_,
            MATCH_URL_FACEBOOK: ()=>d,
            MATCH_URL_FACEBOOK_WATCH: ()=>y,
            MATCH_URL_KALTURA: ()=>O,
            MATCH_URL_MIXCLOUD: ()=>P,
            MATCH_URL_SOUNDCLOUD: ()=>p,
            MATCH_URL_STREAMABLE: ()=>h,
            MATCH_URL_TWITCH_CHANNEL: ()=>b,
            MATCH_URL_TWITCH_VIDEO: ()=>m,
            MATCH_URL_VIDYARD: ()=>g,
            MATCH_URL_VIMEO: ()=>c,
            MATCH_URL_WISTIA: ()=>f,
            MATCH_URL_YOUTUBE: ()=>u,
            VIDEO_EXTENSIONS: ()=>v,
            canPlay: ()=>T
        }),
        e.exports = ((e,t,r,l)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let r of a(t))
                    i.call(e, r) || void 0 === r || o(e, r, {
                        get: ()=>t[r],
                        enumerable: !(l = n(t, r)) || l.enumerable
                    });
            return e
        }
        )(o({}, "__esModule", {
            value: !0
        }), l);
        var s = r(38045);
        let u = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//
          , p = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/
          , c = /vimeo\.com\/(?!progressive_redirect).+/
          , d = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/
          , y = /^https?:\/\/fb\.watch\/.+$/
          , h = /streamable\.com\/([a-z0-9]+)$/
          , f = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/
          , m = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/
          , b = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/
          , _ = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/
          , P = /mixcloud\.com\/([^/]+\/[^/]+)/
          , g = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/
          , O = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/
          , w = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i
          , v = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i
          , S = /\.(m3u8)($|\?)/i
          , E = /\.(mpd)($|\?)/i
          , k = /\.(flv)($|\?)/i
          , canPlayFile = e=>{
            if (e instanceof Array) {
                for (let t of e)
                    if ("string" == typeof t && canPlayFile(t) || canPlayFile(t.src))
                        return !0;
                return !1
            }
            return !!((0,
            s.isMediaStream)(e) || (0,
            s.isBlobUrl)(e)) || w.test(e) || v.test(e) || S.test(e) || E.test(e) || k.test(e)
        }
          , T = {
            youtube: e=>e instanceof Array ? e.every(e=>u.test(e)) : u.test(e),
            soundcloud: e=>p.test(e) && !w.test(e),
            vimeo: e=>c.test(e) && !v.test(e) && !S.test(e),
            facebook: e=>d.test(e) || y.test(e),
            streamable: e=>h.test(e),
            wistia: e=>f.test(e),
            twitch: e=>m.test(e) || b.test(e),
            dailymotion: e=>_.test(e),
            mixcloud: e=>P.test(e),
            vidyard: e=>g.test(e),
            kaltura: e=>O.test(e),
            file: canPlayFile
        }
    },
    86497: function(e, t, r) {
        var o = Object.defineProperty
          , n = Object.getOwnPropertyDescriptor
          , a = Object.getOwnPropertyNames
          , i = Object.prototype.hasOwnProperty
          , l = {};
        ((e,t)=>{
            for (var r in t)
                o(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(l, {
            default: ()=>p
        }),
        e.exports = ((e,t,r,l)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let r of a(t))
                    i.call(e, r) || void 0 === r || o(e, r, {
                        get: ()=>t[r],
                        enumerable: !(l = n(t, r)) || l.enumerable
                    });
            return e
        }
        )(o({}, "__esModule", {
            value: !0
        }), l);
        var s = r(38045)
          , u = r(71776)
          , p = [{
            key: "youtube",
            name: "YouTube",
            canPlay: u.canPlay.youtube,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(4439).then(r.t.bind(r, 60356, 23)))
        }, {
            key: "soundcloud",
            name: "SoundCloud",
            canPlay: u.canPlay.soundcloud,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(6125).then(r.t.bind(r, 72648, 23)))
        }, {
            key: "vimeo",
            name: "Vimeo",
            canPlay: u.canPlay.vimeo,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(3743).then(r.t.bind(r, 80868, 23)))
        }, {
            key: "facebook",
            name: "Facebook",
            canPlay: u.canPlay.facebook,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(2121).then(r.t.bind(r, 31972, 23)))
        }, {
            key: "streamable",
            name: "Streamable",
            canPlay: u.canPlay.streamable,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(2546).then(r.t.bind(r, 50993, 23)))
        }, {
            key: "wistia",
            name: "Wistia",
            canPlay: u.canPlay.wistia,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(8055).then(r.t.bind(r, 8018, 23)))
        }, {
            key: "twitch",
            name: "Twitch",
            canPlay: u.canPlay.twitch,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(6216).then(r.t.bind(r, 29482, 23)))
        }, {
            key: "dailymotion",
            name: "DailyMotion",
            canPlay: u.canPlay.dailymotion,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(7596).then(r.t.bind(r, 36807, 23)))
        }, {
            key: "mixcloud",
            name: "Mixcloud",
            canPlay: u.canPlay.mixcloud,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(4667).then(r.t.bind(r, 50143, 23)))
        }, {
            key: "vidyard",
            name: "Vidyard",
            canPlay: u.canPlay.vidyard,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(8888).then(r.t.bind(r, 36596, 23)))
        }, {
            key: "kaltura",
            name: "Kaltura",
            canPlay: u.canPlay.kaltura,
            lazyPlayer: (0,
            s.lazy)(()=>r.e(261).then(r.t.bind(r, 73911, 23)))
        }, {
            key: "file",
            name: "FilePlayer",
            canPlay: u.canPlay.file,
            canEnablePIP: e=>u.canPlay.file(e) && (document.pictureInPictureEnabled || (0,
            s.supportsWebKitPresentationMode)()) && !u.AUDIO_EXTENSIONS.test(e),
            lazyPlayer: (0,
            s.lazy)(()=>r.e(6011).then(r.t.bind(r, 14926, 23)))
        }]
    },
    85741: function(e, t, r) {
        var o, n, a = Object.create, i = Object.defineProperty, l = Object.getOwnPropertyDescriptor, s = Object.getOwnPropertyNames, u = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty, __copyProps = (e,t,r,o)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let n of s(t))
                    p.call(e, n) || n === r || i(e, n, {
                        get: ()=>t[n],
                        enumerable: !(o = l(t, n)) || o.enumerable
                    });
            return e
        }
        , c = {};
        ((e,t)=>{
            for (var r in t)
                i(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(c, {
            defaultProps: ()=>v,
            propTypes: ()=>w
        }),
        e.exports = __copyProps(i({}, "__esModule", {
            value: !0
        }), c);
        var d = (n = null != (o = r(45697)) ? a(u(o)) : {},
        __copyProps(o && o.__esModule ? n : i(n, "default", {
            value: o,
            enumerable: !0
        }), o));
        let {string: y, bool: h, number: f, array: m, oneOfType: b, shape: _, object: P, func: g, node: O} = d.default
          , w = {
            url: b([y, m, P]),
            playing: h,
            loop: h,
            controls: h,
            volume: f,
            muted: h,
            playbackRate: f,
            width: b([y, f]),
            height: b([y, f]),
            style: P,
            progressInterval: f,
            playsinline: h,
            pip: h,
            stopOnUnmount: h,
            light: b([h, y, P]),
            playIcon: O,
            previewTabIndex: f,
            fallback: O,
            oEmbedUrl: y,
            wrapper: b([y, g, _({
                render: g.isRequired
            })]),
            config: _({
                soundcloud: _({
                    options: P
                }),
                youtube: _({
                    playerVars: P,
                    embedOptions: P,
                    onUnstarted: g
                }),
                facebook: _({
                    appId: y,
                    version: y,
                    playerId: y,
                    attributes: P
                }),
                dailymotion: _({
                    params: P
                }),
                vimeo: _({
                    playerOptions: P,
                    title: y
                }),
                file: _({
                    attributes: P,
                    tracks: m,
                    forceVideo: h,
                    forceAudio: h,
                    forceHLS: h,
                    forceSafariHLS: h,
                    forceDisableHls: h,
                    forceDASH: h,
                    forceFLV: h,
                    hlsOptions: P,
                    hlsVersion: y,
                    dashVersion: y,
                    flvVersion: y
                }),
                wistia: _({
                    options: P,
                    playerId: y,
                    customControls: m
                }),
                mixcloud: _({
                    options: P
                }),
                twitch: _({
                    options: P,
                    playerId: y
                }),
                vidyard: _({
                    options: P
                })
            }),
            onReady: g,
            onStart: g,
            onPlay: g,
            onPause: g,
            onBuffer: g,
            onBufferEnd: g,
            onEnded: g,
            onError: g,
            onDuration: g,
            onSeek: g,
            onPlaybackRateChange: g,
            onPlaybackQualityChange: g,
            onProgress: g,
            onClickPreview: g,
            onEnablePIP: g,
            onDisablePIP: g
        }
          , noop = ()=>{}
          , v = {
            playing: !1,
            loop: !1,
            controls: !1,
            volume: null,
            muted: !1,
            playbackRate: 1,
            width: "640px",
            height: "360px",
            style: {},
            progressInterval: 1e3,
            playsinline: !1,
            pip: !1,
            stopOnUnmount: !0,
            light: !1,
            fallback: null,
            wrapper: "div",
            previewTabIndex: 0,
            oEmbedUrl: "https://noembed.com/embed?url={url}",
            config: {
                soundcloud: {
                    options: {
                        visual: !0,
                        buying: !1,
                        liking: !1,
                        download: !1,
                        sharing: !1,
                        show_comments: !1,
                        show_playcount: !1
                    }
                },
                youtube: {
                    playerVars: {
                        playsinline: 1,
                        showinfo: 0,
                        rel: 0,
                        iv_load_policy: 3,
                        modestbranding: 1
                    },
                    embedOptions: {},
                    onUnstarted: noop
                },
                facebook: {
                    appId: "1309697205772819",
                    version: "v3.3",
                    playerId: null,
                    attributes: {}
                },
                dailymotion: {
                    params: {
                        api: 1,
                        "endscreen-enable": !1
                    }
                },
                vimeo: {
                    playerOptions: {
                        autopause: !1,
                        byline: !1,
                        portrait: !1,
                        title: !1
                    },
                    title: null
                },
                file: {
                    attributes: {},
                    tracks: [],
                    forceVideo: !1,
                    forceAudio: !1,
                    forceHLS: !1,
                    forceDASH: !1,
                    forceFLV: !1,
                    hlsOptions: {},
                    hlsVersion: "1.1.4",
                    dashVersion: "3.1.3",
                    flvVersion: "1.5.0",
                    forceDisableHls: !1
                },
                wistia: {
                    options: {},
                    playerId: null,
                    customControls: null
                },
                mixcloud: {
                    options: {
                        hide_cover: 1
                    }
                },
                twitch: {
                    options: {},
                    playerId: null
                },
                vidyard: {
                    options: {}
                }
            },
            onReady: noop,
            onStart: noop,
            onPlay: noop,
            onPause: noop,
            onBuffer: noop,
            onBufferEnd: noop,
            onEnded: noop,
            onError: noop,
            onDuration: noop,
            onSeek: noop,
            onPlaybackRateChange: noop,
            onPlaybackQualityChange: noop,
            onProgress: noop,
            onClickPreview: noop,
            onEnablePIP: noop,
            onDisablePIP: noop
        }
    },
    38045: function(e, t, r) {
        var o = Object.create
          , n = Object.defineProperty
          , a = Object.getOwnPropertyDescriptor
          , i = Object.getOwnPropertyNames
          , l = Object.getPrototypeOf
          , s = Object.prototype.hasOwnProperty
          , __copyProps = (e,t,r,o)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let l of i(t))
                    s.call(e, l) || l === r || n(e, l, {
                        get: ()=>t[l],
                        enumerable: !(o = a(t, l)) || o.enumerable
                    });
            return e
        }
          , __toESM = (e,t,r)=>(r = null != e ? o(l(e)) : {},
        __copyProps(!t && e && e.__esModule ? r : n(r, "default", {
            value: e,
            enumerable: !0
        }), e))
          , u = {};
        ((e,t)=>{
            for (var r in t)
                n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(u, {
            callPlayer: ()=>callPlayer,
            getConfig: ()=>getConfig,
            getSDK: ()=>getSDK,
            isBlobUrl: ()=>isBlobUrl,
            isMediaStream: ()=>isMediaStream,
            lazy: ()=>lazy,
            omit: ()=>omit,
            parseEndTime: ()=>parseEndTime,
            parseStartTime: ()=>parseStartTime,
            queryString: ()=>queryString,
            randomString: ()=>randomString,
            supportsWebKitPresentationMode: ()=>supportsWebKitPresentationMode
        }),
        e.exports = __copyProps(n({}, "__esModule", {
            value: !0
        }), u);
        var p = __toESM(r(67294))
          , c = __toESM(r(49090))
          , d = __toESM(r(9996));
        let lazy = e=>p.default.lazy(async()=>{
            let t = await e();
            return "function" == typeof t.default ? t : t.default
        }
        )
          , y = /[?&#](?:start|t)=([0-9hms]+)/
          , h = /[?&#]end=([0-9hms]+)/
          , f = /(\d+)(h|m|s)/g
          , m = /^\d+$/;
        function parseTimeParam(e, t) {
            if (e instanceof Array)
                return;
            let r = e.match(t);
            if (r) {
                let e = r[1];
                if (e.match(f))
                    return function(e) {
                        let t = 0
                          , r = f.exec(e);
                        for (; null !== r; ) {
                            let[,o,n] = r;
                            "h" === n && (t += 3600 * parseInt(o, 10)),
                            "m" === n && (t += 60 * parseInt(o, 10)),
                            "s" === n && (t += parseInt(o, 10)),
                            r = f.exec(e)
                        }
                        return t
                    }(e);
                if (m.test(e))
                    return parseInt(e)
            }
        }
        function parseStartTime(e) {
            return parseTimeParam(e, y)
        }
        function parseEndTime(e) {
            return parseTimeParam(e, h)
        }
        function randomString() {
            return Math.random().toString(36).substr(2, 5)
        }
        function queryString(e) {
            return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")
        }
        function getGlobal(e) {
            return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
        }
        let b = {}
          , getSDK = function(e, t, r=null, o=()=>!0, n=c.default) {
            let a = getGlobal(t);
            return a && o(a) ? Promise.resolve(a) : new Promise((o,a)=>{
                if (b[e]) {
                    b[e].push({
                        resolve: o,
                        reject: a
                    });
                    return
                }
                b[e] = [{
                    resolve: o,
                    reject: a
                }];
                let onLoaded = t=>{
                    b[e].forEach(e=>e.resolve(t))
                }
                ;
                if (r) {
                    let e = window[r];
                    window[r] = function() {
                        e && e(),
                        onLoaded(getGlobal(t))
                    }
                }
                n(e, o=>{
                    o ? (b[e].forEach(e=>e.reject(o)),
                    b[e] = null) : r || onLoaded(getGlobal(t))
                }
                )
            }
            )
        };
        function getConfig(e, t) {
            return (0,
            d.default)(t.config, e.config)
        }
        function omit(e, ...t) {
            let r = [].concat(...t)
              , o = {}
              , n = Object.keys(e);
            for (let t of n)
                -1 === r.indexOf(t) && (o[t] = e[t]);
            return o
        }
        function callPlayer(e, ...t) {
            if (!this.player || !this.player[e]) {
                let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
                return this.player ? this.player[e] || (t += "The method was not available") : t += "The player was not available",
                console.warn(t, "font-weight: bold", ""),
                null
            }
            return this.player[e](...t)
        }
        function isMediaStream(e) {
            return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
        }
        function isBlobUrl(e) {
            return /^blob:/.test(e)
        }
        function supportsWebKitPresentationMode(e=document.createElement("video")) {
            let t = !1 === /iPhone|iPod/.test(navigator.userAgent);
            return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
        }
    }
}]);
