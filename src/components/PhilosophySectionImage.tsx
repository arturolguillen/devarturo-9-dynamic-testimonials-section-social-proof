import ExpertConsultantInAPristineWhiteCoatImage from "@/images/expert_consultant_in_a _pristine_white_coat.png";
import Image from "next/image";

export default function PhilosophySectionImage() {
    return (
        <div className="aspect-square max-w-110 rounded-xl overflow-hidden shadow-xl border border-stone-200/70">
            <Image
                src={ExpertConsultantInAPristineWhiteCoatImage}
                alt="A tranquil minimalist laboratory setting where organic oils and plant extracts are being carefully blended into bespoke skincare formulations by an expert consultant in a pristine white coat."
                className="size-full object-cover object-center"
                width={1024}
                height={1024}
            />
        </div>
    );
}