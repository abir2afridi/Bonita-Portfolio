
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
  dark?: boolean;
  description?: string;
  gallery?: string[];
}

export interface Skill {
  name: string;
  level?: string;
}

// Fixed missing ChatMessage export for components/CreativeAssistant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
