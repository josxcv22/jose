import React, { useState } from 'react';
import { Course, Task } from '../types';
import { ArrowLeft, CheckCircle2, Circle, MessageSquare, Send, Sparkles, Youtube, ShoppingCart, ExternalLink } from 'lucide-react';
import { askTutor } from '../services/geminiService';
import { WHATSAPP_NUMBER } from '../constants';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  const [localTasks, setLocalTasks] = useState<Task[]>(course.tasks);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const toggleTask = (taskId: string) => {
    setLocalTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isAiLoading) return;

    const userMsg = chatInput;
    setChatInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsAiLoading(true);

    const response = await askTutor(course.title, userMsg);
    
    setChatHistory(prev => [...prev, { role: 'model', text: response }]);
    setIsAiLoading(false);
  };

  const handleBuyClick = () => {
    const message = `Hola, estoy interesado en comprar el curso de *${course.title}* por ${course.price}. ¿Me podrían dar más información?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <button 
        onClick={onBack}
        className="flex items-center text-violet-300 hover:text-white mb-6 transition-colors group bg-violet-900/20 px-4 py-2 rounded-full border border-violet-500/20 hover:bg-violet-900/40"
      >
        <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Volver a Cursos
      </button>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white mb-4 drop-shadow-sm">
            {course.title}
            </h1>
            <p className="text-violet-200/80 text-lg max-w-2xl leading-relaxed">{course.description}</p>
        </div>
        
        {/* Price Tag */}
        <div className="flex-shrink-0">
            <span className="block text-right text-sm text-violet-400 mb-1 uppercase tracking-wider font-semibold">Precio del Curso</span>
            <div className="text-4xl font-bold text-white bg-white/5 px-6 py-2 rounded-2xl border border-violet-500/30 shadow-lg shadow-violet-500/10">
                {course.price}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content: Video Link & Tasks */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Video Link Card (Replaces Iframe to avoid errors) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/20 border border-violet-500/20 bg-[#13111c] p-8 flex flex-col items-center justify-center text-center group hover:border-violet-500/40 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600"></div>
            
            <div className="mb-6 bg-red-600/10 p-5 rounded-full ring-1 ring-red-500/30 group-hover:bg-red-600/20 transition-all duration-500">
                <Youtube className="w-16 h-16 text-red-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">Clase en Video</h2>
            <p className="text-slate-400 mb-8 max-w-md">
                Accede a la lección completa en YouTube para evitar problemas de reproducción y disfrutar de la mejor calidad.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
                <a 
                    href={course.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-900/20 hover:scale-105"
                >
                    <Youtube size={24} />
                    Ver Clase en YouTube
                </a>
                
                <button 
                    onClick={handleBuyClick}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-900/20 hover:scale-105"
                >
                    <ShoppingCart size={22} />
                    Comprar Curso
                </button>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="bg-[#13111c] rounded-3xl p-6 border border-violet-500/10 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                <div className="bg-violet-600/20 p-2 rounded-xl mr-3">
                    <CheckCircle2 className="text-violet-500 w-6 h-6" />
                </div>
                Tareas Asignadas
                </h2>
                <span className="text-xs font-medium text-violet-400 bg-violet-900/20 px-3 py-1 rounded-full border border-violet-500/20">
                    {localTasks.filter(t => t.completed).length} / {localTasks.length} completadas
                </span>
            </div>
            
            <div className="space-y-3">
              {localTasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start group ${
                    task.completed 
                      ? 'bg-violet-900/20 border-violet-500/30' 
                      : 'bg-white/5 border-white/5 hover:bg-violet-900/10 hover:border-violet-500/20'
                  }`}
                >
                  <div className={`mt-1 mr-4 transition-colors ${task.completed ? 'text-green-400' : 'text-slate-600 group-hover:text-violet-400'}`}>
                    {task.completed ? <CheckCircle2 size={22} className="fill-green-900/20" /> : <Circle size={22} />}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${task.completed ? 'text-violet-200 line-through decoration-violet-500/50' : 'text-slate-200 group-hover:text-white'}`}>
                      {task.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors ${task.completed ? 'text-violet-400/60' : 'text-slate-400 group-hover:text-violet-200/70'}`}>
                        {task.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: AI Tutor */}
        <div className="lg:col-span-1">
          <div className="bg-[#13111c] rounded-3xl border border-violet-500/20 overflow-hidden flex flex-col h-[650px] sticky top-6 shadow-2xl shadow-violet-900/10">
            {/* Chat Header */}
            <div className="p-5 bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 border-b border-violet-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-violet-500 p-2 rounded-lg shadow-lg shadow-violet-500/30">
                    <Sparkles className="text-white w-5 h-5" />
                </div>
                <div>
                    <h2 className="font-bold text-white leading-tight">Tutor IA</h2>
                    <p className="text-xs text-violet-300">Asistente de {course.title}</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-violet-900/50 scrollbar-track-transparent">
              {chatHistory.length === 0 && (
                <div className="text-center mt-12 px-6">
                  <div className="bg-violet-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-violet-500/20">
                    <MessageSquare className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="text-white font-medium mb-2">¡Hola! Soy tu tutor.</h3>
                  <p className="text-sm text-slate-400">Pregúntame cualquier duda sobre el curso o las tareas.</p>
                </div>
              )}
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-violet-600 text-white rounded-br-none' 
                      : 'bg-slate-800/80 text-slate-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isAiLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/80 p-4 rounded-2xl rounded-bl-none border border-white/5">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/5 bg-[#0f0e17]">
                <form onSubmit={handleAiSubmit} className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Escribe tu pregunta aquí..."
                  className="w-full bg-[#1e1b29] border border-violet-500/20 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  disabled={isAiLoading || !chatInput.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-violet-600 rounded-lg text-white hover:bg-violet-500 disabled:opacity-50 disabled:hover:bg-violet-600 transition-all shadow-lg shadow-violet-600/20"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};