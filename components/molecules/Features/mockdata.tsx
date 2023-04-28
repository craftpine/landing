import {
  BriefcaseIcon,
  WindowIcon,
  DocumentChartBarIcon,
  BoltIcon,
  FilmIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export const features = [
  {
    title: "Bring Your Own Framework",
    description:
      "Build your site using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.",
    icon: <BriefcaseIcon className="h-7 w-7 text-indigo-600" />,
  },
  {
    title: "100% Static HTML, No JS",
    description:
      "Astro renders your entire page to static HTML, removing all JavaScript from your final build by default.",
    icon: <WindowIcon className="h-7 w-7 text-indigo-600" />,
  },
  {
    title: "On-Demand Components",
    description:
      "Need some JS? Astro can automatically hydrate interactive components when they become visible on the page.  ",
    icon: <DocumentChartBarIcon className="h-7 w-7 text-indigo-600" />,
  },
  {
    title: "Broad Integration",
    description:
      "Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages.",
    icon: <BoltIcon className="h-7 w-7 text-indigo-600" />,
  },
  {
    title: "SEO Enabled",
    description:
      "Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!",
    icon: <FilmIcon className="h-7 w-7 text-indigo-600" />,
  },
  {
    title: "Community",
    description:
      "Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.",
    icon: <UserIcon className="h-7 w-7 text-indigo-600" />,
  },
];
