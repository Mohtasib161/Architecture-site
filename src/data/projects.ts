export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "interior" | "architecture" | "repair";
  description: string;
  coverImage: string;
  fullImage: string;
  galleryImages?: string[];
  year?: string;
  location?: string;
  client?: string;
}

export const projects: Project[] = [
  {
    slug: "little-cottage",
    title: "Little Cottage",
    subtitle: "Interior design",
    category: "interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-1/1.jpg",
    fullImage: "/img/light/projects/prjct-1/fs/1.jpg",
    year: "2021",
    location: "Toronto, Canada",
    client: "Private Client",
  },
  {
    slug: "compact-house",
    title: "Compact House",
    subtitle: "Architecture",
    category: "architecture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-2/1.jpg",
    fullImage: "/img/light/projects/prjct-2/fs/1.jpg",
    year: "2020",
    location: "Vancouver, Canada",
    client: "Private Client",
  },
  {
    slug: "greenwell-yards",
    title: "Greenwell Yards",
    subtitle: "Interior design",
    category: "interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-3/1.jpg",
    fullImage: "/img/light/projects/prjct-3/fs/1.jpg",
    year: "2021",
    location: "Montreal, Canada",
    client: "Corporate",
  },
  {
    slug: "urban-loft",
    title: "Urban Loft",
    subtitle: "Repair",
    category: "repair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-4/1.jpg",
    fullImage: "/img/light/projects/prjct-4/fs/1.jpg",
    year: "2020",
    location: "Toronto, Canada",
    client: "Private Client",
  },
  {
    slug: "forest-retreat",
    title: "Forest Retreat",
    subtitle: "Architecture & Repair",
    category: "architecture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-5/1.jpg",
    fullImage: "/img/light/projects/prjct-5/fs/1.jpg",
    year: "2021",
    location: "Whistler, Canada",
    client: "Private Client",
  },
  {
    slug: "modern-studio",
    title: "Modern Studio",
    subtitle: "Interior design",
    category: "interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-6/1.jpg",
    fullImage: "/img/light/projects/prjct-6/fs/1.jpg",
    year: "2021",
    location: "Ottawa, Canada",
    client: "Studio Client",
  },
  {
    slug: "heritage-home",
    title: "Heritage Home",
    subtitle: "Architecture Interior",
    category: "architecture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit.",
    coverImage: "/img/light/projects/prjct-7/1.jpg",
    fullImage: "/img/light/projects/prjct-7/fs/1.jpg",
    year: "2020",
    location: "Quebec, Canada",
    client: "Heritage Foundation",
  },
];

export const heroSlides = [
  {
    id: 1,
    subtitle: "Interior design",
    title: "Little Cottage",
    outlineText: "Concept",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAdipisci distinctio iure, rerum non fugit.",
    image: "/img/light/projects/prjct-1/fs/1.jpg",
    projectHref: "/works/little-cottage",
    allHref: "/works",
  },
  {
    id: 2,
    subtitle: "Architecture",
    title: "Compact House",
    outlineText: "Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAdipisci distinctio iure, rerum non fugit.",
    image: "/img/light/projects/prjct-2/fs/1.jpg",
    projectHref: "/works/compact-house",
    allHref: "/works",
  },
  {
    id: 3,
    subtitle: "Interior design",
    title: "Greenwell Yards",
    outlineText: "Country house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nAdipisci distinctio iure, rerum non fugit.",
    image: "/img/light/projects/prjct-3/fs/1.jpg",
    projectHref: "/works/greenwell-yards",
    allHref: "/works",
  },
];
