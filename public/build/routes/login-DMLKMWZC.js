import {
  useLoaderData
} from "/build/_shared/chunk-GYUD4WLM.js";
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

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function login(props) {
  const flow = useLoaderData();
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      identifier: "",
      password: "",
      method: "password",
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
          lineNumber: 74,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
          withBorder: true,
          shadow: "md",
          p: 30,
          mt: 30,
          radius: "md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            id: "credentials",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                id: "flow",
                value: flow.id
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
                label: "identifier",
                id: "identifier",
                placeholder: "UserID",
                required: true
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
                label: "password",
                id: "password",
                placeholder: "Your password",
                required: true,
                mt: "md"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 82,
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
                    lineNumber: 85,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
                    onClick: (event) => event.preventDefault(),
                    href: "#",
                    size: "sm",
                    children: "Forgot password?"
                  }, void 0, false, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.tsx",
                lineNumber: 84,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                type: "submit",
                fullWidth: true,
                mt: "xl",
                id: "btnSubmit",
                children: "Sign in"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: flow.id
        }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 96,
          columnNumber: 11
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
              lineNumber: 100,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
              radius: "xl",
              children: "Twitter"
            }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 99,
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
              lineNumber: 106,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
export {
  login as default
};
//# sourceMappingURL=/build/routes/login-DMLKMWZC.js.map
