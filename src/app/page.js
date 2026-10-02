import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Group from "@/components/Group";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Carrusel from "@/components/VideoCarrusel"
import { MOCK_VIDEOS } from "@/content/post/Carousel";


export default function Home() {
    return (
        <main>
            <Hero />
            <section id="videos" className="video-section">
                <Carrusel videos={MOCK_VIDEOS} />
            </section>
            <Career />
            <Group />
            <Blog />
            <Footer />
        </main>
    );
}