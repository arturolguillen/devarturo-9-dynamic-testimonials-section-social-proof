import Link from "next/link";
import clsx from "clsx";

const navigationItems = [
    {
        label: "Filosofía",
        href: "#philosophy",
        active: false,
    },
    {
        label: "Consulta",
        href: "#consultation",
        active: false,
    },
    {
        label: "Tratamientos",
        href: "#regimen",
        active: false,
    },
    {
        label: "Reseñas",
        href: "#reviews",
        active: true,
    },
];

export default function TopAppBarDesktopNavigation() {
    return (
        <nav className="hidden items-center space-x-10 text-xs tracking-wider uppercase font-medium lg:flex">
            {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} className={clsx(
                    "text-stone-600 hover:text-stone-950 transition-colors",
                    item.active && "text-stone-950 font-semibold border-b-2 border-stone-950 pb-1"
                )}>
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}