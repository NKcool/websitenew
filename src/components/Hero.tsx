import { motion } from 'motion/react';
import { Mail, FileText, ChevronRight } from 'lucide-react';
import { PROFILE } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-sm font-mono text-neutral-400 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Status: Available for Work 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-mono text-emerald-500/80">HI. I'M</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-600 drop-shadow-sm" style={{ fontFamily: 'var(--font-display)' }}>
            NAVEEN <span className="text-emerald-500">KEWAT*</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed"
        >
          I am a <strong className="text-white font-medium">{PROFILE.role}</strong> leveraging Python and GenAI to build tools that matter. Specializing in intelligent automation, data-driven systems, and elegant experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white font-medium hover:bg-neutral-800 hover:border-neutral-700 transition-all"
          >
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>Let's Talk Automations</span>
            <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
