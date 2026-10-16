import ArchitecturalInteriorShotImage from "@/images/architectural_interior_shot.png";
import LuxuryProductStillLifePhotographyOfTheAuraImage from "@/images/luxury_product_still_life_photography_of_the_aura.png";
import ProfessionalEditorialBeautyAndSpaImage from "@/images/professional_editorial_beauty_and_spa.png";
import type { StaticImageData } from "next/image";
import HeroImageGridItem from "./HeroImageGridItem";

export type HeroImage = {
    id: number;
    src: StaticImageData;
    alt: string;
};

const images: HeroImage[] = [
    {
        id: 1,
        src: LuxuryProductStillLifePhotographyOfTheAuraImage,
        alt: 'An elegant luxury beauty consultation room featuring warm ambient lighting, minimalist travertine stone surfaces, fresh botanicals in ceramic vases, and a serene high-end atmosphere rendered in a soft light-mode aesthetic with creamy beige and charcoal tones.',
    },
    {
        id: 2,
        src: ProfessionalEditorialBeautyAndSpaImage,
        alt: 'Close-up portrait of a serene woman with flawless radiant skin receiving a luxurious facial treatment, surrounded by gentle warm lighting, minimalist decor, and organic skincare formulations in glass droppers.',
    },
    {
        id: 3,
        src: ArchitecturalInteriorShotImage,
        alt: 'A curated arrangement of organic luxury skincare bottles and gold botanical elements placed on a polished marble vanity inside a high-end modern spa with soft, diffused daylight.',
    },
];

export default function HeroImageGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
            {images.map((image) => (
                <HeroImageGridItem key={image.id} image={image} raised={image.id === 2} />
            ))}
        </div>
    );
}