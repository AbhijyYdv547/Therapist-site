import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function Hero() {
    return (
        <div className="w-full min-h-screen bg-[#F3F0E8] px-4 sm:px-8 md:px-16">
            <div className="min-h-screen relative overflow-hidden">
                {/* Background video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/images/nature-vid.mp4"
                    muted
                    autoPlay
                    loop
                />

                {/* Dark overlay on video */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Overlay content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full text-center">
                    <FadeInWhenVisible>
                        <div className="max-w-3xl px-2">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
                                Psychological Care for <br /> Change, Insight, and Well-Being
                            </h1>
                            <p className="text-white text-base sm:text-lg md:text-xl mb-6">
                                Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full font-medium text-base sm:text-lg hover:bg-gray-200 transition w-full sm:w-auto">
                                Schedule a Consultation
                            </button>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
}
