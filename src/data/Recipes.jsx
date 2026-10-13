const { useRef, useState } = React;
// import { nanoid } from "nanoid";
// const id = nanoid();

const recipes = [
  {
    id: "recipe-001",
    title: "Creamy tomato rigatoni",
    chef: "Maya Chen",
    time: "35 min",
    rating: "4.9",
    reviews: "128",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: "recipe-002",
    title: "Crispy herb chicken",
    chef: "Noah Williams",
    time: "45 min",
    rating: "4.8",
    reviews: "94",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: "recipe-003",
    title: "Honey ricotta toast",
    chef: "Elena Rossi",
    time: "15 min",
    rating: "4.7",
    reviews: "76",
    category: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    id: "recipe-004",
    title: "Green goddess bowl",
    chef: "Aisha Patel",
    time: "25 min",
    rating: "4.9",
    reviews: "211",
    category: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=25",
  },
  {
    id: "recipe-005",
    title: "Miso glazed salmon",
    chef: "Theo Martin",
    time: "30 min",
    rating: "4.8",
    reviews: "153",
    category: "Dinner",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=68",
  },
  {
    id: "recipe-006",
    title: "Berry cloud pavlova",
    chef: "Sofia Lane",
    time: "50 min",
    rating: "4.9",
    reviews: "88",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800&q=85",
    avatar: "https://i.pravatar.cc/80?img=44",
  },
];
