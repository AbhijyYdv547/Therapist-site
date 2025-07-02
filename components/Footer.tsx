"use client";

import { therapist } from "@/constants/data";

export default function Footer() {
    return (
        <footer className="text-[#3D5748] bg-[#F3F0E8] px-6 md:px-12 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1: Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif">Contact</h3>
                    <p className="mb-2">{therapist.name}</p>
                    <p className="mb-2">{therapist.title}</p>
                    <p className="mb-2">{therapist.location}</p>
                    <p className="mb-2">
                        <a href={`tel:${therapist.phone}`} className="hover:underline">
                            {therapist.phone}
                        </a>
                    </p>
                    <p>
                        <a href={`mailto:${therapist.email}`} className="hover:underline">
                            {therapist.email}
                        </a>
                    </p>
                </div>

                {/* Column 2: Hours */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif">Hours</h3>
                    <p className="mb-2">
                        <span className="font-medium">In-Person:</span> {therapist.personhrs}
                    </p>
                    <p>
                        <span className="font-medium">Virtual:</span> {therapist.virtualhrs}
                    </p>
                </div>

                {/* Column 3: Experience */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif">About</h3>
                    <p className="mb-2">{therapist.experience}</p>
                    <p className="text-sm text-gray-200">{therapist.about.slice(0, 160)}...</p>
                </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-12 text-center text-sm text-gray-300">
                &copy; {new Date().getFullYear()} {therapist.name}. All rights reserved.
            </div>
        </footer>
    );
}
