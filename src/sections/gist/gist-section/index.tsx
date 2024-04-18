"use client";

import HTMLFlipBook from "react-pageflip";
import {
  LegacyRef,
  ReactNode,
  forwardRef,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import { useGetGists } from "@/services/gist.service";
import { fDate } from "@/utils/format-time";
import { Loader2 } from "lucide-react";

const Page = forwardRef(
  (
    {
      children,
      index,
      type,
    }: {
      children: ReactNode;
      index?: number;
      type: "cover" | "page";
    },
    ref: LegacyRef<HTMLDivElement>
  ) => {
    let style = "";

    if (type === "cover") {
      style +=
        "bg-primary-light border-[#998466] [box-shadow:inset_0_0_30px_0_rgba(36,10,3,.5),_-2px_0_5px_2px_rgba(0,0,0,.4)]";
    } else if (type === "page") {
      style += "bg-[#fdfaf7] border-[#c2b5a3]";
    }

    let pageStyle = "";

    if (index !== undefined) {
      if (index % 2 === 0) {
        pageStyle +=
          "border-r-0 [box-shadow:inset_-7px_0_30px_-7px_rgba(0,0,0,.4)]";
      } else {
        pageStyle +=
          "border-l-0 [box-shadow:inset_7px_0_30px_-7px_rgba(0,0,0,.4)]";
      }
    }

    return (
      <div className={`${style} ${pageStyle} page `} ref={ref}>
        <div className={`flex flex-col w-full h-full p-8 text-sm page-content`}>
          <div
            className={`page-text h-full flex flex-col ${
              type === "cover"
                ? "items-center justify-center text-2xl font-bold"
                : ""
            }`}
          >
            {children}
          </div>
          {index ? (
            <div className="page-footer text-right text-primary-dark">
              {index + 1}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

Page.displayName = "Page";

export default function GistSection({ slug }: { slug: string }) {
  // refs
  const gistRef = useRef();
  const [gist, setGist] = useState<any>(null);

  // hooks
  const { gists, gistsLoading, gistsError, gistsValidating, gistsEmpty } =
    useGetGists(slug);

  const gistObj = {
    title: "Gist 1 Title",
    description: "Gist 1 Description",
    content: [
      {
        id: "1",
        title: "Gist Topic 1",
        content:
          "<h1><strong>topic 1<strong></h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n",
      },
      {
        id: "2",
        title: "Gist Topic 2",
        content:
          "<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n",
      },
      {
        id: "3",
        title: "Gist Topic 3",
        content:
          "<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n",
      },
      {
        id: "4",
        title: "Gist Topic 4",
        content:
          "<h1>topic 1</h1> \n <p>Content 1</p>\n <h1>topic 2</h1> \n <p>Content 2</p>\n",
      },
    ],
  };

  // effects
  useEffect(() => {
    if (!gistsLoading) {
      setGist(gists[0]);
    }
  }, [gists, gistsLoading]);

  return gistsLoading ? (
    <div className="flex justify-center items-center h-screen w-full">
      <Loader2 className="mr-2 h-24 w-24 animate-spin" />
    </div>
  ) : (
    gist && (
      <div className="flex flex-col mt-10 px-14">
        <div className="text-primary-dark text-lg font-bold">
          {fDate(gist.from)} - {fDate(gist.to)}
        </div>
        <div className="text-xs text-grey">{gist.author.name}</div>
        <div className="font-bold text-2xl mt-6 mb-6">{gist.title}</div>
        <div className="mx-8 [box-shadow:0_0_20px_0_rgba(0,0,0,.5)]">
          <HTMLFlipBook
            ref={gistRef}
            width={550}
            height={800}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            mobileScrollSupport={true}
            style={{
              backgroundImage: "url('/Images/book-cover.jpg')",
            }}
          >
            <div className="" />
            <Page type="cover">
              <div className="flex flex-col gap-4 text-center">
                <h1 className="font-bold">{gist.title}</h1>
                <p className="font-normal text-sm">{gist.description}</p>
              </div>
            </Page>
            {gist.topics.map(
              (
                item: {
                  id: string;
                  title: string;
                  content: string;
                },
                index: number
              ) => (
                <Page type="page" key={item.id} index={index}>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </Page>
              )
            )}
          </HTMLFlipBook>
        </div>
      </div>
    )
  );
}
