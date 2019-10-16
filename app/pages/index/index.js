// import { cloneDeep, throttle, debounce } from "lodash-es";
// import $ from "jquery";
// import "reset.css";
// import "@/assets/styles/mixin.scss";
import "./index.scss";

import "./test.js";

console.log("首页打印的lallalalalala");
// console.log(cloneDeep, throttle, debounce, $);

if (module.hot) {
  module.hot.accept("./test.js", function () {
    console.log("hot reload");
  });
}
