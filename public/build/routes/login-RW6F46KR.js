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
  Title
} from "/build/_shared/chunk-UC5VEVSB.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    size: 420,
    my: 40,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, {
        align: "center",
        sx: (theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 }),
        children: "Welcome back!"
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 17,
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
            lineNumber: 25,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
        withBorder: true,
        shadow: "md",
        p: 30,
        mt: 30,
        radius: "md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
            label: "Email",
            placeholder: "you@mantine.dev",
            required: true
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
            label: "Password",
            placeholder: "Your password",
            required: true,
            mt: "md"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
            position: "apart",
            mt: "md",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
                label: "Remember me"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
                onClick: (event) => event.preventDefault(),
                href: "#",
                size: "sm",
                children: "Forgot password?"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
            fullWidth: true,
            mt: "xl",
            children: "Sign in"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this);
}
export {
  login as default
};
//# sourceMappingURL=/build/routes/login-RW6F46KR.js.map
