export default function GradientMasks() {
    return (
        <>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>
        </>
    );
}