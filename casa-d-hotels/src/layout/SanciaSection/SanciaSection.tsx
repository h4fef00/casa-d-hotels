// Data
import { CONTACTS } from "../../data/contacts";
// Models
import { Contact } from "../../models/contact.model";
// Types
import { Prop } from "../../models/prop.type";
// Components
import Button from "../../components/Button/Button";
import ContactsList from "../../components/ContactsList/ContactsList";
import MainTitleUpper from "../../components/MainTitleUpper/MainTitleUpper";
import QuoteLine from "../../components/QuoteLine/QuoteLine";
// Images
import Balcony from "../../assets/images/prlx-naples-bottom-img.jpg";

function SanciaSection({text}:Prop) {
  return (
    <section className="bg-cream py-14 lg:py-25">
      <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* lista contatti */}
        <div className="w-full md:w-fit">
          {/* casa d */}
          <div className="flex items-center my-[22px]">
            <QuoteLine />
            <p className="ff-futura uppercase font-normal text-sm tracking-[1.12px] leading-[128%] text-blue">
              <span className="mr-3">{text[0]}</span>
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
              text={text[1]}
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
  );
}
export default SanciaSection;
