import AboutMeSection from "@/components/hero/about.me.section";
import MainSection from "@/components/main-section/main.section";
import ProjectComponent from "@/components/project/project.component";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Surya | Full Stack Developer',
  description: 'Explore Surya\'s portfolio, showcasing full stack development skills, AI, SaaS, and mobile applications.',
  keywords: 'Surya, Full Stack Developer, AI, SaaS, Mobile Development, Web Development',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Surya | Full Stack Developer',
    description: 'Explore Surya\'s portfolio and projects, including his work in AI and mobile apps.',
    url: 'https://your-website.com',
    siteName: 'Surya\'s Portfolio',
    images: [
      {
        url: 'https://your-website.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Surya\'s Portfolio',
      },
    ],
  },

}




export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-hidden bg-bg">
        <AboutMeSection />
        <MainSection />
        <ProjectComponent />
        <iframe
          src="https://app.youform.com/forms/gmm8noc5"
          loading="lazy"
          width="100%"
          height="700"
        ></iframe>
      </div>
    </>
  );
}
