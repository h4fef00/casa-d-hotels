// Components
import MainTitleItalic from "../../components/MainTitleItalic/MainTitleItalic";
import MainTitleUpper from "../../components/MainTitleUpper/MainTitleUpper";
import Quote from "../../components/Quote/Quote";
// Layout components
import Slider from "../Slider/Slider";

type Prop = {
  text: string[];
};

function CitySection({ text }: Prop) {
  return (
    <>
      <section className="bg-nightblue text-left lg:py-[138px] pb-16 pt-10 max-w-full">
        <div className="inline-block margin-left-custom mb-8 md:mb-12">
          <MainTitleUpper
            classes=" text-[80px] ff-cormorant text-left leading-[73.207px]"
            text={text[0]}
            colorMap={{
              1: "#AC835E",
              2: "#AC835E",
            }}
          />
        </div>
        <div className="flex items-center margin-left-custom">
          <Quote quoteName="Alexandre Dumas" />
        </div>
        <div className="flex justify-center relative z-20">
          <MainTitleItalic
            fontSize="text-[200px]"
            text={text[1]}
            textColor="text-[#F6F3EC]"
          />
        </div>
        <div className="top-7rem relative z-10">
          <Slider />
        </div>
        <div className="mt-32 text-cream ff-futura text-sm px-6 md:px-0 font-weight-450 leading-150 uppercase w-auto md:w-4/12 lg:w-2/12 ml-auto margin-right-custom">
          <p
            className={
              "text-[#F6F3EC] text-sm ff-futura uppercase leading-[150%]"
            }
          >
            {text[2]
              .split("\n")
              .map((line: string, i: number) => (
                <span key={i} className=" block">
                  {line}
                </span>
              ))}
          </p>
        </div>
      </section>
    </>
  );
}
export default CitySection;
