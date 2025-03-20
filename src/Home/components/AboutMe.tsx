import me from '../../assets/images/me.jpg';

const AboutMe = ({ id, isMobile }: { id: string, isMobile: boolean }) => {
    return (
        <section id={id} className={`grid ${isMobile ? 'col-span-full px-4 grid-cols-8' : 'col-span-14 col-start-2 grid-cols-14 gap-x-12 px-8'} gap-y-16 text-white font-neulisneue`}>
            <div className="col-span-full flex flex-col gap-1">
                <div className="flex gap-4 px-4">
                    <p className={`${isMobile ? 'text-nowrap text-3xl' : 'text-4xl'} -rotate-2 font-light font-neuliscursive text-white/30`}>introductions!                                                                             </p>
                    <svg className='rotate-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0288 9.36141C18.0313 9.63002 19.0616 9.03512 19.3303 8.03267C19.5989 7.03022 19.004 5.99983 18.0015 5.73123C16.9991 5.46262 15.9687 6.05752 15.7001 7.05997C15.4315 8.06241 16.0264 9.09281 17.0288 9.36141Z" fill="#4F78FF" />
                        <path d="M16.7856 10.269C17.621 10.4928 18.1168 11.3515 17.8929 12.1868L15.1457 22.4396L16.3198 22.07C17.1447 21.8104 18.0239 22.2687 18.2836 23.0936C18.5432 23.9185 18.085 24.7978 17.26 25.0574L15.5417 25.5983C13.4199 26.2661 11.3973 24.3283 11.9729 22.1801L14.8678 11.3762C15.0916 10.5409 15.9503 10.0451 16.7856 10.269Z" fill="#4F78FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9466 19.7375C28.7083 28.0912 20.1217 33.0487 11.7679 30.8103C3.41421 28.572 -1.54327 19.9854 0.69511 11.6316C2.93348 3.2779 11.5201 -1.67958 19.8738 0.558797C28.2275 2.79717 33.185 11.3838 30.9466 19.7375ZM29.1316 19.2511C27.1618 26.6024 19.6056 30.965 12.2543 28.9952C4.90301 27.0255 0.540431 19.4693 2.5102 12.118C4.47997 4.7667 12.0362 0.404118 19.3875 2.37389C26.7387 4.34366 31.1013 11.8999 29.1316 19.2511Z" fill="#4F78FF" />
                    </svg>
                </div>
                {isMobile &&
                    <svg className='ml-6 pr-4' width="136" height="78" viewBox="0 0 136 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M133.578 52.4343C134.921 52.115 135.751 50.7672 135.432 49.4239L130.229 27.5339C129.909 26.1906 128.561 25.3606 127.218 25.6799C125.875 25.9992 125.045 27.347 125.364 28.6903L129.99 48.1481L110.532 52.7735C109.188 53.0928 108.358 54.4406 108.678 55.7839C108.997 57.1272 110.345 57.9573 111.688 57.6379L133.578 52.4343ZM29.3544 1.92668C36.6122 25.6726 35.7257 47.6616 30.6371 60.7439C28.0669 67.3516 24.6451 71.1617 21.2036 72.3365C18.013 73.4257 13.828 72.5366 8.80909 67.2746L5.19097 70.7256C10.922 76.7342 17.0491 79.038 22.8189 77.0684C28.3377 75.1845 32.5244 69.6844 35.297 62.5564C40.8939 48.1674 41.6301 24.9838 34.136 0.465193L29.3544 1.92668ZM8.80909 67.2746C6.5381 64.8936 5.71383 62.4698 5.86083 60.0954C6.01248 57.6456 7.22161 54.9152 9.65548 52.0775C14.5482 46.373 23.886 40.8477 36.3384 37.2578C61.1453 30.1062 97.284 30.9415 131.689 52.1308L134.311 47.8734C98.6047 25.8827 60.9935 24.9464 34.9533 32.4535C21.9821 36.193 11.622 42.1045 5.86023 48.8223C2.96685 52.1958 1.10957 55.9227 0.87038 59.7865C0.626528 63.7255 2.08698 67.4713 5.19097 70.7256L8.80909 67.2746Z" fill="#4F78FF" />
                    </svg>
                }
            </div>
            {!isMobile &&
                <div className="col-span-6 flex h-full">
                    <img src={me} className=" w-full rounded-[15px] max-h-[880px] object-cover"></img>
                </div>
            }
            <div className={`${isMobile ? 'col-span-full ' : 'col-span-8 '} flex flex-col gap-6 text-[#A7A7A7] tracking-[0.01em]`}>
                <div className={`relative flex rounded-[15px] p-[2px] bg-gradient-to-bl from-white/30 to-white/6 rotate-1 hover:rotate-0 transition-all duration-500`}>
                    {isMobile &&
                        <div className="absolute -rotate-2 right-8 -top-28 w-fit h-fit">
                            <img src={me} className="w-42 h-56 object-cover rounded-[20px]">
                            </img>
                            <svg className="absolute -top-4 -right-4" width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.2494 1.65081C16.5468 2.12304 17.2158 3.55765 16.7436 4.85509L16.0595 6.73448C15.5873 8.03192 14.1527 8.70089 12.8553 8.22866C11.5578 7.75643 10.8888 6.32182 11.3611 5.02438L12.0451 3.14499C12.5174 1.84755 13.952 1.17858 15.2494 1.65081Z" fill="#4F78FF" />
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M38.4512 24.6951C38.6195 26.0656 37.6449 27.3129 36.2745 27.4812L32.3043 27.9687C30.9339 28.1369 29.6865 27.1624 29.5183 25.792C29.35 24.4216 30.3245 23.1742 31.695 23.0059L35.6651 22.5185C37.0356 22.3502 38.2829 23.3247 38.4512 24.6951Z" fill="#4F78FF" />
                                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M31.7674 7.23223C32.7437 8.20854 32.7437 9.79146 31.7674 10.7678L23.9892 18.5459C23.0129 19.5223 21.43 19.5223 20.4537 18.5459C19.4774 17.5696 19.4774 15.9867 20.4537 15.0104L28.2319 7.23223C29.2082 6.25592 30.7911 6.25592 31.7674 7.23223Z" fill="#4F78FF" />
                                <path opacity="0.2" d="M5 7.5C5 8.88071 3.88071 10 2.5 10C1.11929 10 4.03689e-09 8.88071 2.60061e-09 7.5C1.16433e-09 6.11929 1.11929 5 2.5 5C3.88071 5 5 6.11929 5 7.5Z" fill="#4F78FF" />
                            </svg>

                        </div>
                    }
                    <div className={`${isMobile ? 'pt-16 p-9' : 'pt-20 p-12'} flex flex-col gap-6 bg-[#0e0e0e] w-full h-full rounded-[12px]`}>
                        <h1 className="font-neuliscursive font-bold text-white text-6xl">Hi!</h1>
                        <p>I’m Adil Sanad, a Product Designer based out of Bangalore, India. </p>
                        <p>I graduated in Computer Science and Engineering at NIT Jalandhar, Punjab. As both a designer and front-end web dev, I am able to coordinate much more closely between both design and dev teams and get into the nitty gritty.</p>
                    </div>
                </div>
                <div className={`flex rounded-[15px] p-[2px] bg-gradient-to-l from-white/30 to-white/6 -rotate-1 hover:rotate-0 transition-all duration-500`}>
                    <div className={`${isMobile ? 'p-9 gap-6' : 'px-12 py-9 gap-3 '} flex flex-col bg-[#0e0e0e] w-full h-full rounded-[12px] `}>
                        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-8'}  w-full`}>
                            <h3 className="font-bold text-white max-md:text-xl">Skills</h3>
                            <div className={`flex ${isMobile ? 'gap-2' : 'gap-4 '} items-center`}>
                                <p>HTML/CSS</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>JS/TS</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>React</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Tailwind</p>
                            </div>
                        </div>
                        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-8'}  w-full`}>
                            <h3 className="font-bold text-white max-md:text-xl">Software</h3>
                            <div className={`flex ${isMobile ? 'gap-2' : 'gap-4 '} items-center`}>
                                <p>Figma</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Adobe CC</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Miro</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex rounded-[15px] p-[2px] bg-gradient-to-tl from-white/30 to-white/6 rotate-1 hover:rotate-0 transition-all duration-500`}>
                    <div className={`${isMobile ? 'p-9 pb-4' : 'px-12 pt-11 pb-5'} flex flex-col bg-[#0e0e0e] w-full h-full rounded-[12px] text-[#A7A7A7}`}>
                        <h3 className="font-bold text-lg text-[#4F78FF]">some stuff I've done</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4 py-6 text-lg">
                                <h3>01</h3>
                                <div className="flex flex-col gap-2">
                                    <div className={`${isMobile ? 'flex-col' : ''} flex w-full justify-between`}>
                                        <h3 className="text-white">KIOXIA Hackcellence Fest '21</h3>
                                        <p className="text-base opacity-60">Middle East, Africa, South Asia</p>
                                    </div>
                                    <p className=" leading-[1.3em]">Designed and prototyped a mobile app to enable users to discover new businesses</p>
                                </div>
                            </div>
                            <div className="flex gap-4 py-6 border-t border-white/10 text-lg">
                                <h3>02</h3>
                                <div className="flex flex-col gap-2">
                                    <div className={`${isMobile ? 'flex-col' : ''} flex w-full justify-between`}>
                                        <h3 className="text-white">HackMol 2.0</h3>
                                        <p className="text-base opacity-60">NITJ, Punjab</p>
                                    </div>
                                    <p className="font-light leading-[1.3em]">Hackathon organized by NITJ Google Dev Club. Finished 3rd place with a marketplace mobile app. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;