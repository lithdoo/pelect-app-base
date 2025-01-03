var Rr = Object.defineProperty;
var Fr = (e, t, n) => t in e ? Rr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ro = (e, t, n) => Fr(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, vt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, jr = () => !1, Wt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), un = (e) => e.startsWith("onUpdate:"), Y = Object.assign, lo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hr = Object.prototype.hasOwnProperty, j = (e, t) => Hr.call(e, t), T = Array.isArray, lt = (e) => yn(e) === "[object Map]", vs = (e) => yn(e) === "[object Set]", $ = (e) => typeof e == "function", G = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", fo = (e) => (K(e) || $(e)) && $(e.then) && $(e.catch), Es = Object.prototype.toString, yn = (e) => Es.call(e), uo = (e) => yn(e).slice(8, -1), bs = (e) => yn(e) === "[object Object]", ao = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Ue(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lr = /* @__PURE__ */ Ue(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ur = /-(\w)/g, ye = On(
  (e) => e.replace(Ur, (t, n) => n ? n.toUpperCase() : "")
), Br = /\B([A-Z])/g, et = On(
  (e) => e.replace(Br, "-$1").toLowerCase()
), Dn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), rt = On(
  (e) => e ? `on${Dn(e)}` : ""
), Xe = (e, t) => !Object.is(e, t), Vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, an = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fo;
const Kt = () => Fo || (Fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function po(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = G(o) ? qr(o) : po(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (G(e) || K(e))
    return e;
}
const Wr = /;(?![^(]*\))/g, Kr = /:([^]+)/, Gr = /\/\*[^]*?\*\//g;
function qr(e) {
  const t = {};
  return e.replace(Gr, "").split(Wr).forEach((n) => {
    if (n) {
      const o = n.split(Kr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ho(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = ho(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Jr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Yr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", zr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Zr = /* @__PURE__ */ Ue(Jr), Xr = /* @__PURE__ */ Ue(Yr), Qr = /* @__PURE__ */ Ue(zr), ei = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ti = /* @__PURE__ */ Ue(ei);
function Ns(e) {
  return !!e || e === "";
}
const ys = (e) => !!(e && e.__v_isRef === !0), Gn = (e) => G(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === Es || !$(e.toString)) ? ys(e) ? Gn(e.value) : JSON.stringify(e, Os, 2) : String(e), Os = (e, t) => ys(t) ? Os(e, t.value) : lt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[Pn(o, r) + " =>"] = s, n),
    {}
  )
} : vs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pn(n))
} : nt(t) ? Pn(t) : K(t) && !T(t) && !bs(t) ? String(t) : t, Pn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class ni {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else process.env.NODE_ENV !== "production" && Me("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function oi() {
  return he;
}
let H;
const Rn = /* @__PURE__ */ new WeakSet();
class Ds {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rn.has(this) && (Rn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jo(this), Vs(this);
    const t = H, n = Oe;
    H = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && H !== this && Me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ss(this), H = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _o(t);
      this.deps = this.depsTail = void 0, jo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qn(this) && this.run();
  }
  get dirty() {
    return qn(this);
  }
}
let ws = 0, Mt, Pt;
function xs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function go() {
  ws++;
}
function mo() {
  if (--ws > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ss(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), _o(o), si(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function qn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jt))
    return;
  e.globalVersion = jt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !qn(e)) {
    e.flags &= -3;
    return;
  }
  const n = H, o = Oe;
  H = e, Oe = !0;
  try {
    Vs(e);
    const s = e.fn(e._value);
    (t.version === 0 || Xe(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, Oe = o, Ss(e), e.flags &= -3;
  }
}
function _o(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      _o(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function si(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const Ts = [];
function Be() {
  Ts.push(Oe), Oe = !1;
}
function ke() {
  const e = Ts.pop();
  Oe = e === void 0 ? !0 : e;
}
function jo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let jt = 0;
class ri {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!H || !Oe || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new ri(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, $s(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = o);
    }
    return process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(
      Y(
        {
          effect: H
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, jt++, this.notify(t);
  }
  notify(t) {
    go();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Y(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mo();
    }
  }
}
function $s(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        $s(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), ft = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Yn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ht = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, t, n) {
  if (Oe && H) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new vo()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function $e(e, t, n, o, s, r) {
  const i = Jn.get(e);
  if (!i) {
    jt++;
    return;
  }
  const l = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (go(), t === "clear")
    i.forEach(l);
  else {
    const u = T(e), h = u && ao(n);
    if (u && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === Ht || !nt(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), h && l(i.get(Ht)), t) {
        case "add":
          u ? h && l(i.get("length")) : (l(i.get(ft)), lt(e) && l(i.get(Yn)));
          break;
        case "delete":
          u || (l(i.get(ft)), lt(e) && l(i.get(Yn)));
          break;
        case "set":
          lt(e) && l(i.get(ft));
          break;
      }
  }
  mo();
}
function ht(e) {
  const t = I(e);
  return t === e ? t : (z(t, "iterate", Ht), ue(e) ? t : t.map(re));
}
function Eo(e) {
  return z(e = I(e), "iterate", Ht), e;
}
const ii = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fn(this, Symbol.iterator, re);
  },
  concat(...e) {
    return ht(this).concat(
      ...e.map((t) => T(t) ? ht(t) : t)
    );
  },
  entries() {
    return Fn(this, "entries", (e) => (e[1] = re(e[1]), e));
  },
  every(e, t) {
    return Fe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Fe(this, "filter", e, t, (n) => n.map(re), arguments);
  },
  find(e, t) {
    return Fe(this, "find", e, t, re, arguments);
  },
  findIndex(e, t) {
    return Fe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Fe(this, "findLast", e, t, re, arguments);
  },
  findLastIndex(e, t) {
    return Fe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Fe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jn(this, "includes", e);
  },
  indexOf(...e) {
    return jn(this, "indexOf", e);
  },
  join(e) {
    return ht(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Fe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return Ho(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ho(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Fe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return ht(this).toReversed();
  },
  toSorted(e) {
    return ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return Fn(this, "values", re);
  }
};
function Fn(e, t, n) {
  const o = Eo(e), s = o[t]();
  return o !== e && !ue(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const ci = Array.prototype;
function Fe(e, t, n, o, s, r) {
  const i = Eo(e), l = i !== e && !ue(e), u = i[t];
  if (u !== ci[t]) {
    const a = u.apply(e, r);
    return l ? re(a) : a;
  }
  let h = n;
  i !== e && (l ? h = function(a, g) {
    return n.call(this, re(a), g, e);
  } : n.length > 2 && (h = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = u.call(i, h, o);
  return l && s ? s(p) : p;
}
function Ho(e, t, n, o) {
  const s = Eo(e);
  let r = n;
  return s !== e && (ue(e) ? n.length > 3 && (r = function(i, l, u) {
    return n.call(this, i, l, u, e);
  }) : r = function(i, l, u) {
    return n.call(this, i, re(l), u, e);
  }), s[t](r, ...o);
}
function jn(e, t, n) {
  const o = I(e);
  z(o, "iterate", Ht);
  const s = o[t](...n);
  return (s === -1 || s === !1) && pn(n[0]) ? (n[0] = I(n[0]), o[t](...n)) : s;
}
function St(e, t, n = []) {
  Be(), go();
  const o = I(e)[t].apply(e, n);
  return mo(), ke(), o;
}
const li = /* @__PURE__ */ Ue("__proto__,__v_isRef,__isVue"), As = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function fi(e) {
  nt(e) || (e = String(e));
  const t = I(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Is {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Hs : js : r ? Fs : Rs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      let u;
      if (i && (u = ii[n]))
        return u;
      if (n === "hasOwnProperty")
        return fi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      J(t) ? t : o
    );
    return (nt(n) ? As.has(n) : li(n)) || (s || z(t, "get", n), r) ? l : J(l) ? i && ao(n) ? l : l.value : K(l) ? s ? Ls(l) : bo(l) : l;
  }
}
class Ms extends Is {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Le(r);
      if (!ue(o) && !Le(o) && (r = I(r), o = I(o)), !T(t) && J(r) && !J(o))
        return u ? !1 : (r.value = o, !0);
    }
    const i = T(t) && ao(n) ? Number(n) < t.length : j(t, n), l = Reflect.set(
      t,
      n,
      o,
      J(t) ? t : s
    );
    return t === I(s) && (i ? Xe(o, r) && $e(t, "set", n, o, r) : $e(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && $e(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!nt(n) || !As.has(n)) && z(t, "has", n), o;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      T(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class Ps extends Is {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ui = /* @__PURE__ */ new Ms(), ai = /* @__PURE__ */ new Ps(), pi = /* @__PURE__ */ new Ms(!0), di = /* @__PURE__ */ new Ps(!0), zn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function hi(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = I(s), i = lt(r), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, h = s[e](...o), p = n ? zn : t ? Zn : re;
    return !t && z(
      r,
      "iterate",
      u ? Yn : ft
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = h.next();
        return g ? { value: a, done: g } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Qt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Me(
        `${Dn(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gi(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = I(r), l = I(s);
      e || (Xe(s, l) && z(i, "get", s), z(i, "get", l));
      const { has: u } = Xt(i), h = t ? zn : e ? Zn : re;
      if (u.call(i, s))
        return h(r.get(s));
      if (u.call(i, l))
        return h(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && z(I(s), "iterate", ft), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, i = I(r), l = I(s);
      return e || (Xe(s, l) && z(i, "has", s), z(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, u = I(l), h = t ? zn : e ? Zn : re;
      return !e && z(u, "iterate", ft), l.forEach((p, a) => s.call(r, h(p), h(a), i));
    }
  };
  return Y(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(s) {
        !t && !ue(s) && !Le(s) && (s = I(s));
        const r = I(this);
        return Xt(r).has.call(r, s) || (r.add(s), $e(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ue(r) && !Le(r) && (r = I(r));
        const i = I(this), { has: l, get: u } = Xt(i);
        let h = l.call(i, s);
        h ? process.env.NODE_ENV !== "production" && Lo(i, l, s) : (s = I(s), h = l.call(i, s));
        const p = u.call(i, s);
        return i.set(s, r), h ? Xe(r, p) && $e(i, "set", s, r, p) : $e(i, "add", s, r), this;
      },
      delete(s) {
        const r = I(this), { has: i, get: l } = Xt(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && Lo(r, i, s) : (s = I(s), u = i.call(r, s));
        const h = l ? l.call(r, s) : void 0, p = r.delete(s);
        return u && $e(r, "delete", s, void 0, h), p;
      },
      clear() {
        const s = I(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? lt(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && $e(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = hi(s, e, t);
  }), n;
}
function wn(e, t) {
  const n = gi(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const mi = {
  get: /* @__PURE__ */ wn(!1, !1)
}, _i = {
  get: /* @__PURE__ */ wn(!1, !0)
}, vi = {
  get: /* @__PURE__ */ wn(!0, !1)
}, Ei = {
  get: /* @__PURE__ */ wn(!0, !0)
};
function Lo(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const s = uo(e);
    Me(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rs = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap();
function bi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ni(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bi(uo(e));
}
function bo(e) {
  return Le(e) ? e : xn(
    e,
    !1,
    ui,
    mi,
    Rs
  );
}
function yi(e) {
  return xn(
    e,
    !1,
    pi,
    _i,
    Fs
  );
}
function Ls(e) {
  return xn(
    e,
    !0,
    ai,
    vi,
    js
  );
}
function Ae(e) {
  return xn(
    e,
    !0,
    di,
    Ei,
    Hs
  );
}
function xn(e, t, n, o, s) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && Me(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = Ni(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function Et(e) {
  return Le(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Le(e) {
  return !!(e && e.__v_isReadonly);
}
function ue(e) {
  return !!(e && e.__v_isShallow);
}
function pn(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Oi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const re = (e) => K(e) ? bo(e) : e, Zn = (e) => K(e) ? Ls(e) : e;
function J(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Di(e) {
  return wi(e, !1);
}
function wi(e, t) {
  return J(e) ? e : new xi(e, t);
}
class xi {
  constructor(t, n) {
    this.dep = new vo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : I(t), this._value = n ? t : re(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ue(t) || Le(t);
    t = o ? t : I(t), Xe(t, n) && (this._rawValue = t, this._value = o ? t : re(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Vi(e) {
  return J(e) ? e.value : e;
}
const Si = {
  get: (e, t, n) => t === "__v_raw" ? e : Vi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return J(s) && !J(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Us(e) {
  return Et(e) ? e : new Proxy(e, Si);
}
class Ci {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    H !== this)
      return xs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Cs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
  }
}
function Ti(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new Ci(o, s, n);
  return process.env.NODE_ENV, r;
}
const en = {}, dn = /* @__PURE__ */ new WeakMap();
let it;
function $i(e, t = !1, n = it) {
  if (n) {
    let o = dn.get(n);
    o || dn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ai(e, t, n = B) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: u } = n, h = (V) => {
    (n.onWarn || Me)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (V) => s ? V : ue(V) || s === !1 || s === 0 ? ze(V, 1) : ze(V);
  let a, g, D, S, M = !1, ee = !1;
  if (J(e) ? (g = () => e.value, M = ue(e)) : Et(e) ? (g = () => p(e), M = !0) : T(e) ? (ee = !0, M = e.some((V) => Et(V) || ue(V)), g = () => e.map((V) => {
    if (J(V))
      return V.value;
    if (Et(V))
      return p(V);
    if ($(V))
      return u ? u(V, 2) : V();
    process.env.NODE_ENV !== "production" && h(V);
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (D) {
      Be();
      try {
        D();
      } finally {
        ke();
      }
    }
    const V = it;
    it = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      it = V;
    }
  } : (g = Z, process.env.NODE_ENV !== "production" && h(e)), t && s) {
    const V = g, X = s === !0 ? 1 / 0 : s;
    g = () => ze(V(), X);
  }
  const k = oi(), q = () => {
    a.stop(), k && k.active && lo(k.effects, a);
  };
  if (r && t) {
    const V = t;
    t = (...X) => {
      V(...X), q();
    };
  }
  let L = ee ? new Array(e.length).fill(en) : en;
  const ae = (V) => {
    if (!(!(a.flags & 1) || !a.dirty && !V))
      if (t) {
        const X = a.run();
        if (s || M || (ee ? X.some((_e, ne) => Xe(_e, L[ne])) : Xe(X, L))) {
          D && D();
          const _e = it;
          it = a;
          try {
            const ne = [
              X,
              // pass undefined as the old value when it's changed for the first time
              L === en ? void 0 : ee && L[0] === en ? [] : L,
              S
            ];
            u ? u(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            ), L = X;
          } finally {
            it = _e;
          }
        }
      } else
        a.run();
  };
  return l && l(ae), a = new Ds(g), a.scheduler = i ? () => i(ae, !1) : ae, S = (V) => $i(V, !1, a), D = a.onStop = () => {
    const V = dn.get(a);
    if (V) {
      if (u)
        u(V, 4);
      else
        for (const X of V) X();
      dn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ae(!0) : L = a.run() : i ? i(ae.bind(null, !0), !0) : a.run(), q.pause = a.pause.bind(a), q.resume = a.resume.bind(a), q.stop = q, q;
}
function ze(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, J(e))
    ze(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      ze(e[o], t, n);
  else if (vs(e) || lt(e))
    e.forEach((o) => {
      ze(o, t, n);
    });
  else if (bs(e)) {
    for (const o in e)
      ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ze(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ut = [];
function tn(e) {
  ut.push(e);
}
function nn() {
  ut.pop();
}
let Hn = !1;
function y(e, ...t) {
  if (Hn) return;
  Hn = !0, Be();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ii();
  if (o)
    yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${$n(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Mi(s)), console.warn(...r);
  }
  ke(), Hn = !1;
}
function Ii() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Mi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Pi(n));
  }), t;
}
function Pi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ri(e.props), r] : [s + r];
}
function Ri(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Bs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Bs(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : J(t) ? (t = Bs(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const No = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Gt(s, t, n);
  }
}
function Pe(e, t, n, o) {
  if ($(e)) {
    const s = yt(e, t, n, o);
    return s && fo(s) && s.catch((r) => {
      Gt(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Pe(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Gt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = process.env.NODE_ENV !== "production" ? No[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Be(), yt(r, null, 10, [
        e,
        u,
        h
      ]), ke();
      return;
    }
  }
  Fi(e, n, s, o, i);
}
function Fi(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = No[t];
    if (n && tn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && nn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const ie = [];
let Te = -1;
const bt = [];
let Je = null, _t = 0;
const ks = /* @__PURE__ */ Promise.resolve();
let hn = null;
const ji = 100;
function Hi(e) {
  const t = hn || ks;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Li(e) {
  let t = Te + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ie[o], r = Lt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Vn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? ie.push(e) : ie.splice(Li(t), 0, e), e.flags |= 1, Ws();
  }
}
function Ws() {
  hn || (hn = ks.then(qs));
}
function Ks(e) {
  T(e) ? bt.push(...e) : Je && e.id === -1 ? Je.splice(_t + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Ws();
}
function Uo(e, t, n = Te + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ie.length; n++) {
    const o = ie[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && yo(t, o))
        continue;
      ie.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Gs(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, o) => Lt(n) - Lt(o)
    );
    if (bt.length = 0, Je) {
      Je.push(...t);
      return;
    }
    for (Je = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _t = 0; _t < Je.length; _t++) {
      const n = Je[_t];
      process.env.NODE_ENV !== "production" && yo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Je = null, _t = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qs(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => yo(e, n) : Z;
  try {
    for (Te = 0; Te < ie.length; Te++) {
      const n = ie[Te];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Te < ie.length; Te++) {
      const n = ie[Te];
      n && (n.flags &= -2);
    }
    Te = -1, ie.length = 0, Gs(e), hn = null, (ie.length || bt.length) && qs(e);
  }
}
function yo(e, t) {
  const n = e.get(t) || 0;
  if (n > ji) {
    const o = t.i, s = o && Cr(o.type);
    return Gt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ie = !1;
const on = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Kt().__VUE_HMR_RUNTIME__ = {
  createRecord: Ln(Js),
  rerender: Ln(ki),
  reload: Ln(Wi)
});
const pt = /* @__PURE__ */ new Map();
function Ui(e) {
  const t = e.type.__hmrId;
  let n = pt.get(t);
  n || (Js(t, e.type), n = pt.get(t)), n.instances.add(e);
}
function Bi(e) {
  pt.get(e.type.__hmrId).instances.delete(e);
}
function Js(e, t) {
  return pt.has(e) ? !1 : (pt.set(e, {
    initialDef: gn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gn(e) {
  return Tr(e) ? e.__vccOpts : e;
}
function ki(e, t) {
  const n = pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, gn(o.type).render = t), o.renderCache = [], Ie = !0, o.update(), Ie = !1;
  }));
}
function Wi(e, t) {
  const n = pt.get(e);
  if (!n) return;
  t = gn(t), Bo(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = gn(r.type);
    let l = on.get(i);
    l || (i !== n.initialDef && Bo(i, t), on.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Vn(() => {
      Ie = !0, r.parent.update(), Ie = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ks(() => {
    on.clear();
  });
}
function Bo(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ln(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ne, $t = [], Xn = !1;
function qt(e, ...t) {
  Ne ? Ne.emit(e, ...t) : Xn || $t.push({ event: e, args: t });
}
function Oo(e, t) {
  var n, o;
  Ne = e, Ne ? (Ne.enabled = !0, $t.forEach(({ event: s, args: r }) => Ne.emit(s, ...r)), $t = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Oo(r, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, $t = []);
  }, 3e3)) : (Xn = !0, $t = []);
}
function Ki(e, t) {
  qt("app:init", e, t, {
    Fragment: ve,
    Text: Jt,
    Comment: De,
    Static: cn
  });
}
function Gi(e) {
  qt("app:unmount", e);
}
const qi = /* @__PURE__ */ Do(
  "component:added"
  /* COMPONENT_ADDED */
), Ys = /* @__PURE__ */ Do(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ji = /* @__PURE__ */ Do(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yi = (e) => {
  Ne && typeof Ne.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ne.cleanupBuffer(e) && Ji(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return (t) => {
    qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const zi = /* @__PURE__ */ zs(
  "perf:start"
  /* PERFORMANCE_START */
), Zi = /* @__PURE__ */ zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function zs(e) {
  return (t, n, o) => {
    qt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Xi(e, t, n) {
  qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ge = null, Zs = null;
function mn(e) {
  const t = ge;
  return ge = e, Zs = e && e.type.__scopeId || null, t;
}
function Qi(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && es(-1);
    const r = mn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      mn(r), o._d && es(1);
    }
    return process.env.NODE_ENV !== "production" && Ys(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Xs(e) {
  Lr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function ot(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[o];
    u && (Be(), Pe(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
const ec = Symbol("_vte"), tc = (e) => e.__isTeleport;
function wo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qs(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function er(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const nc = /* @__PURE__ */ new WeakSet();
function _n(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (S, M) => _n(
        S,
        t && (T(t) ? t[M] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Rt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && _n(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? $o(o.component) : o.el, i = s ? null : r, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === B ? l.refs = {} : l.refs, a = l.setupState, g = I(a), D = a === B ? () => !1 : (S) => process.env.NODE_ENV !== "production" && (j(g, S) && !J(g[S]) && y(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), nc.has(g[S])) ? !1 : j(g, S);
  if (h != null && h !== u && (G(h) ? (p[h] = null, D(h) && (a[h] = null)) : J(h) && (h.value = null)), $(u))
    yt(u, l, 12, [i, p]);
  else {
    const S = G(u), M = J(u);
    if (S || M) {
      const ee = () => {
        if (e.f) {
          const k = S ? D(u) ? a[u] : p[u] : u.value;
          s ? T(k) && lo(k, r) : T(k) ? k.includes(r) || k.push(r) : S ? (p[u] = [r], D(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = i, D(u) && (a[u] = i)) : M ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (ee.id = -1, de(ee, n)) : ee();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Kt().requestIdleCallback;
Kt().cancelIdleCallback;
const Rt = (e) => !!e.type.__asyncLoader, xo = (e) => e.type.__isKeepAlive;
function oc(e, t) {
  tr(e, "a", t);
}
function sc(e, t) {
  tr(e, "da", t);
}
function tr(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Sn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      xo(s.parent.vnode) && rc(o, t, n, s), s = s.parent;
  }
}
function rc(e, t, n, o) {
  const s = Sn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  nr(() => {
    lo(o[t], s);
  }, n);
}
function Sn(e, t, n = Q, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Be();
      const l = Yt(n), u = Pe(t, n, e, i);
      return l(), ke(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = rt(No[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const We = (e) => (t, n = Q) => {
  (!Bt || e === "sp") && Sn(e, (...o) => t(...o), n);
}, ic = We("bm"), cc = We("m"), lc = We(
  "bu"
), fc = We("u"), uc = We(
  "bum"
), nr = We("um"), ac = We(
  "sp"
), pc = We("rtg"), dc = We("rtc");
function hc(e, t = Q) {
  Sn("ec", e, t);
}
const gc = Symbol.for("v-ndc"), Qn = (e) => e ? Vr(e) ? $o(e) : Qn(e.parent) : null, at = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ae(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.refs) : e.refs,
    $parent: (e) => Qn(e.parent),
    $root: (e) => Qn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => rr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hi.bind(e.proxy)),
    $watch: (e) => Jc.bind(e)
  })
), Vo = (e) => e === "_" || e === "$", Un = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Un(o, t))
          return i[t] = 1, o[t];
        if (s !== B && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && j(h, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && j(n, t))
          return i[t] = 4, n[t];
        eo && (i[t] = 0);
      }
    }
    const p = at[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && bn()) : process.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && ge && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== B && Vo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Un(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== B && j(e, i) || Un(t, i) || (l = r[0]) && j(l, i) || j(o, i) || j(at, i) || j(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (or.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function mc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(at).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => at[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function _c(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function vc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Vo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function ko(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ec() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let eo = !0;
function bc(e) {
  const t = rr(e), n = e.proxy, o = e.ctx;
  eo = !1, t.beforeCreate && Wo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: D,
    updated: S,
    activated: M,
    deactivated: ee,
    beforeDestroy: k,
    beforeUnmount: q,
    destroyed: L,
    unmounted: ae,
    render: V,
    renderTracked: X,
    renderTriggered: _e,
    errorCaptured: ne,
    serverPrefetch: ce,
    // public API
    expose: Re,
    inheritAttrs: Ke,
    // assets
    components: Ee,
    directives: zt,
    filters: Ao
  } = t, Ge = process.env.NODE_ENV !== "production" ? Ec() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const P in R)
        Ge("Props", P);
  }
  if (h && Nc(h, o, Ge), i)
    for (const R in i) {
      const P = i[R];
      $(P) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = P.bind(n), process.env.NODE_ENV !== "production" && Ge("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && fo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = bo(R), process.env.NODE_ENV !== "production")
      for (const P in R)
        Ge("Data", P), Vo(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => R[P],
          set: Z
        });
  }
  if (eo = !0, r)
    for (const R in r) {
      const P = r[R], we = $(P) ? P.bind(n, n) : $(P.get) ? P.get.bind(n, n) : Z;
      process.env.NODE_ENV !== "production" && we === Z && y(`Computed property "${R}" has no getter.`);
      const An = !$(P) && $(P.set) ? P.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Z, Ot = bl({
        get: we,
        set: An
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (dt) => Ot.value = dt
      }), process.env.NODE_ENV !== "production" && Ge("Computed", R);
    }
  if (l)
    for (const R in l)
      sr(l[R], o, n, R);
  if (u) {
    const R = $(u) ? u.call(n) : u;
    Reflect.ownKeys(R).forEach((P) => {
      Vc(P, R[P]);
    });
  }
  p && Wo(p, e, "c");
  function le(R, P) {
    T(P) ? P.forEach((we) => R(we.bind(n))) : P && R(P.bind(n));
  }
  if (le(ic, a), le(cc, g), le(lc, D), le(fc, S), le(oc, M), le(sc, ee), le(hc, ne), le(dc, X), le(pc, _e), le(uc, q), le(nr, ae), le(ac, ce), T(Re))
    if (Re.length) {
      const R = e.exposed || (e.exposed = {});
      Re.forEach((P) => {
        Object.defineProperty(R, P, {
          get: () => n[P],
          set: (we) => n[P] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === Z && (e.render = V), Ke != null && (e.inheritAttrs = Ke), Ee && (e.components = Ee), zt && (e.directives = zt), ce && er(e);
}
function Nc(e, t, n = Z) {
  T(e) && (e = to(e));
  for (const o in e) {
    const s = e[o];
    let r;
    K(s) ? "default" in s ? r = sn(
      s.from || o,
      s.default,
      !0
    ) : r = sn(s.from || o) : r = sn(s), J(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Wo(e, t, n) {
  Pe(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function sr(e, t, n, o) {
  let s = o.includes(".") ? vr(n, o) : () => n[o];
  if (G(e)) {
    const r = t[e];
    $(r) ? kn(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    kn(s, e.bind(n));
  else if (K(e))
    if (T(e))
      e.forEach((r) => sr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? kn(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function rr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (h) => vn(u, h, i, !0)
  ), vn(u, t, i)), K(t) && r.set(t, u), u;
}
function vn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && vn(e, r, n, !0), s && s.forEach(
    (i) => vn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = yc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const yc = {
  data: Ko,
  props: Go,
  emits: Go,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: At,
  directives: At,
  // watch
  watch: Dc,
  // provide / inject
  provide: Ko,
  inject: Oc
};
function Ko(e, t) {
  return t ? e ? function() {
    return Y(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oc(e, t) {
  return At(to(e), to(t));
}
function to(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function At(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Go(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    ko(e),
    ko(t ?? {})
  ) : t;
}
function Dc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = se(e[o], t[o]);
  return n;
}
function ir() {
  return {
    app: null,
    config: {
      isNativeTag: jr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let wc = 0;
function xc(e, t) {
  return function(o, s = null) {
    $(o) || (o = Y({}, o)), s != null && !K(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = ir(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = r.app = {
      _uid: wc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: ss,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(h, ...a)) : $(p) ? (i.add(p), p(h, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && io(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && Xs(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, g) {
        if (u)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = h._ceVNode || Qe(o, s);
          return D.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            e(
              tt(D),
              p,
              g
            );
          }), e(D, p, g), u = !0, h._container = p, p.__vue_app__ = h, process.env.NODE_ENV !== "production" && (h._instance = D.component, Ki(h, ss)), $o(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (Pe(
          l,
          h._instance,
          16
        ), e(null, h._container), process.env.NODE_ENV !== "production" && (h._instance = null, Gi(h)), delete h._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = Nt;
        Nt = h;
        try {
          return p();
        } finally {
          Nt = a;
        }
      }
    };
    return h;
  };
}
let Nt = null;
function Vc(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function sn(e, t, n = !1) {
  const o = Q || ge;
  if (o || Nt) {
    const s = Nt ? Nt._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const cr = {}, lr = () => Object.create(cr), fr = (e) => Object.getPrototypeOf(e) === cr;
function Sc(e, t, n, o = !1) {
  const s = {}, r = lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ur(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && pr(t || {}, s, e), n ? e.props = o ? s : yi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Cc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Tc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = I(s), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Cc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Cn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (u)
          if (j(r, g))
            D !== r[g] && (r[g] = D, h = !0);
          else {
            const S = ye(g);
            s[S] = no(
              u,
              l,
              S,
              D,
              e,
              !1
            );
          }
        else
          D !== r[g] && (r[g] = D, h = !0);
      }
    }
  } else {
    ur(e, t, s, r) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = et(a)) === a || !j(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = no(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== l)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], h = !0);
  }
  h && $e(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && pr(t || {}, s, e);
}
function ur(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (It(u))
        continue;
      const h = t[u];
      let p;
      s && j(s, p = ye(u)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Cn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, i = !0);
    }
  if (r) {
    const u = I(n), h = l || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = no(
        s,
        u,
        a,
        h[a],
        e,
        !j(h, a)
      );
    }
  }
  return i;
}
function no(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && $(u)) {
        const { propsDefaults: h } = s;
        if (n in h)
          o = h[n];
        else {
          const p = Yt(s);
          o = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === et(n)) && (o = !0));
  }
  return o;
}
const $c = /* @__PURE__ */ new WeakMap();
function ar(e, t, n = !1) {
  const o = n ? $c : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [g, D] = ar(a, t, !0);
      Y(i, g), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return K(e) && o.set(e, vt), vt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !G(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = ye(r[p]);
      qo(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !K(r) && y("invalid props options", r);
    for (const p in r) {
      const a = ye(p);
      if (qo(a)) {
        const g = r[p], D = i[a] = T(g) || $(g) ? { type: g } : Y({}, g), S = D.type;
        let M = !1, ee = !0;
        if (T(S))
          for (let k = 0; k < S.length; ++k) {
            const q = S[k], L = $(q) && q.name;
            if (L === "Boolean") {
              M = !0;
              break;
            } else L === "String" && (ee = !1);
          }
        else
          M = $(S) && S.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = M, D[
          1
          /* shouldCastTrue */
        ] = ee, (M || j(D, "default")) && l.push(a);
      }
    }
  }
  const h = [i, l];
  return K(e) && o.set(e, h), h;
}
function qo(e) {
  return e[0] !== "$" && !It(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ac(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function pr(e, t, n) {
  const o = I(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => ye(i));
  for (const i in s) {
    let l = s[i];
    l != null && Ic(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? Ae(o) : o,
      !r.includes(i)
    );
  }
}
function Ic(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: u } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = T(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !h; g++) {
        const { valid: D, expectedType: S } = Pc(t, p[g]);
        a.push(S || ""), h = D;
      }
      if (!h) {
        y(Rc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Mc = /* @__PURE__ */ Ue(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Pc(e, t) {
  let n;
  const o = Ac(t);
  if (o === "null")
    n = e === null;
  else if (Mc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = K(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Rc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dn).join(" | ")}`;
  const s = n[0], r = uo(t), i = Jo(t, s), l = Jo(t, r);
  return n.length === 1 && Yo(s) && !Fc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Yo(r) && (o += `with value ${l}.`), o;
}
function Jo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Yo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const dr = (e) => e[0] === "_" || e === "$stable", So = (e) => T(e) ? e.map(be) : [be(e)], jc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Qi((...s) => (process.env.NODE_ENV !== "production" && Q && (!n || n.root === Q.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), So(t(...s))), n);
  return o._c = !1, o;
}, hr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (dr(s)) continue;
    const r = e[s];
    if ($(r))
      t[s] = jc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = So(r);
      t[s] = () => i;
    }
  }
}, gr = (e, t) => {
  process.env.NODE_ENV !== "production" && !xo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = So(t);
  e.slots.default = () => n;
}, oo = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Hc = (e, t, n) => {
  const o = e.slots = lr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (oo(o, t, n), n && an(o, "_", s, !0)) : hr(t, o);
  } else t && gr(e, t);
}, Lc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = B;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ie ? (oo(s, t, n), $e(e, "set", "$slots")) : n && l === 1 ? r = !1 : oo(s, t, n) : (r = !t.$stable, hr(t, s)), i = t;
  } else t && (gr(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !dr(l) && i[l] == null && delete s[l];
};
let Ct, Ze;
function gt(e, t) {
  e.appContext.config.performance && En() && Ze.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && zi(e, t, En() ? Ze.now() : Date.now());
}
function mt(e, t) {
  if (e.appContext.config.performance && En()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ze.mark(o), Ze.measure(
      `<${$n(e, e.type)}> ${t}`,
      n,
      o
    ), Ze.clearMarks(n), Ze.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Zi(e, t, En() ? Ze.now() : Date.now());
}
function En() {
  return Ct !== void 0 || (typeof window < "u" && window.performance ? (Ct = !0, Ze = window.performance) : Ct = !1), Ct;
}
function Uc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const de = tl;
function Bc(e) {
  return kc(e);
}
function kc(e, t) {
  Uc();
  const n = Kt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Oo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: D = Z,
    insertStaticContent: S
  } = e, M = (c, f, d, v = null, m = null, _ = null, O = void 0, N = null, b = process.env.NODE_ENV !== "production" && Ie ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Tt(c, f) && (v = Zt(c), qe(c, m, _, !0), c = null), f.patchFlag === -2 && (b = !1, f.dynamicChildren = null);
    const { type: E, ref: C, shapeFlag: w } = f;
    switch (E) {
      case Jt:
        ee(c, f, d, v);
        break;
      case De:
        k(c, f, d, v);
        break;
      case cn:
        c == null ? q(f, d, v, O) : process.env.NODE_ENV !== "production" && L(c, f, d, O);
        break;
      case ve:
        zt(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          N,
          b
        );
        break;
      default:
        w & 1 ? X(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          N,
          b
        ) : w & 6 ? Ao(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          N,
          b
        ) : w & 64 || w & 128 ? E.process(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          N,
          b,
          wt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    C != null && m && _n(C, c && c.ref, _, f || c, !f);
  }, ee = (c, f, d, v) => {
    if (c == null)
      o(
        f.el = l(f.children),
        d,
        v
      );
    else {
      const m = f.el = c.el;
      f.children !== c.children && h(m, f.children);
    }
  }, k = (c, f, d, v) => {
    c == null ? o(
      f.el = u(f.children || ""),
      d,
      v
    ) : f.el = c.el;
  }, q = (c, f, d, v) => {
    [c.el, c.anchor] = S(
      c.children,
      f,
      d,
      v,
      c.el,
      c.anchor
    );
  }, L = (c, f, d, v) => {
    if (f.children !== c.children) {
      const m = g(c.anchor);
      V(c), [f.el, f.anchor] = S(
        f.children,
        d,
        m,
        v
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, ae = ({ el: c, anchor: f }, d, v) => {
    let m;
    for (; c && c !== f; )
      m = g(c), o(c, d, v), c = m;
    o(f, d, v);
  }, V = ({ el: c, anchor: f }) => {
    let d;
    for (; c && c !== f; )
      d = g(c), s(c), c = d;
    s(f);
  }, X = (c, f, d, v, m, _, O, N, b) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), c == null ? _e(
      f,
      d,
      v,
      m,
      _,
      O,
      N,
      b
    ) : Re(
      c,
      f,
      m,
      _,
      O,
      N,
      b
    );
  }, _e = (c, f, d, v, m, _, O, N) => {
    let b, E;
    const { props: C, shapeFlag: w, transition: x, dirs: A } = c;
    if (b = c.el = i(
      c.type,
      _,
      C && C.is,
      C
    ), w & 8 ? p(b, c.children) : w & 16 && ce(
      c.children,
      b,
      null,
      v,
      m,
      Bn(c, _),
      O,
      N
    ), A && ot(c, null, v, "created"), ne(b, c, c.scopeId, O, v), C) {
      for (const W in C)
        W !== "value" && !It(W) && r(b, W, null, C[W], _, v);
      "value" in C && r(b, "value", null, C.value, _), (E = C.onVnodeBeforeMount) && Ce(E, v, c);
    }
    process.env.NODE_ENV !== "production" && (an(b, "__vnode", c, !0), an(b, "__vueParentComponent", v, !0)), A && ot(c, null, v, "beforeMount");
    const F = Wc(m, x);
    F && x.beforeEnter(b), o(b, f, d), ((E = C && C.onVnodeMounted) || F || A) && de(() => {
      E && Ce(E, v, c), F && x.enter(b), A && ot(c, null, v, "mounted");
    }, m);
  }, ne = (c, f, d, v, m) => {
    if (d && D(c, d), v)
      for (let _ = 0; _ < v.length; _++)
        D(c, v[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Co(_.children) || _), f === _ || Nr(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const O = m.vnode;
        ne(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, ce = (c, f, d, v, m, _, O, N, b = 0) => {
    for (let E = b; E < c.length; E++) {
      const C = c[E] = N ? Ye(c[E]) : be(c[E]);
      M(
        null,
        C,
        f,
        d,
        v,
        m,
        _,
        O,
        N
      );
    }
  }, Re = (c, f, d, v, m, _, O) => {
    const N = f.el = c.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = f);
    let { patchFlag: b, dynamicChildren: E, dirs: C } = f;
    b |= c.patchFlag & 16;
    const w = c.props || B, x = f.props || B;
    let A;
    if (d && st(d, !1), (A = x.onVnodeBeforeUpdate) && Ce(A, d, f, c), C && ot(f, c, d, "beforeUpdate"), d && st(d, !0), process.env.NODE_ENV !== "production" && Ie && (b = 0, O = !1, E = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(N, ""), E ? (Ke(
      c.dynamicChildren,
      E,
      N,
      d,
      v,
      Bn(f, m),
      _
    ), process.env.NODE_ENV !== "production" && rn(c, f)) : O || we(
      c,
      f,
      N,
      null,
      d,
      v,
      Bn(f, m),
      _,
      !1
    ), b > 0) {
      if (b & 16)
        Ee(N, w, x, d, m);
      else if (b & 2 && w.class !== x.class && r(N, "class", null, x.class, m), b & 4 && r(N, "style", w.style, x.style, m), b & 8) {
        const F = f.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const U = F[W], pe = w[U], fe = x[U];
          (fe !== pe || U === "value") && r(N, U, pe, fe, m, d);
        }
      }
      b & 1 && c.children !== f.children && p(N, f.children);
    } else !O && E == null && Ee(N, w, x, d, m);
    ((A = x.onVnodeUpdated) || C) && de(() => {
      A && Ce(A, d, f, c), C && ot(f, c, d, "updated");
    }, v);
  }, Ke = (c, f, d, v, m, _, O) => {
    for (let N = 0; N < f.length; N++) {
      const b = c[N], E = f[N], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(b, E) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 70) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        b,
        E,
        C,
        null,
        v,
        m,
        _,
        O,
        !0
      );
    }
  }, Ee = (c, f, d, v, m) => {
    if (f !== d) {
      if (f !== B)
        for (const _ in f)
          !It(_) && !(_ in d) && r(
            c,
            _,
            f[_],
            null,
            m,
            v
          );
      for (const _ in d) {
        if (It(_)) continue;
        const O = d[_], N = f[_];
        O !== N && _ !== "value" && r(c, _, N, O, m, v);
      }
      "value" in d && r(c, "value", f.value, d.value, m);
    }
  }, zt = (c, f, d, v, m, _, O, N, b) => {
    const E = f.el = c ? c.el : l(""), C = f.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: A } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ie || w & 2048) && (w = 0, b = !1, x = null), A && (N = N ? N.concat(A) : A), c == null ? (o(E, d, v), o(C, d, v), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      C,
      m,
      _,
      O,
      N,
      b
    )) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ke(
      c.dynamicChildren,
      x,
      d,
      m,
      _,
      O,
      N
    ), process.env.NODE_ENV !== "production" ? rn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && rn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : we(
      c,
      f,
      d,
      C,
      m,
      _,
      O,
      N,
      b
    );
  }, Ao = (c, f, d, v, m, _, O, N, b) => {
    f.slotScopeIds = N, c == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      d,
      v,
      O,
      b
    ) : Ge(
      f,
      d,
      v,
      m,
      _,
      O,
      b
    ) : le(c, f, b);
  }, Ge = (c, f, d, v, m, _, O) => {
    const N = c.component = fl(
      c,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Ui(N), process.env.NODE_ENV !== "production" && (tn(c), gt(N, "mount")), xo(c) && (N.ctx.renderer = wt), process.env.NODE_ENV !== "production" && gt(N, "init"), pl(N, !1, O), process.env.NODE_ENV !== "production" && mt(N, "init"), N.asyncDep) {
      if (process.env.NODE_ENV !== "production" && Ie && (c.el = null), m && m.registerDep(N, R, O), !c.el) {
        const b = N.subTree = Qe(De);
        k(null, b, f, d);
      }
    } else
      R(
        N,
        c,
        f,
        d,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (nn(), mt(N, "mount"));
  }, le = (c, f, d) => {
    const v = f.component = c.component;
    if (Qc(c, f, d))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && tn(f), P(v, f, d), process.env.NODE_ENV !== "production" && nn();
        return;
      } else
        v.next = f, v.update();
    else
      f.el = c.el, v.vnode = f;
  }, R = (c, f, d, v, m, _, O) => {
    const N = () => {
      if (c.isMounted) {
        let { next: w, bu: x, u: A, parent: F, vnode: W } = c;
        {
          const Ve = mr(c);
          if (Ve) {
            w && (w.el = W.el, P(c, w, O)), Ve.asyncDep.then(() => {
              c.isUnmounted || N();
            });
            return;
          }
        }
        let U = w, pe;
        process.env.NODE_ENV !== "production" && tn(w || c.vnode), st(c, !1), w ? (w.el = W.el, P(c, w, O)) : w = W, x && Vt(x), (pe = w.props && w.props.onVnodeBeforeUpdate) && Ce(pe, F, w, W), st(c, !0), process.env.NODE_ENV !== "production" && gt(c, "render");
        const fe = Zo(c);
        process.env.NODE_ENV !== "production" && mt(c, "render");
        const xe = c.subTree;
        c.subTree = fe, process.env.NODE_ENV !== "production" && gt(c, "patch"), M(
          xe,
          fe,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          Zt(xe),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && mt(c, "patch"), w.el = fe.el, U === null && el(c, fe.el), A && de(A, m), (pe = w.props && w.props.onVnodeUpdated) && de(
          () => Ce(pe, F, w, W),
          m
        ), process.env.NODE_ENV !== "production" && Ys(c), process.env.NODE_ENV !== "production" && nn();
      } else {
        let w;
        const { el: x, props: A } = f, { bm: F, m: W, parent: U, root: pe, type: fe } = c, xe = Rt(f);
        st(c, !1), F && Vt(F), !xe && (w = A && A.onVnodeBeforeMount) && Ce(w, U, f), st(c, !0);
        {
          pe.ce && pe.ce._injectChildStyle(fe), process.env.NODE_ENV !== "production" && gt(c, "render");
          const Ve = c.subTree = Zo(c);
          process.env.NODE_ENV !== "production" && mt(c, "render"), process.env.NODE_ENV !== "production" && gt(c, "patch"), M(
            null,
            Ve,
            d,
            v,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && mt(c, "patch"), f.el = Ve.el;
        }
        if (W && de(W, m), !xe && (w = A && A.onVnodeMounted)) {
          const Ve = f;
          de(
            () => Ce(w, U, Ve),
            m
          );
        }
        (f.shapeFlag & 256 || U && Rt(U.vnode) && U.vnode.shapeFlag & 256) && c.a && de(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && qi(c), f = d = v = null;
      }
    };
    c.scope.on();
    const b = c.effect = new Ds(N);
    c.scope.off();
    const E = c.update = b.run.bind(b), C = c.job = b.runIfDirty.bind(b);
    C.i = c, C.id = c.uid, b.scheduler = () => Vn(C), st(c, !0), process.env.NODE_ENV !== "production" && (b.onTrack = c.rtc ? (w) => Vt(c.rtc, w) : void 0, b.onTrigger = c.rtg ? (w) => Vt(c.rtg, w) : void 0), E();
  }, P = (c, f, d) => {
    f.component = c;
    const v = c.vnode.props;
    c.vnode = f, c.next = null, Tc(c, f.props, v, d), Lc(c, f.children, d), Be(), Uo(c), ke();
  }, we = (c, f, d, v, m, _, O, N, b = !1) => {
    const E = c && c.children, C = c ? c.shapeFlag : 0, w = f.children, { patchFlag: x, shapeFlag: A } = f;
    if (x > 0) {
      if (x & 128) {
        Ot(
          E,
          w,
          d,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      } else if (x & 256) {
        An(
          E,
          w,
          d,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      }
    }
    A & 8 ? (C & 16 && Dt(E, m, _), w !== E && p(d, w)) : C & 16 ? A & 16 ? Ot(
      E,
      w,
      d,
      v,
      m,
      _,
      O,
      N,
      b
    ) : Dt(E, m, _, !0) : (C & 8 && p(d, ""), A & 16 && ce(
      w,
      d,
      v,
      m,
      _,
      O,
      N,
      b
    ));
  }, An = (c, f, d, v, m, _, O, N, b) => {
    c = c || vt, f = f || vt;
    const E = c.length, C = f.length, w = Math.min(E, C);
    let x;
    for (x = 0; x < w; x++) {
      const A = f[x] = b ? Ye(f[x]) : be(f[x]);
      M(
        c[x],
        A,
        d,
        null,
        m,
        _,
        O,
        N,
        b
      );
    }
    E > C ? Dt(
      c,
      m,
      _,
      !0,
      !1,
      w
    ) : ce(
      f,
      d,
      v,
      m,
      _,
      O,
      N,
      b,
      w
    );
  }, Ot = (c, f, d, v, m, _, O, N, b) => {
    let E = 0;
    const C = f.length;
    let w = c.length - 1, x = C - 1;
    for (; E <= w && E <= x; ) {
      const A = c[E], F = f[E] = b ? Ye(f[E]) : be(f[E]);
      if (Tt(A, F))
        M(
          A,
          F,
          d,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      E++;
    }
    for (; E <= w && E <= x; ) {
      const A = c[w], F = f[x] = b ? Ye(f[x]) : be(f[x]);
      if (Tt(A, F))
        M(
          A,
          F,
          d,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      w--, x--;
    }
    if (E > w) {
      if (E <= x) {
        const A = x + 1, F = A < C ? f[A].el : v;
        for (; E <= x; )
          M(
            null,
            f[E] = b ? Ye(f[E]) : be(f[E]),
            d,
            F,
            m,
            _,
            O,
            N,
            b
          ), E++;
      }
    } else if (E > x)
      for (; E <= w; )
        qe(c[E], m, _, !0), E++;
    else {
      const A = E, F = E, W = /* @__PURE__ */ new Map();
      for (E = F; E <= x; E++) {
        const oe = f[E] = b ? Ye(f[E]) : be(f[E]);
        oe.key != null && (process.env.NODE_ENV !== "production" && W.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), W.set(oe.key, E));
      }
      let U, pe = 0;
      const fe = x - F + 1;
      let xe = !1, Ve = 0;
      const xt = new Array(fe);
      for (E = 0; E < fe; E++) xt[E] = 0;
      for (E = A; E <= w; E++) {
        const oe = c[E];
        if (pe >= fe) {
          qe(oe, m, _, !0);
          continue;
        }
        let Se;
        if (oe.key != null)
          Se = W.get(oe.key);
        else
          for (U = F; U <= x; U++)
            if (xt[U - F] === 0 && Tt(oe, f[U])) {
              Se = U;
              break;
            }
        Se === void 0 ? qe(oe, m, _, !0) : (xt[Se - F] = E + 1, Se >= Ve ? Ve = Se : xe = !0, M(
          oe,
          f[Se],
          d,
          null,
          m,
          _,
          O,
          N,
          b
        ), pe++);
      }
      const Mo = xe ? Kc(xt) : vt;
      for (U = Mo.length - 1, E = fe - 1; E >= 0; E--) {
        const oe = F + E, Se = f[oe], Po = oe + 1 < C ? f[oe + 1].el : v;
        xt[E] === 0 ? M(
          null,
          Se,
          d,
          Po,
          m,
          _,
          O,
          N,
          b
        ) : xe && (U < 0 || E !== Mo[U] ? dt(Se, d, Po, 2) : U--);
      }
    }
  }, dt = (c, f, d, v, m = null) => {
    const { el: _, type: O, transition: N, children: b, shapeFlag: E } = c;
    if (E & 6) {
      dt(c.component.subTree, f, d, v);
      return;
    }
    if (E & 128) {
      c.suspense.move(f, d, v);
      return;
    }
    if (E & 64) {
      O.move(c, f, d, wt);
      return;
    }
    if (O === ve) {
      o(_, f, d);
      for (let w = 0; w < b.length; w++)
        dt(b[w], f, d, v);
      o(c.anchor, f, d);
      return;
    }
    if (O === cn) {
      ae(c, f, d);
      return;
    }
    if (v !== 2 && E & 1 && N)
      if (v === 0)
        N.beforeEnter(_), o(_, f, d), de(() => N.enter(_), m);
      else {
        const { leave: w, delayLeave: x, afterLeave: A } = N, F = () => o(_, f, d), W = () => {
          w(_, () => {
            F(), A && A();
          });
        };
        x ? x(_, F, W) : W();
      }
    else
      o(_, f, d);
  }, qe = (c, f, d, v = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: N,
      children: b,
      dynamicChildren: E,
      shapeFlag: C,
      patchFlag: w,
      dirs: x,
      cacheIndex: A
    } = c;
    if (w === -2 && (m = !1), N != null && _n(N, null, d, c, !0), A != null && (f.renderCache[A] = void 0), C & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const F = C & 1 && x, W = !Rt(c);
    let U;
    if (W && (U = O && O.onVnodeBeforeUnmount) && Ce(U, f, c), C & 6)
      Pr(c.component, d, v);
    else {
      if (C & 128) {
        c.suspense.unmount(d, v);
        return;
      }
      F && ot(c, null, f, "beforeUnmount"), C & 64 ? c.type.remove(
        c,
        f,
        d,
        wt,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ve || w > 0 && w & 64) ? Dt(
        E,
        f,
        d,
        !1,
        !0
      ) : (_ === ve && w & 384 || !m && C & 16) && Dt(b, f, d), v && In(c);
    }
    (W && (U = O && O.onVnodeUnmounted) || F) && de(() => {
      U && Ce(U, f, c), F && ot(c, null, f, "unmounted");
    }, d);
  }, In = (c) => {
    const { type: f, el: d, anchor: v, transition: m } = c;
    if (f === ve) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((O) => {
        O.type === De ? s(O.el) : In(O);
      }) : Mr(d, v);
      return;
    }
    if (f === cn) {
      V(c);
      return;
    }
    const _ = () => {
      s(d), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: N } = m, b = () => O(d, _);
      N ? N(c.el, _, b) : b();
    } else
      _();
  }, Mr = (c, f) => {
    let d;
    for (; c !== f; )
      d = g(c), s(c), c = d;
    s(f);
  }, Pr = (c, f, d) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Bi(c);
    const { bum: v, scope: m, job: _, subTree: O, um: N, m: b, a: E } = c;
    zo(b), zo(E), v && Vt(v), m.stop(), _ && (_.flags |= 8, qe(O, c, f, d)), N && de(N, f), de(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Yi(c);
  }, Dt = (c, f, d, v = !1, m = !1, _ = 0) => {
    for (let O = _; O < c.length; O++)
      qe(c[O], f, d, v, m);
  }, Zt = (c) => {
    if (c.shapeFlag & 6)
      return Zt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = g(c.anchor || c.el), d = f && f[ec];
    return d ? g(d) : f;
  };
  let Mn = !1;
  const Io = (c, f, d) => {
    c == null ? f._vnode && qe(f._vnode, null, null, !0) : M(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      d
    ), f._vnode = c, Mn || (Mn = !0, Uo(), Gs(), Mn = !1);
  }, wt = {
    p: M,
    um: qe,
    m: dt,
    r: In,
    mt: Ge,
    mc: ce,
    pc: we,
    pbc: Ke,
    n: Zt,
    o: e
  };
  return {
    render: Io,
    hydrate: void 0,
    createApp: xc(Io)
  };
}
function Bn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function st({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function rn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ye(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && rn(i, l)), l.type === Jt && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === De && !l.el && (l.el = i.el);
    }
}
function Kc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < h ? r = l + 1 : i = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function mr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mr(t);
}
function zo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Gc = Symbol.for("v-scx"), qc = () => {
  {
    const e = sn(Gc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function kn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), _r(e, t, n);
}
function _r(e, t, n = B) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Y({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const u = t && o || !t && r !== "post";
  let h;
  if (Bt) {
    if (r === "sync") {
      const D = qc();
      h = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!u) {
      const D = () => {
      };
      return D.stop = Z, D.resume = Z, D.pause = Z, D;
    }
  }
  const p = Q;
  l.call = (D, S, M) => Pe(D, p, S, M);
  let a = !1;
  r === "post" ? l.scheduler = (D) => {
    de(D, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (D, S) => {
    S ? D() : Vn(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const g = Ai(e, t, l);
  return Bt && (h ? h.push(g) : u && g()), g;
}
function Jc(e, t, n) {
  const o = this.proxy, s = G(e) ? e.includes(".") ? vr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = Yt(this), l = _r(s, r.bind(o), n);
  return i(), l;
}
function vr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Yc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function zc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(rt(ye(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${rt(ye(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Yc(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => G(p) ? p.trim() : p)), i.number && (s = n.map(kr))), process.env.NODE_ENV !== "production" && Xi(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[rt(p)] && y(
      `Event "${p}" is emitted in component ${$n(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = rt(t)] || // also try camelCase event handler (#2249)
  o[l = rt(ye(t))];
  !u && r && (u = o[l = rt(et(t))]), u && Pe(
    u,
    e,
    6,
    s
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pe(
      h,
      e,
      6,
      s
    );
  }
}
function Er(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = Er(h, t, !0);
      p && (l = !0, Y(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (K(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => i[u] = null) : Y(i, r), K(e) && o.set(e, i), i);
}
function Cn(e, t) {
  return !e || !Wt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, et(t)) || j(e, t));
}
let so = !1;
function bn() {
  so = !0;
}
function Zo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: g,
    setupState: D,
    ctx: S,
    inheritAttrs: M
  } = e, ee = mn(e);
  let k, q;
  process.env.NODE_ENV !== "production" && (so = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = s || o, X = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(V, {
        get(_e, ne, ce) {
          return y(
            `Property '${String(
              ne
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_e, ne, ce);
        }
      }) : V;
      k = be(
        h.call(
          X,
          V,
          p,
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          D,
          g,
          S
        )
      ), q = l;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && l === a && bn(), k = be(
        V.length > 1 ? V(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return bn(), Ae(l);
            },
            slots: i,
            emit: u
          } : { attrs: l, slots: i, emit: u }
        ) : V(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          null
        )
      ), q = t.props ? l : Zc(l);
    }
  } catch (V) {
    Ft.length = 0, Gt(V, e, 1), k = Qe(De);
  }
  let L = k, ae;
  if (process.env.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([L, ae] = br(k)), q && M !== !1) {
    const V = Object.keys(q), { shapeFlag: X } = L;
    if (V.length) {
      if (X & 7)
        r && V.some(un) && (q = Xc(
          q,
          r
        )), L = tt(L, q, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !so && L.type !== De) {
        const _e = Object.keys(l), ne = [], ce = [];
        for (let Re = 0, Ke = _e.length; Re < Ke; Re++) {
          const Ee = _e[Re];
          Wt(Ee) ? un(Ee) || ne.push(Ee[2].toLowerCase() + Ee.slice(3)) : ce.push(Ee);
        }
        ce.length && y(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ne.length && y(
          `Extraneous non-emits event listeners (${ne.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Xo(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = tt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Xo(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), wo(L, n.transition)), process.env.NODE_ENV !== "production" && ae ? ae(L) : k = L, mn(ee), k;
}
const br = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Co(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return br(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [be(o), i];
};
function Co(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Tn(s)) {
      if (s.type !== De || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Co(n.children);
      }
    } else
      return;
  }
  return n;
}
const Zc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Wt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xc = (e, t) => {
  const n = {};
  for (const o in e)
    (!un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === De;
function Qc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: u } = t, h = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Ie || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Qo(o, i, h) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !Cn(h, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Qo(o, i, h) : !0 : !!i;
  return !1;
}
function Qo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Cn(n, r))
      return !0;
  }
  return !1;
}
function el({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Nr = (e) => e.__isSuspense;
function tl(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Ks(e);
}
const ve = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), cn = Symbol.for("v-stc"), Ft = [];
let me = null;
function yr(e = !1) {
  Ft.push(me = e ? null : []);
}
function nl() {
  Ft.pop(), me = Ft[Ft.length - 1] || null;
}
let Ut = 1;
function es(e, t = !1) {
  Ut += e, e < 0 && me && t && (me.hasOnce = !0);
}
function ol(e) {
  return e.dynamicChildren = Ut > 0 ? me || vt : null, nl(), Ut > 0 && me && me.push(e), e;
}
function Or(e, t, n, o, s, r) {
  return ol(
    te(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = on.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const sl = (...e) => wr(
  ...e
), Dr = ({ key: e }) => e ?? null, ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || J(e) || $(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function te(e, t = null, n = null, o = 0, s = null, r = e === ve ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dr(t),
    ref: t && ln(t),
    scopeId: Zs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return l ? (To(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && me.push(u), u;
}
const Qe = process.env.NODE_ENV !== "production" ? sl : wr;
function wr(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === gc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = De), Tn(e)) {
    const l = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && To(l, n), Ut > 0 && !r && me && (l.shapeFlag & 6 ? me[me.indexOf(e)] = l : me.push(l)), l.patchFlag = -2, l;
  }
  if (Tr(e) && (e = e.__vccOpts), t) {
    t = rl(t);
    let { class: l, style: u } = t;
    l && !G(l) && (t.class = ho(l)), K(u) && (pn(u) && !T(u) && (u = Y({}, u)), t.style = po(u));
  }
  const i = G(e) ? 1 : Nr(e) ? 128 : tc(e) ? 64 : K(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && pn(e) && (e = I(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), te(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function rl(e) {
  return e ? pn(e) || fr(e) ? Y({}, e) : e : null;
}
function tt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: u } = e, h = t ? il(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Dr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(xr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && wo(
    p,
    u.clone(p)
  ), p;
}
function xr(e) {
  const t = tt(e);
  return T(e.children) && (t.children = e.children.map(xr)), t;
}
function ct(e = " ", t = 0) {
  return Qe(Jt, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Qe(De) : T(e) ? Qe(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? Ye(e) : Qe(Jt, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function To(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), To(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !fr(t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ct(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function il(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (s === "style")
        t.style = po([t.style, o.style]);
      else if (Wt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ce(e, t, n, o = null) {
  Pe(e, t, 7, [
    n,
    o
  ]);
}
const cl = ir();
let ll = 0;
function fl(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || cl, r = {
    uid: ll++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ni(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ar(o, s),
    emitsOptions: Er(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = mc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = zc.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const ul = () => Q || ge;
let Nn, ro;
{
  const e = Kt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Q = n
  ), ro = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bt = n
  );
}
const Yt = (e) => {
  const t = Q;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, ts = () => {
  Q && Q.scope.off(), Nn(null);
}, al = /* @__PURE__ */ Ue("slot,component");
function io(e, { isNativeTag: t }) {
  (al(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vr(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function pl(e, t = !1, n = !1) {
  t && ro(t);
  const { props: o, children: s } = e.vnode, r = Vr(e);
  Sc(e, o, r, t), Hc(e, s, n);
  const i = r ? dl(e, t) : void 0;
  return t && ro(!1), i;
}
function dl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && io(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        io(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        Xs(r[i]);
    }
    o.compilerOptions && gl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, or), process.env.NODE_ENV !== "production" && _c(e);
  const { setup: s } = o;
  if (s) {
    Be();
    const r = e.setupContext = s.length > 1 ? _l(e) : null, i = Yt(e), l = yt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
        r
      ]
    ), u = fo(l);
    if (ke(), i(), (u || e.sp) && !Rt(e) && er(e), u) {
      if (l.then(ts, ts), t)
        return l.then((h) => {
          ns(e, h, t);
        }).catch((h) => {
          Gt(h, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ns(e, l, t);
  } else
    Sr(e, t);
}
function ns(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && Tn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Us(t), process.env.NODE_ENV !== "production" && vc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Sr(e, n);
}
let hl;
const gl = () => !hl;
function Sr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Z);
  {
    const s = Yt(e);
    Be();
    try {
      bc(e);
    } finally {
      ke(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const os = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return bn(), z(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function ml(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return z(e, "get", "$slots"), t[n];
    }
  });
}
function _l(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : J(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, os));
      },
      get slots() {
        return o || (o = ml(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, os),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function $o(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Us(Oi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in at)
        return at[n](e);
    },
    has(t, n) {
      return n in t || n in at;
    }
  })) : e.proxy;
}
const vl = /(?:^|[-_])(\w)/g, El = (e) => e.replace(vl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Cr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = Cr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? El(o) : n ? "App" : "Anonymous";
}
function Tr(e) {
  return $(e) && "__vccOpts" in e;
}
const bl = (e, t) => {
  const n = Ti(e, t, Bt);
  if (process.env.NODE_ENV !== "production") {
    const o = ul();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Nl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      return K(a) ? a.__isVue ? ["div", e, "VueInstance"] : J(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : Et(a) ? [
        "div",
        {},
        ["span", e, ue(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${Le(a) ? " (readonly)" : ""}`
      ] : Le(a) ? [
        "div",
        {},
        ["span", e, ue(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", I(a.props))), a.setupState !== B && g.push(i("setup", a.setupState)), a.data !== B && g.push(i("data", I(a.data)));
    const D = u(a, "computed");
    D && g.push(i("computed", D));
    const S = u(a, "inject");
    return S && g.push(i("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = Y({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : K(a) ? ["object", { object: g ? I(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const D = a.type;
    if ($(D))
      return;
    const S = {};
    for (const M in a.ctx)
      h(D, M, g) && (S[M] = a.ctx[M]);
    return S;
  }
  function h(a, g, D) {
    const S = a[D];
    if (T(S) && S.includes(g) || K(S) && g in S || a.extends && h(a.extends, g, D) || a.mixins && a.mixins.some((M) => h(M, g, D)))
      return !0;
  }
  function p(a) {
    return ue(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const ss = "3.5.13", He = process.env.NODE_ENV !== "production" ? y : Z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let co;
const rs = typeof window < "u" && window.trustedTypes;
if (rs)
  try {
    co = /* @__PURE__ */ rs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && He(`Error creating trusted types policy: ${e}`);
  }
const $r = co ? (e) => co.createHTML(e) : (e) => e, yl = "http://www.w3.org/2000/svg", Ol = "http://www.w3.org/1998/Math/MathML", je = typeof document < "u" ? document : null, is = je && /* @__PURE__ */ je.createElement("template"), Dl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? je.createElementNS(yl, e) : t === "mathml" ? je.createElementNS(Ol, e) : n ? je.createElement(e, { is: n }) : je.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => je.createTextNode(e),
  createComment: (e) => je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      is.innerHTML = $r(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = is.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wl = Symbol("_vtc");
function xl(e, t, n) {
  const o = e[wl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const cs = Symbol("_vod"), Vl = Symbol("_vsh");
process.env.NODE_ENV;
const Sl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cl = /(^|;)\s*display\s*:/;
function Tl(e, t, n) {
  const o = e.style, s = G(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (G(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && fn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && fn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), fn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Sl];
      i && (n += ";" + i), o.cssText = n, r = Cl.test(n);
    }
  } else t && e.removeAttribute("style");
  cs in e && (e[cs] = r ? o.display : "", e[Vl] && (o.display = "none"));
}
const $l = /[^\\];\s*$/, ls = /\s*!important$/;
function fn(e, t, n) {
  if (T(n))
    n.forEach((o) => fn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && $l.test(n) && He(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Al(e, t);
    ls.test(n) ? e.setProperty(
      et(o),
      n.replace(ls, ""),
      "important"
    ) : e[o] = n;
  }
}
const fs = ["Webkit", "Moz", "ms"], Wn = {};
function Al(e, t) {
  const n = Wn[t];
  if (n)
    return n;
  let o = ye(t);
  if (o !== "filter" && o in e)
    return Wn[t] = o;
  o = Dn(o);
  for (let s = 0; s < fs.length; s++) {
    const r = fs[s] + o;
    if (r in e)
      return Wn[t] = r;
  }
  return t;
}
const us = "http://www.w3.org/1999/xlink";
function as(e, t, n, o, s, r = ti(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(us, t.slice(6, t.length)) : e.setAttributeNS(us, t, n) : n == null || r && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : nt(n) ? String(n) : n
  );
}
function ps(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $r(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ns(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && He(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function Il(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ml(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ds = Symbol("_vei");
function Pl(e, t, n, o, s = null) {
  const r = e[ds] || (e[ds] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? gs(o, t) : o;
  else {
    const [l, u] = Rl(t);
    if (o) {
      const h = r[t] = Hl(
        process.env.NODE_ENV !== "production" ? gs(o, t) : o,
        s
      );
      Il(e, l, h, u);
    } else i && (Ml(e, l, i, u), r[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function Rl(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let Kn = 0;
const Fl = /* @__PURE__ */ Promise.resolve(), jl = () => Kn || (Fl.then(() => Kn = 0), Kn = Date.now());
function Hl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Pe(
      Ll(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = jl(), n;
}
function gs(e, t) {
  return $(e) || T(e) ? e : (He(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function Ll(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ul = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? xl(e, o, i) : t === "style" ? Tl(e, n, o) : Wt(t) ? un(t) || Pl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bl(e, t, o, i)) ? (ps(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && as(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? ps(e, ye(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), as(e, t, o, i));
};
function Bl(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ms(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ms(t) && G(n) ? !1 : t in e;
}
const kl = /* @__PURE__ */ Y({ patchProp: Ul }, Dl);
let _s;
function Wl() {
  return _s || (_s = Bc(kl));
}
const Kl = (...e) => {
  const t = Wl().createApp(...e);
  process.env.NODE_ENV !== "production" && (ql(t), Jl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Yl(o);
    if (!s) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Gl(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Gl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ql(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Zr(t) || Xr(t) || Qr(t),
    writable: !1
  });
}
function Jl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        He(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return He(o), n;
      },
      set() {
        He(o);
      }
    });
  }
}
function Yl(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && He(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && He(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zl() {
  Nl();
}
process.env.NODE_ENV !== "production" && zl();
const Zl = "/vite.svg", Xl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e", Ql = { class: "card" }, ef = /* @__PURE__ */ Qs({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const t = Di(0);
    return (n, o) => (yr(), Or(ve, null, [
      te("h1", null, Gn(n.msg), 1),
      te("div", Ql, [
        te("button", {
          type: "button",
          onClick: o[0] || (o[0] = (s) => t.value++)
        }, "count is " + Gn(t.value), 1),
        o[1] || (o[1] = te("p", null, [
          ct(" Edit "),
          te("code", null, "components/HelloWorld.vue"),
          ct(" to test HMR ")
        ], -1))
      ]),
      o[2] || (o[2] = te("p", null, [
        ct(" Check out "),
        te("a", {
          href: "https://vuejs.org/guide/quick-start.html#local",
          target: "_blank"
        }, "create-vue"),
        ct(", the official Vue + Vite starter ")
      ], -1)),
      o[3] || (o[3] = te("p", null, [
        ct(" Learn more about IDE Support for Vue in the "),
        te("a", {
          href: "https://vuejs.org/guide/scaling-up/tooling.html#ide-support",
          target: "_blank"
        }, "Vue Docs Scaling up Guide"),
        ct(". ")
      ], -1)),
      o[4] || (o[4] = te("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1))
    ], 64));
  }
}), Ar = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, tf = /* @__PURE__ */ Ar(ef, [["__scopeId", "data-v-cc337d8c"]]), nf = /* @__PURE__ */ Qs({
  __name: "App",
  setup(e) {
    return (t, n) => (yr(), Or(ve, null, [
      n[0] || (n[0] = te("div", null, [
        te("a", {
          href: "https://vite.dev",
          target: "_blank"
        }, [
          te("img", {
            src: Zl,
            class: "logo",
            alt: "Vite logo"
          })
        ]),
        te("a", {
          href: "https://vuejs.org/",
          target: "_blank"
        }, [
          te("img", {
            src: Xl,
            class: "logo vue",
            alt: "Vue logo"
          })
        ])
      ], -1)),
      Qe(tf, { msg: "Vite + Vue" })
    ], 64));
  }
}), of = /* @__PURE__ */ Ar(nf, [["__scopeId", "data-v-48d00746"]]), kt = globalThis;
kt.pelect === void 0 && (kt.pelect = {
  fileAction: [],
  tabAction: [],
  onOpenTab: () => {
  }
});
const Ir = new class {
  fileAction(e, t, n) {
    kt.pelect.fileAction.push({
      fileTest: t,
      actionName: e,
      handler: n
    });
  }
  tabAction(e, t) {
    kt.pelect.tabAction.push({
      tabKeyName: e,
      handler: t
    });
  }
}(), sf = new class {
  constructor() {
    Ro(this, "openTab", (e, ...t) => {
      kt.pelect.onOpenTab(e, ...t);
    });
  }
}();
Ir.fileAction("test", () => !0, () => {
  sf.openTab("testTab", "https://www.baidu.com");
});
Ir.tabAction("testTab", () => {
  const e = document.createElement("div");
  return Kl(of).mount(e), {
    tabId: Math.random().toString(),
    view: e,
    title: "testTab"
  };
});
