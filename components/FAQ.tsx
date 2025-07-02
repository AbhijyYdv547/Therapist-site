"use client";

import { faqs } from "@/constants/data";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-[#F3F0E8] py-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <FadeInWhenVisible>

                    <h2 className="text-4xl md:text-5xl font-serif text-center text-[#3D5748] mb-16">
                    Frequently Asked Questions
                </h2>
                </FadeInWhenVisible>

<FadeInWhenVisible delay={0.02}>

                <div className="divide-y divide-[#B4B4B4]">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left flex items-center justify-between py-5 text-[#3D5748] hover:text-[#16324F] transition group focus:outline-none"
                            >
                                <span className="flex items-center gap-3">
                                    <ChevronRight
                                        className={`h-5 w-5 transition-transform duration-300 transform group-hover:text-[#16324F] ${activeIndex === index ? "rotate-90 text-[#3D5748]" : "rotate-0"
                                            }`}
                                    />
                                    <span className="text-lg font-medium">
                                        {faq.question}
                                    </span>
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="pl-8 pr-2 pb-5 text-sm text-[#3D5748] leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                </FadeInWhenVisible>
            </div>
        </section>
    );
}
