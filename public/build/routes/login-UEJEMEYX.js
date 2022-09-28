import {
  Form
} from "/build/_shared/chunk-G5WBHU7T.js";
import {
  FacebookButton,
  GoogleButton,
  useForm
} from "/build/_shared/chunk-N66LKPYN.js";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  useToggle
} from "/build/_shared/chunk-L45CHNTW.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function login(props) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },
    validate: {
      password: (val) => val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    size: 720,
    my: 40,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
      radius: "md",
      p: "xl",
      withBorder: true,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          size: "lg",
          sx: (theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 }),
          align: "center",
          children: [
            "Welcome to Mantine, ",
            type,
            " with"
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
          withBorder: true,
          shadow: "md",
          p: 30,
          mt: 30,
          radius: "md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            action: "https://recursing-bell-xtl2ro51rb.projects.oryapis.com/self-service/login?flow=2aa89eb7-f997-4beb-a3d3-716c92dec859",
            id: "credentials",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                name: "csrf_token",
                type: "hidden",
                value: "9TjnlCGzDj7yRPAkb1kM1ryshsPLT89Y3U1B/cK6/6G+ojfS5Ip1tQZNgU/JBaknMcJMHpzhoSdU+UZFmxnGJA=="
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
                label: "ID",
                placeholder: "UserID",
                required: true
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
                label: "Password",
                placeholder: "Your password",
                required: true,
                mt: "md"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
                position: "apart",
                mt: "md",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
                    label: "Remember me"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
                    onClick: (event) => event.preventDefault(),
                    href: "#",
                    size: "sm",
                    children: "Forgot password?"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 68,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                fullWidth: true,
                mt: "xl",
                children: "Sign in"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 72,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
          grow: true,
          mb: "mb",
          mt: "md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleButton, {
              radius: "xl",
              children: "Google"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 80,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          color: "dimmed",
          size: "sm",
          align: "center",
          mt: 5,
          children: [
            "Do not have an account yet?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
              href: "#",
              size: "sm",
              onClick: (event) => event.preventDefault(),
              children: "Create account"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 85,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
export {
  login as default
};
//# sourceMappingURL=/build/routes/login-UEJEMEYX.js.map
