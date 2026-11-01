import { ArrowUpRight } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5 flex flex-col justify-between">
      <div className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between border-b border-zinc-800/80`}>
        <span className="font-mono text-2xl font-black text-white/30 group-hover:text-purple-400/60 transition-colors">
          {project.number}
        </span>
        <span className="text-xs uppercase font-mono tracking-wider text-purple-300 bg-purple-950/70 border border-purple-500/30 px-3 py-1 rounded-full w-fit">
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/90 text-zinc-300 border border-zinc-700/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-xs font-semibold">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Código Fuente
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors ml-auto"
            >
              Demo en Vivo
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}