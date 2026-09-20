import { Link } from "react-router-dom";

const gameImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvJW5kaBILKrHvfaldjNEwSdcfsSB26hrg-m13jrGHQQ1KwBCNpSZ0kI&s=10";

const downloadUrl = "https://666rs2fs.com/s/80A66581142";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* BRAND + ARTICLE */}
          <section>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={gameImage}
                alt="Luckywheel777 Logo"
                className="h-12 w-12 rounded-xl "
              />

              <div>
                <h2 className="text-xl font-black text-white">
                  RS666<span className="text-yellow-400"> PAK GAME</span>
                </h2>

                <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  Download Game
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              RS666 Pak Game is an online gaming platform designed with a modern
              interface, simple navigation, and an enjoyable entertainment
              experience. Users can explore different platform features, browse
              available gaming options, and enjoy a smooth and responsive
              experience across smartphones, tablets, and desktop devices.
            </p>
          </section>

          {/* PAGES */}
          <nav>
            <h3 className="text-base font-bold text-white">Pages</h3>

            <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
              <Link to="/blog" className="hover:text-yellow-400">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
              <Link to="/download" className="hover:text-yellow-400">
                Download
              </Link>
            </div>
          </nav>

          {/* DOWNLOAD */}
          <section>
            <h3 className="text-base font-bold text-white">RS666 PAK GAME</h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Explore the website and access the available game download option.
            </p>

            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-yellow-300"
            >
              Download Game
            </a>
          </section>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
          © 2026 Roulette Game. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
