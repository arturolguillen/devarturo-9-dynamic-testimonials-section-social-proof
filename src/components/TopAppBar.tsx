export default function TopAppBar({ children }: { children: React.ReactNode }) {
    return (
        <header className="bg-stone-50/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-stone-200/60">
            <div className="flex justify-between items-center w-full px-6 md:px-8 py-5 max-w-7xl mx-auto">
                {children}
            </div>
        </header>
    );
}