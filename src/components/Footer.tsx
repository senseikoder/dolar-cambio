export default function Footer() {
    return (
        <footer className="mt-4 mb-8 px-2 animate-md3-footer">
            <div className="bg-surface/50 rounded-2xl p-5 text-center">
                <p className="text-xs text-foreground/50 leading-relaxed max-w-sm mx-auto">
                    Proyecto de{" "}
                    <span className="text-foreground/70 font-semibold">código abierto</span>{" "}
                    sin fines de lucro. Fork por <a href="https://efrank.xyz" target="_blank" rel="noopener noreferrer" className="text-foreground/70 font-semibold">efrank.xyz</a>
                </p>
               
            </div>
        </footer>
    );
}
