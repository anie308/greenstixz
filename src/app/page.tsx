import NewsLetter from "@/components/NewsLetter";
import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Hero from "@/components/home/Hero";
import WithUs from "@/components/home/WithUs";

export default function Home() {
  return (
   <div>
    <Hero/>
    <WithUs/>
    <About/>
    <Blog/>
    <NewsLetter/>
   </div>
  );
}
