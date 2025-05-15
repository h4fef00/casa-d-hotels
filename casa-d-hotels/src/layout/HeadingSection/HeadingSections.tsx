// Components
import MainTitleItalic from "../../components/MainTitleItalic/MainTitleItalic";
import MainTitleUpper from "../../components/MainTitleUpper/MainTitleUpper";
import QuoteLine from "../../components/QuoteLine/QuoteLine";
// Layout components
import Header from "../header/Header";

type Prop = {
    text: string[]
}

function HeadingSections({text}:Prop) {
  return (
    <>
      <section className="bg-naples min-h-screen overflow-hidden flex flex-col items-center">
        <Header contacts={text[0]}></Header>
        <div className="px-6 flex flex-col items-center pt-24 pb-40">
          <div className="relative flex flex-col items-center">
            <a
              className="uppercase text-[#F6F3EC] text-14 font-normal"
              href="https://www.google.it/maps/place/Casa+D+Hotels/@40.8502661,14.2648163,20z/data=!4m26!1m16!4m15!1m6!1m2!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!2sCasa+D+Hotels!2m2!1d14.2654531!2d40.850263!1m6!1m2!1s0x133b083fc67c345b:0x971589bf168db351!2sVia+Regina+Sancia,+8%2F10+12,+80139+Napoli+NA!2m2!1d14.2654531!2d40.850263!3e0!3m8!1s0x133b09be2e2ef6ed:0x64383a7ff00d328d!5m2!4m1!1i2!8m2!3d40.850263!4d14.2654531!16s%2Fg%2F11x1bphcpn?hl=it&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
            >
              Via regina sarcia, 8/10-12 - Napoli (na)
            </a>
            <div className="my-[22px]">
              <QuoteLine />
            </div>
            <MainTitleUpper
              text={text[1]}
              classes=" text-[80px] ff-cormorant text-center leading-[73.207px]"
            />
            <div className="absolute top-[7rem] left-[21rem]">
              <MainTitleItalic
                fontSize="text-[200px]"
                text={text[2]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadingSections;
