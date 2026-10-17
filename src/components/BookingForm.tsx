export default function BookingForm() {
    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">{'Nombre Completo'}</label>
                    <input
                        type="text"
                        className="w-full bg-stone-100/70 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-3 py-3 text-stone-900 text-sm placeholder:text-stone-400 transition-colors"
                        placeholder={'Introduce tu nombre completo'}
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">{'Correo Electrónico'}</label>
                    <input
                        type="email"
                        className="w-full bg-stone-100/70 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-3 py-3 text-stone-900 text-sm placeholder:text-stone-400 transition-colors"
                        placeholder={'nombre@ejemplo.com'}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">{'Tipo de Consulta'}</label>
                    <select className="w-full bg-stone-100/70 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-3 py-3 text-stone-900 text-sm transition-colors">
                        <option>{'Diagnóstico Dérmico Personalizado (60 min)'}</option>
                        <option>{'Diseño de Rutina Holística (90 min)'}</option>
                        <option>{'Masterclass Botánica Avanzada (45 min)'}</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">{'Fecha Preferida'}</label>
                    <input
                        type="date"
                        className="w-full bg-stone-100/70 border-0 border-b border-stone-300 focus:border-stone-900 focus:ring-0 px-3 py-3 text-stone-900 text-sm transition-colors"
                    />
                </div>
            </div>
            <div className="pt-6 text-center">
                <button
                    type="submit"
                    className="bg-stone-950 text-white px-10 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    {'Confirmar Solicitud de Reserva'}
                </button>
            </div>
        </form>
    );
}