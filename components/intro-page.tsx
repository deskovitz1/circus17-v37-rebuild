import Link from "next/link"

const sections = [
  { label: "RECENT WORK", href: "/recent-work" },
  { label: "TECH SPACE" },
  { label: "MUSIC VIDEO" },
  { label: "NARRATIVE" },
] as const

export function IntroPage() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-black text-white">
      <header className="p-6 md:p-8 lg:p-12">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-light tracking-tight md:text-2xl">CIRCUS17</h1>
          <p className="text-sm uppercase tracking-widest text-white/60">Intro</p>
        </nav>
      </header>

      <main className="flex flex-1 items-center px-6 md:px-12 lg:px-24">
        <div className="flex w-full max-w-md flex-col gap-8 md:ml-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Production company</p>
            <h2 className="mt-3 text-4xl font-light tracking-tight md:text-6xl">CIRCUS17</h2>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/70 md:text-base">
              Cinematic storytelling and production.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {sections.map((section) =>
              "href" in section ? (
                <Link
                  key={section.label}
                  href={section.href}
                  className="border border-white px-6 py-3 text-center text-sm font-light tracking-wide transition-all duration-300 hover:bg-white hover:text-black md:text-base"
                >
                  {section.label}
                </Link>
              ) : (
                <button
                  key={section.label}
                  type="button"
                  className="border border-white px-6 py-3 text-center text-sm font-light tracking-wide transition-all duration-300 hover:bg-white hover:text-black md:text-base"
                >
                  {section.label}
                </button>
              ),
            )}
          </div>
        </div>
      </main>

      <footer className="p-6 md:p-8 lg:p-12">
        <p className="text-xs tracking-wide text-white/50">© 2025 Circus17</p>
      </footer>
    </div>
  )
}
