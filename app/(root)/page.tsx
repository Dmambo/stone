import { Separator } from "@/components/ui/separator";
import Container from "./components/Container";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Slug from "./components/Slug";

export default function Home() {
  return (
    <div className=" mb-5">
      <div className=" mb-5">
        <Hero />
      </div>
      <div className=" mb-5">
        <Slug />
      </div>
      <Separator className=" mt-4"/>
      <div className=" mb-8">
        <Container />
      </div>
      <Separator  className=" mt-4"/>
      <div className=" mt-8 my-8">
        <Features />
      </div>
    </div>
  );
}
