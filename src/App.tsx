import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { PROFILE } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 selection:bg-emerald-500/30 selection:text-white">
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="text-lg font-black tracking-widest text-white mx-auto md:mx-0 w-full max-w-7xl flex justify-between items-center" style={{ fontFamily: 'var(--font-display)' }}>
          <div className="flex flex-col leading-none hover:opacity-80 transition-opacity cursor-pointer">
            <span>NA</span>
            <span className="text-emerald-500">KW</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-mono text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors">Works</a>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
