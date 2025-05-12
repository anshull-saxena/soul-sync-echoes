
import { CompanionPersonality, CompanionInterest } from "../types/companion";

// Personality options
export const personalityOptions: CompanionPersonality[] = [
  {
    id: "playful",
    name: "Playful",
    description: "Fun-loving and energetic with a great sense of humor",
    traits: ["Funny", "Energetic", "Spontaneous", "Cheerful"]
  },
  {
    id: "caring",
    name: "Caring",
    description: "Compassionate and nurturing with emotional intelligence",
    traits: ["Empathetic", "Supportive", "Patient", "Warm"]
  },
  {
    id: "romantic",
    name: "Romantic",
    description: "Passionate and affectionate with a love for deep connections",
    traits: ["Passionate", "Thoughtful", "Affectionate", "Poetic"]
  },
  {
    id: "intellectual",
    name: "Intellectual",
    description: "Thoughtful and curious with a love for deep conversations",
    traits: ["Analytical", "Curious", "Insightful", "Articulate"]
  },
  {
    id: "adventurous",
    name: "Adventurous",
    description: "Bold and daring with a thirst for new experiences",
    traits: ["Brave", "Spontaneous", "Enthusiastic", "Independent"]
  },
  {
    id: "tsundere",
    name: "Tsundere",
    description: "Initially cold but gradually shows warmth and affection",
    traits: ["Tough exterior", "Secretly caring", "Competitive", "Loyal"]
  }
];

// Interest categories and options
export const interestOptions: CompanionInterest[] = [
  // Gaming
  { id: "gaming-rpg", name: "RPG Games", category: "Gaming" },
  { id: "gaming-fps", name: "FPS Games", category: "Gaming" },
  { id: "gaming-strategy", name: "Strategy Games", category: "Gaming" },
  { id: "gaming-indie", name: "Indie Games", category: "Gaming" },
  // Entertainment
  { id: "anime", name: "Anime", category: "Entertainment" },
  { id: "movies", name: "Movies", category: "Entertainment" },
  { id: "music", name: "Music", category: "Entertainment" },
  { id: "reading", name: "Reading", category: "Entertainment" },
  // Science & Tech
  { id: "tech-ai", name: "Artificial Intelligence", category: "Science & Tech" },
  { id: "tech-programming", name: "Programming", category: "Science & Tech" },
  { id: "science-astronomy", name: "Astronomy", category: "Science & Tech" },
  { id: "science-physics", name: "Physics", category: "Science & Tech" },
  // Arts
  { id: "art-drawing", name: "Drawing & Painting", category: "Arts" },
  { id: "art-photography", name: "Photography", category: "Arts" },
  { id: "art-writing", name: "Creative Writing", category: "Arts" },
  { id: "art-music", name: "Making Music", category: "Arts" },
  // Lifestyle
  { id: "lifestyle-fitness", name: "Fitness", category: "Lifestyle" },
  { id: "lifestyle-cooking", name: "Cooking", category: "Lifestyle" },
  { id: "lifestyle-travel", name: "Travel", category: "Lifestyle" },
  { id: "lifestyle-fashion", name: "Fashion", category: "Lifestyle" }
];

// Hair colors
export const hairColors = [
  { id: "black", name: "Black", value: "#222222" },
  { id: "brown", name: "Brown", value: "#634e34" },
  { id: "blonde", name: "Blonde", value: "#e6be8a" },
  { id: "red", name: "Red", value: "#a52a2a" },
  { id: "pink", name: "Pink", value: "#ff9ff3" },
  { id: "blue", name: "Blue", value: "#54a0ff" },
  { id: "purple", name: "Purple", value: "#8e44ad" }
];

// Hair styles
export const hairStyles = [
  { id: "short", name: "Short" },
  { id: "medium", name: "Medium" },
  { id: "long", name: "Long" },
  { id: "curly", name: "Curly" },
  { id: "straight", name: "Straight" },
  { id: "wavy", name: "Wavy" },
  { id: "ponytail", name: "Ponytail" },
];

// Eye colors
export const eyeColors = [
  { id: "brown", name: "Brown", value: "#634e34" },
  { id: "blue", name: "Blue", value: "#54a0ff" },
  { id: "green", name: "Green", value: "#6ab04c" },
  { id: "hazel", name: "Hazel", value: "#7f8c8d" },
  { id: "amber", name: "Amber", value: "#f39c12" },
  { id: "gray", name: "Gray", value: "#95a5a6" },
  { id: "violet", name: "Violet", value: "#8e44ad" },
];

// Style/Fashion preferences
export const styleOptions = [
  { id: "casual", name: "Casual" },
  { id: "elegant", name: "Elegant" },
  { id: "sporty", name: "Sporty" },
  { id: "gothic", name: "Gothic" },
  { id: "punk", name: "Punk" },
  { id: "vintage", name: "Vintage" },
  { id: "bohemian", name: "Bohemian" },
];

// Demo avatar images
export const demoAvatars = {
  female: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  male: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  "non-binary": [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]
};
