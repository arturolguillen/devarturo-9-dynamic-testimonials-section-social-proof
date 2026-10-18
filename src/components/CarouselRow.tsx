import CarouselCard from "./CarouselCard";
import { type Review } from "../reviews";

export default function CarouselRow({ reviews }: {
    reviews: Review[];
}) {
    return (
        <div className="flex space-x-6">
            {reviews.map((review) => <CarouselCard key={review.id} review={review} />)}
        </div>
    );
}