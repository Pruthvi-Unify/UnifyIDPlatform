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
      email: (val) => /^\S+@\S+$/.test(val) ? null : "Invalid email",
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
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
          withBorder: true,
          shadow: "md",
          p: 30,
          mt: 30,
          radius: "md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            action: "",
            id: "credentials",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
                label: "ID",
                placeholder: "UserID",
                required: true
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
                label: "Password",
                placeholder: "Your password",
                required: true,
                mt: "md"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 47,
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
                    lineNumber: 50,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
                    onClick: (event) => event.preventDefault(),
                    href: "#",
                    size: "sm",
                    children: "Forgot password?"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                fullWidth: true,
                mt: "xl",
                children: "Sign in"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 55,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 44,
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
              lineNumber: 62,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 63,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 61,
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
              lineNumber: 68,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  login as default
};
//# sourceMappingURL=/build/routes/login-DE6J22GB.js.map
