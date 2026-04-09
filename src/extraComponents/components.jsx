const GoogleLogo = () => (
    <svg width="40" height="40" viewBox="0 0 48 48">
        <path
            fill="#EA4335"
            d="M24 9.5c3.5 0 6.3 1.2 8.4 3.2l6.3-6.3C34.8 3 29.8 1 24 1 14.7 1 6.8 6.5 3.1 14.4l7.3 5.7C12.2 13.4 17.6 9.5 24 9.5z"
        />
        <path
            fill="#4285F4"
            d="M46.5 24.5c0-1.7-.1-3.3-.4-4.8H24v9.1h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-17.2z"
        />
        <path
            fill="#FBBC05"
            d="M10.4 28.6c-.5-1.5-.8-3.1-.8-4.6s.3-3.1.8-4.6l-7.3-5.7C1.1 16.9 0 20.3 0 24s1.1 7.1 3.1 10.3l7.3-5.7z"
        />
        <path
            fill="#34A853"
            d="M24 47c5.8 0 10.7-1.9 14.3-5.2l-7.4-5.7c-2 1.3-4.4 2.1-6.9 2.1-6.4 0-11.8-3.9-13.6-9.6l-7.3 5.7C6.8 41.5 14.7 47 24 47z"
        />
    </svg>
);

const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#9aa0a6">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
);

const ChevronDown = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#9aa0a6">
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

const EyeIcon = ({ show }) =>
    show ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#9aa0a6">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </svg>
    ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#9aa0a6">
            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
        </svg>
    );

const Footer = () => (
    <div className="flex justify-between items-center w-full max-w-2xl mt-6 px-1">
        <div className="flex items-center gap-1 text-[#9aa0a6] text-xs cursor-pointer">
            <span>English (United Kingdom)</span>
            <ChevronDown />
        </div>
        <div className="flex gap-6">
            {["Help", "Privacy", "Terms"].map((label) => (
                <a
                    key={label}
                    href="#"
                    className="text-[#9aa0a6] hover:text-[#e8eaed] text-xs transition-colors"
                >
                    {label}
                </a>
            ))}
        </div>
    </div>
);

export { GoogleLogo, Footer, ChevronDown, EyeIcon, UserIcon };
