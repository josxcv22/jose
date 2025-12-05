export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail?: string; // Optional custom thumbnail
  tasks: Task[];
  iconName: string; // Identifying the icon to render
  price: string; // Course price
}

export type ViewState = 'HOME' | 'COURSE_DETAIL' | 'CONTACT';

export interface Message {
  role: 'user' | 'model';
  text: string;
}