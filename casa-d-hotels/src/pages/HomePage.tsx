// React
import { useTranslation } from "react-i18next";
// Layout components
import Footer from "../layout/Footer/Footer";
import HeadingSections from "../layout/HeadingSection/HeadingSections";
import CitySection from "../layout/CitySection/CitySection";
import CenterSection from "../layout/CenterSection/CenterSection";
// Components
import QuoteLine from "../components/QuoteLine/QuoteLine";
import MainTitleUpper from "../components/MainTitleUpper/MainTitleUpper";
import ContactsList from "../components/ContactsList/ContactsList";
import Button from "../components/Button/Button";
// Images
import Balcony from "../assets/images/prlx-naples-bottom-img.jpg";
// Data
import { CONTACTS } from "../data/contacts";
// Models
import { Contact } from "../models/contact.model";

function HomePage() {
  const { t } = useTranslation();
  const headingText = ["CONTACTS", "HEADING-1", "HEADING-2", "HEADING-NAPLES"];
  const cityText = ["HEADING-2", "THE-CITY", "CONTENT-1"];
  const centerText = [
    "HEADING-NAPLES",
    "HEADING-3",
    "CENTER-DESCR-LEFT",
    "interest",
  ];
  return (
    <>
      {/* header e prima section */}
      <HeadingSections text={headingText.map((text) => t(text))} />
      {/* sezione la citta */}
      <CitySection text={cityText.map((text) => t(text))} />
      {/* sezione centro storico */}
      <CenterSection text={centerText.map((text) => t(text))} />
      {/* sezione sancia*/}
      <section className="bg-cream py-14 lg:py-25">
        <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
          {/* lista contatti */}
          <div className="w-full md:w-fit">
            {/* casa d */}
            <div className="flex items-center my-[22px]">
              <QuoteLine />
              <p className="ff-futura uppercase font-normal text-sm tracking-[1.12px] leading-[128%] text-blue">
                <span className="mr-3">{t("casa-d-center")}</span>
              </p>
            </div>
            {/* casa d header */}
            <MainTitleUpper
              classes=" lg:text-7xl text-[50px] lg:leading-[90%] leading-[113%] tracking-[-2.899px] ff-cormorant"
              text="CASA D Hotel"
              defaultColor="#181d24"
            />
            {/* sancia */}
            <MainTitleUpper
              classes="normal-case lg:text-7xl text-[50px] lg:leading-[90%] leading-[113%] tracking-[-2.899px] ff-cormorant mb-8 lg:mb-24"
              text="Sancia"
              defaultColor="#ac835e"
            />
            <div className="w-full lg:w-10/12">
              {CONTACTS.map((contact: Contact, i: number) => (
                <ContactsList
                  key={i}
                  icon={contact.icon}
                  description={contact.description}
                  contact={contact.contact}
                  link={contact.link}
                />
              ))}
              <Button
                color="bg-nightblue text-cream hover:!text-[#181d24] hover:!bg-transparent"
                text={t("discover-more")}
              ></Button>
            </div>
          </div>
          {/* balcone */}
          <div className="naples-page-prlx parallax w-full md:w-6/12 lg:w-7/12">
            <img
              src={Balcony}
              alt="Prix Naples"
              className="w-[285px] lg:w-[570px] absolute top-[10%] lg:top-0 right-0 object-cover below-picture aspect-square"
            />
          </div>
        </div>
      </section>
      {/* hospitality */}
      <section className="bg-cream pt-20 lg:pt-36">
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={t("hospitality")}
          defaultColor="#ac835e"
        />
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={t("delicate")}
          defaultColor="#181d24"
        />
        <div className="flex items-center justify-center">
          <MainTitleUpper
            classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0 me-4"
            text={t("balance")}
            defaultColor="#181d24"
          />
          <MainTitleUpper
            classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
            text={t("of-warmth")}
            defaultColor="#ac835e"
          />
        </div>
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={t("of-form")}
          defaultColor="#ac835e"
        />
        <div className="flex items-center justify-center">
          <QuoteLine />
          <p className="ff-cormorant text-blue text-[1.375rem] tracking-[-0.44px] leading-[128%]">
            Sheila Ostrander
          </p>
        </div>
        <div className="bg-ospitality bg-cover mt-[-5rem]"></div>
      </section>
      <Footer />
    </>
  );
}
export default HomePage;
