import React from 'react';
import { Course } from '../types';
import { BookOpen, Calculator, MessageCircle, Briefcase, Users, Globe, Palette, Atom, Map } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (course: Course) => void;
}

// Map string names to Lucide icons
const IconMap: Record<string, React.ElementType> = {
  Calculator,
  MessageCircle,
  Briefcase,
  Users,
  Globe,
  Palette,
  Atom,
  Map,
  Default: BookOpen
};

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const Icon = IconMap[course.iconName] || IconMap.Default;

  return (
    <div 
      onClick={() => onClick(course)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm shadow-xl hover:shadow-violet-500/20"
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-violet-600/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-all duration-500"></div>
      
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-violet-600/20 text-violet-300 group-hover:text-white group-hover:bg-violet-600 transition-colors duration-300">
          <Icon size={32} />
        </div>
        <div className="flex flex-col items-end gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-900/30 px-2 py-1 rounded-full border border-violet-500/20">
            Curso
            </span>
            <span className="text-sm font-bold text-white bg-emerald-600/20 px-2 py-0.5 rounded-md border border-emerald-500/30 text-emerald-300">
                {course.price}
            </span>
        </div>
      </div>

      <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
        {course.title}
      </h3>
      
      <p className="relative z-10 text-slate-400 text-sm line-clamp-2 mb-4 group-hover:text-slate-300">
        {course.description}
      </p>

      <div className="relative z-10 flex items-center text-sm text-violet-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
        Ver contenido y comprar <span className="ml-1">→</span>
      </div>
    </div>
  );
};