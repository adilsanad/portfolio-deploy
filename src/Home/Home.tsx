import Navbar from '../common/Navbar'
import Hero from './components/Hero'
import WorkGallery from './components/WorkGallery'
import AboutMe from './components/AboutMe'
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

function Home({ isMobile }: { isMobile: boolean }) {
    const options = useMemo(() => ({
        fullScreen: { enable: false },
        particles: {
            number: { value: 30 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#FFFFFF", opacity: 0.3 },
            color: { value: "#FFFFFF" },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "attract" },
            },
            modes: {
                attract: { distance: 300 },
            },
        },
    }), []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-[#151515]'>
            <Navbar style={isMobile ? 'pinned' : 'floating'} isMobile={isMobile} className='z-20' />
            <Particles className="absolute inset-0 z-10" init={particlesInit} options={options} />
            <Hero isMobile={isMobile} className='z-20' />
            <WorkGallery id='work' isMobile={isMobile} />
            <AboutMe id='aboutme' isMobile={isMobile} />
        </section>
    )
}

export default Home
