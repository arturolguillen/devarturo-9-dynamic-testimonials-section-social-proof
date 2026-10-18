import clsx from "clsx";
import CarouselCard from "./CarouselCard";
import { type Review } from "../reviews";

const MIN_CARDS_PER_GROUP = 6;

export default function CarouselRow({ reviews, direction }: {
    reviews: Review[];
    direction: "left" | "right";
}) {
    const repeat = Math.max(1, Math.ceil(MIN_CARDS_PER_GROUP / reviews.length));
    const groupReviews = Array.from({ length: repeat }, () => reviews).flat();

    return (
        <div
            className={clsx(
                "flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none",
                direction === "right" && "[animation-direction:reverse]",
            )}
        >
            {[0, 1].map((group) => (
                <div key={group} className="flex shrink-0 gap-6 pr-6" aria-hidden={group === 1 || undefined}>
                    {groupReviews.map((review, index) => (
                        <CarouselCard key={`${index}-${review.id}`} review={review} />
                    ))}
                </div>
            ))}
        </div>
    );
}
