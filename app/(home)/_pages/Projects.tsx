"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import IconButton from "../_components/IconButton";
import Link from "next/link";
import { PinContainer } from "../_components/pin";

const Project = () => {
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const yProgress = (ref: any) => {
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["0 1", "1.1 1"],
        });

        return scrollYProgress;
    };

    return (
        <div
            className='flex flex-col relative justify-center items-center'
            id='projects'
        >
            <motion.div
                ref={project1Ref}
                style={{
                    opacity: yProgress(project1Ref),
                    marginBottom: "10rem",
                }}
                className='px-4'
            >
                <div className='w-full flex lg:flex-row flex-col justify-around'>
                    <div className=''>
                        <PinContainer
                            title='/ui.aceternity.com'
                            href='https://twitter.com/mannupaaji'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                <div className='flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
                            </div>
                        </PinContainer>
                    </div>

                    <div className='lg:w-[32rem] w-full ml-20'>
                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            AI - Imaginate
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Developed a React application to facilitate image
                            creation through the utilization of the Dall-E API.
                            Users can effortlessly craft images and seamlessly
                            share them within the community, while also having
                            the option to save the images directly to their
                            devices.
                        </p>
                        <div className='text-[#6E92F3] text-sm mt-4'>
                            <span className='mr-4'>React</span>{" "}
                            <span className='mr-4'>MongoDB</span>{" "}
                            <span className='mr-4'>Dall-E AI</span>{" "}
                            <span className='mr-4'>Tailwind</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://ai-imaginate-frontend.onrender.com/'
                                target='_blank'
                            >
                                <IconButton
                                    text='View Project'
                                    type='external'
                                />
                            </a>

                            <a
                                href='https://github.com/rahulSailesh-shah/AI-Imaginate'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={project2Ref}
                style={{
                    opacity: yProgress(project2Ref),
                    marginBottom: "10rem",
                }}
                className='lg:w-fit w-full'
            >
                <div className='w-full flex lg:flex-row flex-col justify-around'>
                    <div className='lg:w-[32rem] w-full mr-20'>
                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            CoDev Space
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Crafted an collaborative online Python coding IDE
                            using React and Web Sockets enabling real-time code
                            development and execution, featuring live
                            collaboration through shared coding rooms, fostering
                            seamless teamwork among users.
                        </p>
                        <div className='text-[#6E92F3] text-sm mt-4'>
                            <span className='mr-4'>Web Sockets</span>{" "}
                            <span className='mr-4'>React</span>{" "}
                            <span className='mr-4'>Redux</span>{" "}
                            <span className='mr-4'>Express</span>{" "}
                            <span className='mr-4'>MongoDB</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://codev-space.onrender.com/'
                                target='_blank'
                            >
                                <IconButton
                                    text='View Project'
                                    type='external'
                                />
                            </a>

                            <a
                                href='https://github.com/rahulSailesh-shah/CoDev-Space'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <PinContainer
                            title='/ui.aceternity.com'
                            href='https://twitter.com/mannupaaji'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                <div className='flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
                            </div>
                        </PinContainer>
                    </div>
                </div>
            </motion.div>

            <motion.div
                ref={project3Ref}
                style={{
                    opacity: yProgress(project3Ref),
                }}
                className='px-4'
            >
                <div className='lg:w-fit w-full flex lg:flex-row flex-col justify-around'>
                    <div className=''>
                        <PinContainer
                            title='/ui.aceternity.com'
                            href='https://twitter.com/mannupaaji'
                        >
                            <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] '>
                                <div className='flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
                            </div>
                        </PinContainer>
                    </div>

                    <div className='lg:w-[32rem] w-full ml-20'>
                        <h1 className='lg:text-4xl text-2xl text font-semibold mb-6 text-white'>
                            Route Tracker
                        </h1>
                        <p className='p-1 lg:text-lg text-[#cdcdcd]'>
                            Developed a React Native mobile app harnessing GPS
                            capabilities to track and record routes, storing
                            them in MongoDB for review, distance tracking, and
                            implementing comprehensive user authentication.
                        </p>
                        <div className='text-[#6E92F3] text-sm mt-4'>
                            <span className='mr-4'>React Native</span>{" "}
                            <span className='mr-4'>Node.js</span>{" "}
                            <span className='mr-4'>MongoDB</span>{" "}
                            <span className='mr-4'>Express</span>
                        </div>

                        <div className='flex mt-4'>
                            <a
                                href='https://github.com/rahulSailesh-shah/Route-Tracker'
                                target='_blank'
                            >
                                <IconButton text='Github' type='Github' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
