import { fDate } from "@/utils/format-time";
import Link from "next/link";

export default function MonthlyTopicsSection({ topics }: { topics: any }) {
  const items = [
    {
      image: "/Images/topic_1.jpg",
      title: "Figma, Sketch, XD or Lunacy? Who rules?",
      writtenBy: "Sudha Murthy",
      date: "Feb 9, 2021",
      href: "",
    },
    {
      image: "/Images/topic_3.jpg",
      title: "Figma, Sketch, XD or Lunacy? Who rules?",
      writtenBy: "Aditya S",
      date: "Feb 9, 2021",
      href: "",
    },
    {
      image: "/Images/topic_2.jpg",
      title: "Figma, Sketch, XD or Lunacy? Who rules?",
      writtenBy: "Jenny Wilson",
      date: "Feb 9, 2021",
      href: "",
    },
  ];

  return (
    topics && (
      <div className="flex flex-col items-center pb-14 gap-4">
        <div className="text-2xl font-bold">Topic of the Month</div>
        <div className="flex flex-row gap-10 px-10">
          <div className="flex">
            {topics.slice(3, 6).map(
              (
                item: {
                  id: string;
                  content: string;
                  title: string;
                  createdAt: string;
                  gists: { users: { name: string }; slug: string };
                  gistId: string;
                },
                index: number
              ) => (
                <Link key={item.id} href={`/gist/${item.gists.slug}`}>
                  <div className="flex flex-col hover:bg-primary-light p-10 w-[400px] h-[400px]">
                    <img
                      src={items[index]?.image || items[2].image}
                      alt={item.title}
                      className="flex  w-full h-full object-cover"
                    />
                    <h1 className=" flex items-center justify-content text-lg font-bold">
                      {item.title}
                    </h1>
                    <div className="flex flex-row justify-between">
                      <p className="text-xs text-grey">
                        Written By:{" "}
                        <span className="text-primary-dark">
                          {items[index]?.writtenBy || items[2].writtenBy}
                        </span>
                      </p>
                      <p className="text-xs text-grey">
                        Published On:{" "}
                        <span className="text-primary-dark">
                          {fDate(item.createdAt)}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    )
  );
}
