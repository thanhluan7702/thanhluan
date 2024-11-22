import { createHotContext as __vite__createHotContext } from "/react-portfolio-template/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/react-portfolio-template/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=c25bcc25"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/react-portfolio-template/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/react-portfolio-template/node_modules/.vite/deps/react.js?v=c25bcc25"; const StrictMode = __vite__cjsImport3_react["StrictMode"];
import __vite__cjsImport4_reactDom_client from "/react-portfolio-template/node_modules/.vite/deps/react-dom_client.js?v=c25bcc25"; const createRoot = __vite__cjsImport4_reactDom_client["createRoot"];
import { DataProvider } from "/react-portfolio-template/src/providers/DataProvider.jsx";
import { LanguageProvider } from "/react-portfolio-template/src/providers/LanguageProvider.jsx";
import { ThemeProvider } from "/react-portfolio-template/src/providers/ThemeProvider.jsx";
import { GlobalStateProvider } from "/react-portfolio-template/src/providers/GlobalStateProvider.jsx";
import { FeedbacksProvider } from "/react-portfolio-template/src/providers/FeedbacksProvider.jsx";
import { WindowProvider } from "/react-portfolio-template/src/providers/WindowProvider.jsx";
import App from "/react-portfolio-template/src/components/App.jsx?t=1731207774170";
import Preloader from "/react-portfolio-template/src/components/Preloader.jsx";
const AppProviders = ({ children }) => /* @__PURE__ */ jsxDEV(DataProvider, { children: /* @__PURE__ */ jsxDEV(LanguageProvider, { children: /* @__PURE__ */ jsxDEV(FeedbacksProvider, { children: /* @__PURE__ */ jsxDEV(WindowProvider, { children: /* @__PURE__ */ jsxDEV(ThemeProvider, { children: /* @__PURE__ */ jsxDEV(GlobalStateProvider, { children }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 18,
  columnNumber: 25
}, this) }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 17,
  columnNumber: 21
}, this) }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 16,
  columnNumber: 17
}, this) }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 15,
  columnNumber: 13
}, this) }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 14,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
  lineNumber: 13,
  columnNumber: 1
}, this);
_c = AppProviders;
let container = null;
document.addEventListener("DOMContentLoaded", function(event) {
  if (container)
    return;
  container = document.getElementById("root");
  createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(Preloader, { children: /* @__PURE__ */ jsxDEV(AppProviders, { children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
      lineNumber: 39,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  );
});
var _c;
$RefreshReg$(_c, "AppProviders");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("D:/workspace/Porfolio_CunWeb/react-portfolio-template/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaUJ3QjtBQWpCeEIsMkJBQTJCO0FBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xDLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFRQyxvQkFBbUI7QUFDM0IsU0FBUUMsd0JBQXVCO0FBQy9CLFNBQVFDLHFCQUFvQjtBQUM1QixTQUFRQywyQkFBMEI7QUFDbEMsU0FBUUMseUJBQXdCO0FBQ2hDLFNBQVFDLHNCQUFxQjtBQUM3QixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLGVBQWU7QUFFdEIsTUFBTUMsZUFBZUEsQ0FBQyxFQUFFQyxTQUFTLE1BQzdCLHVCQUFDLGdCQUNHLGlDQUFDLG9CQUNHLGlDQUFDLHFCQUNHLGlDQUFDLGtCQUNHLGlDQUFDLGlCQUNHLGlDQUFDLHVCQUNJQSxZQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFQSxLQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJQSxLQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNQSxLQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRQSxLQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FVQSxLQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZQTtBQUNIQyxLQWRLRjtBQWdCTixJQUFJRyxZQUFZO0FBRWhCQyxTQUFTQyxpQkFBaUIsb0JBQW9CLFNBQVNDLE9BQU87QUFDMUQsTUFBR0g7QUFDQztBQUVKQSxjQUFZQyxTQUFTRyxlQUFlLE1BQU07QUFDMUNoQixhQUFXYSxTQUFTRyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxJQUN4Qyx1QkFBQyxjQUNHLGlDQUFDLGFBQ0csaUNBQUMsZ0JBQ0csaUNBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUksS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUEsS0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSUEsS0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUE7QUFBQSxFQUNKO0FBQ0osQ0FBQztBQUFDLElBQUFOO0FBQUFPLGFBQUFQLElBQUEiLCJuYW1lcyI6WyJjcmVhdGVSb290IiwiRGF0YVByb3ZpZGVyIiwiTGFuZ3VhZ2VQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJHbG9iYWxTdGF0ZVByb3ZpZGVyIiwiRmVlZGJhY2tzUHJvdmlkZXIiLCJXaW5kb3dQcm92aWRlciIsIkFwcCIsIlByZWxvYWRlciIsIkFwcFByb3ZpZGVycyIsImNoaWxkcmVuIiwiX2MiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXHJcbmltcG9ydCB7RGF0YVByb3ZpZGVyfSBmcm9tIFwiL3NyYy9wcm92aWRlcnMvRGF0YVByb3ZpZGVyXCJcclxuaW1wb3J0IHtMYW5ndWFnZVByb3ZpZGVyfSBmcm9tIFwiL3NyYy9wcm92aWRlcnMvTGFuZ3VhZ2VQcm92aWRlclwiXHJcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSBcIi9zcmMvcHJvdmlkZXJzL1RoZW1lUHJvdmlkZXJcIlxyXG5pbXBvcnQge0dsb2JhbFN0YXRlUHJvdmlkZXJ9IGZyb20gXCIvc3JjL3Byb3ZpZGVycy9HbG9iYWxTdGF0ZVByb3ZpZGVyXCJcclxuaW1wb3J0IHtGZWVkYmFja3NQcm92aWRlcn0gZnJvbSBcIi9zcmMvcHJvdmlkZXJzL0ZlZWRiYWNrc1Byb3ZpZGVyXCJcclxuaW1wb3J0IHtXaW5kb3dQcm92aWRlcn0gZnJvbSBcIi9zcmMvcHJvdmlkZXJzL1dpbmRvd1Byb3ZpZGVyXCJcclxuaW1wb3J0IEFwcCBmcm9tIFwiL3NyYy9jb21wb25lbnRzL0FwcC5qc3hcIlxyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCIvc3JjL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzeFwiXHJcblxyXG5jb25zdCBBcHBQcm92aWRlcnMgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8RGF0YVByb3ZpZGVyPlxyXG4gICAgICAgIDxMYW5ndWFnZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8RmVlZGJhY2tzUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8V2luZG93UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dsb2JhbFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9XaW5kb3dQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9GZWVkYmFja3NQcm92aWRlcj5cclxuICAgICAgICA8L0xhbmd1YWdlUHJvdmlkZXI+XHJcbiAgICA8L0RhdGFQcm92aWRlcj5cclxuKVxyXG5cclxubGV0IGNvbnRhaW5lciA9IG51bGxcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoY29udGFpbmVyKVxyXG4gICAgICAgIHJldHVyblxyXG5cclxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuICAgIGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxyXG4gICAgICAgIDxTdHJpY3RNb2RlPlxyXG4gICAgICAgICAgICA8UHJlbG9hZGVyPlxyXG4gICAgICAgICAgICAgICAgPEFwcFByb3ZpZGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwLz5cclxuICAgICAgICAgICAgICAgIDwvQXBwUHJvdmlkZXJzPlxyXG4gICAgICAgICAgICA8L1ByZWxvYWRlcj5cclxuICAgICAgICA8L1N0cmljdE1vZGU+XHJcbiAgICApXHJcbn0pXHJcbiJdLCJmaWxlIjoiRDovd29ya3NwYWNlL1BvcmZvbGlvX0N1bldlYi9yZWFjdC1wb3J0Zm9saW8tdGVtcGxhdGUvc3JjL21haW4uanN4In0=