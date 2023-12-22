import React from 'react'
import {Nav} from "./Nav";

export const Header = () => {
    return <header id="video-container" className="absolute inset-x-0 top-0 z-50">
        <Nav fontColor="white"/>
        <video id="video-background" autoPlay muted loop>
            <source src="/home-video.mp4" type="video/mp4"/>
        </video>
        <div id="black-overlay"></div>
        <div className="relative isolate pt-14">
            <div className="mx-auto max-w-2xl center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

}