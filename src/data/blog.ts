export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "omuli-museum-of-the-horse",
    title: "Omuli Museum of the Horse",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/1.jpg",
    category: "Architecture",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
  {
    slug: "sleeping-pods-on-a-cliff",
    title: "Sleeping Pods on a Cliff",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/2.jpg",
    category: "Interior",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
  {
    slug: "tiny-kiwi-meditation-cabin",
    title: "Tiny Kiwi Meditation Cabin",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/3.jpg",
    category: "Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
  {
    slug: "spirala-community-home",
    title: "Spirala Community Home",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/4.jpg",
    category: "Architecture",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
  {
    slug: "floating-forest-house",
    title: "Floating Forest House",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/5.jpg",
    category: "Interior",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
  {
    slug: "urban-pod-studio",
    title: "Urban Pod Studio",
    excerpt:
      "Dolor sit amet, consectetur adipisicing elit. Ad veniam, facere officia.",
    date: "29.01.2021",
    image: "/img/light/blog/6.jpg",
    category: "Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio iure, rerum non fugit. Doloremque, rem quidem sequi atque architecto quibusdam perspiciatis libero repudiandae ipsam laudantium ut.",
  },
];
