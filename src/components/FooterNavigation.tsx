import Link from "next/link";

const navigationItems = [
    {
        label: 'Política de Privacidad',
        href: '#',
    },
    {
        label: 'Términos del Servicio',
        href: '#',
    },
    {
        label: 'Conserjería / Atención',
        href: '#',
    },
    {
        label: 'Prensa',
        href: '#',
    },
];

export default function FooterNavigation() {
    return (
        <div className="flex-wrap justify-center gap-6 hidden lg:flex">
            {navigationItems.map((item) => (
                <Link key={item.label} href={item.href} className="text-stone-600 hover:text-stone-950 transition-colors text-xs uppercase tracking-wider">
                    {item.label}
                </Link>
            ))}
        </div>
    );
}