import Link from "next/link";

export default async function Footer() {
  "use cache";

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-bold uppercase text-white">
            Brick<span className="text-accent">line</span>
          </p>
          <p className="mt-3 text-sm">Built right. Built to last.</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/estimate" className="hover:text-white">Cost estimator</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>hello@brickline.example</li>
            <li>+1 (555) 010-2030</li>
            <li>Monday to Friday, 8am to 5pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Brickline Construction. Demo project, not a real company.
      </div>
    </footer>
  );
}
