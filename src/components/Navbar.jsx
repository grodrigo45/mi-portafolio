import { Code2, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logotipo */}
        <a href="#inicio" className="flex items-center gap-2 text-zinc-100 font-bold text-lg group">
          <span className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 group-hover:bg-purple-600/30 transition-all">
            <Code2 className="w-5 h-5" />
          </span>
          <span className="font-mono tracking-tight">Code<span className="text-purple-400">Craft</span></span>
        </a>

        {/* Enlaces de Navegación */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#inicio" className="hover:text-purple-400 transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-purple-400 transition-colors">Sobre Mí</a>
          <a href="#habilidades" className="hover:text-purple-400 transition-colors">Habilidades</a>
          <a href="#proyectos" className="hover:text-purple-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-purple-400 transition-colors">Contacto</a>
        </div>

        {/* Redes y Botón de Contacto */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all hidden sm:flex"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-all hidden sm:flex"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socials.email}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/25 transition-all hover:scale-105 active:scale-95"
          >
            Contrátame
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}