import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 border-t border-zinc-900">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
          Proyectos Destacados
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
          Algunos de mis Trabajos Recientes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}