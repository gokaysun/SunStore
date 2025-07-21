import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] text-sm px-4 py-8 ml-auto max-w-[90%] text-left">
      {/* Logo ve sosyal medya */}
      <div className="flex flex-col items-start max-w-md mx-auto mb-6">
        <img
          src="public/images/Bandage.png"
          alt="Logo"
          className="mb-4 max-w-[200px] h-auto"
        />
        <div className="flex justify-start space-x-4">
          <a href="#">
            <img src="src/assets/facebook.png" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#">
            <img src="src/assets/instagram.png" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="#">
            <img src="src/assets/twitter.png" alt="Twitter" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Bağlantı grupları */}
      <div className="flex flex-col gap-6 items-start max-w-md mx-auto text-left">
        <FooterColumn title="Company Info" links={["About Us", "Carrier", "We are hiring", "Blog"]} />
        <FooterColumn title="Legal" links={["Terms & Conditions", "Privacy Policy", "Cookies", "License"]} />
        <FooterColumn title="Features" links={["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]} />
        <FooterColumn title="Resources" links={["IOS & Android", "Watch a Demo", "Customers", "API"]} />
      </div>

      {/* Abonelik alanı */}
      <div className="mt-6 text-left">
        <h2 className="font-semibold mb-2">Get In Touch</h2>
        <div className="flex flex-col sm:flex-row items-start">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-l-md mb-2 sm:mb-0"
          />
          <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
        <p className="mt-2 text-gray-600">Lore imp sum dolor Amit</p>
      </div>

      {/* Alt yazı */}
      <div className="mt-6 text-gray-500 text-left">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="text-left">
      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="space-y-1">
        {links.map((label, index) => (
          <li key={index}>
            <a href="#" className="text-blue-600 hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
