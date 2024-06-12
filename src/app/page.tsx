import NewsLetter from "@/components/NewsLetter";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import FMBArticle from "@/components/home/FMBArticle";
import Hero from "@/components/home/Hero";
import WhyChose from "@/components/home/WhyChose";
import WithUs from "@/components/home/WithUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WithUs />
      <WhyChose />
      <FMBArticle/>
      <About />
      <Blog />
      <NewsLetter />
    </div>
  );
}
