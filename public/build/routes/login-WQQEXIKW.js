import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  upperFirst,
  useToggle
} from "/build/_shared/chunk-UGY7VBGC.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/@mantine/form/esm/use-form.js
var import_react = __toESM(require_react());
var import_fast_deep_equal = __toESM(require_fast_deep_equal());

// node_modules/@mantine/form/esm/filter-errors/filter-errors.js
function filterErrors(errors) {
  if (errors === null || typeof errors !== "object") {
    return {};
  }
  return Object.keys(errors).reduce((acc, key) => {
    const errorValue = errors[key];
    if (errorValue !== void 0 && errorValue !== null && errorValue !== false) {
      acc[key] = errorValue;
    }
    return acc;
  }, {});
}

// node_modules/@mantine/form/esm/validate/should-validate-on-change.js
function shouldValidateOnChange(path, validateInputOnChange) {
  if (!validateInputOnChange) {
    return false;
  }
  if (typeof validateInputOnChange === "boolean") {
    return validateInputOnChange;
  }
  if (Array.isArray(validateInputOnChange)) {
    return validateInputOnChange.includes(path);
  }
  return false;
}

// node_modules/@mantine/form/esm/paths/get-splitted-path.js
function getSplittedPath(path) {
  if (typeof path !== "string") {
    return [];
  }
  return path.split(".");
}

// node_modules/@mantine/form/esm/paths/get-path.js
function getPath(path, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0 || typeof values !== "object" || values === null) {
    return void 0;
  }
  let value = values[splittedPath[0]];
  for (let i = 1; i < splittedPath.length; i += 1) {
    if (value === void 0) {
      break;
    }
    value = value[splittedPath[i]];
  }
  return value;
}

// node_modules/klona/dist/index.mjs
function klona(x) {
  if (typeof x !== "object")
    return x;
  var k, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    if (x.constructor !== Object && typeof x.constructor === "function") {
      tmp = new x.constructor();
      for (k in x) {
        if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
          tmp[k] = klona(x[k]);
        }
      }
    } else {
      tmp = {};
      for (k in x) {
        if (k === "__proto__") {
          Object.defineProperty(tmp, k, {
            value: klona(x[k]),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          tmp[k] = klona(x[k]);
        }
      }
    }
    return tmp;
  }
  if (str === "[object Array]") {
    k = x.length;
    for (tmp = Array(k); k--; ) {
      tmp[k] = klona(x[k]);
    }
    return tmp;
  }
  if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
    return tmp;
  }
  if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
    return tmp;
  }
  if (str === "[object Date]") {
    return new Date(+x);
  }
  if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
    tmp.lastIndex = x.lastIndex;
    return tmp;
  }
  if (str === "[object DataView]") {
    return new x.constructor(klona(x.buffer));
  }
  if (str === "[object ArrayBuffer]") {
    return x.slice(0);
  }
  if (str.slice(-6) === "Array]") {
    return new x.constructor(x);
  }
  return x;
}

// node_modules/@mantine/form/esm/paths/set-path.js
function setPath(path, value, values) {
  const splittedPath = getSplittedPath(path);
  if (splittedPath.length === 0) {
    return values;
  }
  const cloned = klona(values);
  if (splittedPath.length === 1) {
    cloned[splittedPath[0]] = value;
    return cloned;
  }
  let val = cloned[splittedPath[0]];
  for (let i = 1; i < splittedPath.length - 1; i += 1) {
    if (val === void 0) {
      return cloned;
    }
    val = val[splittedPath[i]];
  }
  val[splittedPath[splittedPath.length - 1]] = value;
  return cloned;
}

