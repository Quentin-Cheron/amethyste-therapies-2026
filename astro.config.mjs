// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
    site: "https://amethyste-therapies.fr",
    adapter: node({ mode: "standalone" }),
    integrations: [sitemap()],
    env: {
        schema: {
            ENVIRONNEMENT: envField.enum({
                context: "server",
                access: "public",
                values: ["dev", "production"],
                default: "dev",
            }),
            RESEND_API_KEY: envField.string({
                context: "server",
                access: "secret",
                optional: true,
            }),
            CONTACT_TO_EMAIL: envField.string({
                context: "server",
                access: "secret",
                default: "amethyste.therapies@gmail.com",
            }),
            CONTACT_FROM_EMAIL: envField.string({
                context: "server",
                access: "secret",
                default: "Améthyste Thérapies <onboarding@resend.dev>",
            }),
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
