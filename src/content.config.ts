import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sections = defineCollection({
  // Load Markdown files in the `src/content/sections/` directory.
  loader: glob({ base: "./src/content/sections", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    order: z.number(),
    description: z.string().optional(),
    icon: z.string().optional(),
    lastUpdated: z.string().optional(),
  }),
});

const alerts = defineCollection({
  // Load Markdown files in the `src/content/alerts/` directory.
  loader: glob({ base: "./src/content/alerts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["info", "warning", "success", "error"]),
    active: z.boolean(),
    order: z.number(),
  }),
});

export const collections = { sections, alerts };
