import { personalInfo } from '../data/portfolioData';

export default function CodeCard() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-2xl p-4 font-mono text-xs backdrop-blur-md">
      {/* Barra superior de terminal */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
        <span className="text-zinc-500 flex items-center gap-1.5 font-sans text-[11px]">
          <span className="text-purple-400">&lt;/&gt;</span> desarrollador.config.js
        </span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
      </div>

      {/* Contenido formateado */}
      <pre className="text-zinc-300 leading-relaxed overflow-x-auto">
        <code>
          <span className="text-purple-400">const</span> desarrollador = &#123;{'\n'}
          {'  '}nombre: <span className="text-emerald-400">"{personalInfo.name}"</span>,{'\n'}
          {'  '}titulo: <span className="text-emerald-400">"{personalInfo.role}"</span>,{'\n'}
          {'  '}stack: [<span className="text-sky-300">"React"</span>, <span className="text-sky-300">"Node.js"</span>, <span className="text-sky-300">"PostgreSQL"</span>],{'\n'}
          {'  '}pasion: <span className="text-amber-300">"Ingeniería & Software"</span>,{'\n'}
          {'  '}disponible: <span className="text-purple-400">true</span>{'\n'}
          &#125;;
        </code>
      </pre>
    </div>
  );
}