import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: "/gallery-slideshow/",
    plugins: [tailwindcss(), ],
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                slideshow: resolve(__dirname, "slideshow.html")
            }
        }
    }
})