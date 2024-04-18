import GistView from "@/views/gist";

export default function Page({ params }: { params: { slug: string } }) {
  return <GistView slug={params.slug} />;
}
