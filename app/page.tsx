import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main>
            <Hero />

            <section className="section reveal-on-scroll">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px' }}>Ready to explore my journey?</h2>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/projects" className="btn-primary">View Projects</Link>
                        <Link href="/about" className="btn-secondary">Learn More About Me</Link>
                    </div>
                </div>
            </section>

            {/* Highlights or sneak peek could go here */}
        </main>
    );
}
