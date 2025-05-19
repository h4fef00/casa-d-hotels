//Types
import { Prop } from "../../models/prop.type";
//Components
import Button from "../../components/Button/Button";
import FooterDescription from "../../components/FooterDescription/FooterDescription";
import FooterContact from "../../components/FooterContact/FooterContact";
//Images
import Logo from "../../assets/logos/naples-logo.svg";
import Facebook from "../../assets/icons/mdi_facebook.svg";
import Instagram from "../../assets/icons/mdi_instagram.svg";

function Footer({ text }: Prop) {
  return (
    <>
      <footer className="bg-nightblue pb-25">
        <div className="flex flex-wrap w-full max-w-screen-xl mx-auto px-6 xl:px-0">
          {/* sezione social e prenota */}
          <div className="flex flex-wrap items-center pt-16 pb-10 lg:py-16 basis-full w-full shrink-0">
            {/* bottone */}
            <div className="basis-full lg:basis-1/3 flex items-center justify-center lg:justify-start">
              <Button
                text={text[0]}
                color="bg-[#ac835e] border-tan text-sm text-cream hover:!bg-transparent rounded-[60px] md:w-[240px] leading-[171%]"
              />
            </div>
            {/* logo */}
            <div className="basis-full lg:basis-1/3 flex items-center justify-center mt-10 lg:mt-0">
              <a href="#">
                <img src={Logo} alt="Logo" className="w-32 md:w-40" />
              </a>
            </div>
            {/* social */}
            <div className="basis-full lg:basis-1/3 flex items-center justify-center lg:justify-end gap-8 *:rounded-full *:border *:border-[#ac835e] mt-10 lg:mt-0 *:cursor-pointer">
              <div className="w-12 aspect-square flex items-center justify-center hover:bg-[#ac835e]">
                <a
                  href="https://www.facebook.com/profile.php?id=61574695341093&sk=about"
                  target="_blank"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>
              </div>
              <div className="w-12 aspect-square flex items-center justify-center hover:bg-[#ac835e]">
                <a
                  href="https://www.instagram.com/casadhotels/"
                  target="_blank"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          {/* sezione contatti */}
          <div className="basis-full lg:basis-1/2 py-10 lg:py-20 lg:pr-8 flex items-center justify-between border-t lg:border-y lg:border-r border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text={text[1]} />
            <FooterContact
              text="info@casadhotels.com"
              isLink={true}
              link="mailto:info@casadhotels.com"
            />
          </div>
          <div className="basis-full lg:basis-1/2 py-10 lg:py-20 lg:pl-8 border-y border-[#F9F0EC]/10">
            <div className="flex items-center justify-between">
              <FooterDescription text={text[2]} />
              <FooterContact
                text="+39 081 01 97 852"
                isLink={true}
                link="tel:+390810197852"
              />
            </div>
            <div className="flex items-center justify-between">
              <FooterDescription text={text[3]} />
              <FooterContact
                text="+39 340 60 07 575"
                isLink={true}
                link="tel:+393406007575"
              />
            </div>
          </div>
          {/* reception */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text={text[4]} />
            <FooterContact text={text[5]} isLink={false} />
          </div>
          {/* colazione */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text={text[6]} />
            <FooterContact
              text={text[7]}
              isLink={false}
              additionalClasses="text-right"
            />
          </div>
          {/* sicurezza */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text={text[8]} />
            <FooterContact text={text[9]} isLink={false} />
          </div>
          {/* checkin */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text="check in" />
            <FooterContact text={text[10]} isLink={false} />
          </div>
          {/* checkout */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text="check out" />
            <FooterContact text={text[11]} isLink={false} />
          </div>
          {/* animali */}
          <div className="basis-full py-10 lg:py-20 flex items-center justify-between border-t lg:border-y border-[#F9F0EC]/10 scroll-mt-8">
            <FooterDescription text={text[12]} />
            <FooterContact text={text[13]} isLink={false} />
          </div>
          {/* diritti */}
          <div className="basis-full font-normal text-white ff-futura lg:text-lg text-16 leading-[180%] lg:pt-20 pt-10">
            <p className="text-white">
              D HOTEL S.R.L. - VAT 10691891211 -{" "}
              <a href="https://www.google.it/maps/place/Casa+D+Hotels/@40.8502661,14.2648163,20z/data=!4m26!1m16!4m15!1m6!1m2!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!2sCasa+D+Hotels!2m2!1d14.2654531!2d40.850263!1m6!1m2!1s0x133b083fc67c345b:0x971589bf168db351!2sVia+Regina+Sancia,+8%2F10+12,+80139+Napoli+NA!2m2!1d14.2654531!2d40.850263!3e0!3m8!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!5m2!4m1!1i2!8m2!3d40.850263!4d14.2654531!16s%2Fg%2F11x1bphcpn?hl=it&amp;entry=ttu&amp;g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D">
                VIA REGINA SANCIA, 8/10-12 - Napoli (NA)
              </a>{" "}
              | <a href="tel:+390810197852">+39 081 01 97 852</a> |{" "}
              <a href="tel:+393406007575">+39 340 60 07 575</a> |{" "}
              <a href="mailto:info@casadhotels.com">info@casadhotels.com</a>
            </p>
          </div>
          <div className="basis-full lg:basis-1/2 ff-futura text-14 lg:text-[10px] leading-[180%] uppercase opacity-40 text-white font-normal">
            <p>
              <span>2025</span>© CASA D Hotel
            </p>
          </div>
          <div className="basis-full lg:basis-1/2 ff-futura text-14 lg:text-[10px] leading-[180%] uppercase opacity-40 text-white font-normal pb-16">
            <ul className="grid grid-cols-2 grid-rows-2 grid-flow-col lg:flex items-center gap-y-4 gap-x-16 lg:gap-8 lg:justify-end">
              <li className="min-w-max">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="min-w-max">
                <a href="#">Map</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
