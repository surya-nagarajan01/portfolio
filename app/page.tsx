import AboutMeSection from "@/components/hero/about.me.section";
import MainSection from "@/components/main-section/main.section";
import ProjectComponent from "@/components/project/project.component";

export default function Home() {
  return (
    <>
    <div className="w-full h-full overflow-hidden bg-bg">
    <AboutMeSection />
        <MainSection />
        <ProjectComponent/>
        <iframe src="https://app.youform.com/forms/gmm8noc5" loading="lazy" width="100%" height="700"></iframe>
    </div>
       
    </>
  );
}
