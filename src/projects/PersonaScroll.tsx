"use client"
import { useRef, useState, useEffect } from "react"
import rtarrow from "../assets/rtarrow.svg" // Adjust path

interface PersonaData {
  name: string;
  age: number;
  occupation: string;
  location: string;
  description: string;
  profileImage: string;
  insights: string[];
  painPoints: string[];
  goals: string[];
  bgcolor: string;
}

interface PersonaScrollProps {
  isMobile: boolean
  personas: PersonaData[]
}

const PersonaScroll = ({ isMobile, personas }: PersonaScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    painPoints: false,
    goals: false,
  })

  useEffect(() => {
    setCanScrollLeft(activeIndex > 0)
    setCanScrollRight(activeIndex < personas.length - 1)
  }, [activeIndex, personas.length])

  const CARD_WIDTH = 896 + 36 // 768px (3xl) + 36px (gap) to include margin

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      let newIndex = direction === "right" ? activeIndex + 1 : activeIndex - 1

      // Ensure the index stays within bounds
      newIndex = Math.max(0, Math.min(newIndex, personas.length - 1))

      // Update state and scroll the container
      setActiveIndex(newIndex)
      scrollContainerRef.current.scrollTo({
        left: newIndex * CARD_WIDTH,
        behavior: "smooth",
      })
    }
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="col-span-full grid grid-cols-8 md:grid-cols-16 max-md:px-6 gap-y-4 md:gap-y-24">
      {/* Scroll Buttons */}
      <div className="col-span-full md:col-span-3 flex gap-5 py-4 md:py-8 justify-end md:justify-center items-start w-full">
        <button
          className={`p-4 bg-white/10 rounded-full disabled:opacity-30`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <img className="max-md:h-8 rotate-180" src={rtarrow || "/placeholder.svg"} alt="Left" />
        </button>
        <button
          className={`p-4 bg-white/10 rounded-full disabled:opacity-30`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <img className="max-md:h-8" src={rtarrow || "/placeholder.svg"} alt="Right" />
        </button>
      </div>

      {/* Scrollable Persona Cards */}
      <div
        ref={scrollContainerRef}
        className="col-span-full md:col-span-13 md:col-start-4 flex w-full gap-9 overflow-x-hidden custom-scrollbar scroll-smooth"
      >
        {personas.map((persona, index) => (
          <div
            key={index}
            className={`flex flex-col md:min-w-4xl min-w-full gap-5 ${
              index === personas.length - 1 ? "mr-[calc(50vw-384px)]" : "" // Add extra right margin only to the last card
            }`}
          >
            {/* Profile Header */}
            <div className="flex max-md:flex-col items-center justify-between p-5 md:p-6 gap-4 md:gap-12 w-full bg-black/30 rounded-[15px] border border-white/20">
              <div className="flex w-full items-center gap-4 md:gap-6">
                <img className="max-md:h-20" src={persona.profileImage || "/placeholder.svg"} alt="Profile" />
                <div className="flex flex-col w-fit gap-0 md:gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold flex text-white">{persona.name}</h1>
                  <div className="flex flex-col gap-0 text-sm md:text-lg text-[#9D9D9D]">
                    <p className="flex w-fit text-nowrap">
                      Aged {persona.age} · {persona.occupation}
                    </p>
                    <p>{persona.location}</p>
                  </div>
                </div>
              </div>
              <p className="max-md:text-base text-[#9D9D9D]">{persona.description}</p>
            </div>

            {/* Insights, Pain Points, and Goals */}
            <div className="flex flex-col w-full rounded-[15px] border border-white/20 overflow-hidden">
              <div className="flex flex-col gap-4 max-md:px-6 p-10 w-full bg-black/30">
                <h3 className="text-2xl font-bold" style={{ color: persona.bgcolor }}>Insights</h3>
                <ul className="list-disc pl-4 md:pl-8 max-md:text-base text-[#9D9D9D]">
                  {persona.insights.map((insight, idx) => (
                    <li key={idx}>{insight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex max-md:flex-col md:gap-4 md:p-12 w-full" style={{ backgroundColor: `${persona.bgcolor}33` }}>
                {/* Pain Points */}
                <div className="flex flex-col md:gap-4">
                  <div
                    className="flex justify-between max-md:p-8 max-md:border-t max-md:border-b border-white/10"
                    onClick={() => toggleSection("painPoints")}
                  >
                    <h3 className="text-2xl font-bold" style={{ color: persona.bgcolor }}>Pain Points</h3>
                    <svg
                      className={`md:hidden ${expandedSections.painPoints ? "rotate-180" : ""} transition-all`}
                      width="30"
                      height="17"
                      viewBox="0 0 30 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14L17 14ZM13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768152 27.0948 0.0768153 26.3137 0.857864L15 12.1716L3.68629 0.857865C2.90524 0.0768163 1.63891 0.0768164 0.857864 0.857865C0.0768153 1.63891 0.0768153 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14L13 15L17 15L17 14L13 14Z"
                        fill="white"
                        fillOpacity="0.3"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`${isMobile ? (expandedSections.painPoints ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0") : "max-h-none"} flex flex-col gap-[1px] md:gap-4 md:list-disc md:pl-8 max-md:text-base text-[#CBCBCB]/80 overflow-hidden transition-all ease-out duration-200`}
                  >
                    {persona.painPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className={`max-md:bg-black/30 max-md:px-8 max-md:py-5 ${idx === 0 ? "max-md:pt-8" : ""} ${idx === persona.painPoints.length - 1 ? "max-md:pb-8" : ""}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Goals */}
                <div className="flex flex-col md:gap-4">
                  <div
                    className="flex justify-between max-md:p-8 max-md:border-t max-md:border-b border-white/10"
                    onClick={() => toggleSection("goals")}
                  >
                    <h3 className="text-2xl font-bold" style={{ color: persona.bgcolor }}>Goals</h3>
                    <svg
                      className={`md:hidden ${expandedSections.goals ? "rotate-180" : ""} transition-all`}
                      width="30"
                      height="17"
                      viewBox="0 0 30 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 14C17 12.8954 16.1046 12 15 12C13.8954 12 13 12.8954 13 14L17 14ZM13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768152 27.0948 0.0768153 26.3137 0.857864L15 12.1716L3.68629 0.857865C2.90524 0.0768163 1.63891 0.0768164 0.857864 0.857865C0.0768153 1.63891 0.0768153 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14L13 15L17 15L17 14L13 14Z"
                        fill="white"
                        fillOpacity="0.3"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`${isMobile ? (expandedSections.goals ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0") : "max-h-none"} flex flex-col gap-[1px] md:gap-4 md:list-disc md:pl-8 max-md:text-base text-[#CBCBCB]/80 overflow-hidden transition-all ease-out duration-200`}
                  >
                    {persona.goals.map((goal, idx) => (
                      <li
                        key={idx}
                        className={`max-md:bg-black/30 max-md:px-8 max-md:py-5 ${idx === 0 ? "max-md:pt-8" : ""} ${idx === persona.goals.length - 1 ? "max-md:pb-8" : ""}`}
                      >
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PersonaScroll

