"use client";
import Image from "next/image";
import { therapist } from "@/constants/data";
import FadeInWhenVisible from "./FadeInWhenVisible";

const SectionHeading = () => {
    return (
        <div className="bg-[#F3F0E8] px-6 md:px-12 py-4 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
            <FadeInWhenVisible>
                <div className="h-8 w-8 md:h-10 md:w-10 text-[#3D5748]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                    </svg>
                </div>

                <div className="text-[#3D5748] text-center md:text-left">
                    <p className="text-sm md:text-base font-medium leading-tight">
                        {therapist.name}
                    </p>
                    <p className="text-sm md:text-base text-[#3D5748] opacity-80">
                        Psychological Services
                    </p>
                </div>
            </FadeInWhenVisible>
        </div>
    );
};

export default SectionHeading;
