import { useState } from "react";
import EmailStep from "./EmailStep";
import PasswordStep from "./PassStep";

export default function GoogleSignIn() {
    const [step, setStep] = useState("email");
    const [email, setEmail] = useState("");

    if (step === "password") {
        return <PasswordStep email={email} onBack={() => setStep("email")} />;
    }

    return (
        <EmailStep
            onNext={(val) => {
                setEmail(val);
                setStep("password");
            }}
        />
    );
}
