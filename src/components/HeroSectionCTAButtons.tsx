import Link from "next/link";

export default function HeroSectionCTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link className="bg-stone-950 text-white px-8 py-3 rounded-sm text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-all duration-200 shadow-sm"
                href="#booking">
                {'Iniciar Consulta'}
            </Link>
            <Link className="border border-stone-300 text-stone-900 px-8 py-3 rounded-sm text-xs uppercase tracking-wider font-medium hover:border-stone-900 bg-white/70 transition-all duration-200"
                href="#philosophy">
                {'Descubrir Filosofía'}
            </Link>
        </div>
    );
}