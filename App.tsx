import React, { useState } from 'react';
import { COURSES } from './constants';
import { Course, ViewState } from './types';
import { CourseCard } from './components/CourseCard';
import { CourseDetail } from './components/CourseDetail';
import { Contact } from './components/Contact';
import { GraduationCap, Home, Phone, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('HOME');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setViewState('COURSE_DETAIL');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedCourse(null);
    setViewState('HOME');
  };

  const navigate = (view: ViewState) => {
    setViewState(view);
    setIsMobileMenuOpen(false);
    if (view === 'HOME') setSelectedCourse(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0510] text-white flex flex-col font-sans selection:bg-fuchsia-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0510]/80 backdrop-blur-xl border-b border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => navigate('HOME')}
            >
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-700 p-2.5 rounded-xl shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                <GraduationCap size={28} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                EduPortal <span className="text-violet-400">Violeta</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => navigate('HOME')}
                className={`flex items-center gap-2 text-sm font-bold tracking-wide transition-all ${viewState === 'HOME' ? 'text-violet-400 bg-violet-900/20 px-4 py-2 rounded-full' : 'text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full'}`}
              >
                <Home size={18} />
                INICIO
              </button>
              <button 
                onClick={() => navigate('CONTACT')}
                className={`flex items-center gap-2 text-sm font-bold tracking-wide transition-all ${viewState === 'CONTACT' ? 'text-violet-400 bg-violet-900/20 px-4 py-2 rounded-full' : 'text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full'}`}
              >
                <Phone size={18} />
                CONTÁCTANOS
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0510] border-b border-violet-500/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => navigate('HOME')}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-violet-900/20 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => navigate('CONTACT')}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-violet-900/20 transition-colors"
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Decorative Background Elements (Enhanced for "Morado Oscuro" feel) */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Top Left Blob */}
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-violet-900/20 rounded-full blur-[130px] opacity-60 mix-blend-screen"></div>
            {/* Bottom Right Blob */}
          <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] bg-fuchsia-900/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
            {/* Center Deep Accent */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-950/30 rounded-full blur-[150px] opacity-40"></div>
        </div>

        <div className="relative z-10">
          {viewState === 'HOME' && (
            <div className="animate-fade-in pb-12">
              <div className="text-center mb-16 mt-8">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wider mb-4 uppercase">
                    Plataforma Educativa 2025
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 mb-6 drop-shadow-2xl">
                  Tu Futuro Empieza Aquí
                </h1>
                <p className="text-lg md:text-xl text-violet-200/60 max-w-2xl mx-auto leading-relaxed">
                  Accede a cursos de secundaria actualizados, tareas interactivas y un tutor personal con IA. Todo en un solo lugar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onClick={handleCourseClick} 
                  />
                ))}
              </div>
            </div>
          )}

          {viewState === 'COURSE_DETAIL' && selectedCourse && (
            <CourseDetail 
              course={selectedCourse} 
              onBack={handleBack} 
            />
          )}

          {viewState === 'CONTACT' && (
            <Contact />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050308] border-t border-white/5 py-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} EduPortal Violeta. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;