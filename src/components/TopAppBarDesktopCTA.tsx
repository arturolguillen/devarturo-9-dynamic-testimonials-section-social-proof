import Link from "next/link";

export default function TopAppBarDesktopCTA() {
    return (
        <div className="flex items-center">
            <Link className="bg-stone-950 text-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-all duration-200 shadow-sm"
                href="#booking">
                {'Reservar Cita'}
            </Link>
        </div>
    );
}