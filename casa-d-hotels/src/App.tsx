import { useTranslation } from "react-i18next";
import "./App.css";
import MainTitleUpper from "./components/MainTitleUpper/MainTitleUpper";
import Header from "./layout/header/Header";
import MainTitleItalic from "./components/MainTitleItalic/MainTitleItalic";
import Quote from "./components/Quote/Quote";
import Slider from "./layout/Slider/Slider";

function App() {
  const { t } = useTranslation();
  return (
    <>
      {/* header e prima section */}
      <section className="bg-naples min-h-screen overflow-hidden flex flex-col items-center">
        <Header contacts={t("CONTACTS")}></Header>
        <div className="px-6 flex flex-col items-center pt-24 pb-40">
          <div className="relative flex flex-col items-center">
            <MainTitleUpper text={t("HEADING-1")} />
            <div className="absolute top-[7rem] left-[21rem]">
              <MainTitleItalic section="200" text={t("HEADING-NAPLES")} />
            </div>
          </div>
        </div>
      </section>
      {/* sezione la citta */}
      <section className="bg-nightblue text-left lg:pb-[12rem] pb-16 lg:py-[138px] pt-10 max-w-full">
        <div className="inline-block margin-left-custom mb-8 md:mb-12">
          <MainTitleUpper
            text={t("HEADING-2")}
            defaultColor="#F6F3EC"
            colorMap={{
              1: "#AC835E",
              2: "#AC835E",
            }}
            textAlign="text-left"
          />
        </div>
        <div className="flex items-center margin-left-custom">
          <Quote quoteName="Alexandre Dumas" />
        </div>
        <div className="flex justify-center relative z-20">
          <MainTitleItalic
            section="200"
            text={t("THE-CITY")}
            textColor="text-[#F6F3EC]"
          />
        </div>
        <div className="top-7rem relative z-10">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default App;
