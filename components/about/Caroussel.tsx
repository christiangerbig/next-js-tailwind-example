import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import ArrowLeftSolid from "../helpers/ArrowLeftSolid";
import ArrowRightSolid from "../helpers/ArrowRightSolid";
import CarousselElement from "./CarousselElement";
import businessPartner from "../../public/images/Businessportrait1.jpg";

const Caroussel = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    about: {
      texts: {
        caroussel: {
          element1: { subtext, text },
        },
      },
    },
  } = translations[locale as Locale];

  return (
    <div
      className={`
        pr-20"
        flex
        h-full
        w-full
        max-w-[91.375rem]
        flex-wrap
        items-center
        justify-around
        rounded-2xl
        bg-white
        pt-[7.125rem]    
        pb-[8.875rem]
        pl-20
      `}
    >
      <button type="button" className="py-8">
        <ArrowLeftSolid />
      </button>
      <CarousselElement image={businessPartner} subtext={subtext} text={text} />
      <button type="button" className="py-16">
        <ArrowRightSolid />
      </button>
    </div>
  );
};

export default Caroussel;
