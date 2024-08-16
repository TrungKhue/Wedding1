(function(sttc) {
    'use strict';
    var aa, ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ia = {},
        ka = {};

    function la(a, b, c) {
        if (!c || a != null) {
            c = ka[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function na(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ia ? f = ia : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = fa && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ca(ia, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ka[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ka[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var oa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        qa;
    if (fa && typeof Object.setPrototypeOf == "function") qa = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        qa = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = qa;

    function wa(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (va) va(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Pj = b.prototype
    }
    na("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    na("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    na("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        wa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    na("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ia.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var r = this || self;

    function xa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = r, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function Aa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ba(a) {
        var b = Aa(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function Da(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Ea(a) {
        return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++Ga)
    }
    var Fa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Ga = 0;

    function Ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ia(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ja(a, b, c) {
        Ja = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ha : Ia;
        return Ja.apply(null, arguments)
    }

    function Ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function La(a, b, c) {
        a = a.split(".");
        c = c || r;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ma(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Pj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.no = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function Na(a) {
        return a
    };
    var Pa = {
        gn: 0,
        fn: 1,
        en: 2
    };

    function Qa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Qa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Ma(Qa, Error);
    Qa.prototype.name = "CustomError";
    var Ra;

    function Sa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Qa.call(this, c + a[d])
    }
    Ma(Sa, Qa);
    Sa.prototype.name = "AssertionError";

    function Ta(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ua(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Va(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Wa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let h = 0; h < c; h++)
            if (h in f) {
                const k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }

    function Xa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ya(a, b, c) {
        let d = c;
        Ua(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Za(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function $a(a, b) {
        return Ta(a, b) >= 0
    }

    function bb(a, b) {
        b = Ta(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function cb(a, b) {
        let c = 0;
        Va(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function fb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (Ba(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let h = 0; h < f; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function jb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function kb(a, b, c) {
        c = c || lb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const h = d + (e - d >>> 1);
            let k;
            k = c(b, a[h]);
            k > 0 ? d = h + 1 : (e = h, f = !k)
        }
        return f ? d : -d - 1
    }

    function mb(a, b) {
        if (!Ba(a) || !Ba(b) || a.length != b.length) return !1;
        const c = a.length,
            d = nb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function nb(a, b) {
        return a === b
    }

    function ob(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = ob.apply(null, jb(d, e, e + 8192));
                    for (let h = 0; h < f.length; h++) b.push(f[h])
                } else b.push(d)
        }
        return b
    }

    function pb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var qb = {
        ck: "google_adtest",
        gk: "google_ad_client",
        qk: "google_ad_intent_query",
        pk: "google_ad_intent_qetid",
        nk: "google_ad_intent_eids",
        hk: "google_ad_format",
        jk: "google_ad_height",
        Bk: "google_ad_width",
        rk: "google_ad_layout",
        sk: "google_ad_layout_key",
        tk: "google_ad_output",
        uk: "google_ad_region",
        xk: "google_ad_slot",
        zk: "google_ad_type",
        Ak: "google_ad_url",
        Vk: "google_analytics_domain_name",
        Wk: "google_analytics_uacct",
        ml: "google_container_id",
        Bl: "google_gl",
        Vl: "google_enable_ose",
        fm: "google_full_width_responsive",
        kn: "google_rl_filtering",
        jn: "google_rl_mode",
        ln: "google_rt",
        hn: "google_rl_dest_url",
        Mm: "google_max_radlink_len",
        Sm: "google_num_radlinks",
        Tm: "google_num_radlinks_per_unit",
        fk: "google_ad_channel",
        Lm: "google_max_num_ads",
        Nm: "google_max_responsive_height",
        gl: "google_color_border",
        Ul: "google_enable_content_recommendations",
        yl: "google_content_recommendation_ui_type",
        xl: "google_source_type",
        wl: "google_content_recommendation_rows_num",
        vl: "google_content_recommendation_columns_num",
        ul: "google_content_recommendation_ad_positions",
        zl: "google_content_recommendation_use_square_imgs",
        jl: "google_color_link",
        il: "google_color_line",
        ll: "google_color_url",
        dk: "google_ad_block",
        wk: "google_ad_section",
        ek: "google_ad_callback",
        dl: "google_captcha_token",
        kl: "google_color_text",
        Nk: "google_alternate_ad_url",
        mk: "google_ad_host_tier_id",
        el: "google_city",
        kk: "google_ad_host",
        lk: "google_ad_host_channel",
        Ok: "google_alternate_color",
        fl: "google_color_bg",
        Wl: "google_encoding",
        dm: "google_font_face",
        El: "google_cust_ch",
        Hl: "google_cust_job",
        Gl: "google_cust_interests",
        Fl: "google_cust_id",
        Il: "google_cust_u_url",
        hm: "google_hints",
        xm: "google_image_size",
        Om: "google_mtl",
        Pn: "google_cpm",
        rl: "google_contents",
        Qm: "google_native_settings_key",
        Al: "google_country",
        Hn: "google_targeting",
        em: "google_font_size",
        Ll: "google_disable_video_autoplay",
        fo: "google_video_product_type",
        eo: "google_video_doc_id",
        co: "google_cust_gender",
        Bn: "google_cust_lh",
        An: "google_cust_l",
        On: "google_tfs",
        Pm: "google_native_ad_template",
        Dm: "google_kw",
        En: "google_tag_for_child_directed_treatment",
        Fn: "google_tag_for_under_age_of_consent",
        nn: "google_region",
        Dl: "google_cust_criteria",
        vk: "google_safe",
        Cl: "google_ctr_threshold",
        on: "google_resizing_allowed",
        qn: "google_resizing_width",
        pn: "google_resizing_height",
        bo: "google_cust_age",
        Gm: "google_language",
        Em: "google_kw_type",
        bn: "google_pucrd",
        Zm: "google_page_url",
        Gn: "google_tag_partner",
        vn: "google_restrict_data_processing",
        Yj: "google_adbreak_test",
        ik: "google_ad_frequency_hint",
        ak: "google_admob_interstitial_slot",
        bk: "google_admob_rewarded_slot",
        Zj: "google_admob_ads_only",
        yk: "google_ad_start_delay_hint",
        Km: "google_max_ad_content_rating",
        dn: "google_ad_public_floor",
        cn: "google_ad_private_floor",
        Zn: "google_traffic_source",
        yn: "google_shadow_mode",
        Wm: "google_overlays",
        an: "google_privacy_treatments",
        Cn: "google_special_category_data",
        ho: "google_wrap_fullscreen_ad"
    };

    function rb(a, b) {
        this.g = a === tb && b || "";
        this.i = ub
    }
    rb.prototype.toString = function() {
        return this.g
    };

    function vb(a) {
        return a instanceof rb && a.constructor === rb && a.i === ub ? a.g : "type_error:Const"
    }
    var ub = {},
        tb = {};

    function wb() {
        return !1
    }

    function xb() {
        return !0
    }

    function yb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function zb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ab(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Bb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Cb(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Db(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let k = h;
            h = [];
            a.apply(b, k)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            h = [];
        return function(k) {
            h = arguments;
            e ? f = !0 : c()
        }
    };
    var Eb = {
            passive: !0
        },
        Fb = Ab(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Gb(a) {
        return a ? a.passive && Fb() ? a : a.capture || !1 : !1
    }

    function Hb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Gb(d)), !0) : !1
    }

    function Ib(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Gb(d)), !0) : !1
    };

    function Jb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Kb(a) {
        var b = Lb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Mb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Nb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Pb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ob.length; f++) c = Ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Qb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Rb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sb(a) {
        if (!Tb.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ub, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Vb, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Wb, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Xb, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Yb, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Zb, "&#0;"));
        return a
    }
    var Ub = /&/g,
        Vb = /</g,
        Wb = />/g,
        Xb = /"/g,
        Yb = /'/g,
        Zb = /\x00/g,
        Tb = /[\x00&<>"']/;

    function $b(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    var ac;

    function bc() {
        if (ac === void 0) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Na,
                        createScript: Na,
                        createScriptURL: Na
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                ac = a
            } else ac = a
        }
        return ac
    };
    var cc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function dc(a, b) {
        a = ec.exec(fc(a).toString());
        const c = a[3] || "";
        return gc(a[1] + hc("?", a[2] || "", b) + hc("#", c))
    }

    function fc(a) {
        return a instanceof cc && a.constructor === cc ? a.g : "type_error:TrustedResourceUrl"
    }

    function ic(a, b) {
        var c = vb(a);
        if (!jc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(kc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof rb ? vb(d) : encodeURIComponent(String(d))
        });
        return gc(a)
    }
    var kc = /%{(\w+)}/g,
        jc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function lc(a, b) {
        return dc(ic(new rb(tb, "https://fundingchoicesmessages.google.com/i/%{id}"), a), b)
    }
    var mc = {};

    function gc(a) {
        const b = bc();
        a = b ? b.createScriptURL(a) : a;
        return new cc(a, mc)
    }

    function hc(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    h != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var nc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        oc = new nc("about:invalid#zClosurez");

    function pc(a) {
        if (a instanceof nc) return a.g;
        throw Error("");
    };
    class qc {
        constructor(a) {
            this.dj = a
        }
    }

    function rc(a) {
        return new qc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const sc = [rc("data"), rc("http"), rc("https"), rc("mailto"), rc("ftp"), new qc(a => /^[^:]*([/?#]|$)/.test(a))];

    function tc(a, b = sc) {
        if (a instanceof nc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof qc && d.dj(a)) return new nc(a)
        }
    }

    function uc(a) {
        return tc(a, sc) || oc
    }
    var vc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function wc(a) {
        if (vc.test(a)) return a
    }

    function xc(a) {
        return a instanceof nc ? pc(a) : wc(a)
    };
    const yc = {};

    function zc(a) {
        return a instanceof Ac && a.constructor === Ac ? a.g : "type_error:SafeStyle"
    }
    class Ac {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var Bc = new Ac("", yc);

    function Cc(a) {
        if (a instanceof nc) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof rb) a = vb(a);
        else {
            a = String(a);
            var b = a.replace(Dc, "$1").replace(Dc, "$1").replace(Ec, "url");
            if (Fc.test(b)) {
                if (b = !Gc.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                    }
                    b = b && c && Hc(a)
                }
                a = b ? Ic(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Sa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Hc(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if (e == "]") {
                if (b) return !1;
                b = !0
            } else if (e == "[") {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Fc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Ec = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Dc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Gc = /\/\*/;

    function Ic(a) {
        return a.replace(Ec, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (h, k, l) => {
                f = k;
                return l
            });
            b = uc(d).toString();
            return c + f + b + f + e
        })
    };
    const Jc = {};

    function Kc(a) {
        return a instanceof Lc && a.constructor === Lc ? a.g : "type_error:SafeStyleSheet"
    }
    class Lc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const Mc = {};

    function Nc(a) {
        return a instanceof Oc && a.constructor === Oc ? a.g : "type_error:SafeHtml"
    }

    function Pc(a) {
        const b = bc();
        a = b ? b.createHTML(a) : a;
        return new Oc(a, Mc)
    }

    function Qc(a) {
        var b = Rc;
        b = b instanceof Oc ? b : Pc(Sb(String(b)));
        const c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof Oc ? e : Pc(Sb(String(e))), c.push(Nc(e).toString()))
            };
        a.forEach(d);
        return Pc(c.join(Nc(b).toString()))
    }

    function Sc(a) {
        return Qc(Array.prototype.slice.call(arguments))
    }
    class Oc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const Tc = /^[a-zA-Z0-9-]+$/,
        Uc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Vc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Rc = new Oc(r.trustedTypes && r.trustedTypes.emptyHTML || "", Mc);
    var Wc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Xc(a) {
        return new Wc(a[0].toLowerCase())
    };

    function Yc(a) {
        return new Lc(a[0], Jc)
    };

    function Zc(a) {
        var b = {};
        if (a instanceof Oc) return a;
        a = $c(String(a));
        b.Ao && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.zo && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Bo && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return Pc(a)
    }

    function $c(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function ad(a) {
        const b = Zc("");
        return Pc(a.map(c => Nc(Zc(c))).join(Nc(b).toString()))
    }
    const bd = /^[a-z][a-z\d-]*$/i,
        cd = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var dd = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const ed = ["action", "formaction", "href"];

    function fd(a, b) {
        if (!bd.test("body")) throw Error("");
        if (cd.indexOf("BODY") !== -1) throw Error("");
        let c = "<body";
        a && (c += gd(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        dd.indexOf("BODY") !== -1 ? c += ">" : (a = ad(b.map(d => d instanceof Oc ? d : Zc(String(d)))), c += ">" + a.toString() + "</body>");
        return Pc(c)
    }

    function gd(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!bd.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                ed.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof nc ? e.toString() : wc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Zc(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function hd(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function id(a, ...b) {
        if (b.length === 0) return gc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return gc(c)
    }

    function jd(a) {
        var b = id `https://cse.google.com/cse.js`;
        b = hd(fc(b).toString());
        let c = b.params,
            d = c.length ? "&" : "?";
        a.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let h = 0; h < e.length; h++) {
                const k = e[h];
                k !== null && k !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)), d = "&")
            }
        });
        return gc(b.path + c + b.hash)
    };

    function kd(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new Ac(c, yc)
    };
    var ld = Ab(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Nc(Rc);
        return !b.parentElement
    });

    function md(a, b) {
        if (ld())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Nc(b)
    }
    var nd = /^[\w+/_-]+[=]{0,2}$/;

    function od(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function pd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function qd(a) {
        return pd.apply(null, arguments) / arguments.length
    };

    function rd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    rd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    rd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    rd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    rd.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function sd(a, b) {
        this.width = a;
        this.height = b
    }

    function td(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    aa = sd.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function ud(a) {
        var b = uc("#");
        b = xc(b);
        b !== void 0 && (a.href = b)
    };

    function vd(a, b, c) {
        var d = [Xc `width`, Xc `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Wc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function wd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function xd(a, b) {
        a.src = fc(b);
        (void 0) ? .yo || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function yd(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function zd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(Ad, function(e, f) {
            var h = c[e];
            if (h) return h;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (h = String.fromCharCode(f)));
            if (!h) {
                h = Pc(e + " ");
                if (d.nodeType === 1 && (f = d.tagName, f === "SCRIPT" || f === "STYLE")) throw Error("");
                d.innerHTML = Nc(h);
                h = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = h
        })
    }
    var Ad = /&([^;\s<&]+);?/g;

    function Bd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Cd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Dd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    const Ed = xa(1, !0);
    var Fd = xa(610401301, !1),
        Gd = xa(188588736, !0),
        Hd = xa(645172343, Ed),
        Id = xa(653718497, Ed);

    function Jd() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Kd;
    const Ld = r.navigator;
    Kd = Ld ? Ld.userAgentData || null : null;

    function Md(a) {
        return Fd ? Kd ? Kd.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        return Jd().indexOf(a) != -1
    };

    function Nd() {
        return Fd ? !!Kd && Kd.brands.length > 0 : !1
    }

    function Qd() {
        return Nd() ? !1 : u("Opera")
    }

    function Rd() {
        return Nd() ? !1 : u("Trident") || u("MSIE")
    }

    function Sd() {
        return u("Firefox") || u("FxiOS")
    }

    function Td() {
        return u("Safari") && !(Ud() || (Nd() ? 0 : u("Coast")) || Qd() || (Nd() ? 0 : u("Edge")) || (Nd() ? Md("Microsoft Edge") : u("Edg/")) || (Nd() ? Md("Opera") : u("OPR")) || Sd() || u("Silk") || u("Android"))
    }

    function Ud() {
        return Nd() ? Md("Chromium") : (u("Chrome") || u("CriOS")) && !(Nd() ? 0 : u("Edge")) || u("Silk")
    }

    function Vd() {
        return u("Android") && !(Ud() || Sd() || Qd() || u("Silk"))
    };

    function Wd(a) {
        Wd[" "](a);
        return a
    }
    Wd[" "] = function() {};

    function Xd(a, b) {
        try {
            return Wd(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Yd = Rd(),
        Zd = u("Edge") || Yd,
        $d = u("Gecko") && !($b(Jd(), "WebKit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        ae = $b(Jd(), "WebKit") && !u("Edge");

    function be(a) {
        return a ? new ce(de(a)) : Ra || (Ra = new ce)
    }

    function ee(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new sd(a.clientWidth, a.clientHeight)
    }

    function fe(a) {
        var b = a.scrollingElement ? a.scrollingElement : ae || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = ge(a);
        return new rd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function ge(a) {
        return a.parentWindow || a.defaultView
    }

    function he(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ie(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function je(a) {
        var b;
        if (b = a.parentElement) return b;
        b = a.parentNode;
        return Da(b) && b.nodeType == 1 ? b : null
    }

    function de(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var ke = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        le = {
            IMG: " ",
            BR: "\n"
        };

    function me(a) {
        var b = [];
        ne(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ne(a, b, c) {
        if (!(a.nodeName in ke))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in le) b.push(le[a.nodeName]);
        else
            for (a = a.firstChild; a;) ne(a, b, c), a = a.nextSibling
    }

    function oe(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return pe(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && $a(e.className.split(/\s+/), c))
        })
    }

    function pe(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ce(a) {
        this.g = a || r.document || document
    }
    aa = ce.prototype;
    aa.xh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    aa.Xj = ce.prototype.xh;

    function qe(a, b) {
        return he(a.g, b)
    }

    function re(a, b) {
        var c = a.g;
        a = he(c, "DIV");
        md(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    aa.da = function() {
        return ge(this.g)
    };
    aa.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    aa.Ii = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], h = arguments[b]; h;) f.unshift(h), h = h.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            h = d[0][b];
            for (var k = 1; k < c; k++)
                if (h != d[k][b]) return f;
            f = h
        }
        return f
    };

    function se() {
        return Fd && Kd ? Kd.mobile : !te() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function te() {
        return Fd && Kd ? !Kd.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var ue = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ve(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function we(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) we(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function xe(a) {
        try {
            return !!a && a.location.href != null && Xd(a, "foo")
        } catch {
            return !1
        }
    }

    function ye(a, b = r) {
        b = ze(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = ze(b)
    }

    function ze(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Ae(a) {
        return xe(a.top) ? a.top : null
    }

    function Be(a, b) {
        const c = Ce("SCRIPT", a);
        xd(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function De(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ee() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Fe(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ge(a) {
        const b = [];
        Fe(a, function(c) {
            b.push(c)
        });
        return b
    }

    function He(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Je = Ab(() => Za(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ie) || Math.random() < 1E-4);
    const Ie = a => Jd().indexOf(a) != -1;
    var Ke = /^([0-9.]+)px$/,
        Le = /^(-?[0-9.]{1,30})$/;

    function Me(a) {
        if (!Le.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ne(a) {
        return (a = Ke.exec(a)) ? +a[1] : null
    }
    var Oe = {
        Ck: "allow-forms",
        Dk: "allow-modals",
        Ek: "allow-orientation-lock",
        Fk: "allow-pointer-lock",
        Gk: "allow-popups",
        Hk: "allow-popups-to-escape-sandbox",
        Ik: "allow-presentation",
        Jk: "allow-same-origin",
        Kk: "allow-scripts",
        Lk: "allow-top-navigation",
        Mk: "allow-top-navigation-by-user-activation"
    };
    const Pe = Ab(() => Ge(Oe));

    function Qe() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Pe();
        return a.length ? Wa(b, c => !$a(a, c)) : b
    }

    function Re() {
        const a = Ce("IFRAME"),
            b = {};
        Ua(Pe(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Se = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Te = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Se(a, b)) return a;
                if (!(a = ze(a))) break
            }
            return null
        },
        Ue = Ab(() => se() ? 2 : te() ? 1 : 0),
        v = (a, b) => {
            Fe(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        We = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Ve(a.style.cssText), Fe(a, b)
        },
        Ve = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ua((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Xe = a => {
            const b = /!\s*important/i;
            We(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Ye = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Ze = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        $e = /.*domain\.test$/,
        af = /\.prod\.google\.com(:\d+)?$/;
    var bf = a => Ye[a] || Ze.test(a) || $e.test(a) || af.test(a);
    let cf = [];
    const df = () => {
        const a = cf;
        cf = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var ef = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        ff = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: ef(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        gf = (a, b) => {
            a.document.readyState === "complete" ? (cf.push(b), cf.length == 1 && (window.Promise ? Promise.resolve().then(df) : window.setImmediate ? setImmediate(df) : setTimeout(df, 0))) : a.addEventListener("load", b)
        },
        hf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Ce(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var jf = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, xe(a) && (b = a);
            return b
        },
        lf = a => Ud() && se() ? kf(a) : 1,
        kf = a => {
            var b = Ae(a);
            if (!b) return 1;
            a = Ue() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function mf(a) {
        r.setTimeout(() => {
            throw a;
        }, 0)
    };
    Vd();
    Ud();
    Td();
    var nf = {},
        of = null;

    function pf(a) {
        var b = 3;
        b === void 0 && (b = 0);
        qf();
        b = nf[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var h = a[e],
                k = a[e + 1],
                l = a[e + 2],
                m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                m = a[e + 1], l = b[(m & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }

    function rf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return pf(b)
    }

    function sf(a) {
        var b = [];
        tf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function tf(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    n = of [m];
                if (n != null) return n;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        qf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                h = c(64),
                k = c(64);
            if (k === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            h != 64 && (b(f << 4 & 240 | h >> 2), k != 64 && b(h << 6 & 192 | k))
        }
    }

    function qf() {
        if (! of ) { of = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                nf[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e]; of [f] === void 0 && ( of [f] = e)
                }
            }
        }
    };

    function uf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const vf = /[-_.]/g,
        wf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function xf(a) {
        return wf[a] || ""
    }

    function yf(a) {
        return a != null && a instanceof Uint8Array
    }
    var zf = {},
        Af = typeof structuredClone != "undefined";
    let Bf;

    function Cf(a) {
        if (a !== zf) throw Error("illegal external caller");
    }

    function Df() {
        return Bf || (Bf = new Ef(null, zf))
    }
    var Ef = class {
        constructor(a, b) {
            Cf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };
    let Ff = 0,
        Gf = 0;

    function Hf(a) {
        const b = a >>> 0;
        Ff = b;
        Gf = (a - b) / 4294967296 >>> 0
    }

    function If(a) {
        if (a < 0) {
            Hf(-a);
            a = Ff;
            var b = Gf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Ff = c >>> 0;
            Gf = d >>> 0
        } else Hf(a)
    }

    function Jf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Kf() {
        var a = Ff,
            b = Gf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Jf(a, b);
        return c
    }

    function Lf(a) {
        a.length < 16 ? If(Number(a)) : (a = BigInt(a), Ff = Number(a & BigInt(4294967295)) >>> 0, Gf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Mf(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Nf = Symbol(),
        Of = Symbol(),
        Pf = Symbol(),
        Qf = Symbol(),
        Rf = Symbol();

    function Sf(a) {
        return !!((a[x] | 0) & 2)
    }

    function Tf(a) {
        a[x] |= 34;
        return a
    }

    function Uf(a) {
        a[x] |= 32;
        return a
    }

    function Vf(a, b) {
        b[x] = (a | 0) & -14591
    }

    function Wf(a, b) {
        b[x] = (a | 34) & -14557
    };
    var Xf = {},
        Yf = {};

    function Zf(a) {
        return !(!a || typeof a !== "object" || a.hj !== Yf)
    }

    function $f(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function ag(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new Ef(a, zf) : Df();
            else if (a.constructor !== Ef)
            if (yf(a)) a = a.length ? new Ef(c ? a : new Uint8Array(a), zf) : Df();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function bg(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[x] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[x] = d | 1;
        return !0
    }
    var cg;
    const dg = [];
    dg[x] = 55;
    cg = Object.freeze(dg);

    function jg(a) {
        if (a & 2) throw Error();
    }
    class kg {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new kg(this.g, this.i, this.l)
        }
    }
    var lg = Object.freeze({});
    Object.freeze({});
    var mg = Object.freeze({});
    let ng, og;

    function pg(a) {
        if (og) throw Error("");
        og = b => {
            r.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function qg(a) {
        if (og) try {
            og(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function rg() {
        const a = Error();
        yd(a, "incident");
        og ? qg(a) : mf(a)
    }

    function sg(a) {
        a = Error(a);
        yd(a, "warning");
        qg(a);
        return a
    }

    function tg(a, b) {
        if (b != null) {
            var c;
            a == null ? c = ng ? ? (ng = {}) : c = a.constructor;
            a = c[b] || 0;
            a >= 4 || (c[b] = a + 1, rg())
        }
    };

    function ug(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function vg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${Aa(a)}: ${a}`);
        return a
    }
    const wg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function xg(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : wg.test(a)
    }

    function yg(a) {
        if (!Number.isFinite(a)) throw sg("enum");
        return a | 0
    }

    function zg(a) {
        return a == null ? a : yg(a)
    }

    function Ag(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Bg(a) {
        if (typeof a !== "number") throw sg("int32");
        if (!Number.isFinite(a)) throw sg("int32");
        return a | 0
    }

    function Cg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Dg(a) {
        if (typeof a !== "number") throw sg("uint32");
        if (!Number.isFinite(a)) throw sg("uint32");
        return a >>> 0
    }

    function Eg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Fg(a, b) {
        b = !!b;
        if (!xg(a)) throw sg("int64");
        return typeof a === "string" ? Gg(a) : b ? Hg(a) : Ig(a)
    }

    function Jg(a) {
        return a == null ? a : Fg(a)
    }

    function Kg(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Lg(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Mg(a) {
        if (a < 0) {
            If(a);
            const b = Jf(Ff, Gf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Kg(String(a))) return a;
        If(a);
        return Gf * 4294967296 + (Ff >>> 0)
    }

    function Ig(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            If(a);
            var b = Ff,
                c = Gf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Hg(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Lg(b) ? a = b : (If(a), a = Kf())
            }
        }
        return a
    }

    function Ng(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Kg(b) ? a = b : (If(a), a = Jf(Ff, Gf))
            }
        }
        return a
    }

    function Gg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Lg(a) || (Lf(a), a = Kf());
        return a
    }

    function Og(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Kg(a) || (Lf(a), a = Jf(Ff, Gf));
        return a
    }

    function Pg(a) {
        if (a == null) return a;
        if (xg(a)) {
            var b;
            typeof a === "number" ? b = Ig(a) : b = Gg(a);
            return b
        }
    }

    function Qg(a, b) {
        b = !!b;
        if (!xg(a)) throw sg("uint64");
        typeof a === "string" ? a = Og(a) : b ? a = Ng(a) : (a = Math.trunc(a), a = a >= 0 && Number.isSafeInteger(a) ? a : Mg(a));
        return a
    }

    function Rg(a) {
        return a == null ? a : Qg(a)
    }

    function Sg(a) {
        if (a == null) return a;
        if (xg(a)) return typeof a === "string" ? Og(a) : Ng(a)
    }

    function Tg(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Ug(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Vg(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Wg(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Gd === Xf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Xg(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function Xg(a) {
        var b = a[Nf];
        if (b) return b;
        b = new a;
        Tf(b.U);
        return a[Nf] = b
    }

    function Yg(a, b, c) {
        return b ? Tg(a) : Vg(a) ? ? (c ? "" : void 0)
    };
    const Zg = {},
        $g = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function ah(a) {
        return a
    }

    function bh(a) {
        if (a.ac & 2) throw Error("Cannot mutate an immutable Map");
    }
    var fh = class extends $g {
        constructor(a, b, c = ah, d = ah) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.ac = a[x] = e;
            this.Zd = b;
            this.yc = c;
            this.zf = this.Zd ? ch : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let l = h[1];
                b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, l)
            }
        }
        vf(a = dh) {
            if (this.size !== 0) return this.uf(a)
        }
        uf(a = dh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            bh(this);
            super.clear()
        }
        delete(a) {
            bh(this);
            return super.delete(this.yc(a, !0, !1))
        }
        entries() {
            var a = this.Ag();
            return new kg(a, eh, this)
        }
        keys() {
            return this.ej()
        }
        values() {
            var a = this.Ag();
            return new kg(a, fh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            bh(this);
            a = this.yc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.zf(b, !0, !0, this.Zd, !1, this.ac))
        }
        has(a) {
            return super.has(this.yc(a, !1, !1))
        }
        get(a) {
            a = this.yc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.Zd;
                return c ? (c = this.zf(b, !1, !0, c, this.Wh,
                    this.ac), c !== b && super.set(a, c), c) : b
            }
        }
        Ag() {
            return Array.from(super.keys())
        }
        ej() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    fh.prototype.toJSON = void 0;
    fh.prototype.hj = Yf;

    function ch(a, b, c, d, e, f) {
        a = Wg(a, d, c, f);
        e && (a = gh(a));
        return a
    }

    function dh(a) {
        return a
    }

    function eh(a) {
        return [a, this.get(a)]
    }
    let hh;

    function ih() {
        return hh || (hh = new fh(Tf([]), void 0, void 0, void 0, Zg))
    };
    let jh;

    function kh(a, b) {
        jh = b;
        a = new a(b);
        jh = void 0;
        return a
    };

    function lh(a, b) {
        return mh(b)
    }

    function mh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (bg(a, void 0, 0)) return
                    } else {
                        if (yf(a)) return uf(a);
                        if (a instanceof Ef) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = uf(b)
                        }
                        if (a instanceof fh) return a.vf()
                    }
        }
        return a
    };

    function nh(a, b, c) {
        a = Mf(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function oh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = bg(a, void 0, 0) ? void 0 : e && (a[x] | 0) & 2 ? a : ph(a, b, c, d !== void 0, e);
            else if ($f(a)) {
                const f = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (f[h] = oh(a[h], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function ph(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Mf(a);
        for (let h = 0; h < a.length; h++) a[h] = oh(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function qh(a) {
        return oh(a, rh, void 0, void 0, !1)
    }

    function rh(a) {
        a.Gd === Xf ? a = a.toJSON() : a instanceof Ef ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = yf(a) ? new Uint8Array(a) : a instanceof fh ? a.vf(qh) : a;
        return a
    }

    function sh(a) {
        return oh(a, th, void 0, void 0, !1)
    }

    function th(a) {
        return a.Gd === Xf ? a.toJSON() : a instanceof fh ? a.vf(sh) : mh(a)
    }
    var uh = Af ? structuredClone : a => ph(a, rh, void 0, void 0, !1);

    function vh(a, b, c = Wf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : ph(a, vh, d & 4 ? Wf : c, !0, !0)
            }
            a.Gd === Xf ? (c = a.U, d = c[x], a = d & 2 ? a : kh(a.constructor, wh(c, d, !0))) : a instanceof fh && !(a.ac & 2) && (c = Tf(a.uf(vh)), a = new fh(c, a.Zd, a.yc, a.zf));
            return a
        }
    }

    function xh(a) {
        const b = a.U;
        return kh(a.constructor, wh(b, b[x], !1))
    }

    function wh(a, b, c) {
        const d = c || b & 2 ? Wf : Vf,
            e = !!(b & 32);
        a = nh(a, b, f => vh(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function gh(a) {
        const b = a.U,
            c = b[x];
        return c & 2 ? kh(a.constructor, wh(b, c, !1)) : a
    };

    function yh(a) {
        if (Math.random() > .01 || typeof Proxy !== "function") return a;
        let b = zh ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                Ah();
                c[d] = e;
                return !0
            }
        });
        Bh(a, b);
        return b
    }

    function Ah() {
        rg()
    }
    let zh = void 0,
        Ch = void 0;

    function Bh(a, b) {
        (zh || (zh = new WeakMap)).set(a, b);
        (Ch || (Ch = new WeakMap)).set(b, a)
    };

    function Dh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Qf] = (a.constructor[Qf] | 0) + 1) < 5 && rg();
        return c === 0 ? !1 : !(c & b)
    }

    function Eh(a, b) {
        a = a.U;
        return Fh(a, a[x], b)
    }

    function Gh(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Fh(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Gh(a, b, e, c) && tg(void 0, Of), d) : Gh(a, b, e, c)
        }
    }

    function Hh(a, b, c) {
        const d = a.U;
        let e = d[x];
        jg(e);
        Ih(d, e, b, c);
        return a
    }

    function Ih(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Hd) {
            let h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[x] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Jh(a, b, c) {
        return Kh(a, b, c, !1) !== void 0
    }

    function Lh(a, b, c, d) {
        var e = b & 2;
        let f = Fh(a, b, c, d);
        Array.isArray(f) || (f = cg);
        const h = !!(b & 32);
        let k = f[x] | 0;
        k === 0 && h && !e ? (k |= 33, f[x] = k) : k & 1 || (k |= 1, f[x] = k);
        if (e) k & 2 || Tf(f), Object.freeze(f);
        else if (2 & k || 2048 & k) f = Mf(f), e = 1, h && (e |= 32), f[x] = e, Ih(a, b, c, f, d);
        return f
    }

    function Mh(a, b) {
        a = a.U;
        let c = a[x];
        const d = Fh(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Ih(a, c, b, e);
        return e
    }

    function y(a) {
        return a === lg ? 2 : Id ? 5 : 2
    }

    function Nh(a, b, c, d, e) {
        const f = a.U;
        var h = f[x];
        const k = 2 & h ? 1 : d;
        d = Oh(f, h, b);
        var l = d[x] | 0;
        if (Dh(a, l, e, !1)) {
            if (4 & l || Object.isFrozen(d)) d = Mf(d), l = Ph(l, h), h = Ih(f, h, b, d);
            let n = a = 0;
            for (; a < d.length; a++) {
                const p = c(d[a]);
                p != null && (d[n++] = p)
            }
            n < a && (d.length = n);
            l = Qh(l, h);
            l = (l | 20) & -4097;
            l &= -8193;
            e && (l |= e);
            d[x] = l;
            2 & l && Object.freeze(d)
        }
        let m;
        k === 1 || k === 4 && 32 & l ? Rh(l) || (h = l, l |= 2, l !== h && (d[x] = l), Object.freeze(d)) : (e = k !== 5 ? !1 : !!(32 & l) || Rh(l) || !!zh ? .get(d), (k === 2 || e) && Rh(l) && (d = Mf(d), l = Ph(l, h), l = Sh(l, h, !1), d[x] = l, h = Ih(f,
            h, b, d)), Rh(l) || (b = l, l = Sh(l, h, !1), l !== b && (d[x] = l)), e && (m = yh(d)));
        return m || d
    }

    function Oh(a, b, c, d) {
        a = Fh(a, b, c, d);
        return Array.isArray(a) ? a : cg
    }

    function Qh(a, b) {
        a === 0 && (a = Ph(a, b));
        return a | 1
    }

    function Rh(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Th(a) {
        var b = Uh,
            c = a.U;
        const d = c[x];
        var e = Fh(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                h = d & 2;e = !1;
            if (f == null) {
                if (h) {
                    c = ih();
                    break a
                }
                f = []
            } else if (f.constructor === fh) {
                if ((f.ac & 2) == 0 || h) {
                    c = f;
                    break a
                }
                f = f.uf()
            } else Array.isArray(f) ? e = Sf(f) : f = [];
            if (h) {
                if (!f.length) {
                    c = ih();
                    break a
                }
                e || (e = !0, Tf(f))
            } else if (e) {
                e = !1;
                h = Mf(f);
                for (f = 0; f < h.length; f++) {
                    const k = h[f] = Mf(h[f]);
                    Array.isArray(k[1]) && (k[1] = Tf(k[1]))
                }
                f = h
            }
            e || ((f[x] | 0) & 64 ? f[x] &= -33 : 32 & d && Uf(f));e = new fh(f, b, Yg, void 0);Ih(c, d, 14, e, !1);c = e
        }!a && b && (c.Wh = !0);
        return c
    }

    function Vh(a, b, c, d) {
        const e = a.U;
        let f = e[x];
        jg(f);
        if (c == null) return Ih(e, f, b), a;
        c = Ch ? .get(c) || c;
        let h = c[x] | 0,
            k = h;
        var l = !!(2 & h) || Object.isFrozen(c);
        const m = !l && (void 0 === mg || !1);
        if (Dh(a, h))
            for (h = 21, l && (c = Mf(c), k = 0, h = Ph(h, f), h = Sh(h, f, !0)), l = 0; l < c.length; l++) c[l] = d(c[l]);
        m && (c = Mf(c), k = 0, h = Ph(h, f), h = Sh(h, f, !0));
        h !== k && (c[x] = h);
        Ih(e, f, b, c);
        return a
    }

    function Wh(a, b, c, d) {
        const e = a.U;
        let f = e[x];
        jg(f);
        Ih(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Xh(a, b) {
        var c = a.U,
            d = c[x] | 0;
        jg(a.U[x]);
        c = Lh(c, d, 3, !1);
        d = c[x] | 0;
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (var e = 0; e < b.length; e++) c.push(Fg(b[e], d));
        else
            for (e of b) c.push(Fg(e, d));
        return a
    }

    function Yh(a, b, c, d) {
        var e = a.U;
        const f = e[x];
        jg(f);
        b = Lh(e, f, b);
        e = b[x] | 0;
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    }

    function Zh(a, b, c, d) {
        const e = a.U;
        var f = e[x];
        jg(f);
        if (d == null) {
            var h = $h(e);
            if (ai(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else {
            h = $h(e);
            const k = ai(h, e, f, c);
            k !== b && (k && (f = Ih(e, f, k)), h.set(c, b))
        }
        Ih(e, f, b, d);
        return a
    }

    function bi(a, b) {
        a = a.U;
        return ai($h(a), a, a[x], b)
    }

    function $h(a) {
        return a[Pf] ? ? (a[Pf] = new Map)
    }

    function ai(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const h = d[f];
            Fh(b, c, h) != null && (e !== 0 && (c = Ih(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function Kh(a, b, c, d) {
        a = a.U;
        let e = a[x];
        const f = Fh(a, e, c, d);
        b = Wg(f, b, !1, e);
        b !== f && b != null && Ih(a, e, c, b, d);
        return b
    }

    function ci(a) {
        var b = di;
        return (a = Kh(a, b, 1, !1)) ? a : Xg(b)
    }

    function z(a, b, c) {
        b = Kh(a, b, c, !1);
        if (b == null) return b;
        a = a.U;
        let d = a[x];
        if (!(d & 2)) {
            const e = gh(b);
            e !== b && (b = e, Ih(a, d, c, b, !1))
        }
        return b
    }

    function ei(a, b, c, d, e, f, h, k) {
        var l = !!(2 & b);
        e = l ? 1 : e;
        h = !!h;
        k && (k = !l);
        l = Oh(a, b, d, f);
        var m = l[x] | 0,
            n = !!(4 & m);
        if (!n) {
            m = Qh(m, b);
            var p = l,
                q = b;
            const w = !!(2 & m);
            w && (q |= 2);
            let A = !w,
                D = !0,
                G = 0,
                I = 0;
            for (; G < p.length; G++) {
                const B = Wg(p[G], c, !1, q);
                if (B instanceof c) {
                    if (!w) {
                        const J = Sf(B.U);
                        A && (A = !J);
                        D && (D = J)
                    }
                    p[I++] = B
                }
            }
            I < G && (p.length = I);
            m |= 4;
            m = D ? m | 16 : m & -17;
            m = A ? m | 8 : m & -9;
            p[x] = m;
            w && Object.freeze(p)
        }
        if (k && !(8 & m || !l.length && (e === 1 || e === 4 && 32 & m))) {
            Rh(m) && (l = Mf(l), m = Ph(m, b), b = Ih(a, b, d, l, f));
            c = l;
            k = m;
            for (p = 0; p < c.length; p++) m = c[p],
                q = gh(m), m !== q && (c[p] = q);
            k |= 8;
            k = c.length ? k & -17 : k | 16;
            m = c[x] = k
        }
        let t;
        e === 1 || e === 4 && 32 & m ? Rh(m) || (b = m, m |= !l.length || 16 & m && (!n || 32 & m) ? 2 : 2048, m !== b && (l[x] = m), Object.freeze(l)) : (n = e !== 5 ? !1 : !!(32 & m) || Rh(m) || !!zh ? .get(l), (e === 2 || n) && Rh(m) && (l = Mf(l), m = Ph(m, b), m = Sh(m, b, h), l[x] = m, b = Ih(a, b, d, l, f)), Rh(m) || (a = m, m = Sh(m, b, h), m !== a && (l[x] = m)), n && (t = yh(l)));
        return t || l
    }

    function fi(a, b, c, d) {
        a = a.U;
        const e = a[x];
        return ei(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function C(a, b, c) {
        c == null && (c = void 0);
        return Hh(a, b, c)
    }

    function E(a, b, c, d) {
        d == null && (d = void 0);
        return Zh(a, b, c, d)
    }

    function gi(a, b, c) {
        const d = a.U;
        let e = d[x];
        jg(e);
        if (c == null) return Ih(d, e, b), a;
        c = Ch ? .get(c) || c;
        let f = c[x] | 0,
            h = f;
        const k = !!(2 & f) || !!(2048 & f),
            l = k || Object.isFrozen(c),
            m = !l && (void 0 === mg || !1);
        let n = !0,
            p = !0;
        for (let t = 0; t < c.length; t++) {
            var q = c[t];
            k || (q = Sf(q.U), n && (n = !q), p && (p = q))
        }
        k || (f |= 5, f = n ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (m || l && f !== h) c = Mf(c), h = 0, f = Ph(f, e), f = Sh(f, e, !0);
        f !== h && (c[x] = f);
        Ih(d, e, b, c);
        return a
    }

    function Ph(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Sh(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function hi(a, b, c, d, e, f, h) {
        a = a.U;
        const k = a[x];
        jg(k);
        b = ei(a, k, c, b, 2, f, !0);
        c = d != null ? d : new c;
        if (h && (typeof e !== "number" || e < 0 || e > b.length)) throw Error();
        e != void 0 ? b.splice(e, h, c) : b.push(c);
        b[x] = Sf(c.U) ? b[x] & -9 : b[x] & -17
    }

    function ii(a, b, c, d) {
        hi(a, b, c, d);
        return a
    }

    function ji(a, b) {
        return a ? ? b
    }

    function ki(a, b) {
        a = Eh(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function li(a, b) {
        return Cg(Eh(a, b))
    }

    function F(a, b) {
        return Vg(Eh(a, b))
    }

    function mi(a, b) {
        return Ag(Eh(a, b))
    }

    function K(a, b, c = !1) {
        return ji(ki(a, b), c)
    }

    function ni(a, b) {
        return ji(li(a, b), 0)
    }

    function oi(a, b) {
        return ji(Pg(Eh(a, b)), 0)
    }

    function pi(a, b, c = 0) {
        return ji(Mh(a, b), c)
    }

    function L(a, b) {
        return ji(F(a, b), "")
    }

    function qi(a, b) {
        return ji(mi(a, b), 0)
    }

    function ri(a, b, c, d) {
        c = bi(a, d) === c ? c : -1;
        return z(a, b, c)
    }

    function si(a, b) {
        a = li(a, b);
        return a == null ? void 0 : a
    }

    function ti(a) {
        a = Mh(a, 4);
        return a == null ? void 0 : a
    }

    function ui(a, b) {
        a = mi(a, b);
        return a == null ? void 0 : a
    }

    function vi(a, b, c) {
        return Hh(a, b, c == null ? c : vg(c))
    }

    function M(a, b, c) {
        return Wh(a, b, c == null ? c : vg(c), !1)
    }

    function Ci(a, b, c) {
        return Hh(a, b, c == null ? c : Bg(c))
    }

    function Di(a, b, c) {
        return Wh(a, b, c == null ? c : Bg(c), 0)
    }

    function Ei(a, b, c) {
        return Hh(a, b, Jg(c))
    }

    function Fi(a, b, c) {
        return Wh(a, b, Jg(c), "0")
    }

    function Gi(a, b, c) {
        return Hh(a, b, Ug(c))
    }

    function Hi(a, b, c) {
        return Wh(a, b, Ug(c), "")
    }

    function N(a, b, c) {
        return Wh(a, b, zg(c), 0)
    };
    let Ii;

    function Ji(a) {
        try {
            return Ii = !0, JSON.stringify(Ki(a), lh)
        } finally {
            Ii = !1
        }
    }
    var O = class {
        constructor(a) {
            a: {
                a == null && (a = jh);jh = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[x] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, $f(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[x] = b
            }
            this.U = a
        }
        toJSON() {
            return Ki(this)
        }
        i() {
            const a = this.U,
                b = a[x];
            return b & 2 ? this : kh(this.constructor, wh(a, b, !0))
        }
    };
    O.prototype.Gd = Xf;

    function Ki(a) {
        var b = Ii ? a.U : ph(a.U, th, void 0, void 0, !1);
        var c = !Ii;
        var d = Gd ? void 0 : a.constructor.O;
        var e = (c ? a.U : b)[x];
        if (a = b.length) {
            var f = b[a - 1],
                h = $f(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (h) {
                b: {
                    var l = f;
                    var m = {};h = !1;
                    if (l)
                        for (var n in l) {
                            if (!Object.prototype.hasOwnProperty.call(l, n)) continue;
                            if (isNaN(+n)) {
                                m[n] = l[n];
                                continue
                            }
                            let t = l[n];
                            Array.isArray(t) && (bg(t, d, +n) || Zf(t) && t.size === 0) && (t = null);
                            t == null && (h = !0);
                            t != null && (m[n] = t)
                        }
                    if (h) {
                        for (var p in m) break b;
                        m = null
                    } else m = l
                }
                l = m == null ? f != null : m !==
                    f
            }
            for (var q; a > 0; a--) {
                p = a - 1;
                n = k[p];
                p -= e;
                if (!(n == null || bg(n, d, p) || Zf(n) && n.size === 0)) break;
                q = !0
            }
            if (k !== b || l || q) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (q || l || m) k.length = a;
                m && k.push(m)
            }
            b = k
        }
        return b
    }

    function Li(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return kh(a, Uf(b))
    };

    function Mi(a, b) {
        const c = Ni;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function Oi(a) {
        a.vo = !0;
        return a
    }
    let Ni = void 0;
    const Pi = Oi(a => a !== null && a !== void 0);

    function Qi(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = kh(a, Uf(b))
            }
            return b
        }
    };
    id `https://www.google.com/recaptcha/api2/aframe`;

    function Ri(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            xd(f, a);
            b.document.readyState !== "complete" ? Hb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Si(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Wb}`;
        let c = void 0;
        try {
            c = await Ti(b)
        } catch (h) {}
        if (c) {
            b = a.xc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Rh: c.bg_hash_basename,
                Qh: c.bg_binary,
                fj: a.g + "_" + a.i,
                xc: b,
                Wb: a.Wb,
                vd: d,
                Ud: e,
                rd: f
            }
        }
    }
    let Ti = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ui(a) {
        var b = await Si(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Rh,
                _bgp_: b.Qh,
                _li_: b.fj,
                _jk_: b.xc,
                _st_: b.Wb,
                _rc_: b.vd,
                _dl_: b.Ud,
                _g2_: b.rd
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = id `https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
            Ri(a)
        }
    };

    function Vi(a, b) {
        return Hi(a, 1, b)
    }
    var Wi = class extends O {
        g() {
            return L(this, 1)
        }
    };

    function Xi(a, b) {
        return C(a, 5, b)
    }

    function Yi(a, b) {
        return Hi(a, 3, b)
    }

    function Zi(a, b) {
        return M(a, 6, b)
    }
    var $i = class extends O {
        constructor() {
            super()
        }
    };

    function aj(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var bj = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.xc = a.xc;
                this.win = a.da();
                this.Wb = a.Wb;
                this.vd = a.vd;
                this.Ud = a.Ud;
                this.rd = a.rd;
                this.j = a.g
            }
        },
        cj = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Wb = "env";
                this.vd = "n";
                this.Ud = "0";
                this.rd = "1";
                this.g = !0
            }
            da() {
                return this.win
            }
            build() {
                return new bj(this)
            }
        };

    function dj(a) {
        var b = new ej;
        return Gi(b, 1, a)
    }
    var ej = class extends O {
        getValue() {
            return L(this, 1)
        }
        getVersion() {
            return qi(this, 5)
        }
    };
    var fj = class extends O {};
    fj.O = [2, 3, 4];
    var gj = class extends O {};

    function hj(a, b, c = null, d = !1, e = !1) {
        ij(a, b, c, d, e)
    }

    function ij(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Ce("IMG", a.document);
        if (c || d) {
            const h = k => {
                c && c(k);
                d && bb(a.google_image_requests, f);
                Ib(f, "load", h);
                Ib(f, "error", h)
            };
            Hb(f, "load", h);
            Hb(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var kj = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Fe(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            jj(c)
        },
        jj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : hj(b, a, void 0, !1, !1)
        };
    let lj = null;
    var mj = window;
    var nj = class extends O {
        constructor() {
            super()
        }
    };
    nj.O = [15];
    var oj = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            tg(this, Rf);
            return oi(this, 1)
        }
        setCorrelator(a) {
            return Fi(this, 1, a)
        }
    };
    var pj = class extends O {
        constructor() {
            super()
        }
    };

    function qj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    aa = qj.prototype;
    aa.set = function(a, b, c) {
        let d, e, f, h = !1,
            k;
        typeof c === "object" && (k = c.Yg, h = c.Sd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Bd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (h ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
    };
    aa.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Rb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function rj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Bd: 0,
            path: c,
            domain: d
        })
    }
    aa.isEmpty = function() {
        return !this.g.cookie
    };
    aa.vc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    aa.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Rb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) rj(this, b[a])
    };

    function sj(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function tj(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let uj;

    function vj(a) {
        return uj ? uj : a.origin === "null" ? uj = !1 : uj = wj(a)
    }

    function wj(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new qj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Bd: 60,
            Yg: a.isSecureContext ? "none" : void 0,
            Sd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        rj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function xj(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new qj({
            cookie: b
        })).get(a) || ""
    }

    function yj(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            Yg: "none",
            Sd: !0
        }), (new qj(d.document)).set(a, b, c))
    };
    let zj = null,
        Aj = null;

    function Bj() {
        if (zj != null) return zj;
        zj = !1;
        try {
            const a = Ae(r);
            a && a.location.hash.indexOf("google_logging") !== -1 && (zj = !0);
            tj(r) ? .getItem("google_logging") && (zj = !0)
        } catch (a) {}
        return zj
    }

    function Cj() {
        if (Aj != null) return Aj;
        Aj = !1;
        try {
            const a = Ae(r),
                b = tj(r);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) Aj = !0
        } catch (a) {}
        return Aj
    }
    var Dj = (a, b = []) => {
        let c = !1;
        r.google_logging_queue || (c = !0, r.google_logging_queue = []);
        r.google_logging_queue.push([a, b]);
        c && Bj() && Be(r.document, id `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Ej(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    aa = Ej.prototype;
    aa.getWidth = function() {
        return this.right - this.left
    };
    aa.getHeight = function() {
        return this.bottom - this.top
    };

    function Fj(a) {
        return new Ej(a.top, a.right, a.bottom, a.left)
    }
    aa.contains = function(a) {
        return this && a ? a instanceof Ej ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Gj(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    aa.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    aa.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    aa.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Hj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ij(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Hj(c, e, d - c, a - e)
        }
        return null
    }

    function Jj(a, b) {
        var c = Ij(a, b);
        if (!c || !c.height || !c.width) return [new Hj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            h = a.top + a.height,
            k = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Hj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < h && (c.push(new Hj(a.left, l, a.width, h - l)), e = l - d);
        b.left > a.left && c.push(new Hj(a.left, d, b.left - a.left, e));
        k < f && c.push(new Hj(k, d, f - k, e));
        return c
    }
    aa = Hj.prototype;
    aa.contains = function(a) {
        return a instanceof rd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    aa.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const Kj = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Lj(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Mj(a = Lj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Nj(a = Lj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Kj[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Oj() {
        var a = Lj();
        return a && a.initialIntersection
    }

    function Pj() {
        const a = Oj();
        return a && Da(a.rootBounds) ? new sd(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Qj(a = Lj()) {
        return a ? xe(a.master) ? a.master : null : null
    }

    function Rj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            bb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = h => {
            if (a.ampInaboxInitialized) h = !0;
            else {
                var k, l = h.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !l && (k = /^amp-(\d{15,20})?/.exec(h.data)) && (a.ampInaboxPendingMessages.push(h), h = k[1], a.ampInaboxInitialized ||
                    h && !/^\d{15,20}$/.test(h) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Be(a.document, h ? id `https://cdn.ampproject.org/rtv/${h}/amp4ads-host-v0.js` : id `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                h = !1
            }
            h && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Hb(a, "message", f), d = () => {
            Ib(a, "message", f)
        });
        return e
    };

    function Sj() {
        return a => {
            a = {
                id: "unsafeurl",
                ctx: 638,
                url: a
            };
            var b = [];
            for (c in a) we(c, a[c], b);
            var c = ve("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };

    function Tj(a, b, c) {
        if (typeof b === "string")(b = Uj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Uj(c, d);
                f && (c.style[f] = e)
            }
    }
    var Vj = {};

    function Uj(a, b) {
        var c = Vj[b];
        if (!c) {
            var d = Cd(b);
            c = d;
            a.style[d] === void 0 && (d = (ae ? "Webkit" : $d ? "Moz" : Yd ? "ms" : null) + Dd(d), a.style[d] !== void 0 && (c = d));
            Vj[b] = c
        }
        return c
    }

    function Wj(a, b) {
        var c = a.style[Cd(b)];
        return typeof c !== "undefined" ? c : a.style[Uj(a, b)] || ""
    }

    function Xj(a, b) {
        var c = de(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Yj(a, b) {
        return Xj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Zj(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function ak(a) {
        var b = de(a),
            c = new rd(0, 0);
        if (a == (b ? de(b) : document).documentElement) return c;
        a = Zj(a);
        b = fe(be(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function bk(a) {
        var b = ck;
        if (Yj(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ck(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = ae && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Zj(a), new sd(a.right - a.left, a.bottom - a.top)) : new sd(b, c)
    };
    var dk = a => typeof a === "number" && a > 0,
        fk = (a, b) => {
            a = ek(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        ek = a => Object.entries(gk(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        gk = a => {
            const b = {};
            Fe(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        hk = () => {
            try {
                return mj.history.length
            } catch (a) {
                return 0
            }
        },
        ik = a => {
            a = Qj(Lj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        jk = a => {
            a = a.google_unique_id;
            return typeof a === "number" ?
                a : 0
        },
        kk = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const h = d[f];
                        if (h.nodeName && h.nodeName.toString().toLowerCase() === c) {
                            if (a === h) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        lk = () => {
            if (!mj) return !1;
            try {
                return !(!mj.navigator.standalone && !mj.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        mk = a => (a = a.google_ad_format) ?
        a.indexOf("_0ads") > 0 : !1,
        nk = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const h = parseInt(f[1], 10),
                                    k = parseInt(f[2], 10);
                                if (h > 0 && k > 0) {
                                    var d = {
                                        width: h,
                                        height: k
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class ok {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const pk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var qk = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        rk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.xg = !!c;
                this.depth = null
            }
        };
    let sk = null;

    function tk() {
        if (sk === null) {
            sk = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    sk = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return sk
    };

    function uk() {
        const a = r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function vk() {
        const a = r.performance;
        return a && a.now ? a.now() : null
    };
    var wk = class {
        constructor(a, b) {
            var c = vk() || uk();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const xk = r.performance,
        yk = !!(xk && xk.mark && xk.measure && xk.clearMarks),
        zk = Ab(() => {
            var a;
            if (a = yk) a = tk(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Ak(a) {
        a && xk && zk() && (xk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), xk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Bk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (zk() && Ua(a.i, Ak), a.i.length = 0)
    }

    function Ck(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Ak(c), e;
        }
        a.end(c);
        return d
    }
    class Dk {
        constructor(a) {
            this.i = [];
            this.j = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = zk() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new wk(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            xk && zk() && xk.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (vk() || uk()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                xk && zk() && xk.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Ek(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Fk(a, b, c, d, e) {
        const f = [];
        Fe(a, function(h, k) {
            (h = Gk(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }

    function Gk(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(Gk(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Fk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hk(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ik(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Hk(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                k = a.i[h];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let m = Fk(k[l], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.j;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class Jk {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function Kk(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Lk(a.stack, b));
        return b
    }

    function Lk(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Nk = class {
        constructor(a, b, c = null) {
            this.ta = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.C = this.ba
        }
        pf(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        vb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    Ak(e), b = this.C(a, new ok(f, {
                        message: Kk(f)
                    }), void 0, c)
                } catch (h) {
                    this.ba(217, h)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const H = new Jk;
                var h = H;
                h.g.push(1);
                h.i[1] = Ek("context", a);
                b.error && b.meta && b.id || (b = new ok(b, {
                    message: Kk(b)
                }));
                if (b.msg) {
                    h = H;
                    var k = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.i[2] = Ek("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.g) try {
                    this.g(b)
                } catch (ha) {}
                if (d) try {
                    d(b)
                } catch (ha) {}
                d = H;
                l = [l];
                d.g.push(3);
                d.i[3] = l;
                d = r;
                l = [];
                b = null;
                do {
                    var m = d;
                    if (xe(m)) {
                        var n = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else n = b, b = null;
                    l.push(new rk(n || "", m));
                    try {
                        d = m.parent
                    } catch (ha) {
                        d = null
                    }
                } while (d && m != d);
                for (let ha = 0, ma = l.length - 1; ha <= ma; ++ha) l[ha].depth =
                    ma - ha;
                m = r;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == l.length - 1)
                    for (n = 1; n < l.length; ++n) {
                        var p = l[n];
                        p.url || (p.url = m.location.ancestorOrigins[n - 1] || "", p.xg = !0)
                    }
                var q = l;
                let ba = new rk(r.location.href, r, !1);
                m = null;
                const db = q.length - 1;
                for (p = db; p >= 0; --p) {
                    var t = q[p];
                    !m && pk.test(t.url) && (m = t);
                    if (t.url && !t.xg) {
                        ba = t;
                        break
                    }
                }
                t = null;
                const ya = q.length && q[db].url;
                ba.depth != 0 && ya && (t = q[db]);
                f = new qk(ba, t);
                if (f.i) {
                    q = H;
                    var w = f.i.url || "";
                    q.g.push(4);
                    q.i[4] = Ek("top", w)
                }
                var A = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var D = f.g.url.match(ue),
                        G = D[1],
                        I = D[3],
                        B = D[4];
                    w = "";
                    G && (w += G + ":");
                    I && (w += "//", w += I, B && (w += ":" + B));
                    var J = w
                } else J = "";
                G = H;
                A = [A, {
                    url: J
                }];
                G.g.push(5);
                G.i[5] = A;
                Mk(this.ta, e, H, this.j, c)
            } catch (H) {
                try {
                    Mk(this.ta, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Kk(H),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ba) {}
            }
            return this.A
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var Ok = Oi(a => typeof a === "string"),
        Pk = Oi(a => a === void 0);

    function Qk() {
        var a = Rk;
        return Oi(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    };
    var Sk = class extends O {
        constructor() {
            super()
        }
    };

    function Tk(a, b) {
        try {
            const c = d => [{
                [d.xf]: d.We
            }];
            return JSON.stringify([a.filter(d => d.xd).map(c), Ki(b), a.filter(d => !d.xd).map(c)])
        } catch (c) {
            return Uk(c, b), ""
        }
    }

    function Uk(a, b) {
        try {
            kj({
                m: Kk(a instanceof Error ? a : Error(String(a))),
                b: qi(b, 1) || null,
                v: L(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Vk = class {
        constructor(a, b) {
            var c = new Sk;
            a = N(c, 1, a);
            this.i = Hi(a, 2, b).i()
        }
    };
    var Wk = class extends O {},
        Xk = [1, 2, 3];
    var Yk = class extends O {
            constructor() {
                super()
            }
        },
        Zk = [2, 4];

    function $k(a) {
        var b = new al;
        return Hi(b, 1, a)
    }
    var al = class extends O {
        constructor() {
            super()
        }
    };
    al.O = [4];
    var bl = class extends O {
        getValue() {
            return qi(this, 1)
        }
    };

    function cl(a) {
        var b = new dl;
        return Hh(b, 1, zg(a))
    }
    var dl = class extends O {
        getValue() {
            return qi(this, 1)
        }
    };
    var el = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return qi(this, 1)
        }
    };

    function fl(a, b) {
        return Fi(a, 1, b)
    }

    function gl(a, b) {
        return Fi(a, 2, b)
    }

    function hl(a, b) {
        return Fi(a, 3, b)
    }

    function il(a, b) {
        return Fi(a, 4, b)
    }

    function jl(a, b) {
        return Fi(a, 5, b)
    }

    function kl(a, b) {
        return Wh(a, 8, ug(b), 0)
    }

    function ll(a, b) {
        return Wh(a, 9, ug(b), 0)
    }
    var ml = class extends O {
        constructor() {
            super()
        }
    };

    function nl(a, b) {
        return Fi(a, 1, b)
    }

    function ol(a, b) {
        return Fi(a, 2, b)
    }
    var pl = class extends O {};

    function ql(a, b) {
        ii(a, 1, pl, b)
    }
    var Uh = class extends O {
        eh(a) {
            hi(this, 1, pl, void 0, a, !1, 1);
            return this
        }
    };
    Uh.O = [1];
    var rl = class extends O {
        constructor() {
            super()
        }
    };

    function sl(a, b) {
        return Vh(a, 1, b, Tg)
    }

    function tl(a, b) {
        return Vh(a, 12, b, Qg)
    }

    function ul() {
        var a = new vl;
        return Yh(a, 2, Tg, "irr")
    }

    function wl(a, b) {
        return M(a, 3, b)
    }

    function xl(a, b) {
        return M(a, 4, b)
    }

    function yl(a, b) {
        return M(a, 5, b)
    }

    function zl(a, b) {
        return M(a, 7, b)
    }

    function Al(a, b) {
        return M(a, 8, b)
    }

    function Bl(a, b) {
        return Fi(a, 9, b)
    }

    function Cl(a, b) {
        return gi(a, 10, b)
    }

    function Dl(a, b) {
        return Vh(a, 11, b, Fg)
    }
    var vl = class extends O {
        constructor() {
            super()
        }
    };
    vl.O = [1, 12, 2, 10, 11];

    function El(a) {
        var b = Fl();
        C(a, 1, b)
    }

    function Gl(a, b) {
        return Fi(a, 2, b)
    }

    function Hl(a, b) {
        return gi(a, 3, b)
    }

    function Il(a, b) {
        return gi(a, 4, b)
    }

    function Jl(a, b) {
        return ii(a, 4, dl, b)
    }

    function Kl(a, b) {
        return gi(a, 5, b)
    }

    function Ll(a, b) {
        return Vh(a, 6, b, Tg)
    }

    function Ml(a, b) {
        return Fi(a, 7, b)
    }

    function Nl(a, b) {
        C(a, 9, b)
    }

    function Ol(a, b) {
        return M(a, 10, b)
    }

    function Pl(a, b) {
        return M(a, 11, b)
    }

    function Ql(a, b) {
        return M(a, 12, b)
    }
    var Rl = class extends O {
        constructor() {
            super()
        }
        H(a) {
            hi(this, 3, bl, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return Fi(this, 8, a)
        }
    };
    Rl.O = [3, 4, 5, 15, 6];
    var Sl = class extends O {
        constructor() {
            super()
        }
    };
    Sl.O = [2];
    var Tl = class extends O {};

    function Ul(a) {
        var b = new Vl;
        return N(b, 1, a)
    }
    var Vl = class extends O {
        constructor() {
            super()
        }
    };
    var Wl = class extends O {
        constructor() {
            super()
        }
    };
    var Xl = class extends O {
        constructor() {
            super()
        }
    };
    var Yl = class extends O {
        constructor() {
            super()
        }
    };
    Yl.O = [7];
    var Zl = class extends O {
            constructor() {
                super()
            }
        },
        $l = [1, 2];
    var am = class extends O {
        constructor() {
            super()
        }
    };
    var bm = class extends O {
            constructor() {
                super()
            }
        },
        cm = [1];

    function dm(a) {
        var b = new em;
        return N(b, 1, a)
    }
    var em = class extends O {
        constructor() {
            super()
        }
    };
    var fm = class extends O {
        constructor() {
            super()
        }
    };
    var gm = class extends O {
        constructor() {
            super()
        }
    };
    var hm = class extends O {
        constructor() {
            super()
        }
    };
    var im = class extends O {
        constructor() {
            super()
        }
    };
    var jm = class extends O {
        constructor() {
            super()
        }
    };
    var km = class extends O {
        constructor() {
            super()
        }
    };
    var lm = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var mm = class extends O {
        constructor() {
            super()
        }
    };
    mm.O = [1];
    var nm = class extends O {
        constructor() {
            super()
        }
    };

    function om() {
        var a = new pm,
            b = new nm;
        return E(a, 1, qm, b)
    }
    var pm = class extends O {
            constructor() {
                super()
            }
        },
        qm = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var rm = class extends O {
        constructor() {
            super()
        }
    };
    rm.O = [1];
    var sm = class extends O {
        constructor() {
            super()
        }
    };
    sm.O = [2];
    var tm = class extends O {
        constructor() {
            super()
        }
    };
    var um = class extends O {
        constructor() {
            super()
        }
    };

    function vm(a, b) {
        return Wh(a, 10, Rg(b), "0")
    }

    function wm(a, b) {
        return N(a, 1, b)
    }
    var xm = class extends O {};
    xm.O = [9];
    var ym = class extends O {
        constructor() {
            super()
        }
    };
    ym.O = [2];
    var zm = class extends O {
        constructor() {
            super()
        }
    };
    var Am = class extends O {
            constructor() {
                super()
            }
        },
        Mm = [4, 5];

    function Nm(a) {
        var b = new Om;
        return Hi(b, 4, a)
    }

    function Pm(a, b) {
        return Hh(a, 6, Rg(b))
    }
    var Om = class extends O {
        constructor() {
            super()
        }
    };

    function Qm(a) {
        var b = new Rm;
        return Di(b, 2, a)
    }
    var Rm = class extends O {
        constructor() {
            super()
        }
    };
    Rm.O = [3];
    var Sm = class extends O {
        constructor() {
            super()
        }
    };
    var Tm = class extends O {
        constructor() {
            super()
        }
    };
    var Um = class extends O {
        constructor() {
            super()
        }
    };
    var Vm = class extends O {
        constructor() {
            super()
        }
    };
    var Wm = class extends O {
        constructor() {
            super()
        }
    };
    var Xm = class extends O {
            constructor() {
                super()
            }
        },
        Ym = [2, 3];
    var Zm = class extends O {
            constructor() {
                super()
            }
        },
        $m = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function an(a, b) {
        return Fi(a, 3, b)
    }
    var bn = class extends O {
            constructor() {
                super()
            }
            Ub(a) {
                return Hi(this, 2, a)
            }
        },
        cn = [4, 5, 6, 8, 9, 10, 11, 12, 13];
    var dn = class extends O {
        constructor() {
            super()
        }
    };
    var en = class extends O {
        constructor() {
            super()
        }
    };
    en.O = [4, 5];
    var fn = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            tg(this, Rf);
            return oi(this, 1)
        }
    };
    fn.O = [2];
    var gn = class extends O {
            constructor() {
                super()
            }
        },
        hn = [4, 6];
    class jn {
        constructor(a) {
            this.g = new kn(a)
        }
    }
    class kn {
        constructor(a) {
            this.g = new ln(a)
        }
    }
    class ln {
        constructor(a) {
            this.g = new mn(a)
        }
    }
    class mn {
        constructor(a) {
            this.i = new nn(a);
            this.g = new on(a)
        }
    }
    class nn {
        constructor(a) {
            this.g = ({
                lf: b,
                status: c
            }) => {
                var d = $k("xR0Czf"),
                    e = new Wk;
                c = Zh(e, 1, Xk, Ug(c));
                d = ii(d, 4, Wk, c);
                c = new Yk;
                b = Zh(c, 4, Zk, ug(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class on {
        constructor(a) {
            this.g = ({
                lf: b,
                Sj: c
            }) => {
                var d = $k("jM4CPd"),
                    e = new Wk;
                c = Zh(e, 2, Xk, Jg(Math.round(c)));
                d = ii(d, 4, Wk, c);
                c = new Yk;
                b = Zh(c, 4, Zk, ug(b));
                b = C(d, 3, b);
                a(b)
            }
        }
    }
    class pn extends Vk {
        constructor() {
            super(...arguments);
            this.B = new jn(a => qn(this, a))
        }
    }

    function qn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !1,
            xf: 1,
            We: Ki(c)
        })))
    }

    function rn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            xf: 3,
            We: Ki(c)
        })))
    }

    function sn(a, ...b) {
        a.l(...b.map(c => ({
            xd: !0,
            xf: 7,
            We: Ki(c)
        })))
    }
    var tn = class extends pn {};
    var un = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        vn = class extends tn {
            constructor(a) {
                super(2, a);
                this.g = un
            }
            l(...a) {
                try {
                    const b = Tk(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    Uk(b, this.i)
                }
            }
        },
        wn = class extends vn {};

    function xn(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Tk(a.g, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var zn = class extends tn {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = un;
                this.I = b;
                this.F = c;
                this.H = d;
                this.A = e;
                this.g = [];
                this.j = null;
                this.C = !1
            }
            l(...a) {
                try {
                    this.H && Tk(this.g.concat(a), this.i).length >= 65536 && xn(this), this.A && !this.C && (this.C = !0, yn(this.A, () => {
                        xn(this)
                    })), this.g.push(...a), this.g.length >= this.F && xn(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        xn(this)
                    }, this.I))
                } catch (b) {
                    Uk(b, this.i)
                }
            }
        },
        An = class extends zn {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var P = a => {
        var b = "Qe";
        if (a.Qe && a.hasOwnProperty(b)) return a.Qe;
        b = new a;
        return a.Qe = b
    };

    function Bn(a, b, c) {
        return b[a] || c
    };

    function Cn(a, b) {
        a.i = (c, d) => Bn(2, b, () => [])(c, 1, d);
        a.g = () => Bn(3, b, () => [])(1)
    }
    class Dn {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function En(a, b) {
        return P(Dn).i(a, b)
    };

    function Mk(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Jk ? f = c : (f = new Jk, Fe(c, (k, l) => {
                var m = f;
                const n = m.l++;
                k = Ek(l, k);
                m.g.push(n);
                m.i[n] = k
            }));
            const h = Ik(f, "/pagead/gen_204?id=" + b + "&");
            h && hj(r, h)
        } catch (f) {}
    }

    function Fn(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Gn {
        constructor() {
            this.g = Math.random()
        }
    };
    let Hn, In;
    const Jn = new Dk(window);
    (a => {
        Hn = a ? ? new Gn;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Fn(Hn, window.google_srt);
        In = new Nk(Hn, !0, Jn);
        In.pf(() => {});
        In.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Bk(Jn) : Jn.g && Hb(window, "load", () => {
            window.google_measure_js_timing || Bk(Jn)
        })
    })();
    let Kn = (new Date).getTime();
    var Ln = {
        sm: 0,
        rm: 1,
        om: 2,
        jm: 3,
        pm: 4,
        km: 5,
        qm: 6,
        mm: 7,
        nm: 8,
        im: 9,
        lm: 10,
        tm: 11
    };
    var Mn = {
        vm: 0,
        wm: 1,
        um: 2
    };

    function Nn(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function On(a) {
        a = Xa(a, b => new Ej(b.top, b.right, b.bottom, b.left));
        a = Pn(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Pn(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ya(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Fj(a[0]))
    };
    var Lb = {
        mn: 0,
        Xl: 1,
        am: 2,
        Yl: 3,
        Zl: 4,
        gm: 8,
        xn: 9,
        Im: 10,
        Jm: 11,
        un: 16,
        Kl: 17,
        Jl: 24,
        Fm: 25,
        Yk: 26,
        Xk: 27,
        zh: 30,
        zm: 32,
        Cm: 40,
        Dn: 41,
        zn: 42
    };
    var Qn = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Rn = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Sn = 728 * 1.38;

    function Tn(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = Un(a, !0, !0),
                    d = Vn(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Wn(a, b = 420, c = !1, d = !1) {
        return (a = Un(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Xn(a) {
        return Math.max(0, Yn(a, !0) - Vn(a))
    }

    function Zn(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Vn(a, b = !1) {
        const c = Zn(a).clientHeight;
        return b ? c * lf(a) : c
    }

    function Un(a, b = !1, c = !1) {
        c = Zn(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * lf(a) : c
    }

    function Yn(a, b) {
        const c = Zn(a);
        return b ? (a = Vn(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function $n(a, b) {
        return ao(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function bo(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function co(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function eo(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function fo(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function go(a, b, c, d) {
        Mk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function ho(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ua(Object.keys(b), c => {
            Wj(a, c) || Tj(a, c, b[c])
        });
        Xe(a)
    }

    function ao(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function io(a, b) {
        jo(a).forEach(b, void 0)
    }

    function jo(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function ko(a, b) {
        return a.g[lo(b)] !== void 0
    }

    function mo(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function no(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const oo = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = lo(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = lo(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        vc() {
            return mo(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function lo(a) {
        return a instanceof Object ? String(Ea(a)) : a + ""
    };
    const po = class {
        constructor(a) {
            this.g = new oo;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return ko(this.g, a)
        }
    };
    const qo = new po("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function ro(a, {
        eb: b,
        Xa: c,
        Db: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? so(a, {
            eb: b,
            Xa: c,
            Db: !0
        }) : null
    }

    function so(a, {
        eb: b,
        Xa: c,
        Db: d = !1
    }) {
        const e = to({
                eb: b,
                Xa: c,
                Db: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = ro(a, {
            eb: b,
            Xa: c,
            Db: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var uo = class {
        constructor() {
            this.g = new Map
        }
    };

    function to({
        eb: a,
        Xa: b,
        Db: c
    }) {
        a = Ea(a);
        b = Ea(b);
        return `${a}:${b}:${c}`
    };

    function vo(a) {
        Wd(a.document.body.offsetHeight)
    };

    function wo(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function Q() {
        this.C = this.C;
        this.G = this.G
    }
    Q.prototype.C = !1;
    Q.prototype.dispose = function() {
        this.C || (this.C = !0, this.i())
    };
    Q.prototype[la(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function xo(a, b) {
        yo(a, Ka(wo, b))
    }

    function yo(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Q.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function zo(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Ao(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Bo = class extends Q {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            zo(this);
            super.i()
        }
    };

    function Co(a) {
        const b = new R(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Do(a, b) {
        const c = new R({
            first: a.P,
            second: b.P
        });
        a.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        b.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Eo(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fo(d)
    }

    function Go(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.P) !== -1,
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fo(d)
    }

    function Fo(a, b = Ho) {
        var c = a.P;
        const d = new R(a.P);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Io(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Jo(a, b, c) {
        if (a.P === b) return c(), () => {};
        const d = {
            dc: null
        };
        d.dc = Io(a, b, () => {
            d.dc && (d.dc(), d.dc = null);
            c()
        });
        return d.dc
    }

    function Ko(a, b, c) {
        Fo(a).listen(d => {
            d === b && c()
        })
    }

    function Lo(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Mo(a, b, c, d) {
        const e = new R(!1);
        var f = null;
        a = a.map(d);
        Io(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Io(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Fo(e)
    }

    function No(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.P
        }
    }
    class R {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.C = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.P
        }
        g(a) {
            this.P = a;
            this.j.forEach(b => {
                b(this.P)
            })
        }
        map(a) {
            const b = new R(a(this.P));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Ho(a, b) {
        return a == b
    };

    function Oo(a) {
        return new Po(a)
    }

    function Qo(a, b) {
        Ua(a.g, c => {
            c(b)
        })
    }
    var Ro = class {
        constructor() {
            this.g = []
        }
    };
    class Po {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Ro;
            this.listen(c => Qo(b, a(c)));
            return Oo(b)
        }
        delay(a, b) {
            const c = new Ro;
            this.listen(d => {
                a.setTimeout(() => {
                    Qo(c, d)
                }, b)
            });
            return Oo(c)
        }
    }

    function So(...a) {
        const b = new Ro;
        a.forEach(c => {
            c.listen(d => {
                Qo(b, d)
            })
        });
        return Oo(b)
    };

    function To(a) {
        return Fo(Do(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Uo(c, b)
        }))
    }
    var Wo = class {
        constructor(a) {
            this.i = a;
            this.g = new R(null);
            this.j = new R(null);
            this.l = new Ro;
            this.B = b => {
                this.g.P == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.P;
                c != null && (b = Vo(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), Qo(this.l, Uo(c, b))))
            };
            this.C = b => {
                var c = this.g.P;
                c != null && (c = Vo(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function Uo(a, b) {
        return {
            sh: b.pageX - a.pageX,
            th: b.pageY - a.pageY
        }
    }

    function Vo(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Xo(a) {
        return Fo(Do(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Yo(c, b)
        }))
    }
    var Zo = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new R(null);
            this.i = new R(null);
            this.j = new Ro;
            this.G = c => {
                this.g.g(c)
            };
            this.C = c => {
                const d = this.g.P;
                d != null && (this.g.g(null), this.i.g(null), Qo(this.j, Yo(d, c)))
            };
            this.B = c => {
                this.g.P != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function Yo(a, b) {
        return {
            sh: b.screenX - a.screenX,
            th: b.screenY - a.screenY
        }
    };
    var bp = (a, b, c) => {
        const d = new $o(a, b, c);
        return () => ap(d)
    };

    function ap(a) {
        if (a.g) return !1;
        if (a.i == null) return cp(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return cp(a), !0;
        dp(a, b);
        return !0
    }

    function cp(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function dp(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            cp(a)
        }, b)
    }
    class $o {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function ep(a) {
        return fp(Xo(a.g), To(a.i))
    }

    function gp(a) {
        return So(Oo(a.g.j), Oo(a.i.l))
    }
    var hp = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function fp(a, b) {
        return Do(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var ip = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function jp(a) {
        a.A == null && (a.A = new R(a.B.getBoundingClientRect()));
        return a.A
    }
    class kp extends Q {
        constructor(a, b) {
            super();
            this.j = a;
            this.B = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                jp(this).g(this.B.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return jp(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function lp(a, b) {
        return new mp(a, b)
    }

    function np(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.j.g(new sd(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function op(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Fo(a.j, td)
    }
    var mp = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new R(new sd(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                np(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function pp(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class qp {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function rp(a, b) {
        a = a.getBoundingClientRect();
        return new sp(a.top + co(b), a.bottom - a.top)
    }

    function tp(a) {
        return new sp(Math.round(a.g), Math.round(a.i))
    }
    class sp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var vp = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new po(c);
        b = b.filter(e => !d.contains(e));
        b.length && (up(a, b), gb(c, b))
    };

    function up(a, b) {
        for (const f of b) {
            b = Ce("LINK", a.document);
            b.type = "text/css";
            var c = id `//fonts.googleapis.com/css`,
                d = Sj(),
                e = b;
            c = dc(c, {
                family: f
            });
            if (c instanceof cc) d = c;
            else a: {
                if (c instanceof nc) {
                    d = c;
                    break a
                }
                const h = uc(c);h === oc && d(c);d = h
            }
            e.rel = "stylesheet";
            if ($b("stylesheet", "stylesheet")) {
                e.href = fc(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || r).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        nd.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof cc ? d = fc(d).toString() : (d = xc(d), d = d === void 0 ? oc.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function wp(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function xp(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class yp extends Q {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.B = this.l = null;
            this.H = bp(a, 1E3, () => {
                if (this.B != null) {
                    var b = Yn(this.g, !0) - this.B;
                    b > 1E3 && xp(this, b)
                }
            });
            this.A = null
        }
        J(a, b) {
            a == null ? (this.B = a = Yn(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
                this.J(void 0, b)
            }, a)
        }
        i() {
            this.A != null && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var zp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Ap {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Bp(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Cp(d)
    }

    function Dp(a) {
        return a.g.slice(0)
    }

    function Ep(a, b = 1) {
        a = Dp(a);
        const c = new Ap(b);
        pb(a, () => c.next());
        return new Cp(a)
    }
    const Cp = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Cp(Wa(this.g, a))
        }
        apply(a) {
            return new Cp(a(Dp(this)))
        }
        sort(a) {
            return new Cp(Dp(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Dp(this);
            b.push(a);
            return new Cp(b)
        }
    };
    class Fp {
        constructor(a) {
            this.g = new po(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Gp(a) {
        return new Hp({
            value: a
        }, null)
    }

    function Ip(a) {
        return new Hp(null, Error(a))
    }

    function Jp(a) {
        try {
            return Gp(a())
        } catch (b) {
            return new Hp(null, b)
        }
    }

    function Kp(a) {
        return a.g != null ? a.getValue() : null
    }

    function Lp(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Mp(a, b) {
        return a.g != null ? a : new Hp(null, b(a.i))
    }

    function Np(a, b) {
        return Mp(a, c => Error(`${b}${c.message}`))
    }

    function Op(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Hp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Hp ? a : Gp(a)) : this
        }
    };
    class Pp {
        constructor() {
            this.g = new oo
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new po, this.g.set(a, c));
            c.add(b)
        }
    };

    function Qp(a) {
        return !a
    }

    function Rp(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Sp(a) {
        return a !== null
    };
    var Tp = class extends O {
        getId() {
            return F(this, 3)
        }
    };
    Tp.O = [4];
    class Up {
        constructor(a, {
            Nf: b,
            Bh: c,
            Wi: d,
            Wg: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new Cp(b || []);
            this.i = e;
            this.g = d
        }
    };
    var Vp = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new oo;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Xp = a => {
            var b = Wp(a);
            a = [];
            for (let c of b) b = String(c.ic), a.push(c.yb + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Wp = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                yb: "a",
                ic: Yp(c)
            });
            a.j != null && b.push({
                yb: "as",
                ic: a.j
            });
            a.g != null && b.push({
                yb: "i",
                ic: String(a.g)
            });
            a.i != null && b.push({
                yb: "rp",
                ic: String(a.i)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                ic: Zp(a.A)
            });
            return b
        },
        Zp = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Yp = a => {
            a = Dp(a).map($p);
            a = JSON.stringify(a);
            return He(a)
        },
        $p = a => {
            const b = {};
            F(a, 7) != null && (b.q = F(a, 7));
            li(a, 2) != null &&
                (b.o = li(a, 2));
            li(a, 5) != null && (b.p = li(a, 5));
            return b
        };

    function aq() {
        var a = new bq;
        return Hh(a, 2, zg(1))
    }
    var bq = class extends O {
        setLocation(a) {
            return Hh(this, 1, zg(a))
        }
        g() {
            return ui(this, 1)
        }
    };

    function cq(a) {
        const b = [].slice.call(arguments).filter(zb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Uf || []);
            d = Object.assign(d, e.wc())
        });
        return new dq(c, d)
    }

    function eq(a) {
        switch (a) {
            case 1:
                return new dq(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new dq(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new dq(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new dq(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function fq(a) {
        return a == null ? null : new dq(null, {
            google_ml_rank: a
        })
    }

    function gq(a) {
        return a == null ? null : new dq(null, {
            google_placement_id: Xp(a)
        })
    }

    function hq({
        li: a,
        Fi: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new dq(null, a)
    }
    class dq {
        constructor(a, b) {
            this.Uf = a;
            this.g = b
        }
        wc() {
            return this.g
        }
    };
    var iq = class extends O {};
    var jq = class extends O {};
    var kq = class extends O {
        C() {
            return F(this, 2)
        }
        A() {
            return F(this, 5)
        }
        g() {
            return fi(this, jq, 3, y())
        }
        j() {
            return li(this, 4)
        }
        l() {
            return Mh(this, 6)
        }
        B() {
            return Jh(this, iq, 7)
        }
    };
    kq.O = [3];
    var lq = class extends O {};
    var mq = class extends O {
        l() {
            return K(this, 12, !1)
        }
        j() {
            return Pg(Eh(this, 13))
        }
        g() {
            const a = ki(this, 23);
            return a == null ? void 0 : a
        }
    };
    var nq = class extends O {
        constructor() {
            super()
        }
    };
    var oq = class extends O {
        g() {
            return mi(this, 3)
        }
        j() {
            return ki(this, 6)
        }
    };
    var pq = class extends O {};
    var qq = class extends O {};
    var rq = class extends O {
        ja() {
            return z(this, Tp, 1)
        }
        g() {
            return mi(this, 2)
        }
    };
    var sq = class extends O {};
    var tq = class extends O {};
    var uq = class extends O {
            getName() {
                return F(this, 4)
            }
        },
        vq = [1, 2, 3];
    var wq = class extends O {
        g() {
            return z(this, oq, 10)
        }
    };
    wq.O = [2, 5, 6, 11];
    var xq = class extends O {
        g() {
            return ki(this, 2)
        }
        j() {
            return ki(this, 3)
        }
    };
    var yq = class extends O {
        g() {
            return Pg(Eh(this, 1))
        }
    };
    var zq = class extends O {};
    var Aq = class extends O {
        g() {
            return oi(this, 1)
        }
    };
    var Bq = class extends O {
        g() {
            return L(this, 1)
        }
        j() {
            return L(this, 2)
        }
    };
    var Cq = class extends O {};
    var Dq = class extends O {
        l() {
            return K(this, 1)
        }
        A() {
            return K(this, 3)
        }
        C() {
            return K(this, 7)
        }
        g() {
            return K(this, 4)
        }
        j() {
            return K(this, 5)
        }
    };
    var Eq = class extends O {
        j() {
            return z(this, Bq, 5)
        }
        g() {
            return z(this, Aq, 6)
        }
        A() {
            return L(this, 8)
        }
        C() {
            return K(this, 9)
        }
        B() {
            return L(this, 13)
        }
        G() {
            return K(this, 11)
        }
        l() {
            return z(this, Dq, 12)
        }
    };
    var Fq = class extends O {};
    var Gq = class extends O {
        g() {
            return z(this, Fq, 1)
        }
    };
    var Hq = class extends O {};
    Hq.O = [2];
    var Iq = class extends O {};
    var Jq = class extends O {
        g(a) {
            return fi(this, Iq, 1, y(a))
        }
    };
    Jq.O = [1];
    var Kq = class extends O {
        setProperty(a) {
            return Gi(this, 1, a)
        }
        getValue() {
            return F(this, 2)
        }
    };
    var Lq = class extends O {};
    Lq.O = [3, 4];
    var Mq = class extends O {};
    var Nq = class extends O {
        ja() {
            return z(this, Tp, 1)
        }
        g() {
            return mi(this, 2)
        }
    };
    Nq.O = [6, 7, 9, 10, 11];
    var Oq = class extends O {};
    Oq.O = [4];
    var Pq = class extends O {};
    var Qq = class extends O {
        g() {
            return Nh(this, 6, Vg, y())
        }
    };
    Qq.O = [6];
    var Rq = class extends O {
        Je() {
            return Jh(this, Pq, 2)
        }
    };
    var Sq = class extends O {
        g() {
            return oi(this, 1)
        }
    };
    var Tq = class extends O {};
    var Vq = class extends O {
            g() {
                return ri(this, Tq, 2, Uq)
            }
        },
        Uq = [1, 2];
    var Wq = class extends O {
        g() {
            return z(this, Vq, 3)
        }
    };
    var Xq = class extends O {};
    var Yq = class extends O {
        g() {
            return fi(this, Xq, 1, y())
        }
    };
    Yq.O = [1];
    var Zq = class extends O {
        g() {
            return Nh(this, 1, Vg, y())
        }
        j() {
            return z(this, Wq, 3)
        }
    };
    Zq.O = [1, 4];
    var $q = class extends O {
            g() {
                return z(this, mq, 15)
            }
        },
        ar = Qi($q);
    $q.O = [1, 2, 5, 7];
    var br = class extends O {},
        cr = Qi(br);

    function dr(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? cr(b) : null
        } catch (b) {
            return null
        }
    }

    function er(a, b) {
        if (a.Be !== void 0) {
            var c = dr(b);
            c || (c = new br);
            a.Be !== void 0 && vi(c, 2, a.Be);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Ei(c, 1, Math.round(a));
            c = Ji(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = dr(b)) && Pg(Eh(c, 1)) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var fr = {
            qb: "ama_success",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        gr = {
            qb: "ama_failure",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        hr = {
            qb: "ama_coverage",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        ir = {
            qb: "ama_opt",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        jr = {
            qb: "ama_auto_rs",
            Pa: 1,
            Ua: !0,
            rb: !1
        },
        kr = {
            qb: "ama_improv",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        lr = {
            qb: "ama_constraints",
            Pa: 0,
            Ua: !0,
            rb: !0
        };

    function mr(a, b) {
        nr(a.i, jr, { ...b,
            evt: "place",
            vh: Vn(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function or(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Lk(c.stack, "") || "");
        mr(a, b)
    }
    var pr = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const qr = ["-webkit-text-fill-color"];

    function rr(a) {
        if (Zd) {
            {
                const c = De(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = sr(a)
                } else a = tr()
            }
        } else a = tr();
        return a
    }
    var tr = () => {
        const a = {
            all: "initial"
        };
        Ua(qr, b => {
            a[b] = "unset"
        });
        return a
    };

    function sr(a) {
        Ua(qr, b => {
            delete a[b]
        });
        return a
    };
    var ur = class {
        constructor(a) {
            this.g = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            v(b, rr(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            v(c, rr(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function vr(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function wr(a) {
        return jo(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        xr = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        yr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        zr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Ar = new S(1321, !0),
        Br = new T(619278254, 10),
        Cr = new S(1325, !0),
        Dr = new S(1310, !0),
        Er = new S(1355, !0),
        Fr = new S(1351, !0),
        Gr = new T(1130, 100),
        Hr = new S(1331, !0),
        Ir = new S(1352, !0),
        Jr = new S(1330, !0),
        Kr = new T(1339, .3),
        Lr = new T(1032, 200),
        Mr = new xr(14),
        Nr = new T(1224, .01),
        Or = new S(654220660),
        Pr = new T(1346, 6),
        Qr = new T(1347, 3),
        Rr = new S(1320, !0),
        Sr = new S(1260),
        Tr = new S(1239),
        Ur = new S(1196),
        Vr = new S(1160),
        Wr = new S(316),
        Xr = new S(1290),
        Yr = new S(334),
        Zr = new T(1263, -1),
        $r = new T(54),
        as = new T(1323, -1),
        bs = new T(1265, -1),
        cs = new T(1264, -1),
        ds = new S(1291),
        es = new S(1267, !0),
        fs = new S(1266),
        gs = new S(313),
        hs = new T(66, -1),
        is = new T(65, -1),
        js = new S(1256),
        ks = new S(369),
        ls = new S(1241, !0),
        ms = new S(368),
        ns = new S(1300, !0),
        os = new yr(1273, ["en", "de"]),
        ps = new S(1223, !0),
        qs = new yr(1261, ["44786015", "44786016"]),
        rs = new S(1309),
        ss = new S(1250),
        ts = new S(1151),
        us = new S(1361),
        vs = new S(1349),
        ws = new T(1072, .75),
        xs = new S(290),
        ys = new S(1222),
        zs = new S(1354),
        As = new S(1341),
        Bs = new S(1237),
        Cs = new T(1363),
        Ds = new T(1364, 300),
        Es = new S(1350),
        Fs = new S(1356),
        Gs = new S(626390500),
        Hs = new zr(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        Is = new T(643258048),
        Js = new T(643258049),
        Ks = new T(579884443, .7),
        Ls = new T(624950166, 15E3),
        Ms = new S(652479164),
        Ns = new xr(622128249),
        Os = new xr(622128250),
        Ps = new zr(641845510, ["33"]),
        Qs = new S(566279275),
        Rs = new S(622128248, !0),
        Ss = new S(566279276),
        Ts = new xr(589752731),
        Us = new xr(589752730),
        Vs = new zr(635821288, ["30_19"]),
        Ws = new zr(631402549),
        Xs = new zr(636146137, ["30_6"]),
        Ys = new S(579884441, !0),
        Zs =
        new S(636570127),
        $s = new zr(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30".split(" ")),
        at = new T(579884442, .7),
        bt = new S(613534001, !0),
        ct = new T(652486359),
        dt = new T(626062006, 670),
        et = new S(626062008),
        ft = new S(643258050),
        gt = new S(654750612),
        ht = new S(506914611),
        it = new S(597181299),
        jt = new S(626062007),
        kt = new S(1120),
        lt = new zr(630330362),
        mt = new T(618163195, 15E3),
        nt = new T(623405755, 300),
        ot = new T(508040914, 100),
        pt = new T(547455356, 49),
        qt = new T(650548030, 5),
        rt = new T(650548032, 300),
        st = new T(650548031,
            2),
        tt = new T(561668774, .1),
        ut = new T(469675170, 6E4),
        vt = new S(652491597),
        wt = new S(562896595),
        xt = new S(644381219),
        yt = new S(644381220),
        zt = new S(570863962, !0),
        At = new xr(570879859, "control_1\\.\\d"),
        Bt = new T(570863961, 50),
        Ct = new S(570879858, !0),
        Dt = new S(45615403, !0),
        Et = new S(45621722, !0),
        Ft = new S(570804360, !0),
        Gt = new T(63, 30),
        Ht = new S(1134),
        It = new S(562874197),
        Jt = new S(562874196),
        Kt = new S(555237685, !0),
        Lt = new S(45460956),
        Mt = new S(45414947, !0),
        Nt = new T(472785970, 500),
        Ot = new S(643056383),
        Pt = new T(550718588,
            250),
        Qt = new S(45545710),
        Rt = new T(624290870),
        St = new T(629793592, .8),
        Tt = new S(506738118),
        Ut = new S(77),
        Vt = new S(78),
        Wt = new S(83),
        Xt = new S(80),
        Yt = new S(76),
        Zt = new S(84),
        $t = new S(1973),
        au = new S(188),
        bu = new S(485990406);
    var cu = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.C = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function U(a) {
        return P(cu).j(a.g, a.defaultValue)
    }

    function V(a) {
        return P(cu).A(a.g, a.defaultValue)
    }

    function du(a) {
        return P(cu).C(a.g, a.defaultValue)
    }

    function eu(a) {
        return P(cu).l(a.g, a.defaultValue)
    };

    function fu(a, b) {
        a = qe(new ce(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function gu(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        vr(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function hu(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            vr(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var ju = (a, b, c, d = 0) => {
            var e = iu(b, c, d);
            if (e.J) {
                for (c = b = e.J; c = e.od(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Md
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            gu(a, e.anchor, e.position)
        },
        ku = (a, b, c, d = 0) => {
            U(gs) ? ju(a, b, c, d) : gu(a, b, c)
        };

    function iu(a, b, c) {
        const d = f => {
                f = lu(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = lu(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    J: mu(a.previousSibling, d),
                    od: f => mu(f.previousSibling, d),
                    Md: 0
                };
            case 2:
                return {
                    J: mu(a.lastChild, d),
                    od: f => mu(f.previousSibling, d),
                    Md: 0
                };
            case 3:
                return {
                    J: mu(a.nextSibling, e),
                    od: f => mu(f.nextSibling, e),
                    Md: 3
                };
            case 1:
                return {
                    J: mu(a.firstChild, e),
                    od: f => mu(f.nextSibling, e),
                    Md: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function lu(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function mu(a, b) {
        return a && b(a) ? a : null
    };

    function nu(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function ou(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function pu(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function qu(a, b, c) {
        a = nu(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function ru(a, b) {
        b = b.parentElement;
        return b ? (a = De(b, a)) ? a.direction : "" : ""
    }

    function su(a, b, c) {
        if (qu(a, b, c) !== 0) {
            pu(b, c, "0px");
            var d = qu(a, b, c);
            pu(b, c, `${-1*d}px`);
            a = qu(a, b, c);
            a !== 0 && a !== d && pu(b, c, `${d/(a-d)*d}px`)
        }
    };
    const tu = RegExp("(^| )adsbygoogle($| )");

    function uu(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Cd(d.property);
            a[e] = d.value
        }
    }

    function vu(a, b, c, d, e, f) {
        a = wu(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        xu(a, b, c, f);
        return a
    }

    function yu(a, b, c = null) {
        a = wu(a, {});
        xu(a, b, null, c);
        return a
    }

    function xu(a, b, c, d) {
        var e = [];
        if (d = d && d.Uf) a.nb.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function wu(a, b) {
        const c = fu(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Ld && uu(d, b.Ld);
        a = qe(new ce(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.wf && (d.marginTop = b.wf);
        b.ne && (d.marginBottom = b.ne);
        b.Yb && uu(d, b.Yb);
        c.appendChild(a);
        return {
            nb: c,
            va: a
        }
    }

    function zu(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.wc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Au(a) {
        const b = wr(a.document);
        Ua(b, function(c) {
            const d = Bu(a, c);
            var e;
            if (e = d) {
                e = (e = nu(c, a)) ? e.y : 0;
                const f = Vn(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), zu(a, c))
        })
    }

    function Bu(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in qb) a[qb[c]] && (b[qb[c]] = a[qb[c]]);
        return b
    };
    var Du = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (Cu(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Cu = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? zd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && qo.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Cu(a, b[c])) return !0
        }
        return !1
    };
    var Eu = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Fu = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return vu(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return Eu(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Gu(a) {
        var b = [];
        io(a.getElementsByTagName("p"), function(c) {
            Hu(c) >= 100 && b.push(c)
        });
        return b
    }

    function Hu(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        io(a.childNodes, function(c) {
            b += Hu(c)
        });
        return b
    }

    function Iu(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Ju(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Ku(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (h) {}
        if (!c.length) return [];
        b = fb(c);
        b = Ju(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Gu(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Lu = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Mu {
        constructor() {
            var a = id `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.C = a
        }
        pf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new ok(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            r.google_js_errors = r.google_js_errors || [];
            r.google_js_errors.push(b);
            r.error_rep_loaded || (Be(r.document, this.C), r.error_rep_loaded = !0);
            return !1
        }
        vb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Da(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        na(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const Nu = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Ou = (a, b, c, d, e = !1) => {
            const f = d || window,
                h = typeof queueMicrotask !== "undefined";
            return function() {
                e && h && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const k = vk();
                let l, m = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (n) {
                    m = 13;
                    if (!c) throw n;
                    c(a, n)
                } finally {
                    f.google_measure_js_timing && k && Nu({
                        label: a.toString(),
                        value: k,
                        duration: (vk() || 0) - k,
                        type: m,
                        ...(e && h && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        Pu = (a, b, c, d = !1) => Ou(a, b, (e, f) => {
            (new Mu).ba(e, f)
        }, c, d);

    function Qu(a, b, c) {
        return Ou(a, b, void 0, c, !0).apply()
    }

    function Ru(a, b) {
        return Pu(754, a, b, !0).apply()
    }

    function Su(a) {
        if (!a) return null;
        var b = F(a, 7);
        if (F(a, 1) || a.getId() || Nh(a, 4, Vg, y()).length > 0) {
            var c = F(a, 3),
                d = F(a, 1),
                e = Nh(a, 4, Vg, y(lg));
            b = li(a, 2);
            var f = li(a, 5);
            a = Tu(mi(a, 6));
            var h = "";
            d && (h += d);
            c && (h += "#" + Iu(c));
            if (e)
                for (c = 0; c < e.length; c++) h += "." + Iu(e[c]);
            b = (e = h) ? new Lu(e, b, f, a) : null
        } else b = b ? new Lu(b, li(a, 2), li(a, 5), Tu(mi(a, 6))) : null;
        return b
    }
    var Uu = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Tu(a) {
        return a == null ? a : Uu[a]
    }

    function Vu(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = F(a[c], 1),
                e = F(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Wu(a, b) {
        var c = {};
        a && (c.wf = F(a, 1), c.ne = F(a, 2), c.clearBoth = !!ki(a, 3));
        b && (c.Ld = Vu(fi(b, Kq, 3, y(lg))), a = fi(b, Kq, 4, y(lg)), c.Yb = Vu(a));
        return c
    }
    var Xu = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Yu = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Zu = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return vu(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class $u {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = Eu(a);
            return new dq(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const av = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const bv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = fi(this.g, Lq, 9, y()).length > 0 ? fi(this.g, Lq, 9, y())[0] : null,
                f = Wu(z(this.g, Mq, 3), e);
            if (!e) return null;
            if (e = F(e, 1)) {
                d = d.document;
                var h = c.tagName;
                c = qe(new ce(d), h);
                c.style.clear = f.clearBoth ? "both" : "none";
                h == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ld && uu(c.style, f.Ld);
                d = qe(new ce(d), "INS");
                f.Yb && uu(d.style, f.Yb);
                c.appendChild(d);
                f = {
                    nb: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                xu(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = fi(this.g, Lq, 9, y()).length > 0 ? fi(this.g, Lq, 9, y())[0] : null;
            if (!a) return null;
            a = fi(a, Kq, 3, y());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (F(c, 1) == "height" && parseInt(F(c, 2), 10) > 0) return parseInt(F(c, 2), 10)
            }
            return null
        }
    };
    const cv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var h = [];
                for (let k = 0; k < c.length; k++) {
                    const l = c.item(k);
                    l !== "width" && l !== "height" && h.push({
                        property: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    Yb: h
                }
            } else c = {};
            a = vu(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        wc() {
            return this.g
        }
    };
    class dv {
        constructor(a) {
            this.i = a
        }
        g() {
            return new dq([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const ev = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = Ku(this.l, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function fv(a, b, c) {
        const d = [];
        for (let t = 0; t < a.length; t++) {
            var e = a[t];
            var f = t,
                h = b,
                k = c,
                l = e.ja();
            if (l) {
                var m = Su(l);
                if (m) {
                    var n = mi(e, 2);
                    n = Xu[n];
                    var p = n === void 0 ? null : n;
                    if (p === null) e = null;
                    else {
                        n = (n = z(e, Mq, 3)) ? ki(n, 3) : null;
                        m = new ev(m, p);
                        p = Nh(e, 10, Ag, y()).slice(0);
                        li(l, 5) != null && p.push(1);
                        var q = k ? k : {};
                        k = li(e, 12);
                        l = Jh(e, bq, 4) ? z(e, bq, 4) : null;
                        mi(e, 8) == 1 ? (q = q.Oh || null, e = new gv(m, new Zu(Wu(z(e, Mq, 3), null)), q, n, 0, p, l, h, f, k, e)) : e = mi(e, 8) == 2 ? new gv(m, new bv(e), q.Xi || new dv("text"), n, 1, p, l, h, f, k, e) : null
                    }
                } else e =
                    null
            } else e = null;
            e !== null && d.push(e)
        }
        return d
    }

    function hv(a) {
        return a.A
    }

    function iv(a) {
        return a.Fa
    }

    function jv(a) {
        return U(Ur) ? (a.M || (a.M = a.F.i(a.j)), a.M) : a.F.i(a.j)
    }

    function kv(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        U(Ur) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function lv(a) {
        return a.B instanceof cv ? a.B.wc() : null
    }

    function mv(a, b, c) {
        ko(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function nv(a, b) {
        a.A = !0;
        U(Ur) && (a.i && hu(a.i), a.i = null);
        b != null && a.ca.push(b)
    }

    function ov(a) {
        return fu(a.j.document, a.H || !1)
    }

    function pv(a) {
        return a.B.j(a.j)
    }

    function qv(a, b = null, c = null) {
        return new gv(a.F, b || a.B, c || a.T, a.H, a.Lb, a.zc, a.Td, a.j, a.ua, a.G, a.l, a.C, a.ia)
    }
    class gv {
        constructor(a, b, c, d, e, f, h, k, l, m = null, n = null, p = null, q = null) {
            this.F = a;
            this.B = b;
            this.T = c;
            this.H = d;
            this.Lb = e;
            this.zc = f;
            this.Td = h ? h : new bq;
            this.j = k;
            this.ua = l;
            this.G = m;
            this.l = n;
            (a = !n) || (a = !(n.ja() && li(n.ja(), 5) != null));
            this.Fa = !a;
            this.C = p;
            this.ia = q;
            this.ca = [];
            this.A = !1;
            this.I = new oo;
            this.M = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function rv(a, b, c, d, e, f) {
        const h = aq();
        return new gv(new av(c, e), new Fu, new $u(a), !0, 2, [], h, d, null, null, null, b, f)
    }

    function sv(a, b, c, d, e) {
        const f = aq();
        return new gv(new av(b, d), new Zu({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var tv = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return rv(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return sv(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const uv = {
        TABLE: {
            mc: new Fp([1, 2])
        },
        THEAD: {
            mc: new Fp([0, 3, 1, 2])
        },
        TBODY: {
            mc: new Fp([0, 3, 1, 2])
        },
        TR: {
            mc: new Fp([0, 3, 1, 2])
        },
        TD: {
            mc: new Fp([0, 3])
        }
    };

    function vv(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ta(e, f), c < 0 || b.push(new wv(a, [f], c, f, 3, me(f).trim(), d));
        return b
    }

    function xv(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            h = f.length;
        let k = 0,
            l = "";
        for (let p = 0; p < h; p++) {
            var m = f[p];
            if (m.nodeType == 1 || m.nodeType == 3) {
                if (m.nodeType != 1) var n = null;
                else m.tagName == "BR" ? n = m : (n = c.getComputedStyle(m).getPropertyValue("display"), n = n == "inline" || n == "inline-block" ? null : m);
                n ? (d.length && l && e.push(new wv(a, d, p - 1, n, 0, l, c)), d = [], k = p + 1, l = "") : (d.push(m), m = me(m).trim(), l += m && l ? " " + m : m)
            }
        }
        d.length && l && e.push(new wv(a, d, k, b, 2, l, c));
        return e
    }

    function yv(a, b) {
        return a.g - b.g
    }
    class wv {
        constructor(a, b, c, d, e, f, h) {
            this.l = a;
            this.Yc = b.slice(0);
            this.g = c;
            this.ae = d;
            this.be = e;
            this.C = f;
            this.i = h
        }
        da() {
            return this.i
        }
        A(a) {
            return rv(a, this.l, this.ae, this.i, this.be, this.g)
        }
        j() {
            return sv(this.l, this.ae, this.i, this.be, this.g)
        }
    };

    function zv(a) {
        return eb(a.C ? xv(a.i, a.g, a.j) : [], a.A ? vv(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.ae.tagName;
            c ? (c = uv[c.toUpperCase()], b = c != null && c.mc.contains(b.be)) : b = !1;
            return !b
        })
    }
    class Av {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.Vc;
            this.C = b.hg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Mf
        }
    };

    function Bv(a, b) {
        if (!b) return !1;
        const c = Ea(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = Bv(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function Cv(a, b) {
        return Za(b.Yc, c => Bv(a, c))
    }
    class Dv {
        constructor(a) {
            this.g = new oo;
            this.i = a
        }
    };
    class Ev {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var Gv = (a, {
            ug: b = !1,
            qf: c = !1,
            Dg: d = c || U(Tr) ? 2 : 3,
            nf: e = null
        } = {}) => {
            a = zv(a);
            return Fv(a, {
                ug: b,
                qf: c,
                Dg: d,
                nf: e
            })
        },
        Fv = (a, {
            ug: b = !1,
            qf: c = !1,
            Dg: d = c || U(Tr) ? 2 : 3,
            nf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(yv);
            a = [];
            b = new Ev(b, e);
            for (const h of f) {
                e = {
                    Nd: h,
                    qd: h.C.length < 51 ? !1 : b.j != null ? !Cv(b.j, h) : !0
                };
                if (b.l || e.qd) b.g.length ? (f = b.g[b.g.length - 1].Nd, f = Du(f.da(), f.Yc[f.Yc.length - 1], e.Nd.Yc[0])) : f = !0, f ? (b.g.push(e), e.qd && b.i.push(e.Nd)) : (b.g = [e], b.i = e.qd ? [e.Nd] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || U(Tr) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].qd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Iv = (a, b, c = !1) => {
            a = Hv(a, b);
            const d = new Dv(b);
            return zp(a, e => Gv(e, {
                qf: c,
                nf: d
            }))
        },
        Jv = (a, b) => {
            a = Hv(a, b);
            const c = new Dv(b);
            return zp(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var h = [];
                    for (var k of d) h.push(new tv(e, k, f));
                    e = h
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (h = 1; h < d.length; h++) {
                        const n = d[h];
                        k = f;
                        b: {
                            if (k.element.hasAttributes())
                                for (m of k.element.attributes)
                                    if (m.name.toLowerCase() === "style" && m.value.toLowerCase().includes("background-image")) {
                                        var l = !0;
                                        break b
                                    }
                            l =
                            k.element.tagName;l = l === "IMG" || l === "SVG"
                        }(l || k.element.textContent.length > 1) && !Bv(c, f.element) && Du(n.da(), f.element, n.element) && e.push(f);
                        f = n
                    }
                    var m = e
                } else m = [];
                return m
            })
        },
        Hv = (a, b) => {
            const c = new oo;
            a.forEach(d => {
                var e = Su(z(d, Tp, 1));
                if (e) {
                    var f = e.toString();
                    ko(c, f) || c.set(f, {
                        articleStructure: d,
                        Gh: e,
                        Vc: null,
                        hg: !1,
                        Mf: null
                    });
                    e = c.get(f);
                    (f = (f = z(d, Tp, 2)) ? F(f, 7) : null) ? e.Vc = e.Vc ? e.Vc + "," + f : f: e.hg = !0;
                    d = z(d, Tp, 4);
                    e.Mf = d ? F(d, 7) : null
                }
            });
            return no(c).map(d => {
                const e = Ku(d.Gh, b.document);
                return e.length ? new Av(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var Kv = a => a ? .google_ad_slot ? Gp(new Up(1, {
            Bh: a.google_ad_slot
        })) : Ip("Missing dimension when creating placement id"),
        Mv = a => {
            switch (a.Lb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ja(), a == null ? a = null : (b = mi(b, 2), a = b == null ? null : new Up(0, {
                        Nf: [a],
                        Wg: b
                    })));
                    return a != null ? Gp(a) : Ip("Missing dimension when creating placement id");
                case 2:
                    return a = Lv(a), a != null ? Gp(a) : Ip("Missing dimension when creating placement id");
                default:
                    return Ip("Invalid type: " + a.Lb)
            }
        };
    const Lv = a => {
        if (a == null || a.C == null) return null;
        const b = z(a.C, Tp, 1),
            c = z(a.C, Tp, 2);
        if (b == null || c == null) return null;
        const d = a.ia;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new Up(0, {
            Nf: [b, c],
            Wi: d,
            Wg: Yu[a]
        })
    };

    function Nv(a) {
        const b = lv(a.ha);
        return (b ? Kv(b) : Mv(a.ha)).map(c => Xp(c))
    }

    function Ov(a) {
        a.g = a.g || Nv(a);
        return a.g
    }

    function Pv(a, b) {
        if (a.ha.A) throw Error("AMA:AP:AP");
        ku(b, a.ja(), a.ha.g());
        nv(a.ha, b)
    }
    const Qv = class {
        constructor(a, b, c) {
            this.ha = a;
            this.i = b;
            this.la = c;
            this.g = null
        }
        ja() {
            return this.i
        }
        fill(a, b) {
            var c = this.ha;
            (a = c.B.i(a, b, this.i, c.j)) && Pv(this, a.nb);
            return a
        }
    };

    function Rv(a, b) {
        return Ru(() => {
            if (U(Ur)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        h = jv(f);
                    if (h) {
                        if (!f.i && !f.A) {
                            a: {
                                var k = null;
                                try {
                                    var l = jv(f);
                                    if (l) {
                                        k = kv(f);
                                        ku(k, l, f.g());
                                        var m = k;
                                        break a
                                    }
                                    m = null;
                                    break a
                                } catch (t) {
                                    throw hu(k), t;
                                }
                                m = void 0
                            }
                            f.i = m
                        }(k = f.i) && d.push({
                            zj: f,
                            anchorElement: h,
                            Hi: k
                        })
                    }
                }
                if (d.length > 0)
                    for (m = co(b), l = eo(b), e = 0; e < d.length; e++) {
                        const {
                            zj: t,
                            anchorElement: w,
                            Hi: A
                        } = d[e];
                        f = Sv(A, l, m);
                        c.push(new Qv(t, w, f))
                    }
                m = c
            } else {
                m = [];
                l = [];
                try {
                    const t = [];
                    for (let w = 0; w < a.length; w++) {
                        var n = a[w],
                            p = jv(n);
                        p && t.push({
                            Qg: n,
                            anchorElement: p
                        })
                    }
                    for (p = 0; p < t.length; p++) {
                        n = l;
                        h = n.push; {
                            var q = t[p];
                            const w = q.anchorElement,
                                A = q.Qg,
                                D = kv(A);
                            try {
                                ku(D, w, A.g()), k = D
                            } catch (G) {
                                throw hu(D), G;
                            }
                        }
                        h.call(n, k)
                    }
                    c = co(b);
                    d = eo(b);
                    for (h = 0; h < l.length; h++) e = Sv(l[h], d, c), f = t[h], m.push(new Qv(f.Qg, f.anchorElement, e))
                } finally {
                    for (c = 0; c < l.length; c++) hu(l[c])
                }
            }
            return m
        }, b)
    }

    function Sv(a, b, c) {
        a = a.getBoundingClientRect();
        return new qp(a.left + b, a.top + c, a.right - a.left)
    };
    const Tv = {
            1: "0.5vp",
            2: "300px"
        },
        Uv = {
            1: 700,
            2: 1200
        },
        Vv = {
            [1]: {
                hh: "3vp",
                rf: "1vp",
                gh: "0.3vp"
            },
            [2]: {
                hh: "900px",
                rf: "300px",
                gh: "90px"
            }
        };

    function Wv(a, b, c) {
        var d = Xv(a),
            e = Vn(a) || Uv[d],
            f = void 0;
        c && (f = (c = (c = Yv(fi(c, kq, 2, y()), d)) ? z(c, iq, 7) : void 0) ? Zv(c, e) : void 0);
        c = f;
        f = Xv(a);
        a = Vn(a) || Uv[f];
        const h = $v(Vv[f].rf, a);
        a = h === null ? aw(f, a) : new bw(h, h, cw(h, 8), 8, .3, c);
        c = $v(Vv[d].hh, e);
        f = $v(Vv[d].rf, e);
        d = $v(Vv[d].gh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new bw(e, e, cw(e, a.i), a.i, a.l, a.g)
    }

    function dw(a, b) {
        const c = Pg(Eh(a, 4));
        a = Mh(a, 5);
        return c == null || a == null ? b : new bw(a, 0, [], c, 1)
    }

    function ew(a, b) {
        const c = Xv(a);
        a = Vn(a) || Uv[c];
        if (!b) return aw(c, a);
        if (b = Yv(fi(b, kq, 2, y()), c))
            if (b = fw(b, a)) return b;
        return aw(c, a)
    }

    function gw(a) {
        const b = Xv(a);
        a = Vn(a) || Uv[b];
        return aw(b, a)
    }

    function hw(a, b) {
        let c = {
            Gc: a.j,
            tb: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.Lc);
        return c
    }

    function iw(a, b, c) {
        var d = ki(b, 2);
        b = z(b, kq, 1);
        var e = Xv(c);
        var f = Vn(c) || Uv[e];
        c = $v(b ? .C(), f) ? ? a.j;
        e = $v(b ? .A(), f) ? ? a.C;
        d = d ? [] : jw(b ? .g(), f) ? ? a.A;
        const h = b ? .j() ? ? a.i,
            k = b ? .l() ? ? a.l;
        a = (b ? .B() ? Zv(z(b, iq, 7), f) : null) ? ? a.g;
        return new bw(c, e, d, h, k, a)
    }

    function kw(a, b) {
        var c = Xv(b);
        const d = new lq,
            e = new kq;
        let f = !1;
        var h = V(Zr);
        h >= 0 && (Ci(e, 4, h), f = !0);
        h = null;
        c === 1 ? (c = V(cs), c >= 0 && (h = c + "vp")) : (c = V(bs), c >= 0 && (h = c + "px"));
        c = V(as);
        c >= 0 && (h = c + "px");
        h !== null && (Gi(e, 2, h), f = !0);
        c = U(es) ? "0px" : null;
        c !== null && (Gi(e, 5, c), f = !0);
        if (U(fs)) vi(d, 2, !0), f = !0;
        else if (c !== null || h !== null) {
            const n = [];
            for (const p of a.A) {
                var k = n,
                    l = k.push;
                var m = new jq;
                m = Ci(m, 1, p.adCount);
                m = Gi(m, 3, c ? ? p.Lc.tb + "px");
                m = Gi(m, 2, h ? ? p.Lc.Gc + "px");
                l.call(k, m)
            }
            gi(e, 3, n)
        }
        return f ? (C(d, 1, e), iw(a, d, b)) : a
    }
    class bw {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.C = b;
            this.A = c.sort((h, k) => h.adCount - k.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Yv(a, b) {
        for (let c of a)
            if (mi(c, 1) == b) return c;
        return null
    }

    function jw(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = li(d, 1);
            const e = $v(F(d, 2), b),
                f = $v(F(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Lc: {
                    Gc: e,
                    tb: f
                }
            })
        }
        return c
    }

    function fw(a, b) {
        const c = $v(F(a, 2), b),
            d = $v(F(a, 5), b);
        if (c === null) return null;
        const e = li(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = jw(f, b);
        if (f === null) return null;
        const h = z(a, iq, 7);
        b = h ? Zv(h, b) : void 0;
        return new bw(c, d, f, e, Mh(a, 6), b)
    }

    function aw(a, b) {
        a = $v(Tv[a], b);
        return U(Xr) ? new bw(a === null ? Infinity : a, null, [], 8, .3) : new bw(a === null ? Infinity : a, null, [], 3, null)
    }

    function $v(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Xv(a) {
        a = Un(a) >= 900;
        return se() && !a ? 1 : 2
    }

    function cw(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Lc: {
                Gc: a * 2,
                tb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Lc: {
                Gc: a * 3,
                tb: a * 3
            }
        }]
    }

    function Zv(a, b) {
        const c = $v(F(a, 2), b) || 0,
            d = li(a, 3) || 1;
        a = $v(F(a, 1), b) || 0;
        return {
            Eg: c,
            Cg: d,
            ec: a
        }
    };

    function lw(a, b, c) {
        return Nn({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function mw(a) {
        if (!a.length) return null;
        const b = On(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new nw(b, a)
    }
    class nw {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let ow, W;
    const fy = new Dk(r);
    ((a, b = !0) => {
        ow = a || new Gn;
        typeof r.google_srt !== "number" && (r.google_srt = Math.random());
        Fn(ow, r.google_srt);
        W = new Nk(ow, b, fy);
        W.l(!0);
        r.document.readyState == "complete" ? r.google_measure_js_timing || Bk(fy) : fy.g && Hb(r, "load", () => {
            r.google_measure_js_timing || Bk(fy)
        })
    })();
    var gy = (a, b) => W.vb(a, b),
        hy = (a, b) => W.Da(a, b),
        iy = (a, b, c) => {
            const d = P(Dn).g();
            !b.eid && d.length && (b.eid = d.toString());
            Mk(ow, a, b, !0, c)
        },
        jy = (a, b, c) => {
            W.na(a, b, c)
        };

    function ky(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var py = (a, b) => {
        var c = fb(b.document.querySelectorAll(".google-auto-placed"));
        const d = fb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = ly(b),
            f = my(b),
            h = ny(b),
            k = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = fb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            m = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let n = [].concat(fb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), fb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [p, q] of [
                [a.pd, c],
                [a.Kb, d],
                [a.Ui, e],
                [a.Ne, f],
                [a.Oe, h],
                [a.Si, k],
                [a.Ti, l],
                [a.Vi, m]
            ]) p === !1 ? b = b.concat(q) : n = n.concat(q);
        a = oy(n);
        c = oy(b);
        a = a.slice(0);
        for (const p of c)
            for (c = 0; c < a.length; c++)(p.contains(a[c]) || a[c].contains(p)) && a.splice(c, 1);
        return a
    };
    const qy = a => {
            const b = ky(a);
            return b ? Wa(Xa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        ly = a => fb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        my = a => (qy(a) || fb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(fb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        ny = a => fb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var oy = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var ry = W.Da(453, py),
        sy;
    sy = W.Da(454, (a, b) => {
        const c = fb(b.document.querySelectorAll(".google-auto-placed")),
            d = fb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = ly(b),
            f = my(b),
            h = ny(b),
            k = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = fb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return oy([].concat(a.pd === !0 ? c : [], a.Kb === !0 ? d : [], a.Ui === !0 ? e : [], a.Ne === !0 ? f : [], a.Oe === !0 ? h : [], a.Si === !0 ? k : [], a.Ti === !0 ? l : [], a.Vi ===
            !0 ? b : []))
    });

    function ty(a, b, c) {
        const d = uy(a);
        b = vy(d, b, c);
        return new wy(a, d, b)
    }

    function xy(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function yy(a) {
        return a.g.map(b => b.box)
    }

    function zy(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class wy {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function uy(a) {
        const b = ry({
                Kb: !1
            }, a),
            c = eo(a),
            d = co(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || xy(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                jo: e ? 1 : 0
            } : null
        }).filter(zb(e => e === null))
    }

    function vy(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? Ay(a, b) : Xa(a, d => new nw(d.box, 1))
    }

    function Ay(a, b) {
        a = Xa(a, d => new nw(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (lw(d, a[f], b)) {
                        d = mw([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function By(a, b, c) {
        const d = pp(c, b);
        return !Za(a, e => Nn(e, d))
    }

    function Cy(a, b, c, d, e) {
        e = e.la;
        const f = pp(e, b),
            h = pp(e, c),
            k = pp(e, d);
        return !Za(a, l => Nn(l, h) || Nn(l, f) && !Nn(l, k))
    }

    function Dy(a, b, c, d) {
        const e = yy(a);
        if (By(e, b, d.la)) return !0;
        if (!Cy(e, b, c.Eg, c.ec, d)) return !1;
        const f = new nw(pp(d.la, 0), 1);
        a = Wa(a.l, h => lw(h, f, c.ec));
        b = Ya(a, (h, k) => h + k.i, 1);
        return a.length === 0 || b > c.Cg ? !1 : !0
    };
    var Ey = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Fy(a, b) {
        const c = new Pp,
            d = new po;
        b.forEach(e => {
            if (ri(e, sq, 1, vq)) {
                e = ri(e, sq, 1, vq);
                if (z(e, rq, 1) && z(e, rq, 1).ja() && z(e, rq, 2) && z(e, rq, 2).ja()) {
                    const h = Gy(a, z(e, rq, 1).ja()),
                        k = Gy(a, z(e, rq, 2).ja());
                    if (h && k)
                        for (var f of Ey({
                                anchor: h,
                                position: mi(z(e, rq, 1), 2)
                            }, {
                                anchor: k,
                                position: mi(z(e, rq, 2), 2)
                            })) c.set(Ea(f.anchor), f.position)
                }
                z(e, rq, 3) && z(e, rq, 3).ja() && (f = Gy(a, z(e, rq, 3).ja())) && c.set(Ea(f), mi(z(e, rq, 3), 2))
            } else ri(e, tq, 2, vq) ? Hy(a, ri(e, tq, 2, vq), c) : ri(e, qq, 3, vq) && Iy(a, ri(e, qq, 3, vq), d)
        });
        return new Jy(c,
            d)
    }
    class Jy {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Hy = (a, b, c) => {
            z(b, rq, 2) ? (b = z(b, rq, 2), (a = Gy(a, b.ja())) && c.set(Ea(a), mi(b, 2))) : z(b, Tp, 1) && (a = Ky(a, z(b, Tp, 1))) && a.forEach(d => {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Iy = (a, b, c) => {
            z(b, Tp, 1) && (a = Ky(a, z(b, Tp, 1))) && a.forEach(d => {
                c.add(Ea(d))
            })
        },
        Gy = (a, b) => (a = Ky(a, b)) && a.length > 0 ? a[0] : null,
        Ky = (a, b) => (b = Su(b)) ? Ku(b, a) : null;
    var Ly = class {
        constructor() {
            this.g = ef();
            this.i = 0
        }
    };

    function My(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Ny(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Oy(a) {
        a = Py(a);
        return a.has("all") || a.has("after")
    }

    function Qy(a) {
        a = Py(a);
        return a.has("all") || a.has("before")
    }

    function Py(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Ny(a) {
        const b = Py(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Ry = class {
        constructor() {
            this.g = new Set;
            this.i = new Ly
        }
    };

    function Sy(a) {
        return function(b) {
            return Rv(b, a)
        }
    }

    function Ty(a) {
        const b = Vn(a);
        return b ? Ka(Uy, b + co(a)) : wb
    }

    function Vy(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return wb;
        const d = yy(c || ty(b));
        return e => By(d, a, e.la)
    }

    function Wy(a, b, c, d) {
        if (a < 0 || b.Eg < 0 || b.Cg < 0 || b.ec < 0) throw Error("ama::ead:nd");
        return a === Infinity ? wb : e => Dy(d || ty(c, b.ec), a, b, e)
    }

    function Xy(a) {
        if (!a.length) return wb;
        const b = new Fp(a);
        return c => b.contains(c.Lb)
    }

    function Yy(a) {
        return function(b) {
            for (let c of b.zc)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function Zy(a) {
        return a.length ? function(b) {
            const c = b.zc;
            return a.some(d => c.indexOf(d) > -1)
        } : xb
    }

    function $y(a, b) {
        if (a <= 0) return xb;
        const c = Zn(b).scrollHeight - a;
        return function(d) {
            return d.la.g <= c
        }
    }

    function az(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[mi(c.Td, 2) || 0]
        }
    }

    function bz(a) {
        return a.length ? b => a.includes(mi(b.Td, 1) || 0) : xb
    }

    function cz(a, b) {
        const c = Fy(a, b);
        return function(d) {
            var e = d.ja();
            d = Yu[d.ha.g()];
            var f = c.i,
                h = Ea(e);
            f = f.g.get(h);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Ea(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Ea(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function dz() {
        const a = new Ry;
        return function(b) {
            var c = b.ja(),
                d = Yu[b.ha.g()];
            a: switch (d) {
                case 1:
                    b = Oy(c.previousElementSibling) || Qy(c);
                    break a;
                case 4:
                    b = Oy(c) || Qy(c.nextElementSibling);
                    break a;
                case 2:
                    b = Qy(c.firstElementChild);
                    break a;
                case 3:
                    b = Oy(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = My(a, c, d);
            d = a.i;
            iy("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Ue()
            }, .1);
            return !(b || c)
        }
    }
    const Uy = (a, b) => b.la.g >= a,
        ez = (a, b, c) => {
            c = c.la.i;
            return a <= c && c <= b
        };

    function fz(a, b, c, d, e) {
        var f = gz(hz(a, b), a);
        if (f.length === 0) {
            var h = !!z(b, Jq, 6) ? .g() ? .length;
            f = z(b, Eq, 28) ? .l() ? .j() && h ? gz(iz(a, b), a) : f
        }
        if (f.length === 0) return or(d, "pfno"), [];
        b = f;
        a = e.gd ? jz(a, b, c) : {
            kb: b,
            jd: null
        };
        const {
            kb: k,
            jd: l
        } = a;
        f = k;
        return f.length === 0 && l ? (or(d, l), []) : [f[e.Uj ? 0 : e.Tj ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function jz(a, b, c) {
        c = c ? fi(c, uq, 5, y(lg)) : [];
        const d = cz(a.document, c),
            e = dz();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            kb: [],
            jd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            kb: [],
            jd: "pfet"
        } : {
            kb: b,
            jd: null
        }
    }

    function kz(a, b) {
        return a.la.g - b.la.g
    }

    function hz(a, b) {
        const c = z(b, Jq, 6);
        if (!c) return [];
        b = z(b, Eq, 28) ? .l();
        return (b ? .g() ? Jv(c.g(lg), a) : Iv(c.g(lg), a, !!b ? .l())).map(d => d.j())
    }

    function iz(a, b) {
        b = fi(b, Nq, 1, y(lg)) || [];
        return fv(b, a, {}).filter(c => !c.zc.includes(6))
    }

    function gz(a, b) {
        a = Rv(a, b);
        const c = Ty(b);
        a = a.filter(d => c(d));
        return a.sort(kz)
    };
    var lz = {},
        mz = {},
        nz = {},
        oz = {};

    function pz() {
        throw Error("Do not instantiate directly");
    }
    pz.prototype.Wf = null;
    pz.prototype.Ja = function() {
        return this.content
    };
    pz.prototype.toString = function() {
        return this.content
    };

    function qz(a) {
        if (a.Xf !== lz) throw Error("Sanitized content was not of kind HTML.");
        return Pc(a.toString())
    }

    function rz() {
        pz.call(this)
    }
    Ma(rz, pz);
    rz.prototype.Xf = lz;

    function sz(a) {
        if (a != null) switch (a.Wf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function tz(a) {
        return uz(a, lz) ? a : a instanceof Oc ? vz(Nc(a).toString()) : vz(String(String(a)).replace(wz, xz), sz(a))
    }
    var vz = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Wf = d);
            return c
        }
    }(rz);

    function yz(a) {
        return zz(String(a), () => "").replace(Az, "&lt;")
    }
    const Bz = RegExp.prototype.hasOwnProperty("sticky"),
        Cz = new RegExp((Bz ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", Bz ? "gy" : "g");

    function zz(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            h, k, l = 0;
        for (; l < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", l);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(l));
                        l = d
                    } else c.push(a.substring(l, m)), k = m, l = m + 1, Bz ? (Cz.lastIndex = l, m = Cz.exec(a)) : (Cz.lastIndex = 0, m = Cz.exec(a.substring(l))), m ? (f = ["<", m[0]], h = m[1], e = 1, l += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(l++);
                    switch (m) {
                        case "'":
                        case '"':
                            let n = a.indexOf(m, l);
                            n < 0 ? l = d : (f.push(m, a.substring(l, n + 1)), l = n + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                h));
                            e = 0;
                            f = [];
                            k = h = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && l >= d && (l = k + 1, c.push("<"), e = 0, f = [], k = h = null)
        }
        return c.join("")
    }

    function Dz(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Ez(a) {
        return uz(a, lz) ? String(yz(a.Ja())).replace(Fz, xz) : String(a).replace(wz, xz)
    }

    function Gz(a) {
        return uz(a, lz) ? String(yz(a.Ja())).replace(Hz, xz) : String(a).replace(Iz, xz)
    }
    const Jz = /['()]/g;

    function Kz(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function X(a) {
        uz(a, oz) ? a = Dz(a.Ja()) : a == null ? a = "" : a instanceof Ac ? a = Dz(zc(a)) : a instanceof Lc ? a = Dz(Kc(a)) : (a = String(a), a = Lz.test(a) ? a : "zSoyz");
        return a
    }

    function uz(a, b) {
        return a != null && a.Xf === b
    }
    const Mz = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function xz(a) {
        return Mz[a]
    }
    const Nz = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Oz(a) {
        return Nz[a]
    }
    const Pz = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Qz(a) {
        return Pz[a]
    }
    const wz = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Fz = /[\x00\x22\x27\x3c\x3e]/g,
        Iz = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Hz = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Rz = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Sz = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Lz = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Tz =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Az = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const Uz = Math.floor;
    var Vz = /^xn--/,
        Wz = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Xz = {
        Vm: "Overflow: input needs wider integers to process",
        Rm: "Illegal input >= 0x80 (not a basic code point)",
        Bm: "Invalid input"
    };

    function Yz(a) {
        throw RangeError(Xz[a]);
    }

    function Zz(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(Wz, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function $z(a) {
        return Zz(a, b => {
            if (Vz.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const k = [],
                    l = b.length;
                let m = 0,
                    n = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && Yz("Illegal input >= 0x80 (not a basic code point)"), k.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < l;) {
                    e = m;
                    for (let p = 1, q = 36;; q += 36) {
                        d >= l && Yz("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > Uz((2147483647 - m) / p)) && Yz("Overflow: input needs wider integers to process");
                        m += f * p;
                        var h = q <= c ? 1 : q >= c + 26 ? 26 : q - c;
                        if (f < h) break;
                        f = 36 - h;
                        p > Uz(2147483647 / f) && Yz("Overflow: input needs wider integers to process");
                        p *= f
                    }
                    f = k.length + 1;
                    c = m - e;
                    h = 0;
                    c = e == 0 ? Uz(c / 700) : c >> 1;
                    for (c += Uz(c / f); c > 455; h += 36) c = Uz(c / 35);
                    c = Uz(h + 36 * c / (c + 38));
                    Uz(m / f) > 2147483647 - n && Yz("Overflow: input needs wider integers to process");
                    n += Uz(m / f);
                    m %= f;
                    k.splice(m++, 0, n)
                }
                b = String.fromCodePoint.apply(null, k)
            }
            return b
        })
    };
    const aA = new rb(tb, "558153351");

    function bA(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.C ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.B), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var cA = class {
        constructor(a, b, c, d, e, f, h, k, l, m, n, p = !1, q = !1, t = !1, w = "") {
            this.Na = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.M = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = h;
            this.G = k;
            this.g = l;
            this.H = p;
            this.C = m;
            this.F = n;
            this.I = q;
            this.A = t;
            this.i = w
        }
        J() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = kd `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = zc(a);
            var b = uc("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host)),
                c = $z(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            var d = this.j,
                e = this.M;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const h = this.I;
            var k = vz,
                l = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Rz, Oz) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            uz(b, mz) || uz(b, nz) ? b = String(b).replace(Sz, Qz) : b instanceof nc ? b = String(pc(b)).replace(Sz, Qz) : b instanceof cc ? b = String(fc(b).toString()).replace(Sz, Qz) : (b = String(b), b = Tz.test(b) ? b.replace(Sz, Qz) : "about:invalid#zSoyz");
            a = k(l + Ez(b) + '" alt="' + Ez(f) + ' icon"><p class="cse-header"><strong>' +
                tz(c) + '</strong></p><div class="gcse-search" data-gname="' + Ez(a) + '" data-adclient="' + Ez(d) + '" data-adchannel="' + Ez(e) + '" data-as_sitesearch="' + Ez(f) + '" data-personalizedAds="false"></div></div>' + (h ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = qz(a);
            this.C ? (a = this.Na, d = ic(new rb(tb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || aA,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = fc(d).toString()) : (d = new Map([
                    ["cx", this.l],
                    ["language", this.language]
                ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = jd(d), d = {}, e = `<script src="${$c(fc(e).toString())}"`,
                d.async && (e += " async"), d.ii && (e += ` custom-element="${$c(d.ii)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${$c(d.id)}"`), d.nonce && (e += ` nonce="${$c(d.nonce)}"`), d.type && (e += ` type="${$c(d.type)}"`), d.fi && (e += ` crossorigin="${$c(d.fi)}"`), d = Pc(e + ">\x3c/script>"), a = fd({
                    style: kd `margin:${0};`
                }, [a, d]), this.Na.srcdoc = Nc(a))
        }
    };

    function dA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new eA;
        return a.google_reactive_ads_global_state
    }
    class eA {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new fA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.i = [];
            this.g = null
        }
    }
    var fA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function gA(a, b) {
        return new hA(a, b)
    }

    function iA(a) {
        const b = jA(a);
        Ua(a.g.maxZIndexListeners, c => c(b))
    }

    function jA(a) {
        a = Ge(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function kA(a, b) {
        cb(a.g.maxZIndexListeners, c => c === b)
    }
    class lA {
        constructor(a) {
            this.g = dA(a).floatingAdsStacking
        }
    }

    function mA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            iA(b);
            a.g = d
        }
    }

    function nA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            iA(b);
            a.g = null
        }
    }
    class hA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function oA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? oA(b) || a : a
    }

    function pA(a, b) {
        return qA(b, a.document.body).flatMap(c => rA(c))
    }

    function qA(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function rA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function sA(a) {
        a.g !== null && (a.g.Ci.forEach(b => {
            b.inert = !1
        }), a.g.Bj ? .focus(), a.g = null)
    }

    function tA(a, b) {
        sA(a);
        const c = oA(a.win.document);
        b = pA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Bj: c,
            Ci: b
        }
    }
    var uA = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Yd() {
            sA(this)
        }
    };

    function vA(a) {
        return new wA(a, new Bo(a, a.document.body), new Bo(a, a.document.documentElement), new Bo(a, a.document.documentElement))
    }

    function xA(a) {
        Ao(a.j, "scroll-behavior", "auto");
        const b = yA(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        Ao(a.g, "position", "fixed");
        Ao(a.g, "top", `${-b.previousWindowScroll}px`);
        Ao(a.g, "width", "100%");
        Ao(a.g, "overflow-x", "hidden");
        Ao(a.g, "overflow-y", "hidden");
        Ao(a.i, "overflow-x", "hidden");
        Ao(a.i, "overflow-y", "hidden")
    }

    function zA(a) {
        zo(a.g);
        zo(a.i);
        const b = yA(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        zo(a.j)
    }
    var wA = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function yA(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function AA(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function BA(a, b) {
        return CA(`#${a}`, b)
    }

    function DA(a, b) {
        return CA(`.${a}`, b)
    }

    function CA(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function EA(a, b) {
        const c = a.document.createElement("div");
        v(c, rr(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Za: c,
            shadowRoot: a
        }
    };

    function FA(a, b) {
        b = EA(a, b);
        a.document.body.appendChild(b.Za);
        return b
    }

    function GA(a, b) {
        const c = new R(b.P);
        Ko(b, !0, () => void c.g(!0));
        Ko(b, !1, () => {
            a.setTimeout(() => {
                b.P || c.g(!1)
            }, 700)
        });
        return Fo(c)
    };

    function HA(a) {
        const b = a.ld;
        var c = a.jf,
            d = a.hd;
        const e = a.Xc,
            f = a.Rf,
            h = a.ie,
            k = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? k ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(h) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (k ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (k ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Ez(f) + '">';
        d = k ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Ez(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Ez(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Ez(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return vz(a)
    };

    function IA(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new JA(a, b);
        b.J();
        return b ? a.googNavStack = b : null
    }

    function KA(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function LA(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Kj({
                isFinal: d
            }))
        }
    }

    function MA(a, b) {
        b = kb(a.stack, b, (c, d) => c - d.qg.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class JA extends Q {
        constructor(a, b) {
            super();
            this.K = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = KA(this, c.state)) ? LA(this, MA(this, c.googNavStackStateId + .5)): LA(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Kj: c,
                        qg: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = MA(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].qg;
                        const e = KA(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    LA(this, c)
                }
            }
        }
        J() {
            this.K.addEventListener("popstate", this.l)
        }
        i() {
            this.K.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function NA(a) {
        return (a = IA(a)) ? new OA(a) : null
    }

    function PA(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.C && (a.g = null, Qo(a.j))
            })
        }
    }
    var OA = class extends Q {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Ro;
            this.g = null
        }
    };

    function QA(a, b, c) {
        var d = c.ze ? null : new uA(a);
        const e = gA(new lA(a), c.zIndex - 1);
        b = RA(a, b, c);
        d = new SA(a, b, d, c.tc, vA(a), e);
        d.J();
        (c.eg || c.eg === void 0) && TA(d);
        c.oc && ((a = NA(a)) ? UA(d, a, c.bf) : c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function TA(a) {
        a.A = b => {
            b.key === "Escape" && a.g.P && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function UA(a, b, c) {
        Ko(a.g, !0, () => {
            try {
                PA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Ko(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Oo(b.j).listen(() => void a.collapse());
        xo(a, b)
    }

    function VA(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function WA(a) {
        a.win.setTimeout(() => {
            a.g.P && VA(a).Ha.focus()
        }, 500)
    }

    function XA(a) {
        const {
            Ye: b,
            Yh: c
        } = VA(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function YA(a) {
        Ko(a.j, !1, () => {
            VA(a).Ha.classList.add("hd-hidden")
        })
    }
    var SA = class extends Q {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.l = c;
            this.tc = d;
            this.g = new R(!1);
            this.j = GA(a, this.g);
            Ko(this.j, !0, () => {
                xA(e);
                mA(f)
            });
            Ko(this.j, !1, () => {
                zA(e);
                nA(f)
            })
        }
        show({
            bg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            VA(this).Ha.classList.remove("hd-hidden");
            vo(this.win);
            VA(this).Ha.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (tA(this.l, VA(this).bb.Za), this.tc && WA(this));
            a && Ko(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            VA(this).Ha.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .Yd()
        }
        isVisible() {
            return this.j
        }
        J() {
            XA(this);
            YA(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Yd();
            super.i()
        }
    };

    function RA(a, b, c) {
        const d = FA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(re(new ce(a.document), qz(HA({
            ld: c.ld,
            jf: c.jf ? ? !0,
            hd: c.hd || !1,
            Xc: c.Xc,
            Rf: c.Rf || "",
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = BA("hd-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = BA("hd-content-container", e);
        c.appendChild(b);
        vo(a);
        return {
            Ha: f,
            Ye: BA("hd-modal-background", e),
            te: c,
            Yh: BA("hd-close-button", e),
            mo: BA("hd-back-arrow-button", e),
            bb: d
        }
    };

    function ZA(a) {
        const b = a.vj,
            c = a.Li;
        var d = a.ie;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            $A("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + $A("ved-fixed-handle") + "</div></div></div>";
        return vz(a)
    }

    function $A(a) {
        return vz('<div class="ved-handle" id="' + Ez(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function aB(a) {
        return ep(a.g).map(b => b ? bB(a, b) : 0)
    }

    function bB(a, b) {
        switch (a.direction) {
            case 0:
                return cB(-b.th);
            case 1:
                return cB(-b.sh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function dB(a) {
        return gp(a.g).map(b => bB(a, b))
    }
    var eB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function cB(a) {
        return a === 0 ? 0 : a
    };

    function Y(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function fB(a) {
        a.win.setTimeout(() => {
            a.g.P && Y(a).Ha.focus()
        }, 500)
    }

    function gB(a) {
        Y(a).Ha.classList.remove("ved-hidden");
        vo(a.win);
        const {
            pa: b,
            Ya: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || hB(a);
        Y(a).Ha.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (tA(a.j, Y(a).bb.Za), a.tc && fB(a))
    }

    function iB(a) {
        return GA(a.win, a.g)
    }

    function jB(a, b) {
        const c = new R(b());
        Oo(a.H).listen(() => void c.g(b()));
        return Fo(c)
    }

    function kB(a) {
        const {
            pa: b,
            Id: c
        } = Y(a);
        return jB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function lB(a) {
        const {
            pa: b,
            Id: c
        } = Y(a);
        return jB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function mB(a) {
        const {
            pa: b
        } = Y(a);
        return jB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function nB(a) {
        return Go(kB(a), mB(a))
    }

    function oB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return jB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function hB(a) {
        Y(a).Ya.classList.add("ved-snap-point-top");
        var b = pB(a, Y(a).Ya);
        Y(a).pa.scrollTop = b;
        qB(a)
    }

    function rB(a) {
        Io(kB(a), !0, () => {
            const {
                jg: b,
                Kc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Io(kB(a), !1, () => {
            const {
                jg: b,
                Kc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function sB(a) {
        const b = lp(a.win, Y(a).te);
        op(b).i(() => void tB(a));
        xo(a, b)
    }

    function uB(a) {
        Io(vB(a), !0, () => {
            Y(a).Kg.classList.remove("ved-hidden")
        });
        Io(vB(a), !1, () => {
            Y(a).Kg.classList.add("ved-hidden")
        })
    }

    function wB(a) {
        const b = () => void Qo(a.F),
            {
                Ye: c,
                Ya: d,
                Ki: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Ko(xB(a), !0, b)
    }

    function yB(a) {
        Ko(iB(a), !1, () => {
            hB(a);
            Y(a).Ha.classList.add("ved-hidden")
        })
    }

    function qB(a) {
        Jo(a.l, !1, () => void Qo(a.H))
    }

    function tB(a) {
        if (!a.l.P) {
            var {
                Yf: b,
                te: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(zB(a), d);
            a.l.g(!0);
            var e = AB(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function vB(a) {
        const {
            pa: b,
            Ya: c
        } = Y(a);
        return jB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function xB(a) {
        return Eo(a.A.map(Qp), BB(a))
    }

    function BB(a) {
        return jB(a, () => Y(a).pa.scrollTop === 0)
    }

    function pB(a, b) {
        ({
            Kc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function CB(a, b) {
        a.A.g(!0);
        const {
            Kc: c,
            pa: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void DB(a, b)
    }

    function DB(a, b) {
        const {
            Kc: c,
            pa: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).pa.scrollTop = b;
        qB(a);
        a.A.g(!1)
    }

    function AB(a) {
        const b = Y(a).pa.scrollTop;
        CB(a, b);
        return () => void DB(a, b)
    }

    function zB(a) {
        const {
            pa: b,
            Id: c,
            Yf: d,
            Ya: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var h = d.getBoundingClientRect();
        const k = e.getBoundingClientRect();
        h = h.top - f.top;
        return Math.max(a.height - k.height - h, Math.min(a.height, a.bottom - f.top) - h)
    }
    var EB = class extends Q {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.I = c;
            this.j = d;
            this.tc = e;
            this.F = new Ro;
            this.H = new Ro;
            this.g = new R(!1);
            this.A = new R(!1);
            this.l = new R(!1)
        }
        J() {
            hB(this);
            rB(this);
            sB(this);
            uB(this);
            wB(this);
            yB(this);
            Y(this).pa.addEventListener("scroll", () => void qB(this))
        }
        i() {
            const a = this.B.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Yd();
            super.i()
        }
    };

    function FB(a, b, c) {
        const d = FA(a, c.Ae),
            e = d.shadowRoot;
        e.appendChild(re(new ce(a.document), qz(ZA({
            vj: c.Og * 100,
            Li: c.kg * 100,
            zIndex: c.zIndex,
            ie: .5,
            Ma: c.Ma || !1
        }))));
        const f = BA("ved-drawer-container", e);
        c.Fe ? .i(h => {
            f.setAttribute("aria-label", h)
        });
        c = BA("ved-content-container", e);
        c.appendChild(b);
        vo(a);
        return {
            Ha: f,
            Ye: BA("ved-modal-background", e),
            kh: BA("ved-ui-revealer", e),
            pa: BA("ved-scroller", e),
            Kc: BA("ved-scrolled-stack", e),
            Ki: BA("ved-fully-closed-anchor", e),
            Ya: BA("ved-partially-extended-anchor", e),
            Yf: BA("ved-content-sizer",
                e),
            te: c,
            wo: BA("ved-moving-handle", e),
            Id: BA("ved-moving-handle-holder", e),
            Ji: BA("ved-fixed-handle", e),
            jg: BA("ved-fixed-handle-holder", e),
            Kg: BA("ved-over-scroll-block", e),
            bb: d
        }
    };

    function GB(a, b, c) {
        var d = gA(new lA(a), c.zIndex - 1);
        b = FB(a, b, c);
        const e = c.ze ? null : new uA(a);
        var f = b.Ji;
        f = new hp(new Zo(a, f), new Wo(f));
        var h = f.g;
        h.A.addEventListener("mousedown", h.G);
        h.l.addEventListener("mouseup", h.C);
        h.l.addEventListener("mousemove", h.B, {
            passive: !1
        });
        h = f.i;
        h.i.addEventListener("touchstart", h.B);
        h.i.addEventListener("touchend", h.A);
        h.i.addEventListener("touchmove", h.C, {
            passive: !1
        });
        b = new EB(a, b, new eB(f), e, c.tc);
        b.J();
        d = new HB(a, b, vA(a), d);
        xo(d, b);
        d.J();
        c.oc && ((a = NA(a)) ? IB(d, a, c.bf) :
            c.bf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function IB(a, b, c) {
        Ko(a.g.g, !0, () => {
            try {
                PA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Ko(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Oo(b.j).listen(() => void a.collapse());
        xo(a, b)
    }

    function JB(a) {
        Ko(Eo(nB(a.g), oB(a.g)), !0, () => {
            Y(a.g).Ya.classList.remove("ved-snap-point-top")
        });
        Io(lB(a.g), !0, () => {
            Y(a.g).pa.classList.add("ved-no-snap")
        });
        Io(lB(a.g), !1, () => {
            Y(a.g).pa.classList.remove("ved-no-snap")
        });
        Ko(lB(a.g), !1, () => {
            var b = a.g;
            var c = Y(b).Id;
            c = CB(b, pB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function KB(a) {
        const b = a.g.I;
        aB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    kh: d
                } = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                kh: c
            } = Y(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        dB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var HB = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Ko(iB(b), !0, () => {
                xA(c);
                mA(d)
            });
            Ko(iB(b), !1, () => {
                zA(c);
                nA(d)
            })
        }
        show({
            bg: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            gB(this.g);
            a && Ko(iB(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Y(a).Ha.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .Yd()
        }
        isVisible() {
            return iB(this.g)
        }
        J() {
            Oo(this.g.F).listen(() => {
                this.collapse()
            });
            JB(this);
            KB(this);
            vo(this.win)
        }
    };

    function LB(a, b) {
        return Ue() === 2 ? GB(a.win, b, {
            Og: .95,
            kg: .95,
            zIndex: 2147483645,
            oc: !0,
            Ma: !0
        }) : QA(a.win, b, {
            ld: "min(65vw, 768px)",
            Xc: "",
            hd: !1,
            zIndex: 2147483645,
            oc: !0,
            jf: !1,
            Ma: !0
        })
    }

    function MB(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.T.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.H,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.B,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Bb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.I
            };
        a.ua && (c.adLoadedCallback = a.Ka.bind(a));
        a.j && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function NB(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var OB = class extends Q {
        constructor(a, b, c, d, e, f, h, k, l, m = () => {}) {
            super();
            this.win = a;
            this.T = b;
            this.M = e;
            this.B = f;
            this.l = k;
            this.Fa = l;
            this.ib = m;
            this.language = d ? .g() || "en";
            this.hb = d ? .j() || "Search results from ${website}";
            this.ua = U(ls);
            this.H = c.replace("ca", "partner");
            this.ca = new ce(a.document);
            this.g = qe(this.ca, "IFRAME");
            this.I = h.i ? h.g : "9d449ff4a772956c6";
            this.A = (this.j = U(rs)) ? P(Dn).g().concat(this.B) : this.B;
            this.F = new cA(this.g, this.I, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.hb,
                this.A, this.l, this.Fa, this.j);
            this.ia = LB(this, this.g);
            xo(this, this.ia)
        }
        J() {
            this.T.length !== 0 && (this.ua || Qu(1075, () => {
                this.F.J()
            }, this.win), Qu(1076, () => {
                const a = qe(this.ca, "SCRIPT");
                xd(a, id `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), MB(this), mr(this.M, {
                sts: "ok"
            }), this.l && NB(this))
        }
        Ka(a, b) {
            b ? Qu(1075, () => {
                this.F.J()
            }, this.win) : (this.ib(), or(this.M, "pfns"))
        }
        Bb(a, b) {
            bA(this.F, a, b);
            (() => {
                if (!this.l) {
                    const c = new ResizeObserver(async e => {
                            this.g.height =
                                "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.ia.show()
            })()
        }
    };
    var PB = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function QB(a) {
        const b = ov(a.l.ha),
            c = a.C.Ja(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            zi: b,
            ei: c
        }
    }
    class RB {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.C = c;
            this.A = d || null;
            this.g = null;
            this.j = new R(null)
        }
        J() {
            const a = QB(this);
            this.g = a.zi;
            Pv(this.l, this.g);
            this.j.g(a.ei)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };
    async function SB(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    TB(a)
                } catch (c) {
                    or(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function TB(a) {
        if ((!a.gd || !UB(a.config, a.aa, a.i)) && VB(a.g ? .j(), a.i)) {
            var b = a.g ? .l();
            b = fz(a.win, a.config, a.aa, a.i, {
                Uj: !!b ? .A(),
                gd: a.gd,
                xo: !!b ? .g(),
                Tj: !!b ? .C()
            });
            b = WB(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = XB(a.g),
                h = !!a.g ? .C(),
                k = String(a.g ? .B());
            if (!z(a.config, xq, 25) ? .g()) {
                var l = () => {
                    d.forEach(m => {
                        m.i()
                    })
                };
                Qu(1074, () => {
                    (new OB(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, h, k, l)).J()
                }, a.win)
            }
        }
    }
    var YB = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.gd = f;
            this.i = new pr(a, b, z(this.config, Eq, 28) || new Eq);
            this.g = z(this.config, Eq, 28)
        }
    };

    function UB(a, b, c) {
        a = z(a, Eq, 28) ? .g() ? .g() || 0;
        const d = P(cu).g(qs.g, qs.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Nh(b, 2, Ag, y()) : []).length === 0 ? (or(c, "pfeu"), !0) : !1
    }

    function VB(a, b) {
        const c = P(cu).g(os.g, os.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (or(b, "pflna"), !1) : !0
    }

    function WB(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                h = b.document.createElement("div");
            h.setAttribute("id", f);
            d = new RB(b, d, new ur(h), "autors-widget");
            d.J();
            c[f] = d
        }
        return c
    }

    function XB(a) {
        const b = a ? .G() || !1;
        a = a ? .A() || "";
        return new PB(b, a)
    };
    var ZB = (a, b) => {
        const c = [];
        z(a, Oq, 18) && c.push(2);
        b.aa && c.push(0);
        z(a, Eq, 28) && qi(z(a, Eq, 28), 1) == 1 && c.push(1);
        z(a, Cq, 31) && qi(z(a, Cq, 31), 1) == 1 && c.push(5);
        z(a, zq, 32) && c.push(6);
        z(a, Rq, 34) && K(z(a, Rq, 34), 3) && c.push(7);
        return c
    };

    function $B(a, b) {
        const c = qe(be(a), "IMG");
        aC(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        v(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: b == null ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function bC(a, b) {
        const c = b.document.createElement("button");
        aC(b, c);
        v(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function cC(a, b, c) {
        const d = qe(be(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        aC(b, d);
        v(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function dC(a) {
        const b = a.document.createElement("ins");
        aC(a, b);
        v(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class eC {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            const e = $B(a, d),
                f = $B(a),
                h = bC(this, a),
                k = cC(this, a, c);
            a = dC(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(h);
            a.appendChild(k);
            this.g.listen(l => {
                v(e, {
                    display: l ? "none" : "inline"
                });
                v(f, {
                    display: l ? "inline" : "none"
                });
                l ? (v(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(k, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (v(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(k, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        lg() {
            return 40
        }
        Ig() {
            this.g.g(!1);
            return 0
        }
        Jg() {
            this.g.g(!0)
        }
    }

    function aC(a, b) {
        v(b, rr(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var fC = a => a.googlefc = a.googlefc || {},
        gC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        },
        hC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        iC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Fq;
                b = Gi(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = Gi(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = Gi(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function jC(a, b) {
        const c = b.document.createElement("button");
        kC(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        v(c, b);
        c.addEventListener("click", d => {
            a.C();
            d.stopPropagation()
        });
        return c
    }

    function lC(a, b, c, d) {
        const e = b.document.createElement("div");
        v(e, rr(b));
        v(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        v(f, rr(b));
        v(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = h => {
            h.matches ? (v(e, {
                    "flex-direction": "row"
                }), a.g && v(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), v(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                v(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (v(e, {
                border: "0",
                "flex-direction": "column"
            }), v(f, {
                "margin-left": "0",
                "text-align": "center"
            }), v(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && v(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function kC(a, b, c) {
        v(c, rr(b));
        v(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.B,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class mC {
        constructor(a, b, c, d, e, f = null, h = null, k = null) {
            this.A = a;
            this.C = b;
            this.G = c;
            this.i = d;
            this.B = e;
            this.l = f;
            this.g = h;
            this.j = k
        }
        Ja(a) {
            const b = a.document.createElement("div");
            kC(this, a, b);
            v(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = qe(be(a), "IMG");
                c.src = this.l;
                kC(this, a, c);
                v(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            kC(this, a, c);
            v(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = jC(this, a);
            c.appendChild(b);
            return this.j ? lC(this, a, c, this.j) : c
        }
    };

    function nC(a, b) {
        b = b.filter(c => z(c, bq, 4) ? .g() === 5 && ui(c, 8) === 1);
        b = fv(b, a);
        a = Rv(b, a);
        a.sort((c, d) => d.la.g - c.la.g);
        return a[0] || null
    };

    function oC({
        Wd: a,
        dd: b,
        Jd: c,
        Xd: d,
        ed: e,
        Kd: f
    }) {
        const h = [];
        for (let p = 0; p < f; p++)
            for (let q = 0; q < c; q++) {
                var k = q,
                    l = c - 1,
                    m = p,
                    n = f - 1;
                h.push({
                    x: a + (l === 0 ? 0 : k / l) * (b - a),
                    y: d + (n === 0 ? 0 : m / n) * (e - d)
                })
            }
        return h
    }

    function pC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function qC(a, b) {
        var c = oC({
            Wd: b.left,
            dd: b.right,
            Jd: 10,
            Xd: b.top,
            ed: b.bottom,
            Kd: 10
        });
        b = new Set;
        for (const d of c)(c = rC(a, d)) && b.add(c);
        return b
    }

    function sC(a, b) {
        for (const c of b)
            if (b = rC(a, c)) return b;
        return null
    }

    function tC(a, b, c) {
        if (Yj(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || bk(b).width <= 1 && bk(b).height <= 1 || a.g.Ai && !a.g.Ai(b) ? !0 : !1;
        a.g.ig && a.g.ig(b, c, d);
        return d ? null : b
    }

    function rC(a, b) {
        var c = pC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = tC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = tC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var uC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };

    function vC({
        K: a,
        pj: b,
        ij: c,
        Xh: d,
        Fo: e,
        Go: f,
        ta: h
    }) {
        let k = 0;
        try {
            k |= Tn(a, f);
            const n = Math.min(a.screen.width || 0, a.screen.height || 0);
            k |= n ? n < 320 ? 8192 : 0 : 2048;
            k |= a.navigator && wC(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = k;
                const p = a.innerHeight;
                var l = lf(a) * p >= b;
                var m = f | (l ? 0 : 1024)
            } else m = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
            k = m;
            k |= Wn(a, c, !0, e)
        } catch {
            k |= 32
        }
        switch (d) {
            case 2:
                xC(a, h) && (k |= 16777216);
                break;
            case 1:
                yC(a, h) && (k |= 16777216)
        }
        return k
    }

    function wC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var xC = (a, b = null) => {
            const c = oC({
                Wd: 0,
                dd: a.innerWidth,
                Jd: 3,
                Xd: 0,
                ed: Math.min(Math.round(a.innerWidth / 320 * 50), zC) + 15,
                Kd: 3
            });
            return sC(AC(a, b), c) != null
        },
        yC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), zC) + 15,
                f = oC({
                    Wd: 0,
                    dd: c,
                    Jd: 3,
                    Xd: d - e,
                    ed: d,
                    Kd: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return sC(AC(a, b), f) != null
        };

    function BC(a, b) {
        var c = U(Dr);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let h = f;
            for (; h > b;) {
                var d = oC({
                    Wd: 0,
                    dd: e,
                    Jd: 9,
                    Xd: h - b,
                    ed: h,
                    Kd: 9
                });
                d = sC(AC(a), d);
                if (!d) {
                    a = f - h;
                    break a
                }
                h = c ? Math.min(d.getBoundingClientRect().top - 1, h - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function AC(a, b = null) {
        return new uC(a, {
            ig: CC(a, b)
        })
    }

    function CC(a, b = null) {
        if (b) return (c, d, e) => {
            Mk(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const zC = 90 * 1.38;

    function DC(a) {
        a = new EC(a);
        a.J();
        return a
    }

    function FC(a) {
        if (!AA(a.win)) {
            if (a.j.P) {
                const b = co(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = Xn(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void GC(a), 200)
        }
    }

    function GC(a) {
        if (!AA(a.win)) {
            var b = Xn(a.win);
            a.g && a.g > b && (a.g = b);
            b = co(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var EC = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void FC(this)
        }
        J() {
            this.win.addEventListener("scroll", this.A);
            this.g = Xn(this.win);
            GC(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function HC(a) {
        a.g || (a.g = IC(a));
        v(a.g, {
            display: "block"
        });
        a.A.Jg();
        a.j.g(a.C)
    }

    function JC(a) {
        const b = a.A.Ig();
        switch (b) {
            case 0:
                a.j.g(a.C);
                break;
            case 1:
                a.g && (v(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function IC(a) {
        var b = BC(a.l, a.A.lg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        v(c, rr(a.l));
        v(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.C = a.A.Ja(a.l, () => a.i(), () => {
            a.G.dispose();
            JC(a)
        }, () => {
            a.G.dispose();
            HC(a)
        });
        c.appendChild(a.C);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class KC {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.C = null;
            this.j = new R(null);
            this.F = c || null;
            this.G = DC(a);
            this.g = null
        }
        J() {
            const a = Fo(this.G.j);
            Io(a, !0, () => void HC(this));
            Ko(a, !1, () => void JC(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.dispose();
            this.j.g(null)
        }
        B() {
            return this.j
        }
    };

    function LC(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function MC(a) {
        a.j = new KC(a.C, a.I, a.F);
        a.j.J();
        Lo(a.A, a.j.B());
        a.G.g(2)
    }
    class NC {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.H = b;
            this.M = c;
            this.I = d;
            this.F = e;
            this.G = new R(0);
            this.A = new R(null);
            this.j = this.l = this.g = null
        }
        J() {
            this.H ? (this.l = new RB(this.C, this.H, this.M, this.F), this.l.J(), Lo(this.A, this.l.B()), this.G.g(1), this.g == null && (this.g = new yp(this.C), this.g.J(2E3)), wp(this.g, () => {
                LC(this);
                MC(this)
            })) : MC(this)
        }
        i() {
            LC(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        B() {
            return this.A
        }
    };
    var OC = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.Ke = c
        }
    };

    function PC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function QC(a, b, c) {
        var d = Vn(a);
        d = new OC(b.Tb.Fg(b.mb), b.Ab + 2 * b.mb, Math.min(d, b.Cd) - b.Tb.nd() + 2 * b.mb);
        d = d.position.Zf(a, d.Ab, d.Ke);
        var e = Un(a),
            f = Vn(a);
        c = RC(a, new Ej(od(d.top, 0, f - 1), od(d.right, 0, e - 1), od(d.bottom, 0, f - 1), od(d.left, 0, e - 1)), c);
        f = SC(c);
        let h = d.top;
        e = [];
        for (let k = 0; k < f.length; k++) f[k].start > h && e.push(new PC(h, f[k].start)), h = f[k].end;
        h < d.bottom && e.push(new PC(h, d.bottom));
        a = Vn(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new PC(a - e[f].end, a - e[f].start));
        a: {
            for (const k of d)
                if (a = k.start + b.mb, a >
                    b.Tb.nd() + b.Ue ? a = null : (d = Math.min(k.end - b.mb, b.Cd) - a, a = d < b.Xe ? null : {
                        position: b.Tb.rh(a),
                        Dc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            me: b,
            lo: c
        }
    }

    function RC(a, b, c) {
        const d = qC(new uC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function SC(a) {
        return Array.from(a).map(TC).sort((b, c) => b.start - c.start)
    }

    function TC(a) {
        a = a.getBoundingClientRect();
        return new PC(a.top, a.bottom)
    };

    function UC({
        ga: a,
        sa: b
    }) {
        return new VC(a, b)
    }
    var VC = class {
        constructor(a, b) {
            this.ga = a;
            this.sa = b
        }
        Fg(a) {
            return new VC(this.ga - a, this.sa - a)
        }
        Zf(a, b, c) {
            a = Vn(a) - this.ga - c;
            return new Ej(a, this.sa + b, a + c, this.sa)
        }
        Of(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.sa}px`;
            a.right = ""
        }
        mg() {
            return 0
        }
        nd() {
            return this.ga
        }
        rh(a) {
            return new VC(a, this.sa)
        }
    };

    function WC({
        ga: a,
        Ca: b
    }) {
        return new XC(a, b)
    }
    var XC = class {
        constructor(a, b) {
            this.ga = a;
            this.Ca = b
        }
        Fg(a) {
            return new XC(this.ga - a, this.Ca - a)
        }
        Zf(a, b, c) {
            var d = Un(a);
            a = Vn(a) - this.ga - c;
            d = d - this.Ca - b;
            return new Ej(a, d + b, a + c, d)
        }
        Of(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ca}px`;
            a.left = ""
        }
        mg() {
            return 1
        }
        nd() {
            return this.ga
        }
        rh(a) {
            return new XC(a, this.Ca)
        }
    };

    function YC(a) {
        const b = a.Ei,
            c = a.ai,
            d = a.Th,
            e = a.Oj,
            f = a.Uh;
        a = a.Sh;
        return vz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            X(16) + "px; max-width: calc(90vw - " + X(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            X(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            Ez(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + Ez(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function ZC(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.ji;
        return vz('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof pz ? a.Ja() : a) ? "<style>@scope {" + X(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + Ez(c) + '" style="background-color: ' + Ez(X(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + Ez(X(e)) + '" aria-hidden="true">' + tz(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const $C = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function aD(a, b) {
        a = new bD(a, b, cD(a, b));
        a.J();
        return a
    }

    function dD() {
        ({
            hc: a
        } = {
            hc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function eD(a, b, c) {
        fD(a) === 0 && b.classList.remove("ft-collapsed");
        gD(b, c);
        vo(a.win);
        b.classList.remove("ft-collapsed");
        hD(a);
        return () => void iD(a, b, c)
    }

    function jD(a) {
        kD(a.g.ka.Fc).length === 0 ? (a.l.P ? .Ej(), a.l.g(null), a.g.ka.Je.g(!1), a.g.ka.wg.g(!1), a.g.ka.Re.g(!1)) : (a.g.ka.Je.g(!0), lD(a))
    }

    function mD(a, {
        Ch: b = 0,
        ko: c = 0
    }) {
        b = Math.max(kD(a.g.Eb).length + b, 0);
        c = Math.max(kD(a.g.lb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.hc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function fD(a) {
        const b = a.g.lb;
        return kD(a.g.Eb).length + kD(b).length
    }

    function hD(a) {
        const b = a.g.lb,
            c = a.g.separator;
        kD(a.g.Eb).length > 0 && kD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        fD(a) >= a.j.hc ? a.g.vg.g(!0) : a.g.vg.g(!1);
        fD(a) > 1 ? a.g.pg.g(!0) : a.g.pg.g(!1);
        fD(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        nD(a);
        oD(a)
    }

    function iD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), hD(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function nD(a) {
        const b = kD(a.g.Eb).concat(kD(a.g.lb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        fD(a) >= a.j.hc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function oD(a) {
        const b = kD(a.g.Eb).concat(kD(a.g.lb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function pD(a) {
        io(a.g.ka.Fc.children, b => {
            const c = a.g.ka.Ic;
            iD(a, b, a.g.ka.Fc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        jD(a)
    }

    function lD(a) {
        if (!a.l.P) {
            var b = qD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: L(a.j.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ka.wg.g(!a.g.ka.isVisible.P);
                    for (const [, c] of a.g.ka.Ic) c.zg = !0;
                    a.g.ka.Re.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Sc.classList.add("ft-reg-button");
            eD(a, b.Sc, a.g.lb);
            Lo(b.bj, a.g.ka.isVisible);
            a.l.g({
                po: b,
                Ej: () => void iD(a, b.Sc, a.g.lb)
            })
        }
    }

    function rD(a) {
        var b = a.g.ka.Re,
            c = b.g;
        a: {
            for ([, d] of a.g.ka.Ic)
                if (a = d, a.showUnlessUserInControl && !a.zg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function sD(a) {
        a.g.ka.Zh.listen(() => {
            pD(a)
        })
    }
    var bD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new R(null);
            this.F = new R(!1)
        }
        addButton(a) {
            a = qD(this.win, a);
            return eD(this, a.Sc, this.g.Eb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ka.Fc,
                c = tD(this.win, a);
            gD(c.Ve, b);
            this.g.ka.Ic.set(c.Ve, c);
            jD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    rD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    rD(this)
                },
                isDismissed: No(c.isDismissed),
                removeCallback: () => {
                    var d = c.Ve;
                    const e = this.g.ka.Fc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.ka.Ic.delete(d);
                    jD(this)
                }
            }
        }
        H() {
            return Fo(this.l.map(a => a != null))
        }
        B() {
            return Fo(this.F)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.bb.Za;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        J() {
            vp(this.win, $C);
            Lo(this.g.Wj, this.j.Ec);
            this.win.document.body.appendChild(this.g.bb.Za);
            sD(this)
        }
    };

    function cD(a, b) {
        const c = EA(a),
            d = c.shadowRoot;
        d.appendChild(re(new ce(a.document), qz(YC({
            Ei: L(b.Oa, 1),
            ai: L(b.Oa, 3),
            Th: 50,
            Oj: 11,
            Uh: 10,
            Sh: 5
        }))));
        const e = DA("ft-container", d),
            f = DA("ft-expand-toggle", d),
            h = DA("ft-expand-toggle-container", d),
            k = new R(null);
        k.i(q => {
            e.style.zIndex = String(q ? ? 2147483647)
        });
        const l = new R(!0);
        Io(l, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Io(l, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                l.g(!l.P)
            });
        const m = new R(!1);
        Io(m, !0, () => {
            h.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Io(m, !1, () => {
            h.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            l.g(!0)
        });
        const n = new R(!1);
        Io(n, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Io(n, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(q => {
            if (q) {
                q.Of(e.style);
                q = q.mg();
                switch (q) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${q}`);
                }
                vo(a)
            }
        });
        const p = new R(!1);
        b = Eo(uD(a, d), p, b.position.map(q => q !== null));
        Io(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Io(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = vD(a, DA("ft-reg-bubble", d));
        return {
            container: e,
            Eb: DA("ft-button-holder", d),
            lb: DA("ft-bottom-button-holder", d),
            separator: DA("ft-separator", d),
            bb: c,
            Wj: k,
            uo: l,
            vg: m,
            pg: n,
            isVisible: p,
            ka: b
        }
    }

    function vD(a, b) {
        const c = new R(!1),
            d = new R(!1),
            e = Go(c, d);
        Io(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Io(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new R(!1);
        Io(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Io(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const h = DA("ft-reg-bubble-close", b),
            k = new Ro;
        h.addEventListener("click", () => {
            Qo(k)
        });
        const l = DA("ft-reg-message-holder", b);
        op(lp(a, l)).i(() => {
            b.style.height = `${l.offsetHeight}px`
        });
        return {
            Fc: l,
            wg: c,
            Re: d,
            isVisible: e,
            Je: f,
            Ic: new Map,
            Zh: Oo(k)
        }
    }

    function qD(a, b) {
        const c = re(new ce(a.document), qz(ZC({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            ji: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = od(Math.round(b.cornerNumber), 0, 99);
            DA("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && CA("BUTTON", c).addEventListener("click", b.onClick);
        a = new R(!1);
        Io(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Io(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Sc: c,
            bj: a
        }
    }

    function tD(a, b) {
        a = new ce(a.document);
        var c = vz('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = re(a, qz(c));
        c = DA("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = DA("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Ve: a,
            showUnlessUserInControl: !1,
            zg: !1,
            isDismissed: new R(!1)
        }
    }

    function gD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function kD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function uD(a, b) {
        const c = new R(!1),
            d = DA("ft-symbol-font-load-test", b);
        b = DA("ft-symbol-reference", d);
        const e = DA("ft-text-reference", d),
            f = lp(a, b);
        Jo(op(f).map(h => h.width > 0 && h.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function wD(a) {
        const b = new Ro,
            c = bp(a, 2500, () => void Qo(b));
        return new xD(a, () => void yD(a, () => void c()), Oo(b))
    }

    function zD(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        yo(a, () => void b.disconnect())
    }

    function AD(a) {
        a.win.addEventListener("resize", a.g);
        yo(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var xD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function yD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function BD(a) {
        return a.g[a.g.length - 1]
    }
    var DD = class {
        constructor() {
            this.j = CD;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = kb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            cb(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function ED(a) {
        var b = a.Dc.P;
        let c;
        for (; a.j.hi() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            FD(d, e);
            d.g.add(e)
        }
        for (;
            (d = BD(a.g)) && a.j.Qi() <= b;) GD(a, d);
        for (;
            (d = BD(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, FD(b, e), b.g.add(e), GD(a, d)
    }

    function GD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.yf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function FD(a, b) {
        b.yf && b.yf();
        b.yf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var HD = class {
        constructor(a, b) {
            this.Dc = a;
            this.j = b;
            this.g = new DD;
            this.i = new DD;
            this.l = 0;
            this.Dc.listen(() => void ED(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Ef: this.l++,
                isInToolbar: new R(!1)
            };
            this.g.add(b);
            ED(this);
            return {
                isInToolbar: No(Fo(b.isInToolbar)),
                removeCallback: () => {
                    FD(this, b);
                    this.g.delete(b);
                    ED(this)
                }
            }
        }
    };

    function CD(a, b) {
        return a.priority === b.priority ? b.Ef - a.Ef : a.priority - b.priority
    };

    function ID(a) {
        if (!a.g) {
            const b = DC(a.win);
            a.g = Fo(b.j);
            xo(a, b)
        }
        return a.g
    }

    function JD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || KD(a, d, c);
        Jo(c, !0, () => {
            d.removeCallback()
        })
    }

    function KD(a, b, c) {
        a = ID(a);
        const d = Io(a, !0, () => void b.showUnlessUserInControl()),
            e = Io(a, !1, () => void b.hideUnlessUserInControl());
        Io(Co(b.isDismissed), !0, () => {
            d();
            e()
        });
        Jo(c, !0, () => {
            d();
            e()
        })
    }
    var LD = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new R(!1),
                c = Jo(ID(this), !0, () => {
                    JD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function MD(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new ND(a, b));
        return a.googFloatingToolbarManager
    }

    function OD(a) {
        a.g || (a.g = PD(a.win, a.Hb, a.Ec), xo(a, a.g.Ib), xo(a, a.g.Vg), QD(a), RD(a, a.g.Ib));
        return a.g
    }

    function SD(a) {
        var b = [];
        a.g ? .Ib ? .B().A() ? (b.push(() => TD(a)), b.push(() => UD(a))) : (b.push(() => UD(a)), b.push(() => TD(a)));
        a.g ? .Ib ? .H() ? .A() && b.push(() => {
            const c = Vn(a.win);
            return {
                position: UC({
                    ga: Math.floor(c / 3),
                    sa: 10
                }),
                Dc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function QD(a) {
        a.Ec.P === null && a.g ? .position.g(SD(a))
    }

    function RD(a, b) {
        const c = wD(a.win);
        c.j || (zD(c), AD(c), c.j = !0);
        c.l.listen(() => void QD(a));
        xo(a, c);
        b.H().listen(() => void QD(a));
        b.B().listen(() => void QD(a));
        a.Ec.listen(() => void QD(a))
    }

    function TD(a) {
        var b = a.win;
        const c = Vn(a.win);
        return QC(b, {
            Tb: WC({
                ga: 50,
                Ca: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: dD(),
            Cd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }

    function UD(a) {
        var b = a.win;
        const c = Vn(a.win);
        return QC(b, {
            Tb: UC({
                ga: 50,
                sa: 10
            }),
            Ue: Math.floor(c / 3),
            Ab: 60,
            Xe: dD(),
            Cd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).me
    }
    class ND extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.Hb = b;
            this.g = null;
            this.Ec = VD(this.win, this)
        }
        addButton(a) {
            return OD(this).qj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return OD(this).Vg.addRegulatoryMessage(a)
        }
    }

    function PD(a, b, c) {
        const d = new R(null),
            e = aD(a, {
                hc: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Ec: c
            });
        b = new HD(d.map(f => f ? .Dc || 0), {
            addButton: f => e.addButton(f),
            hi: () => mD(e, {}),
            Qi: () => mD(e, {
                Ch: 1
            })
        });
        a = new LD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Ib: e,
            position: d,
            qj: b,
            Vg: a
        }
    }

    function VD(a, b) {
        const c = new lA(a),
            d = new R(null),
            e = f => void d.g(f);
        yo(b, () => {
            kA(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(jA(c));
        return d
    };
    const WD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function XD(a, b, c, d, e) {
        a = new YD(a, b, c, d, e);
        if (a.l) {
            vp(a.win, WD);
            var f = a.win;
            b = a.message;
            c = EA(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new ce(f.document);
            var h = vz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                re(f, qz(h)));
            d = DA("ipr-container", e);
            e = DA("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = DA("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Za;
            Pv(a.l, a.g);
            a.j && a.j(dm(1));
            ZD(a)
        } else $D(a);
        return a
    }

    function ZD(a) {
        const b = new yp(a.win);
        b.J(2E3);
        xo(a, b);
        wp(b, () => {
            aE(a);
            $D(a);
            b.dispose()
        })
    }

    function $D(a) {
        const b = MD(a.win, a.Hb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        yo(a, () => void b.removeCallback());
        a.j && a.j(dm(2))
    }

    function aE(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var YD = class extends Q {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Hb = d;
            this.j = e;
            this.g = null
        }
        i() {
            aE(this);
            super.i()
        }
    };
    var dE = (a, b, c, d, e) => U(Hr) ? bE(a, b, d, e) : cE(a, b, c, d, e);

    function cE(a, b, c, d, e) {
        const f = new NC(a, nC(a, e), new mC(b, d, "#FFF", "#4A4A4A", "normal"), new eC(b, c, d), "google-dns-link-placeholder");
        f.J();
        return () => f.i()
    }

    function bE(a, b, c, d) {
        const e = XD(a, nC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, eE(a));
        return () => e.dispose()
    }

    function eE(a) {
        if (a = iC(a)) return a;
        W.ba(1234, Error("No messages"), void 0, void 0);
        return (new Fq).i()
    };

    function fE(a, b) {
        b && (a.i = dE(a.g, b.localizedDnsText, b.localizedDnsCollapseText, () => gE(a, b), a.l))
    }

    function hE(a) {
        var b = gC(a.g);
        if (iE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            c != null && b != null && (a.i = dE(a.g, c, b, () => jE(a), a.l))
        }
    }

    function kE(a) {
        const b = fC(a.g);
        b.callbackQueue = b.callbackQueue || [];
        U(Rr) ? (hC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => fE(a, c)
        })) : (gC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => hE(a)
        }))
    }

    function jE(a) {
        mA(a.j);
        gC(a.g).openConfirmationDialog(b => lE(a, b))
    }

    function gE(a, b) {
        mA(a.j);
        b.openConfirmationDialog(c => lE(a, c))
    }

    function lE(a, b) {
        b && a.i && (a.i(), a.i = null);
        nA(a.j)
    }
    class mE {
        constructor(a, b, c) {
            this.g = a;
            this.j = gA(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function iE(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function nE(a) {
        const b = a.document.createElement("ins");
        oE(a, b);
        v(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function pE(a, b, c, d) {
        const e = qe(be(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        oE(a, e);
        v(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function qE(a, b) {
        const c = b.document.createElement("span");
        oE(b, c);
        v(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function rE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        v(c, rr(b));
        v(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function sE(a) {
        const b = a.document.createElement("div");
        v(b, rr(a));
        v(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class tE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            c = nE(a);
            const e = pE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = pE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                h = qE(this, a),
                k = pE(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            v(k, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(h);
            c.appendChild(k);
            const l = rE(this, a);
            a = sE(a);
            a.appendChild(c);
            a.appendChild(l);
            this.g.listen(m => {
                v(e, {
                    display: m ? "none" : "inline"
                });
                v(f, {
                    display: m ? "inline" : "none"
                });
                m ? (v(h, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(k, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), v(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (v(h, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(k, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), v(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        lg() {
            return 71
        }
        Ig() {
            this.g.g(!1);
            return 0
        }
        Jg() {
            this.g.g(!0)
        }
    }

    function oE(a, b) {
        v(b, rr(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function uE(a) {
        vE(a.j, b => {
                var c = a.i,
                    d = b.Lj,
                    e = b.bi,
                    f = b.Ih;
                b = b.showRevocationMessage;
                var h = a.l;
                U(Jr) ? (e = nC(c, h), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = iC(c), f || (W.ba(1233, Error("No messages"), void 0, void 0), f = (new Fq).i()), XD(c, e, d, f)) : (new NC(c, nC(c, h), new mC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new tE(d, e, f, b), "google-revocation-link-placeholder")).J()
            },
            () => {
                nA(a.g);
                wE(a)
            })
    }

    function xE(a) {
        mA(a.g);
        uE(a)
    }

    function wE(a) {
        U(Ir) && (a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? mA(a.g) : nA(a.g)
        }) : W.ba(1250, Error("No TCF API function"), void 0, void 0))
    }
    class yE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = gA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var zE = a => {
            if (!a || mi(a, 1) == null) return !1;
            a = mi(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        AE = a => {
            if (!a || mi(a, 3) == null) return !1;
            a = mi(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        BE = a => a ? ki(a, 5) === !0 : !1,
        CE = a => a ? ki(a, 6) === !0 : !1;

    function DE() {
        return "m202407250101"
    };

    function EE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Te: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Te: c
        }
    };

    function FE(a, b) {
        Fe(a, (c, d) => {
            b[d] = c
        })
    }

    function GE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && xe(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function HE() {
        if (IE) return IE;
        const a = Qj() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? IE = b : a.google_persistent_state_async = IE = new JE
    }

    function KE(a, b, c) {
        b = LE[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function ME(a, b, c) {
        return KE(a, b, () => c)
    }

    function NE(a, b, c) {
        return a.S[LE[b] || `google_ps_${b}`] = c
    }

    function OE(a, b) {
        return NE(a, b, ME(a, b, 0) + 1)
    }

    function PE() {
        var a = HE();
        return ME(a, 20, {})
    }

    function QE() {
        var a = HE();
        const b = ME(a, 31, !1);
        b || NE(a, 31, !0);
        return !b
    }

    function RE() {
        var a = HE();
        const b = ME(a, 41, !1);
        b || NE(a, 41, !0);
        return !b
    }

    function SE() {
        var a = HE();
        return ME(a, 26)
    }

    function TE() {
        var a = HE();
        return ME(a, 28, [])
    }

    function UE() {
        var a = HE();
        return KE(a, 39, VE)
    }
    var JE = class {
            constructor() {
                this.S = {}
            }
        },
        IE = null;
    const LE = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function WE(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function XE(a, b) {
        a = WE(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var YE = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        easpi: "easpi",
        aihb: "aihb",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        slmct: "aslmct",
        samct: "asamct",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function ZE(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function $E(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function aF(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        const c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (b) {}
        }
    };

    function yn(a, b) {
        a.g.size > 0 || bF(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function cF(a, b, c, d) {
        Hb(b, c, d);
        yo(a, () => Ib(b, c, d))
    }

    function dF(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && eF(a, b))
    }

    function bF(a) {
        a.win.document.visibilityState ? cF(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && dF(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? (cF(a, a.win, "pagehide", b => {
            dF(a, b)
        }), cF(a, a.win, "pageshow", () => {
            a.j = 0
        })) : cF(a, a.win, "beforeunload", b => {
            dF(a, b)
        })
    }

    function eF(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var fF = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function gF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function hF(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = ff(a.win)
    }

    function iF(a) {
        var b = a.g.wpc;
        if (b === null || b === "") {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if ((a = WE(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client")) == null)
                    if (U(vt)) a = "";
                    else {
                        b: {
                            a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                            /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !lk() ? ZE : $E;
                            for (var d = a.length - 1; d >= 0; d--) {
                                var e = a[d];
                                if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                    a = e;
                                    break b
                                }
                            }
                            a = null
                        }
                        if (a) {
                            c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                            for (d = {}; e = c.exec(a);) d[e[1]] = aF(e[2]);
                            a = d;
                            a = a.google_ad_client ? a.google_ad_client : ""
                        } else a = ""
                    }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function jF(a, b) {
        var c = new bn;
        var d = hF(a);
        c = Fi(c, 1, d);
        c = an(c.Ub(iF(a)), a.g.sd);
        return Fi(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function kF(a) {
        await gF(a.win, () => !(!hF(a) || !iF(a)))
    }

    function lF() {
        var a = P(mF);
        a.i && (a.g.tar += 1)
    }

    function nF(a) {
        var b = P(mF);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = Ki(c)
        }
    }
    async function oF(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await kF(a);
            var e = a.ta;
            a = jF(a, d);
            d = new Sl;
            b = N(d, 1, b);
            c = Vh(b, 2, c, Bg);
            c = E(a, 9, cn, c);
            sn(e, c)
        }
    }
    async function pF(a, b) {
        await kF(a);
        var c = jF(a);
        b = E(c, 5, cn, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), sn(a.ta, b))
    }
    async function qF(a, b, c) {
        await kF(a);
        var d = a.ta;
        a = an(jF(a, c), 1);
        b = E(a, 6, cn, b);
        sn(d, b)
    }
    async function rF(a, b) {
        await kF(a);
        var c = a.ta;
        a = an(jF(a), 1);
        b = E(a, 13, cn, b);
        sn(c, b)
    }
    async function sF(a, b) {
        if (a.i) {
            await kF(a);
            var c = a.ta;
            a = jF(a);
            b = E(a, 11, cn, b);
            sn(c, b)
        }
    }
    var mF = class {
        constructor(a, b) {
            this.win = Qj() || window;
            this.j = b ? ? new fF(this.win);
            this.ta = a ? ? new An(DE(), 100, 100, !0, this.j);
            this.g = KE(HE(), 33, () => {
                const c = V(Gr);
                return {
                    sd: c,
                    ssp: c > 0 && Ee() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get Zc() {
            return this.g.cu
        }
        set Zc(a) {
            this.g.cu = a
        }
        get l() {
            return gy(1227, () => Li(Tl, uh(this.g.cc || []))) || new Tl
        }
    };

    function tF(a) {
        var b = new uF;
        return vi(b, 1, a)
    }
    var uF = class extends O {
        constructor() {
            super()
        }
    };

    function vF(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = zE(a.g),
                c = AE(a.g),
                d = !1;
            b && (xE(new yE(a.i, a.A, a.l || fi(a.g, Nq, 4, y(lg)), a.j)), d = !0);
            c && (kE(new mE(a.i, a.A, a.l || fi(a.g, Nq, 4, y(lg)))), d = !0);
            nF(h => {
                h = M(h, 9, !0);
                h = M(h, 10, b);
                M(h, 11, c)
            });
            var e = BE(a.g),
                f = CE(a.g) || U(ts);
            e && (d = !0);
            d && (d = tF(e && f), a.j.start(U(Cr), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class wF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function xF(a, b, c, d, e, f) {
        try {
            const h = a.g,
                k = Ce("SCRIPT", h);
            k.async = !0;
            xd(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", () => {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", () => {
                c > 0 ? xF(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k), f())
            })
        } catch (h) {
            f()
        }
    }

    function yF(a, b, c = () => {}, d = () => {}) {
        xF(be(a), b, 0, !1, c, d)
    };

    function zF(a = null) {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    Mb(Ln).map(a => Number(a));
    Mb(Mn).map(a => Number(a));
    const AF = r.URL;

    function BF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function CF(a) {
        var b = (new AF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function DF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new AF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function EF(a) {
        var b = new AF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + BF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new AF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function FF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Ce("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var GF = Qi(class extends O {});

    function HF(a) {
        if (a.g) return a.g;
        a.I && a.I(a.j) ? a.g = a.j : a.g = Te(a.j, a.M);
        return a.g ? ? null
    }

    function IF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.ef,
                        e = a.F.get(d);
                    e && (e.yj || a.F.delete(d), e.Pb ? .(e.ni, c.payload))
                }
            } catch (f) {}
        }, Hb(a.j, "message", a.l))
    }

    function JF(a, b, c) {
        if (HF(a))
            if (a.g === a.j)(b = a.B.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Bc) {
                    IF(a);
                    var e = ++a.T;
                    a.F.set(e, {
                        Pb: d.Pb,
                        ni: d.yd(c),
                        yj: b === "addEventListener"
                    });
                    a.g.postMessage(d.Bc(c, e), "*")
                }
            }
    }
    var KF = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.M = b;
            this.I = c;
            this.H = d;
            this.B = new Map;
            this.T = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        i() {
            delete this.g;
            this.B.clear();
            this.A.clear();
            this.F.clear();
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const LF = (a, b) => {
            const c = {
                cb: d => {
                    d = GF(d);
                    b.Ra({
                        jc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        MF = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Pb: (a, b) => {
                a({
                    jc: b
                })
            }
        };

    function NF(a) {
        a = GF(a.data.__fciReturn);
        return {
            payload: a,
            ef: oi(a, 1)
        }
    }

    function OF(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!HF(a.caller), a.j = !0);
        return a.g
    }

    function PF(a) {
        return new Promise(b => {
            OF(a) && JF(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ra: c => {
                    b(c.jc)
                }
            })
        })
    }

    function QF(a, b) {
        OF(a) && JF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Ji(b),
            Ra: () => {}
        })
    }
    var RF = class extends Q {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new KF(a, "googlefcPresent", void 0, NF);
            this.caller.B.set("getDataWithCallback", LF);
            this.caller.A.set("getDataWithCallback", MF)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const SF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function TF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = SF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (kj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function UF(a, b = {}) {
        return TF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.ro) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? VF(a, "1", 0) : !0 : !1
    }

    function VF(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = WF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && WF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? WF(a.purpose.legitimateInterests, b) && WF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function WF(a, b) {
        return !(!a || !a[b])
    }

    function XF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => VF(a, d, c))
    }

    function YF(a) {
        if (a.g) return a.g;
        a.g = Te(a.j, "__tcfapiLocator");
        return a.g
    }

    function ZF(a) {
        return typeof a.j.__tcfapi === "function" || YF(a) != null
    }

    function $F(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (YF(a)) {
            aG(a);
            const e = ++a.H;
            a.B[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function bG(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Bb(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        $F(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = SF(c), c.internalBlockOnErrors = a.A, TF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), $F(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function aG(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Hb(a.j, "message", a.l))
    }
    class cG extends Q {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Ph ? ? !1;
            this.l = null
        }
        i() {
            this.B = {};
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.B;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Bb(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, h) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = SF(b),
                    b.internalBlockOnErrors = this.A, h && b.internalErrorState === 0 || (b.tcString = "tcunavailable", h || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                $F(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && $F(this, "removeEventListener", null, a.listenerId)
        }
    };

    function vE(a, b, c) {
        const d = zF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = zF(a.win),
                    f = new cG(a.win);
                ZF(f) && bG(f, h => {
                    h.cmpId === 300 && h.tcString && h.tcString !== "tcunavailable" && b({
                        Lj: (0, e.getDefaultConsentRevocationText)(),
                        bi: (0, e.getDefaultConsentRevocationCloseText)(),
                        Ih: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function dG(a, b = !1, c) {
        const d = {};
        try {
            const f = CF(a.win),
                h = DF(a.win);
            d.fc = f;
            d.fctype = h
        } catch (f) {}
        let e;
        try {
            e = EF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = lc({
            id: a.g
        }, { ...d,
            ers: 2
        });
        yF(a.win, b, () => {}, () => {});
        c && QF(new RF(a.win), c)
    }
    var eG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                FF(this.win, "googlefcPresent"), dG(this, a, b)
            } catch (c) {}
        }
    };
    const fG = new Set(["ARTICLE", "SECTION"]);
    var gG = class {
        constructor(a) {
            this.g = a
        }
    };

    function hG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function iG(a) {
        return a.classList.length > 0
    }

    function jG(a) {
        return fG.has(a.tagName)
    };
    var kG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function lG(a) {
        return Da(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? lG(a) : null
    };
    var mG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = lG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new kG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var nG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,
                        c
                    ] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function oG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function pG(a) {
        return Array.from(qG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function rG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new PC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && so(a.j, {
                eb: c.g,
                Xa: sG,
                Db: !0
            }) === null
        })
    }

    function tG(a) {
        return pG(a).sort(uG).find(b => rG(a, b)) || []
    }

    function qG(a) {
        return vG(Array.from(a.win.document.getElementsByTagName("IMG")).map(mG).filter(Sp), b => {
            var c = [...hG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? hG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? hG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = so(a.i.g, {
                eb: b.g,
                Xa: iG
            })) ? hG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(so(a.i.g, {
                eb: b.g,
                Xa: jG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var wG = class {
        constructor(a, b, c, d, e) {
            var f = new ip;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function vG(a, b) {
        const c = new nG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function sG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function uG(a, b) {
        return b.length - a.length
    };

    function xG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = yG(a.j),
            d = zG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e => {
            var f = a.j;
            const h = d.getBoundingClientRect(),
                k = h.top - e.top,
                l = h.left - e.left,
                m = h.width - e.width;
            e = h.height - e.height;
            Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(m) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), v(d, {
                top: parseInt(f.top, 10) - k + "px",
                left: parseInt(f.left, 10) - l + "px",
                width: parseInt(f.width, 10) - m + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function AG(a) {
        a.g || (a.g = xG(a));
        return a.g
    }
    var BG = class extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function zG(a) {
        const b = a.document.createElement("div");
        v(b, rr(a));
        v(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function yG(a) {
        const b = a.document.createElement("div");
        v(b, rr(a));
        v(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function CG(a) {
        const b = new R(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Fo(b)
    };
    const DG = ["Google Material Icons", "Roboto"];

    function EG({
        win: a,
        Aa: b,
        Ri: c,
        webPropertyCode: d,
        Oa: e,
        L: f
    }) {
        const h = new kp(a, c);
        c = new BG(a, c, h);
        xo(c, h);
        a = new FG(a, d, e, b, c, f);
        xo(a, c);
        a.J()
    }
    var FG = class extends Q {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.Aa = d;
            this.j = e;
            this.L = f;
            this.g = new R(!1)
        }
        J() {
            const a = GG(this.win, this.webPropertyCode, this.Oa);
            AG(this.j).appendChild(a.Bi);
            zu(this.win, a.va);
            CG(a.va).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.L ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.L ? .Hj(this.Aa, b)
                }
            });
            Jo(this.g, !0, () => void a.Zi.g(!0));
            a.wi.listen(() =>
                void this.dispose());
            a.vi.listen(() => void this.L ? .Fj(this.Aa))
        }
    };

    function GG(a, b, c) {
        const d = new R(!1),
            e = a.document.createElement("div");
        v(e, rr(a));
        v(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Io(d, !0, () => void v(e, {
            opacity: "1"
        }));
        Io(d, !1, () => void v(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        v(f, rr(a));
        v(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            Ah: h,
            Yi: k
        } = HG(a, b);
        f.appendChild(h);
        e.appendChild(IG(a, L(c, 1)));
        b = JG(a, L(c, 2));
        e.appendChild(b.Vh);
        b.se.listen(() => void d.g(!1));
        return {
            Zi: d,
            Bi: e,
            va: k,
            vi: b.se,
            wi: b.se.delay(a, 450)
        }
    }

    function IG(a, b) {
        const c = a.document.createElement("div");
        v(c, rr(a));
        v(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function JG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        v(c, rr(a));
        v(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Ro;
        c.addEventListener("click", () => void Qo(d));
        return {
            Vh: c,
            se: Oo(d)
        }
    }

    function HG(a, b) {
        a = vu(a.document, b, null, null, {});
        return {
            Ah: a.nb,
            Yi: a.va
        }
    };

    function KG({
        target: a,
        threshold: b = 0
    }) {
        const c = new LG;
        c.J(a, b);
        return c
    }
    var LG = class extends Q {
        constructor() {
            super();
            this.g = new R(!1)
        }
        J(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            yo(this, () => void c.disconnect())
        }
    };

    function MG(a) {
        const b = NG(a.win, si(a.g, 2) ? ? 250, si(a.g, 3) ? ? 300);
        let c = 1;
        return tG(a.l).map(d => ({
            Aa: c++,
            image: d,
            gb: b(d)
        }))
    }

    function OG(a, b) {
        const c = KG({
            target: b.image.g,
            threshold: ti(a.g) ? ? .8
        });
        a.j.push(c);
        Jo(Mo(c.g, a.win, si(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (si(a.g, 1) ? ? 1)) {
                EG({
                    win: a.win,
                    Aa: b.Aa,
                    Ri: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    L: a.L
                });
                a.i++;
                if (!(a.i < (si(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.L ? .Gj(b.Aa)
            }
        })
    }

    function PG(a) {
        const b = MG(a);
        b.filter(QG).forEach(c => void OG(a, c));
        a.L ? .Ij(b.map(c => ({
            Aa: c.Aa,
            gb: c.gb
        })))
    }
    var RG = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Oa = d;
            this.l = e;
            this.L = f;
            this.j = [];
            this.i = 0
        }
    };

    function QG(a) {
        return a.gb.rejectionReasons.length === 0
    }

    function NG(a, b, c) {
        const d = Vn(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                Ke: e.height,
                xi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function SG(a, b) {
        a.Aa = b;
        return a
    }
    var TG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.Aa = this.g = null
        }
    };

    function UG(a, b) {
        return new TG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function VG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = uk(), a = 0) : a = uk() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            h = b.hostname,
            k = b.j,
            l = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var m = {
                imcnt: b.g.length
            };
            var n = Math.min(b.g.length, 10);
            for (let p = 0; p < n; p++) {
                const q = `im${p}`;
                m[`${q}_id`] = b.g[p].Aa;
                m[`${q}_s_w`] = b.g[p].gb.Ab;
                m[`${q}_s_h`] = b.g[p].gb.Ke;
                m[`${q}_s_dbf`] = b.g[p].gb.xi;
                b.g[p].gb.rejectionReasons.length > 0 && (m[`${q}_s_rej`] = b.g[p].gb.rejectionReasons.join(","))
            }
        } else m = null;
        iy("abg::imovad", {
            typ: e,
            wpc: f,
            hst: h,
            pvsid: k,
            peid: l,
            rate: c,
            num: d,
            tim: a,
            ...(b.Aa === null ? {} : {
                imid: b.Aa
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...m
        }, c)
    }
    var WG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Ij(a) {
            var b = UG(this, "fndi");
            b.g = a;
            VG(this, b, a.length > 0 ? 1 : .1)
        }
        Gj(a) {
            a = SG(UG(this, "adpl"), a);
            VG(this, a, 1)
        }
        Hj(a, b) {
            a = SG(UG(this, "adst"), a);
            a.i = b;
            VG(this, a, 1)
        }
        Fj(a) {
            a = SG(UG(this, "adis"), a);
            VG(this, a, 1)
        }
        reportError(a) {
            var b = UG(this, "err");
            b.errorMessage = a;
            VG(this, b, .1)
        }
    };

    function XG(a, b, c) {
        return (a = a.g()) && ki(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var YG = class extends O {
        getHeight() {
            return ni(this, 2)
        }
    };

    function ZG(a, b) {
        return Ci(a, 1, b)
    }

    function $G(a, b) {
        return gi(a, 2, b)
    }
    var aH = class extends O {};
    aH.O = [2];
    var bH = class extends O {
        constructor() {
            super()
        }
    };
    bH.O = [5];
    var cH = class extends O {
            constructor() {
                super()
            }
        },
        dH = [1, 2];
    const eH = new Set([7, 1]);
    var fH = class {
        constructor() {
            this.j = new nG;
            this.l = []
        }
        g(a, b) {
            eH.has(b) || Op(Lp(Ov(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function gH(a) {
        return new dq(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class hH {
        g(a) {
            return gH(Math.floor(a.i))
        }
    };
    var iH = class extends O {
        constructor() {
            super()
        }
    };

    function jH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.ce = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Da(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        dk(a.l) && dk(a.i) || iy("rctnosize", b);
        return !0
    }
    var kH = class {
        constructor() {
            this.C = this.D = this.j = this.ce = null;
            this.i = this.l = 0
        }
        B() {
            return !0
        }
    };

    function lH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function mH(a, b = []) {
        const c = Date.now();
        return Wa(b, d => c - d < a * 1E3)
    }

    function nH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || Za(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = mH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function oH(a, b, c) {
        return b <= 0 || a == null || !lH(a) ? null : nH(a, b, c)
    };
    var pH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= Tn(a);
            const k = Un(a),
                l = a.innerWidth;
            var f = k && l ? k / l : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Wn(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var h;
            if (h = b) h = oH(c, 3600, "__lsv__") ? .length !== 0;
            h && (d |= 134217728)
        } catch (k) {
            d |= 32
        }
        return d
    };
    var qH = class extends kH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = ar(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const rH = {};

    function sH(a, b, c) {
        let d = tH(a, c, b);
        if (!d) return !0;
        const e = c.B.i;
        for (; d.Rb && d.Rb.length;) {
            const f = d.Rb.shift(),
                h = pv(f.ha);
            if (h && !(h <= d.Rc)) c.C ? .g(f, 18);
            else if (uH(c, f, {
                    zd: d.Rc
                })) {
                if (d.Oc.g.length + 1 >= e) return c.C ? .i(d.Rb, 19), !0;
                d = tH(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const tH = (a, b, c) => {
        var d = b.B.i,
            e = b.B.l,
            f = b.B;
        f = ty(b.da(), f.g ? f.g.ec : void 0, d);
        if (f.g.length >= d) return b.C ? .i(vH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = Zn(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - zy(f)) : e = void 0;
        const h = (d = e == null || e >= 50) ? vH(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .i(vH(b, f, {
            types: a
        }, c), 18);
        return {
            Oc: f,
            Rc: e,
            Rb: h
        }
    };
    rH[2] = Ka(function(a, b) {
        a = vH(b, ty(b.da()), {
            types: a,
            Cb: gw(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (uH(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    rH[5] = Ka(sH, [0], 5);
    rH[10] = Ka(function(a, b) {
        a = [];
        const c = b.Ka;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(Vr) && a.push(1);
        return sH(a, 10, b)
    }, 10);
    rH[3] = function(a) {
        if (!a.l) return !1;
        var b = vH(a, ty(a.da()), {
            types: [0],
            Cb: gw(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (uH(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const wH = a => {
            var b;
            a.j.mh ? b = U(Xr) ? new bw(0, null, [], 8, .3) : new bw(0, null, [], 3, null) : b = gw(a.da());
            return {
                types: [0],
                Cb: b
            }
        },
        yH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            xH(a, gH(b))
        },
        AH = (a, b) => {
            var c = wH(a);
            c.Jj = [5];
            c = vH(a, ty(a.da()), c, 8);
            zH(a, c.reverse(), b)
        },
        zH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.la), uH(a, d, {
                        de: b
                    })) return !0;
            return !1
        };
    rH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => rH[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.ud()) return !0;
        b = wH(a);
        b.gf = [2, 4, 5];
        b = vH(a, ty(a.da()), b, 8);
        const c = new hH;
        if (zH(a, b, c)) return !0;
        if (a.j.fg) switch (a.j.Pg || 0) {
            case 1:
                AH(a, c);
                break;
            default:
                yH(a)
        }
        return !0
    };
    rH[6] = Ka(sH, [2], 6);
    rH[7] = Ka(sH, [1], 7);
    rH[9] = function(a) {
        const b = tH([0, 2], a, 9);
        if (!b || !b.Rb) return a.A.push(17), a.l;
        for (const d of b.Rb) {
            var c = a.j.He || null;
            c == null ? c = null : (c = qv(d.ha, new BH, new CH(c, a.da())), c = new Qv(c, d.ja(), d.la));
            if (c && !(pv(c.ha) > b.Rc) && uH(a, c, {
                    zd: b.Rc,
                    qe: !0
                })) return a = c.ha.ca, nv(d.ha, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class BH {
        i(a, b, c, d) {
            return yu(d.document, a, b)
        }
        j(a) {
            return Vn(a) || 0
        }
    };
    var DH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Oc = c
        }
        Ba(a) {
            return this.g ? Wy(this.i, this.g, a, this.Oc) : Vy(this.i, a, this.Oc)
        }
        za() {
            return this.g ? 16 : 9
        }
    };
    var EH = class {
        constructor(a) {
            this.ee = a
        }
        Ba(a) {
            return cz(a.document, this.ee)
        }
        za() {
            return 11
        }
    };
    var FH = class {
        constructor(a) {
            this.tb = a
        }
        Ba(a) {
            return $y(this.tb, a)
        }
        za() {
            return 13
        }
    };
    var GH = class {
        Ba(a) {
            return Ty(a)
        }
        za() {
            return 12
        }
    };
    var HH = class {
        constructor(a) {
            this.sc = a
        }
        Ba() {
            return Yy(this.sc)
        }
        za() {
            return 2
        }
    };
    var IH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return az(this.g)
        }
        za() {
            return 3
        }
    };
    var JH = class {
        Ba() {
            return dz()
        }
        za() {
            return 17
        }
    };
    var KH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return Xy(this.g)
        }
        za() {
            return 1
        }
    };
    var LH = class {
        Ba() {
            return zb(hv)
        }
        za() {
            return 7
        }
    };
    var MH = class {
        constructor(a) {
            this.gf = a
        }
        Ba() {
            return Zy(this.gf)
        }
        za() {
            return 6
        }
    };
    var NH = class {
        constructor(a) {
            this.g = a
        }
        Ba() {
            return bz(this.g)
        }
        za() {
            return 5
        }
    };
    var OH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Ba() {
            return Ka(ez, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var PH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function QH(a) {
        var b = new RH;
        b.A = a;
        b.i.push(new KH(a));
        return b
    }

    function SH(a, b) {
        a.i.push(new MH(b));
        return a
    }

    function TH(a, b) {
        a.i.push(new HH(b));
        return a
    }

    function UH(a, b) {
        a.i.push(new NH(b));
        return a
    }

    function VH(a, b) {
        a.i.push(new IH(b));
        return a
    }

    function WH(a) {
        a.i.push(new LH);
        return a
    }

    function XH(a) {
        a.g.push(new GH);
        return a
    }

    function YH(a, b = 0, c, d) {
        a.g.push(new DH(b, c, d));
        return a
    }

    function ZH(a, b = 0, c = Infinity) {
        a.g.push(new OH(b, c));
        return a
    }

    function $H(a) {
        a.g.push(new JH);
        return a
    }

    function aI(a, b = 0) {
        a.g.push(new FH(b));
        return a
    }

    function bI(a, b) {
        a.j = b;
        return a
    }
    var RH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new PH(this)
        }
    };
    class CH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.ce;
            c.google_ad_height = Vn(b) || 0;
            c.google_ad_width = Un(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new iH;
            b = vi(b, 1, a.A);
            a.g && C(b, 2, a.g);
            c.google_rasc = Ji(b);
            a.j && (c.google_adtest = "on");
            return new dq(["fsi_container"], c)
        }
    };
    var cI = Xp(new Up(0, {})),
        dI = Xp(new Up(1, {})),
        eI = a => a === cI || a === dI;

    function fI(a, b, c) {
        ko(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class gI {
        constructor() {
            this.g = new oo
        }
    };

    function hI(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function iI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class jI {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.j = null;
            this.C = [];
            this.F = 0
        }
        Ub(a) {
            this.B.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Nb(this.B);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Lk(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function kI(a, b) {
        if (b && (a.g.apv = F(b, 4), Jh(b, yq, 23))) {
            var c = a.g;
            b = z(b, yq, 23);
            b = Pg(Eh(b, 1));
            c.sat = "" + b
        }
        return a
    }

    function lI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var mI = class extends jI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            a != null && (this.g.allp = a);
            return this
        }
        eh(a) {
            if (a) {
                const b = [];
                for (const c of mo(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.oh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Pb(a, this.g);
            return a
        }
    };

    function nI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function oI(a, b, c, d = 30) {
        c.length <= d ? a[b] = pI(c) : (a[b] = pI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function pI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => la(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function qI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function rI(a, b) {
        a.i.op = qI(b)
    }

    function sI(a, b, c) {
        oI(a.i, "fap", b);
        a.i.fad = qI(c)
    }

    function tI(a, b, c) {
        oI(a.i, "fmp", b);
        a.i.fmd = qI(c)
    }

    function uI(a, b, c) {
        oI(a.i, "vap", b);
        a.i.vad = qI(c)
    }

    function vI(a, b, c) {
        oI(a.i, "vmp", b);
        a.i.vmd = qI(c)
    }

    function wI(a, b, c) {
        oI(a.i, "pap", b);
        a.i.pad = qI(c)
    }

    function xI(a, b, c) {
        oI(a.i, "pmp", b);
        a.i.pmd = qI(c)
    }

    function yI(a, b) {
        oI(a.i, "psq", b)
    }
    var zI = class extends mI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = pI(this.errors));
            return a
        }
    };

    function AI(a, b, c) {
        const d = b.ha;
        ko(a.g, d) || a.g.set(d, new BI(Kp(Ov(b)) ? ? ""));
        c(a.g.get(d))
    }

    function CI(a, b) {
        AI(a, b, c => {
            c.g = !0
        })
    }

    function DI(a, b) {
        AI(a, b, c => {
            c.i = !0
        })
    }

    function EI(a, b) {
        AI(a, b, c => {
            c.j = !0
        });
        a.I.push(b.ha)
    }

    function FI(a, b, c) {
        AI(a, b, d => {
            d.Mb = c
        })
    }

    function GI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) eI(f.Mb ? ? "") ? ++e : (b = a.i.get(f.Mb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, h) => (f ? ? -1) - (h ? ? -1)),
            Nb: e
        }
    }

    function HI(a, b) {
        rI(b, a.i.vc());
        var c = no(a.g).filter(f => (f.xb.startsWith(cI) ? 0 : 1) === 0),
            d = no(a.g).filter(f => (f.xb.startsWith(cI) ? 0 : 1) === 1),
            e = GI(a, f => f.g, c);
        sI(b, e.list, e.Nb);
        e = GI(a, f => f.g, d);
        tI(b, e.list, e.Nb);
        e = GI(a, f => f.i, c);
        uI(b, e.list, e.Nb);
        e = GI(a, f => f.i, d);
        vI(b, e.list, e.Nb);
        c = GI(a, f => f.j, c);
        wI(b, c.list, c.Nb);
        d = GI(a, f => f.j, d);
        xI(b, d.list, d.Nb);
        yI(b, a.I.map(f => a.g.get(f) ? .Mb).map(f => a.i.get(f) ? ? null))
    }

    function Fl() {
        var a = P(II);
        if (!a.A) return ul();
        const b = Dl(Cl(Bl(Al(zl(yl(xl(wl(tl(sl(new vl, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.M), a.T), a.B ? ? 0), no(a.g).map(c => {
            var d = new rl;
            d = Hi(d, 1, c.xb);
            var e = a.i.get(c.Mb ? ? "", -1);
            d = Fi(d, 2, e);
            d = M(d, 3, c.g);
            return M(d, 4, c.i)
        })), a.I.map(c => a.g.get(c) ? .Mb).map(c => a.i.get(c) ? ? -1));
        a.j != null && M(b, 6, a.j);
        a.l != null && Wh(b, 13, Rg(a.l), "0");
        return b
    }
    var II = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.T = this.C = this.M = !1;
            this.B = null;
            this.i = new oo;
            this.g = new oo;
            this.I = []
        }
    };
    class BI {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Mb = null;
            this.xb = a
        }
    };
    class JI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function KI(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function LI(a, b) {
        const c = a.H.filter(d => mo(d.bd).every(e => d.bd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.bd.vc() > e.bd.vc() ? d : e, c[0])
    }

    function MI(a, b) {
        b = Ov(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (ko(a.j, b)) return a.j.get(b);
        var c = Vp(b);
        c = LI(a, c);
        a.j.set(b, c);
        return c
    }
    var NI = class {
        constructor(a) {
            this.g = a;
            this.j = new oo;
            this.H = (z(a, Yq, 2) ? .g() || []).map(b => {
                const c = Vp(L(b, 1)),
                    d = oi(b, 2);
                return {
                    bd: c,
                    Tg: d,
                    xb: L(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = P(II);
            var b = this.l();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new oo;
            for (const c of z(this.g, Yq, 2) ? .g() ? ? []) b.set(L(c, 1), oi(c, 2));
            a.i = b
        }
        B() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        C() {
            return [...Nh(this.g, 4, Pg, y(), 0)]
        }
        A() {
            return z(this.g, Sq, 5) ? .g() ? ? null
        }
        G(a) {
            const b = MI(this, a);
            b ? .xb != null &&
                FI(P(II), a, b.xb)
        }
        I(a) {
            const b = V(ws) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new Cp(a)).filter(d => {
                d = MI(this, d) ? .xb || "";
                return d != "" && !(d === cI || d === dI)
            });
            return b <= c.g.length / a.length
        }
    };

    function OI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (MI(a.g, c) ? .Tg ? ? Number.MAX_VALUE) - (MI(a.g, d) ? .Tg ? ? Number.MAX_VALUE))
    }

    function PI(a, b) {
        var c = b.la.g,
            d = Math,
            e = d.min;
        const f = b.ja(),
            h = b.ha.g();
        c += 200 * e.call(d, 20, h == 0 || h == 3 ? KI(f.parentElement) : KI(f));
        a = a.i;
        a.g < 0 && (a.g = Zn(a.i).scrollHeight || 0);
        a = a.g - b.la.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ja();
        return a
    }

    function QI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => PI(a, c) - PI(a, d))
    }

    function RI(a, b) {
        return b.sort((c, d) => {
            const e = c.ha.G,
                f = d.ha.G;
            var h;
            e == null || f == null ? h = e == null && f == null ? PI(a, c) - PI(a, d) : e == null ? 1 : -1 : h = e - f;
            return h
        })
    }
    class SI {
        constructor(a, b = null) {
            this.i = new JI(a);
            this.g = b && new NI(b)
        }
    };

    function TI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = Bp(e, f.Ba(a.j), UI(f.za(), c));
        f = e = e.apply(Sy(a.j));
        for (const h of b.i) f = Bp(f, h.Ba(a.j), Rp([VI(h.za(), c), k => {
            d ? .g(k, h.za())
        }]));
        switch (b.j) {
            case 1:
                f = QI(a.g, f);
                break;
            case 2:
                f = RI(a.g, f);
                break;
            case 3:
                const h = P(II);
                f = OI(a.g, f);
                e.forEach(k => {
                    CI(h, k);
                    a.g.g ? .G(k)
                });
                f.forEach(k => DI(h, k))
        }
        b.A && (f = Ep(f, Bd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && fI(a.l, b.g[0], {
            kb: e.g.length,
            oh: f.g.length
        });
        return Dp(f)
    }
    class WI {
        constructor(a, b, c = null) {
            this.i = new Cp(a);
            this.g = new SI(b, c);
            this.j = b;
            this.l = new gI
        }
        A() {
            this.i.forEach(a => {
                a.i && hu(a.i);
                a.i = null
            })
        }
    }
    const UI = (a, b) => c => mv(c, b, a),
        VI = (a, b) => c => mv(c.ha, b, a);

    function XI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = YI(ZI(c), a);
                    break a;
                case 3:
                    a = YI(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = YI(e ? e.nodeType == 1 ? e : ZI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !$I(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !vr(b) && b.offsetWidth <= 0);
        return d
    }

    function YI(a, b) {
        if (!a) return !1;
        a = De(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function ZI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function $I(a) {
        return !!a.nextSibling || !!a.parentNode && $I(a.parentNode)
    };
    var aJ = !Yd && !Td();

    function bJ(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (aJ && a.dataset) {
            if (Vd() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var cJ = (a, b, c) => {
            if (!b) return null;
            const d = he(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var h = c.parentNode.lastElementChild;
                    for (f = e.position; h && h != c;) {
                        if (a.getComputedStyle(h).display != "none") {
                            f = a.getComputedStyle(h).position;
                            break
                        }
                        h = h.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var k = a.document;
                f = k.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Vn(a);
                e = k.body.scrollHeight;
                a = a.innerHeight;
                h = k.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                k = k.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && h > 0 && (f = h - k);
                a = l - k >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        dJ = a => {
            const b = a.document.body;
            var c = cJ(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const k = d.pop(),
                        l = k.element;
                    var h = k.height;
                    k.depth > 0 && h > e && (e = h, f = l);
                    if (k.depth < 5)
                        for (h = 0; h < l.children.length; h++) {
                            const m = l.children[h],
                                n = m.getBoundingClientRect().width;
                            (n == null || c == null ? 0 : n >= c * .9 && n <= c * 1.01) && d.push({
                                element: m,
                                depth: k.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? cJ(a, c.parentNode || b, c) : null
        },
        fJ = a => {
            let b = 0;
            try {
                b |= Tn(a), se() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), eJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        eJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (bJ(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function gJ(a) {
        const b = Yn(a, !0),
            c = Zn(a).scrollWidth,
            d = Zn(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = co(a);
        const h = [];
        var k = [];
        const l = [],
            m = [];
        var n = [],
            p = [],
            q = [];
        let t = 0,
            w = 0,
            A = Infinity,
            D = Infinity,
            G = null;
        var I = py({
            Kb: !1
        }, a);
        for (var B of I) {
            I = B.getBoundingClientRect();
            const ba = b - (I.bottom + f);
            var J = void 0,
                H = void 0;
            if (B.className && B.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                J = B.getAttribute("google_element_uid");
                H = a.google_sv_map;
                if (!J ||
                    !H || !H[J]) continue;
                J = (H = nk(H[J])) ? H.height : 0;
                H = H ? H.width : 0
            } else if (J = I.bottom - I.top, H = I.right - I.left, J <= 1 || H <= 1) continue;
            h.push(J);
            l.push(H);
            m.push(J * H);
            B.className && B.className.indexOf("google-auto-placed") != -1 ? (w += 1, B.className && B.className.indexOf("pedestal_container") != -1 && (G = J)) : (A = Math.min(A, ba), p.push(I), t += 1, k.push(J), n.push(J * H));
            D = Math.min(D, ba);
            q.push(I)
        }
        A = A === Infinity ? null : A;
        D = D === Infinity ? null : D;
        f = hJ(p);
        q = hJ(q);
        k = iJ(b, k);
        p = iJ(b, h);
        n = iJ(b * c, n);
        B = iJ(b * c, m);
        return new jJ(a, {
            yi: e,
            Hc: b,
            uj: c,
            tj: d,
            gj: t,
            Jh: w,
            Lh: kJ(h),
            Mh: kJ(l),
            Kh: kJ(m),
            oj: f,
            nj: q,
            mj: A,
            lj: D,
            ye: k,
            xe: p,
            Eh: n,
            Dh: B,
            wj: G
        })
    }

    function lJ(a, b, c, d) {
        const e = se() && !(Un(a.i) >= 900);
        d = Wa(d, f => $a(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.yi,
            pg_h: mJ(a.g.Hc),
            pg_w: mJ(a.g.uj),
            pg_hs: mJ(a.g.tj),
            c: mJ(a.g.gj),
            aa_c: mJ(a.g.Jh),
            av_h: mJ(a.g.Lh),
            av_w: mJ(a.g.Mh),
            av_a: mJ(a.g.Kh),
            s: mJ(a.g.oj),
            all_s: mJ(a.g.nj),
            b: mJ(a.g.mj),
            all_b: mJ(a.g.lj),
            d: mJ(a.g.ye),
            all_d: mJ(a.g.xe),
            ard: mJ(a.g.Eh),
            all_ard: mJ(a.g.Dh),
            pd_h: mJ(a.g.wj),
            dt: e ? "m" : "d"
        }
    }
    class jJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function kJ(a) {
        return qd.apply(null, Wa(a, b => b > 0)) || null
    }

    function iJ(a, b) {
        return a <= 0 ? null : pd.apply(null, b) / a
    }

    function hJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function mJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function nJ(a) {
        var b = ry({
            Kb: !1,
            pd: !1
        }, a);
        a = (Vn(a) || 0) - co(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            xy(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function oJ(a) {
        const b = {};
        var c = ry({
            Kb: !1,
            pd: !1,
            Ne: !1,
            Oe: !1
        }, a).map(d => d.getBoundingClientRect()).filter(xy);
        b.Ff = c.length;
        c = sy({
            Ne: !0
        }, a).map(d => d.getBoundingClientRect()).filter(xy);
        b.dg = c.length;
        c = sy({
            Oe: !0
        }, a).map(d => d.getBoundingClientRect()).filter(xy);
        b.Gg = c.length;
        c = sy({
            pd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(xy);
        b.Kf = c.length;
        c = (Vn(a) || 0) - co(a);
        c = ry({
            Kb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(xy).filter(Ja(pJ, null, c));
        b.Gf = c.length;
        a = gJ(a);
        c = a.g.ye != null ? a.g.ye : null;
        c !=
            null && (b.Bg = c);
        a = a.g.xe != null ? a.g.xe : null;
        a != null && (b.Hf = a);
        return b
    }

    function uH(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        return Qu(997, () => qJ(a, b, {
            zd: c,
            de: d,
            qe: e
        }), a.g)
    }

    function vH(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.B;
        const f = hw(e, b.g.length);
        e = a.j.If ? e.g : void 0;
        const h = $H(aI(XH(ZH(YH(WH(UH(VH(SH(TH(QH(c.types), a.ia), c.gf || []), a.ca), c.Jj || [])), f.Gc || void 0, e, b), c.minWidth, c.maxWidth)), f.tb || void 0));
        a.T && h.g.push(new EH(a.T));
        b = 1;
        a.j.lh ? b = 2 : a.sb() && (b = 3);
        bI(h, b);
        a.j.fh && (h.l = !0);
        return Qu(995, () => TI(a.i, h.build(), d, a.C || void 0), a.g)
    }

    function xH(a, b) {
        const c = dJ(a.g);
        if (c) {
            const d = cq(a.I, b),
                e = vu(a.g.document, a.G, null, null, {}, d);
            e && (ku(e.nb, c, 2, 256), Qu(996, () => rJ(a, e, d), a.g))
        }
    }

    function sJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function qJ(a, b, {
        zd: c,
        de: d,
        qe: e
    } = {}) {
        const f = b.ha;
        if (f.A) return !1;
        var h = b.ja(),
            k = f.g();
        if (!XI(a.g, k, h, a.l)) return !1;
        k = null;
        f.zc ? .includes(6) ? (k = Math.round(h.getBoundingClientRect().height), k = new dq(null, {
            google_max_responsive_height: c == null ? k : Math.min(c, k),
            google_full_width_responsive: "false"
        })) : k = c == null ? null : new dq(null, {
            google_max_responsive_height: c
        });
        c = eq(mi(f.Td, 2) || 0);
        h = fq(f.G);
        const l = tJ(a, f),
            m = uJ(a),
            n = cq(a.I, f.T ? f.T.g(b.la) : null, k, d || null, c, h, l, m),
            p = b.fill(a.G, n);
        if (e && !vJ(a, p, n) || !Qu(996,
                () => rJ(a, p, n), a.g)) return !1;
        Dj(9, [f.G, f.Lb]);
        a.sb() && EI(P(II), b);
        return !0
    }

    function tJ(a, b) {
        return Kp(Op(Mv(b).map(gq), () => {
            a.A.push(18)
        }))
    }

    function uJ(a) {
        if (!a.sb()) return null;
        var b = a.i.g.g ? .C();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return hq({
            li: b,
            Fi: a
        })
    }

    function vJ(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.va;
        c = c && c.wc() || {};
        var h = V(Kr);
        if (d !== d.top) h = Ae(d) ? 3 : 16;
        else if (Un(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var k = Un(d);
                if (!k || (k - f) / k > h) h = 6;
                else {
                    if (h = c.google_full_width_responsive !== "true") b: {
                        k = e.parentElement;
                        for (h = Un(d); k; k = k.parentElement) {
                            const l = De(k, d);
                            if (!l) continue;
                            const m = Ne(l.width);
                            if (m && !(m >= h) && l.overflow !== "visible") {
                                h = !0;
                                break b
                            }
                        }
                        h = !1
                    }
                    h = h ? 7 : !0
                }
            } else h = 5;
        else h =
            4;
        if (h !== !0) f = h;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = De(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Un(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.va;
            if (d = ru(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", pu(b, d, "0px"), f.width = `${Un(a)}px`, su(a, b, d), f.zIndex = "30";
            return !0
        }
        hu(b.nb);
        return !1
    }

    function rJ(a, b, c) {
        if (!b) return !1;
        try {
            zu(a.g, b.va, c)
        } catch (d) {
            return hu(b.nb), a.A.push(6), !1
        }
        return !0
    }
    class wJ {
        constructor(a, b, c, d, e = {}, f = [], h = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.B = d.Cb;
            this.ia = d.sc || [];
            this.I = d.Gi || null;
            this.ca = d.ri || [];
            this.T = d.ee || [];
            this.j = e;
            this.l = !1;
            this.M = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ka = f;
            this.C = h ? new fH : null
        }
        Fa() {
            return this.i
        }
        da() {
            return this.g
        }
        wa(a) {
            this.M.push(a)
        }
        sb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if ((V(ws) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = bI(XH(WH(QH([0, 1, 2]))), 1).build(),
                    b = Qu(995, () => TI(this.i, a), this.g);
                this.H = this.i.g.g ? .I(b) || !1
            }
            return this.H
        }
        Se() {
            return !!this.j.Xg
        }
        ud() {
            return !eJ(this.g)
        }
        ua() {
            return this.C
        }
    }
    const pJ = (a, b) => b.top <= a;

    function xJ(a, b, c, d, e, f = 0, h = 0) {
        this.La = a;
        this.Pd = f;
        this.Od = h;
        this.errors = b;
        this.zb = c;
        this.g = d;
        this.i = e
    };
    var yJ = (a, {
        ud: b = !1,
        Se: c = !1,
        Mj: d = !1,
        sb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(Vr);
            const h = a.includes(1);
            (d || e || h) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(Vr) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function zJ(a, b, c) {
        a = yJ(a, {
            ud: b.ud(),
            Se: b.Se(),
            Mj: !!b.j.He,
            sb: b.sb()
        });
        return new AJ(a, b, c)
    }

    function BJ(a, b) {
        const c = rH[b];
        return c ? Qu(998, () => c(a.g), a.A) : (a.g.wa(12), !0)
    }

    function CJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(BJ(a, b))
            })
        })
    }

    function DJ(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => CJ(a, b))).then(b => {
            b.includes(!1) && a.g.wa(5);
            a.i.splice(0, a.i.length)
        })
    }
    class AJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = bb(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const EJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function FJ(a) {
        return DJ(a).then(() => {
            var b = a.g.i.i.filter(hv).g.length;
            var c = a.g.M.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .B() || [])];
            b = new xJ(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(hv).filter(iv).g.length, a.g.i.i.filter(iv).g.length);
            return new EJ(b)
        })
    };
    var GJ = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        HJ = a => {
            const b = Vn(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var IJ = (a, b) => {
        b = Hv(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => GJ(c)(d.g)).filter(d => HJ(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function JJ(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function KJ(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(h => {
            for (const k of h)
                if (k.isIntersecting) e = !0;
                else {
                    if (h = e) h = a, h = b.getBoundingClientRect().bottom <= Vn(h.win) / 2;
                    h && (LJ(a.L, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        yo(a, () => {
            f.disconnect()
        })
    }
    var MJ = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.L = c
        }
    };

    function NJ(a, b) {
        LJ(a, {
            typ: "cdr",
            af: b.ke,
            ...(b.ke > 0 ? {
                vh: b.W,
                ph: b.Hc,
                ah: b.Fh,
                at: b.Hh
            } : {})
        })
    }

    function LJ(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(vk() ? ? -1),
            num: a.i++
        };
        iy("ama_vignette", a, 1)
    }
    var OJ = class {
        constructor(a) {
            var b = ef();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class PJ {
        g() {
            return new dq([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class QJ {
        g() {
            return new dq(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function RJ(a) {
        return wr(a.g.document).map(b => {
            const c = new av(b, 3);
            b = new cv(Bu(a.g, b));
            return new gv(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class SJ {
        constructor(a) {
            var b = new QJ;
            this.g = a;
            this.i = b || null
        }
    };
    const TJ = {
        wf: "10px",
        ne: "10px"
    };

    function UJ(a) {
        return jo(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new gv(new av(b, 1), new Zu(TJ), a.i, !1, 0, [], null, a.g, null))
    }
    class VJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function WJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(la(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        oI(a.i, "cnstr", c, 80)
    }
    var XJ = class extends jI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function YJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function ZJ(a, b, c) {
        const d = YJ(c.md, "gapsMeasurementWindow") || YJ(c.uc, "gapsPerMeasurementWindow") || YJ(c.Cc, "maxGapsToReport");
        return d != null ? Ip(d) : c.Jf || c.uc != -1 || c.Cc != -1 ? Gp(new $J(a, b, c)) : Ip("ShouldHaveLimits")
    }

    function aK(a) {
        return sJ(a.j) && sJ(a.j).placed || []
    }

    function bK(a) {
        return aK(a).map(b => tp(rp(b.element, a.g)))
    }

    function cK(a) {
        return aK(a).map(b => b.index)
    }

    function dK(a, b) {
        const c = b.ha;
        return !a.C && c.l && mi(c.l, 8) != null && mi(c.l, 8) == 1 ? [] : c.A ? (c.ca || []).map(d => tp(rp(d, a.g))) : [tp(new sp(b.la.g, 0))]
    }

    function eK(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new sp(c, f - c)), c = d)
        }
        return b
    }

    function fK(a, b) {
        b = b.map(c => {
            var d = new YG;
            d = Ci(d, 1, c.g);
            c = c.getHeight();
            return Ci(d, 2, c)
        });
        return $G(ZG(new aH, a), b)
    }

    function gK(a) {
        const b = fi(a, YG, 2, y()).map(c => `G${ni(c,1)}~${c.getHeight()}`);
        return `W${ni(a,1)}${b.join("")}`
    }

    function hK(a, b) {
        const c = [];
        let d = 0;
        for (const e of mo(b)) {
            const f = b.get(e);
            f.sort((h, k) => k.getHeight() - h.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(fK(e, f));
            d += f.length;
            if (!a.B && d >= a.i) break
        }
        return c
    }

    function iK(a) {
        const b = fi(a, aH, 5, y()).map(c => gK(c));
        return `M${ni(a,1)}H${ni(a,2)}C${ni(a,3)}B${Number(!!K(a,4))}${b.join("")}`
    }

    function jK(a) {
        var b = Rv(Dp(a.j.i.i), a.g),
            c = bK(a),
            d = new po(cK(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = dK(a, b[e]);
                c.push(...f)
            }
        c.push(new sp(0, 0));
        c.push(tp(new sp(Zn(a.g).scrollHeight, 0)));
        b = eK(c);
        c = new oo;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), ko(c, f) || c.set(f, []), c.get(f).push(e);
        b = hK(a, c);
        c = new bH;
        c = Ci(c, 1, a.i);
        c = Ci(c, 2, a.l);
        c = Ci(c, 3, a.A);
        a = vi(c, 4, a.C);
        return gi(a, 5, b)
    }

    function kK(a) {
        a = jK(a);
        return iK(a)
    }
    var $J = class {
        constructor(a, b, c) {
            this.G = c.md == -1;
            this.l = c.md;
            this.F = c.uc == -1;
            this.A = c.uc;
            this.B = c.Cc == -1;
            this.i = c.Cc;
            this.C = c.tg;
            this.j = b;
            this.g = a
        }
    };

    function nr(a, b, c) {
        let d = b.Pa;
        b.rb && U(js) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Ua || "pvc" in c || (c.pvc = ff(a.g)), iy(b.qb, c, d))
    }

    function lK(a, b, c) {
        c = c.l(a.g);
        b.Ua && (c.pvc = ff(a.g));
        0 <= b.Pa && (c.r = b.Pa, nr(a, b, c))
    }
    var mK = class {
        constructor(a) {
            this.g = a
        }
    };
    const nK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function oK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        iy("ama", b, .01)
    }

    function pK(a) {
        const b = {};
        Fe(nK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function qK(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function rK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function sK(a, b) {
        a = Nh(a, 2, Ag, y());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function tK(a, b) {
        a = rK(qK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = He(a),
            d = uK(a);
        return b.find(e => {
            const f = Jh(e, pq, 7) ? Eg(Eh(z(e, pq, 7), 1)) : Eg(Eh(e, 1));
            e = Jh(e, pq, 7) ? mi(z(e, pq, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function uK(a) {
        const b = {};
        for (;;) {
            b[He(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function vK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            oK(a, {
                lserr: 1
            })
        }
    };

    function wK() {
        var a = new Fq;
        a = Gi(a, 1, "Toggle toolbar expansion");
        a = Gi(a, 2, "Toggle privacy and legal settings display");
        return Gi(a, 3, "Dismiss privacy and legal settings display").i()
    };
    var yK = (a, b, c, d, e, f = null, h = null) => {
            xK(a, new mK(a), b, c, d, e, f, h)
        },
        xK = (a, b, c, d, e, f, h = null, k = null) => {
            if (c)
                if (d) {
                    var l = ZB(d, e);
                    try {
                        const m = new zK(a, b, c, d, e, l, f, h, k);
                        Qu(990, () => AK(m), a)
                    } catch (m) {
                        Cj() && Dj(15, [m]), lK(b, gr, iI(lI(kI((new mI(0)).Ub(c), d), l).wa(1), m)), pF(P(mF), Jl(new Rl, cl(1)))
                    }
                } else lK(b, gr, (new mI(0)).Ub(c).wa(8)), pF(P(mF), Jl(new Rl, cl(8)));
            else lK(b, gr, (new mI(0)).wa(9)), pF(P(mF), Jl(new Rl, cl(9)))
        };

    function AK(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Qu(991, () => BK(a), a.g);
                    break;
                case 1:
                    Qu(1073, () => {
                        const c = U(ps);
                        SB(new YB(a.g, a.C, a.j, a.A, a.i.aa, c))
                    }, a.g);
                    break;
                case 2:
                    CK(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    Qu(1203, () => {
                        var c = z(a.j, Rq, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var h = z(f, Qq, 1) ? .g() ? ? [];
                            c = new WG(e, c, ff(r), h);
                            if (h = z(f, Qq, 1))
                                if (f = z(f, Pq, 2)) {
                                    vp(d, DG);
                                    const m = new uo;
                                    var k = d.innerWidth;
                                    var l = .375 * k;
                                    k = new PC(l, k - l);
                                    l = d.innerWidth;
                                    l = Un(d) >= 900 ? .2 * l : .5 * l;
                                    PG(new RG(d, e,
                                        h, f, new wG(d, k, l, m, new gG(m)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function BK(a) {
        var b = U(Xr) ? void 0 : a.i.Aj;
        let c = null;
        c = U(Xr) ? gw(a.g) : ew(a.g, b);
        if (a.i.aa && Jh(a.i.aa, oq, 10)) {
            var d = Mh(a.i.aa.g(), 1);
            d !== null && d !== void 0 && (c = Wv(a.g, d, b));
            U(ns) && a.i.aa.g() ? .g() === 2 && (c = dw(a.i.aa.g(), c))
        }
        Jh(a.j, lq, 26) && (c = iw(c, z(a.j, lq, 26), a.g));
        c = kw(c, a.g);
        b = a.i.aa ? Nh(a.i.aa, 6, Ag, y(lg)) : [];
        d = a.i.aa ? fi(a.i.aa, uq, 5, y(lg)) : [];
        const e = a.i.aa ? Nh(a.i.aa, 2, Ag, y(lg)) : [],
            f = Qu(993, () => {
                var h = a.j,
                    k = fi(h, Nq, 1, y(lg)),
                    l = a.i.aa && sK(a.i.aa, 1);
                l = U(ss) ? "" : l ? "text_image" : "text";
                var m = new PJ,
                    n = fv(k, a.g, {
                        Oh: m,
                        Xi: new dv(l)
                    });
                k.length != n.length && a.H.push(13);
                n = n.concat(UJ(new VJ(a.g, m)));
                k = U(ks);
                m = z(h, Zq, 24) ? .j() ? .g() ? .g() || !1;
                if (k || m) k = RJ(new SJ(a.g)), m = P(II), n = n.concat(k), m.M = !0, m.B = k.length, a.F === "n" && (a.F = z(h, Zq, 24) ? .g() ? .length ? "o" : "p");
                k = U(ns) && a.i.aa.g() ? .g() === 2 && a.i.aa.g() ? .j();
                k = U(Sr) || k;
                a: {
                    if (m = z(h, Jq, 6))
                        for (p of m.g())
                            if (Jh(p, Tp, 4)) {
                                var p = !0;
                                break a
                            }
                    p = !1
                }
                k && p ? (p = n.concat, k = a.g, (m = z(h, Jq, 6)) ? (k = Jv(m.g(lg), k), l = XG(h, l, k)) : l = [], l = p.call(n, l)) : (p = n.concat, k = a.g, (m = z(h, Jq, 6)) ? (k = Iv(m.g(lg),
                    k), l = XG(h, l, k)) : l = [], l = p.call(n, l));
                n = l;
                h = z(h, Zq, 24);
                return new WI(n, a.g, h)
            }, a.g);
        a.l = new wJ(f, a.A, a.g, {
            Cb: c,
            Gi: a.M,
            sc: a.i.sc,
            ri: b,
            ee: d
        }, DK(a), e, U(js));
        sJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.sb() && (Au(a.g), P(II).C = !0, a.F = "f");
        a.B = zJ(e, a.l, a.g);
        Qu(992, () => FJ(a.B), a.g).then(Qu(994, () => a.ia.bind(a), a.g), a.ca.bind(a));
        EK(a)
    }

    function CK(a) {
        const b = z(a.j, Oq, 18);
        b && vF(new wF(a.g, new eG(a.g, a.A), b, new lA(a.g), fi(a.j, Nq, 1, y(lg))))
    }

    function DK(a) {
        const b = U(ms);
        if (!a.j.g()) return {
            fh: b,
            lh: !1,
            si: !1,
            mh: !1,
            fg: !1,
            Xg: !1,
            xj: 0,
            Pg: 0,
            If: FK(a),
            He: a.I
        };
        const c = a.j.g();
        return {
            fh: b || K(c, 14, !1),
            lh: K(c, 2, !1),
            si: K(c, 3, !1),
            mh: K(c, 4, !1),
            fg: K(c, 5, !1),
            Xg: K(c, 6, !1),
            xj: pi(c, 8, 0),
            Pg: mi(c, 10),
            If: FK(a),
            He: a.I
        }
    }

    function EK(a) {
        if (U(Qt)) {
            var b = new OJ(a.A);
            const e = z(a.j, Jq, 6) ? .g(lg),
                f = e ? .length > 0;
            var c = b,
                d = !!dA(a.g).reactiveTypeEnabledInAsfe[8];
            LJ(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new MJ(a.g, e, b), b = IJ(a.win, a.g), b.length === 0 ? NJ(a.L, {
                ke: 0
            }) : (c = JJ(b), d = c.g.getBoundingClientRect(), NJ(a.L, {
                ke: b.length,
                W: Vn(a.win),
                Hc: Zn(a.win).scrollHeight,
                Fh: d.height,
                Hh: a.win.scrollY + d.top
            }), c = c.g, KJ(a, c, 0, "-50% 0px 0px 0px"), KJ(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function FK(a) {
        return U(ds) || U(ns) && a.i.aa ? .g() ? .g() === 2 ? !1 : a.i.aa && Jh(a.i.aa, oq, 10) ? (Mh(a.i.aa.g(), 1) || 0) >= .5 : !0
    }

    function GK(a, b) {
        for (var c = hI(hI(new mI(b.La), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = c, h = d[e], k = 0; k < f.C.length; k++)
                if (f.C[k] == h) break a;f.C.push(h)
        }
        c.g.pp = b.Od;
        c.g.ppp = b.Pd;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.kc;
        c.g.eatfAbg = b.lc;
        c.g.reatf = b.Jb;
        c = lI(kI(c.H(a.B.l.slice(0)), a.j), a.G).Ub(a.A);
        if (d = b.Ga) c.g.as_count = d.Ff, c.g.d_count = d.dg, c.g.ng_count = d.Gg, c.g.am_count = d.Kf, c.g.atf_count = d.Gf, c.g.mdns = nI(d.Bg), c.g.alldns = nI(d.Hf);
        c = c.G(b.Qb).eh(b.kd);
        d = b.Hc;
        d != null && (c.g.pgh = d);
        c.g.abl = b.og;
        c.g.rr = a.F;
        b.exception !== void 0 && iI(c, b.exception).wa(1);
        return c
    }

    function HK(a, b) {
        var c = GK(a, b);
        lK(a.C, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? gr : fr, c);
        if (z(a.j, Zq, 24)) {
            a.l.i.g.g ? .F();
            b = sJ(a.l);
            const d = P(II);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.T = !!b ? .optimization ? .availableAbg;
            b = P(II);
            c = new zI(c);
            b.A ? (c.i.sl = pI(b.A ? ? []), c.i.daaos = pI(b.H ? ? []), c.i.ab = qI(b.G), c.i.rr = qI(b.M), c.i.oab = qI(b.F), b.j != null && (c.i.sab = qI(b.j)), b.C && (c.i.fb = qI(b.C)), c.i.ls = qI(b.T), rI(c, b.i.vc()), b.B != null && (c.i.rp = qI(b.B)),
                b.l != null && (c.i.expl = qI(b.l)), HI(b, c)) : c.errors.push("irr");
            lK(a.C, ir, c)
        }
        c = a.l ? .ua();
        U(js) && c != null && (c = new Map([...c.j.map.entries()].map(oG)), b = new XJ, WJ(b, c), lK(a.C, lr, b))
    }

    function IK(a, b) {
        const c = P(mF);
        if (c.i) {
            var d = new Rl,
                e = b.zb.filter(h => h !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(h => h !== null);
            Nl(Ll(Ql(Pl(Ol(Ml(Gl(Il(Kl(Hl(d, a.B.l.slice(0).map(h => {
                var k = new bl;
                return Hh(k, 1, zg(h))
            })), e.map(h => {
                var k = new el;
                return Hh(k, 1, zg(h))
            })), f.map(h => cl(h))), z(a.j, yq, 23) ? .g()), b.La).G(b.Qb), b.Jb), b.kc), b.lc), a.G.map(h => h.toString())), ll(kl(jl(il(hl(gl(fl(new ml, b.Ga ? .Ff), b.Ga ? .dg), b.Ga ? .Gg), b.Ga ? .Kf), b.Ga ? .Gf), b.Ga ? .Bg), b.Ga ? .Hf));
            if (b.kd)
                for (let h of mo(b.kd)) {
                    e =
                        new Uh;
                    for (let k of b.kd.get(h)) ql(e, ol(nl(new pl, k.kb), k.oh));
                    Th(d).set(h.toString(), e)
                }
            z(a.j, Zq, 24) && El(d);
            pF(c, d)
        }
    }

    function JK(a, b) {
        try {
            U(Ur) && a.l ? .Fa() ? .A()
        } catch (c) {
            lK(a.C, kr, iI(lI(kI((new mI(b)).Ub(a.A), a.j), a.G).wa(14), c))
        }
    }

    function KK(a, b, c) {
        {
            var d = sJ(a.l),
                e = b.g;
            const f = e.g,
                h = e.Od;
            let k = e.La,
                l = e.Pd,
                m = e.errors.slice(),
                n = e.zb.slice(),
                p = b.exception;
            const q = WE(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? k += d.numAutoAdsPlaced : a.B.j && n.push(13), d.exception !== void 0 && (p = d.exception), d.numPostPlacementsPlaced && (l += d.numPostPlacementsPlaced), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: e.errors.slice(),
                zb: n,
                exception: p,
                Jb: c,
                kc: !!d.eatf,
                lc: !!d.eatfAbg,
                og: q
            }) : (n.push(12), a.B.j && n.push(13), c = {
                La: k,
                Od: h,
                Pd: l,
                Qb: f,
                errors: m,
                zb: n,
                exception: p,
                Jb: c,
                kc: !1,
                lc: !1,
                og: q
            })
        }
        c.Ga = oJ(a.l.g);
        if (b = b.g.i) c.kd = b;
        c.Hc = Zn(a.g).scrollHeight;
        if (Cj() || z(a.j, xq, 25) ? .j()) {
            d = Dp(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const h of mo(e)) d[h] = e.get(h);
                d = {
                    anchorElement: jv(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Lb,
                    placed: f.A,
                    placementProto: f.l ? Ki(f.l) : null,
                    articleStructure: f.C ? Ki(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Dj(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Ga])
        }
        return c
    }

    function LK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Qb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.Jb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = ZJ(a.g, a.l, {
            md: -1,
            uc: -1,
            Cc: -1,
            tg: !0,
            Jf: !0
        }), a.g != null ? (c.placementPositionDiffs = kK(a.getValue()), b = jK(a.getValue()), a = new cH, a = E(a, 2, dH, b), c.placementPositionDiffsReport = Ji(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new cH, a = Zh(a, 1, dH, Ug(b)), c.placementPositionDiffsReport = Ji(a)))
    }

    function MK(a, b) {
        HK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        });
        IK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Ga: void 0
        })
    }
    class zK {
        constructor(a, b, c, d, e, f, h, k, l) {
            this.g = a;
            this.C = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.G = f;
            this.M = k || null;
            this.H = [];
            this.I = l;
            this.T = h;
            this.F = "n"
        }
        runAutoGames() {
            const a = z(this.j, zq, 32);
            a && this.T.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Pf: a,
                Hb: (z(this.j, Gq, 33) ? .g() ? .i() ? ? null) || wK()
            })
        }
        ia(a) {
            try {
                JK(this, a.g.La);
                const b = nJ(this.l.g) || void 0;
                er({
                    Be: b
                }, this.g);
                const c = KK(this, a, nJ(this.l.g));
                Jh(this.j, xq, 25) && ki(z(this.j, xq, 25), 1) && LK(this, c);
                HK(this, c);
                IK(this, c);
                hy(753, () => {
                    if (U(Yr) && this.l !=
                        null) {
                        var d = ZJ(this.g, this.l, {
                                md: V(is),
                                uc: V(hs),
                                Cc: V($r),
                                tg: !0,
                                Jf: !1
                            }),
                            e = Nb(c);
                        d.g != null ? (d = kK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = GK(this, e);
                        lK(this.C, hr, e)
                    }
                })()
            } catch (b) {
                MK(this, b)
            }
        }
        ca(a) {
            JK(this, 0);
            MK(this, a)
        }
    };
    var NK = class extends O {},
        OK = Qi(NK);

    function PK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Jp(() => OK(c)) : Gp(null)
    };

    function QK(a, b) {
        return vi(a, 5, b)
    }

    function RK(a, b) {
        return vi(a, 14, b)
    }
    var SK = class extends O {
        constructor() {
            super()
        }
        l() {
            return F(this, 1) != null
        }
        j() {
            return F(this, 2) != null
        }
        A() {
            return K(this, 3)
        }
        C() {
            return ki(this, 3) != null
        }
        g() {
            return K(this, 5)
        }
    };
    SK.O = [10];
    var VK = ({
        win: a,
        Va: b,
        rg: c = !1,
        sg: d = !1
    }) => TK({
        win: a,
        Va: b,
        rg: c,
        sg: d
    }) ? (b = ME(HE(), 24)) ? UK(a, QK(new SK, UF(b))) : new Hp(null, Error("tcunav")) : UK(a, QK(new SK, !0));

    function TK({
        win: a,
        Va: b,
        rg: c,
        sg: d
    }) {
        if (!(d = !d && ZF(new cG(a)))) {
            if (c = !c) {
                if (b) {
                    a = PK(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && mi(a, 1) != null) b: switch (a = mi(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function UK(a, b) {
        return (a = sj(b, a)) ? Gp(a) : new Hp(null, Error("unav"))
    };
    var WK = class extends O {};
    class XK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.C = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    class YK {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function ZK() {
        const {
            promise: a,
            resolve: b
        } = new YK;
        return {
            promise: a,
            resolve: b
        }
    };

    function $K(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = ZK();
        b[a] = d;
        c();
        return d
    }

    function aL(a, b, c) {
        return $K(a, b, () => {
            Be(b.document, c)
        }).promise
    };

    function bL() {
        const a = {};
        du(Mr) && (a.bust = du(Mr));
        var b = HE();
        b = ME(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    }
    const cL = new Map([
        [2, 7],
        [3, 1],
        [4, 3],
        [5, 12]
    ]);

    function dL(a, b, c) {
        c = dc(c, bL());
        if (a === 1) return {
            Co: Be(b.document, c),
            Qc: new Promise(() => {})
        };
        if (cL.has(a)) return {
            Qc: aL(cL.get(a), b, c)
        };
        throw Error(`Unexpected chunkId: ${a}`);
    };
    var eL = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Pf: c,
            Hb: d
        }) {
            jy(1116, dL(5, a, this.jb).Qc.then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Ji(c),
                    serializedFloatingToolbarMessages: Ji(d)
                })
            }))
        }
    };
    var fL = {
            Zk: "google_ads_preview",
            Ml: "google_mc_lab",
            cm: "google_anchor_debug",
            bm: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            ym: "google_scr_debug",
            Am: "google_ia_debug_allow_onclick",
            Ym: "googleads",
            zh: "google_pedestal_debug",
            sn: "google_responsive_slot_preview",
            rn: "google_responsive_dummy_ad",
            Pk: "google_audio_sense",
            Sk: "google_auto_gallery",
            Uk: "google_auto_storify_swipeable",
            Tk: "google_auto_storify_scrollable",
            Rk: "google_games_single_game",
            Qk: "google_games_catalog"
        },
        gL = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var hL = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function iL(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = jL(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function jL(a) {
        let b = "";
        Fe(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function kL() {
        var a = r.location;
        let b = !1;
        Fe(fL, c => {
            iL(a, c) && (b = !0)
        });
        return b
    }

    function lL(a, b) {
        switch (a) {
            case 1:
                return iL(b, "google_ia_debug");
            case 2:
                return iL(b, "google_bottom_anchor_debug");
            case 3:
                return iL(b, "google_anchor_debug") || iL(b, "googleads")
        }
    };

    function mL({
        win: a,
        webPropertyCode: b,
        jb: c
    }) {
        iL(a.location, "google_games_single_game") ? nL(a, b, 1, c) : iL(a.location, "google_games_catalog") && nL(a, b, 2, c)
    }

    function nL(a, b, c, d) {
        var e = new zq;
        c = Hh(e, 1, zg(c));
        (new eL(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Pf: c,
            Hb: wK()
        })
    };
    var oL = class extends O {
        constructor() {
            super()
        }
        Mi() {
            return qi(this, 3)
        }
    };
    const pL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var qL = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return ni(this, 2)
        }
    };
    qL.O = [3];

    function rL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function sL(a) {
        return sf(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function tL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function uL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function vL(a, b) {
        a = sL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function wL(a) {
        var b = sL(a),
            c = tL(b.slice(0, 6));
        a = tL(b.slice(6, 12));
        var d = new qL;
        c = Di(d, 1, c);
        a = Di(c, 2, a);
        b = b.slice(12);
        c = tL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let l = 0; l < c; l++) {
            if (e.length === 0) throw Error(`Found ${l} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = tL(e[0]) === 0;
            e = e.slice(1);
            var h = xL(e, b),
                k = d.length === 0 ? 0 : d[d.length - 1];
            k = uL(h) + k;
            e = e.slice(h.length);
            if (f) d.push(k);
            else {
                f = xL(e, b);
                h = uL(f);
                for (let m = 0; m <= h; m++) d.push(k + m);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Vh(a, 3, d, Bg)
    }

    function xL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var yL = class extends O {
        constructor() {
            super()
        }
    };
    var zL = class extends O {
        constructor() {
            super()
        }
    };
    var AL = class extends O {
        getVersion() {
            return ni(this, 1)
        }
    };
    var BL = class extends O {
        constructor() {
            super()
        }
    };

    function CL(a) {
        var b = new DL;
        return C(b, 1, a)
    }
    var DL = class extends O {
        constructor() {
            super()
        }
    };
    const EL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        FL = 6 + EL.reduce((a, b) => a + b);
    var GL = class extends O {
        constructor() {
            super()
        }
    };
    var HL = class extends O {
        getVersion() {
            return ni(this, 1)
        }
    };
    var IL = class extends O {
        constructor() {
            super()
        }
    };

    function JL(a) {
        var b = new KL;
        return C(b, 1, a)
    }
    var KL = class extends O {
        constructor() {
            super()
        }
    };
    const LL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        ML = 6 + LL.reduce((a, b) => a + b);
    var NL = class extends O {
        constructor() {
            super()
        }
    };
    var OL = class extends O {
        constructor() {
            super()
        }
    };
    var PL = class extends O {
        getVersion() {
            return ni(this, 1)
        }
    };
    var QL = class extends O {
        constructor() {
            super()
        }
    };

    function RL(a) {
        var b = new SL;
        return C(b, 1, a)
    }
    var SL = class extends O {
        constructor() {
            super()
        }
    };
    const TL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        UL = 6 + TL.reduce((a, b) => a + b);
    var VL = class extends O {
        constructor() {
            super()
        }
    };
    var WL = class extends O {
        constructor() {
            super()
        }
    };
    var XL = class extends O {
        getVersion() {
            return ni(this, 1)
        }
    };
    var YL = class extends O {
        constructor() {
            super()
        }
    };

    function ZL(a) {
        var b = new $L;
        return C(b, 1, a)
    }
    var $L = class extends O {
        constructor() {
            super()
        }
    };
    const aM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        bM = 6 + aM.reduce((a, b) => a + b);
    var cM = class extends O {
        constructor() {
            super()
        }
    };
    var dM = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return ni(this, 1)
        }
    };
    const eM = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        fM = 6 + eM.reduce((a, b) => a + b);

    function gM() {
        var a = new hM;
        return Fi(a, 1, 0)
    }

    function iM(a) {
        var b = Number;
        var c = Eh(a, 1);
        c = c == null ? c : xg(c) ? typeof c === "string" ? Gg(c) : Hg(c) : void 0;
        b = b(c ? ? "0");
        a = ni(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var hM = class extends O {};
    var jM = "a".charCodeAt(),
        kM = Mb(Ln),
        lM = Mb(Mn);

    function mM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function nM(a) {
        let b = mM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!mM(a, 1) === !0,
                e = mM(a, 16);
            if (d)
                for (d = mM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, h) => f - h);
        return c
    }

    function oM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (mM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function pM(a) {
        const b = mM(a, 16);
        return !!mM(a, 1) === !0 ? (a = nM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : oM(a, b)
    }
    class qM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var sM = a => {
        try {
            var b = sf(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new qM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = mM(c, 12);
            b.cmpVersion = mM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = mM(c, 6);
            b.isServiceSpecific = !!mM(c, 1);
            b.useNonStandardStacks = !!mM(c, 1);
            b.specialFeatureOptins = rM(oM(c, 12, lM), lM);
            b.purpose = {
                consents: rM(oM(c, 24, kM), kM),
                legitimateInterests: rM(oM(c, 24, kM), kM)
            };
            b.purposeOneTreatment = !!mM(c, 1);
            b.publisherCC = String.fromCharCode(jM + mM(c, 6)) + String.fromCharCode(jM +
                mM(c, 6));
            b.vendor = {
                consents: rM(pM(c), null),
                legitimateInterests: rM(pM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const rM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var tM = class extends O {
        g() {
            return F(this, 2) != null
        }
    };
    var uM = class extends O {
        l() {
            return F(this, 2) != null
        }
    };
    var vM = class extends O {
        j() {
            return F(this, 1) != null
        }
    };
    var wM = class extends O {},
        xM = Qi(wM);
    wM.O = [7];

    function yM(a) {
        a = zM(a);
        try {
            var b = a ? xM(a) : null
        } catch (c) {
            b = null
        }
        return b ? z(b, vM, 4) || null : null
    }

    function zM(a) {
        a = (new qj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function AM(a) {
        a.__tcfapiPostMessageReady || BM(new CM(a))
    }

    function BM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, h) => {
                const k = {};
                k.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var CM = class {
        constructor(a) {
            this.win = a
        }
    };

    function DM(a) {
        a.__uspapiPostMessageReady || EM(new FM(a))
    }

    function EM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, h) => {
                const k = {};
                k.__uspapiReturn = {
                    returnValue: f,
                    success: h,
                    callId: e.callId
                };
                f = c ? JSON.stringify(k) : k;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var FM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var GM = class extends O {};
    var HM = class extends O {
            g() {
                return F(this, 1) != null
            }
        },
        IM = Qi(HM);
    HM.O = [2];

    function JM(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 4));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(6, 10));
            p = m(p);
            return "1" + q + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var q = k(p.slice(0, 6));
            q = l(q);
            p = k(p.slice(8, 12));
            p = m(p);
            return "1" + q + p + "N"
        }

        function h(p) {
            if (p.length < 18) return null;
            var q = k(p.slice(0, 8));
            q = l(q);
            p = k(p.slice(12, 18));
            p = m(p);
            return "1" + q + p + "N"
        }

        function k(p) {
            const q = [];
            let t = 0;
            for (let w = 0; w < p.length / 2; w++) q.push(tL(p.slice(t, t + 2))), t += 2;
            return q
        }

        function l(p) {
            return p.every(q => q === 1) ? "Y" : "N"
        }

        function m(p) {
            return p.some(q => q === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = sL(a[0]);
        const n = tL(a.slice(0, 6));
        a = a.slice(6);
        if (n !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function KM(a) {
        var b = U(Er);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new LM(a, b), MM(a), NM(a))
    }

    function MM(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", FF(a.win, "__uspapiLocator"), La("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), DM(a.win))
    }

    function NM(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", FF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], La("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ?
                            (e = sM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.win), AM(a.win))
    }

    function OM(a, b) {
        if (!b ? .g() || L(b, 1).length === 0 || fi(b, GM, 2, y()).length === 0) return null;
        const c = L(b, 1);
        let d;
        try {
            var e = wL(c.split("~")[0]);
            d = rL(c)
        } catch (f) {
            return null
        }
        b = fi(b, GM, 2, y()).reduce((f, h) => oi(PM(f), 1) > oi(PM(h), 1) ? f : h);
        e = Nh(e, 3, Cg, y()).indexOf(ni(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: JM(d[e], ni(b, 1), a.j),
            we: iM(PM(b))
        }
    }

    function QM(a) {
        a = a.find(b => b && qi(b, 1) === 13);
        if (a ? .g()) try {
            return IM(L(a, 2))
        } catch (b) {}
        return null
    }

    function PM(a) {
        return Jh(a, hM, 2) ? z(a, hM, 2) : gM()
    }
    var LM = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = zM(this.win.document);
            try {
                var c = b ? xM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = z(b, uM, 5) || null, b = fi(b, tM, 7, y()), b = QM(b ? ? []), c = {
                Tf: c,
                ng: b
            }) : c = {
                Tf: null,
                ng: null
            };
            b = c;
            c = OM(this, b.ng);
            b = b.Tf;
            if (b ? .l() && L(b, 2).length !== 0) {
                var d = Jh(b, hM, 1) ? z(b, hM, 1) : gM();
                b = {
                    uspString: L(b, 2),
                    we: iM(d)
                }
            } else b = null;
            this.i = b && c ? c.we > b.we ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = yM(a.document)) && c.j() ? L(c, 1) : null;
            this.g = (a = yM(a.document)) && F(a, 2) != null ?
                L(a, 2) : null
        }
    };

    function RM() {
        const a = Jd();
        return a ? Za("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => $b(a, b)) || $b(a, "OMI/") && !$b(a, "XiaoMi/") ? !0 : $b(a, "Presto") && $b(a, "Linux") && !$b(a, "X11") && !$b(a, "Android") && !$b(a, "Mobi") : !1
    };

    function SM(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var TM = (a, b) => {
        a = SM(a);
        b = SM(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var UM = (a, b, c, d = null) => {
            const e = h => {
                let k;
                try {
                    k = JSON.parse(h.data)
                } catch (l) {
                    return
                }!k || k.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(h.data) && !d(k, h) || c(k, h)
            };
            Hb(a, "message", e);
            let f = !1;
            return () => {
                let h = !1;
                f || (f = !0, h = Ib(a, "message", e));
                return h
            }
        },
        VM = (a, b, c, d = null) => {
            const e = UM(a, b, yb(c, () => e()), d);
            return e
        },
        WM = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && WM(a[f], b, c, d, --e)
        };

    function XM(a, b, c, d) {
        return UM(a, "fullscreen", d.Da(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    async function YM(a) {
        return a.A.promise
    }
    async function ZM(a) {
        return a.j.promise
    }
    async function $M(a) {
        return a.l.promise
    }

    function aN(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.B.Qj;
        b.version = a.B.version;
        Mk(a.ta, "fullscreen_tag", b, !1, .25)
    }
    class bN extends Q {
        constructor(a, b, c) {
            var d = W,
                e = ow,
                f = {
                    Qj: 2,
                    version: DE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.ue = c;
            this.Ia = d;
            this.ta = e;
            this.B = f;
            this.g = 1;
            this.qem = null;
            this.A = new YK;
            this.j = new YK;
            this.l = new YK
        }
        J() {
            const a = XM(this.pubWin, this.ue, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (aN(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) aN(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ia);
            yo(this, a)
        }
    };
    var cN = Promise;
    class dN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class eN {
        constructor(a) {
            this.data = a
        }
    };

    function fN(a, b) {
        gN(a, b);
        return new hN(a)
    }
    class hN {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            gN(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new cN(c => {
                this.i(a, c, b)
            })
        }
    }

    function gN(a, b) {
        b && (a.onmessage = c => {
            b(new eN(c.data, fN(c.ports[0])))
        })
    };
    var iN = class {
        constructor(a) {
            this.g = a
        }
    };
    const jN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var lN = ({
        destination: a,
        Na: b,
        origin: c,
        pe: d = "ZNWN1d",
        onMessage: e,
        Hg: f
    }) => kN({
        destination: a,
        Ni: () => b.contentWindow,
        rj: c instanceof iN ? c : typeof c === "function" ? new iN(c) : new iN(jN(c)),
        pe: d,
        onMessage: e,
        Hg: f
    });
    const kN = ({
        destination: a,
        Ni: b,
        rj: c,
        Eo: d,
        pe: e,
        onMessage: f,
        Hg: h
    }) => new dN(new cN((k, l) => {
        const m = n => {
            n.source && n.source === b() && c.g(n.origin) && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(fN(n.ports[0], f)), h && h(n)))
        };
        a.addEventListener("message", m, !1)
    }));

    function mN(a, b, c, d, e, f, h = null) {
        if (e) {
            if (U(Wr)) var k = null;
            else try {
                k = e.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? ar(k) : null
            } catch (n) {
                l = null
            }
        } else l = null;
        a: {
            if (d) try {
                var m = ar(d);
                break a
            } catch (n) {
                oK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new nq;
                C(d, 3, m);
                l = d ? .g() ? .j() || 1;
                l = Date.now() + 864E5 * l;
                Number.isFinite(l) && Ei(m, 1, Math.round(l));
                m = xh(d);
                d.g() && (l = new mq, k = d ? .g() ? .g(), l = vi(l, 23, k), k = d ? .g() ? .l(), l = vi(l, 12, k), C(m, 15, l));
                l = fi(m, Nq, 1, y());
                for (k = 0; k < l.length; k++) Hh(l[k], 11);
                Hh(m, 22);
                if (U(Wr)) vK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", Ji(m))
                } catch (n) {
                    oK(a, {
                        lserr: 1
                    })
                }
            }
            e = tK(a, fi(d, wq, 7, y()));
            m = {};
            U(Xr) || (m.Aj = z(d, Hq, 8) || new Hq);
            e && (m.aa = e);
            e && sK(e, 3) && (m.sc = [1]);
            e = m;
            if (!U(Ar) && c.google_pgb_reactive === 7 && !e.aa) return !1;
            XE(a, 2) && (Dj(5, [Ki(d)]), c = pK(c), f = new eL(f), m = (m = e.aa) && F(m, 4) || "", c.google_package = m, yK(a, b, d, e, f, new dq(["google-auto-placed"], c), h));
            return !0
        }
        l && (oK(a, {
            cfg: 1,
            cl: 1
        }), e != null && vK(a, e));
        return !1
    };

    function nN(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = ee(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = oN(a, b, c, a.g.g.elementsFromPoint(od(c.left + c.width / 2, c.left, c.right - 1), od(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = oN(a, b, c, a.g.g.elementsFromPoint(od(c.left + c.width / 2, c.left, c.right - 1), od(c.top + 2, c.top, c.bottom - 1)), 2, e.ob),
            h = oN(a, b, c, a.g.g.elementsFromPoint(od(c.left + 2, c.left, c.right - 1), od(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ob, ...f.ob]);
        const k = oN(a, b, c, a.g.g.elementsFromPoint(od(c.right - 1 - 2, c.left, c.right - 1), od(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ob, ...f.ob, ...h.ob]);
        var l = pN(a, b, c),
            m = p => $a(a.j, p.ub) && $a(a.l, p.Lg) && $a(a.i, p.Mg);
        e = Wa([...e.entries, ...f.entries, ...h.entries, ...k.entries], m);
        m = Wa(l, m);
        l = [...e, ...m];
        f = c.left < -2 || c.right > d.width + 2;
        f = l.length > 0 || f;
        h = fe(a.g.g);
        const n = new Hj(c.left, c.top, c.width, c.height);
        e = [...Xa(e, p => new Hj(p.nc.left, p.nc.top, p.nc.width, p.nc.height)), ...ob(Xa(m,
            p => Jj(n, p.nc))), ...Wa(Jj(n, new Hj(0, 0, d.width, d.height)), p => p.top >= 0 && p.top + p.height <= d.height)];
        return {
            entries: l,
            yg: f,
            Zg: {
                scrollX: h.x,
                scrollY: h.y
            },
            target: b,
            Xb: c,
            qh: {
                width: d.width,
                height: d.height
            },
            sj: e.length < 20 ? qN(n, e) : rN(c, e)
        }
    }

    function sN(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const h = c.IntersectionObserver;
            if (h)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var k = new h(l => {
                                    const m = new Dk,
                                        n = Ck(m, () => nN(a, l));
                                    n && (m.i.length && (n.Di = Math.round(Number(m.i[0].duration))), k.disconnect(), e(n))
                                }, tN);
                                k.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function oN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            ob: []
        };
        const h = [],
            k = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if ($a(f, p)) continue;
            k.push(p);
            const q = p.getBoundingClientRect();
            if (a.g.contains(p, b)) {
                h.push(uN(a, c, p, q, 1, e));
                continue
            }
            if (a.g.contains(b, p)) {
                h.push(uN(a, c, p, q, 2, e));
                continue
            }
            a: {
                var l = a;
                var m = b;
                const A = l.g.Ii(m, p);
                if (!A) {
                    l = null;
                    break a
                }
                const {
                    Ea: D,
                    Fb: G
                } = vN(l, m, A, p) || {},
                {
                    Ea: I,
                    Fb: B
                } = vN(l, p, A, m) || {};l = D && G && I && B ? G <= B ? {
                    Ea: D,
                    ub: wN[G]
                } : {
                    Ea: I,
                    ub: xN[B]
                } : D && G ? {
                    Ea: D,
                    ub: wN[G]
                } : I && B ? {
                    Ea: I,
                    ub: xN[B]
                } : null
            }
            const {
                Ea: t,
                ub: w
            } = l || {};
            t && w ? h.push(uN(a, c, p, q, w, e, t)) : h.push(uN(a, c, p, q, 9, e))
        }
        return {
            entries: h,
            ob: k
        }
    }

    function pN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = De(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(uN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(uN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(uN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function qN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let h = 0; h < b.length && (!(d & 1 << h) || (f++, e = Ij(e, b[h]), e)); h++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function rN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function uN(a, b, c, d, e, f, h) {
        const k = {
            element: c,
            nc: d,
            ub: e,
            Mg: f
        };
        if ($a(a.j, e) && $a(a.i, f)) {
            b = new Ej(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = yN(a, c)) && Gj(b, a)) c = 4;
            else {
                a = zN(c, d);
                e = Xj(c, "paddingLeft");
                f = Xj(c, "paddingRight");
                var l = Xj(c, "paddingTop"),
                    m = Xj(c, "paddingBottom");
                e = new Ej(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(e));
                Gj(b, new Ej(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = zN(c, d), c = Gj(b, c) ? 2 : 1)
            }
            k.Lg = c
        }
        h && (k.Ea = h);
        return k
    }

    function vN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const k = e[f];
            var h = De(k, c);
            if (h) {
                if (h.position === "fixed") return {
                    Ea: k,
                    Fb: 1
                };
                if (h.position === "sticky" && a.g.contains(k.parentElement, d)) return {
                    Ea: k,
                    Fb: 2
                };
                if (h.position === "absolute") return {
                    Ea: k,
                    Fb: 3
                };
                if (h.cssFloat !== "none") {
                    h = k === e[0];
                    const l = AN(a, e.slice(0, f), k);
                    if (h || l) return {
                        Ea: k,
                        Fb: 4
                    }
                }
            }
        }
        return (a = AN(a, e, b)) ? {
            Ea: a,
            Fb: 5
        } : null
    }

    function AN(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const h = f.getBoundingClientRect();
            if (!h) continue;
            const k = De(f, a.g.da());
            if (k && d.bottom > h.bottom + 2 && k.overflowY === "visible") return f
        }
        return null
    }

    function yN(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Ej(a.top, a.right, a.bottom, a.left)
    }

    function zN(a, b) {
        var c = Xj(a, "borderLeftWidth");
        var d = Xj(a, "borderRightWidth"),
            e = Xj(a, "borderTopWidth");
        a = Xj(a, "borderBottomWidth");
        c = new Ej(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Ej(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class BN {
        constructor(a) {
            var b = CN;
            this.g = be(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const wN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        xN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Wa(Ge({
        Sl: 1,
        Tl: 2,
        Jn: 3,
        Kn: 4,
        Mn: 5,
        Ol: 6,
        Pl: 7,
        Rl: 8,
        Um: 9,
        Ln: 10,
        Ql: 11,
        In: 12,
        Nl: 13
    }), a => !$a([1, 2], a));
    Ge({
        al: 1,
        Xm: 2,
        ql: 3,
        Nn: 4
    });
    const CN = Ge({
            bl: 1,
            Qn: 2,
            Hm: 3,
            wn: 4
        }),
        tN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function DN(a) {
        a.g != null || a.C || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) Da(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Qo(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var EN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Ro;
            this.g = null;
            yo(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function FN(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Gp(Ul(4)) : d.startsWith("#") ? Gp(Ul(5)) : GN(d, c) : Ip("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.L;
                var e = new Wl;
                d = C(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var IN = class {
        constructor(a, b, c) {
            var d = HN();
            this.win = a;
            this.g = b;
            this.L = c;
            this.i = d
        }
        J() {
            const a = new EN(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                FN(this, b)
            });
            DN(a);
            Oo(a.j).listen(b => {
                FN(this, b)
            })
        }
    };

    function GN(a, b) {
        return JN(a, b).map(c => JN(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Ul(2);
                e = Hi(e, 2, `${c.host}${c.pathname}`);
                d = Hi(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Ul(3) : Ul(1);
            return d
        }))
    }

    function JN(a, b) {
        return Mp(Jp(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function KN(a) {
        if (a < 0 || !Number.isInteger(a)) return Ip(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Gp(b.reverse().join(""))
    };
    class LN {
        constructor() {
            this.yh = 5E3
        }
        di() {
            return 5E3
        }
    }

    function MN(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.yh : b
    }

    function NN(a, b) {
        b = b.map(c => MN(a, c));
        return ON(b, a.i === void 0 ? void 0 : MN(a, a.i)).map(c => {
            a: {
                var d = PN;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Hp(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Gp(e)
            }
            return d
        }).map(c => c.join(".")).map(c => QN(c, a.g ? .di()))
    }
    var RN = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function PN(a) {
        const b = KN(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.Rd === 1 ? Gp(`${c}`) : a.Rd === 2 ? Gp(`${c}${"~"}`) : Op(KN(a.Rd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function ON(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Ip("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Rd: 1
            }) : c[c.length - 1].Rd++
        }
        return Gp(c)
    }

    function QN(a, b) {
        return a === "" ? Gp("") : SN(b).map(c => `${c}${a}`)
    }

    function SN(a) {
        return a === void 0 || a === 1 ? Gp("") : Np(KN(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var TN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        J() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            yo(this, () => void this.win.removeEventListener("focus", this.g));
            yo(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function UN(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var VN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => void UN(this)
        }
        J() {
            this.win.addEventListener("visibilitychange", this.g);
            yo(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            UN(this)
        }
    };

    function WN(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var YN = class {
        constructor(a) {
            this.win = a;
            this.j = XN(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function XN(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function ZN(a) {
        a = new $N(a);
        a.J();
        return a
    }

    function aO(a) {
        const b = bp(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function bO(a) {
        const b = cO(a.win),
            c = () => {
                const d = cO(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function dO(a) {
        a.l = !a.g.P;
        Jo(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function eO(a) {
        Io(a.g, !0, () => void a.j.start());
        Io(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function fO(a) {
        var b = a.win.scrollY;
        var c = Vn(a.win);
        b = {
            Vd: Math.floor(b / 100),
            cd: Math.floor((b + c) / 100),
            ih: a.win.performance.now()
        };
        if (b.Vd < 0 || b.cd < 0 || b.Vd > 1E3 || b.cd > 1E3) a.B = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new PC(c.Vd, c.cd),
                    e = new PC(b.Vd, b.cd);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new PC(f, d) : null)
                    for (c = b.ih - c.ih, d = f.start; d <= f.end; d++) a.C[d] = (a.C[d] ? ? 0) + c
            }
            a.i = a.A.P ? b : null
        }
    }
    var $N = class {
        constructor(a) {
            this.win = a;
            this.C = [];
            a = this.win;
            var b = new TN(a);
            b.J();
            b = Fo(b.j);
            a = new VN(a);
            a.J();
            this.A = this.g = Eo(b, Fo(a.j));
            this.j = new YN(this.win);
            this.G = new YN(this.win);
            this.H = new RN((new RN(new LN)).g, 0);
            this.F = this.l = this.B = !1;
            this.i = null
        }
        J() {
            aO(this);
            bO(this);
            dO(this);
            eO(this);
            this.A.listen(() => void fO(this));
            r.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.P && fO(this)
        }
    };

    function cO(a) {
        return new sd(Un(a), Vn(a))
    };

    function gO(a, {
        Va: b
    }) {
        a = new hO(a, b);
        if (!a.Va && U(Es)) {
            b = a.win;
            var c = iO(jO(a));
            (new IN(b, b.document.baseURI, c)).J()
        }
        kO(a)
    }

    function kO(a) {
        if (U(Fs)) {
            var b = ZN(a.win);
            yn(new fF(a.win), lO(() => {
                var c = jO(a),
                    d = new Zl,
                    e = NN(b.H, b.C);
                if (e.g == null) throw Np(e, "PVDC: ").i;
                var f = new Yl;
                f = Di(f, 2, 5E3);
                f = Di(f, 1, 100);
                e = e.getValue();
                e = Hi(f, 3, e);
                f = cO(b.win);
                var h = new Xl;
                h = Di(h, 1, f.width);
                f = Di(h, 2, f.height);
                e = C(e, 4, f);
                f = new Xl;
                f = Di(f, 1, Zn(b.win).scrollWidth);
                f = Di(f, 2, Zn(b.win).scrollHeight);
                e = C(e, 5, f);
                e = M(e, 6, b.l);
                f = Math.round(WN(b.G) / 1E3);
                e = Di(e, 8, f);
                f = Math.round(WN(b.j) / 1E3);
                e = Di(e, 9, f);
                b.B && Yh(e, 7, yg, 1);
                b.F && Yh(e, 7, yg, 2);
                d = E(d, 2, $l, e);
                c(d)
            }))
        }
    }

    function jO(a) {
        if (!a.L) {
            const b = P(mF);
            a.L = c => {
                rF(b, c)
            }
        }
        return a.L
    }
    var hO = class {
        constructor(a, b) {
            this.win = a;
            this.Va = b;
            this.L = null
        }
    };

    function iO(a) {
        return b => {
            var c = new Zl;
            b = E(c, 1, $l, b);
            return void a(b)
        }
    }

    function HN() {
        return a => {
            W.ba(1243, a, void 0, mO("LCC"))
        }
    }

    function lO(a) {
        return () => void W.vb(1243, a, mO("PVC"))
    }

    function mO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var oO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!mj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = nO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = nO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = nO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = nO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = nO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = nO(a, b.google_color_line, c))
    };

    function nO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const pO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var qO = (a, b = !1) => {
        try {
            return b ? (new sd(a.innerWidth, a.innerHeight)).round() : ee(a || window).round()
        } catch (c) {
            return new sd(-12245933, -12245933)
        }
    };

    function rO(a = r) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function sO(a, b = r) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new rd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function tO(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function uO(a, b) {
        var c = W,
            d;
        var e;
        d = (e = (e = Lj()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Hj(d.left, d.top, d.width, d.height) : null) ? new rd(e.left, e.top) : (d = Oj()) && Da(d.rootBounds) ? new rd(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new rd(0, 0),
                h = de(b);
            var k = h ? ge(h) : window;
            if (Xd(k, "parent")) {
                do {
                    if (k == a) var l = ak(b);
                    else {
                        var m = Zj(b);
                        l = new rd(m.left,
                            m.top)
                    }
                    h = l;
                    f.x += h.x;
                    f.y += h.y
                } while (k && k != a && k != k.parent && (b = k.frameElement) && (k = k.parent))
            }
            return f
        } catch (n) {
            return c.ba(888, n), new rd(-12245933, -12245933)
        }
    };

    function vO(a, b) {
        return vj(a.win) ? !!b.g() : !1
    }

    function wO(a, b, c) {
        c ? (a = a.win, b = c.g() ? xj(b, a) : null) : b = null;
        return b
    }

    function xO(a, b, c, d) {
        if (d) {
            var e = oi(c, 2) - Date.now() / 1E3;
            e = {
                Bd: Math.max(e, 0),
                path: L(c, 3),
                domain: L(c, 4),
                Sd: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && yj(b, c, e, a)
        }
    }

    function yO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && xj(b, d)));
        if (!d)
            for (const f of zO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && rj(new qj(e.document), d, "/", f)
            }
    }
    var AO = class {
        constructor(a) {
            this.win = a
        }
    };

    function zO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function BO(a, b, c) {
        var d = wO(a, "__gpi_opt_out", b);
        d && (d = Gi(Ei(dj(d), 2, 2147483647), 3, "/"), c = Gi(d, 4, c), xO(a, "__gpi_opt_out", c, b))
    }

    function CO(a, b, c, d) {
        const e = UM(a, "gpi-uoo", (f, h) => {
            if (h.source === c) {
                h = Gi(Ei(dj(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                h = Gi(h, 4, a.location.hostname);
                var k = new AO(a);
                xO(k, "__gpi_opt_out", h, b);
                if (f.userOptOut || f.clearAdsData) yO(k, "__gads", b), yO(k, "__gpi", b)
            }
        });
        d.push(e)
    };
    const DO = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        EO = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        FO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        GO = {
            yd: a => a.listener,
            Bc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function HO(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ef: b.__gppReturn.callId
        }
    }

    function IO(a, b) {
        if (!a) return !1;
        const c = wL(a.split("~")[0]),
            d = rL(a),
            e = Nh(c, 3, Cg, y());
        for (let wi = 0; wi < e.length; ++wi) {
            const pw = e[wi];
            if (!b.includes(pw)) continue;
            const sb = d[wi];
            switch (pw) {
                case 7:
                    if (sb.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const eg = sb.split(".");
                    if (eg.length > 2) throw Error(`Expected at most 2 segments but got ${eg.length} when decoding ${sb}.`);
                    var f = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        t = void 0,
                        w = void 0,
                        A = void 0,
                        D = void 0,
                        G = void 0,
                        I = void 0,
                        B = void 0,
                        J = void 0,
                        H = void 0,
                        ba = void 0,
                        db = void 0,
                        ya = void 0,
                        ha = void 0,
                        ma = void 0,
                        hb = void 0,
                        ib = void 0,
                        fg = void 0,
                        ra = void 0,
                        Od = void 0,
                        qw = void 0,
                        rw = void 0,
                        sw = void 0,
                        tw = eg[0];
                    if (tw.length === 0) throw Error("Cannot decode empty core segment string.");
                    let xi = vL(tw, bM);
                    const Bm = tL(xi.slice(0, 6));
                    xi = xi.slice(6);
                    if (Bm !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${Bm} - only version 1 is supported.`);
                    let Cm = 0;
                    const pa = [];
                    for (let ja = 0; ja < aM.length; ja++) {
                        const Z =
                            aM[ja];
                        pa.push(tL(xi.slice(Cm, Cm + Z)));
                        Cm += Z
                    }
                    var fS = new XL;
                    sw = Di(fS, 1, Bm);
                    var gS = pa.shift();
                    rw = N(sw, 2, gS);
                    var hS = pa.shift();
                    qw = N(rw, 3, hS);
                    var iS = pa.shift();
                    Od = N(qw, 4, iS);
                    var jS = pa.shift();
                    ra = N(Od, 5, jS);
                    var kS = pa.shift();
                    fg = N(ra, 6, kS);
                    var lS = pa.shift();
                    ib = N(fg, 7, lS);
                    var mS = pa.shift();
                    hb = N(ib, 8, mS);
                    var nS = pa.shift();
                    ma = N(hb, 9, nS);
                    var oS = pa.shift();
                    ha = N(ma, 10, oS);
                    var pS = new WL,
                        qS = pa.shift();
                    ya = N(pS, 1, qS);
                    var rS = pa.shift();
                    db = N(ya, 2, rS);
                    var sS = pa.shift();
                    ba = N(db, 3, sS);
                    var tS = pa.shift();
                    H = N(ba, 4, tS);
                    var uS =
                        pa.shift();
                    J = N(H, 5, uS);
                    var vS = pa.shift();
                    B = N(J, 6, vS);
                    var wS = pa.shift();
                    I = N(B, 7, wS);
                    var xS = pa.shift();
                    G = N(I, 8, xS);
                    var yS = pa.shift();
                    D = N(G, 9, yS);
                    var zS = pa.shift();
                    A = N(D, 10, zS);
                    var AS = pa.shift();
                    w = N(A, 11, AS);
                    var BS = pa.shift();
                    t = N(w, 12, BS);
                    q = C(ha, 11, t);
                    var CS = new VL,
                        DS = pa.shift();
                    p = N(CS, 1, DS);
                    var ES = pa.shift();
                    n = N(p, 2, ES);
                    m = C(q, 12, n);
                    var FS = pa.shift();
                    l = N(m, 13, FS);
                    var GS = pa.shift();
                    k = N(l, 14, GS);
                    var HS = pa.shift();
                    h = N(k, 15, HS);
                    var IS = pa.shift();
                    const uw = f = N(h, 16, IS);
                    if (eg.length === 1) var vw = ZL(uw);
                    else {
                        var JS =
                            ZL(uw),
                            ww = void 0,
                            xw = void 0,
                            yw = void 0,
                            zw = eg[1];
                        if (zw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = vL(zw, 3),
                            Z = tL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        yw = Z + 1;
                        const Pd = tL(ja.charAt(2));
                        var KS = new YL;
                        xw = N(KS, 2, yw);
                        ww = M(xw, 1, !!Pd);
                        vw = C(JS, 2, ww)
                    }
                    const Dm = z(vw, XL, 1);
                    if (qi(Dm, 8) === 1 || qi(Dm, 9) === 1 || qi(Dm, 10) === 1) return !0;
                    break;
                case 8:
                    if (sb.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const gg =
                        sb.split(".");
                    if (gg.length > 2) throw Error(`Expected at most 1 sub-section but got ${gg.length-1} when decoding ${sb}.`);
                    var LS = void 0,
                        Aw = void 0,
                        Bw = void 0,
                        Cw = void 0,
                        Dw = void 0,
                        Ew = void 0,
                        Fw = void 0,
                        Gw = void 0,
                        Hw = void 0,
                        Iw = void 0,
                        Jw = void 0,
                        Kw = void 0,
                        Lw = void 0,
                        Mw = void 0,
                        Nw = void 0,
                        Ow = void 0,
                        Pw = void 0,
                        Qw = void 0,
                        Rw = void 0,
                        Sw = void 0,
                        Tw = void 0,
                        Uw = void 0,
                        Vw = void 0,
                        Ww = gg[0];
                    if (Ww.length === 0) throw Error("Cannot decode empty core segment string.");
                    let yi = vL(Ww, FL);
                    const Em = tL(yi.slice(0, 6));
                    yi = yi.slice(6);
                    if (Em !==
                        1) throw Error(`Unable to decode unsupported USCA Section specification version ${Em} - only version 1 is supported.`);
                    let Fm = 0;
                    const za = [];
                    for (let ja = 0; ja < EL.length; ja++) {
                        const Z = EL[ja];
                        za.push(tL(yi.slice(Fm, Fm + Z)));
                        Fm += Z
                    }
                    var MS = new AL;
                    Vw = Di(MS, 1, Em);
                    var NS = za.shift();
                    Uw = N(Vw, 2, NS);
                    var OS = za.shift();
                    Tw = N(Uw, 3, OS);
                    var PS = za.shift();
                    Sw = N(Tw, 4, PS);
                    var QS = za.shift();
                    Rw = N(Sw, 5, QS);
                    var RS = za.shift();
                    Qw = N(Rw, 6, RS);
                    var SS = new zL,
                        TS = za.shift();
                    Pw = N(SS, 1, TS);
                    var US = za.shift();
                    Ow = N(Pw, 2, US);
                    var VS = za.shift();
                    Nw = N(Ow, 3, VS);
                    var WS = za.shift();
                    Mw = N(Nw, 4, WS);
                    var XS = za.shift();
                    Lw = N(Mw, 5, XS);
                    var YS = za.shift();
                    Kw = N(Lw, 6, YS);
                    var ZS = za.shift();
                    Jw = N(Kw, 7, ZS);
                    var $S = za.shift();
                    Iw = N(Jw, 8, $S);
                    var aT = za.shift();
                    Hw = N(Iw, 9, aT);
                    Gw = C(Qw, 7, Hw);
                    var bT = new yL,
                        cT = za.shift();
                    Fw = N(bT, 1, cT);
                    var dT = za.shift();
                    Ew = N(Fw, 2, dT);
                    Dw = C(Gw, 8, Ew);
                    var eT = za.shift();
                    Cw = N(Dw, 9, eT);
                    var fT = za.shift();
                    Bw = N(Cw, 10, fT);
                    var gT = za.shift();
                    Aw = N(Bw, 11, gT);
                    var hT = za.shift();
                    const Xw = LS = N(Aw, 12, hT);
                    if (gg.length === 1) var Yw = CL(Xw);
                    else {
                        var iT = CL(Xw),
                            Zw =
                            void 0,
                            $w = void 0,
                            ax = void 0,
                            bx = gg[1];
                        if (bx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = vL(bx, 3),
                            Z = tL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        ax = Z + 1;
                        const Pd = tL(ja.charAt(2));
                        var jT = new BL;
                        $w = N(jT, 2, ax);
                        Zw = M($w, 1, !!Pd);
                        Yw = C(iT, 2, Zw)
                    }
                    const cx = z(Yw, AL, 1);
                    if (qi(cx, 5) === 1 || qi(cx, 6) === 1) return !0;
                    break;
                case 9:
                    if (sb.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let zi = vL(sb, fM);
                    const Gm = tL(zi.slice(0,
                        6));
                    zi = zi.slice(6);
                    if (Gm !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${Gm} - only version 1 is supported.`);
                    let Hm = 0;
                    const Oa = [];
                    for (let ja = 0; ja < eM.length; ja++) {
                        const Z = eM[ja];
                        Oa.push(tL(zi.slice(Hm, Hm + Z)));
                        Hm += Z
                    }
                    var kT = Gm,
                        lT = new dM,
                        mT = Di(lT, 1, kT),
                        nT = Oa.shift(),
                        oT = N(mT, 2, nT),
                        pT = Oa.shift(),
                        qT = N(oT, 3, pT),
                        rT = Oa.shift(),
                        sT = N(qT, 4, rT),
                        tT = Oa.shift(),
                        uT = N(sT, 5, tT),
                        vT = Oa.shift();
                    var wT = N(uT, 6, vT);
                    var xT = new cM,
                        yT = Oa.shift(),
                        zT = N(xT, 1, yT),
                        AT = Oa.shift(),
                        BT = N(zT, 2, AT),
                        CT =
                        Oa.shift(),
                        DT = N(BT, 3, CT),
                        ET = Oa.shift(),
                        FT = N(DT, 4, ET),
                        GT = Oa.shift(),
                        HT = N(FT, 5, GT),
                        IT = Oa.shift(),
                        JT = N(HT, 6, IT),
                        KT = Oa.shift(),
                        LT = N(JT, 7, KT),
                        MT = Oa.shift();
                    var NT = N(LT, 8, MT);
                    var OT = C(wT, 7, NT),
                        PT = Oa.shift(),
                        QT = N(OT, 8, PT),
                        RT = Oa.shift(),
                        ST = N(QT, 9, RT),
                        TT = Oa.shift(),
                        UT = N(ST, 10, TT),
                        VT = Oa.shift(),
                        dx = N(UT, 11, VT);
                    if (qi(dx, 5) === 1 || qi(dx, 6) === 1) return !0;
                    break;
                case 10:
                    if (sb.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const hg = sb.split(".");
                    if (hg.length > 2) throw Error(`Expected at most 2 segments but got ${hg.length} when decoding ${sb}.`);
                    var WT = void 0,
                        ex = void 0,
                        fx = void 0,
                        gx = void 0,
                        hx = void 0,
                        ix = void 0,
                        jx = void 0,
                        kx = void 0,
                        lx = void 0,
                        mx = void 0,
                        nx = void 0,
                        ox = void 0,
                        px = void 0,
                        qx = void 0,
                        rx = void 0,
                        sx = void 0,
                        tx = void 0,
                        ux = void 0,
                        vx = hg[0];
                    if (vx.length === 0) throw Error("Cannot decode empty core segment string.");
                    let Ai = vL(vx, ML);
                    const Im = tL(Ai.slice(0, 6));
                    Ai = Ai.slice(6);
                    if (Im !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${Im} - only version 1 is supported.`);
                    let Jm = 0;
                    const ab = [];
                    for (let ja = 0; ja < LL.length; ja++) {
                        const Z =
                            LL[ja];
                        ab.push(tL(Ai.slice(Jm, Jm + Z)));
                        Jm += Z
                    }
                    var XT = new HL;
                    ux = Di(XT, 1, Im);
                    var YT = ab.shift();
                    tx = N(ux, 2, YT);
                    var ZT = ab.shift();
                    sx = N(tx, 3, ZT);
                    var $T = ab.shift();
                    rx = N(sx, 4, $T);
                    var aU = ab.shift();
                    qx = N(rx, 5, aU);
                    var bU = ab.shift();
                    px = N(qx, 6, bU);
                    var cU = new GL,
                        dU = ab.shift();
                    ox = N(cU, 1, dU);
                    var eU = ab.shift();
                    nx = N(ox, 2, eU);
                    var fU = ab.shift();
                    mx = N(nx, 3, fU);
                    var gU = ab.shift();
                    lx = N(mx, 4, gU);
                    var hU = ab.shift();
                    kx = N(lx, 5, hU);
                    var iU = ab.shift();
                    jx = N(kx, 6, iU);
                    var jU = ab.shift();
                    ix = N(jx, 7, jU);
                    hx = C(px, 7, ix);
                    var kU = ab.shift();
                    gx =
                        N(hx, 8, kU);
                    var lU = ab.shift();
                    fx = N(gx, 9, lU);
                    var mU = ab.shift();
                    ex = N(fx, 10, mU);
                    var nU = ab.shift();
                    const wx = WT = N(ex, 11, nU);
                    if (hg.length === 1) var xx = JL(wx);
                    else {
                        var oU = JL(wx),
                            yx = void 0,
                            zx = void 0,
                            Ax = void 0,
                            Bx = hg[1];
                        if (Bx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = vL(Bx, 3),
                            Z = tL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        Ax = Z + 1;
                        const Pd = tL(ja.charAt(2));
                        var pU = new IL;
                        zx = N(pU, 2, Ax);
                        yx = M(zx, 1, !!Pd);
                        xx = C(oU, 2, yx)
                    }
                    const Cx =
                        z(xx, HL, 1);
                    if (qi(Cx, 5) === 1 || qi(Cx, 6) === 1) return !0;
                    break;
                case 12:
                    if (sb.length === 0) throw Error("Cannot decode empty usct section string.");
                    const ig = sb.split(".");
                    if (ig.length > 2) throw Error(`Expected at most 2 segments but got ${ig.length} when decoding ${sb}.`);
                    var qU = void 0,
                        Dx = void 0,
                        Ex = void 0,
                        Fx = void 0,
                        Gx = void 0,
                        Hx = void 0,
                        Ix = void 0,
                        Jx = void 0,
                        Kx = void 0,
                        Lx = void 0,
                        Mx = void 0,
                        Nx = void 0,
                        Ox = void 0,
                        Px = void 0,
                        Qx = void 0,
                        Rx = void 0,
                        Sx = void 0,
                        Tx = void 0,
                        Ux = void 0,
                        Vx = void 0,
                        Wx = void 0,
                        Xx = void 0,
                        Yx = ig[0];
                    if (Yx.length ===
                        0) throw Error("Cannot decode empty core segment string.");
                    let Bi = vL(Yx, UL);
                    const Km = tL(Bi.slice(0, 6));
                    Bi = Bi.slice(6);
                    if (Km !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${Km} - only version 1 is supported.`);
                    let Lm = 0;
                    const Ca = [];
                    for (let ja = 0; ja < TL.length; ja++) {
                        const Z = TL[ja];
                        Ca.push(tL(Bi.slice(Lm, Lm + Z)));
                        Lm += Z
                    }
                    var rU = new PL;
                    Xx = Di(rU, 1, Km);
                    var sU = Ca.shift();
                    Wx = N(Xx, 2, sU);
                    var tU = Ca.shift();
                    Vx = N(Wx, 3, tU);
                    var uU = Ca.shift();
                    Ux = N(Vx, 4, uU);
                    var vU = Ca.shift();
                    Tx = N(Ux, 5,
                        vU);
                    var wU = Ca.shift();
                    Sx = N(Tx, 6, wU);
                    var xU = new OL,
                        yU = Ca.shift();
                    Rx = N(xU, 1, yU);
                    var zU = Ca.shift();
                    Qx = N(Rx, 2, zU);
                    var AU = Ca.shift();
                    Px = N(Qx, 3, AU);
                    var BU = Ca.shift();
                    Ox = N(Px, 4, BU);
                    var CU = Ca.shift();
                    Nx = N(Ox, 5, CU);
                    var DU = Ca.shift();
                    Mx = N(Nx, 6, DU);
                    var EU = Ca.shift();
                    Lx = N(Mx, 7, EU);
                    var FU = Ca.shift();
                    Kx = N(Lx, 8, FU);
                    Jx = C(Sx, 7, Kx);
                    var GU = new NL,
                        HU = Ca.shift();
                    Ix = N(GU, 1, HU);
                    var IU = Ca.shift();
                    Hx = N(Ix, 2, IU);
                    var JU = Ca.shift();
                    Gx = N(Hx, 3, JU);
                    Fx = C(Jx, 8, Gx);
                    var KU = Ca.shift();
                    Ex = N(Fx, 9, KU);
                    var LU = Ca.shift();
                    Dx = N(Ex, 10, LU);
                    var MU = Ca.shift();
                    const Zx = qU = N(Dx, 11, MU);
                    if (ig.length === 1) var $x = RL(Zx);
                    else {
                        var NU = RL(Zx),
                            ay = void 0,
                            by = void 0,
                            cy = void 0,
                            dy = ig[1];
                        if (dy.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ja = vL(dy, 3),
                            Z = tL(ja.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        cy = Z + 1;
                        const Pd = tL(ja.charAt(2));
                        var OU = new QL;
                        by = N(OU, 2, cy);
                        ay = M(by, 1, !!Pd);
                        $x = C(NU, 2, ay)
                    }
                    const ey = z($x, PL, 1);
                    if (qi(ey, 5) === 1 || qi(ey, 6) === 1) return !0
            }
        }
        return !1
    }
    var MO = class extends Q {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new KF(a, "__gppLocator", d => typeof d.__gpp === "function", HO);
            this.caller.B.set("addEventListener", DO);
            this.caller.A.set("addEventListener", FO);
            this.caller.B.set("removeEventListener", EO);
            this.caller.A.set("removeEventListener", GO);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = Bb(() => {
                    a(JO, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            JF(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(KO, !0);
                            return
                        }
                        a(LO, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            JF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const LO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        JO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        KO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function NO(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function OO(a, b) {
        if (b.internalErrorState) Gi(a, 11, b.gppString);
        else if (NO(b.applicableSections)) {
            var c = Vh(a, 10, b.applicableSections, Fg);
            vi(c, 12, !1)
        } else {
            c = !1;
            try {
                c = IO(b.gppString, b.applicableSections)
            } catch (d) {
                W.ba(1182, d, void 0, void 0)
            }
            a = Vh(a, 10, b.applicableSections, Fg);
            b = Gi(a, 11, b.gppString);
            vi(b, 12, c)
        }
    }

    function PO(a) {
        const b = new MO(a.pubWin);
        if (!HF(b.caller)) return Promise.resolve(null);
        const c = HE(),
            d = ME(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = ME(c, 36, []);
            h.push(f);
            NE(c, 36, h)
        });
        d || d === null || (NE(c, 35, null), b.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || NO(f.pingData.applicableSections)) {
                f = f.pingData;
                NE(c, 35, f);
                OO(a.g, f);
                for (const h of ME(c, 36, [])) h.resolve(f);
                NE(c, 36, [])
            }
        }));
        return e
    };

    function QO(a) {
        return a.length ? a.join("~") : void 0
    };

    function RO(a, b) {
        return vC({
            K: a,
            ij: 3E3,
            pj: a.innerWidth > Sn ? 650 : 0,
            ta: ow,
            Xh: b
        })
    };

    function SO(a) {
        let b = 0;
        try {
            b |= Tn(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function TO(a) {
        let b = 0;
        try {
            b |= Tn(a), b |= Wn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function UO(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function VO(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function WO(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function XO(a, b) {
        if (UO(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Ib(b, "prerenderingchange", d);
                a()
            };
            Hb(b, "prerenderingchange", d)
        }
    };
    var YO = a => {
        let b = 0;
        try {
            b |= Tn(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= Wn(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const ZO = "body div footer header html main section".split(" ");

    function $O(a, b, c = null, d = !1, e = !1, f = !1) {
        let h = Tn(a);
        wC(a.navigator ? .userAgent) && (h |= 1048576);
        const k = a.innerWidth;
        k < 1200 && (h |= 65536);
        const l = a.innerHeight;
        l < 650 && (h |= 2097152);
        c && h === 0 && (c = c === 3 ? "left" : "right", (b = aP({
            K: a,
            cj: b,
            Nj: 1,
            position: c,
            V: k,
            W: l,
            Gb: new Set,
            minWidth: 120,
            minHeight: 500,
            Me: d,
            df: e,
            cf: f
        })) ? dA(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : h |= 16);
        return h
    }

    function bP(a) {
        a = dA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function cP(a, b) {
        return pe(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function dP(a, b) {
        return pe(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function eP(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function fP(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function gP(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function hP(a) {
        return `${a.position}-${gP(a.V)}x${gP(a.W)}-${gP(a.scrollY+a.Sb)}Y`
    }

    function iP(a) {
        return `f-${hP({position:a.position,Sb:a.Sb,scrollY:0,V:a.V,W:a.W})}`
    }

    function jP(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function kP(a, b, c) {
        const d = dA(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    h = Math.min(e.bottom + 10, c.W),
                    k = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.V);
                for (var l = c.V * .3; f <= h; f += 10) {
                    if (e > 0 && k < l) {
                        var m = iP({
                            position: "left",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        b.set(m, jP(b.get(m), k))
                    }
                    if (k < c.V && e > c.V - l) {
                        m = iP({
                            position: "right",
                            Sb: f,
                            V: c.V,
                            W: c.W
                        });
                        const n = c.V - e;
                        b.set(m, jP(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    }

    function lP(a, b) {
        const c = b.K,
            d = b.Me,
            e = b.cf;
        var f = `f-${gP(b.V)}x${gP(b.W)}`;
        a.has(f) || (a.set(f, 0), f = eP(c), d || e ? (mP(a, b, f.filter(h => fP(c, h))), nP(c, f.filter(h => !fP(c, h)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : mP(a, b, f))
    }

    function mP(a, b, c) {
        var d = b.Gb;
        const e = b.K;
        dA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) cP(f, d) || kP(f, a, b)
    }

    function oP(a) {
        if (a.V < 1200 || a.W < 650) return null;
        var b = dA(a.K).sideRailAvailableSpace;
        a.cj || lP(b, {
            K: a.K,
            V: a.V,
            W: a.W,
            Gb: a.Gb,
            Me: a.Me,
            cf: a.cf
        });
        const c = [];
        var d = a.W * .9,
            e = co(a.K),
            f = (a.W - d) / 2,
            h = f,
            k = d / 7;
        for (var l = 0; l < 8; l++) {
            var m = c,
                n = m.push;
            a: {
                var p = h;
                var q = a.position,
                    t = b,
                    w = {
                        K: a.K,
                        V: a.V,
                        W: a.W,
                        Gb: a.Gb,
                        df: a.df
                    };
                const I = iP({
                        position: q,
                        Sb: p,
                        V: w.V,
                        W: w.W
                    }),
                    B = hP({
                        position: q,
                        Sb: p,
                        scrollY: e,
                        V: w.V,
                        W: w.W
                    });
                if (t.has(B)) {
                    p = jP(t.get(I), t.get(B));
                    break a
                }
                const J = q === "left" ? 20 : w.V - 20;
                let H = J;q = w.V * .3 / 5 * (q === "left" ? 1 : -1);
                for (let ba = 0; ba < 6; ba++) {
                    var A = pC(w.K.document, {
                            x: Math.round(H),
                            y: Math.round(p)
                        }),
                        D = cP(A, w.Gb),
                        G = dP(A, w.K);
                    if (!D && G !== null) {
                        kP(G, t, w);
                        t.delete(B);
                        break
                    }
                    D || (D = w, A.getAttribute("google-side-rail-overlap") === "true" ? D = !0 : A.getAttribute("google-side-rail-overlap") === "false" || D.df && !ZO.includes(A.tagName.toLowerCase()) ? D = !1 : (G = A.offsetHeight >= D.W * .25, D = A.offsetWidth >= D.V * .9 && G));
                    if (D) t.set(B, Math.round(Math.abs(H - J) + 20));
                    else if (H !== J) H -= q, q /= 2;
                    else {
                        t.set(B, 0);
                        break
                    }
                    H += q
                }
                p = jP(t.get(I), t.get(B))
            }
            n.call(m,
                p);
            h += k
        }
        b = a.Nj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        h = a.minWidth;
        a = a.minHeight;
        n = [];
        k = Array(c.length).fill(0);
        for (m = 0; m < c.length; m++) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[m];) n.pop();
            k[m] = n.length === 0 ? 0 : n[n.length - 1] + 1;
            n.push(m)
        }
        n = [];
        l = c.length - 1;
        m = Array(c.length).fill(0);
        for (p = l; p >= 0; p--) {
            for (; n.length !== 0 && c[n[n.length - 1]] >= c[p];) n.pop();
            m[p] = n.length === 0 ? l : n[n.length - 1] - 1;
            n.push(p)
        }
        n = null;
        for (l = 0; l < c.length; l++)
            if (p = {
                    position: e,
                    width: Math.round(c[l]),
                    height: Math.round((m[l] - k[l] + 1) *
                        d),
                    offsetY: f + k[l] * d
                }, t = p.width >= h && p.height >= a, b === 0 && t) {
                n = p;
                break
            } else b === 1 && t && (!n || p.width * p.height > n.width * n.height) && (n = p);
        return n
    }

    function nP(a, b) {
        const c = dA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    pP(a);
                    for (const e of c.i) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function pP(a) {
        ({
            sideRailAvailableSpace: a
        } = dA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function aP(a) {
        if (a.Ia) return a.Ia.vb(1228, () => oP(a)) || null;
        try {
            return oP(a)
        } catch {}
        return null
    };
    const qP = {
        [27]: 512,
        [26]: 128
    };
    var rP = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return RO(a, c) === 0;
                case 3:
                case 4:
                    return $O(a, !1, c, !0, U(As), U(Or)) === 0;
                case 8:
                    return YO(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || iL(a.location, "google_scr_debug")), !pH(a, b, d);
                case 30:
                    return fJ(a) == 0;
                case 26:
                    return TO(a) === 0;
                case 27:
                    return SO(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        sP = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return RO(a, c);
                case 3:
                case 4:
                    return $O(a, U(Bs), c, !1, U(As));
                case 8:
                    return YO(a);
                case 9:
                    return pH(a, !(b.google_adtest === "on" || iL(a.location, "google_scr_debug")), d);
                case 16:
                    return ou(b, a) ? 0 : 8388608;
                case 30:
                    return fJ(a);
                case 26:
                    return TO(a);
                case 27:
                    return SO(a);
                default:
                    return 32
            }
        },
        tP = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Kb(d)) return !1;
            a = Ae(a);
            if (!a || !rP(a, b, d, c)) return !1;
            b = dA(a);
            if ($n(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        vP = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && uP(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        wP = a => {
            if (!a.hash) return null;
            let b = null;
            Fe(fL, c => {
                !b && iL(a, c) && (b = gL[c])
            });
            return b
        },
        yP = (a, b) => {
            const c = dA(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && Fe(hL, d => {
                !c.debugCardRequested && typeof d === "number" && lL(d, a.location) && (c.debugCardRequested = !0, xP(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        AP = (a, b, c) => {
            if (!b) return null;
            const d = dA(b);
            let e = 0;
            Fe(Lb, f => {
                const h = qP[f];
                h && zP(a, b, f, c) === 0 && (e |= h)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        BP = (a, b, c) => {
            const d = [];
            Fe(Lb, e => {
                const f = zP(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        CP = a => {
            const b = [],
                c = {};
            Fe(a, (d, e) => {
                if ((e = Qn[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        DP = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        zP = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = dA(b),
                h = $n(f, c);
            if (a.google_reactive_ad_format == c || h) e |= 64;
            let k = !1;
            Fe(f.reactiveTypeDisabledByPublisher, (l, m) => {
                String(c) ===
                    String(m) && (k = !0)
            });
            return k && wP(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | sP(b, a, c, d)
        },
        EP = (a, b) => {
            if (a) {
                var c = dA(a),
                    d = {};
                Fe(b, (e, f) => {
                    (f = Qn[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                Fe(Lb, e => {
                    d[Rn[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        FP = (a, b, c) => {
            b = W.Da(b, c);
            return dL(3, window, a).Qc.then(b)
        },
        xP = (a, b, c) => {
            c = W.Da(212, c);
            dL(4, a, b).Qc.then(c)
        },
        GP = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle || (c.adsbygoogle = [],
                Be(c.document, id `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        HP = a => {
            a = a.google_reactive_ad_format;
            return Kb(a) ? "" + a : null
        },
        uP = a => !!HP(a) || a.google_pgb_reactive != null,
        IP = a => {
            a = HP(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function JP(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function KP(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = BP(d, e, c);
        e.google_reactive_plat = f;
        (f = CP(a)) && (e.google_reactive_plaf = f);
        (f = DP(a)) && (e.google_reactive_fba = f);
        (f = bP(d)) && (e.google_plas = f);
        LP(a, e);
        f = wP(b.pubWin.location);
        MP(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.easpi = U(kt);
        e.asro = U(ht);
        e.aihb = U(Gs);
        e.ailel = QO(eu($s));
        e.aiael = QO(eu(Hs));
        e.aifxl = QO(eu(Vs));
        e.aiixl = QO(eu(Xs));
        U(Ys) && (e.slmct = V(at), e.samct = V(Ks));
        U(Rs) || (e.aiict = !0, e.aicel = QO(eu(Ps)));
        U(et) && (e.aipaq = !0);
        U(jt) && (e.aigda = !0);
        V(Is) && (e.aiapm = V(Is));
        V(Js) && (e.aiapmi = V(Js));
        U(ft) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && lH(c) ? (f = oH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = oH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= V(Br) && (e.dap = 3);
        Pj() || qO(b.pubWin.top);
        f = VM(b.pubWin, "rsrai", hy(429, (h, k) => NP(b, d, e.google_ad_client, a, h, k, c)), hy(430, (h, k) => go(b.pubWin, "431", ow, k)));
        b.j.push(f);
        dA(d).wasReactiveTagRequestSent = !0;
        OP(b, a, c)
    }

    function OP(a, b, c) {
        const d = a.D,
            e = Da(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = VM(a.pubWin, "apcnf", hy(353, (f, h) => {
            const k = dc(a.xa.jb, bL());
            var l = a.pubWin,
                m = d.google_ad_client;
            return bf(h.origin) ? mN(l, m, e, f.config, c, k, null) : !1
        }), hy(353, (f, h) => go(a.pubWin, "353", ow, h)));
        a.j.push(b)
    }

    function NP(a, b, c, d, e, f, h) {
        if (!bf(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!XE(b, 1)) return !0;
        f && Dj(6, [f]);
        e = e.amaConfig;
        const k = [],
            l = [],
            m = dA(b);
        let n = null;
        for (let p = 0; p < f.length; p++) {
            if (!f[p]) continue;
            const q = f[p],
                t = q.adFormat;
            m && q.enabledInAsfe && (m.reactiveTypeEnabledInAsfe[t] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = p;
                if (t === 9 && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, PP(d, q));
                    const w = new qH;
                    if (jH(w, q) && w.B(q)) {
                        n = w;
                        continue
                    }
                }
                k.push(q);
                l.push(t)
            }
        }
        k.length && FP(a.xa.Ug,
            522, p => {
                QP(k, b, p, d, h)
            });
        e && mN(b, c, d, e, h, a.xa.jb, n);
        return !0
    }

    function PP(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Da(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function QP(a, b, c, d, e) {
        const f = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = c.configProcessorForAdFormat(l);
            l && n && m && (k.pubVars = PP(d, k), delete k.google_reactive_sra_index, f.push(l), gy(466, () => n.verifyAndProcessConfig(b, k, e)))
        }
    }

    function LP(a, b) {
        const c = [];
        let d = !1;
        Fe(Qn, (e, f) => {
            let h;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (h = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = h ? h.replace(/,/g, "+") : "+", d || (d = !!h))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function MP(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Wd("script");
    var RP = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function SP(a, b) {
        if (!ou(b, a)) return () => {};
        a = TP(b, a);
        if (!a) return () => {};
        const c = TE();
        b = Nb(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => bb(c, d)
    }

    function TP(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !tu.test(a.className);) a = a.parentElement;
        return a
    }

    function UP(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const h = {},
                k = a.childNodes[f];
            var c = k.style,
                d = ["width", "height"];
            for (let l = 0; l < d.length; l++) {
                const m = "google_ad_" + d[l];
                if (!h.hasOwnProperty(m)) {
                    var e = Ne(c[d[l]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (h[m] = e)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function VP(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function WP(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = TE();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, gy(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const h = UP(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const k = UP(e, f);
                    !k && h && e.childNodes.length == 1 ? (VP(h, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", GP(e, f, b)) : k && h && k != h && (VP(h, !1), VP(k, !0))
                })
        }
    }
    var XP = class extends Q {
        constructor() {
            super(...arguments);
            this.g = null
        }
        J(a) {
            const b = HE();
            if (!ME(b, 27, !1)) {
                NE(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    WP(this, a)
                };
                Hb(a, "resize", c);
                yo(this, () => {
                    Ib(a, "resize", c)
                })
            }
        }
    };
    var YP = class {
        constructor(a, b) {
            this.K = a;
            this.wb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && r.clearInterval(this.g);
            var a = ru(this.K, this.wb);
            su(this.K, this.wb, a);
            a = nu(this.wb, this.K);
            a != null && a.x === 0 || r.clearInterval(this.g)
        }
    };

    function ZP(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function $P(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var aQ = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.l,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? He(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        bQ;
    var cQ = class extends O {
        g() {
            return K(this, 10)
        }
    };
    var dQ = class extends O {
        g() {
            return Nh(this, 1, Vg, y())
        }
    };
    dQ.O = [1];
    var eQ = class extends O {};
    eQ.O = [19];
    var fQ = [13, 14];
    let gQ = void 0;

    function hQ() {
        Mi(gQ, Pi);
        return gQ
    }

    function iQ(a) {
        Mi(gQ, Pk);
        gQ = a
    };

    function jQ(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Jb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function kQ(a = r) {
        return a.ggeac || (a.ggeac = {})
    };

    function lQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function mQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function nQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function oQ(a = Ee()) {
        return b => He(`${b} + ${a}`) % 1E3
    };

    function pQ(a, b) {
        a.g = Bn(14, b, () => {})
    }
    class qQ {
        constructor() {
            this.g = () => {}
        }
    }

    function rQ(a) {
        P(qQ).g(a)
    };

    function sQ(a = kQ()) {
        Cn(P(Dn), a);
        tQ(a);
        pQ(P(qQ), a);
        P(cu).i()
    }

    function tQ(a) {
        const b = P(cu);
        b.j = (c, d) => Bn(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => Bn(6, a, () => 0)(c, d, 1);
        b.C = (c, d) => Bn(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Bn(8, a, () => [])(c, d, 1);
        b.l = (c, d) => Bn(17, a, () => [])(c, d, 1);
        b.i = () => {
            Bn(15, a, () => {})(1)
        }
    };

    function uQ(a, b, c) {
        var d = {
            [0]: oQ(ff(b).toString())
        };
        if (c) {
            c = wO(new AO(b), "__gads", c) || "";
            bQ || (bQ = new aQ);
            b = bQ;
            $P(b, c);
            rQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? oQ(e)(f) : void 0
        }
        d = En(a, d);
        In.na(1085, oF(P(mF), a, d))
    }

    function vQ(a, b) {
        uQ(20, a, b);
        uQ(17, a, b)
    }

    function wQ(a) {
        const b = P(Dn).g();
        a = ZP(a);
        return b.concat(a).join(",")
    }

    function xQ(a) {
        const b = tk();
        b && (a.debug_experiment_id = b)
    };
    var yQ = class {
        constructor(a) {
            this.i = 0;
            this.g = this.I = null;
            this.H = 0;
            this.j = [];
            this.qc = this.B = "";
            this.l = this.G = null;
            this.F = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ma = a.ma;
            this.xa = a.xa;
            this.Wa = a.Wa;
            this.ea = a.ea
        }
    };

    function zQ(a, b, c) {
        c = QK(a, UF(b, {
            idpcApplies: c && !RM()
        }));
        c = Gi(c, 2, b.tcString);
        c = Gi(c, 4, b.addtlConsent || "");
        Hh(c, 7, zg(b.internalErrorState));
        c = !XF(b, ["2", "7", "9", "10"], 3);
        vi(a, 8, c);
        c = !XF(b, ["3", "4"], 0);
        vi(a, 9, c);
        b.gdprApplies != null && vi(a, 3, b.gdprApplies)
    }

    function AQ(a) {
        const b = new cG(a.pubWin, {
            timeoutMs: -1,
            Ph: !0
        });
        if (!ZF(b)) return Promise.resolve(null);
        const c = HE(),
            d = ME(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const h = ME(c, 25, []);
            h.push(f);
            NE(c, 25, h)
        });
        d || d === null || (NE(c, 24, null), b.addEventListener(f => {
            if (TF(f)) {
                NE(c, 24, f);
                zQ(a.g, f, K(a.ma, 6));
                for (const h of ME(c, 25, [])) h.resolve(f);
                NE(c, 25, [])
            } else NE(c, 24, null)
        }));
        return e
    };

    function BQ(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var Rk = {
        Yn: 0,
        Un: 1,
        Vn: 9,
        Rn: 2,
        Sn: 3,
        Xn: 5,
        Wn: 7,
        Tn: 10
    };
    var CQ = class extends O {},
        DQ = Qi(CQ),
        EQ = [1, 3];
    const FQ = id `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function GQ(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(k) {
                return h.g(k).then(({
                    data: l
                }) => l)
            }
            const e = Ce("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = fc(FQ).toString();
            const f = (new URL(FQ.toString())).origin,
                h = lN({
                    destination: a,
                    Na: e,
                    origin: f,
                    pe: "goog:gRpYw:doubleclick"
                });
            h.g("goog:topics:frame:handshake:ack").then(({
                data: k
            }) => {
                k === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function HQ(a, b, c) {
        var d = W,
            e = U(Mt);
        const {
            Uc: f,
            Tc: h
        } = IQ(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(k => {
            let l = h;
            if (k instanceof Uint8Array) l || (l = !(f instanceof Uint8Array && mb(k, f)));
            else if (Qk()(k)) l || (l = k !== f);
            else return d.ba(989, Error(JSON.stringify(k))), 7;
            if (l && c) try {
                var m = new CQ;
                var n = Ei(m, 2, uk());
                k instanceof Uint8Array ? Zh(n, 1, EQ, ag(k, !1, !1)) : Zh(n, 3, EQ, zg(k));
                c.setItem("goog:cached:topics",
                    Ji(n))
            } catch {}
            return k
        }), b.getTopicsPromise = a);
        return f && !h ? Promise.resolve(f) : b.getTopicsPromise
    }

    function IQ(a) {
        if (!a) return {
            Uc: null,
            Tc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Uc: null,
                Tc: !0
            };
            const n = DQ(m);
            let p;
            const q = bi(n, EQ);
            switch (q) {
                case 0:
                    p = null;
                    break;
                case 1:
                    a = n;
                    var b = bi(n, EQ) === 1 ? 1 : -1;
                    const w = a.U;
                    let A = w[x];
                    const D = Fh(w, A, b),
                        G = ag(D, !0, !!(A & 34));
                    G != null && G !== D && Ih(w, A, b, G);
                    var c = G;
                    var d = c == null ? Df() : c;
                    b = Uint8Array;
                    Cf(zf);
                    var e = d.g;
                    if (e == null || yf(e)) var f = e;
                    else {
                        if (typeof e === "string") {
                            vf.test(e) && (e = e.replace(vf, xf));
                            let I;
                            I = atob(e);
                            const B = new Uint8Array(I.length);
                            for (e = 0; e < I.length; e++) B[e] = I.charCodeAt(e);
                            var h = B
                        } else h = null;
                        f = h
                    }
                    var k = f;
                    var l = k == null ? k : d.g = k;
                    p = new b(l || 0);
                    break;
                case 3:
                    p = qi(n, bi(n, EQ) === 3 ? 3 : -1);
                    break;
                default:
                    wd(q, void 0)
            }
            const t = oi(n, 2) + 6048E5 < uk();
            return {
                Uc: p,
                Tc: t
            }
        } catch {
            return {
                Uc: null,
                Tc: !0
            }
        }
    };

    function JQ(a) {
        return U(Ct) && a ? !!a.match(du(At)) : !1
    }

    function KQ(a, b) {
        if (!U(Kt) && (!U(Dt) || b.g())) {
            b = mQ("shared-storage", a.document);
            const c = mQ("browsing-topics", a.document);
            if (b || c) try {
                return GQ(a)
            } catch (d) {
                W.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function LQ(a, b, c, d, e, f) {
        if (mQ("browsing-topics", b.document) && e && !U(Jt) && !JQ(f ? .label))
            if (MQ(c, d)) {
                a.l = 1;
                const h = sj(c, b);
                c = e.then(async k => {
                    await HQ(k, b, h).then(l => {
                        a.l = l
                    })
                });
                U(Lt) && (d = V(Nt), d > 0 ? await Promise.race([c, hf(d)]) : await c)
            } else a.l = 5
    }

    function MQ(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !SE() && !K(a, 9) && !K(a, 13) && !K(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !K(a, 14)
    };
    var OQ = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => NQ(d));
        return VM(a, "adpnt", (e, f) => {
            if (bo(f, c.contentWindow)) {
                e = fo(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function NQ(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function PQ(a, b, {
        Rg: c,
        Sg: d
    }) {
        return !vj(a.g) || K(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function QQ(a, b, {
        Rg: c,
        Sg: d
    }) {
        if (!K(b, 8) && (!c && b.g() || !d)) return xj("__eoi", a.g) ? ? void 0
    }
    var RQ = class {
        constructor(a) {
            this.g = a
        }
    };

    function SQ(a, b, c) {
        try {
            if (!bf(c.origin) || !bo(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ua[d]) && a.Ia.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class TQ extends Q {
        constructor(a, b) {
            var c = W,
                d = ow;
            super();
            this.j = a;
            this.g = b;
            this.Ia = c;
            this.ta = d;
            this.ua = {};
            this.Fa = this.Ia.Da(168, (e, f) => void SQ(this, e, f));
            this.ib = this.Ia.Da(169, (e, f) => go(this.j, "ras::xsf", this.ta, f));
            this.T = [];
            this.ca(this.ua);
            this.T.push(UM(this.j, "sth", this.Fa, this.ib))
        }
        i() {
            for (const a of this.T) a();
            this.T.length = 0;
            super.i()
        }
    };
    var UQ = class extends TQ {};

    function VQ(a, b, c = null) {
        return new WQ(a, b, c)
    }
    var WQ = class extends UQ {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = P(mF);
            this.l = () => {};
            Hb(this.g, "load", this.l)
        }
        i() {
            Ib(this.g, "load", this.l);
            super.i()
        }
        ca(a) {
            a["adsense-labs"] = b => {
                if (b = fo(b).settings)
                    if (b = Li(fj, JSON.parse(b)), F(b, 1) != null) {
                        var c = b.U;
                        if (ei(c, c[x], ej, 4, 3, !1, !0).length > 0) {
                            var d = c = fi(b, ej, 4, y(lg)),
                                e = this.B;
                            const k = new am;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    vi(k, 1, !0);
                                    break;
                                case 2:
                                    vi(k, 2, !0)
                            }
                            f = new bm;
                            f = E(f, 1, cm, k);
                            sF(e, f);
                            f = this.j;
                            e = this.A;
                            if (!ME(HE(), 37, !1)) {
                                f = new AO(f);
                                for (var h of c) switch (h.getVersion()) {
                                    case 1:
                                        xO(f,
                                            "__gads", h, e);
                                        break;
                                    case 2:
                                        xO(f, "__gpi", h, e)
                                }
                                NE(HE(), 37, !0)
                            }
                            Hh(b, 4)
                        }
                        if (h = z(b, ej, 5)) c = this.j, ME(HE(), 40, !1) || (c = new RQ(c), f = oi(h, 2) - Date.now() / 1E3, f = {
                            Bd: Math.max(f, 0),
                            path: L(h, 3),
                            domain: L(h, 4),
                            Sd: !1
                        }, yj("__eoi", h.getValue(), f, c.g), NE(HE(), 40, !0));
                        Hh(b, 5);
                        h = this.j;
                        c = L(b, 1) || "";
                        if (VK({
                                win: h,
                                Va: hQ()
                            }).g != null) {
                            f = VK({
                                win: h,
                                Va: hQ()
                            });
                            f = f.g != null ? jQ(f.getValue()) : {};
                            b !== null && (f[c] = Ki(b));
                            try {
                                h.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (k) {}
                        }
                    }
            }
        }
    };

    function XQ(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        YQ(a)
    }

    function ZQ(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function YQ(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function $Q(a, b) {
        b = Me(b.r_nh);
        a.B = b == null ? 0 : b;
        if (a.B <= 0) return "1";
        a.I = ak(a.F).y;
        a.H = co(a.j);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Yn(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.B);
        a.g.style.height = a.B + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Tj(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Tj(a.g, {
            clip: b
        });
        Tj(a.l, {
            clip: b
        });
        return "0"
    }
    class aR extends UQ {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.ea;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ka = this.hb = !1;
            this.ia = this.H = this.B = 0;
            this.Mc = this.A / 5;
            this.I = ak(this.F).y;
            this.Bb = Db(hy(651, () => {
                this.I = ak(this.F).y;
                var c = this.H;
                this.H = co(this.j);
                this.A < this.B ? (c = this.H - c, c > 0 && (this.ia += c, this.ia >= this.Mc ? (XQ(this), ZQ(this, this.B)) : (this.A = Math.min(this.B, this.A + c), ZQ(this, c), YQ(this)))) :
                    Ib(this.j, "scroll", this.M)
            }), this);
            this.M = () => {
                var c = this.Bb;
                mj.requestAnimationFrame ? mj.requestAnimationFrame(c) : c()
            }
        }
        ca(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = fo(b);
                this.hb || (this.hb = !0, b = $Q(this, b), b === "0" && Hb(this.j, "scroll", this.M, Eb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ka || (this.Ka = !0, XQ(this), Ib(this.j, "scroll", this.M))
            }
        }
        i() {
            this.M && Ib(this.j, "scroll", this.M, Eb);
            super.i()
        }
    };

    function bR(a) {
        const b = a.I.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class cR extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.B = 0;
            this.l = bR(this);
            this.H = Cb(this.F, this);
            this.g = hy(433, () => {
                var d = this.H;
                mj.requestAnimationFrame ? mj.requestAnimationFrame(d) : d()
            });
            Hb(this.j, "scroll", this.g, Eb)
        }
        F() {
            const a = bR(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (WM(c, "ig", b, "*", 2), ++this.B >= 10 && this.g && Ib(this.j, "scroll", this.g, Eb))
            }
            this.l = a
        }
    };

    function dR(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Tj(a, "transition", b.join(","))
    }
    var eR = Ab(function() {
        var a = he(document, "DIV"),
            b = ae ? "-webkit" : $d ? "-moz" : Yd ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!Tc.test("div")) throw Error("");
        if ("DIV" in Vc) throw Error("");
        b = void 0;
        var d = "";
        if (c)
            for (k in c)
                if (Object.prototype.hasOwnProperty.call(c, k)) {
                    if (!Tc.test(k)) throw Error("");
                    var e = c[k];
                    if (e != null) {
                        var f = k;
                        if (e instanceof rb) e = vb(e);
                        else if (f.toLowerCase() == "style") {
                            if (!Da(e)) throw Error("");
                            if (!(e instanceof Ac)) {
                                let l = "";
                                for (var h in e)
                                    if (Object.prototype.hasOwnProperty.call(e, h)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(h)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${h}`);
                                        let m = e[h];
                                        m != null && (m = Array.isArray(m) ? m.map(Cc).join(" ") : Cc(m), l += `${h}:${m};`)
                                    }
                                e = l ? new Ac(l, yc) : Bc
                            }
                            e = zc(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Uc)
                                if (e instanceof cc) e = fc(e).toString();
                                else if (e instanceof nc) e = pc(e);
                            else if (typeof e === "string") e = uc(e).toString();
                            else throw Error("");
                        }
                        f = `${f}="` + Sb(String(e)) + '"';
                        d += " " + f
                    }
                }
        var k =
            "<div" + d;
        b == null ? b = [] : Array.isArray(b) || (b = [b]);
        Qb.div === !0 ? k += ">" : (h = Sc(b), k += ">" + Nc(h).toString() + "</div>");
        k = Pc(k);
        md(a, k);
        return Wj(a.firstChild, "transition") != ""
    });

    function fR(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function gR(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function hR(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(iR, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function jR(a) {
        var b = hR(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var kR = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        wa(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function lR(a) {
        let b = a.T;
        a.G = () => {};
        mR(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : De(c, b)
            } catch (h) {
                a.g.wa("c")
            }
            const f = nR(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.M = !0);
            if (d && !f && oR(e)) {
                gR(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && pR(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !xe(b)) {
                        gR(a.g, "c");
                        break
                    }
                } catch (h) {
                    gR(a.g,
                        "c");
                    break
                }
            }
        }
        a.B && a.A && qR(a);
        return a.g
    }

    function rR(a) {
        function b(n) {
            for (let p = 0; p < n.length; p++) Tj(l, n[p], "0px")
        }

        function c() {
            sR(d, h, k);
            !l || m || k || (b(tR), b(uR))
        }
        const d = a.C;
        d.style.overflow = a.Pc ? "visible" : "hidden";
        a.B && (a.F ? (dR(d, vR()), dR(a.F, vR())) : dR(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.I !== null && (d.style.opacity = String(a.I));
        const e = a.width != null && a.j != null && (a.Qd || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Qd || a.i > a.height) ? a.i : null;
        if (a.H) {
            const n =
                a.H.length;
            for (let p = 0; p < n; p++) sR(a.H[p], e, f)
        }
        const h = a.j,
            k = a.i,
            l = a.F,
            m = a.M;
        a.B ? r.setTimeout(c, 1E3) : c()
    }

    function wR(a) {
        if (a.A && !a.ca || a.j == null && a.i == null && a.I == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        lR(a);
        a.A = b;
        if (!b || a.check != null && !hR(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.B = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        rR(a);
        return lR(a)
    }

    function pR(a, b) {
        let c = !1;
        b.display == "none" && (gR(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || gR(a.g, "v");
        b.overflow == "hidden" && gR(a.g, "o");
        b.position == "absolute" ? (gR(a.g, "a"), c = !0) : b.position == "fixed" && (gR(a.g, "f"), c = !0);
        return c
    }

    function mR(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const h = b.parentElement.childNodes;
        for (let l = 0; l < h.length; l++) {
            var k = h[l];
            k == b ? e = !0 : (k = xR(a, k, c), d |= k, e && (f |= k))
        }
        f & 1 && (d & 2 && fR(a.g, 0, "o"), d & 4 && fR(a.g, 1, "o"));
        return !(d & 1)
    }

    function nR(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            a.g.wa("s")
        }
        var f = c.getAttribute("width"),
            h = Me(f),
            k = c.getAttribute("height"),
            l = Me(k),
            m = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = mR(a, c, b);
        var n = d && d.width;
        const p = d && d.height;
        var q = e && e.width,
            t = e && e.height,
            w = Ne(n) == a.width && Ne(p) == a.height;
        n = w ? n : q;
        t = w ? p : t;
        q = Ne(n);
        w = Ne(t);
        h = a.width !== null && (q !== null && a.width >= q || h !== null && a.width >= h);
        w = a.height !== null && (w !== null && a.height >= w || l !== null && a.height >= l);
        l = !b && oR(d);
        w = b || w || l || !(f ||
            n || d && (!yR(String(d.minWidth)) || !zR(String(d.maxWidth))));
        m = b || h || l || m || !(k || t || d && (!yR(String(d.minHeight)) || !zR(String(d.maxHeight))));
        AR(a, 0, w, c, "width", f, a.width, a.j);
        BR(a, 0, "d", w, e, d, "width", n, a.width, a.j);
        BR(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        BR(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.hf ? (c = /^html|body$/i.test(c.nodeName), f = Ne(p), k = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, k = a.i != null && d && f && Math.round(f) !== a.i && !k && d.minHeight !== "100%", a.A && !c && k && (e.setProperty("height",
            "auto", "important"), d && !yR(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !zR(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (AR(a, 1, m, c, "height", k, a.height, a.i), BR(a, 1, "d", m, e, d, "height", t, a.height, a.i), BR(a, 1, "m", m, e, d, "minHeight", e && e.minHeight, a.height, a.i), BR(a, 1, "M", m, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function qR(a) {
        function b() {
            if (c > 0) {
                var m = De(e, d) || {
                    width: 0,
                    height: 0
                };
                const n = Ne(m.width);
                m = Ne(m.height);
                n !== null && f !== null && k && k(0, f - n);
                m !== null && h !== null && k && k(1, h - m);
                --c
            } else r.clearInterval(l), k && (k(0, 0), k(1, 0))
        }
        let c = 31.25;
        const d = a.T,
            e = a.C,
            f = a.j,
            h = a.i,
            k = a.G;
        let l;
        r.setTimeout(() => {
            l = r.setInterval(b, 16)
        }, 990)
    }

    function xR(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = De(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function AR(a, b, c, d, e, f, h, k) {
        if (k != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = Me(f);
                f == null && (a.g.wa("n"), fR(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.B) {
                            const l = Math.max(f + k - (h || 0), 0),
                                m = a.G;
                            a.G = (n, p) => {
                                n == b && vd(d, e, String(l - p));
                                m && m(n, p)
                            }
                        } else vd(d, e, String(k))
                } else fR(a.g, b, "d")
        }
    }

    function BR(a, b, c, d, e, f, h, k, l, m) {
        if (m != null) {
            f = f && f[h];
            typeof f != "string" || (c == "m" ? yR(f) : zR(f)) || (f = Ne(f), f == null ? gR(a.g, "p") : l != null && gR(a.g, f == l ? "E" : "e"));
            if (typeof k == "string") {
                if (c == "m" ? yR(k) : zR(k)) return;
                k = Ne(k);
                k == null && (a.g.wa("p"), fR(a.g, b, c))
            }
            if (k != null)
                if (d && e) {
                    if (a.A)
                        if (a.B) {
                            const n = Math.max(k + m - (l || 0), 0),
                                p = a.G;
                            a.G = (q, t) => {
                                q == b && (e[h] = n - t + "px");
                                p && p(q, t)
                            }
                        } else e[h] = m + "px"
                } else fR(a.g, b, c)
        }
    }
    var GR = class {
        constructor(a, b, c, d, e, f, h) {
            this.pubWin = a;
            this.C = b;
            this.H = c;
            this.l = new CR(this.C);
            this.F = this.G = null;
            this.M = !1;
            this.T = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new CR(this.C);
            this.A = h;
            this.ca = DR(this.l, d.sf, d.height, d.Jc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = ER(d.width);
            this.i = ER(d.height);
            this.I = this.A ? ER(d.opacity) : null;
            this.check = d.check;
            this.Jc = !!d.Jc;
            this.B = d.sf == "animate" && !FR(this.l, this.i, this.Jc) && eR();
            this.Pc = !!d.Pc;
            this.g = new kR;
            FR(this.l, this.i, this.Jc) && gR(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && gR(this.g, "b");
            this.Qd = !!d.Qd;
            this.hf = !!d.hf
        }
    };

    function FR(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, ER(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var CR = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Ae(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (h) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const h = d.ownerDocument,
                    k = h && (h.defaultView || h.parentWindow);
                (d = k && k.frameElement) && (f = d.getBoundingClientRect())
            } catch (h) {
                break
            }
            this.i = e;
            c = c || r;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && UO(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function DR(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return FR(a, c, d)
        }
    }

    function oR(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function HR(a, b, c, d) {
        return wR(new GR(a, b, d, c, null, null, !0))
    }
    var IR = new kR("s", ""),
        iR = RegExp("[lonvafrbpEe]", "g");

    function zR(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function yR(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function sR(a, b, c) {
        b !== null && Me(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Me(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var tR = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        uR = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function vR() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = tR;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = uR;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function ER(a) {
        return typeof a === "string" ? Me(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var JR = class extends UQ {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        ca(a) {
            a["resize-me"] = (b, c) => {
                b = fo(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = Me(b.r_nw),
                        f = Me(b.r_nh),
                        h = Me(b.r_no);
                    h != null || e !== 0 && f !== 0 || (h = 0);
                    var k = b.r_str;
                    k = k ? k : null; {
                        var l = /^true$/.test(b.r_ao),
                            m = /^true$/.test(b.r_ifr),
                            n = /^true$/.test(b.r_cab);
                        const t = window;
                        if (t)
                            if (k === "no_rsz") b.err = "7", e = !0;
                            else {
                                var p = new CR(this.g);
                                if (p.g) {
                                    var q = p.getWidth();
                                    q != null && (b.w = q);
                                    q = p.getHeight();
                                    q != null && (b.h = q);
                                    DR(p, k, f, n) ? (p = this.l, d = HR(t, p, {
                                        width: e,
                                        height: f,
                                        opacity: h,
                                        check: d,
                                        sf: k,
                                        Pc: l,
                                        Qd: m,
                                        Jc: n
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && v(p, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = jR(d), b.frsz = (k === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: k,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };

    function KR(a, b, c) {
        return new IntersectionObserver(c, b)
    }

    function LR(a, b, c) {
        Hb(a, b, c);
        return () => Ib(a, b, c)
    }
    let MR = null;

    function NR() {
        MR = uk()
    }

    function OR(a, b) {
        return b ? MR === null ? (Hb(a, "mousemove", NR, {
            passive: !0
        }), Hb(a, "scroll", NR, {
            passive: !0
        }), NR(), !1) : uk() - MR >= b * 1E3 : !1
    }

    function PR({
        win: a,
        element: b,
        B: c,
        C: d,
        A: e = 0,
        Ra: f,
        i: h,
        g: k = {},
        l = !0,
        j: m = KR
    }) {
        let n, p = !1,
            q = !1;
        const t = [],
            w = m(a, k, (A, D) => {
                try {
                    const G = () => {
                        t.length || (d && (t.push(LR(b, "mouseenter", () => {
                            p = !0;
                            G()
                        })), t.push(LR(b, "mouseleave", () => {
                            p = !1;
                            G()
                        }))), t.push(LR(a.document, "visibilitychange", () => G())));
                        const I = OR(a, e),
                            B = WO(a.document);
                        if (q && !p && !I && !B) n = n || a.setTimeout(() => {
                            OR(a, e) ? G() : (f(), D.disconnect())
                        }, c * 1E3);
                        else if (l || p || I || B) a.clearTimeout(n), n = void 0
                    };
                    ({
                        isIntersecting: q
                    } = A[A.length - 1]);
                    G()
                } catch (G) {
                    h && h(G)
                }
            });
        w.observe(b);
        return () => {
            w.disconnect();
            for (const A of t) A();
            n != null && a.clearTimeout(n)
        }
    };

    function QR(a, b, c, d, e) {
        return new RR(a, b, c, d, e)
    }

    function SR(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && bo(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new gj(f)
            } catch (h) {
                return
            }
            a.dispose();
            f = ni(a.l, 1);
            f <= 0 || (a.B = PR({
                win: a.j,
                element: e,
                B: f - .2,
                C: !se(),
                A: ni(a.l, 3),
                Ra: () => void TR(a, e),
                i: h => In.ba(1223, h, void 0, void 0),
                g: {
                    threshold: pi(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }

    function TR(a, b) {
        a.H();
        setTimeout(In.Da(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = je(b);
            c && tu.test(c.className) || (c = he(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            U(us) ? (UR(a, c, b), a.A.no_resize = !0, Jo(CG(c), "filled", () => {
                ie(b)
            })) : ie(b);
            GP(c, a.A, a.j)
        }), 200)
    }

    function UR(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var RR = class extends UQ {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.B = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.T.push(UM(b, "sth", this.Fa, this.ib))
        }
        ca(a) {
            a.av_ref = (b, c) => SR(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.B && this.B()
        }
    };
    const VR = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function WR(a) {
        if (U(vs)) {
            var b = je(a.ea);
            b && tu.test(b.className) && Jo(CG(b), "unfilled", () => {
                var c;
                if (c = U(vs))
                    if (c = !ME(HE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= V(Ds) && (a.g ? vO(new AO(a.pubWin), a.g) : !1)) c = (c = a.g ? sj(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= uk() : !1;c && (c = (c = Vn(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    const f = {};
                    for (var e of VR) d[e] && (f[e] = d[e]);
                    f.sso = !0;
                    GP(c, f, a.pubWin);
                    NE(HE(), 42, !0);
                    if (c = a.g ? sj(a.g, a.pubWin) : null) e = uk() + V(Cs) * 36E5, c.setItem("google_survey_fcap", String(e))
                }
            })
        }
    };
    const YR = /^blogger$/,
        ZR = /^wordpress(.|\s|$)/i,
        $R = /^joomla!/i,
        aS = /^drupal/i,
        bS = /\/wp-content\//,
        cS = /\/wp-content\/plugins\/advanced-ads/,
        dS = /\/wp-content\/themes\/genesis/,
        eS = /\/wp-content\/plugins\/genesis/;

    function PU(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (cS.test(e)) return 5;
                if (eS.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", dS.test(e) || eS.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (YR.test(f)) return 1;
                if (ZR.test(f)) return 2;
                if ($R.test(f)) return 3;
                if (aS.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", bS.test(d))) return 2;
        return 0
    };
    let QU = navigator;

    function RU(a) {
        let b = 1;
        let c;
        if (a !== void 0 && a !== "")
            for (b = 0, c = a.length - 1; c >= 0; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = d !== 0 ? b ^ d >> 21 : b
            }
        return b
    }

    function SU(a, b) {
        if (!a || a === "none") return 1;
        a = String(a);
        "auto" === a && (a = b, "www." === a.substring(0, 4) && (a = a.substring(4, a.length)));
        return RU(a.toLowerCase())
    }
    const TU = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        UU = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        VU = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function WU(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var XU = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function YU() {
        const a = new XU;
        "SVGElement" in r && "createElementNS" in r.document && a.set(0);
        const b = Re();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        "TextDecoder" in r && "TextEncoder" in r && a.set(4);
        return WU(a)
    };
    const ZU = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        $U = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function aV(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return ZU.get(b.type) ? ? null
        } catch {}
        return $U.get(a.performance ? .navigation ? .type) ? ? null
    };
    var bV = class extends O {
        constructor() {
            super()
        }
    };

    function cV(a, b) {
        if (Ud()) {
            var c = a.document.documentElement.lang;
            dV(a) ? eV(b, ff(a), !0, "", c) : (new MutationObserver((d, e) => {
                dV(a) && (eV(b, ff(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function dV(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function eV(a, b, c, d, e) {
        kj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function fV(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const gV = /[+, ]/;

    function hV(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            h = jf(d),
            k = !1,
            l = "",
            m = 1;
        a: {
            m = c.google_ad_width || d.google_ad_width;
            var n = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) k = !1;
            else {
                k = d.document;
                l = k.documentElement;
                if (m && n) {
                    var p = 1;
                    let t = 1;
                    d.innerHeight ? (p = d.innerWidth, t = d.innerHeight) : l && l.clientHeight ? (p = l.clientWidth, t = l.clientHeight) : k.body && (p = k.body.clientWidth, t = k.body.clientHeight);
                    if (t > 2 * n || p > 2 * m) {
                        k = !1;
                        break a
                    }
                }
                k = !0
            }
        }
        l = k;
        m = EE(h).Te;
        n = d.top == d ? 0 : xe(d.top) ? 1 : 2;
        p = 4;
        l || n !== 1 ? l ||
            n !== 2 ? l && n === 1 ? p = 7 : l && n === 2 && (p = 8) : p = 6 : p = 5;
        m && (p |= 16);
        l = String(p);
        m = GE(d);
        n = !!c.google_page_url;
        e.google_iframing = l;
        m !== 0 && (e.google_iframing_environment = m);
        if (!n && f.domain === "ad.yieldmanager.com") {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); l.indexOf("%") > -1;) try {
                l = decodeURIComponent(l)
            } catch (t) {
                break
            }
            c.google_page_url = l;
            n = !!l
        }
        n ? (e.google_page_url = c.google_page_url, e.google_page_location = (k ? f.referrer : f.URL) || "EMPTY") : (k && xe(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = k ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var q = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            q = null
        } else q = null;
        e.google_last_modified_time = q;
        d = h === h.top ? h.document.referrer : (d = Lj()) && d.referrer || "";
        e.google_referrer_url = d;
        FE(e, c);
        U(Dt) && !b.g() ? e = "pagead2.googlesyndication.com" : (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7,
            e.length) : e.indexOf("https://") == 0 && (e = e.substring(8, e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in pO), e.length >= 2 && (d = d || e[e.length - 2] in pO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net");
        b = iV(a, b);
        d = a.D;
        f = d.google_ad_channel;
        h = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && jV.test(f) && (h = "/pagead/lopri?");
        e = `https://${e}${h}`;
        a = K(a.ma, 9) && c.google_debug_params ? c.google_debug_params :
            "";
        a = fk(b, e + a);
        return c.google_ad_url = a
    }

    function kV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? ge(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && xe(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function lV(a, b) {
        var c = wQ(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function mV(a, b) {
        a = (a = Ae(a.pubWin)) && a.document ? sO(a.document, a) : new rd(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function nV(a) {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function oV(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            h = jf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var k;
        (k = Lj(e)) && Da(k.data) && typeof k.data.type === "string" ? (k = k.data.type.toLowerCase(), k = k == "doubleclick" || k == "adsense" ? null : k) : k = null;
        k && (b.apn = k.substr(0, 10));
        h = EE(h);
        b.url || b.loc || !h.url || (b.url = h.url, h.Te || (b.usrc = 1));
        h.url != (b.loc || b.url) && (b.top = h.url);
        a.qc && (b.etu = a.qc);
        c = f ? sj(c, f) : null;
        (c = AP(d, f, c)) && (b.fc = c);
        if (!mk(d)) {
            c = a.pubWin.document;
            h = "";
            if (c.documentMode &&
                (k = qe(new ce(c), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", c.body)) {
                c.body.appendChild(k);
                try {
                    const ra = k.contentWindow.document;
                    ra.open();
                    var l = Pc("<!DOCTYPE html>");
                    ra.write(Nc(l));
                    ra.close();
                    h += ra.documentMode
                } catch (ra) {}
                c.body.removeChild(k)
            }
            b.docm = h
        }
        let m, n, p, q, t, w, A, D, G, I;
        try {
            m = e.screenX, n = e.screenY
        } catch (ra) {}
        try {
            p = e.outerWidth, q = e.outerHeight
        } catch (ra) {}
        try {
            t = e.innerWidth, w = e.innerHeight
        } catch (ra) {}
        try {
            A = e.screenLeft, D = e.screenTop
        } catch (ra) {}
        try {
            t =
                e.innerWidth, w = e.innerHeight
        } catch (ra) {}
        try {
            G = e.screen.availWidth, I = e.screen.availTop
        } catch (ra) {}
        b.brdim = [A, D, m, n, G, I, p, q, t, w].join();
        l = 0;
        r.postMessage === void 0 && (l |= 1);
        l > 0 && (b.osd = l);
        b.vis = UO(e.document);
        l = a.ea;
        e = uP(d) ? IR : wR(new GR(e, l, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = jR(e);
        if (!uP(d) && (e = nk(d), e != null)) {
            l = 0;
            a: {
                try {
                    {
                        var B = d.google_async_iframe_id;
                        const ra = window.document;
                        if (B) var J = ra.getElementById(B);
                        else {
                            var H = ra.getElementsByTagName("script"),
                                ba = H[H.length - 1];
                            J = ba && ba.parentNode || null
                        }
                    }
                    if (B = J) {
                        J = [];
                        H = 0;
                        for (var db = Date.now(); ++H <= 100 && Date.now() - db < 50 && (B = kV(B));) B.nodeType === 1 && J.push(B);
                        var ya = J;
                        b: {
                            for (db = 0; db < ya.length; db++) {
                                c: {
                                    var ha = ya[db];
                                    try {
                                        if (ha.parentNode && ha.offsetWidth > 0 && ha.offsetHeight > 0 && ha.style && ha.style.display !== "none" && ha.style.visibility !== "hidden" && (!ha.style.opacity || Number(ha.style.opacity) !== 0)) {
                                            const ra = ha.getBoundingClientRect();
                                            var ma = ra.right > 0 && ra.bottom > 0;
                                            break c
                                        }
                                    } catch (ra) {}
                                    ma = !1
                                }
                                if (!ma) {
                                    var hb = !1;
                                    break b
                                }
                            }
                            hb = !0
                        }
                        if (hb) {
                            b: {
                                const ra = Date.now();hb = /^html|body$/i;ma = /^fixed/i;
                                for (ha = 0; ha < ya.length && Date.now() - ra < 50; ha++) {
                                    const Od = ya[ha];
                                    if (!hb.test(Od.tagName) && ma.test(Od.style.position || Yj(Od, "position"))) {
                                        var ib = Od;
                                        break b
                                    }
                                }
                                ib = null
                            }
                            break a
                        }
                    }
                } catch {}
                ib = null
            }
            ib && ib.offsetWidth * ib.offsetHeight <= 4 * e.width * e.height && (l = 1);
            b.pfx = l
        }
        a: {
            if (Math.random() < .05 && f) try {
                const ra = f.document.getElementsByTagName("head")[0];
                var fg = ra ? PU(ra) : 0;
                break a
            } catch (ra) {}
            fg = 0
        }
        f = fg;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Wa && (b.alvm = d.google_lrv ||
            "none")
    }

    function pV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : ye(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function qV(a, b) {
        const c = ME(b, 8, {});
        b = ME(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function rV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Kn;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = r.performance;
                if (f && f.timing && f.now) {
                    var h = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (G) {}
            h = null
        }(e = (e = h) ? BQ(e, r.Date.now() - Kn, 1E6) : null) && (b.bdt = e);
        b.idt = BQ(a.H, Kn);
        e = a.D;
        b.shv = L(a.ma, 2);
        a.Wa && (b.mjsv = a.Wa);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Lj(a.pubWin)) b.is_amp = 1, b.amp_v = Mj(e), (e = Nj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new AO(a.pubWin);
        (h = wO(e, "__gads", c)) ? b.cookie = h: vO(e, c) && (b.cookie_enabled = "1");
        (h = wO(e, "__gpi", c)) && !h.includes("&") && (b.gpic = h);
        wO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new RQ(a.pubWin);
        h = {
            Rg: !1,
            Sg: !a.F
        };
        (f = QQ(e, c, h)) ? b.eo_id_str = f: PQ(e, c, h) && (b.eoidce = "1");
        e = HE();
        f = ME(e, 8, {});
        h = d.google_ad_section;
        f[h] && (b.prev_fmts = f[h]);
        f = ME(e, 9, {});
        f[h] && (b.prev_slotnames = f[h].toLowerCase());
        qV(d, e);
        h = ME(e,
            15, 0);
        h > 0 && (b.nras = String(h));
        (f = Lj(window)) ? (f ? (h = f.pageViewId, f = f.clientId, typeof f === "string" && (h += f.replace(/\D/g, "").substr(0, 6))) : h = null, h = +h) : (h = jf(window), f = h.google_global_correlator, f || (h.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), h = f);
        b.correlator = ME(e, 7, h);
        U(Wt) && (b.rume = 1);
        if (d.google_ad_channel) {
            h = ME(e, 10, {});
            f = "";
            var k = d.google_ad_channel.split(gV);
            for (var l = 0; l < k.length; l++) {
                var m = k[l];
                h[m] ? f += m + "+" : h[m] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            h = d.google_ad_host_channel;
            f = ME(e, 11, []);
            k = h.split("|");
            e = -1;
            h = [];
            for (l = 0; l < k.length; l++) {
                m = k[l].split(gV);
                f[l] || (f[l] = {});
                var n = "";
                for (var p = 0; p < m.length; p++) {
                    const G = m[p];
                    G !== "" && (f[l][G] ? n += "+" + G : f[l][G] = !0)
                }
                n = n.slice(1);
                h[l] = n;
                n !== "" && (e = l)
            }
            f = "";
            if (e > -1) {
                for (k = 0; k < e; k++) f += h[k] + "|";
                f += h[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            e = d.google_ad_client;
            try {
                var q = jf(window),
                    t = q.google_prev_clients;
                t || (t = q.google_prev_clients = {});
                if (e in t) {
                    var w = 1;
                    break a
                }
                t[e] = !0;
                w = 2;
                break a
            } catch {
                w = 0;
                break a
            }
            w =
            void 0
        }
        b.pv = w;
        a.K && U(ys) && (w = a.K, w = Ud() && dV(w) ? w.document.documentElement.lang : void 0, w && (b.tl = w));
        U(zs) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        if (!U(Ot)) {
            q = a.pubWin.document;
            w = a.D;
            t = a.pubWin;
            t = c.g() ? t.origin !== "null" ? t.document.cookie : null : null;
            c = q.domain;
            e = t || "";
            k = a.pubWin.screen;
            l = q.referrer;
            m = hk();
            if (Lj()) var A = window.gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                f = w.google_analytics_domain_name;
                c = typeof f === "undefined" ? SU("auto",
                    c) : SU(f, c);
                p = e.indexOf(`__utma=${c}.`) > -1;
                n = e.indexOf(`__utmb=${c}`) > -1;
                (q = (Qj() || window).gaGlobal) || (q = {}, (Qj() || window).gaGlobal = q);
                t = !1;
                if (p) {
                    var D = e.split(`__utma=${c}.`)[1].split(";")[0].split(".");
                    n ? q.sid = String(D[3]) : q.sid || (q.sid = String(h));
                    q.vid = `${D[0]}.${D[1]}`;
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = String(h));
                    if (!q.vid) {
                        t = !0;
                        n = Math.round(Math.random() * 2147483647);
                        try {
                            D = QU.javaEnabled()
                        } catch (G) {
                            D = !1
                        }
                        D = [QU.appName, QU.version, QU.language ? QU.language : QU.browserLanguage, QU.platform, QU.userAgent,
                            D ? 1 : 0
                        ].join("");
                        k ? D += `${k.width}x${k.height}${k.colorDepth}` : r.g && r.g.Nh && (k = r.g.Nh.ao.so().to(), D += `${k.screen.width}x${k.screen.height}`);
                        D = D + e + (l || "");
                        for (k = D.length; m > 0;) D += m-- ^ k++;
                        q.vid = `${n^RU(D)&2147483647}.${h}`
                    }
                    q.from_cookie || (q.from_cookie = !1)
                }
                if (!q.cid) {
                    b: for (h = f, D = 999, h && (h = h.indexOf(".") === 0 ? h.substr(1) : h, D = h.split(".").length), h = 999, e = e.split(";"), f = 0; f < e.length; f++)
                        if (k = TU.exec(e[f]) || UU.exec(e[f]) || VU.exec(e[f])) {
                            l = parseInt(k[1], 10) || 0;
                            if (l === D) {
                                A = k[2];
                                break b
                            }
                            l < h && (h = l, A = k[2])
                        }t &&
                    A && A.search(/^\d+\.\d+$/) !== -1 ? (q.vid = A, q.from_cookie = !0) : A !== q.vid && (q.cid = A)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(Math.random() * 2147483647));
                A = q
            }
            b.ga_vid = A.vid;
            b.ga_sid = A.sid;
            b.ga_hid = A.hid;
            b.ga_fc = A.from_cookie;
            b.ga_cid = A.cid;
            b.ga_wpids = w.google_analytics_uacct
        }
        pV(a.pubWin, b);
        (a = d.google_ad_layout) && RP[a] >= 0 && (b.rplot = RP[a])
    }

    function sV(a, b) {
        var c = a.g;
        a = a.ma;
        SE() && (b.npa = 1);
        K(a, 6) && !c ? .C() && (b.ltd_cs = 1);
        c && (c.C() && (b.gdpr = c.A() ? "1" : "0"), (a = F(c, 1)) && (b.us_privacy = a), (a = F(c, 2)) && (b.gdpr_consent = a), (a = F(c, 4)) && (b.addtl_consent = a), (a = mi(c, 7)) && (b.tcfe = a), (a = L(c, 11)) && (b.gpp = a), (c = Nh(c, 10, Pg, y(), 0)) && c.length > 0 && (b.gpp_sid = c.join(",")))
    }

    function tV(a, b) {
        const c = a.D;
        sV(a, b);
        Fe(YE, (d, e) => {
            b[d] = c[e]
        });
        uP(c) && (a = HP(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Kv(c), a.g != null && (a = Xp(a.getValue()), b.pi = a))
    }

    function uV(a, b) {
        var c = Pj() || qO(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = qO(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function vV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = qO(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = He(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function wV(a, b) {
        (a = PE()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function xV(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function yV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = rf(a))
    }

    function zV(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function AV(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function BV(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Pa).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function CV(a, b) {
        var c;
        if (c = !U(bu)) c = a.C ? .label, c = !(U(Ct) && c && c.match(du(At)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && mQ("run-ad-auction", a.pubWin.document) && (c = new XU, c.set(1, nQ(a.pubWin.navigator)), b.tdf = WU(c)))
    }

    function DV(a, b) {
        if (a.C != null && Ud()) {
            var c = new bV,
                d = Hi(c, 3, a.C.label);
            N(d, 4, a.C.status);
            b.psd = rf(Ji(c))
        }
    }

    function EV(a, b) {
        U(Tt) || mQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function FV(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function GV(a, b) {
        if (a.A) {
            a.A.aj && (b.xatf = 1);
            try {
                a.A.Le ? .disconnect(), a.A.Le = void 0
            } catch {}
        }
    }

    function iV(a, b) {
        const c = {};
        tV(a, c);
        yV(a, c);
        rV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = hk();
        c.u_h = mj.screen ? .height;
        c.u_w = mj.screen ? .width;
        c.u_ah = mj.screen ? .availHeight;
        c.u_aw = mj.screen ? .availWidth;
        c.u_cd = mj.screen ? .colorDepth;
        c.u_sd = rO(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        gy(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = uO(a.K, a.ea);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                tO(a.ea) || (c.adx = -12245933,
                    c.ady = -12245933, a.i |= 32768)
            }
        });
        uV(a, c);
        vV(a, c);
        mV(a, c);
        lV(a, c);
        c.oid = 2;
        wV(a, c);
        c.pvsid = ff(a.pubWin, W);
        xV(a, c);
        zV(a, c);
        c.uas = fV(a.pubWin);
        const d = aV(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.l instanceof Uint8Array ? c.topics = pf(a.l) : a.l && (c.topics = a.l, c.tps = a.l);
        GV(a, c);
        oV(a, c, b);
        c.fu = a.i;
        c.bc = YU();
        K(a.ma, 9) && (xQ(c), c.creatives = nV(/\b(?:creatives)=([\d,]+)/), c.adgroups = nV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        Bj() && (c.atl = !0);
        c.bz = kf(a.pubWin);
        AV(a, c);
        BV(a, c);
        CV(a, c);
        DV(a, c);
        EV(a, c);
        FV(a, c);
        U(Ft) && String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const jV = /YtLoPri/;
    var HV = class extends O {};
    HV.O = [3];

    function IV(a) {
        return fi(a, HV, 15, y())
    }
    var di = class extends O {},
        JV = Qi(di);
    di.O = [15, 24];

    function KV() {
        var a = new LV;
        var b = new Nq;
        b = Hh(b, 2, zg(4));
        b = Hh(b, 8, zg(1));
        var c = new Tp;
        c = Gi(c, 7, "#dpId");
        b = C(b, 1, c);
        return ii(a, 3, Nq, b)
    }
    var LV = class extends O {},
        MV = Qi(LV);
    LV.O = [3];
    var NV = Symbol(),
        OV = Symbol();
    var PV = class {
        constructor(a) {
            this.Ob = a.Ob ? ? [];
            this.Ng = a.Ng ? ? .1;
            this.Ce = !!a.Ce;
            this.Ee = !!a.Ee;
            this.Zb = a.Zb ? ? 0;
            this.fe = a.fe ? ? "";
            this.Qa = a.Qa ? ? "";
            this.ge = a.ge ? ? 15E3;
            this.he = a.he ? ? 0;
            this.De = a.De ? ? !0;
            this.re = a.re || "#0B57D0";
            this.Wc = a.Wc || "#FFFFFF";
            this.Fd = a.Fd ? ? 0;
            this.Vb = !!a.Vb;
            this.Ie = a.Ie ? ? [];
            this.Pe = !!a.Pe;
            this.Ed = a.Ed ? ? 0;
            this.Ge = !!a.Ge;
            this.ff = !!a.ff
        }
    };

    function QV(a, b) {
        a = Rv(fv([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.la.g > d.la.g ? c : d)
    };

    function RV(a, b, c, d, e, f, h, k) {
        var l = new Am,
            m = new lm;
        c = Hi(m, 1, c);
        d = Hi(c, 2, d);
        b = M(d, 3, b);
        l = C(l, 1, b);
        b = new mm;
        b = Hi(b, 2, a.language);
        e = Hi(b, 3, e);
        e = C(l, 2, e);
        h = Fi(e, 3, Math.round(h));
        c = IV(f);
        e = l = b = d = 0;
        for (n of c) d += SV(L(n, 6) !== "") + SV(L(n, 7) !== ""), b += SV(L(n, 6) !== "") + SV(L(n, 7) !== ""), l += SV(L(n, 6) !== ""), e += SV(L(n, 7) !== "");
        var n = new zm;
        n = Ci(n, 1, c.length);
        n = Ci(n, 2, d);
        n = Hh(n, 3, b == null ? b : Dg(b));
        n = Hh(n, 4, l == null ? l : Dg(l));
        n = Hh(n, 5, e == null ? e : Dg(e));
        n = C(h, 6, n);
        if (k.length) f = new rm, f = gi(f, 1, k), E(n, 5, Mm, f);
        else {
            a.g = a.entries.length;
            k = new ym;
            a = a.entries;
            h = k.U;
            e = h[x];
            jg(e);
            h = ei(h, e, xm, 2, 2, !1, !0);
            l = e = 0;
            if (Array.isArray(a))
                for (var p = 0; p < a.length; p++) b = a[p], h.push(b), (b = Sf(b.U)) && !e++ && (h[x] &= -9), b || l++ || (h[x] &= -17);
            else
                for (p of a) a = p, h.push(a), (a = Sf(a.U)) && !e++ && (h[x] &= -9), a || l++ || (h[x] &= -17);
            f = IV(f).length;
            f = Fi(k, 3, f);
            E(n, 4, Mm, f)
        }
        return n
    }

    function TV(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new Sm,
            e = new ym;
        a = gi(e, 2, a.entries.slice(c));
        b = IV(b).length;
        b = Fi(a, 3, b);
        return C(d, 1, b)
    }
    var UV = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function SV(a) {
        return a ? 1 : 0
    };
    async function VV(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.qa(b) + a.j
    }
    var WV = class {
        constructor(a, b) {
            var c = V(pt);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.qa(2) + c
        }
    };
    var XV = class {
            constructor(a) {
                this.performance = a
            }
            qa() {
                return this.performance.now()
            }
        },
        YV = class {
            qa() {
                return Date.now()
            }
        };
    const ZV = [255, 255, 255];

    function $V(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function aW(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = $V(b.backgroundColor);
        var c = bW(b);
        if (c) return c;
        a = (a = a.parentElement) ? aW(a) : ZV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function bW(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function cW(a) {
        return a.Dd > 0 && a.i.j >= a.Dd
    }
    var eW = class {
        constructor(a, b, c, d) {
            this.kf = b;
            this.je = c;
            this.Dd = d;
            this.g = 0;
            this.i = new dW(a)
        }
    };

    function fW(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function gW(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class dW {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function hW(a) {
        v(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function iW(a, b) {
        a = jW(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        v(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function kW(a, b, c, d) {
        a = jW(a, "0 -960 960 960", b, b, lW[d]);
        v(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function mW(a, b, c) {
        a = jW(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        v(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c ? "#1A73E8" : "white"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const lW = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function jW(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        v(e, rr(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        hW(e);
        e.appendChild(f);
        return e
    };

    function nW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            h = kW(a, d, b.R.Wc, b.g.get(c) || 0);
        v(h, {
            position: "relative",
            top: "3px"
        });
        const k = document.createElement("SPAN");
        v(k, {
            display: "inline-block",
            "padding-left": b.Z() ? "" : "3px",
            "padding-right": b.Z() ? "3px" : ""
        });
        k.appendChild(h);
        f.call(e, k);
        f = e.appendChild;
        h = a.document.createElement("SPAN");
        h.appendChild(a.document.createTextNode(c));
        v(h, {
            position: "relative",
            left: b.Z() ? "" : "3px",
            right: b.Z() ? "3px" : "",
            "padding-left": b.Z() ? "6px" : "",
            "padding-right": b.Z() ? "" : "6px"
        });
        f.call(e, h);
        v(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.Z() ? "7px" : "6px",
            "padding-right": b.Z() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.R.Wc,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.R.re,
            cursor: "pointer"
        });
        return e
    };
    const oW = [{
        mf: "1907259590",
        Hd: 480,
        Nc: 220
    }, {
        mf: "2837189651",
        Hd: 400,
        Nc: 180
    }, {
        mf: "9211025045",
        Hd: 360,
        Nc: 160
    }, {
        mf: "6584860439",
        Hd: -Infinity,
        Nc: 150
    }];

    function pW(a) {
        return oW.find(b => b.Hd <= a)
    };

    function qW(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };
    const rW = new class {
        constructor() {
            this.g = []
        }
    };
    let sW = !1;

    function tW(a) {
        uW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new Xm;
                b = Fi(b, 1, a.i);
                var c = new Wm;
                b = E(b, 2, Ym, c);
                vW(a.config.L, b)
            }
        }, 1E4)
    }
    class wW {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function xW(a, b, c, d, e, f, h = null) {
        const k = pW(a.document.body.clientWidth);
        d = b.ra ? yW(a, b, d, k, e, f, h) : zW(a, b, d, k, e, f, h);
        Ko(d.isVisible(), !1, () => {
            sW = !1;
            for (const m of rW.g) m();
            rW.g.length = 0
        });
        d.show({
            bg: !0
        });
        sW = !0;
        const l = new wW(a, b, c);
        tW(l);
        rW.g.push(() => {
            var m = b.L;
            var n = new Xm;
            n = Fi(n, 1, c);
            var p = new Vm;
            n = E(n, 3, Ym, p);
            vW(m, n);
            l.g = !0
        })
    }

    function yW(a, b, c, d, e, f, h) {
        d = AW(a, b, c, e, f, {
            gi: d,
            cg: a.innerWidth,
            ui: "100%",
            jj: "15px",
            ti: "13px",
            kj: "center",
            jh: 0
        }, h);
        return GB(a, d, {
            Og: .95,
            kg: .95,
            zIndex: 2147483647,
            oc: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(BW(b.X, c))
        })
    }

    function zW(a, b, c, d, e, f, h) {
        a: {
            var k = b.R;
            var l = a.document.body.clientWidth;
            if (k.Fd) k = Math.min(l, k.Fd);
            else
                for (k = l * .9, l = l <= 768 ? 3 : 4; l >= 1; l--) {
                    const m = d.Nc * l + 42;
                    if (m <= k) {
                        k = m;
                        break a
                    }
                }
        }
        d = AW(a, b, c, e, f, {
            gi: d,
            cg: k,
            ui: "600px",
            jj: "24px",
            ti: "24px",
            kj: "start",
            jh: 0
        }, h);
        return QA(a, d, {
            ld: `${k}px`,
            hd: b.Z(),
            Xc: L(b.X, 14),
            zIndex: 2147483647,
            oc: !0,
            eg: !0,
            Ae: "adpub-drawer-root",
            ze: !1,
            Ma: !0,
            Fe: new R(BW(b.X, c))
        })
    }

    function AW(a, b, c, d, e, f, h) {
        if (e === NV)
            if (b.R.Vb) {
                d = b.ra ? .95 * a.innerHeight - 30 : a.innerHeight;
                e = b.l;
                var k = f.cg,
                    l = d,
                    m = b.Z(),
                    n = !!K(b.X, 13),
                    p = b.R.Ie.join(","),
                    q = vz;
                m = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (m ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + tz(c) + "</div>";
                n ? h = "" : (h = "<script data-ad-intent-query=" + Gz(c) + " data-ad-intent-qetid=" + Gz(h) + " data-ad-intent-eids=" +
                    Gz(p) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', p = encodeURIComponent(String(e)), Jz.lastIndex = 0, p = Jz.test(p) ? p.replace(Jz, Kz) : p, h = h + p + '" crossorigin="anonymous">\x3c/script>');
                c = q(m + h + '<ins class="adsbygoogle" style="display:inline-block;width:' + Ez(X(k)) + "px;height:" + Ez(X(l - 30)) + 'px" data-ad-client="' + Ez(e) + '"></ins><script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>' + (n ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
                    String(c).replace(Rz, Oz) + ' and " + "property code = ' + String(e).replace(Rz, Oz) + '";\x3c/script>' : ""));
                e = b.Z() ? "rtl" : "ltr";
                b = fd({
                    dir: e,
                    lang: L(b.X, 7),
                    style: kd `margin:0px;height:100%;padding-top: ${f.jh}px;overflow: hidden;`
                }, qz(c));
                a = a.document.createElement("IFRAME");
                v(a, {
                    border: "0",
                    width: "100%",
                    height: d + "px"
                });
                a.srcdoc = Nc(b)
            } else a = CW(a, b, c, d);
        else a = e.oo(a, c, d);
        return a
    }

    function BW(a, b) {
        return L(a, 10).replace("TERM", b)
    }

    function CW(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.X;
        const h = BW(f, c);
        f = new cA(e, L(f, 16), "anno-cse", qW(b.l, K(f, 22)), "ShoppingVariant", a.location, L(f, 7), h, b.R.Ob.filter(k => k !== 42), !1, void 0, !0, void 0, !0, b.l);
        f.J();
        DW(a, b, e, c, f, d);
        return e
    }

    function DW(a, b, c, d, e, f) {
        const h = EW(b, a.top, function(k) {
            k.data.action === "init" && k.data.adChannel === "ShoppingVariant" && FW(a, b, c, e, d, f)
        });
        rW.g.push(() => {
            a.top.removeEventListener("message", h)
        })
    }

    function FW(a, b, c, d, e, f) {
        K(b.X, 13) || bA(d, e, f);
        const h = c.contentDocument.documentElement,
            k = new ResizeObserver(() => {
                c.height = `${Math.ceil(h.offsetHeight+22)}px`
            });
        k.observe(h);
        const l = GW(b, 1066, a, () => {
            const m = h.offsetHeight;
            m && (c.height = `${m+22}px`)
        }, 1E3);
        rW.g.push(() => {
            k.disconnect();
            a.clearInterval(l)
        })
    };

    function HW(a, b, c) {
        b = b.getBoundingClientRect();
        a = wm(vm(new xm, a), 3);
        c = Hi(a, 4, c);
        c = Di(c, 6, Math.round(b.x));
        return Di(c, 7, Math.round(b.y))
    }

    function IW(a) {
        a = $V(a);
        var b = new tm;
        b = Di(b, 1, a[0]);
        b = Di(b, 2, a[1]);
        b = Di(b, 3, a[2]);
        return Wh(b, 4, ug(a[3]), 0)
    };
    const JW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function KW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || JW.test(a)
        }
    };

    function LW(a, b) {
        const c = new MW(b);
        for (const d of a) L(d, 5) && Nh(d, 3, Vg, y()).forEach(e => {
            NW(c, e, e)
        });
        OW(c);
        return new PW(c)
    }

    function QW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.l, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var PW = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function NW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new RW), a.g[a.size].A = c, a.g[a.size].B = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].C = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function OW(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.A === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].A].g;
                for (var e = c.g[f].B;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const h of a.g[f].ua) b.push(h)
        }
    }
    class MW {
        constructor(a) {
            this.C = a;
            this.size = 1;
            this.g = [new RW];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let h = 0; h < a.length; h++) {
                for (;;) {
                    var d = a.charCodeAt(h),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let k = b;
                for (;;) {
                    k = this.g[k].i;
                    if (k === 0) break;
                    const l = h + 1 - this.j[this.g[k].G],
                        m = h;
                    d = a;
                    e = m;
                    var f = this.C;
                    KW(d.charAt(l - 1), f) && KW(d.charAt(e + 1), f) && c.push(new SW(l, m, this.A.get(this.g[k].C)));
                    k = this.g[k].g
                }
            }
            return c
        }
    }
    class RW {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ia = this.H = this.F = this.ca = this.M = this.T = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.T = a
        }
        get A() {
            return this.T
        }
        set B(a) {
            this.M = a
        }
        get B() {
            return this.M
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set C(a) {
            this.H = a
        }
        get C() {
            return this.H
        }
        set g(a) {
            this.ca = a
        }
        get g() {
            return this.ca
        }
        set i(a) {
            this.F = a
        }
        get i() {
            return this.F
        }
        set G(a) {
            this.ia = a
        }
        get G() {
            return this.ia
        }
        get ua() {
            return this.j.values()
        }
    }
    var SW = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.C = c
        }
        get l() {
            return this.j
        }
        get A() {
            return this.i
        }
        get g() {
            return this.C
        }
        get length() {
            return this.i - this.j
        }
    };
    async function TW(a, b, c, d, e) {
        const f = LW(IV(b.X), b.i);
        if (!f.isEmpty()) {
            var h = new Map;
            for (const k of IV(b.X).filter(l => L(l, 5))) Nh(k, 3, Vg, y()).forEach(l => {
                h.set(l, L(k, 1))
            });
            await UW(a, a.document.body, b, f, h, new Set, c, d, b.R.Ed ? new eW(0, 0, 0, b.R.Ed) : null, e)
        }
    }
    async function UW(a, b, c, d, e, f, h, k, l, m) {
        h.g.qa(9) >= h.i && await VV(h, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.R.Pe && f.size && b.nodeType === Node.ELEMENT_NODE && VW(a, b) && b.parentElement && WW(a, f, c, k, b.parentElement, b, l), b.nodeType === Node.TEXT_NODE && b.textContent) QW(d, b.textContent).map(n => e.get(n.g)).filter(n => !!n).forEach(n => void f.add(n));
            else {
                for (const n of b.childNodes) await UW(a, n, c, d, e, f, h, k, l, m);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
                    WW(a, f, c, k, b, null, l)
            }
    }

    function WW(a, b, c, d, e, f, h) {
        for (const k of b) {
            if (h && cW(h)) return;
            const l = HW(c.L.Ze++, f ? ? e, k);
            d.entries.push(xh(l));
            h && gW(h.i, k, h.g);
            if (K(c.X, 17)) continue;
            const m = nW(a, c, k, e),
                n = XW(m, c, ji(Sg(Eh(l, 10)), "0"));
            YW(c, 999, m, p => {
                try {
                    if (c.Ta === OV) return !1;
                    var q = c.L,
                        t = Pm(Nm(k), ji(Sg(Eh(l, 10)), "0"));
                    var w = Ei(t, 7, n.i);
                    const A = ZW(q, w);
                    xW(a, c, A, k, c.C.get(k) || "", c.Ta);
                    return !1
                } finally {
                    p.preventDefault()
                }
            });
            e.insertBefore(m, f)
        }
        b.clear()
    }

    function VW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }
    class $W {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function XW(a, b, c) {
        const d = new $W;
        aX(b, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = c;
                    e = b.L;
                    var h = new gm;
                    h = f = Wh(h, 1, Rg(f), "0");
                    f = e.handle;
                    var k = bX(e, 17);
                    h = E(k, 16, $m, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = b.L, f = new fm, h = f = Fi(f, 1, d.g), f = e.handle, k = bX(e, 18), h = E(k, 17, $m, h), f.call(e, h), d.g = null)
        }).observe(a);
        return d
    };

    function cX(a, b, c, d, e, f) {
        if (!a.g) {
            var h = b.document.createElement("span");
            h.appendChild(iW(b, "12px"));
            h.appendChild(b.document.createTextNode(d));
            XD(b, c || null, {
                informationText: h
            }, e, f ? k => {
                var l = f.handle,
                    m = bX(f, 20);
                k = E(m, 11, $m, k);
                l.call(f, k)
            } : f);
            a.g = !0
        }
    }
    var dX = class {
        constructor() {
            this.g = !1
        }
    };

    function eX(a, b) {
        const c = b.ra === b.Z;
        var d = fX(a, b, c);
        if (!d) return null;
        d = d.position.nd();
        a = gX(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.V - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.V;
        return {
            sa: c ? e - a : 16,
            Ca: c ? 16 : e - a,
            ga: d
        }
    }

    function hX(a, b) {
        const c = Un(a),
            d = Vn(a);
        return qC(new uC(a), new Ej(d - b.ga - 50, c - b.Ca, d - b.ga, b.sa)).size > 0
    }

    function fX(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : QC(a, {
            Tb: c ? WC({
                ga: 16,
                Ca: 16
            }) : UC({
                ga: 16,
                sa: 16
            }),
            Ue: b - 66,
            Ab: 50,
            Xe: 50,
            Cd: b,
            mb: 16
        }, [a.document.body]).me
    }

    function gX(a, b, c, d) {
        a = c.ra ? iX(a, b, c) : jX(a, b, c);
        b = c.V;
        let e = c.ra ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function iX(a, b, c) {
        const d = c.W;
        return qC(new uC(a), new Ej(d - b - 50, c.V - 16, d - b, 16))
    }

    function jX(a, b, c) {
        const d = c.W,
            e = c.V;
        c = c.Z;
        return qC(new uC(a), new Ej(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function kX(a, b, c) {
        const d = a.Z;
        return {
            sa: d ? lX(a, b, c) : c,
            Ca: d ? c : lX(a, b, c),
            ga: 16
        }
    }

    function lX(a, b, c) {
        const d = a.V;
        return a.ra ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function mX(a, b) {
        const c = b.Z,
            d = b.V;
        a = b.ra ? iX(a, 16, b) : jX(a, 16, b);
        return Array.from(a).map(e => new PC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function nX(a, b, c, d, e, f, h, k, l) {
        v(c, {
            width: "50px",
            bottom: h ? h.ga + "px" : "16px",
            left: b.Z() === b.ra ? "" : h ? h.sa + "px" : "16px",
            right: b.Z() === b.ra ? h ? h.Ca + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = L(b.X, 20);
        v(e, {
            display: "none"
        });
        v(d, {
            display: "none"
        });
        const m = kW(a, "20px", b.R.Qa || "inherit", b.g.get(l.ya) || 0);
        a = a.document.createElement("SPAN");
        v(a, {
            display: "inline-block",
            position: "absolute",
            top: "14px",
            left: "15px",
            cursor: "pointer"
        });
        v(m, {
            cursor: "pointer"
        });
        c.appendChild(a);
        a.appendChild(m);
        YW(b, 1064, c, n => {
            k ? .();
            m.remove();
            v(c, {
                bottom: h ? h.ga + "px" : "16px",
                left: h ? h.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
                right: h ? h.Ca + "px" : oX(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            v(e, {
                display: ""
            });
            v(d, {
                display: "flex"
            });
            f.focus();
            n.preventDefault();
            return !1
        });
        c.focus()
    }

    function oX(a) {
        return a.Z() ? a.ra ? "16px" : "65%" : "16px"
    }

    function pX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.Z(), "50px"),
            right: a.Z() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.R.Qa || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function qX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function rX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function sX(a, b, c, d, e, f, h, k, l) {
        const m = document.createElement("SPAN");
        v(m, rr(a));
        m.id = "gda";
        m.appendChild(mW(a, L(b.X, 18), b.R.Qa));
        YW(b, 1064, m, n => {
            h ? .();
            nX(a, b, c, d, m, e, f, k, l);
            n.preventDefault();
            n.stopImmediatePropagation();
            return !1
        });
        return m
    }

    function tX(a, b, c, d) {
        const e = document.createElement("SPAN");
        v(e, rr(a));
        hW(e);
        v(e, pX(b));
        b.ra || v(e, {
            "justify-content": ""
        });
        const f = kW(a, "20px", b.R.Qa, b.g.get(d.ya) || 0),
            h = document.createElement("SPAN");
        v(h, {
            display: "inline-block",
            cursor: "inherit"
        });
        v(h, qX(b.Z()));
        e.appendChild(h);
        h.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        rX(c, d.ya, L(b.X, 19));
        v(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.R.Qa || "inherit"
        });
        YW(b, 999, e, k => {
            k.preventDefault();
            if (b.Ta !== OV && (d.Lf ? ? 0) + 800 <= b.qa(25)) {
                k = d.ya;
                const n = b.A.get(k) || "";
                var l = b.L;
                var m = Pm(Nm(k), d.Ac);
                m = Ei(m, 3, d.wd);
                l = ZW(l, m);
                xW(a, b, l, k, n, b.Ta, b.R.Vb ? b.j.get(k) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function uX(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                c.type === "attributes" && a.document.body.style.paddingBottom === "0px" && v(a.document.body, {
                    "padding-bottom": "66px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function vX(a, b, c, d, e, f) {
        var h = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        v(a.document.body, {
            "padding-bottom": (h && h.length ? Number(h[0]) : 0) + 66 + "px"
        });
        uX(a);
        h = document.createElement("div");
        v(h, rr(a));
        h.id = "google-anno-sa";
        h.dir = b.Z() ? "rtl" : "ltr";
        h.tabIndex = 0;
        var k = {
            background: b.R.fe || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.sa + "px" : b.ra ? "16px" : b.Z() ? "16px" : "65%",
            right: d ?
                d.Ca + "px" : oX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        v(h, k);
        v(h, {
            fill: "white"
        });
        const l = document.createElement("SPAN");
        v(l, rr(a));
        v(l, {
            cursor: "inherit"
        });
        k = tX(a, b, l, c);
        a = sX(a, b, h, k, l, d, e, f, c);
        h.appendChild(k);
        h.appendChild(a);
        return h
    }

    function wX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.ya);
        if ((d.g.get(e) || 0) !== (d.g.get(a.ya) || 0)) {
            b = kW(b, "20px", d.R.Qa, d.g.get(a.ya) || 0);
            for (var h of c.getElementsByClassName("google-anno-sa-intent-icon")) h.replaceWith(b)
        }
        c = a.ya;
        h = L(d.X, 19);
        f.ariaLabel = h.replace("TERM", c);
        d = d.L;
        f = new km;
        f = Hh(f, 2, Rg(a.Ac));
        f = Hi(f, 4, a.ya);
        a = d.handle;
        c = bX(d, 15);
        f = E(c, 6, $m, f);
        return a.call(d, f)
    }

    function xX(a, b, c, d) {
        if (hX(b, d)) return null;
        a.Lf = c.qa(24);
        d = vX(b, c, a, d, () => {
            var f = c.L;
            var h = new hm;
            h = Wh(h, 3, Rg(a.Ac), "0");
            var k = Hi(h, 2, a.ya);
            h = f.handle;
            var l = bX(f, 22);
            k = E(l, 12, $m, k);
            return h.call(f, k)
        }, () => {
            var f = c.L,
                h = new im,
                k = f.handle,
                l = bX(f, 23);
            h = E(l, 13, $m, h);
            return k.call(f, h)
        });
        const e = wX(a, b, d, c, a.ya);
        b.document.body.appendChild(d);
        return e
    }

    function yX(a, b, c, d, e, f, h) {
        if (a.ya !== e || a.Ac !== d || a.g !== f) {
            if (a.wd !== null) {
                var k = a.wd,
                    l = c.L;
                var m = new jm;
                m = Fi(m, 1, k);
                k = l.handle;
                var n = bX(l, 16);
                m = E(n, 7, $m, m);
                k.call(l, m)
            }
            l = a.ya;
            a.ya = e;
            a.Ac = d;
            a.g = f;
            K(c.X, 17) || (d = b.document.getElementById("google-anno-sa"), a.wd = d ? wX(a, b, d, c, l) : xX(a, b, c, h))
        }
    }
    var zX = class {
        constructor() {
            this.ya = "";
            this.Ac = null;
            this.g = "";
            this.Lf = this.wd = null
        }
    };

    function AX(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (sW) rW.g.push(() => void AX(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            yX(a.A, a.win, a.config, c.i, c.g, c.j, a.l);
            uW(a.config, 898, a.win, () => void AX(a, b), a.tf)
        }
    }
    var BX = class {
        constructor(a, b, c) {
            var d = new zX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.tf = b.params.tf
        }
    };
    class CX {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.j = c
        }
    };

    function DX(a, b, c, d, e) {
        c.forEach(f => {
            var h = a.L.Ze++;
            h = wm(vm(new xm, h), 1);
            h = Hi(h, 4, f);
            d.entries.push(xh(h));
            h = ji(Sg(Eh(h, 10)), "0");
            e.i.push(new CX(h, f, f));
            e.j && AX(e, b)
        })
    };
    const EX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function FX(a, b, c, d, e) {
        d.g.qa(5) >= d.i && await VV(d, 6);
        if (!c.R.Ce) {
            const f = IV(c.X);
            f.length && GX(a, b, c, e, f)
        }
        c.R.De || await c.na(898, TW(a, c, d, e, b));
        c.R.Ee || await HX(a, c, () => new dX, d, e)
    }
    async function HX(a, b, c, d, e) {
        var f = IV(b.X);
        var h = new MW(b.i);
        for (const k of f) L(k, 6) !== "" && (f = L(k, 1), NW(h, f, f));
        OW(h);
        h = new PW(h);
        h.isEmpty() || await b.na(898, IX(a, b, d, e, h, new eW(b.params.Vj, b.params.kf, b.params.je, b.params.Dd), c()))
    }
    async function IX(a, b, c, d, e, f, h) {
        var k = a.document.body;
        if (K(b.X, 17) || z(b.X, Fq, 21))
            for (; k;) {
                c.g.qa(7) >= c.i && await VV(c, 8);
                if (k.nodeType === Node.TEXT_NODE && k.textContent !== "" && k.parentElement) {
                    var l = k.parentElement;
                    a: {
                        var m = a;
                        var n = b,
                            p = l,
                            q = k.textContent,
                            t = d,
                            w = e,
                            A = f;
                        const hb = [];b: {
                            var D = q;
                            switch (n.i) {
                                case 1:
                                    var G = Array(D.length),
                                        I = 0;
                                    for (var B = 0; B < D.length; B++) JW.test(D[B]) || I++, G[B] = I;
                                    D = G;
                                    break b;
                                default:
                                    G = Array(D.length);
                                    for (B = I = 0; B < D.length;) {
                                        for (;
                                            /\s/.test(D[B]);) G[B] = I, B++;
                                        for (var J = !1; B < D.length &&
                                            !/\s/.test(D[B]);) J = !0, G[B] = I, B++;
                                        J && (I++, G[B - 1] = I)
                                    }
                                    D = G
                            }
                        }
                        w = q.includes("\u00bb") ? [] : QW(w, q);I = -1;
                        for (const ib of w)
                            if (w = ib.l, G = ib.A, !(w < I)) {
                                B = A;
                                var H = ib.g;
                                fW(B.i, B.g + D[w]);
                                J = B;
                                var ba = J.i;
                                if ((ba.g.has(H) ? ba.g.get(H).length : 0) < J.kf && B.i.j < B.je) {
                                    B = m.getComputedStyle(p);
                                    J = B.fontSize.match(/\d+/);
                                    if (!(J && Number(J[0]) >= 12 && Number(J[0]) <= 22 && $a(EX, B.display))) {
                                        A.g += D[D.length - 1];
                                        m = [];
                                        break a
                                    }
                                    I += 1;
                                    I < w && hb.push(m.document.createTextNode(q.substring(I, w)));
                                    I = q.substring(w, G + 1);
                                    B = q;
                                    J = w;
                                    ba = G + 1;
                                    ba = B.substring(Math.max(J -
                                        30, 0), J) + "~~" + B.substring(ba, Math.min(ba + 30, B.length));
                                    J = m;
                                    var db = n.L.Ze++;
                                    B = p;
                                    var ya = I,
                                        ha = ba,
                                        ma = ib.g;
                                    H = D[w];
                                    ba = B.getBoundingClientRect();
                                    db = wm(vm(new xm, db), 2);
                                    ya = Hi(db, 2, ya);
                                    ya = Hi(ya, 3, ha);
                                    ma = Hi(ya, 4, ma);
                                    H = Di(ma, 5, H);
                                    H = Di(H, 6, Math.round(ba.x));
                                    ba = Di(H, 7, Math.round(ba.y));
                                    J = J.getComputedStyle(B);
                                    H = new um;
                                    H = Hi(H, 1, J.fontFamily);
                                    ma = IW(J.color);
                                    H = C(H, 7, ma);
                                    ma = IW(J.backgroundColor);
                                    H = C(H, 8, ma);
                                    ma = J.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    H = Di(H, 4, ma ? Math.round(Number(ma[1])) : 0);
                                    ma = Math.round(Number(J.fontWeight));
                                    isNaN(ma) || ma === 400 || Di(H, 5, ma);
                                    J.textDecorationLine !== "none" && Hi(H, 6, J.textDecorationLine);
                                    J = C(ba, 8, H);
                                    ba = [];
                                    for (ya = B; ya && ba.length < 20;) {
                                        B = ba;
                                        H = B.push;
                                        ma = ya;
                                        ha = new sm;
                                        ha = Hi(ha, 1, ma.tagName);
                                        ma.className !== "" && Vh(ha, 2, ma.className.split(" "), Tg);
                                        H.call(B, ha);
                                        if (ya.tagName === "BODY") break;
                                        ya = ya.parentElement
                                    }
                                    B = ba.reverse();
                                    B = gi(J, 9, B);
                                    t.entries.push(xh(B));
                                    hb.push(JX(m, n, ji(Sg(Eh(B, 10)), "0"), ib.g, I, p));
                                    gW(A.i, ib.g, A.g + D[w]);
                                    I = G;
                                    if (cW(A)) break
                                }
                            }
                        n = I + 1;n !== 0 && n < q.length && hb.push(m.document.createTextNode(q.substring(n)));
                        A.g += D[D.length - 1];m = hb
                    }
                    if (m.length && !K(b.X, 17)) {
                        !b.R.Vb && cX(h, a, b.params.ag ? QV(a, b.params.ag) : void 0, L(b.X, 3), z(b.X, Fq, 21).i(), b.L);
                        for (const hb of m) l.insertBefore(hb, k), KX(hb);
                        l.removeChild(k);
                        for (k = m[m.length - 1]; k.lastChild;) k = k.lastChild;
                        if (cW(f)) break
                    }
                }
                a: {
                    l = f;m = b.i;
                    if (k.firstChild && (k.nodeType !== Node.ELEMENT_NODE ? 0 : !k.classList ? .contains("google-anno-skip") && k.offsetHeight)) {
                        b: {
                            switch (k.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    q = !1;
                                    break b
                            }
                            q = !(k.className.toUpperCase ? .() ? .includes("CRUMB") || k.id.toUpperCase ? .() ? .includes("CRUMB"))
                        }
                        if (q) {
                            k = k.firstChild;
                            break a
                        }
                        if (k.textContent ? .length) {
                            b: switch (q = k.textContent, m) {
                                case 1:
                                    m = q;
                                    q = 0;
                                    for (A = m.length - 1; A >= 0; A--) JW.test(m[A]) || q++;
                                    m = q;
                                    break b;
                                default:
                                    m = q.trim(), m = m === "" ? 0 : m.split(/\s+/).length
                            }
                            fW(l.i, l.g + m)
                        }
                    }
                    for (;;) {
                        if (k.nextSibling) {
                            k = k.nextSibling;
                            break a
                        }
                        if (!k.parentNode) {
                            k = null;
                            break a
                        }
                        k = k.parentNode
                    }
                    k = void 0
                }
            }
    }

    function LX(a, b) {
        b = {
            Z: b.Z(),
            ra: b.ra,
            V: Un(a),
            W: Vn(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = eX(a, b)) != null) var d = c;
            else a: {
                c = b.V;
                var e = mX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = kX(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? kX(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function GX(a, b, c, d, e) {
        function f() {
            return k ? ? (k = GW(c, 898, a, () => {
                h || (a.clearInterval(k), h = !0, MX(a, b, c, d, e), NX(c.L, TV(d, c.X)))
            }, c.R.Zb))
        }
        let h = !1,
            k = void 0;
        const l = OX(c, a, () => {
            (c.R.Ge ? a : window).scrollY <= c.R.he || h || (c.R.Zb > 0 && !LX(a, c) ? k = f() : (h = !0, a.removeEventListener("scroll", l), MX(a, b, c, d, e), NX(c.L, TV(d, c.X))))
        });
        uW(c, 898, a, () => {
            h || (c.R.Zb > 0 && !LX(a, c) ? k = f() : (h = !0, MX(a, b, c, d, e), NX(c.L, TV(d, c.X))))
        }, c.R.ge)
    }

    function MX(a, b, c, d, e) {
        e = e.filter(h => L(h, 7).length).map(h => L(h, 1));
        if (e.length !== 0) {
            var f = LX(a, c);
            f && DX(c, b, e, d, new BX(a, c, f))
        }
    }

    function KX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = bW($V(getComputedStyle(a.parentElement).color)),
                    c = bW($V(getComputedStyle(a).color));
                var d = aW(a);
                if (d = b && c && d ? TM(c, d) < Math.min(TM(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    v(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) KX(a.children[b])
        }
    }
    class PX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function JX(a, b, c, d, e, f) {
        const h = a.document.createElement("SPAN");
        h.className = "google-anno-t";
        QX(h, b);
        h.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        hW(e);
        v(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        ud(e);
        e.className = "google-anno";
        e.appendChild(iW(a, a.getComputedStyle(f).fontSize));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(h);
        const k = RX(b, c, e);
        YW(b, 999, e, l => {
            try {
                if (b.Ta === OV) return !1;
                var m = b.L,
                    n = Pm(Nm(d), c);
                var p = Ei(n, 2, k.i);
                const q = ZW(m,
                    p);
                xW(a, b, q, d, b.B.get(d) || "", b.Ta, b.R.Vb ? b.j.get(d) || "" : null);
                return !1
            } finally {
                l.preventDefault(), l.stopImmediatePropagation()
            }
        });
        return e
    }

    function RX(a, b, c) {
        const d = new PX;
        aX(a, e => {
            for (const l of e)
                if (l.isIntersecting) {
                    var f = b;
                    e = a.L;
                    var h = new Um;
                    h = f = Wh(h, 2, Rg(f), "0");
                    f = e.handle;
                    var k = bX(e, 13);
                    h = E(k, 4, $m, h);
                    e = f.call(e, h);
                    d.g = e
                } else d.g && (e = a.L, f = new Tm, h = f = Fi(f, 1, d.g), f = e.handle, k = bX(e, 14), h = E(k, 5, $m, h), f.call(e, h), d.g = null)
        }).observe(c);
        return d
    }

    function QX(a, b) {
        hW(a);
        v(a, {
            "text-decoration": "underline"
        });
        v(a, {
            "text-decoration-style": "dotted"
        });
        v(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        b.R.ff && v(a, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        })
    };

    function vW(a, b) {
        var c = a.handle,
            d = bX(a, 19);
        b = E(d, 9, $m, b);
        c.call(a, b)
    }

    function ZW(a, b) {
        var c = a.handle,
            d = bX(a, 12);
        b = E(d, 8, $m, b);
        return c.call(a, b)
    }

    function NX(a, b) {
        var c = a.handle,
            d = bX(a, 11);
        b = E(d, 14, $m, b);
        c.call(a, b)
    }

    function bX(a, b) {
        var c = new Zm;
        var d = a.C++;
        c = Fi(c, 1, d);
        b = Fi(c, 2, Math.round(a.g.qa(b) - a.i));
        b = C(b, 10, a.j);
        return vi(b, 15, a.l ? !0 : void 0)
    }
    var SX = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.l = d;
            this.Ze = this.C = 1;
            this.A = [...e]
        }
        handle(a) {
            for (const b of this.A) b(a);
            return oi(a, 1)
        }
    };

    function uW(a, b, c, d, e) {
        c.setTimeout(TX(a, b, d), e)
    }

    function EW(a, b, c) {
        a = TX(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function GW(a, b, c, d, e) {
        return c.setInterval(TX(a, b, d), e)
    }

    function YW(a, b, c, d) {
        c.addEventListener("click", TX(a, b, d))
    }

    function aX(a, b) {
        return new IntersectionObserver(TX(a, 1065, b), {
            threshold: .98
        })
    }

    function OX(a, b, c) {
        a = TX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function TX(a, b, c) {
        return a.Ia.Da(b, c, void 0, d => {
            d.es = a.R.Ob.join(",")
        })
    }
    var VX = class {
        constructor(a, b, c, d, e, f, h, k, l, m) {
            this.l = a;
            this.ra = b;
            this.X = c;
            this.Ia = d;
            this.L = e;
            this.ta = f;
            this.G = h;
            this.params = k;
            this.R = l;
            this.Ta = m;
            this.B = new Map;
            this.A = new Map;
            this.C = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = $a(UX, L(c, 7)) ? 1 : 0;
            for (const n of IV(this.X)) F(n, 6) != null && this.B.set(L(n, 1), L(n, 6)), F(n, 7) != null && this.A.set(L(n, 1), L(n, 7)), F(n, 5) != null && this.C.set(L(n, 1), L(n, 5)), mi(n, 10) != null && this.g.set(L(n, 1), qi(n, 10)), F(n, 11) != null && this.j.set(L(n, 1), L(n, 11))
        }
        na(a, b) {
            this.Ia.na(a, b, c => {
                c.es = this.R.Ob.join(",")
            });
            return b
        }
        qa(a) {
            return this.G.qa(a)
        }
        Z() {
            return qi(this.X, 12) === 2
        }
    };
    const UX = ["ja", "zh_CN", "zh_TW"];

    function WX(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function XX(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function YX() {
        const a = new Set,
            b = ky();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function ZX(a) {
        a = a.id;
        return a != null && (YX().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function $X(a, b, c) {
        if (!a.sources) return !1;
        switch (aY(a)) {
            case 2:
                const d = bY(a);
                if (d) return c.some(f => cY(d, f));
                break;
            case 1:
                const e = dY(a);
                if (e) return b.some(f => cY(e, f))
        }
        return !1
    }

    function aY(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function dY(a) {
        return eY(a, b => b.currentRect)
    }

    function bY(a) {
        return eY(a, b => b.previousRect)
    }

    function eY(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function cY(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function fY() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(ZX),
            b = [...YX()].map(c => document.getElementById(c)).filter(c => c !== null);
        gY = window.scrollX;
        hY = window.scrollY;
        return iY = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function jY(a, b) {
        const c = gY !== window.scrollX || hY !== window.scrollY ? [] : iY,
            d = fY();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                kY(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Bb = Math.floor(b.renderTime || b.loadTime);
                a.ib = b.size;
                break;
            case "first-input":
                b = e;
                a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ka = !0;
                a.g.some(f => f.entries.some(h => e.duration === h.duration && e.startTime === h.startTime)) || lY(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.H = Math.max(a.H, b);
                a.ca += 1;
                break;
            case "event":
                lY(a, e);
                break;
            default:
                wd(b, void 0)
        }
    }

    function mY(a) {
        a.A || (a.A = new PerformanceObserver(Pu(640, b => {
            jY(a, b)
        })));
        return a.A
    }

    function nY(a) {
        const b = Pu(641, () => {
                UO(document) === 2 && oY(a)
            }),
            c = Pu(641, () => void oY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ua = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            mY(a).disconnect()
        }
    }

    function oY(a) {
        if (!a.Bf) {
            a.Bf = !0;
            mY(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += XX("cls", a.G), b += XX("mls", a.I), b += WX("nls", a.T), window.LayoutShiftAttribution && (b += XX("cas", a.C), b += WX("nas", a.Af), b += XX("was", a.Sf)), b += XX("wls", a.ia), b += XX("tls", a.Qf));
            window.LargestContentfulPaint && (b += WX("lcp", a.Bb), b += WX("lcps", a.ib));
            window.PerformanceEventTiming && a.Ka && (b += WX("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += WX("cbt", a.B),
                b += WX("mbt", a.H), b += WX("nlt", a.ca));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) ZX(c) && d++;
            b += WX("nif", d);
            b += WX("ifi", jk(window));
            c = P(Dn).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${r===r.top?1:0}`;
            b += a.Df ? `&${"qqid"}=${encodeURIComponent(a.Df)}` : WX("pvsid", ff(r));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.hb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += WX("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ua()
        }
    }

    function kY(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.T += 1;
            if (c = $X(b, c, d)) a.C += b.value, a.Af++;
            if (b.startTime - a.Mc > 5E3 || b.startTime - a.Cf > 1E3) a.Mc = b.startTime, a.i = 0, a.j = 0;
            a.Cf = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ia && (a.ia = a.i, a.Sf = a.j, a.Qf = b.startTime + b.duration)
        }
    }

    function lY(a, b) {
        pY(a, b);
        const c = a.g[a.g.length - 1],
            d = a.F[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.F[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.F[e.id]
        })
    }

    function pY(a, b) {
        b.interactionId && (a.M = Math.min(a.M, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.hb = a.l ? (a.l - a.M) / 7 + 1 : 0)
    }
    var qY = class {
            constructor() {
                this.j = this.i = this.T = this.I = this.G = 0;
                this.Cf = this.Mc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.hb = 0;
                this.M = Infinity;
                this.Fa = this.ib = this.Bb = this.Af = this.Sf = this.C = this.Qf = this.ia = this.l = 0;
                this.Ka = !1;
                this.ca = this.H = this.B = 0;
                this.A = null;
                this.Bf = !1;
                this.ua = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Df = a ? a.getAttribute("data-google-query-id") : null;
                this.ki = {
                    ci: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.ki.ci && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), mY(this).observe(a);
                    nY(this)
                }
            }
        },
        gY, hY, iY = [];
    async function rY(a, b, c, d, e, f, h, k) {
        var l = W,
            m = ow,
            n = ((k = wO(new AO(a), "__gads", k)) ? He(k + "t2Z7mVic") % 20 : null) ? ? Math.floor(Ee() * 20);
        k = f.qa(0);
        const p = Un(a) < 488,
            q = c.X;
        var t = c.R;
        n = Qm(n);
        t = Xh(n, t.Ob);
        e = new SX(f, k, t, K(q, 17), e);
        l = new VX(d, p, q, l, e, m, f, c.params, c.R, c.Ta);
        d = new UV;
        b = await sY(a, a.document, b, l, h, d);
        c = RV(d, p, c.Zc, a.location.hostname, c.Oi, q, f.qa(11) - k, b);
        a = e.handle;
        f = bX(e, 11);
        c = E(f, 3, $m, c);
        a.call(e, c)
    }
    async function sY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !tY(b)) return [om()];
        e.g.qa(3) >= e.i && await VV(e, 4);
        b = (b = L(d.X, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.language = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var h = b.push;
            var k = new pm;
            var l = new nm;
            k = E(k, 3, qm, l);
            h.call(b, k)
        }
        b.length || await FX(a, c, d, e, f);
        return b
    }

    function tY(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function uY() {
        var a = V(tt),
            b = W;
        if (Math.random() < a) try {
            (new qY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function vY(a, b, c, d, e, f, h) {
        Sd() || (uY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        U(it) || (a = await wY(a, b, c, d, e, f, h), a.pb.length && xY(b, c, h, a))
    }
    async function wY(a, b, c, d, e, f, h) {
        const k = a.performance ? .now ? new XV(a.performance) : new YV;
        a = new WV(a, k);
        if (typeof e !== "string") return e = new pm, b = new nm, {
            Sa: null,
            pb: [E(e, 12, qm, b)]
        };
        const l = MV(e);
        e = ci(l);
        if (!b) return b = new pm, d = new nm, b = E(b, 9, qm, d), {
            Sa: e,
            pb: [b]
        };
        const m = c.google_ad_client;
        if (typeof m !== "string") return b = new pm, d = new nm, b = E(b, 11, qm, d), {
            Sa: e,
            pb: [b]
        };
        if (Rd()) return {
            Sa: e,
            pb: [om()]
        };
        if (Je()) return b = new pm, d = new nm, b = E(b, 13, qm, d), {
            Sa: e,
            pb: [b]
        };
        var n = U(bt) ? P(mF) : null;
        c = yY(c);
        var p = zY(e);
        a: {
            try {
                const w =
                    b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!w) {
                    var q = null;
                    break a
                }
                var t = decodeURIComponent(w[1]);
                q = JV(t);
                break a
            } catch (w) {
                q = null;
                break a
            }
            q = void 0
        }
        q = q || ci(l);
        t = l.U;
        t = ei(t, t[x], Nq, 3, 1);
        t = {
            Vj: V(ot),
            kf: V(st),
            je: V(qt),
            Dd: V(rt),
            ag: t,
            tf: V(ut)
        };
        h = {
            X: q,
            Zc: c,
            Oi: h,
            params: t,
            R: new PV({
                Ob: p,
                Ng: V(tt),
                Ce: U(Qs),
                Ee: U(Ss),
                Zb: V(Ls),
                fe: du(Ts),
                Qa: du(Us),
                ge: V(mt),
                he: V(nt),
                De: U(Rs),
                re: du(Ns),
                Wc: du(Os),
                Fd: V(dt),
                Vb: U(jt),
                Ie: eu(Ws),
                Pe: U(Zs),
                Ed: V(ct),
                Ge: U(Ms),
                ff: U(gt)
            }),
            Ta: NV
        };
        await AY(b, d, n, h, m, k, a, f);
        return {
            Sa: e,
            pb: []
        }
    }

    function zY(a) {
        const b = P(Dn).g();
        a && b.push(...Nh(a, 24, Cg, y()));
        b.push(...eu(lt).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function xY(a, b, c, d) {
        a = RV(new UV, !!a && Un(a) < 488, yY(b), a ? .location ? .hostname ? ? "", c, d.Sa ? ? new di, 0, d.pb);
        c = Math.floor(Ee() * 20);
        b = new Zm;
        b = Fi(b, 1, 1);
        b = Fi(b, 2, 0);
        c = Qm(c);
        var e = zY(d.Sa);
        c = Xh(c, e);
        b = C(b, 10, c);
        a = E(b, 3, $m, a);
        BY(U(bt) ? P(mF) : null, a, Date.now(), d.Sa)
    }
    async function AY(a, b, c, d, e, f, h, k) {
        const l = dA(a);
        l.wasReactiveAdConfigReceived[42] || (l.wasReactiveAdConfigReceived[42] = !0, await rY(a, b, d, e, [m => {
            BY(c, m, f.qa(21), d.X)
        }], f, h, k))
    }

    function BY(a, b, c, d) {
        a && W.na(1214, qF(a, b, c), e => {
            e.es = zY(d).join(",")
        })
    }

    function yY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const CY = (a, b) => {
        const c = Ce("STYLE", a);
        c.textContent = Kc(Yc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var EY = (a, b, c) => {
        if (!a.body) return null;
        const d = new DY;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && CY(b.document, e);
            Tj(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class DY {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = co(b);
            Tj(a.body, "top", -this.i + "px")
        }
    };

    function FY(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.g.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var GY = class extends Q {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.M = b;
            this.B = c;
            this.j = null;
            yo(this, () => this.j = null)
        }
        H(a) {
            return this.B === a
        }
    };

    function HY(a, b) {
        const c = a.B;
        c && (b ? (mA(a.F), v(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = EY(a.A, a.M, a.T)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (nA(a.F), v(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function IY(a) {
        HY(a, !1);
        const b = a.B;
        if (b) {
            var c = JY(a.I);
            FY(a, d => {
                v(d, c);
                ho(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            Tj(a.g, c);
            Tj(a.g, KY);
            Tj(b, LY);
            Tj(b, {
                background: "transparent"
            });
            v(b, {
                display: "none",
                position: "fixed"
            });
            ho(b);
            ho(a.g);
            lf(a.I) <= 1 || (Tj(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Xe(b))
        }
    }
    class MY extends GY {
        constructor(a, b, c) {
            var d = V(Pt);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.T = d;
            this.F = gA(new lA(b), 2147483646);
            this.I = b
        }
    }

    function JY(a) {
        a = lf(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var LY = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        KY = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var NY = class extends MY {
        constructor(a, b, c) {
            super(b, a, c);
            IY(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : $a(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const OY = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function PY(a, b, c, d) {
        a = new QY(a, b, c, d);
        await a.J();
        return a
    }

    function RY(a) {
        return setTimeout(hy(728, () => {
            SY(() => {
                a.A.reject()
            });
            a.dispose()
        }), V(Gt) * 1E3)
    }

    function TY(a, b) {
        var c = YM(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        W.na(1005, c);
        c = ZM(a.g).then(d => {
            UY(a, OY[d.status])
        });
        W.na(1006, c);
        c = $M(a.g).then(() => {
            UY(a, "error")
        });
        W.na(1004, c)
    }

    function VY(a) {
        if (U(Ht)) {
            a.win.location.hash !== "" && iy("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = hy(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? UY(a, "closed") : a.g.ue.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            yo(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function SY(a) {
        try {
            a()
        } catch (b) {}
    }

    function UY(a, b) {
        HY(a.F, !1);
        a.j && SY(() => {
            a.j(b)
        });
        a.dispose()
    }
    var QY = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.B = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new NY(a, c, b);
            a = new bN(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.J();
            this.g = a;
            this.A = new YK;
            this.B.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async J() {
            const a = RY(this);
            TY(this, a);
            yo(this, () => {
                this.g.dispose();
                clearTimeout(a);
                ie(this.B)
            });
            await this.A.promise
        }
        show(a) {
            this.C || (this.j = a, HY(this.F, !0), r.IntersectionObserver || this.g.ue.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), VY(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function WY({
        Vf: a,
        bh: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function XY(a, b) {
        a.pf(c => {
            c.shv = String(b);
            c.mjsv = WY({
                Vf: DE(),
                bh: b
            });
            c.eid = wQ(r)
        })
    };

    function YY(a) {
        var b = W;
        try {
            return Mi(a, Ok), new eQ(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new eQ
    };
    const ZY = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ra({
                    jc: c ? ? void 0,
                    gg: d ? void 0 : 2
                })
            })
        },
        $Y = {
            yd: a => a.Ra,
            Bc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Pb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jc: b.returnValue ? ? void 0,
                    gg: b.success ? void 0 : 2
                })
            }
        };

    function aZ(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            ef: b.__uspapiReturn.callId
        }
    }

    function bZ(a, b) {
        let c = {};
        if (HF(a.caller)) {
            var d = Bb(() => {
                b(c)
            });
            JF(a.caller, "getDataWithCallback", {
                Ra: e => {
                    e.gg || (c = e.jc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var cZ = class extends Q {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new KF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", aZ);
            this.caller.B.set("getDataWithCallback", ZY);
            this.caller.A.set("getDataWithCallback", $Y)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function dZ(a, b, c, d) {
        const e = new YK;
        let f = "";
        const h = l => {
            try {
                const m = typeof l.data === "object" ? l.data : JSON.parse(l.data);
                f === m.paw_id && (Ib(a, "message", h), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
            } catch (m) {}
        };
        var k = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (k) return Hb(a, "message", h), f = c(k), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(Ee() * 2147483647)), Hb(a, "message", h), b(c, f), e.promise) : null
    }

    function eZ(a) {
        return dZ(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const fZ = (a, b) => {
        try {
            const l = K(b, 6) === void 0 ? !0 : K(b, 6);
            var c = aj(qi(b, 2)),
                d = L(b, 3);
            a: switch (qi(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new cj(c, d, e),
                h = z(b, Wi, 5) ? .g() ? ? "";
            f.xc = h;
            f.g = l;
            f.win = a;
            var k = f.build();
            Ui(k)
        } catch {}
    };

    function gZ(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? fZ(a, b) : Hb(a, "load", () => void fZ(a, b)))
    };

    function hZ(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function iZ(a) {
        if (a === a.top || xe(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && hZ(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new YK;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                qc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function VE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), hf(V(Bt), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function jZ(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function kZ({
        ma: a,
        xa: b,
        Wa: c,
        slot: d
    }) {
        const e = d.vars,
            f = Ae(d.pubWin),
            h = jZ(d),
            k = new yQ({
                K: f,
                pubWin: d.pubWin,
                D: e,
                ma: a,
                xa: b,
                Wa: c,
                ea: h
            });
        k.H = Date.now();
        Dj(1, [k.D]);
        gy(1032, () => {
            if (f && U($t)) {
                var l = k.D;
                ME(HE(), 32, !1) || (NE(HE(), 32, !0), cV(f, l.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await lZ(k)
        } catch (l) {
            if (!W.ba(159, l, void 0, void 0)) throw l;
        }
        gy(639, () => {
            var l;
            var m = k.D;
            (l = k.K) && m.google_responsive_auto_format === 1 && m.google_full_width_responsive_allowed === !0 ? (m = (m = l.document.getElementById(m.google_async_iframe_id)) ?
                oe(m, "INS", "adsbygoogle") : null) ? (l = new YP(l, m), l.g = r.setInterval(Ja(l.i, l), 500), l.i(), l = !0) : l = !1 : l = !1;
            return l
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? jy(1008, mZ(d.pubWin, f, e, k.j, Ji(KV()), k.g, L(a, 8)), l => {
            l.es = zY(null).join(",")
        }) : VM(k.pubWin, "affa", l => {
            jy(1008, mZ(d.pubWin, f, e, k.j, l.config, k.g, L(a, 8)), m => {
                m.es = zY(null).join(",")
            });
            return !0
        });
        nZ(k);
        return k
    }
    async function mZ(a, b, c, d, e, f, h) {
        await vY(a, b, c, d, e, f, h)
    }

    function lZ(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        uQ(13, b);
        uQ(11, b);
        a.F = ri(a.ma, cQ, 13, fQ) ? .g() ? ? U(Et);
        b = HE();
        var c = ME(b, 23, !1);
        c || NE(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ma;
            b = Kh(c, cQ, bi(c, fQ) === 13 ? 13 : -1) !== void 0 ? z(ri(c, cQ, 13, fQ), WK, 2) : mb(ri(c, dQ, 14, fQ) ? .g() ? ? [], [b]) ? z(z(ri(c, dQ, 14, fQ), cQ, 2), WK, 2) : new WK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = K(a.ma, 6),
                f = K(a.ma, 20);
            b = new XK(c, d, b, e, f);
            b.i = !0;
            c = z(b.C, Oq, 1);
            if (b.i && (d = b.g, b.j && !zE(c) ? (e = new NK, e = Hh(e,
                    1, zg(1))) : e = null, e)) {
                e = Ji(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (h) {}
            }
            d = zE(c) && (b.j || b.A);
            c && d && vF(new wF(b.g, new eG(b.g, b.l), c, new lA(b.g)))
        }
        b = !Lj() && !Qd();
        return !b || b && !oZ(a) ? pZ(a) : Promise.resolve()
    }

    function qZ(a, b, c = !1) {
        b = uO(a.K, b);
        const d = Pj() || qO(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = sO(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function oZ(a) {
        return rZ(a) || sZ(a)
    }

    function rZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                iy("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = hy(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!oZ(a)) {
                    const e = pZ(a);
                    W.na(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function sZ(a) {
        const b = a.pubWin.document,
            c = a.ea;
        if (UO(b) === 3) return XO(hy(332, () => {
            if (!tZ(a, uZ().visible, c)) {
                const h = pZ(a);
                W.na(1222, h)
            }
        }), b), !0;
        const d = uZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = VO(b);
        if (!e) return !1;
        if (!WO(b)) return tZ(a, d.visible, c);
        if (qZ(a, c) <= d.hidden) return !1;
        let f = hy(332, () => {
            if (!WO(b) && f) {
                Ib(b, e, f);
                if (!tZ(a, d.visible, c)) {
                    const h = pZ(a);
                    W.na(1222, h)
                }
                f = null
            }
        });
        return Hb(b, e, f)
    }

    function uZ() {
        var a = V(Pr);
        const b = V(Qr);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, r.IntersectionObserver || (a.visible = -1), se() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: r.IntersectionObserver ? se() ? a : b : -1
        }
    }

    function tZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!ao(d.google_reactive_ad_format) && (uP(d) || d.google_reactive_ads_config) || !tO(c) || qZ(a, c) <= b) return !1;
        var e = HE(),
            f = ME(e, 8, {});
        e = ME(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const h = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !h) return !1;
        f = new Promise(k => {
            const l = new r.IntersectionObserver((m, n) => {
                Ua(m, p => {
                    p.intersectionRatio <= 0 || (n.unobserve(p.target), k(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.I = l;
            l.observe(c)
        });
        e = new Promise(k => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    k(void 0)
                })
        });
        la(Promise, "any").call(Promise, [f, e]).then(() => {
            gy(294, () => {
                const k = pZ(a);
                W.na(1222, k)
            })
        });
        return !0
    }

    function pZ(a) {
        gy(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ma,
                f = a.xa;
            if (jk(a.D) === 1) {
                var h = U(au);
                if ((h || U(Zt)) && c === d) {
                    var k = new oj;
                    d = new pj;
                    var l = k.setCorrelator(ff(c));
                    var m = wQ(c);
                    l = Hi(l, 5, m);
                    N(l, 2, 1);
                    k = C(d, 1, k);
                    l = new nj;
                    l = M(l, 10, !0);
                    m = U(Ut);
                    l = M(l, 8, m);
                    m = U(Vt);
                    l = M(l, 12, m);
                    m = U(Yt);
                    l = M(l, 7, m);
                    m = U(Xt);
                    l = M(l, 13, m);
                    C(k, 2, l);
                    c.google_rum_config = Ki(d);
                    e = K(e, 9) && h ? f.Cj : f.Dj;
                    Be(c.document, e)
                } else Bk(fy)
            }
        });
        a.D.google_ad_channel = vZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = wZ(a, a.D.google_tag_partner);
        xZ(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (Kn = b, a.D.google_start_time = null);
        oO(a);
        a.K && yP(a.K, dc(a.xa.mi, bL()));
        QE() && mL({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            jb: dc(a.xa.jb, bL())
        });
        uP(a.D) && (kL() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return yZ(a)
    }

    function vZ(a, b) {
        return (b ? [b] : []).concat(WE(a.pubWin).ad_channels || []).join("+")
    }

    function wZ(a, b) {
        return (b ? [b] : []).concat(WE(a.pubWin).tag_partners || []).join("+")
    }

    function zZ(a) {
        const b = Ce("IFRAME");
        Fe(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function AZ(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && oe(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : FP(a.xa.Ug, 525, d => {
            a.ea.appendChild(b);
            const e = sj(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.ea.parentElement, e);
            return b
        })
    }

    function BZ(a, b, c, d) {
        lF();
        P(mF).Zc = a.D.google_page_url;
        gZ(a.pubWin, Zi(Yi(N(N(Xi(new $i, Vi(new Wi, String(ff(a.pubWin)))), 4, 1), 2, 1), L(a.ma, 2)), d.g()));
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                PY(a.pubWin, a.ea.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Hb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? WE(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && CZ(e, a, a.ea,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = DZ(a, b);
        CO(a.pubWin, a.g, b.contentWindow, a.j);
        !e || uP(a.D) && !IP(a.D) || (a.D.no_resize || d(new JR(e, b, a.ea)), d(new aR(a, b)), d(e.IntersectionObserver ? null : new cR(e, b, a.ea)), d(QR(e, b, a.D, a.ea, hy(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        e && (d(VQ(e, b, a.g)), a.j.push(SP(e, a.D)), P(XP).J(e), a.j.push(OQ(e, a.ea, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (c != null) {
            d = a.ea;
            const h = d.parentElement;
            (h && tu.test(h.className) ? h : d).setAttribute("data-auto-ad-size",
                c)
        }
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        EZ(a);
        WR(a)
    }

    function DZ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = PE();
        let f = null;
        const h = UM(c, "pvt", (k, l) => {
            typeof k.token === "string" && l.source === b.contentWindow && (f = k.token, h(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(h);
        return () => {
            f && Array.isArray(e[d]) && (bb(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function EZ(a) {
        const b = Lj(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Hb(a.pubWin, "message", W.Da(616, c));
                a.j.push(() => {
                    Ib(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function CZ(a, b, c, d) {
        sN(new BN(a), c).then(e => {
            Dj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && tu.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.yg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                h = e.Di || "",
                k = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                l = Number(e.yg),
                m = Xa(e.entries, D => `${D.ub}:${D.Lg}:${D.Mg}`),
                n = Number(e.sj.toFixed(2)),
                p = d.dataset.googleQueryId || "",
                q = n * e.Xb.width * e.Xb.height,
                t = `${e.Zg.scrollX},${e.Zg.scrollY}`,
                w = kk(e.target),
                A = [e.Xb.left, e.Xb.top, e.Xb.right,
                    e.Xb.bottom
                ].join();
            e = `${e.qh.width}x${e.qh.height}`;
            iy("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: wQ(b.D),
                et: h,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: k,
                io: l,
                saldr: b.D.google_loader_used,
                oa: n,
                oe: m.join(","),
                qid: p,
                rafmt: b.D.google_responsive_auto_format,
                roa: q,
                slot: b.D.google_ad_slot,
                sp: t,
                tgt: w,
                tr: A,
                url: b.D.google_page_url,
                vp: e,
                pvc: ff(a)
            }, 1)
        }).catch(e => {
            Dj(8, ["Error:", e.message, c]);
            iy("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function FZ(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function GZ(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            h = d.google_ad_height,
            k = JP(d);
        e = {
            id: e,
            name: e
        };
        var l = a.D,
            m = a.C;
        mQ("browsing-topics", a.pubWin.document) && MQ(c, l) && !U(It) && !JQ(m ? .label) && (e.browsingTopics = "true");
        e.style = k ? [`width:${f}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${h}px;`;
        l = Re();
        l["allow-top-navigation-by-user-activation"] && l["allow-popups-to-escape-sandbox"] && (k || (l = "=" + encodeURIComponent("1"),
            b = ve(b, "fsb" + l)), e.sandbox = Qe().join(" "));
        d.google_video_play_muted === !1 && FZ("autoplay", e);
        l = b;
        l.length > 61440 && (l = l.substring(0, 61432), l = l.replace(/%\w?$/, ""), l = l.replace(/&[^=]*=?$/, ""), l += "&trunc=1");
        l !== b && (m = b.lastIndexOf("&", 61432), m === -1 && (m = b.lastIndexOf("?", 61432)), iy("trn", {
            ol: b.length,
            tr: m === -1 ? "" : b.substring(m + 1),
            url: b
        }, .01));
        b = l;
        f != null && (e.width = String(f));
        h != null && (e.height = String(h));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        lQ("attribution-reporting", a.pubWin.document) && FZ("attribution-reporting", e);
        lQ("run-ad-auction", a.pubWin.document) && FZ("run-ad-auction", e);
        U(xt) && (d = a.pubWin, d.credentialless !== void 0 && (U(yt) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (k) e.src = b, e = zZ(e), a = AZ(a, e, c);
        else {
            c = {};
            c.dtd = BQ((new Date).getTime(), Kn);
            c = fk(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = zZ(e);
            c && a.j.push(Rj(a.pubWin, e));
            a.ea.style.visibility = "visible";
            for (a = a.ea; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function HZ(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        IZ(a);
        d.g() && BO(new AO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = sj(d, a.pubWin);
        if (!(d.g() || U(Dt) && a.F)) return iy("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: K(a.ma, 6).toString()
        }, V(Nr)), Promise.resolve();
        var f = JZ(a.xa, d);
        f && document.documentElement.appendChild(f);
        !U(zt) || U(Dt) && !d.g() || (a.C = await UE());
        a.G = KQ(a.pubWin, d);
        vQ(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            EP(a.K, f);
            const h = sj(d);
            KP(f, a, h);
            f = f.page_level_pubvars;
            Da(f) && Pb(a.D, f)
        }
        f = mQ("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !U(wt) && !ME(HE(), 34, !1) && (NE(HE(), 34, !0), f = a.G.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: ff(a.pubWin)
            })
        }), W.na(1069, f));
        await LQ(a, a.pubWin, d, a.D, a.G, a.C);
        await a.A ? .oi;
        f = "";
        JP(b) ? (f = (d.g() ? a.xa.wh : a.xa.uh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + ek({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), qV(b, HE()), KZ(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !vP(b) || tP(c, b, e)) && KZ(b) && (f = hV(a, d));
        Dj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || ik(c);
        e = jk(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = qZ(a, a.ea, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = HE(), e.btvi = ME(c, 21, 1), OE(c, 21));
        f = fk(e, f);
        c = GZ(a, f, d);
        a.D.rpe && HR(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            sf: "force",
            Pc: !0,
            hf: !0,
            ce: a.D.google_ad_client
        });
        c = await c;
        try {
            BZ(a, c, b, d)
        } catch (h) {
            W.ba(223, h, void 0, void 0)
        }
    }

    function LZ(a) {
        const b = new cZ(a);
        return new Promise(c => {
            bZ(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function MZ(a) {
        var b = Se(r.top, "googlefcPresent");
        r.googlefc && !b && iy("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function NZ(a, b) {
        return OF(a, b === ".google.cn") ? PF(a) : Promise.resolve(null)
    }

    function OZ(a, b, c) {
        var d = c.Rj,
            e = c.uspString;
        c = c.Pi;
        d && zQ(a, d, b);
        e && (b = Gi(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && pL.hasOwnProperty(e[1]) && pL.hasOwnProperty(e[2]) && pL.hasOwnProperty(e[3]) ? (d = new oL, d = Di(d, 1, parseInt(e[0], 10)), d = N(d, 2, pL[e[1]]), d = N(d, 3, pL[e[2]]), e = N(d, 4, pL[e[3]])) : e = null, e = e ? .Mi() === 2, vi(b, 13, e));
        c && OO(a, c)
    }

    function PZ(a) {
        const b = V(Lr);
        if (b <= 0) return null;
        const c = uk(),
            d = eZ(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, hf(b, "0")]).then(e => {
            iy("adsense_paw", {
                time: uk() - c
            });
            e ? .length > 1E4 ? W.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.B = e
        }).catch(e => {
            W.ba(809, e, void 0, void 0)
        })
    }

    function IZ(a) {
        var b = a.pubWin;
        const c = a.ea;
        var d = a.D;
        const e = a.Wa,
            f = V(Rt);
        d = !ao(d.google_reactive_ad_format) && (uP(d) || d.google_reactive_ads_config);
        if (!(a.A ? .Le || f <= 0 || Ae(b) || !r.IntersectionObserver || d)) {
            a.A = {};
            var h = V(St),
                k = new wn(e),
                l = uk();
            b = new Promise(m => {
                let n = 0;
                const p = a.A,
                    q = new r.IntersectionObserver(hy(1236, t => {
                        if (t = t.find(w => w.target === c)) k.B.g.g.g.g.g({
                            lf: uk() - l,
                            Sj: ++n
                        }), p.aj = t.isIntersecting && t.intersectionRatio >= h, m()
                    }), {
                        threshold: [h]
                    });
                q.observe(c);
                p.Le = q
            });
            a.A.oi = Promise.race([b, hf(f,
                null)]).then(m => {
                k.B.g.g.g.i.g({
                    lf: uk() - l,
                    status: m === null ? "TIMEOUT" : "OK"
                })
            })
        }
    }

    function QZ(a) {
        const b = uk();
        return Promise.race([gy(832, () => iZ(a)), hf(200)]).then(c => {
            iy("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: uk() - b,
                tms: 200
            });
            return c ? .qc
        })
    }
    async function RZ(a) {
        const b = uk(),
            c = a.ma;
        nF(h => {
            if (qi(h, 1) === 0) {
                var k = !!K(c, 6);
                h = M(h, 2, k);
                k = !!K(c, 20);
                h = M(h, 6, k);
                N(h, 1, 1)
            }
        });
        KM(a.pubWin);
        MZ(a.D.google_ad_client);
        nF(h => {
            qi(h, 1) === 1 && N(h, 1, 2)
        });
        var d = new RF(a.pubWin);
        await NZ(d, L(c, 8));
        nF(h => {
            qi(h, 1) === 2 && (h = M(h, 3, !0), N(h, 1, 3))
        });
        d = K(c, 6);
        var e = K(c, 25);
        a.g = RK(QK(new SK, !(d && !RM())), e && navigator.globalPrivacyControl);
        e = [AQ(a), LZ(a.pubWin), PO(a)];
        e = await Promise.all(e);
        OZ(a.g, d, {
            Rj: e[0],
            uspString: e[1],
            Pi: e[2]
        });
        const f = uk();
        nF(h => {
            if (qi(h, 1) === 3) {
                h =
                    M(h, 3, f - b > 500);
                var k = !!a.g ? .A();
                h = M(h, 4, k);
                k = !!a.g ? .g();
                h = M(h, 5, k);
                k = !!a.g ? .j();
                h = M(h, 7, k);
                k = !!a.g ? .l();
                h = M(h, 8, k);
                N(h, 1, 4)
            }
        })
    }
    async function SZ(a) {
        const b = PZ(a),
            c = gy(868, () => QZ(a.pubWin));
        await RZ(a);
        await b;
        a.qc = await c || "";
        await HZ(a)
    }

    function yZ(a) {
        jf(a.pubWin) !== a.pubWin && (a.i |= 4);
        UO(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = Un(b);
            b = !(Zn(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return SZ(a)
    }

    function KZ(a) {
        const b = HE(),
            c = a.google_ad_section;
        uP(a) && OE(b, 15);
        if (mk(a)) {
            if (OE(b, 5) > 100) return !1
        } else if (OE(b, 6) - ME(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function JZ(a, b) {
        a: {
            var c = [r.top];
            var d = [];
            let f = 0,
                h;
            for (; h = c[f++];) {
                d.push(h);
                try {
                    if (h.frames)
                        for (let k = 0; k < h.frames.length && c.length < 1024; ++k) c.push(h.frames[k])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    lj = e;
                    break a
                }
            } catch (k) {}
            lj = null
        }
        if (lj) return null;e = Ce("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.wh : a.uh;e.src = fc(a).toString();e.style.display = "none";
        return e
    }

    function nZ(a) {
        U(Fr) && RE() && r.setTimeout(hy(1244, () => void gO(a.K || a.pubWin, {
            Va: K(a.ma, 6)
        })), 1E3)
    }

    function xZ(a) {
        const b = a.K;
        if (b && !WE(b).ads_density_stats_processed && !Lj(b) && (WE(b).ads_density_stats_processed = !0, U(xs) || Ee() < .01)) {
            const c = () => {
                if (b) {
                    var d = lJ(gJ(b), a.D.google_ad_client, b.location.hostname, wQ(a.D).split(","));
                    iy("ama_stats", d, 1)
                }
            };
            gf(b, () => {
                r.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        gy(843, () => {
            if (!r.google_sa_impl) {
                var d = new An(b);
                try {
                    pg(l => {
                        var m = new gn;
                        var n = new fn;
                        try {
                            var p = ff(window);
                            Fi(n, 1, p)
                        } catch (A) {}
                        try {
                            var q = P(Dn).g();
                            Vh(n, 2, q, Bg)
                        } catch (A) {}
                        try {
                            Hi(n, 3, window.document.URL)
                        } catch (A) {}
                        m = C(m, 2, n);
                        n = new en;
                        n = N(n, 1, 1192);
                        try {
                            var t = Ok(l ? .name) ? l.name : "Unknown error";
                            Hi(n, 2, t)
                        } catch (A) {}
                        try {
                            var w = Ok(l ? .message) ? l.message : `Caught ${l}`;
                            Hi(n, 3, w)
                        } catch (A) {}
                        try {
                            const A = Ok(l ? .stack) ? l.stack : Error().stack;
                            A && Vh(n, 4, A.split(/\n\s*/), Tg)
                        } catch (A) {}
                        l = C(m, 1, n);
                        t = new dn;
                        try {
                            Hi(t, 1, DE())
                        } catch {}
                        E(l, 6, hn, t);
                        Fi(l, 5, 1);
                        rn(d, l)
                    })
                } catch (l) {}
                var e = YY(a);
                XY(W, L(e, 2));
                iQ(K(e, 6));
                Dj(16, [3, Ki(e)]);
                var f = WY({
                        Vf: b,
                        bh: L(e, 2)
                    }),
                    h = c(f, e);
                r.google_sa_impl = l => kZ({
                    ma: e,
                    xa: h,
                    Wa: f,
                    slot: l
                });
                sQ(kQ(r));
                r.google_process_slots ? .();
                var k = (r.Prototype || {}).Version;
                k != null && iy("prtpjs", {
                    version: k
                })
            }
        })
    })(typeof sttc === "undefined" ? void 0 : sttc, DE(), function(a, b) {
        const c = ni(b, 1) > 2012 ? `_fy${ni(b,1)}` : "",
            d = L(b, 3);
        b = L(b, 2);
        return {
            Dj: id `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Cj: id `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Ug: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            mi: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            Do: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            qo: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`,
            wh: id `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            uh: id `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240725\",\"r20110914\",null,null,null,null,\".google.com.vn\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759842]]");