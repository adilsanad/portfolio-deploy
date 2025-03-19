import React from "react";
import { useNavigate } from "react-router-dom";

interface GalleryCardProps {
    org: string;
    title: string;
    tags: string[];
    year: string;
    description: string;
    image: string;           // new: path or URL to the image
    className?: string;
    isActive?: boolean;      // optional: to highlight the active card
    onClick?: () => void;    // optional: click handler to set active index
    link: string;
    isMobile: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
    org,
    title,
    tags,
    year,
    description,
    image,
    className,
    isActive,
    onClick,
    isMobile,
    link
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (isMobile) {
            navigate(link);
        } else if (onClick) {
            onClick();
        }
    };
    return (
        <div
            onClick={handleClick}
            className={`
                flex flex-col gap-3 rounded-[28px_28px_15px_15px] md:rounded-[15px] p-[2px] cursor-pointer bg-black/30
                transition-all snap-mandatory
                ${!isMobile ? `${isActive ? " bg-gradient-to-tr from-white/30 to-white/6 opacity-100" : "opacity-40"}` : ''}
                ${className}
            `}
        >
            <div className={`flex flex-col gap-3 bg-[#0e0e0e] w-full h-full rounded-[25px_25px_10px_10px] md:rounded-[12px] cursor-pointer overflow-hidden`}>
                {isMobile &&
                    <div className="flex w-full p-4 pb-0 border border-white/15 bg-white/10 rounded-[25px_25px_0px_0px] shadow-[0px_4px_60px_0px_rgba(255,255,255,0.20)]">
                    <img
                      src={image}
                      alt={title}
                      className="w-full max-h-[30vh] object-cover object-top rounded-[10px_10px_0px_0px]"
                    />
                  </div>
                }
                <div className="flex flex-col p-9">
                    <div className="flex font-light justify-between text-white/40 pb-2">
                        <h3>{org}</h3>
                        <div className="flex gap-4 items-center">
                            <h3>{year}</h3>
                            <a href={link}>
                                <svg className="h-4 mb-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3428 0.15686H9.84277C9.56663 0.15686 9.34277 0.380718 9.34277 0.65686C9.34277 0.933002 9.56663 1.15686 9.84277 1.15686L13.1357 1.15686L3.98922 10.3033L4.69633 11.0104L13.8428 1.86397L13.8428 5.15686C13.8428 5.433 14.0666 5.65686 14.3428 5.65686C14.6189 5.65686 14.8428 5.433 14.8428 5.15686L14.8428 0.65686C14.8428 0.380717 14.6189 0.15686 14.3428 0.15686Z" fill="white" />
                                    <path d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H6.5V2.5H3C1.61929 2.5 0.5 3.61929 0.5 5V12C0.5 13.3807 1.61929 14.5 3 14.5H10C11.3807 14.5 12.5 13.3807 12.5 12V8.5H11.5V12C11.5 12.8284 10.8284 13.5 10 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 pt-9 border-t border-white/40">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl md:text-4xl">{title}</h1>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <div key={index} className={`p-2 rounded-[10px] border max-md:text-sm text-nowrap
                                ${tag === 'UX + UI' ? 'bg-[#4F78FF]/10 border-[#4F78FF]/30 text-[#4F78FF]' :
                                            tag === 'React + Tailwind' ? 'bg-[#FF6246]/10 border-[#FF6246]/30 text-[#FF6246]' :
                                                tag === 'Shipped' ? 'bg-[#5BFF8C]/10 border-[#5BFF8C]/30 text-[#5BFF8C]' :
                                                    tag === 'Case Study' ? 'bg-[#A55BFF]/10 border-[#A55BFF]/30 text-[#A55BFF]' :
                                                        'bg-[#4F78FF]/10 border-[#4F78FF]/30 text-[#4F78FF]'
                                        }`}

                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="opacity-50">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;
