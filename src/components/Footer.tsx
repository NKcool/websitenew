import { PROFILE } from '../data';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-neutral-900 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-neutral-500 font-mono text-sm">
          <p>WORDS + IMAGE + CODE &copy; 2026 {PROFILE.name.toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-400">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-emerald-400 transition-colors">
            {PROFILE.email}
          </a>
          <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
