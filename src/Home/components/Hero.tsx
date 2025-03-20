const Hero = ({ isMobile, className }: { isMobile?: boolean, className?: string }) => {
    return (
        <section className={`${className} col-span-full max-md:px-8 md:col-start-2 flex flex-col gap-2 text-white font-neulisneue py-24 pt-24 md:pt-48 z-20`}>
            <p className="text-2xl md:text-4xl">Hi, I'm Adil Sanad.</p>
            <div className="flex gap-6 text-6xl md:text-8xl">
                <h1>UX <span className="font-black">Designer</span></h1>
                <div className="hidden md:flex gap-2 opacity-10">
                    <h1>· frontend dev</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;