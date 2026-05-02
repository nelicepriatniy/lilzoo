export type Pet = {
  id: number;
  name: string;
  emoji: string;
  type: "dog" | "cat";
  breed: string;
  age: number;
  gender: string;
  district: string;
  status: string;
  statusKey: string;
  cover: string;
  character: string;
  goals: string[];
  posts: { text: string; emoji: string; likes: number; comments: number }[];
  x: number;
  y: number;
  mapType: string;
};

export type Specialist = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  rating: number;
  reviews: number;
  district: string;
  priceFrom: number;
  services: { name: string; price: string }[];
  schedule: string;
  description: string;
  badges: ("verified" | "pro" | "boost")[];
  x: number;
  y: number;
  mapType: string;
};

export type DialogMessage = { out: boolean; text: string; time: string };

export type Dialog = {
  id: number;
  name: string;
  emoji: string;
  time: string;
  preview: string;
  unread: boolean;
  bg: string;
  messages: DialogMessage[];
};

export type CurrentUser = {
  name: string;
  city: string;
  role: string;
  pet: {
    name: string;
    emoji: string;
    type: "dog" | "cat";
    breed: string;
    age: number;
    gender: string;
    goals: string[];
    district: string;
    character: string;
    cover: string;
    posts: { text: string; emoji: string; likes: number; comments: number }[];
    coverImage?: string;
    avatarImage?: string;
  };
};

export type CabinetTab =
  | "map"
  | "pets"
  | "specialists"
  | "messages"
  | "profile";
