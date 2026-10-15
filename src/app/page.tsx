import TopAppBar from "@/components/TopAppBar";
import TopAppBarDesktopCTA from "@/components/TopAppBarDesktopCTA";
import TopAppBarDesktopNavigation from "@/components/TopAppBarDesktopNavigation";
import TopAppBarLogo from "@/components/TopAppBarLogo";

export default function Home() {
    return (
        <>
            <TopAppBar>
                <TopAppBarLogo />
                <TopAppBarDesktopNavigation />
                <TopAppBarDesktopCTA />
            </TopAppBar>
        </>
    );
}
