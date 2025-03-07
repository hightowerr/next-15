import { IconCloud } from "@/components/ui/icon-cloud";

export const slugs = [
  "typescript",
  "python",
  "n8n",
  "zapier",
  "react",
  "nextjs",
  "tailwindcss",
  "googlecolab",
  "nextdotjs",
  "miro",
  "telegram",
  "discord",
  "asana",
  "whatsapp",
  "firebase",
  "git",
  "jira",
  "github",
  "figma",
  "trello",
  "excel",
  "notion",
  "wordpress",
];

// Create a more readable version of the techs from the slugs
export const techs = slugs.map(slug => {
  // Convert slug names to more readable format
  return slug
    .replace("dotjs", ".js")
    .split(/(?=[A-Z])/).join(" ") // Add spaces before capital letters
    .replace(/^\w/, c => c.toUpperCase()); // Capitalize first letter
});

// Export monochrome images (black icons)
export const cloudImages = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/000000`
);

// Alternative - for white icons:
// export const cloudImages = slugs.map(
//   (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`
// );

