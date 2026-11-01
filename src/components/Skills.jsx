import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 border-t border-zinc-900">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
          Mis Habilidades
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
          Tecnologías que Domino
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-4xl mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-zinc-200">{skill.name}</span>
              <span className="text-purple-400 font-mono text-xs">{skill.percentage}%</span>
            </div>
            {/* Barra de progreso */}
            <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}