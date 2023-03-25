import { defineConfig } from "astro/config";
import uno from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [uno()]
});