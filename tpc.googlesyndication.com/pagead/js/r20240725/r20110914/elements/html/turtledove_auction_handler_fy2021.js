(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = this || self;

    function aa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ba(a) {
        return a
    };
    const ca = aa(1, !0);
    var da = aa(610401301, !1),
        ea = aa(188588736, !0),
        ha = aa(645172343, ca),
        ia = aa(653718497, ca);
    var ja;
    const ka = m.navigator;
    ja = ka ? ka.userAgentData || null : null;

    function la(a) {
        return da ? ja ? ja.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function w() {
        return da ? !!ja && ja.brands.length > 0 : !1
    }

    function ma() {
        !u("Safari") || na() || (w() ? 0 : u("Coast")) || (w() ? 0 : u("Opera")) || (w() ? 0 : u("Edge")) || (w() ? la("Microsoft Edge") : u("Edg/")) || w() && la("Opera")
    }

    function na() {
        return w() ? la("Chromium") : (u("Chrome") || u("CriOS")) && !(w() ? 0 : u("Edge")) || u("Silk")
    };
    var oa;

    function pa() {
        if (oa === void 0) {
            var a = null,
                b = m.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ba,
                        createScript: ba,
                        createScriptURL: ba
                    })
                } catch (c) {
                    m.console && m.console.error(c.message)
                }
                oa = a
            } else oa = a
        }
        return oa
    };
    var qa = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function ra(a) {
        return a instanceof qa && a.constructor === qa ? a.g : "type_error:TrustedResourceUrl"
    }
    var sa = {};

    function ta(a) {
        const b = pa();
        a = b ? b.createScriptURL(a) : a;
        return new qa(a, sa)
    };
    const ua = {};
    class va {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };

    function wa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function xa(a) {
        xa[" "](a);
        return a
    }
    xa[" "] = function() {};
    var ya = w() ? !1 : u("Trident") || u("MSIE");
    !u("Android") || na();
    na();
    ma();
    ya || ma();
    /* 
     
     
     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors 
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
         http://www.apache.org/licenses/LICENSE-2.0 
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    function z(a) {
        a = a(b => {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        a.prototype.constructor = a
    };
    z(a => function(b) {
        a(this);
        this.message = b ? `${b.length} errors occurred during unsubscription: 
${b.map((c,d)=>`${d+1}) ${c.toString()}`).join("\n  ")}` : "";
        this.name = "UnsubscriptionError";
        this.errors = b
    });
    z(a => function() {
        a(this);
        this.message = "no elements in sequence"
    });
    z(a => function() {
        a(this);
        this.message = "argument out of range"
    });
    z(a => function() {
        a(this);
        this.message = "object unsubscribed"
    });
    z(a => function(b) {
        a(this);
        this.message = b
    });
    z(a => function(b) {
        a(this);
        this.message = b
    });
    z(a => function(b = null) {
        a(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = b
    });

    function za(a) {
        const b = {};
        b.winner_qid = a.getEscapedQemQueryId();
        b.cid = a.g();
        b.ecrs = D(a, 11);
        return `https://googleads.g.doubleclick.net/td/activeview?${Object.entries(b).map(([c,d])=>`${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&")}&acvw=[VIEWABILITY]`
    };

    function Aa(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var Ba = {},
        Ca = null;
    let Da;

    function Ea() {
        const a = Error();
        wa(a, "incident");
        Aa(a)
    }

    function Fa(a) {
        a = Error(a);
        wa(a, "warning");
        return a
    };

    function E(a) {
        return Array.prototype.slice.call(a)
    };
    var F = Symbol(),
        Ga = Symbol(),
        Ha = Symbol(),
        Ia = Symbol();

    function I(a) {
        a[F] |= 34;
        return a
    }

    function Ja(a) {
        a[F] |= 32;
        return a
    }

    function Ka(a, b) {
        b[F] = (a | 0) & -14591
    }

    function La(a, b) {
        b[F] = (a | 34) & -14557
    };
    var Ma = {},
        Na = {};

    function Oa(a) {
        return !(!a || typeof a !== "object" || a.ka !== Na)
    }

    function Pa(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Qa(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[F] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[F] = d | 1;
        return !0
    }
    var Ra;
    const Sa = [];
    Sa[F] = 55;
    Ra = Object.freeze(Sa);

    function Ta(a) {
        if (a & 2) throw Error();
    }
    class Ua {
        constructor(a, b, c) {
            this.l = 0;
            this.g = a;
            this.i = b;
            this.A = c
        }
        next() {
            if (this.l < this.g.length) {
                const a = this.g[this.l++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.A, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new Ua(this.g, this.i, this.A)
        }
    }
    var Va = Object.freeze({});
    let Wa = 0,
        Xa = 0;

    function Ya(a) {
        const b = a >>> 0;
        Wa = b;
        Xa = (a - b) / 4294967296 >>> 0
    }

    function Za(a) {
        if (a < 0) {
            Ya(-a);
            a = Wa;
            var b = Xa;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Wa = c >>> 0;
            Xa = d >>> 0
        } else Ya(a)
    }

    function $a() {
        var a = Wa,
            b = Xa;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };
    const ab = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function bb(a) {
        const b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : ab.test(a)
    }

    function cb(a) {
        if (!Number.isFinite(a)) throw Fa("enum");
        return a | 0
    }

    function db(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function J(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function eb(a) {
        if (a != null) {
            var b = !!b;
            if (!bb(a)) throw Fa("int64");
            if (typeof a === "string") a = fb(a);
            else if (b) a = gb(a);
            else if (a = Math.trunc(a), !Number.isSafeInteger(a)) {
                Za(a);
                b = Wa;
                var c = Xa;
                if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
                b = c * 4294967296 + (b >>> 0);
                a = a ? -b : b
            }
        }
        return a
    }

    function hb(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function gb(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                hb(b) ? a = b : (Za(a), a = $a())
            }
        }
        return a
    }

    function fb(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        hb(a) || (a.length < 16 ? Za(Number(a)) : (a = BigInt(a), Wa = Number(a & BigInt(4294967295)) >>> 0, Xa = Number(a >> BigInt(32) & BigInt(4294967295))), a = $a());
        return a
    }

    function K(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function ib(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function jb(a, b, c, d) {
        if (a != null && typeof a === "object" && a.N === Ma) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? kb(b) : new b : void 0;
        let e = c = a[F] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[F] = e);
        return new b(a)
    }

    function kb(a) {
        var b = a[Ga];
        if (b) return b;
        b = new a;
        I(b.j);
        return a[Ga] = b
    }

    function lb(a, b, c) {
        if (b) {
            if (typeof a !== "string") throw Error();
        } else a = ib(a) ? ? (c ? "" : void 0);
        return a
    };

    function mb(a) {
        if (Math.random() > .01 || typeof Proxy !== "function") return a;
        let b = nb ? .get(a);
        if (b) return b;
        b = new Proxy(a, {
            set(c, d, e) {
                ob();
                c[d] = e;
                return !0
            }
        });
        pb(a, b);
        return b
    }

    function ob() {
        Ea()
    }
    let nb = void 0,
        qb = void 0;

    function pb(a, b) {
        (nb || (nb = new WeakMap)).set(a, b);
        (qb || (qb = new WeakMap)).set(b, a)
    };
    let rb;

    function sb(a, b) {
        rb = b;
        a = new a(b);
        rb = void 0;
        return a
    };
    const tb = {},
        ub = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function vb(a) {
        return a
    }

    function wb(a) {
        if (a.C & 2) throw Error("Cannot mutate an immutable Map");
    }
    var M = class extends ub {
        constructor(a, b, c = vb, d = vb) {
            super();
            let e = a[F] | 0;
            e |= 64;
            this.C = a[F] = e;
            this.J = b;
            this.D = c;
            this.S = this.J ? xb : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let g = h[1];
                b ? g === void 0 && (g = null) : g = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, g)
            }
        }
        Y(a = yb) {
            if (this.size !== 0) return this.R(a)
        }
        R(a = yb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            wb(this);
            super.clear()
        }
        delete(a) {
            wb(this);
            return super.delete(this.D(a, !0, !1))
        }
        entries() {
            var a = this.W();
            return new Ua(a, zb, this)
        }
        keys() {
            return this.ja()
        }
        values() {
            var a = this.W();
            return new Ua(a, M.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            wb(this);
            a = this.D(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.S(b, !0, !0, this.J, !1, this.C))
        }
        has(a) {
            return super.has(this.D(a, !1, !1))
        }
        get(a) {
            a = this.D(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.J;
                return c ? (c = this.S(b, !1, !0, c, this.fa, this.C),
                    c !== b && super.set(a, c), c) : b
            }
        }
        W() {
            return Array.from(super.keys())
        }
        ja() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    M.prototype.toJSON = void 0;
    M.prototype.ka = Na;

    function xb(a, b, c, d, e, f) {
        a = jb(a, d, c, f);
        e && (a = Ab(a));
        return a
    }

    function yb(a) {
        return a
    }

    function zb(a) {
        return [a, this.get(a)]
    }
    let Bb;

    function Cb() {
        return Bb || (Bb = new M(I([]), void 0, void 0, void 0, tb))
    };

    function Db(a, b) {
        return Eb(b)
    }

    function Eb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Qa(a, void 0, 0)) return
                    } else {
                        if (a != null && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof M) return a.Y()
                    }
        }
        return a
    };

    function Fb(a, b, c) {
        a = E(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function Gb(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Qa(a, void 0, 0) ? void 0 : e && (a[F] | 0) & 2 ? a : Hb(a, b, c, d !== void 0, e);
            else if (Pa(a)) {
                const f = {};
                for (let h in a) f[h] = Gb(a[h], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Hb(a, b, c, d, e) {
        const f = d || c ? a[F] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = E(a);
        for (let h = 0; h < a.length; h++) a[h] = Gb(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Ib(a) {
        return Gb(a, Jb, void 0, void 0, !1)
    }

    function Jb(a) {
        return a.N === Ma ? a.toJSON() : a instanceof M ? a.Y(Ib) : Eb(a)
    };

    function Kb(a, b, c = La) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[F] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[F] = (d | 34) & -12293, a) : Hb(a, Kb, d & 4 ? La : c, !0, !0)
            }
            a.N === Ma ? (c = a.j, d = c[F], a = d & 2 ? a : sb(a.constructor, Lb(c, d, !0))) : a instanceof M && !(a.C & 2) && (c = I(a.R(Kb)), a = new M(c, a.J, a.D, a.S));
            return a
        }
    }

    function Lb(a, b, c) {
        const d = c || b & 2 ? La : Ka,
            e = !!(b & 32);
        a = Fb(a, b, f => Kb(f, e, d));
        a[F] = a[F] | 32 | (c ? 2 : 0);
        return a
    }

    function Ab(a) {
        const b = a.j,
            c = b[F];
        return c & 2 ? sb(a.constructor, Lb(b, c, !1)) : a
    };

    function N(a, b) {
        a = a.j;
        return O(a, a[F], b)
    }

    function Mb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function O(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Mb(a, b, e, c) && Ha != null && (a = Da ? ? (Da = {}), b = a[Ha] || 0, b >= 4 || (a[Ha] = b + 1, Ea())), d) : Mb(a, b, e, c)
        }
    }

    function Nb(a, b, c) {
        const d = a.j;
        let e = d[F];
        Ta(e);
        P(d, e, b, c);
        return a
    }

    function P(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !ha) {
            let h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[F] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Ob(a, b, c) {
        a = O(a, b, c);
        return Array.isArray(a) ? a : Ra
    }

    function Pb(a, b) {
        a === 0 && (a = Qb(a, b));
        return a | 1
    }

    function R(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Rb(a, b, c, d, e, f) {
        const h = b & 2;
        a: {
            var k = c,
                g = b & 2;c = !1;
            if (k == null) {
                if (g) {
                    a = Cb();
                    break a
                }
                k = []
            } else if (k.constructor === M) {
                if ((k.C & 2) == 0 || g) {
                    a = k;
                    break a
                }
                k = k.R()
            } else Array.isArray(k) ? c = !!((k[F] | 0) & 2) : k = [];
            if (g) {
                if (!k.length) {
                    a = Cb();
                    break a
                }
                c || (c = !0, I(k))
            } else if (c) {
                c = !1;
                g = E(k);
                for (k = 0; k < g.length; k++) {
                    const l = g[k] = E(g[k]);
                    Array.isArray(l[1]) && (l[1] = I(l[1]))
                }
                k = g
            }
            c || ((k[F] | 0) & 64 ? k[F] &= -33 : 32 & b && Ja(k));f = new M(k, e, lb, f);P(a, b, d, f, !1);a = f
        }!h && e && (a.fa = !0);
        return a
    }

    function Sb(a, b) {
        a = a.j;
        const c = a[F];
        return Rb(a, c, O(a, c, b), b, void 0, lb)
    }

    function Tb(a) {
        var b = Ub;
        a = a.j;
        const c = a[F];
        return Rb(a, c, O(a, c, 24), 24, b)
    }

    function S(a, b, c, d) {
        const e = a.j;
        let f = e[F];
        Ta(f);
        P(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Vb(a, b, c, d) {
        const e = a.j;
        var f = e[F];
        Ta(f);
        if (d == null) {
            var h = e[Ia] ? ? (e[Ia] = new Map);
            if (Wb(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else {
            h = e[Ia] ? ? (e[Ia] = new Map);
            const k = Wb(h, e, f, c);
            k !== b && (k && (f = P(e, f, k)), h.set(c, b))
        }
        P(e, f, b, d);
        return a
    }

    function Wb(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const h = d[f];
            O(b, c, h) != null && (e !== 0 && (c = P(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    }

    function Xb(a, b, c) {
        a = a.j;
        let d = a[F];
        const e = O(a, d, c, !1);
        b = jb(e, b, !1, d);
        b !== e && b != null && P(a, d, c, b, !1);
        return b
    }

    function Yb(a, b, c) {
        return (a = Xb(a, b, c)) ? a : kb(b)
    }

    function T(a, b, c) {
        b = Xb(a, b, c);
        if (b == null) return b;
        a = a.j;
        let d = a[F];
        if (!(d & 2)) {
            const e = Ab(b);
            e !== b && (b = e, P(a, d, c, b, !1))
        }
        return b
    }

    function Zb(a, b, c, d, e, f, h) {
        var k = !!(2 & b);
        e = k ? 1 : e;
        f = !!f;
        h && (h = !k);
        k = Ob(a, b, d);
        var g = k[F] | 0,
            l = !!(4 & g);
        if (!l) {
            g = Pb(g, b);
            var n = k,
                v = b;
            const p = !!(2 & g);
            p && (v |= 2);
            let q = !p,
                y = !0,
                A = 0,
                t = 0;
            for (; A < n.length; A++) {
                const C = jb(n[A], c, !1, v);
                if (C instanceof c) {
                    if (!p) {
                        const B = !!((C.j[F] | 0) & 2);
                        q && (q = !B);
                        y && (y = B)
                    }
                    n[t++] = C
                }
            }
            t < A && (n.length = t);
            g |= 4;
            g = y ? g | 16 : g & -17;
            g = q ? g | 8 : g & -9;
            n[F] = g;
            p && Object.freeze(n)
        }
        if (h && !(8 & g || !k.length && (e === 1 || e === 4 && 32 & g))) {
            R(g) && (k = E(k), g = Qb(g, b), b = P(a, b, d, k));
            c = k;
            h = g;
            for (n = 0; n < c.length; n++) g = c[n],
                v = Ab(g), g !== v && (c[n] = v);
            h |= 8;
            h = c.length ? h & -17 : h | 16;
            g = c[F] = h
        }
        let x;
        e === 1 || e === 4 && 32 & g ? R(g) || (b = g, g |= !k.length || 16 & g && (!l || 32 & g) ? 2 : 2048, g !== b && (k[F] = g), Object.freeze(k)) : (l = e !== 5 ? !1 : !!(32 & g) || R(g) || !!nb ? .get(k), (e === 2 || l) && R(g) && (k = E(k), g = Qb(g, b), g = $b(g, b, f), k[F] = g, b = P(a, b, d, k)), R(g) || (a = g, g = $b(g, b, f), g !== a && (k[F] = g)), l && (x = mb(k)));
        return x || k
    }

    function ac(a, b, c) {
        a = a.j;
        const d = a[F];
        return Zb(a, d, b, c, void 0 === Va ? 2 : ia ? 5 : 2, !1, !(2 & d))
    }

    function bc(a, b, c) {
        c == null && (c = void 0);
        return Nb(a, b, c)
    }

    function Qb(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function $b(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function U(a, b) {
        return a ? ? b
    }

    function V(a, b) {
        a = N(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function W(a, b) {
        return U(db(N(a, b)), 0)
    }

    function D(a, b) {
        return U(ib(N(a, b)), "")
    }

    function cc(a, b) {
        a = N(a, b);
        a = a == null ? a : bb(a) ? typeof a === "string" ? fb(a) : gb(a) : void 0;
        return a ? ? "0"
    }

    function dc(a, b) {
        if (b != null) {
            if (typeof b !== "number") throw Fa("int32");
            if (!Number.isFinite(b)) throw Fa("int32");
            b |= 0
        }
        return S(a, 1, b, 0)
    };
    let ec;

    function fc(a) {
        try {
            return ec = !0, JSON.stringify(gc(a), Db)
        } finally {
            ec = !1
        }
    }
    var X = class {
        constructor(a) {
            a: {
                a == null && (a = rb);rb = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[F] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Pa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[F] = b
            }
            this.j = a
        }
        i() {
            return gc(this)
        }
        toJSON() {
            return gc(this)
        }
        A() {
            const a = this.j;
            return sb(this.constructor, Lb(a, a[F], !1))
        }
    };
    X.prototype.N = Ma;
    X.prototype.toString = function() {
        try {
            return ec = !0, gc(this).toString()
        } finally {
            ec = !1
        }
    };

    function gc(a) {
        var b = ec ? a.j : Hb(a.j, Jb, void 0, void 0, !1);
        var c = !ec;
        var d = ea ? void 0 : a.constructor.B;
        var e = (c ? a.j : b)[F];
        if (a = b.length) {
            var f = b[a - 1],
                h = Pa(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (h) {
                b: {
                    var g = f;
                    var l = {};h = !1;
                    if (g)
                        for (var n in g) {
                            if (isNaN(+n)) {
                                l[n] = g[n];
                                continue
                            }
                            let p = g[n];
                            Array.isArray(p) && (Qa(p, d, +n) || Oa(p) && p.size === 0) && (p = null);
                            p == null && (h = !0);
                            p != null && (l[n] = p)
                        }
                    if (h) {
                        for (var v in l) break b;
                        l = null
                    } else l = g
                }
                g = l == null ? f != null : l !== f
            }
            for (var x; a > 0; a--) {
                v = a - 1;
                n = k[v];
                v -= e;
                if (!(n == null ||
                        Qa(n, d, v) || Oa(n) && n.size === 0)) break;
                x = !0
            }
            if (k !== b || g || x) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (x || g || l) k.length = a;
                l && k.push(l)
            }
            b = k
        }
        return b
    };

    function hc(a) {
        var b = ic;
        b instanceof jc && (ic = void 0);
        if (!a) {
            var c = Error;
            b instanceof jc && (b = b.msg);
            b = typeof b === "function" ? b() : b;
            throw c(b || String(a));
        }
    }

    function kc(a) {
        a.sa = !0;
        return a
    }
    class jc {
        constructor(a) {
            this.msg = a
        }
    }
    let ic = void 0;
    var lc = class extends X {
        constructor() {
            super()
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function mc(a, ...b) {
        if (b.length === 0) return ta(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return ta(c)
    };
    var nc = class extends X {};
    var oc = class extends X {
        g() {
            return V(this, 4)
        }
    };
    var pc = class extends X {
        getContentUrl() {
            return D(this, 2)
        }
    };
    pc.B = [11];
    var qc = class extends X {
        getEscapedQemQueryId() {
            return D(this, 4)
        }
    };
    qc.B = [2, 23, 31];
    var rc = class extends X {};
    var sc = class extends X {};
    var tc = class extends X {};
    var uc = class extends X {
        g() {
            Nb(this, 2)
        }
    };
    var vc = class extends X {
        getEscapedQemQueryId() {
            return D(this, 2)
        }
        la() {
            return T(this, uc, 5)
        }
        g() {
            return D(this, 19)
        }
        l() {
            return V(this, 21)
        }
        oa() {
            return V(this, 25)
        }
    };
    vc.B = [30];
    var Ub = class extends X {};
    var wc = class extends X {
        g() {
            return Yb(this, vc, 5)
        }
        getWidth() {
            return W(this, 9)
        }
        getHeight() {
            return W(this, 10)
        }
    };
    wc.B = [3, 7, 27, 11, 32];
    var xc = function(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = sb(a, Ja(b))
            }
            return b
        }
    }(class extends X {});
    var yc = class {
        constructor(a, b = !1) {
            this.key = a;
            this.defaultValue = b;
            this.valueType = "boolean"
        }
    };
    var zc = new yc("45623997", !0),
        Ac = new class {
            constructor(a, b = 0) {
                this.key = a;
                this.defaultValue = b;
                this.valueType = "number"
            }
        }("45622264", 10),
        Bc = new yc("45620828");

    function Cc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ec() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Fc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let Gc = [];
    const Hc = () => {
        const a = Gc;
        Gc = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Ic = (a, b) => {
        a.readyState === "complete" || a.readyState === "interactive" ? (Gc.push(b), Gc.length == 1 && (window.Promise ? Promise.resolve().then(Hc) : window.setImmediate ? setImmediate(Hc) : setTimeout(Hc, 0))) : a.addEventListener("DOMContentLoaded", b)
    };

    function Jc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Kc(a, b, c = null, d = !1, e = !1) {
        Lc(a, b, c, d, e)
    }

    function Lc(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Jc("IMG", a.document);
        if (c || d) {
            const h = k => {
                c && c(k);
                if (d) {
                    k = a.google_image_requests;
                    const g = Array.prototype.indexOf.call(k, f, void 0);
                    g >= 0 && Array.prototype.splice.call(k, g, 1)
                }
                f.removeEventListener && f.removeEventListener("load", h, !1);
                f.removeEventListener && f.removeEventListener("error", h, !1)
            };
            Cc(f, "load", h);
            Cc(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Oc = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            Fc(a, (c, d) => {
                if (c || c === 0) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            Nc(b, !1)
        },
        Nc = (a, b = !1) => {
            var c = window;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Kc(c, a, void 0, b, !1)
        };
    let Pc = 0;

    function Qc() {
        const a = Rc(108, document.currentScript);
        return a && a.getAttribute("data-jc-version") || "unknown"
    }

    function Rc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Sc() {
        if (!(Math.random() > .01)) {
            var a = Rc(108, document.currentScript);
            a = `https://${a&&a.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${108}&version=${Qc()}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Kc(b, a, void 0, !1)
        }
    };

    function Tc(a) {
        Uc || (Uc = new Vc);
        const b = Uc.g[a.key];
        if (a.valueType === "proto") {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var Wc = class {
        constructor() {
            this.g = {}
        }
    };
    var Vc = class extends Wc {
            constructor() {
                super();
                var a = Rc(Pc, document.currentScript);
                a = a && a.getAttribute("data-jc-flags") || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.g = JSON.parse(a)
                } catch (b) {}
            }
        },
        Uc;
    var Xc = class extends X {
        constructor() {
            super()
        }
    };

    function Yc(a) {
        return typeof FencedFrameConfig === "function" && a instanceof FencedFrameConfig
    };
    var Zc = class extends X {};
    Zc.B = [1];
    var $c = class extends X {
            constructor() {
                super()
            }
        },
        ad = [3];
    var cd = class {
        constructor(a) {
            this.ga = a
        }
        send(a, b) {
            var c = b.j,
                d = c[F];
            Ta(d);
            var e = O(c, d, 2),
                f = Ab(jb(e, Zc, !0, d));
            e !== f && P(c, d, 2, f);
            d = f.j;
            c = 9;
            e = d[F];
            Ta(e);
            var h = e & 2;
            f = O(d, e, 1);
            Array.isArray(f) || (f = Ra);
            const k = !!(e & 32);
            let g = f[F] | 0;
            g === 0 && k && !h ? (g |= 33, f[F] = g) : g & 1 || (g |= 1, f[F] = g);
            if (h) g & 2 || I(f), Object.freeze(f);
            else if (2 & g || 2048 & g) f = E(f), h = 1, k && (h |= 32), f[F] = h, P(d, e, 1, f);
            d = f;
            c = cb(c);
            d.push(c);
            bd(a, b)
        }
    };

    function dd({
        L: a,
        O: b,
        da: c,
        F: d
    }) {
        if (typeof c === "string" || Yc(c)) c = 4;
        else switch (c) {
            case null:
                c = 5;
                break;
            case 2:
                c = 1;
                break;
            case 3:
                c = 3;
                break;
            case 1:
                c = 2;
                break;
            case 4:
            case 0:
                c = 0;
                break;
            default:
                c = 0
        }
        a = {
            L: a,
            result: c,
            O: b,
            F: d
        };
        b = new Xc;
        d = a.result;
        d = d == null ? d : cb(d);
        b = S(b, 3, d, 0);
        b = S(b, 2, K(a.O), "");
        d = dc(b, a.L);
        a.ia !== void 0 && S(d, 4, K(a.ia), "");
        b = new $c;
        a.F !== void 0 && dc(b, a.F);
        a = d;
        a == null && (a = void 0);
        Vb(b, 3, ad, a);
        return b
    }
    var ed = class {
        constructor(a, b) {
            var c = Ec();
            this.i = a;
            this.l = c;
            this.g = new cd(b)
        }
        log(a, b, c) {
            a = c.F ? ? this.g.ga;
            a === 0 || this.l > 1 / a || this.g.send(this.i, b({
                F: a,
                ...c
            }))
        }
    };
    var fd = class extends X {
        constructor() {
            super()
        }
    };
    class gd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const hd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var id = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        jd = class {
            constructor(a, b) {
                this.url = a;
                this.V = !!b;
                this.depth = null
            }
        };
    let kd = null;

    function ld() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function md() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var nd = class {
        constructor(a, b, c) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Y = m.performance,
        od = !!(Y && Y.mark && Y.measure && Y.clearMarks),
        pd = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = od) {
                var b;
                if (kd === null) {
                    kd = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (kd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = kd;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function qd(a) {
        a && Y && pd() && (Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class rd {
        constructor() {
            this.events = [];
            this.i = m || m;
            let a = null;
            m && (m.google_js_reporting_queue = m.google_js_reporting_queue || [], this.events = m.google_js_reporting_queue, a = m.google_measure_js_timing);
            this.g = pd() || (a != null ? a : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            const c = md() || ld();
            a = new nd(a, b, c);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Y && pd() && Y.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                var b = md() || ld();
                a.duration = b - a.value;
                b = `goog_${a.label}_${a.uniqueId}_end`;
                Y && pd() &&
                    Y.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    };

    function sd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function td(a, b, c, d, e) {
        const f = [];
        Fc(a, function(h, k) {
            (h = ud(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }

    function ud(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(ud(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(td(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function vd(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function wd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = vd(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                k = a.i[h];
            for (let g = 0; g < k.length; g++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let l = td(k[g], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.l;
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
    class xd {
        constructor() {
            this.l = "&";
            this.i = {};
            this.A = 0;
            this.g = []
        }
    };

    function yd(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    }

    function zd(a) {
        var b = Ad;
        a.catch(c => {
            c = c ? c : "unknown rejection";
            c = c instanceof Error ? c : Error(c);
            let d;
            try {
                const H = new xd;
                var e = H;
                e.g.push(1);
                e.i[1] = sd("context", 1009);
                c.error && c.meta && c.id || (c = new gd(c, {
                    message: yd(c)
                }));
                if (c.msg) {
                    e = H;
                    var f = c.msg.substring(0, 512);
                    e.g.push(2);
                    e.i[2] = sd("msg", f)
                }
                f = H;
                var h = [c.meta || {}];
                f.g.push(3);
                f.i[3] = h;
                c = m;
                h = [];
                let r;
                f = null;
                do {
                    var k = c;
                    try {
                        var g;
                        if (g = !!k && k.location.href != null) b: {
                            try {
                                xa(k.foo);
                                g = !0;
                                break b
                            } catch (Q) {}
                            g = !1
                        }
                        var l = g
                    } catch {
                        l = !1
                    }
                    l ? (r = k.location.href, f = k.document &&
                        k.document.referrer || null) : (r = f, f = null);
                    h.push(new jd(r || ""));
                    try {
                        c = k.parent
                    } catch (Q) {
                        c = null
                    }
                } while (c && k != c);
                for (let Q = 0, Mc = h.length - 1; Q <= Mc; ++Q) h[Q].depth = Mc - Q;
                k = m;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == h.length - 1)
                    for (l = 1; l < h.length; ++l) {
                        var n = h[l];
                        n.url || (n.url = k.location.ancestorOrigins[l - 1] || "", n.V = !0)
                    }
                var v = h;
                let L = new jd(m.location.href, !1);
                k = null;
                const G = v.length - 1;
                for (n = G; n >= 0; --n) {
                    var x = v[n];
                    !k && hd.test(x.url) && (k = x);
                    if (x.url && !x.V) {
                        L = x;
                        break
                    }
                }
                x = null;
                const fa = v.length && v[G].url;
                L.depth != 0 && fa && (x = v[G]);
                d = new id(L, x);
                if (d.i) {
                    v = H;
                    var p = d.i.url || "";
                    v.g.push(4);
                    v.i[4] = sd("top", p)
                }
                var q = {
                    url: d.g.url || ""
                };
                if (d.g.url) {
                    var y = d.g.url.match(Dc),
                        A = y[1],
                        t = y[3],
                        C = y[4];
                    p = "";
                    A && (p += A + ":");
                    t && (p += "//", p += t, C && (p += ":" + C));
                    var B = p
                } else B = "";
                A = H;
                q = [q, {
                    url: B
                }];
                A.g.push(5);
                A.i[5] = q;
                Bd(b.i, "jserror", H, b.g)
            } catch (H) {
                try {
                    Bd(b.i, "jserror", {
                        context: "ecmserr",
                        rctx: 1009,
                        msg: yd(H),
                        url: d && d.g.url
                    }, b.g)
                } catch (r) {}
            }
        })
    }
    var Dd = class {
        constructor(a = null) {
            this.i = Cd;
            this.timer = a;
            this.g = !1
        }
    };

    function Ed(a, b) {
        try {
            const c = d => [{
                [d.Z]: d.X
            }];
            return JSON.stringify([a.filter(d => d.M).map(c), b.i(), a.filter(d => !d.M).map(c)])
        } catch (c) {
            return Fd(c, b), ""
        }
    }

    function Fd(a, b) {
        try {
            var c = yd(a instanceof Error ? a : Error(String(a))),
                d = N(b, 1);
            var e = d == null ? d : Number.isFinite(d) ? d | 0 : void 0;
            Oc({
                m: c,
                b: (e ? ? 0) || null,
                v: D(b, 2) || null
            })
        } catch (f) {}
    }
    var Gd = class {
        constructor(a, b) {
            var c = new fd;
            a = S(c, 1, a == null ? a : cb(a), 0);
            b = S(a, 2, K(b), "");
            a = b.j;
            c = a[F];
            this.g = c & 2 ? b : sb(b.constructor, Lb(a, c, !0))
        }
    };

    function Hd(a, b) {
        return Vb(a, 1, Id, K(b))
    }
    var Jd = class extends X {},
        Id = [1, 2, 3];
    var Kd = class extends X {
            constructor() {
                super()
            }
        },
        Ld = [2, 4];

    function Md(a) {
        var b = new Nd;
        return S(b, 1, K(a), "")
    }

    function Od(a, b) {
        var c = a.j;
        const d = c[F];
        Ta(d);
        c = Zb(c, d, Jd, 4, 2, !0);
        b = b != null ? b : new Jd;
        c.push(b);
        c[F] = (b.j[F] | 0) & 2 ? c[F] & -9 : c[F] & -17;
        return a
    }
    var Nd = class extends X {
        constructor() {
            super()
        }
    };
    Nd.B = [4];
    class Pd {
        constructor(a) {
            this.H = new Qd(a)
        }
    }
    class Qd {
        constructor(a) {
            this.I = new Rd(a)
        }
    }
    class Rd {
        constructor(a) {
            this.P = new Sd(a);
            this.ea = new Td(a)
        }
    }
    class Td {
        constructor(a) {
            this.o = ({
                u: b,
                K: c,
                status: d
            }) => {
                c = Od(Od(Md("SOomke"), Hd(new Jd, c)), Hd(new Jd, d));
                d = new Kd;
                b = Vb(d, 2, Ld, eb(Math.round(b)));
                b = bc(c, 3, b);
                a(b)
            }
        }
    }
    class Sd {
        constructor(a) {
            this.T = new Ud(a)
        }
    }
    class Ud {
        constructor(a) {
            this.o = ({
                u: b,
                status: c
            }) => {
                c = Od(Md("TP3y1d"), Hd(new Jd, c));
                var d = new Kd;
                b = Vb(d, 2, Ld, eb(Math.round(b)));
                b = bc(c, 3, b);
                a(b)
            }
        }
    }
    class Vd extends Gd {
        constructor() {
            super(...arguments);
            this.G = new Pd(a => Wd(this, a))
        }
    }

    function bd(a, ...b) {
        Xd(a, ...b.map(c => ({
            M: !0,
            Z: 21,
            X: c.i()
        })))
    }

    function Wd(a, ...b) {
        Xd(a, ...b.map(c => ({
            M: !1,
            Z: 1,
            X: c.i()
        })))
    }
    var Yd = class extends Vd {};
    var Zd = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Xd(a, ...b) {
        try {
            const c = Ed(b, a.g);
            a.i("https://pagead2.googlesyndication.com/pagead/ping?e=1", c)
        } catch (c) {
            Fd(c, a.g)
        }
    }
    var $d = class extends Yd {
            constructor() {
                super(13, Qc());
                this.i = Zd
            }
        },
        ae = class extends $d {};
    var be = kc(a => typeof a === "string"),
        ce = kc(a => !!a && (typeof a === "object" || typeof a === "function"));

    function de(a) {
        return kc(b => {
            if (!ce(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.ta === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    };
    class ee {};

    function Bd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof xd ? f = c : (f = new xd, Fc(c, (k, g) => {
                var l = f;
                const n = l.A++;
                k = sd(g, k);
                l.g.push(n);
                l.i[n] = k
            }));
            const h = wd(f, "/pagead/gen_204?id=" + b + "&");
            h && Kc(m, h)
        } catch (f) {}
    }

    function fe() {
        var a = Cd,
            b = m.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class ge {
        constructor() {
            this.g = Math.random()
        }
    };
    let Cd, Ad;
    const Z = new rd;
    var he = () => {
        m.google_measure_js_timing || (Z.g = !1, Z.events != Z.i.google_js_reporting_queue && (pd() && Array.prototype.forEach.call(Z.events, qd, void 0), Z.events.length = 0))
    };
    (a => {
        Cd = a || new ge;
        typeof m.google_srt !== "number" && (m.google_srt = Math.random());
        fe();
        Ad = new Dd(Z);
        Ad.g = !0;
        m.document.readyState == "complete" ? he() : Z.g && Cc(m, "load", () => {
            he()
        })
    })();
    var ie = (a, b) => {
        var c = ee;
        var d = "U";
        c.U && c.hasOwnProperty(d) || (d = new c, c.U = d);
        c = [];
        !b.eid && c.length && (b.eid = c.toString());
        Bd(Cd, a, b, !0, 1)
    };
    const je = navigator;
    var ke = /(\$\{GDPR})/gi,
        le = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        me = /(\$\{ADDTL_CONSENT})/gi,
        ne = /(\$\{AD_WIDTH})/gi,
        oe = /(\$\{AD_HEIGHT})/gi,
        pe = /(\$\{RENDER_DATA})/gi;
    async function qe(a, b) {
        if ((typeof a !== "string" || a.startsWith("urn:")) && je.deprecatedURNToURL && je.deprecatedReplaceInURN) {
            var c = await je.deprecatedURNToURL(a),
                d = {},
                e = b.gdprApplies || "";
            (c.match(ke) ? ? []).forEach(n => {
                d[n] = e
            });
            var f = b.ha || "";
            (c.match(le) ? ? []).forEach(n => {
                d[n] = f
            });
            var h = b.ca || "";
            (c.match(me) ? ? []).forEach(n => {
                d[n] = h
            });
            var k = b.ba || "";
            (c.match(ne) ? ? []).forEach(n => {
                d[n] = k
            });
            var g = b.aa || "";
            (c.match(oe) ? ? []).forEach(n => {
                d[n] = g
            });
            var l = b.ma || "";
            (c.match(pe) ? ? []).forEach(n => {
                d[n] = l
            });
            await je.deprecatedReplaceInURN(a,
                d)
        }
    }

    function re(a, b) {
        if (a.componentAuctions ? .length === 1 && ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"].includes(a.componentAuctions[0].seller) && Xb(b, pc, 26) !== void 0) {
            b = fc(Yb(b, pc, 26));
            a = [];
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                e > 255 && (a[c++] = e & 255, e >>= 8);
                a[c++] = e
            }
            b = 3;
            b === void 0 && (b = 0);
            if (!Ca)
                for (Ca = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; e < 5; e++) {
                    var f = c.concat(d[e].split(""));
                    Ba[e] =
                        f;
                    for (var h = 0; h < f.length; h++) {
                        var k = f[h];
                        Ca[k] === void 0 && (Ca[k] = h)
                    }
                }
            b = Ba[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                var g = a[f],
                    l = a[f + 1];
                k = a[f + 2];
                h = b[g >> 2];
                g = b[(g & 3) << 4 | l >> 4];
                l = b[(l & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[e++] = h + g + l + k
            }
            h = 0;
            k = d;
            switch (a.length - f) {
                case 2:
                    h = a[f + 1], k = b[(h & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d
            }
            a = c.join("")
        } else a = "";
        return a
    };
    de({
        google_signals: de({
            buyer_reporting_id: be
        })
    });

    function se(a, b, c) {
        let d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner";
        var e = V(c, 18),
            f = V(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = D(c, 6);
        e && (d += "&winner_qid" + `=${encodeURIComponent(e)}`);
        f && (d += "&xfpQid" + `=${encodeURIComponent(f)}`);
        V(c, 4) && (d += "&is_plog=1");
        (e = D(c, 11)) && (d += "&ecrs" + `=${e}`);
        c ? .g() && (d += "&cid" + `=${encodeURIComponent(c.g())}`);
        c ? .l() || (d += "&turtlexTest=1");
        d += `&${"applied_timeout_ms"}=${b}` + `&${"duration_ms"}=${Math.round(a)}`;
        Nc(d)
    };

    function te(a) {
        const {
            na: b,
            ra: c,
            va: d,
            auctionNonce: e,
            pa: f = 0,
            qa: h,
            wa: k
        } = a;
        a = !V(b, 14);
        var g = {};
        for (var l of ac(b, rc, 7)) {
            var n = {},
                v = d ? .G.H.I.ea,
                x = D(l, 1);
            if (D(l, 2).length) try {
                n = JSON.parse(D(l, 2)), Ec() * 100 < 1 && v ? .o({
                    K: x,
                    status: "SUCCESS",
                    u: 100
                })
            } catch (fa) {
                v ? .o({
                    K: x,
                    status: "ERROR",
                    u: 1
                })
            } else v ? .o({
                K: x,
                status: "EMPTY",
                u: 1
            });
            g[D(l, 1)] = n
        }
        if (l = T(b, qc, 6)) g["https://googleads.g.doubleclick.net"] = l.i(), g["https://td.doubleclick.net"] = l.i();
        l = {};
        for (var p of ac(b, tc, 11)) l[D(p, 1)] = W(p, 2);
        p = {};
        W(b, 21) !== 0 && (p["*"] = W(b,
            21));
        if (ac(b, sc, 32).length > 0) {
            var q = {};
            for (var y of ac(b, sc, 32)) q[D(y, 1)] = W(y, 2)
        }
        y = {};
        J(N(b, 18)) != null && (y["https://googleads.g.doubleclick.net"] = U(J(N(b, 18)), 0), y["https://td.doubleclick.net"] = U(J(N(b, 18)), 0));
        for (var A of Tb(b)) U(J(N(A[1], 4)), 0) && (n = A[0], v = U(J(N(A[1], 4)), 0), y[n] = v);
        A = D(b, 1).split("/td/")[0];
        n = T(b, vc, 5) ? .A();
        n ? .la() ? .g();
        v = D(b, 1);
        x = D(b, 2);
        var t = Va === Va ? 2 : ia ? 5 : 2,
            C = b.j,
            B = C[F];
        const H = 2 & B ? 1 : t;
        t = Ob(C, B, 3);
        var r = t[F] | 0;
        if (!(4 & r)) {
            if (4 & r || Object.isFrozen(t)) t = E(t), r = Qb(r, B), B = P(C, B, 3,
                t);
            var L = 0;
            let fa = 0;
            for (; L < t.length; L++) {
                const Q = ib(t[L]);
                Q != null && (t[fa++] = Q)
            }
            fa < L && (t.length = fa);
            r = Pb(r, B);
            r = (r | 20) & -4097;
            r &= -8193;
            t[F] = r;
            2 & r && Object.freeze(t)
        }
        var G;
        H === 1 || H === 4 && 32 & r ? R(r) || (B = r, r |= 2, r !== B && (t[F] = r), Object.freeze(t)) : (L = H !== 5 ? !1 : !!(32 & r) || R(r) || !!nb ? .get(t), (H === 2 || L) && R(r) && (t = E(t), r = Qb(r, B), r = $b(r, B, !1), t[F] = r, B = P(C, B, 3, t)), R(r) || (C = r, r = $b(r, B, !1), r !== C && (t[F] = r)), L && (G = mb(t)));
        q = {
            seller: A,
            decisionLogicUrl: v,
            trustedScoringSignalsUrl: x,
            interestGroupBuyers: G || t,
            sellerExperimentGroupId: U(J(N(b,
                17)), 0),
            auctionSignals: JSON.parse(D(b, 4) || "{}"),
            sellerSignals: n ? .i() || [],
            sellerTimeout: W(b, 15) || 50,
            perBuyerExperimentGroupIds: y,
            perBuyerSignals: g,
            perBuyerTimeouts: l,
            perBuyerCumulativeTimeouts: p,
            reportingTimeout: 5E3,
            ...(q ? {
                perBuyerGroupLimits: q
            } : {}),
            ...(a ? {
                resolveToConfig: a
            } : {})
        };
        b ? .g().oa() && (q.sellerCurrency = "USD", q.perBuyerCurrencies = Object.fromEntries(Sb(b, 22)));
        D(b, 28) && (q.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        ue(q.interestGroupBuyers, h) && (q.auctionReportBuyerKeys = q.interestGroupBuyers.map(ve),
            G = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                }
            }, k || (G.totalGenerateBidLatency = {
                bucket: BigInt(2),
                scale: 1
            }, G.totalSignalsFetchLatency = {
                bucket: BigInt(3),
                scale: 1
            }), q.auctionReportBuyers = G, q.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: BigInt(0)
            });
        e && (q.auctionNonce = e, q.additionalBids = Promise.resolve());
        Sb(b, 33).size && (q.deprecatedRenderURLReplacements = Object.fromEntries(Sb(b, 33).entries()), (G = q.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) &&
            (q.deprecatedRenderURLReplacements["${RENDER_DATA}"] = G));
        switch (f) {
            case 1:
                q.allSlotsRequestedSizes = [{
                    width: b.getWidth(),
                    height: b.getHeight()
                }];
                break;
            case 2:
                q.allSlotsRequestedSizes = [{
                    width: 123456789,
                    height: Number(`${b.getWidth()}999${b.getHeight()}`)
                }]
        }
        G = D(b, 1);
        g = U(J(N(b, 17)), 0);
        l = new vc;
        p = b.g();
        Xb(p, uc, 5) !== void 0 && (p = new uc, y = cc(Yb(b.g(), uc, 5), 2), p = S(p, 2, eb(y), "0"), y = cc(Yb(b.g(), uc, 5), 4), p = S(p, 4, eb(y), "0"), bc(l, 5, p));
        b.g().getEscapedQemQueryId() && (p = b.g().getEscapedQemQueryId(), S(l, 2, K(p), ""));
        D(b.g(), 6) && (p = D(b.g(), 6), S(l, 6, K(p), ""));
        b.g().l() && S(l, 21, !0, !1);
        V(b.g(), 4) && S(l, 4, !0, !1);
        D(b.g(), 11) && (p = D(b.g(), 11), S(l, 11, K(p), ""));
        V(b.g(), 32) && S(l, 32, !0, !1);
        l = l.i();
        p = W(b, 15) || 50;
        if (V(b, 30)) {
            if (!c ? .length) throw Error("top_td_without_component_auction");
            q = c
        } else q = [q, ...(c ? ? [])];
        a = {
            seller: A,
            decisionLogicUrl: G,
            sellerExperimentGroupId: g,
            sellerSignals: l,
            sellerTimeout: p,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: q,
            ...(a ? {
                resolveToConfig: a
            } : {})
        };
        D(b, 28) && (a.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        return a
    }

    function ue(a, b) {
        return a.some(c => ve(c) !== BigInt(100)) && (b ? ? !1)
    }

    function ve(a) {
        return (new Map([
            ["https://googleads.g.doubleclick.net", BigInt(200)],
            ["https://td.doubleclick.net", BigInt(300)],
            ["https://f.creativecdn.com", BigInt(400)],
            ["https://fledge.us.criteo.com", BigInt(500)],
            ["https://fledge.eu.criteo.com", BigInt(600)],
            ["https://fledge.as.criteo.com", BigInt(700)],
            ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]
        ])).get(a) ? ? BigInt(100)
    };
    async function we(a) {
        var b = xe,
            c = window,
            d = window.navigator,
            e = xc(a.config);
        a = T(e, wc, 2);
        const f = a.g();
        let h = void 0,
            k;
        var g = Tc(Ac);
        g && (h ? ? (h = new ae), k = new ed(h, g));
        ye("init", {
            winner_qid: f.getEscapedQemQueryId(),
            publisher_tag: "show_ads"
        });
        g = b(D(e, 1));
        d.runAdAuction ? a.getWidth() && a.getHeight() ? (e = Yb(e, nc, 3), V(f, 10) ? (ze(c, g), await Ae(b, a, g, e, d, c, !1, h, k)) : V(f, 9) ? (await Ae(b, a, g, e, d, c, !1, h, k), ze(c, g)) : await Ae(b, a, g, e, d, c, !0, h, k)) : (ye("invalid_slot_size", {
                qid: f.getEscapedQemQueryId(),
                publisher_tag: "show_ads"
            }),
            se(0, 0, f), ze(c, g)) : (ye("runadauction_not_found", {
            qid: f.getEscapedQemQueryId(),
            publisher_tag: "show_ads"
        }), se(0, 0, f), ze(c, g))
    }
    async function Ae(a, b, c, d, e, f, h, k, g) {
        const l = b.g();
        Tc(Bc) || ie("pre_run_ad_auction_ping", {
            winner_qid: l.getEscapedQemQueryId(),
            publisher_tag: "show_ads"
        });
        const n = te({
                na: b
            }),
            v = W(b, 8) || 1E3;
        n.signal = AbortSignal.timeout(v);
        var x = performance.now();
        let p = "";
        const q = await e.runAdAuction ? .(n).catch(C => C instanceof DOMException && (p = C.name, C.name === "TimeoutError") ? 2 : 3);
        x = Math.round(performance.now() - x);
        const y = q === 2,
            A = q === 3,
            t = Yc(q) || typeof q === "string";
        g ? .log(607368714, dd, {
            L: x,
            da: q,
            O: l.getEscapedQemQueryId()
        });
        ie("run_ad_auction_stats", {
            duration_ms: x,
            applied_timeout_ms: v,
            timed_out: y ? 1 : 0,
            auction_skipped: 0,
            error: A ? 1 : 0,
            error_detail: p,
            auction_winner: t ? 1 : 0,
            thread_release_only: V(l, 15) ? 1 : 0,
            winner_qid: l.getEscapedQemQueryId(),
            publisher_tag: "show_ads"
        });
        t ? h ? (c = T(b, oc, 16) ? .g() ? re(n, b) : void 0, d = {
            gdprApplies: D(d, 1),
            ha: D(d, 2),
            ca: D(d, 3),
            ba: b.getWidth().toString(),
            aa: b.getHeight().toString(),
            ...(c ? {
                ma: c
            } : {})
        }, await qe(q, d), Be(a, f, q, b, k ? ? new ae)) : await e.deprecatedURNToURL(q, !0) : (se(x, y ? v : 0, l), h && ze(f, c))
    }

    function Be(a, b, c, d, e) {
        {
            let h = D(d, 31);
            if (h)
                if (Yc(c)) e.G.H.I.P.T.o({
                    u: 1,
                    status: "FAILED_FENCED_FRAME"
                }), e = null;
                else {
                    var f = T(d, vc, 5);
                    f && V(f, 27) ? (f = za(f), h = h.replace("%%activeview_prefix%%", f).replace("%%activeview_script%%", "https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js")) : h = h.replace("%%activeview_prefix%%", "").replace("%%activeview_script%%", "");
                    f = h.replace("%%srcfledge%%", c);
                    f.length === h.length && f === h ? (e.G.H.I.P.T.o({
                            u: 1,
                            status: "FAILED_UNMODIFIED"
                        }),
                        e = null) : (e.G.H.I.P.T.o({
                        u: 1,
                        status: "OK"
                    }), e = f)
                }
            else e = null
        }
        e ? ze(b, a(e)) : (a = Jc(V(d, 14) ? "IFRAME" : "fencedframe"), V(d, 14) || (a.mode = "opaque-ads"), a.style = "left:0; position:absolute; top:0; border:0;", a.width = String(d.getWidth()), a.height = String(d.getHeight()), typeof c === "string" ? /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(c) && (c = ta(c), a.src = ra(c).toString()) : a.config = c, Ce(b, a), Tc(zc) && (d = T(d, vc, 5)) && (b = b.document.body, d = za(d), c = new lc, a.setAttribute("class", "GoogleActiveViewElement"), a.setAttribute("data-google-av-cxn",
                d), a.setAttribute("data-google-av-itpl", (41).toString()), a.setAttribute("data-google-av-ufs-integrator-metadata", btoa(fc(c))), d = b.appendChild, c = document.createElement("script"), c.setAttribute("id", "googleActiveViewDisplayScript"), a = mc `https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js`, c.src = ra(a), (void 0) ? .ua || (a = (a = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : "") &&
            c.setAttribute("nonce", a), c.async = !0, d.call(b, c)), Sc())
    }

    function ze(a, b) {
        a.document.open();
        a.document.write(b instanceof va && b.constructor === va ? b.g : "type_error:SafeHtml");
        a.document.close();
        Sc()
    }

    function Ce(a, b) {
        Ic(a.document, () => {
            a.document.body.appendChild(b)
        })
    }

    function ye(a, b) {
        Tc(Bc) || ie("adsense_turtledove", {
            type: a,
            ...b
        })
    };
    const De = /^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.safeframe\.googlesyndication\.com|tpc\.googlesyndication\.com)$/,
        Ee = /^(pagead2\.googlesyndication\.com|googleads\.g\.doubleclick\.net)$/;
    var xe = function(a) {
        return b => {
            var c = a.hostname,
                d = De.test(c) || Ee.test(c);
            hc(!ic);
            ic = new jc(`[${c}]`);
            hc(d);
            b = (c = pa()) ? c.createHTML(b) : b;
            return new va(b, ua)
        }
    }(location);
    Pc = 108;
    const Fe = Rc(108, document.currentScript);
    if (Fe == null) throw Error("JSC not found 108");
    const Ge = {},
        He = Fe.attributes;
    for (let a = He.length - 1; a >= 0; a--) {
        const b = He[a].name;
        b.indexOf("data-jcp-") === 0 && (Ge[b.substring(9)] = He[a].value)
    }(async a => {
        a = we(a);
        zd(a)
    })(Ge);
}).call(this);