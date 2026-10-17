export default function InfiniteCarousel({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full overflow-hidden space-y-6 py-4">
            {children}
        </div>
    );
}