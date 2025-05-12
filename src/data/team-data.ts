
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "member1",
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "With a background in AI and psychology, Alex founded SoulSync AI to create meaningful AI companions that enhance human well-being.",
    avatarUrl: "/placeholder.svg"
  },
  {
    id: "member2",
    name: "Jamie Chen",
    role: "Lead AI Engineer",
    bio: "Jamie specializes in natural language processing and conversational AI, making our companions feel authentic and responsive.",
    avatarUrl: "/placeholder.svg"
  },
  {
    id: "member3",
    name: "Sam Patel",
    role: "Ethics & Research Director",
    bio: "Sam oversees our ethical guidelines and ensures our AI companions are designed with human welfare and privacy as top priorities.",
    avatarUrl: "/placeholder.svg"
  },
  {
    id: "member4",
    name: "Taylor Washington",
    role: "UI/UX Designer",
    bio: "Taylor creates intuitive and beautiful interfaces that make interacting with SoulSync companions a delightful experience.",
    avatarUrl: "/placeholder.svg"
  }
];
