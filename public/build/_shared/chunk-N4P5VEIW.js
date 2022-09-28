import {
  useEmotionCache,
  useIsomorphicEffect
} from "/build/_shared/chunk-72WAH3IS.js";
import {
  __toESM,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// node_modules/@mantine/remix/esm/ClientProvider.js
var import_react = __toESM(require_react());
function ClientProvider({ children, emotionCache }) {
  const defaultCache = useEmotionCache();
  const cache = emotionCache || defaultCache;
  useIsomorphicEffect(() => {
    cache.sheet.container = document.head;
    const { tags } = cache.sheet;
    cache.sheet.flush();
    tags.forEach((tag) => {
      cache.sheet._insertTag(tag);
    });
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
}

// node_modules/@mantine/remix/esm/StylesPlaceholder.js
var import_react2 = __toESM(require_react());
function StylesPlaceholder() {
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, typeof document === "undefined" ? "__MANTINE_STYLES__" : null);
}

export {
  ClientProvider,
  StylesPlaceholder
};
//# sourceMappingURL=/build/_shared/chunk-N4P5VEIW.js.map
