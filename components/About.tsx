"use client";

import { therapist } from "@/constants/data";
import FadeInWhenVisible from "./FadeInWhenVisible";
import Image from "next/image";

export default function About() {
    return (
        <section className="w-full px-6 md:px-16 py-16 bg-[#FEFEFE]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Text Section */}
                <FadeInWhenVisible delay={0.02}>
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#3D5748]">
                            About {therapist.name}
                        </h2>
                        <p className="text-lg text-[#3D5748] mb-4 leading-relaxed">
                            {therapist.about}
                        </p>
                        <p className="text-lg text-[#3D5748] leading-relaxed">
                            Through PSYPACT participation, she offers telehealth sessions across most U.S. states,
                            allowing greater access to quality psychological care from the comfort of your home.
                        </p>
                    </div>
                </FadeInWhenVisible>

                {/* Image Section */}
                <FadeInWhenVisible delay={0.02}>
                    <div className="flex-1">
                        <Image
                            src="/images/dr-serena.jpg"
                            alt="Dr. Serena Blake"
                            className="w-full h-auto object-cover rounded-2xl shadow-md"
                        />

                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
