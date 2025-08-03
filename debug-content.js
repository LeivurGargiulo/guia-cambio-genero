import { getCollection } from "astro:content";

try {
  const sections = await getCollection("sections");
  console.log("Sections found:", sections.length);
  sections.forEach((section) => {
    console.log("- ", section.data.title, " (", section.data.slug, ")");
  });

  const alerts = await getCollection("alerts");
  console.log("Alerts found:", alerts.length);
  alerts.forEach((alert) => {
    console.log("- ", alert.data.title);
  });
} catch (error) {
  console.error("Error:", error);
}
