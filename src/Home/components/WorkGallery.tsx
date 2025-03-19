import { act, useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";
import WebsiteRevampCover from '../../assets/images/website/lp1.png';
import WebappRevampCover from '../../assets/images/webapp/subscriberhome.png'
import CycloCover from '../../assets/images/cyclo/cyclocover.png';
import RedArrow from '../../assets/workarrow.svg';
import { Link } from "react-router-dom";

interface GalleryData {
  org: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
  link: string;
}

function WorkGallery({ id, isMobile }: { id: string, isMobile: boolean }) {
  const galleryCardData: GalleryData[] = [
    {
      org: "AnswersAi",
      title: "Webapp Revamp",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy.",
      image: WebappRevampCover,
      link: '/aai-webapp-revamp'
    },
    {
      org: "AnswersAi",
      title: "Website Refresh",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A brand new marketing site revamp, focusing on modern design principles and better performance.",
      image: WebsiteRevampCover,
      link: '/aai-website-refresh                                                                                                                                   '
    },
    {
      org: "AnswersAi",
      title: "Cyclo",
      tags: ["UX + UI", "React + Tailwind", "Freelance"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: CycloCover,
      link: '/cyclo'
    },/*
    {
      org: "AnswersAi",
      title: "Pagr",
      tags: ["UX + UI", "React + Tailwind", "Case Study", "Hackathon"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
      link: '/aai-webapp-revamp'
    },
    {
      org: "AnswersAi",
      title: "Another Project",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
      link: '/aai-webapp-revamp'
    },*/
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (listRef.current && cardRefs.current[activeIndex]) {
      const listContainer = listRef.current;
      const activeCard = cardRefs.current[activeIndex];

      // Scroll so the active card moves to the top
      listContainer.scrollTo({
        top: activeCard.offsetTop - listContainer.offsetTop,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section id={id} className={`${isMobile ? 'col-span-full p-4 gap-5' : 'col-span-14 col-start-2 grid grid-cols-14 gap-5 max-h-screen'} relative font-neulisneue text-white z-20`}>
      {/* Left Column: Scrollable List of Cards */}
      <div className={`${isMobile ? '-top-16 right-8' : '-top-24 right-12'} flex gap-4 absolute z-20`}>
        <img className={`${isMobile ? 'order-2 scale-x-[-1] h-16' : 'order-1 h-20'} opacity-80 `} src={RedArrow} />
        <p className={`${isMobile ? 'order-1 -rotate-4 text-nowrap text-3xl' : 'text-4xl order-2 rotate-4'} font-light font-neuliscursive text-white/30 pt-1`}>work samples</p>
      </div>
      <div className="relative col-span-full md:col-span-5 md:pt-4">
        <div ref={listRef} className={`${isMobile ? 'col-span-full gap-6' : 'col-span-5 gap-4 h-[80vh] overflow-y-auto overflow-x-hidden custom-scrollbar '} relative flex flex-col`}>
          {galleryCardData.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={index} ref={(el) => (cardRefs.current[index] = el)} >
                <GalleryCard
                  org={card.org}
                  title={card.title}
                  tags={card.tags}
                  year={card.year}
                  description={card.description}
                  image={card.image}
                  isActive={isActive}
                  onClick={() => setActiveIndex(index)}
                  isMobile={isMobile}
                  className={`${!isMobile ? `duration-500 ${isActive ? 'rotate-0' : index % 2 === 0 ? 'rotate-2' : '-rotate-2'}` : ''}`}
                  link={card.link}
                />
              </div>
            );
          })}
        </div>
        <div className="max-md:hidden absolute bottom-0 h-1/5 bg-gradient-to-b from-[#151515]/30 to-90% to-[#151515] w-full pointer-events-none"></div>
      </div>

      {/* Right Column: Image of Active Card */}
      {!isMobile &&
        <Link to={galleryCardData[activeIndex].link} className="col-span-9 p-[2px] mt-4 md:mb-12 bg-gradient-to-tl from-white/30 to-white/5 rounded-[20px] overflow-hidden">
          <div className="flex p-12 pb-0 items-end bg-[#0e0e0e] rounded-[18px] h-full w-full">
            <div className="flex w-full p-4 pb-0 border border-white/15 bg-white/10 rounded-[25px_25px_0px_0px] shadow-[0px_4px_60px_0px_rgba(255,255,255,0.20)]">
              <img
                src={galleryCardData[activeIndex].image}
                alt={galleryCardData[activeIndex].title}
                className="w-full max-h-[60vh] object-cover object-top rounded-[10px_10px_0px_0px]"
              />
            </div>
          </div>
        </Link>
      }
    </section>
  );
}

export default WorkGallery;
