import { fees } from "@/constants/data";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Fees() {
    
    return (
        <section className="bg-[#94B0B0] px-6 md:px-12 py-16">
            <div className="max-w-5xl mx-auto">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3D5748] mb-12">Rates & Insurance</h2>
                </FadeInWhenVisible>
                
<FadeInWhenVisible delay={0.02}>

                {/* Fees Section */}
                <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-[#3D5748] mb-6 text-center">Session Fees</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {fees.map((fee, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-lg font-bold text-[#3D5748]">{fee.type}</h4>
                                    <span className="text-md font-semibold text-[#3D5748]">{fee.price}</span>
                                </div>
                                <p className="text-[#3D5748] text-sm">{fee.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                </FadeInWhenVisible>
            </div>
        </section>
    );
}
