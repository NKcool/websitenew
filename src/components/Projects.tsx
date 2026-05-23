import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Selected Works
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-emerald-500 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target={project.link !== '#' ? "_blank" : undefined}
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative block outline-none"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50 mb-6 group-hover:border-neutral-700 transition-colors">
              <div className="absolute inset-0 bg-neutral-900/40 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-900 text-neutral-400 border border-neutral-800">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {project.title}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed font-light line-clamp-3 group-hover:text-neutral-300 transition-colors">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
