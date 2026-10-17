export default function BookingSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-20 bg-stone-100 px-6 md:px-8 border-t border-stone-200" id="booking">
            <div className="max-w-4xl mx-auto bg-stone-50 p-8 md:p-14 rounded-2xl shadow-xl border border-stone-200/80">
                {children}
            </div>
        </section>
    );
}