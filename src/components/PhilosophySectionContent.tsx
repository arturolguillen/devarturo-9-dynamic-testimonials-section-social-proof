import { CircleCheck } from "lucide-react"

export default function PhilosophySectionContent() {
    return (
        <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-2 block">{'Nuestra Esencia'}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-950 mb-6 leading-tight">{'Rituales a medida para tu identidad celular única.'}</h2>
            <p className="text-stone-600 text-base leading-relaxed mb-6">
                {'Creemos que la verdadera belleza no se fabrica; se revela. Mediante análisis científicos rigurosos y cuidado holístico intuitivo, nuestras especialistas diseñan rituales personalizados que armonizan con el ritmo innato de tu piel.'}
            </p>
            <ul className="space-y-3 text-sm text-stone-800">
                <li className="flex items-center space-x-3">
                    <CircleCheck className="text-amber-700" size={20} />
                    <span>{'Extractos 100% Orgánicos y de Recolección Silvestre'}</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CircleCheck className="text-amber-700" size={20} />
                    <span>{'Consultas de Diagnóstico Personalizado'}</span>
                </li>
                <li className="flex items-center space-x-3">
                    <CircleCheck className="text-amber-700" size={20} />
                    <span>{'Envases Sostenibles y Conscientes'}</span>
                </li>
            </ul>
        </div>
    );
}