import { useState } from "react";
import { GoogleLogo, Footer } from "../extraComponents/components";

function EmailStep({ onNext }) {
    const [email, setEmail] = useState("");
    const [focused, setFocused] = useState(false);

    const handleNext = () => {
        if (email.trim()) onNext(email.trim());
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-8 font-sans">
            <div className="bg-[#2d2d2d] rounded-[28px] p-10 w-full max-w-2xl flex gap-8">
                <div className="flex-1 flex flex-col">
                    <GoogleLogo />
                    <h1 className="text-[#e8eaed] text-4xl font-normal mt-6 mb-2">
                        Sign in
                    </h1>
                    <p className="text-[#9aa0a6] text-base">
                        to continue to Gmail
                    </p>
                </div>

                <div className="flex-[1.4] flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Email or phone"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={(e) => e.key === "Enter" && handleNext()}
                        className="w-full bg-transparent rounded px-4 py-3 text-base text-[#e8eaed] placeholder-[#9aa0a6] outline-none transition-colors"
                        style={{
                            border: `1px solid ${focused ? "#8ab4f8" : "#5f6368"}`,
                        }}
                    />

                    <a
                        href="#"
                        className="text-[#8ab4f8] text-sm hover:underline w-fit"
                    >
                        Forgot email?
                    </a>

                    <p className="text-[#9aa0a6] text-xs leading-relaxed mt-2">
                        Not your computer? Use Guest mode to sign in privately.{" "}
                        <a href="#" className="text-[#8ab4f8] hover:underline">
                            Learn more about using Guest mode
                        </a>
                    </p>

                    <div className="flex items-center justify-end gap-6 mt-6">
                        <a
                            href="#"
                            className="text-[#8ab4f8] text-sm hover:underline"
                        >
                            Create account
                        </a>
                        <button
                            onClick={handleNext}
                            className="bg-[#1a73e8] hover:bg-[#1765cc] text-white rounded-full px-6 py-2.5 text-sm font-medium transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default EmailStep;
