export default function HeroSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative overflow-hidden pt-16 pb-16 px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
            {children}
        </section>
    );
}