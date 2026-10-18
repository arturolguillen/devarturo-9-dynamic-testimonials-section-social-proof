import MainWrapper from "@/components/MainWrapper";
import TopAppBar from "@/components/TopAppBar";
import TopAppBarDesktopCTA from "@/components/TopAppBarDesktopCTA";
import TopAppBarDesktopNavigation from "@/components/TopAppBarDesktopNavigation";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import HeroSection from "@/components/HeroSection";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import HeroSectionHeading from "@/components/HeroSectionHeading";
import HeroSectionDescription from "@/components/HeroSectionDescription";
import HeroSectionCTAButtons from "@/components/HeroSectionCTAButtons";
import HeroImageGrid from "@/components/HeroImageGrid";
import PhilosophySection from "@/components/PhilosophySection";
import PhilosophySectionContent from "@/components/PhilosophySectionContent";
import PhilosophySectionImage from "@/components/PhilosophySectionImage";
import BookingSection from "@/components/BookingSection";
import BookingSectionContent from "@/components/BookingSectionContent";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FooterLogo from "@/components/FooterLogo";
import FooterNavigation from "@/components/FooterNavigation";
import FooterCopyright from "@/components/FooterCopyright";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import GradientMasks from "@/components/GradientMasks";
import CarouselRow from "@/components/CarouselRow";
import reviews from "@/reviews";
import ReviewsSection from "@/components/ReviewsSection";
import ReviewsSectionContent from "@/components/ReviewsSectionContent";

export default function Home() {
    return (
        <>
            <TopAppBar>
                <TopAppBarLogo />
                <TopAppBarDesktopNavigation />
                <TopAppBarDesktopCTA />
            </TopAppBar>
            <MainWrapper>
                <HeroSection>
                    <HeroSectionTitle />
                    <HeroSectionHeading />
                    <HeroSectionDescription />
                    <HeroSectionCTAButtons />
                    <HeroImageGrid />
                </HeroSection>
                <PhilosophySection>
                    <PhilosophySectionContent />
                    <PhilosophySectionImage />
                </PhilosophySection>
                <ReviewsSection>
                    <ReviewsSectionContent />
                    <InfiniteCarousel>
                        <GradientMasks />
                        <CarouselRow reviews={reviews} />
                        <CarouselRow reviews={reviews} />
                    </InfiniteCarousel>
                </ReviewsSection>
                <BookingSection>
                    <BookingSectionContent />
                    <BookingForm />
                </BookingSection>
            </MainWrapper>
            <Footer>
                <FooterLogo />
                <FooterNavigation />
                <FooterCopyright />
            </Footer>
        </>
    );
}
