//Types
import { Prop } from "../../models/prop.type";
//Components
import Button from "../../components/Button/Button";
import FooterDescription from "../../components/FooterDescription/FooterDescription";
//Images
import Logo from "../../assets/logos/naples-logo.svg";
import Facebook from "../../assets/icons/mdi_facebook.svg";
import Instagram from "../../assets/icons/mdi_instagram.svg";


function Footer({ text }: Prop) {
  return (
    <>
      <footer className="bg-nightblue pb-25">
        {/* sezione social e prenota */}
        <div className="flex flex-wrap w-full max-w-screen-xl mx-auto px-6 xl:px-0">
          <div className="flex flex-wrap items-center pt-16 pb-10 lg:py-16 basis-full w-full shrink-0">
            {/* bottone */}
            <div className="basis-full lg:basis-1/3 flex items-center justify-center lg:justify-start">
              <Button text={text[0]} color="bg-[#ac835e] border-tan text-sm text-cream hover:!bg-transparent rounded-[60px] md:w-[240px] leading-[171%]" />
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
                <a href="https://www.facebook.com/profile.php?id=61574695341093&sk=about" target="_blank">
                <img src={Facebook} alt="Facebook" />
                </a>
              </div>
              <div className="w-12 aspect-square flex items-center justify-center hover:bg-[#ac835e]">
              <a href="https://www.instagram.com/casadhotels/" target="_blank">
                <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* sezione contatti */}
        <div className="basis-full lg:basis-1/2 py-10 lg:py-20 lg:pr-8 flex items-center justify-between border-t lg:border-y lg:border-r border-[#f9f0ec1a]/10 scroll-mt-8">
        <FooterDescription text={text[1]}/>
        </div>
      </footer>
    </>
  );
}
export default Footer;
