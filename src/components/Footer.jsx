import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-white w-full">
      {/* Desktop (lg+) */}
      <div className="hidden lg:block relative mx-auto w-[1440px] h-[488px] bg-white transform -translate-x-[180px]">
        {/* Top light gray band */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-[142px] bg-[#FAFAFA]">
          {/* container */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1050px] h-[138px] flex flex-col items-start py-10">
            {/* row */}
            <div className="flex flex-row items-center gap-[577.5px] w-[1049.5px] h-[58px]">
              {/* Brand */}
              <div className="flex flex-col items-start gap-[10px] w-[236px] h-[58px]">
                <div className="relative w-[187px] h-[58px]">
                  <h3 className="absolute left-0 top-[13px] text-[#252B42] font-[700] text-[24px] leading-[32px] tracking-[0.1px]">SunStore</h3>
                </div>
              </div>
              {/* Social icons */}
              <div className="flex flex-col items-center w-[236px] h-6">
                <div className="flex flex-row justify-center items-center gap-5 w-[112px] h-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cursor-pointer">
                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-pointer">
                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="cursor-pointer">
                    <img src={twitter} alt="Twitter" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* hr */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[138px] w-[1057px] border-t border-[#E6E6E6]" />
        </div>

        {/* Middle white section */}
        <div className="absolute left-0 top-[142px] w-[1440px] h-[272px] bg-white">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1050px] h-[270px] flex flex-col items-start py-[50px]">
            {/* row of columns */}
            <div className="flex flex-row items-start gap-[30px] w-[1041px] h-[170px]">
              {/* Company Info */}
              <div className="flex flex-col items-start gap-5 w-[148px] h-[170px]">
                <h5 className="text-[#252B42] font-[700] text-[16px] leading-6 tracking-[0.1px]">Company Info</h5>
                <div className="flex flex-col items-start gap-[10px] text-[14px] leading-6 tracking-[0.2px] font-[700] text-[#737373]">
                  <a href="#">About Us</a>
                  <a href="#">Carrier</a>
                  <a href="#">We are hiring</a>
                  <a href="#">Blog</a>
                </div>
              </div>

              {/* Legal */}
              <div className="flex flex-col items-start gap-5 w-[152px] h-[170px]">
                <h5 className="text-[#252B42] font-[700] text-[16px] leading-6 tracking-[0.1px]">Legal</h5>
                <div className="flex flex-col items-start gap-[10px] text-[14px] leading-6 tracking-[0.2px] font-[700] text-[#737373]">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Cookies</a>
                  <a href="#">License</a>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col items-start gap-5 w-[148px] h-[170px]">
                <h5 className="text-[#252B42] font-[700] text-[16px] leading-6 tracking-[0.1px]">Features</h5>
                <div className="flex flex-col items-start gap-[10px] text-[14px] leading-6 tracking-[0.2px] font-[700] text-[#737373]">
                  <a href="#">Business Marketing</a>
                  <a href="#">User Analytic</a>
                  <a href="#">Live Chat</a>
                  <a href="#">Unlimited Support</a>
                </div>
              </div>

              {/* Resources */}
              <div className="flex flex-col items-start gap-5 w-[152px] h-[170px]">
                <h5 className="text-[#252B42] font-[700] text-[16px] leading-6 tracking-[0.1px]">Resources</h5>
                <div className="flex flex-col items-start gap-[10px] text-[14px] leading-6 tracking-[0.2px] font-[700] text-[#737373]">
                  <a href="#">IOS & Android</a>
                  <a href="#">Watch a Demo</a>
                  <a href="#">Customers</a>
                  <a href="#">API</a>
                </div>
              </div>

              {/* Get In Touch */}
              <div className="flex flex-col items-start gap-5 w-[321px] h-[131px]">
                <h5 className="text-[#252B42] font-[700] text-[16px] leading-6 tracking-[0.1px]">Get In Touch</h5>
                {/* input group */}
                <div className="relative w-[321px] h-[58px]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="absolute inset-0 w-full h-full bg-[#F9F9F9] border border-[#E6E6E6] rounded-[5px] pl-5 pr-[117px] text-[14px] leading-7 tracking-[0.2px] text-[#737373]"
                  />
                  <button className="absolute right-0 top-0 h-full w-[117px] bg-[#23A6F0] border border-[#E6E6E6] rounded-r-[5px] text-white text-[14px] leading-7 tracking-[0.2px]">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#737373] text-[12px] leading-7 tracking-[0.2px]">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom light gray bar */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[414px] w-[1440px] h-[74px] bg-[#FAFAFA]">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1050px] h-[74px] flex flex-col items-start py-[25px]">
            <div className="flex flex-row items-center gap-[213px] w-[600px] h-6">
              <div className="flex flex-col items-start w-[600px] h-6">
                <p className="text-[#737373] font-[700] text-[14px] leading-6 tracking-[0.2px]">Made With Love By Finland All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (current), visible below lg */}
      <div className="lg:hidden bg-[#FFFFFF] text-sm px-4 py-8 ml-auto max-w-[90%] text-left">
        {/* Logo ve sosyal medya */}
        <div className="flex flex-col items-start max-w-md mx-auto mb-6">
          <img
            src="/images/Bandage.png"
            alt="Logo"
            className="mb-4 max-w-[200px] h-auto"
          />
          <div className="flex justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cursor-pointer">
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-pointer">
              <img src={instagram} alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="cursor-pointer">
              <img src={twitter} alt="Twitter" className="h-6 w-6" />
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
