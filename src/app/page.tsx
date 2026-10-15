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
            </MainWrapper>
        </>
    );
}