// node_modules/@mantine/form/esm/validate/validate-values.js
function getValidationResults(errors) {
  const filteredErrors = filterErrors(errors);
  return { hasErrors: Object.keys(filteredErrors).length > 0, errors: filteredErrors };
}
function validateRulesRecord(rules, values, path = "", errors = {}) {
  if (typeof rules !== "object" || rules === null) {
    return errors;
  }
  return Object.keys(rules).reduce((acc, ruleKey) => {
    const rule = rules[ruleKey];
    const rulePath = `${path === "" ? "" : `${path}.`}${ruleKey}`;
    const value = getPath(rulePath, values);
    let arrayValidation = false;
    if (typeof rule === "function") {
      acc[rulePath] = rule(value, values, rulePath);
    }
    if (typeof rule === "object" && Array.isArray(value)) {
      arrayValidation = true;
      value.forEach((_item, index) => validateRulesRecord(rule, values, `${rulePath}.${index}`, acc));
    }
    if (typeof rule === "object" && typeof value === "object" && value !== null) {
      if (!arrayValidation) {
        validateRulesRecord(rule, values, rulePath, acc);
      }
    }
    return acc;
  }, errors);
}
function validateValues(validate, values) {
  if (typeof validate === "function") {
    return getValidationResults(validate(values));
  }
  return getValidationResults(validateRulesRecord(validate, values));
}

// node_modules/@mantine/form/esm/validate/validate-field-value.js
function validateFieldValue(path, rules, values) {
  if (typeof path !== "string") {
    return { hasError: false, error: null };
  }
  const results = validateValues(rules, values);
  const hasError = path in results.errors;
  return { hasError, error: hasError ? results.errors[path] : null };
}

// node_modules/@mantine/form/esm/paths/reorder-path.js
function reorderPath(path, { from, to }, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  const item = currentValue[from];
  cloned.splice(from, 1);
  cloned.splice(to, 0, item);
  return setPath(path, cloned, values);
}

// node_modules/@mantine/form/esm/paths/remove-path.js
function removePath(path, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  return setPath(path, currentValue.filter((_, itemIndex) => itemIndex !== index), values);
}

// node_modules/@mantine/form/esm/clear-list-state/clear-list-state.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function clearListState(field, state) {
  if (state === null || typeof state !== "object") {
    return {};
  }
  const clone = __spreadValues({}, state);
  Object.keys(state).forEach((errorKey) => {
    if (errorKey.includes(`${String(field)}.`)) {
      delete clone[errorKey];
    }
  });
  return clone;
}

// node_modules/@mantine/form/esm/paths/insert-path.js
function insertPath(path, value, index, values) {
  const currentValue = getPath(path, values);
  if (!Array.isArray(currentValue)) {
    return values;
  }
  const cloned = [...currentValue];
  cloned.splice(typeof index === "number" ? index : cloned.length, 0, value);
  return setPath(path, cloned, values);
}

// node_modules/@mantine/form/esm/get-status/get-status.js
function getStatus(status, path) {
  const paths = Object.keys(status);
  if (typeof path === "string") {
    const nestedPaths = paths.filter((statusPath) => statusPath.includes(`${path}.`));
    return status[path] || nestedPaths.some((statusPath) => status[statusPath]) || false;
  }
  return paths.some((statusPath) => status[statusPath]);
}

// node_modules/@mantine/form/esm/get-input-on-change/get-input-on-change.js
function getInputOnChange(setValue) {
  return (val) => {
    if (!val) {
      setValue(val);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;
      if (currentTarget instanceof HTMLInputElement) {
        if (currentTarget.type === "checkbox") {
          setValue(currentTarget.checked);
        } else {
          setValue(currentTarget.value);
        }
      } else if (currentTarget instanceof HTMLTextAreaElement || currentTarget instanceof HTMLSelectElement) {
        setValue(currentTarget.value);
      }
    } else {
      setValue(val);
    }
  };
}

