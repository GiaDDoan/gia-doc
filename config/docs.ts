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
          href: "/docs/system-design",
        },
        {
          title: "Architecture",
          href: "/docs/system-design/architecture",
        },
        {
          title: "Components",
          href: "/docs/system-design/components",
        },
        {
          title: "Data Management",
          href: "/docs/system-design/data-management",
        },
        {
          title: "Communication",
          href: "/docs/system-design/communication",
        },
        {
          title: "Scalability and Performance",
          href: "/docs/system-design/scalability-and-performance",
        },
        {
          title: "Security",
          href: "/docs/system-design/security",
        },
        {
          title: "Error Handling and Fault Tolerance",
          href: "/docs/system-design/error-handling-and-fault-tolerance",
        },
        {
          title: "Integration",
          href: "/docs/system-design/integration",
          // disabled: true,
        },
      ],
    },
  ],
}
