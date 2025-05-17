// React
import { useTranslation } from "react-i18next";
// Layout components
import Footer from "../layout/Footer/Footer";
import HeadingSections from "../layout/HeadingSection/HeadingSections";
import CitySection from "../layout/CitySection/CitySection";
import CenterSection from "../layout/CenterSection/CenterSection";
import SanciaSection from "../layout/SanciaSection/SanciaSection";
import HospitalitySection from "../layout/HospitalitySection/HospitalitySection";

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
  const sanciaText = ["casa-d-center", "discover-more"];
  const hospitality = ["hospitality", "delicate", "balance", "of-warmth","of-form"];
  return (
    <>
      {/* header e prima section */}
      <HeadingSections text={headingText.map((text) => t(text))} />
      {/* sezione la citta */}
      <CitySection text={cityText.map((text) => t(text))} />
      {/* sezione centro storico */}
      <CenterSection text={centerText.map((text) => t(text))} />
      {/* sezione sancia*/}
      <SanciaSection text={sanciaText.map((text) => t(text))} />
      {/* hospitality */}
      <HospitalitySection text={hospitality.map((text) => t(text))} />
      <Footer />
    </>
  );
}
export default HomePage;
