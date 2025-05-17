// Translation
import { Trans } from "react-i18next";
// Types
import { Prop } from "../../models/prop.type";
// Components
import MainTitleUpper from "../../components/MainTitleUpper/MainTitleUpper";
// Images
import LocationImg from "../../assets/icons/location_on.svg";

function CenterSection({ text }: Prop) {
  return (
    <>
      <section className="bg-cream text-center py-14 lg:py-25">
        <div className="w-full max-w-7xl mx-auto px-6">
          <p className="ff-futura font-normal lg:text-sm leading-[128%] text-blue uppercase flex items-center justify-center mb-14">
            <span className="mr-3">Casa d hotel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="1"
              viewBox="0 0 38 1"
              fill="none"
            >
              <path d="M0 0.5H38" stroke="#CA9D75"></path>
            </svg>
            <span className="ml-3">{text[0]}</span>
          </p>
          <MainTitleUpper
            classes="lg:text-[110px] mb-14 ff-cormorant text-center leading-[73.207px]"
            text={text[1]}
            defaultColor="#AC835E"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.4961260511094!2d14.264809369636136!3d40.850264012651465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09be2e2ef6ed%3A0x64383a7ff00d328d!2sCasa%20D%20Hotels!5e0!3m2!1sit!2sit!4v1745931351911!5m2!1sit!2sit"
            className="w-full mb-8 lg:mb-20 z-0"
            width="600"
            height="464"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-wrap text-start">
            <div className="flex-col w-full lg:w-1/2">
              <p className="text-blue ff-futura font-[450] text-sm uppercase leading-[150%] tracking-[0.14rem] w-full lg:w-10/12 mb-6">
                {text[2]}
              </p>
            </div>
            <div className="flex-col w-full lg:w-1/2">
              <div className="flex items-center pb-4 mb-8 border-b border-tan gap-[10px]">
                <img src={LocationImg} alt="Icona posizione maps" />
                <p className="text-[28px] ff-cormorant leading-7 tracking-[-0.56px]">
                  {text[3]}
                </p>
              </div>
              <p className="text-blue ff-futura font-[450] text-sm uppercase leading-[150%] tracking-[0.14rem] mb-8">
                <Trans
                  i18nKey="CENTER-DESCR-RIGHT-1"
                  components={[<strong />]}
                ></Trans>
              </p>
              <p className="text-blue ff-futura font-[450] text-sm uppercase leading-[150%] tracking-[0.14rem] mb-8">
                <Trans
                  i18nKey="CENTER-DESCR-RIGHT-2"
                  components={[<strong />]}
                ></Trans>
              </p>
              <p className="text-blue ff-futura font-[450] text-sm uppercase leading-[150%] tracking-[0.14rem]">
                <Trans
                  i18nKey="CENTER-DESCR-RIGHT-3"
                  components={[<strong />]}
                ></Trans>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CenterSection;