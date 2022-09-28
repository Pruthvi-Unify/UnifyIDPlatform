import {
  Code,
  Group,
  Navbar,
  createStyles
} from "/build/_shared/chunk-27TJHPDT.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// app/routes/dashboard.tsx
var import_react = __toESM(require_react());

// node_modules/@tabler/icons/icons-react/dist/index.esm.js
var e = __toESM(require_react());
function t() {
  return t = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var o2 = arguments[t2];
      for (var r2 in o2)
        Object.prototype.hasOwnProperty.call(o2, r2) && (e2[r2] = o2[r2]);
    }
    return e2;
  }, t.apply(this, arguments);
}
function o(e2, t2) {
  if (null == e2)
    return {};
  var o2, r2, n2 = function(e3, t3) {
    if (null == e3)
      return {};
    var o3, r3, n3 = {}, l2 = Object.keys(e3);
    for (r3 = 0; r3 < l2.length; r3++)
      o3 = l2[r3], t3.indexOf(o3) >= 0 || (n3[o3] = e3[o3]);
    return n3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < l.length; r2++)
      o2 = l[r2], t2.indexOf(o2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, o2) && (n2[o2] = e2[o2]);
  }
  return n2;
}
var r = ["size", "color", "stroke"];
function n(n2) {
  var l = n2.size, i = void 0 === l ? 24 : l, a = n2.color, c = void 0 === a ? "currentColor" : a, s = n2.stroke, h = void 0 === s ? 2 : s, d = o(n2, r);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-2fa", width: i, height: i, viewBox: "0 0 24 24", strokeWidth: h, stroke: c, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, d), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" }), e.createElement("path", { d: "M10 16v-8h4" }), e.createElement("line", { x1: 10, y1: 12, x2: 13, y2: 12 }), e.createElement("path", { d: "M17 16v-6a2 2 0 0 1 4 0v6" }), e.createElement("line", { x1: 17, y1: 13, x2: 21, y2: 13 }));
}
var Lh = ["size", "color", "stroke"];
function yh(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, Lh);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-bell-ringing", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" }), e.createElement("path", { d: "M9 17v1a3 3 0 0 0 6 0v-1" }), e.createElement("path", { d: "M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" }), e.createElement("path", { d: "M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" }));
}
var HA = ["size", "color", "stroke"];
function NA(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, HA);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-database-import", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("ellipse", { cx: 12, cy: 6, rx: 8, ry: 3 }), e.createElement("path", { d: "M4 6v8m5.009 .783c.924 .14 1.933 .217 2.991 .217c4.418 0 8 -1.343 8 -3v-6" }), e.createElement("path", { d: "M11.252 20.987c.246 .009 .496 .013 .748 .013c4.418 0 8 -1.343 8 -3v-6m-18 7h7m-3 -3l3 3l-3 3" }));
}
var VT = ["size", "color", "stroke"];
function XT(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, VT);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-fingerprint", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" }), e.createElement("path", { d: "M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" }), e.createElement("path", { d: "M12 11v2a14 14 0 0 0 2.5 8" }), e.createElement("path", { d: "M8 15a18 18 0 0 0 1.8 6" }), e.createElement("path", { d: "M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" }));
}
var H4 = ["size", "color", "stroke"];
function N4(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, H4);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-key", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("circle", { cx: 8, cy: 15, r: 4 }), e.createElement("line", { x1: 10.85, y1: 12.15, x2: 19, y2: 4 }), e.createElement("line", { x1: 18, y1: 5, x2: 20, y2: 7 }), e.createElement("line", { x1: 15, y1: 8, x2: 17, y2: 10 }));
}
var H7 = ["size", "color", "stroke"];
function N7(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, H7);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-logout", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }), e.createElement("path", { d: "M7 12h14l-3 -3m0 6l3 -3" }));
}
var bve = ["size", "color", "stroke"];
function Lve(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, bve);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-receipt-2", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" }), e.createElement("path", { d: "M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" }));
}
var eEe = ["size", "color", "stroke"];
function tEe(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, eEe);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-settings", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" }), e.createElement("circle", { cx: 12, cy: 12, r: 3 }));
}
var cbe = ["size", "color", "stroke"];
function sbe(r2) {
  var n2 = r2.size, l = void 0 === n2 ? 24 : n2, i = r2.color, a = void 0 === i ? "currentColor" : i, c = r2.stroke, s = void 0 === c ? 2 : c, h = o(r2, cbe);
  return e.createElement("svg", t({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-switch-horizontal", width: l, height: l, viewBox: "0 0 24 24", strokeWidth: s, stroke: a, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, h), e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), e.createElement("polyline", { points: "16 3 20 7 16 11" }), e.createElement("line", { x1: 10, y1: 7, x2: 20, y2: 7 }), e.createElement("polyline", { points: "8 13 4 17 8 21" }), e.createElement("line", { x1: 4, y1: 17, x2: 13, y2: 17 }));
}

// app/routes/dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      backgroundColor: theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background
    },
    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
        0.1
      ),
      color: theme.white,
      fontWeight: 700
    },
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
        0.1
      )}`
    },
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
        0.1
      )}`
    },
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      "&:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
          0.1
        )
      }
    },
    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm
    },
    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
          0.15
        ),
        [`& .${icon}`]: {
          opacity: 0.9
        }
      }
    }
  };
});
var data = [
  { link: "", label: "Notifications", icon: yh },
  { link: "", label: "Billing", icon: Lve },
  { link: "", label: "Security", icon: XT },
  { link: "", label: "SSH Keys", icon: N4 },
  { link: "", label: "Databases", icon: NA },
  { link: "", label: "Authentication", icon: n },
  { link: "", label: "Other Settings", icon: tEe }
];
function dashboard() {
  const { classes, cx } = useStyles();
  const [active, setActive] = (0, import_react.useState)("Billing");
  const links = data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    className: cx(classes.link, { [classes.linkActive]: item.label === active }),
    href: item.link,
    onClick: (event) => {
      event.preventDefault();
      setActive(item.label);
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
        className: classes.linkIcon,
        stroke: 1.5
      }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: item.label
      }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 116,
        columnNumber: 7
      }, this)
    ]
  }, item.label, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {
    height: 700,
    width: { sm: 300 },
    p: "md",
    className: classes.navbar,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar.Section, {
        grow: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
            className: classes.header,
            position: "apart",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code, {
              className: classes.version,
              children: "v3.1.2"
            }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 124,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          links
        ]
      }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 122,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar.Section, {
        className: classes.footer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "#",
            className: classes.link,
            onClick: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sbe, {
                className: classes.linkIcon,
                stroke: 1.5
              }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 131,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Change account"
              }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 130,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "#",
            className: classes.link,
            onClick: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(N7, {
                className: classes.linkIcon,
                stroke: 1.5
              }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 136,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Logout"
              }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 137,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 135,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
export {
  dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-HK2HJO5H.js.map
