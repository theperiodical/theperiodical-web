import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import GistSection from "@/sections/gist/gist-section";

export default function GistView({ slug }: { slug: string }) {
  return (
    <div>
      <Navbar />
      <GistSection slug={slug} />
      <Footer />
    </div>
  );
}
