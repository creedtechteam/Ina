import React from 'react'


function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col gap-4 min-w-[120px]">
          <span className="font-bold text-lg">logo</span>
          <div className="flex gap-4 mt-2">
            {/* Replace with your SVGs or images as needed */}
            <a href="#" aria-label="X" className="hover:opacity-80"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
        {/* Connect With Us */}
        <div className="flex flex-col gap-1 min-w-[150px]">
          <span className="font-semibold mb-2">Connect With Us</span>
          <a href="#" className="hover:underline">About ina</a>
          <a href="#" className="hover:underline">Join sisterhood</a>
          <a href="#" className="hover:underline">Get support</a>
          <a href="#" className="hover:underline">our blog</a>
          <a href="#" className="hover:underline">FAQ</a>
        </div>
        {/* Stay Updated */}
        <div className="flex flex-col gap-1 min-w-[150px]">
          <span className="font-semibold mb-2">Stay Updated</span>
          <a href="#" className="hover:underline">News letter</a>
          <a href="#" className="hover:underline">twitter post</a>
          <a href="#" className="hover:underline">linkdin post</a>
        </div>
        {/* Subscribe Now */}
        <div className="flex flex-col gap-2 min-w-[220px]">
          <span className="font-semibold mb-2">Subscribe Now</span>
          <span className="text-sm text-gray-200">Subscribe now for exclusive insight job and deals!</span>
          <form className="flex mt-2">
            <input type="email" placeholder="Enter your email" className="rounded-l-md px-4 py-2 text-gray-800 focus:outline-none w-full max-w-[160px]" />
            <button type="submit" className="bg-pink-300 hover:bg-pink-400 text-white font-semibold px-4 py-2 rounded-r-md transition">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer