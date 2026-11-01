import { Quote } from 'lucide-react';
import { testimonialData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-16 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 relative overflow-hidden backdrop-blur-sm">
        <Quote className="w-12 h-12 text-purple-500/20 absolute -top-2 -left-2 rotate-12" />
        <p className="text-zinc-300 text-base sm:text-lg italic leading-relaxed relative z-10">
          "{testimonialData.quote}"
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            IS
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">{testimonialData.author}</h3>
            <p className="text-zinc-500 text-xs">{testimonialData.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}