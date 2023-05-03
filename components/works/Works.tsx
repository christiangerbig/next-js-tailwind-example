import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Caroussel from "./Caroussel";

const Works = () => {
  const { locale } = useRouter();
  const {
    works: {
      texts: { headline },
    },
  } = translations[locale as Locale];

  return (
    <div className="mb-0 mt-[9.4475rem] w-full max-w-[85rem] bg-haiti">
      <header className="mb-0 flex items-center justify-center text-white">
        <div
          className={`
            flex 
            items-center 
            justify-center 
            font-roboto-bold 
            text-[1.9rem] 
            leading-[3.375rem] 
            tracking-[0.6125rem] 
            lg:text-[3.0625rem]
          `}
        >
          <FontAwesomeIcon icon={faStar} className="logo-sm mr-4 lg:logo-md" />
          <h1>{headline}</h1>
          <FontAwesomeIcon icon={faStar} className="logo-sm ml-2 lg:logo-md" />
        </div>
      </header>
      <Caroussel />
    </div>
  );
};

export default Works;
