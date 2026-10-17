export default function Footer({ children }: { children: React.ReactNode }) {
    return (
        <footer className="bg-stone-100 border-t border-stone-200 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-8 py-8 max-w-7xl mx-auto gap-6 text-center md:text-left">
                {children}
            </div>
        </footer>
    );
}