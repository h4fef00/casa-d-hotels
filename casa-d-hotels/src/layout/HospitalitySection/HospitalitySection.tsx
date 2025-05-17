// Types
import { Prop } from "../../models/prop.type";
// Components
import MainTitleUpper from "../../components/MainTitleUpper/MainTitleUpper";
import QuoteLine from "../../components/QuoteLine/QuoteLine";

function HospitalitySection({text}:Prop) {
    return (
      <section className="bg-cream pt-20 lg:pt-36">
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={text[0]}
          defaultColor="#ac835e"
        />
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={text[1]}
          defaultColor="#181d24"
        />
        <div className="flex items-center justify-center">
          <MainTitleUpper
            classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0 me-4"
            text={text[2]}
            defaultColor="#181d24"
          />
          <MainTitleUpper
            classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
            text={text[3]}
            defaultColor="#ac835e"
          />
        </div>
        <MainTitleUpper
          classes="ff-cormorant font-normal lg:text-7xl text-[2.5rem] leading-[90%] tracking-[-2.899px] text-center uppercase px-12 lg:px-0"
          text={text[4]}
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
    );
}

export default HospitalitySection;