const year = new Date().getFullYear();

export default function FooterCopyright() {
    return (
        <div className="text-stone-500 text-xs">
            &copy; {`${year} Aura & Essence. Todos los derechos reservados.`}
        </div>
    );
}