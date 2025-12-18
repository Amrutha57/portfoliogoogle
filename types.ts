
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface OracleMessage {
  role: 'user' | 'assistant';
  content: string;
}
