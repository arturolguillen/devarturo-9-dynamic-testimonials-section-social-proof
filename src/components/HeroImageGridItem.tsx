import type { HeroImage } from "./HeroImageGrid";
import Image from "next/image";
import clsx from "clsx";

export default function HeroImageGridItem({ image, raised = false }: {
    image: HeroImage;
    raised?: boolean;
}) {
    return (
        <div className={clsx(
            "aspect-square max-w-96 rounded-xl overflow-hidden relative shadow-md border border-stone-200/50",
            raised && "mt-0 md:-mt-8",
        )}>
            <Image
                src={image.src}
                alt={image.alt}
                className="size-full object-cover object-center"
                width={384}
                height={384}
            />
        </div>
    );
}