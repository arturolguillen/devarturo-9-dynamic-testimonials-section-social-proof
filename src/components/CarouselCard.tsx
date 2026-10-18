import { type Review } from "@/reviews";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";

export default function CarouselCard({ review }: { review: Review }) {
    const { name, text, rating, image } = review;

    return (
        <div className="w-95 shrink-0 bg-stone-100 p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-1 text-amber-600 mb-3">
                    {Array.from({ length: rating }).map((_, index) => (
                        <Star key={index} size={16} />
                    ))}
                </div>
                <p className="text-stone-800 text-sm italic mb-6 leading-relaxed">
                    {text}
                </p>
            </div>
            <div className="flex items-center space-x-3 pt-4 border-t border-stone-200/80">
                <div className="size-10 rounded-full shrink-0 border border-stone-300 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={320}
                        height={320}
                        className="object-cover size-full object-center"
                    />
                </div>
                <div>
                    <h4 className="font-serif text-sm font-bold text-stone-900">{name}</h4>
                    <span className="text-xs text-amber-800 flex items-center gap-1 font-medium mt-1">
                        <BadgeCheck size={16} />
                        {'Clienta Verificada'}
                    </span>
                </div>
            </div>
        </div>
    );
}