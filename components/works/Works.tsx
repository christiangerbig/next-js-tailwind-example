import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Caroussel from "./Caroussel";

const Works = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    works: {
      texts: { headline },
    },
  } = translations[locale as Locale];

  return (
    <div className="mt-[9.4475rem] mb-0 w-full max-w-[85rem] bg-haiti">
      <header className="mb-0 flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faLocationDot} className="logo" />
        <div className="font-roboto-bold text-[3.0625rem] leading-[3.375rem] tracking-[0.6125rem]">
          <h1>{headline}</h1>
        </div>
      </header>
      <Caroussel />
    </div>
  );
};

export default Works;