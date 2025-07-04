import React from 'react'
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {logo}from "../lib/Images"



function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col gap-4 min-w-[120px]">
          <div className='flex items-center gap-2'>
          <img src={logo} alt='logo' loading="lazy" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-lg">Ina</span>
          </div>
          <div className="flex gap-4 mt-2">
            {/* Replace with your SVGs or images as needed */}
            <a href="#" aria-label="X" className="hover:opacity-80"><FaXTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><FaLinkedin size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={20} /> </a>
          </div>
        </div>
        {/* Connect With Us */}
        <div className="flex flex-col gap-1 min-w-[150px]">
          <span className="font-semibold mb-2">Connect With Us</span>
          <a href="#" className="hover:underline">About ina</a>
          <a href="/signup" className="hover:underline">Join sisterhood</a>
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