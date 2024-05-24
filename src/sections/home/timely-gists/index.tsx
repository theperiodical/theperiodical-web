import { fDate } from "@/utils/format-time";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TimelyGistsSection({ gists }: { gists: any }) {
  const items = [
    {
      fromDate: "Feb 5, 2024",
      toDate: "Feb 12, 2024",
      title: "8 Figma design systems that you can download for free today.",
      href: "",
    },
    {
      fromDate: "Feb 5, 2024",
      toDate: "Feb 12, 2024",
      title: "8 Figma design systems that you can download for free today.",
      href: "",
    },
    {
      fromDate: "Feb 5, 2024",
      toDate: "Feb 12, 2024",
      title: "8 Figma design systems that you can download for free today.",
      href: "",
    },
    {
      fromDate: "Feb 5, 2024",
      toDate: "Feb 12, 2024",
      title: "8 Figma design systems that you can download for free today.",
      href: "",
    },
    {
      fromDate: "Feb 5, 2024",
      toDate: "Feb 12, 2024",
      title: "8 Figma design systems that you can download for free today.",
      href: "",
    },
  ];

  const router = useRouter();

  const latestGist = gists ? gists[0] : null;

  return (
    <div
      id="gists"
      className="flex flex-row justify-between gap-12 py-14 px-14"
    >
      {latestGist && (
        <div className="flex flex-col w-3/5 h-1/6 py-14">
          <div className="text-2xl font-bold">Weekly Gist</div>
          <div className="text-grey text-sm">
            {fDate(latestGist.from)} - {fDate(latestGist.to)}
          </div>
          <div className=" flex flex-col gap-4 border border-[#ebe8e8] mt-6 rounded-md px-14 py-10">
            <img
              src="/Images/gist_1.png"
              alt="hero-image"
              className=" w-full h-[200px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">{latestGist.title}</p>
              <p className="text-grey text-sm">{latestGist.description}</p>
            </div>
            <Link href={`/gist/${latestGist.slug}`}>
              <button className="w-28 h-10 bg-primary-dark text-white mt-6 text-sm hover:bg-primary-hover">
                Read More &gt;
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2 w-2/5 h-1/6 py-14">
        <div className="flex flex-row justify-between">
          <div className="text-2xl font-bold pl-4">Previous Gists</div>
          {/* <div className="text-sm text-grey">View All</div> */}
        </div>
        <div className="flex flex-col py-5">
          {gists
            .slice(1, gists.length > 6 ? 6 : gists.length)
            .map(
              (item: {
                id: string;
                slug: string;
                from: string;
                to: string;
                title: string;
              }) => (
                <Link key={item.id} href={`/gist/${item.slug}`}>
                  <div className="flex flex-col hover:bg-primary-light p-4">
                    <p className="text-grey text-xs">
                      {fDate(item.from)} - {fDate(item.to)}
                    </p>
                    <h1 className="text-lg font-bold">{item.title}</h1>
                  </div>
                </Link>
              )
            )}
        </div>
      </div>
    </div>
  );
}
