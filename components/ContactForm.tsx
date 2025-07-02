"use client";

import { useState } from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
    preferredTime: string;
    agree: boolean;
}

type FormErrors = {
    [K in keyof FormData]?: string;
};
  

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agree: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.phone.trim()) newErrors.phone = "Phone is required";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Valid email is required";
        if (!form.message.trim()) newErrors.message = "Please describe what brings you here";
        if (!form.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required";
        if (!form.agree) newErrors.agree = "You must agree to be contacted";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, type } = e.target;

        // We need to tell TypeScript that this is an input element to access .checked
        const value =
            type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : e.target.value;

        setForm({
            ...form,
            [name]: value,
        });
    };
      

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted:", form);
            setSubmitted(true);
        }
    };

    return (
        <section className="bg-[#FEFEFE] py-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <FadeInWhenVisible>
                    <h2 className="text-4xl md:text-5xl font-serif text-center text-[#3D5748] mb-12">
                        Contact
                    </h2>
                </FadeInWhenVisible>

                {submitted ? (
                    <FadeInWhenVisible delay={0.2}>
                        <p className="text-center text-[#3D5748] text-lg font-medium">
                        Thank you for reaching out. We&apos;s ll get back to you shortly.
                    </p>
                    </FadeInWhenVisible>
                ) : (
                        <FadeInWhenVisible delay={0.2}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-[#2A4D69] font-medium mb-1"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-[#2A4D69] font-medium mb-1"
                            >
                                Phone
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                                required
                            />
                            {errors.phone && (
                                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[#2A4D69] font-medium mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* What brings you here */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-[#2A4D69] font-medium mb-1"
                            >
                                What brings you here?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 h-28 text-black"
                                required
                            />
                            {errors.message && (
                                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        {/* Preferred time to reach you */}
                        <div>
                            <label
                                htmlFor="preferredTime"
                                className="block text-[#2A4D69] font-medium mb-1"
                            >
                                Preferred time to reach you
                            </label>
                            <input
                                id="preferredTime"
                                name="preferredTime"
                                type="text"
                                value={form.preferredTime}
                                onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                                required
                            />
                            {errors.preferredTime && (
                                <p className="text-red-600 text-sm mt-1">
                                    {errors.preferredTime}
                                </p>
                            )}
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-3">
                            <input
                                id="agree"
                                type="checkbox"
                                name="agree"
                                checked={form.agree}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <label htmlFor="agree" className="text-[#2A4D69] font-medium">
                                I agree to be contacted
                            </label>
                        </div>
                        {errors.agree && (
                            <p className="text-red-600 text-sm -mt-3">{errors.agree}</p>
                        )}

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                        className="bg-[#3D5748] hover:bg-[#16324F] text-white px-6 py-3 rounded-md text-lg transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    </FadeInWhenVisible>
                )}
            </div>
        </section>
    );
}
