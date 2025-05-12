
export interface CompanionPersonality {
  id: string;
  name: string; 
  description: string;
  traits: string[];
}

export interface CompanionAppearance {
  gender: 'female' | 'male' | 'non-binary';
  hairColor: string;
  hairStyle: string;
  eyeColor: string;
  style: string;
  avatar: string; // URL to avatar image
}

export interface CompanionInterest {
  id: string;
  name: string;
  category: string;
}

export interface Companion {
  id: string;
  name: string;
  personality: CompanionPersonality;
  appearance: CompanionAppearance;
  interests: CompanionInterest[];
  createdAt: Date;
  description: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'request';
  imageUrl?: string;
}

export interface Conversation {
  id: string;
  companionId: string;
  messages: Message[];
  lastUpdated: Date;
}
