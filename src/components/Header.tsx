import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center py-8 animate-md3-header">
            <div className="flex items-center gap-3">
                <Image
                    src="/icons/android-chrome-192x192.png"
                    alt="Mi Lechuga logo"
                    width={44}
                    height={44}
                    className="rounded-2xl"
                    priority
                />
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold tracking-tight text-foreground leading-none font-display">
                        Mi Lechuga
                    </h1>
                    <span className="text-xs text-foreground/60 tracking-widest uppercase mt-0.5">
                        Tasa 🥬 Venezuela
                    </span>
                </div>
            </div>
        </header>
    );
}