// node_modules/@mantine/form/esm/use-form.js
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useForm({
  initialValues = {},
  initialErrors = {},
  initialDirty = {},
  initialTouched = {},
  clearInputErrorOnChange = true,
  validateInputOnChange = false,
  validateInputOnBlur = false,
  validate: rules
} = {}) {
  const [touched, setTouched] = (0, import_react.useState)(initialTouched);
  const [dirty, setDirty] = (0, import_react.useState)(initialDirty);
  const [values, _setValues] = (0, import_react.useState)(initialValues);
  const [errors, _setErrors] = (0, import_react.useState)(filterErrors(initialErrors));
  const _dirtyValues = (0, import_react.useRef)(initialValues);
  const _setDirtyValues = (_values) => {
    _dirtyValues.current = _values;
  };
  const resetTouched = (0, import_react.useCallback)(() => setTouched({}), []);
  const resetDirty = (_values) => {
    _setDirtyValues(_values || values);
    setDirty({});
  };
  const setErrors = (0, import_react.useCallback)((errs) => _setErrors((current) => filterErrors(typeof errs === "function" ? errs(current) : errs)), []);
  const clearErrors = (0, import_react.useCallback)(() => _setErrors({}), []);
  const reset = (0, import_react.useCallback)(() => {
    _setValues(initialValues);
    clearErrors();
    resetDirty(initialValues);
    resetTouched();
  }, []);
  const setFieldError = (0, import_react.useCallback)((path, error) => setErrors((current) => __spreadProps(__spreadValues2({}, current), { [path]: error })), []);
  const clearFieldError = (0, import_react.useCallback)((path) => setErrors((current) => {
    if (typeof path !== "string") {
      return current;
    }
    const clone = __spreadValues2({}, current);
    delete clone[path];
    return clone;
  }), []);
  const setFieldValue = (0, import_react.useCallback)((path, value) => {
    const shouldValidate = shouldValidateOnChange(path, validateInputOnChange);
    _setValues((current) => {
      const initialValue = getPath(path, _dirtyValues.current);
      const isFieldDirty = !(0, import_fast_deep_equal.default)(initialValue, value);
      setDirty((currentDirty) => __spreadProps(__spreadValues2({}, currentDirty), { [path]: isFieldDirty }));
      setTouched((currentTouched) => __spreadProps(__spreadValues2({}, currentTouched), { [path]: true }));
      const result = setPath(path, value, current);
      if (shouldValidate) {
        const validationResults = validateFieldValue(path, rules, result);
        validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
      }
      return result;
    });
    !shouldValidate && clearInputErrorOnChange && setFieldError(path, null);
  }, []);
  const setValues = (0, import_react.useCallback)((payload) => {
    _setValues(payload);
    clearInputErrorOnChange && clearErrors();
  }, []);
  const reorderListItem = (0, import_react.useCallback)((path, payload) => _setValues((current) => reorderPath(path, payload, current)), []);
  const removeListItem = (0, import_react.useCallback)((path, index) => {
    _setValues((current) => removePath(path, index, current));
    _setErrors((errs) => clearListState(path, errs));
    setDirty((current) => clearListState(`${String(path)}.${index}`, current));
  }, []);
  const insertListItem = (0, import_react.useCallback)((path, item, index) => _setValues((current) => insertPath(path, item, index, current)), []);
  const validate = (0, import_react.useCallback)(() => {
    const results = validateValues(rules, values);
    _setErrors(results.errors);
    return results;
  }, [values, rules]);
  const validateField = (0, import_react.useCallback)((path) => {
    const results = validateFieldValue(path, rules, values);
    results.hasError ? setFieldError(path, results.error) : clearFieldError(path);
    return results;
  }, [values, rules]);
  const getInputProps = (path, { type = "input", withError = type === "input", withFocus = true } = {}) => {
    const onChange = getInputOnChange((value) => setFieldValue(path, value));
    const payload = { onChange };
    if (withError) {
      payload.error = errors[path];
    }
    if (type === "checkbox") {
      payload.checked = getPath(path, values);
    } else {
      payload.value = getPath(path, values);
    }
    if (withFocus) {
      payload.onFocus = () => setTouched((current) => __spreadProps(__spreadValues2({}, current), { [path]: true }));
      payload.onBlur = () => {
        if (shouldValidateOnChange(path, validateInputOnBlur)) {
          const validationResults = validateFieldValue(path, rules, values);
          validationResults.hasError ? setFieldError(path, validationResults.error) : clearFieldError(path);
        }
      };
    }
    return payload;
  };
  const onSubmit = (handleSubmit, handleValidationFailure) => (event) => {
    event.preventDefault();
    const results = validate();
    if (results.hasErrors) {
      handleValidationFailure == null ? void 0 : handleValidationFailure(results.errors, values, event);
    } else {
      handleSubmit(values, event);
    }
  };
  const onReset = (0, import_react.useCallback)((event) => {
    event.preventDefault();
    reset();
  }, []);
  const isDirty = (0, import_react.useCallback)((path) => getStatus(dirty, path), [dirty]);
  const isTouched = (0, import_react.useCallback)((path) => getStatus(touched, path), [touched]);
  const isValid = (0, import_react.useCallback)((path) => path ? !validateFieldValue(path, rules, values).hasError : !validateValues(rules, values).hasErrors, [values, rules]);
  return {
    values,
    errors,
    setValues,
    setErrors,
    setFieldValue,
    setFieldError,
    clearFieldError,
    clearErrors,
    reset,
    validate,
    validateField,
    reorderListItem,
    removeListItem,
    insertListItem,
    getInputProps,
    onSubmit,
    onReset,
    isDirty,
    isTouched,
    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isValid
  };
}

