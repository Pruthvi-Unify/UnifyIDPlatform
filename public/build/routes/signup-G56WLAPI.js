import {
  FacebookButton,
  GoogleButton,
  useForm
} from "/build/_shared/chunk-Y344CP74.js";
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
} from "/build/_shared/chunk-72WAH3IS.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/signup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function signup(props) {
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
          children: "Welcome to Mantine, Sign Up with"
        }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 39,
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
              fileName: "app/routes/signup.tsx",
              lineNumber: 43,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          color: "dimmed",
          size: "sm",
          align: "center",
          mt: 5,
          children: [
            "Have an account already?",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
              href: "#",
              size: "sm",
              onClick: (event) => event.preventDefault(),
              children: "Sign In"
            }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 46,
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
              fileName: "app/routes/signup.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
              label: "Password",
              placeholder: "Your password",
              required: true,
              mt: "md"
            }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
              position: "apart",
              mt: "md",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
                label: "Remember me"
              }, void 0, false, {
                fileName: "app/routes/signup.tsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
              fullWidth: true,
              mt: "xl",
              children: "Sign up"
            }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 53,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
export {
  signup as default
};
//# sourceMappingURL=/build/routes/signup-G56WLAPI.js.map
