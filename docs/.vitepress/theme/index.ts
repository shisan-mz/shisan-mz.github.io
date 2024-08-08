import DefaultTheme from "vitepress/theme";
import "./style.css"; // 此处是主题的全局样式，可覆盖原主题的设置
import type { Theme } from "vitepress";

const define = <T>(value: T): T => value;
export default define<Theme>({
  ...DefaultTheme, // 此处采用了默认主题，可以替换为自定义的主题
  NotFound: DefaultTheme.NotFound,
  enhanceApp: ({ app, router, siteData }) => {},
});
