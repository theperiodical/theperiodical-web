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
  const gistObj = {
    title: "Revitalizing the India-Myanmar-Thailand Trilateral Highway",
    author: {
      name: "Subin S K",
    },
    from: new Date("2024-05-17"),
    to: new Date(),
    description:
      "Indiaâ€™s External affairs minister recently met his Myanmar counterpart and discussed expediting projects, especially the India-Myanmar-Thailand trilateral highway",
    topics: [
      {
        id: "1",
        title: "India-Myanmar-Thailand Trilateral Highway",
        content:
          "<p>Indiaâ€™s External affairs minister recently met his Myanmar counterpart and discussed expediting projects, especially the India-Myanmar-Thailand trilateral highway.</p><ul><li>It is a significant regional connectivity project that aims to establish a road link between India, Myanmar, and Thailand.</li><li>The highway will span a distance of approximately 1,360 kilometres (845 miles), starting from Moreh in Manipur, India, and passing through Myanmar before reaching Mae Sot in Thailand.</li><li>It was first proposed by former Prime Minister Atal Behari Vajpayee and was approved at a ministerial-level meeting between India, Myanmar and Thailand in April 2002.</li><li>The construction of the India-Myanmar-Thailand Trilateral Highway began in 2012 and is being implemented in several phases.</li><li>The India-Myanmar Friendship Road forms the first segment of the IMT Highway. It runs from the border at Tamu/Moreh to Kalemyo and Kalewa.</li><li>Implementing agencies: On the Indian side, the project is being implemented by the Ministry of External Affairs (MEA) with the cooperation of its counterparts in Myanmar and Thailand and budgetary allocation from the Ministry of Finance.</li></ul>",
      },
      {
        id: "2",
        title: "Northern/Interaction-2023",
        content: `<p>A Chinese naval flotilla recently set off to join Russian naval and air forces in the Sea of Japan to participate in the "Northern/Interaction-2023" military drills.</p><ul><li>Northern/Interaction-2023 military drills is organized by the Chinese Peopleâ€™s Liberation Army Northern Theatre Command in the central Sea of Japan.</li><li>The event marks Russia's second time participating in the PLA annual strategic drills, and also a first that Russia has dispatched both naval and air forces to participate in similar events.</li><li>The drills are themed "safeguarding the safety of strategic maritime routes".</li><li>In August 2021, Russia participated in the "Western/Interaction-2021" exercise held in Northwest China's Ningxia Hui Autonomous Region, which marked the first time that China invited foreign forces to participate in its annual strategic exercises in its territory.</li><li>"Northern/Interaction-2023" drills are organized by the PLA Northern Theatre Command, while PLA forces participating in the previous "Western/Interaction-2021" exercise were mainly composed of forces from the Western Theatre Command.</li></ul>`,
      },
      {
        id: "3",
        title: "Namda Art",
        content:
          "<p>The Namda craft of Kashmir is being successfully revived under a Skill Indiaâ€™s Pilot Project as part of the Pradhan Mantri Kaushal Vikas Yojana (PMKVY), with nearly 2,200 candidates from across six districts of the state, receiving training in the dying art form.</p><ul><li>It is said to have begun in the 16th century when Mughal Emperor Akbar wanted to get a covering for his horses to protect them from the cold.</li><li>It was introduced by a Sufi saint named Shah-e-Hamdan to Kashmiris.</li><li>Namda is a type of traditional Kashmiri felted carpet that is created using sheep wool and has colourful hand embroidery.</li><li>The distinct feature of this Kashmiri craft is that wool is felted and not woven.</li></ul>",
      },
      {
        id: "4",
        title: "Windfall Tax",
        content:
          "<p>The Indian government recently reimposed a windfall tax on domestic petroleum crude.</p><ul><li>It is a higher tax levied by the government on specific industries when they experience unexpected and above-average profits.</li><li>When the government notices a sudden increase in an industry's revenue, they impose this tax.</li><li>However, these revenues cannot be linked to anything the company actively pursues, such as its business strategy or expansion.</li><li>Consequently, a Windfall Tax is imposed on an industry's profits when it experiences a sharp increase in revenue due to unrelated external events.</li></ul><h3>Rationale behind the imposition of windfall tax</h3><ul><li>Redistribution of unexpected gains, when high prices benefit producers at the expense of consumers.</li><li>To fund social welfare schemes</li><li>As a supplementary revenue stream for the government</li><li>As a way for the Government to narrow the countryâ€™s widened trade deficit.</li></ul>",
      },
    ],
  };

  const [gist, setGist] = useState<any>(gistObj);

  // hooks
  // const { gists, gistsLoading, gistsError, gistsValidating, gistsEmpty } =
  //   useGetGists(slug);

  // effects
  // useEffect(() => {
  //   if (!gistsLoading) {
  //     setGist(gists[0]);
  //   }
  // }, [gists, gistsLoading]);

  console.log("gist", gist);

  return (
    <div className="flex flex-col mt-10 px-14">
      <div className="text-primary-dark text-lg font-bold">
        {fDate(gist.from)} - {fDate(gist.to)}
      </div>
      <div className="text-xs text-grey">{gist.author.name}</div>
      <div className="font-bold text-2xl mt-6 mb-6">{gist.title}</div>
      <div className="mx-8 [box-shadow:0_0_20px_0_rgba(0,0,0,.5)]">
        {/* @ts-ignore */}
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
  );
  // gistsLoading ? (
  //   <div className="flex justify-center items-center h-screen w-full">
  //     <Loader2 className="mr-2 h-24 w-24 animate-spin" />
  //   </div>
  // ) : (
  //   gist && (

  // )
  // );
}
