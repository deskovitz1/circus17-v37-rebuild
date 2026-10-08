import Link from "next/link"

const projects = Array.from({ length: 9 }, (_, index) => ({
  title: `Project Title ${index + 1}`,
  meta: "Client Name • 2025",
}))

export function RecentWorkPage() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-white text-black">
      <header className="border-b border-black/10 p-6 md:p-8 lg:p-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <h1 className="text-xl font-light tracking-tight md:text-2xl">CIRCUS17</h1>
          </Link>
          <h2 className="text-lg font-light tracking-wide md:text-xl">RECENT WORK</h2>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-white p-6 md:p-8 lg:p-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group cursor-pointer">
              <div className="relative mb-3 aspect-video overflow-hidden rounded border border-black/15 bg-white transition-colors group-hover:border-black/40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black/30 transition-colors group-hover:border-black/70">
                    <div className="ml-1 h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-black/60 transition-colors group-hover:border-l-black" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="line-clamp-2 text-sm font-light">{project.title}</h3>
                <p className="text-xs text-black/50">{project.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
