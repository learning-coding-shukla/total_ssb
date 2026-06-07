function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-4 py-5">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">

          {/* Logo */}

          <div className="text-center md:text-left">

            <h2 className="text-xl font-bold text-orange-400">
              TOTAL_SSB 🇮🇳
            </h2>

            <p className="text-sm text-gray-400">
              Defence • NDA • CDS • AFCAT • SSB
            </p>

          </div>

          {/* Contact */}

          <div className="text-center text-sm">

            <p>
              📧
              <a
                href="mailto:itsdivyanshu01@gmail.com"
                className="hover:text-blue-400 ml-1"
              >
                itsdivyanshu01@gmail.com
              </a>
            </p>

            <p className="mt-1">
              📸
              <a
                href="https://instagram.com/itsdivyanshushukla761"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 ml-1"
              >
                @itsdivyanshushukla761
              </a>
               <a
                href="https://www.instagram.com/total_ssb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 ml-1"
              >
                @total_ssb
              </a>
            </p>

          </div>

        </div>

        <hr className="my-4 border-slate-800" />

        <div className="text-center text-xs text-gray-500">

          © {new Date().getFullYear()} TOTAL_SSB • All Rights Reserved •
          Built with ❤️ by Divyanshu Shukla

        </div>

      </div>

    </footer>
  );
}

export default Footer;