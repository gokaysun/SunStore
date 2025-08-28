import React from "react";

function LogoBox({ w, h, children }) {
  return (
    <div className="flex flex-col items-center" style={{ width: w, height: h }}>
      <div className="flex items-center justify-center" style={{ width: w, height: h }}>
        {children}
      </div>
    </div>
  );
}

export default function ShopClient() {
  // desktop client config per spec
  const desktopClients = [
    { w: 153, h: 34, iw: 103, ih: 34, img: "/images/client1.png", alt: "client1" },
    { w: 146, h: 59, iw: 83, ih: 59, img: "/images/client2.png", alt: "client2" },
    { w: 152, h: 75, iw: 102, ih: 75, img: "/images/client3.png", alt: "client3" },
    { w: 151, h: 42, iw: 103, ih: 42, img: "/images/client4.png", alt: "client4" },
    { w: 151, h: 62, iw: 104, ih: 62, img: "/images/client5.png", alt: "client5" },
    { w: 151, h: 72, iw: 76, ih: 72, img: "/images/client6.png", alt: "client6" },
  ];

  return (
    <>
      {/* desktop-clients-1 */}
      <section className="hidden lg:block w-full">
        <div className="w-full flex justify-center bg-[#FAFAFA]">
          <div className="relative w-[1440px] h-[175px] bg-[#FAFAFA]">
            {/* container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[175px] flex flex-col items-center p-0">
              {/* row */}
              <div className="w-[1054px] h-[175px] flex flex-row justify-center items-center py-[50px] gap-[30px]">
                {desktopClients.map((c, idx) => (
                  <LogoBox key={idx} w={c.w} h={c.h}>
                    <img
                      src={c.img}
                      alt={c.alt}
                      className="object-contain"
                      style={{ width: c.iw, height: c.ih }}
                    />
                  </LogoBox>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile-clients-1 */}
      <section className="w-full lg:hidden">
        <div className="relative mx-auto w-[414px] h-[1173px] bg-[#FAFAFA]" style={{ opacity: 1 }}>
          {/* background (hidden) */}
          <div className="absolute inset-0 w-[414px] h-[1014px] invisible" />
          {/* cover */}
          <div className="absolute top-0 left-0 w-[414px] h-[1014px]" />
          {/* filter */}
          <div className="absolute top-0 left-0 w-[414px] h-[1014px] opacity-0" />

          {/* container */}
          <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[414px] h-[952px]">
            {/* row */}
            <div className="w-[414px] h-[952px] flex flex-col items-center py-[50px] gap-[60px]">
              {/* 1. hooli */}
              <LogoBox w={153} h={50}>
                <img src="/images/client1.png" alt="client1" className="object-contain" style={{ width: 149, height: 50 }} />
              </LogoBox>

              {/* 2. lyft */}
              <LogoBox w={146} h={99}>
                <img src="/images/client2.png" alt="client2" className="object-contain" style={{ width: 139, height: 99 }} />
              </LogoBox>

              {/* 3. pied piper hat */}
              <LogoBox w={152} h={109}>
                <img src="/images/client3.png" alt="client3" className="object-contain" style={{ width: 149, height: 109 }} />
              </LogoBox>

              {/* 4. stripe */}
              <LogoBox w={149} h={60}>
                <img src="/images/client4.png" alt="client4" className="object-contain" style={{ width: 149, height: 60 }} />
              </LogoBox>

              {/* 5. aws */}
              <LogoBox w={151} h={92}>
                <img src="/images/client5.png" alt="client5" className="object-contain" style={{ width: 151, height: 92 }} />
              </LogoBox>

              {/* 6. reddit */}
              <LogoBox w={151} h={142}>
                <img src="/images/client6.png" alt="client6" className="object-contain" style={{ width: 149, height: 142 }} />
              </LogoBox>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}