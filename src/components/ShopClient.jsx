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
  return (
    // mobile-clients-1
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
  );
}