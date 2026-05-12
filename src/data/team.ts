export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Viktoria Freeman",
    role: "UI/UX Designer",
    image: "/img/light/team/team-1.jpg",
  },
  {
    id: 2,
    name: "Paul Trueman",
    role: "Architect",
    image: "/img/light/team/team-2.jpg",
  },
  {
    id: 3,
    name: "Mike Oldman",
    role: "Interior Designer",
    image: "/img/light/team/team-3.jpg",
  },
  {
    id: 4,
    name: "Emma Newman",
    role: "Project Manager",
    image: "/img/light/team/team-4.jpg",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Newman",
    role: "Creative Director",
    image: "/img/light/clients/c-1.jpg",
    text: "We evaluated numerous marketing firms and selected Mireya due to their experience in the solar industry, and the clear understanding of our business objectives that they demonstrated during the evaluation process.",
    stars: 5,
  },
  {
    id: 2,
    name: "Paul Trueman",
    role: "Creative Director",
    image: "/img/light/clients/c-2.jpg",
    text: "We were very impressed with the progressive campaign and thought it spoke volumes to the reality of businesses. We have been working our way into the Toronto area for almost a year now and ready to gain some traction in that city.",
    stars: 4,
  },
  {
    id: 3,
    name: "Viktoria Freeman",
    role: "Creative Director",
    image: "/img/light/clients/c-3.jpg",
    text: "We were very impressed with the progressive campaign and thought it spoke volumes to the reality of businesses. We have been working our way into the Toronto area for almost a year now.",
    stars: 4,
  },
];
