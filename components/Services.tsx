import { services } from "@/constants/data";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Services() {
    return (
        <section className="bg-[#F3F0E8] py-16 px-6 md:px-12">
            <FadeInWhenVisible>
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3D5748]">
                        Services
                    </h2>
                </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <FadeInWhenVisible key={index} delay={0.02}>
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-[#3D5748] transition-transform duration-300 hover:scale-105">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#3D5748] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[#3D5748] text-sm leading-relaxed max-w-sm">
                                {service.description}
                            </p>
                        </div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}
