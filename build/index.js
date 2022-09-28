var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 14,
    columnNumber: 31
  }, this));
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_core = require("@mantine/core"), import_remix2 = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
(0, import_core.createEmotionCache)({ key: "mantine" });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.MantineProvider, {
    withGlobalStyles: !0,
    withNormalizeCSS: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard
});
var import_react3 = require("react"), import_core2 = require("@mantine/core"), import_icons = require("@tabler/icons"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), useStyles = (0, import_core2.createStyles)((theme, _params, getRef) => {
  let icon = getRef("icon");
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
}), data = [
  { link: "", label: "Notifications", icon: import_icons.IconBellRinging },
  { link: "", label: "Permissions", icon: import_icons.IconKey },
  { link: "", label: "Schema", icon: import_icons.IconDatabaseImport },
  { link: "", label: "Identities", icon: import_icons.IconUsers },
  { link: "", label: "Settings", icon: import_icons.IconSettings }
];
function dashboard() {
  let { classes, cx } = useStyles(), [active, setActive] = (0, import_react3.useState)("Billing"), links = data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    className: cx(classes.link, { [classes.linkActive]: item.label === active }),
    href: item.link,
    onClick: (event) => {
      event.preventDefault(), setActive(item.label);
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, {
        className: classes.linkIcon,
        stroke: 1.5
      }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: item.label
      }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 118,
        columnNumber: 7
      }, this)
    ]
  }, item.label, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Navbar, {
    height: 950,
    width: { sm: 300 },
    p: "md",
    className: classes.navbar,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Navbar.Section, {
        grow: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Group, {
            className: classes.header,
            position: "apart",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Code, {
              className: classes.version,
              children: "v3.1.2"
            }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 126,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 125,
            columnNumber: 9
          }, this),
          links
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.Navbar.Section, {
        className: classes.footer,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "#",
            className: classes.link,
            onClick: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.IconSwitchHorizontal, {
                className: classes.linkIcon,
                stroke: 1.5
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 133,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Change account"
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 134,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 132,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
            href: "#",
            className: classes.link,
            onClick: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons.IconLogout, {
                className: classes.linkIcon,
                stroke: 1.5
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 138,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "Logout"
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 139,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 137,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 131,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => signup
});
var import_hooks = require("@mantine/hooks"), import_form = require("@mantine/form"), import_core4 = require("@mantine/core");

// app/SocialButtons/SocialButtons.tsx
var import_core3 = require("@mantine/core");

// app/SocialButtons/GoogleIcon.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function GoogleIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 262",
    width: 14,
    height: 14,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#4285F4",
        d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      }, void 0, !1, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#34A853",
        d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      }, void 0, !1, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#FBBC05",
        d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      }, void 0, !1, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#EB4335",
        d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      }, void 0, !1, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/SocialButtons/GoogleIcon.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/SocialButtons/FaceBookIcon.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FacebookIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fab",
    "data-icon": "facebook",
    className: "svg-inline--fa fa-facebook",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: 14,
    height: 14,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      fill: "currentColor",
      d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
    }, void 0, !1, {
      fileName: "app/SocialButtons/FaceBookIcon.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/SocialButtons/FaceBookIcon.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/SocialButtons/SocialButtons.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function GoogleButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Button, {
    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {}, void 0, !1, {
      fileName: "app/SocialButtons/SocialButtons.tsx",
      lineNumber: 7,
      columnNumber: 28
    }, this),
    variant: "default",
    color: "gray",
    ...props
  }, void 0, !1, {
    fileName: "app/SocialButtons/SocialButtons.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
function FacebookButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Button, {
    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookIcon, {}, void 0, !1, {
      fileName: "app/SocialButtons/SocialButtons.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    sx: (theme) => ({
      backgroundColor: "#4267B2",
      color: "#fff",
      "&:hover": {
        backgroundColor: theme.fn.darken("#4267B2", 0.1)
      }
    }),
    ...props
  }, void 0, !1, {
    fileName: "app/SocialButtons/SocialButtons.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function signup(props) {
  let [type, toggle] = (0, import_hooks.useToggle)(["login", "register"]), form = (0, import_form.useForm)({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: !0
    },
    validate: {
      email: (val) => /^\S+@\S+$/.test(val) ? null : "Invalid email",
      password: (val) => val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Container, {
    size: 720,
    my: 40,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Paper, {
      radius: "md",
      p: "xl",
      withBorder: !0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Text, {
          size: "lg",
          sx: (theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 }),
          align: "center",
          children: "Welcome to Mantine, Sign Up with"
        }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Group, {
          grow: !0,
          mb: "mb",
          mt: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleButton, {
              radius: "xl",
              children: "Google"
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Text, {
          color: "dimmed",
          size: "sm",
          align: "center",
          mt: 5,
          children: [
            "Have an account already?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Anchor, {
              href: "#",
              size: "sm",
              onClick: (event) => event.preventDefault(),
              children: "Sign In"
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Paper, {
          withBorder: !0,
          shadow: "md",
          p: 30,
          mt: 30,
          radius: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
              label: "Email",
              placeholder: "you@mantine.dev",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.PasswordInput, {
              label: "Password",
              placeholder: "Your password",
              required: !0,
              mt: "md"
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Group, {
              position: "apart",
              mt: "md",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Checkbox, {
                label: "Remember me"
              }, void 0, !1, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Button, {
              fullWidth: !0,
              mt: "xl",
              children: "Sign up"
            }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/blog",
              rel: "noreferrer",
              children: "15m Quickstart Blog Tutorial"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 7,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 6,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/jokes",
              rel: "noreferrer",
              children: "Deep Dive Jokes App Tutorial"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/docs",
              rel: "noreferrer",
              children: "Remix Docs"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "http://localhost:3000/dashboard",
              rel: "noreferrer",
              children: "Dashboard"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "http://localhost:3000/login",
              rel: "noreferrer",
              children: "Login"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "http://localhost:3000/signup",
              rel: "noreferrer",
              children: "Sign Up"
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login,
  loader: () => loader
});
var import_hooks2 = require("@mantine/hooks"), import_form2 = require("@mantine/form"), import_react4 = require("@remix-run/react"), import_node = require("@remix-run/node"), import_core5 = require("@mantine/core");
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader(params) {
  let res = await fetch("https://recursing-bell-xtl2ro51rb.projects.oryapis.com/self-service/login/api");
  return (0, import_node.json)(await res.json());
}
var action = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let flow = String(formData.get("id"));
  var url = "https://recursing-bell-xtl2ro51rb.projects.oryapis.com/self-service/login?flow=", posturl = url.concat(flow);
  console.log(posturl);
  let res1 = await fetch(posturl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      formData
    })
  });
  return console.log(res1), (0, import_node.json)(res1.json);
};
function login(props) {
  let flow = (0, import_react4.useLoaderData)(), [type, toggle] = (0, import_hooks2.useToggle)(["login", "register"]), form = (0, import_form2.useForm)({
    initialValues: {
      identifier: "",
      password: "",
      method: "password",
      terms: !0
    },
    validate: {
      password: (val) => val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Container, {
    size: 720,
    my: 40,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Paper, {
      radius: "md",
      p: "xl",
      withBorder: !0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Text, {
          size: "lg",
          sx: (theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 }),
          align: "center",
          children: [
            "Welcome to Mantine, ",
            type,
            " with"
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Paper, {
          withBorder: !0,
          shadow: "md",
          p: 30,
          mt: 30,
          radius: "md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Form, {
            id: "credentials",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                id: "flow",
                value: flow.id
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.TextInput, {
                label: "identifier",
                id: "identifier",
                placeholder: "UserID",
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.PasswordInput, {
                label: "password",
                id: "password",
                placeholder: "Your password",
                required: !0,
                mt: "md"
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Group, {
                position: "apart",
                mt: "md",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Checkbox, {
                    label: "Remember me"
                  }, void 0, !1, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Anchor, {
                    onClick: (event) => event.preventDefault(),
                    href: "#",
                    size: "sm",
                    children: "Forgot password?"
                  }, void 0, !1, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/login.tsx",
                lineNumber: 84,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Button, {
                type: "submit",
                fullWidth: !0,
                mt: "xl",
                id: "btnSubmit",
                children: "Sign in"
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Text, {
          children: flow.id
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Group, {
          grow: !0,
          mb: "mb",
          mt: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleButton, {
              radius: "xl",
              children: "Google"
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Text, {
          color: "dimmed",
          size: "sm",
          align: "center",
          mt: 5,
          children: [
            "Do not have an account yet?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core5.Anchor, {
              href: "#",
              size: "sm",
              onClick: (event) => event.preventDefault(),
              children: "Create account"
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 106,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2c1aa115", entry: { module: "/build/entry.client-RRMWHFPZ.js", imports: ["/build/_shared/chunk-N4P5VEIW.js", "/build/_shared/chunk-KOBBZY2A.js", "/build/_shared/chunk-72WAH3IS.js", "/build/_shared/chunk-MLBUYSNZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TJKQYLR6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-ZI6C7V6B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-D7CUSGQZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-IVAOBPUW.js", imports: ["/build/_shared/chunk-Y344CP74.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-IMSMPCX4.js", imports: ["/build/_shared/chunk-Y344CP74.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-2C1AA115.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
