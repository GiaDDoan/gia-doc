import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Sorting Algorithms",
      items: [
        {
          title: "Introduction",
          href: "/docs/sorting-algorithms",
        },
        {
          title: "Merge Sort",
          href: "/docs/sorting-algorithms/merge-sort",
        },
        {
          title: "Insertion Sort",
          href: "/docs/sorting-algorithms/insertion-sort",
        },
        {
          title: "Heap Sort",
          href: "/docs/sorting-algorithms/heap-sort",
        },
        {
          title: "Quick Sort",
          href: "/docs/sorting-algorithms/quick-sort",
        },
        {
          title: "Bubble Sort",
          href: "/docs/sorting-algorithms/bubble-sort",
        },
      ],
    },
    {
      title: "System Design",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
}
