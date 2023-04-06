import { defineConfig, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
    presets: [
        presetUno(),
        presetScrollbar(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: "Inter",
                mono: "JetBrains Mono"
            }
        })
    ],
    transformers: [transformerVariantGroup()],
    preflights: [
        {
            getCSS: ({ theme }: Record<string, any>) => {
                const preflightRaw = readFileSync(join(__dirname, "src", "res", "css", "preflight.scss"), "utf-8");
                let preflight = preflightRaw;
                const matches = preflightRaw.matchAll(/(theme)[^"]*/g);

                for (const match of matches) {
                    const instance = preflightRaw.substring(match.index!, match.index! + match[0].length).split(".");
                    const [category, property] = instance.slice(1);
                    preflight = preflight.replace(`"${instance.join(".")}"`, theme[category][property]);
                }

                return preflight;
            }
        }
    ],
    theme: {
        colors: {
            rosewater: "#f2d5cf",
            flamingo: "#eebebe",
            pink: "#f4b8e4",
            mauve: "#ca9ee6",
            red: "#e78284",
            maroon: "#ea999c",
            peach: "#ef9f76",
            yellow: "#e5c890",
            green: "#a6d189",
            teal: "#81c8be",
            sky: "#99d1db",
            sapphire: "#85c1dc",
            blue: "#8caaee",
            lavender: "#babbf1",
            // Basics
            main: "#0a191a",
            alt: "#071219",
            accent: "#4DB7BA",
            // Text
            header: "#eee",
            normal: "#ddd",
            muted: "#bbb",
            // Discord
            blurple: "#5865F2",
            oldblurple: "#7289DA",
            // Misc
            selection: "#4DB7BA55",
        },
    },
})