// app/SocialButtons/GoogleIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
      }, void 0, false, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#34A853",
        d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      }, void 0, false, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#FBBC05",
        d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      }, void 0, false, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        fill: "#EB4335",
        d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      }, void 0, false, {
        fileName: "app/SocialButtons/GoogleIcon.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/SocialButtons/GoogleIcon.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/SocialButtons/FaceBookIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
    }, void 0, false, {
      fileName: "app/SocialButtons/FaceBookIcon.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/SocialButtons/FaceBookIcon.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/SocialButtons/SocialButtons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function GoogleButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleIcon, {}, void 0, false, {
      fileName: "app/SocialButtons/SocialButtons.tsx",
      lineNumber: 7,
      columnNumber: 28
    }, this),
    variant: "default",
    color: "gray",
    ...props
  }, void 0, false, {
    fileName: "app/SocialButtons/SocialButtons.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
function FacebookButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
    leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookIcon, {}, void 0, false, {
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
  }, void 0, false, {
    fileName: "app/SocialButtons/SocialButtons.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paper, {
    radius: "sm",
    p: "l",
    withBorder: true,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        size: "lg",
        weight: 500,
        children: [
          "Welcome to Mantine, ",
          type,
          " with"
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
        grow: true,
        mb: "md",
        mt: "md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleButton, {
            radius: "xl",
            children: "Google"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FacebookButton, {
            radius: "xl",
            children: "Twitter"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {
        label: "Or continue with email",
        labelPosition: "center",
        my: "lg"
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        onSubmit: form.onSubmit(() => {
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
            children: [
              type === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
                label: "Name",
                placeholder: "Your name",
                value: form.values.name,
                onChange: (event) => form.setFieldValue("name", event.currentTarget.value)
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextInput, {
                required: true,
                label: "Email",
                placeholder: "hello@mantine.dev",
                value: form.values.email,
                onChange: (event) => form.setFieldValue("email", event.currentTarget.value),
                error: form.errors.email && "Invalid email"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput, {
                required: true,
                label: "Password",
                placeholder: "Your password",
                value: form.values.password,
                onChange: (event) => form.setFieldValue("password", event.currentTarget.value),
                error: form.errors.password && "Password should include at least 6 characters"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this),
              type === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox, {
                label: "I accept terms and conditions",
                checked: form.values.terms,
                onChange: (event) => form.setFieldValue("terms", event.currentTarget.checked)
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 77,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
            position: "apart",
            mt: "xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anchor, {
                component: "button",
                type: "button",
                color: "dimmed",
                onClick: () => toggle(),
                size: "xs",
                children: type === "register" ? "Already have an account? Login" : "Don't have an account? Register"
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
                type: "submit",
                children: upperFirst(type)
              }, void 0, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
export {
  login as default
};
//# sourceMappingURL=/build/routes/login-WQQEXIKW.js.map
