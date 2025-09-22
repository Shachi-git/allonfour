import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  base: "/copyparty/u/johnpaul.olimpo/allonfour/",
  //base: "/allonfour/",
});
