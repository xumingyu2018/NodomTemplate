import { Nodom } from "nodom3";
import Hello from "../modules/helloWorld";
import Footer from "../modules/footer";

export function initRoute() {
  Nodom.createRoute([
    {
      path: "/main",
      module: Hello,
      routes: [
        {
          path: "/top",
          //指定路由对应的模块
          module: Footer,
        },
      ],
    },
  ], undefined);
}
