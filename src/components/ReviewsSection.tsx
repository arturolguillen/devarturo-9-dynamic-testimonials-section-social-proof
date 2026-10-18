export default function ReviewsSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-20 overflow-hidden bg-stone-50" id="reviews">
            {children}
        </section>
    );
}