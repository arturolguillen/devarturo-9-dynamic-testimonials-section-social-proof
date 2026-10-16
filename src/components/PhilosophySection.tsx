export default function PhilosophySection({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-20 bg-stone-100 px-6 md:px-8 border-y border-stone-200/70" id="philosophy">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {children}
            </div>
        </section>
    );
}