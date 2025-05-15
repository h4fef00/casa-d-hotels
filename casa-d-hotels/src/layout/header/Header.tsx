// Images
import logo from "../../assets/logos/naples-logo.svg";
// Translate
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";

type Prop = {
  contacts: string;
};

function Header({ contacts }: Prop) {
  // function toggleMenu(event) {
  //   const navIcon = event.currentTarget.querySelector("#nav-icon");
  //   const menu = event.currentTarget.querySelector("#menu-casaD");
  //   navIcon.classList.toggle("open");
  //   menu.classList.toggle("menu-out");
  // }
  return (
    <header className="uppercase w-full h-full">
      <nav className="position-relative mt-12 mx-auto px-[1.5rem] max-w-screen-xl ff-futura text-cream text-xs flex flex-row justify-between items-center basis-auto lg:basis-1/3">
        {/* menu e contatti */}
        <div className="flex justify-end items-center">
          <div className="position-relative">
            <button
              // onClick={toggleMenu}
              className="flex border border-[#CA9D75] rounded-[60px] py-[0.8rem] px-[1.25rem]"
            >
              <div id="nav-icon" className="cursor-pointer">
                <span className="cursor-pointer"></span>
                <span className="cursor-pointer"></span>
                <span className="cursor-pointer"></span>
              </div>
              {/* <div
                id="menu-casaD"
                className="absolute mt-4 w-88-vw min-w-max min-h-[100px] right-0 lg:left-0 bg-nightblue text-cream tk-futura-pt text-14 font-weight-450 tracking-2 leading-171 py-3 border border-tan duration-300 rounded-lg menu-in menu-out"
              >
                ciao
              </div> */}
              <span className="ml-[6px] cursor-pointer">MENU</span>
            </button>
          </div>
          <a className="inline-block ml-[1.8rem]">{contacts}</a>
        </div>

        {/* logo sito */}
        <div>
          <img src={logo} alt="Logo casa D. hotels" />
        </div>
        {/* numeri + cambio lingua */}
        <div className="basis-1/3 flex items-center justify-between">
          <a href="tel:+390810197852">+39 081 01 97 852</a>
          <a href="tel:+393406007575">+39 340 60 07 575</a>
          <div>
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
