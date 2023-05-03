import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ThumbnailCardCollection from "./ThumbnailCardCollection";

const Contact = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    contact: {
      texts: { headline },
    },
  } = translations[locale as Locale];

  return (
    <div className="mt-60 mb-52 w-full max-w-[85rem]">
      <header
        className={`
          mt-[7.4638rem]
          mb-0
          flex
          items-center
          justify-center
          text-white
        `}
      >
        <FontAwesomeIcon icon={faStar} className="logo-md mr-4" />
        <div className="flex items-center justify-center  font-roboto-bold text-[3.0625rem] leading-[3.375rem] tracking-[0.6125rem]">
          <h1>{headline}</h1>
          <FontAwesomeIcon icon={faStar} className="logo-md ml-2" />
        </div>
      </header>
      <ThumbnailCardCollection />
    </div>
  );
};

export default Contact;
