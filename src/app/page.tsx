import MainWrapper from "@/components/MainWrapper";
import TopAppBar from "@/components/TopAppBar";
import TopAppBarDesktopCTA from "@/components/TopAppBarDesktopCTA";
import TopAppBarDesktopNavigation from "@/components/TopAppBarDesktopNavigation";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import HeroSection from "@/components/HeroSection";
import HeroSectionTitle from "@/components/HeroSectionTitle";
import HeroSectionHeading from "@/components/HeroSectionHeading";
import HeroSectionDescription from "@/components/HeroSectionDescription";

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
                </HeroSection>
            </MainWrapper>
        </>
    );
}
