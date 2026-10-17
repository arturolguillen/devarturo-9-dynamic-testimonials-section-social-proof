export default function CarouselRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex space-x-6">
            {children}
        </div>
    );
}