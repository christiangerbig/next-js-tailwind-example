import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ThumbnailCardCollection from "./ThumbnailCardCollection";

const News = () => {
  const { locale } = useRouter();
  const {
    news: { texts, button },
  } = translations[locale as Locale];

  return (
    <div
      className={`
        mt-[13rem]
        mb-0
        w-full
        max-w-[85rem]
        rounded-[3.125rem]
        bg-topaz
      `}
    >
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
        <div className="flex items-center justify-center font-roboto-bold text-[3.0625rem] leading-[3.375rem] tracking-[0.6125rem]">
          <FontAwesomeIcon icon={faStar} className="logo-md mr-4" />
          <h1>{texts.headline}</h1>
          <FontAwesomeIcon icon={faStar} className="logo-md ml-2" />
        </div>
      </header>
      <ThumbnailCardCollection />
      <div className="relative -bottom-9 flex items-center justify-center">
        <button
          type="button"
          className={`
            rounded-full
            bg-white
            px-16
            py-4
            font-roboto-regular-900
            text-[2.0625rem]
            leading-[2.5rem]
            tracking-[0.3463rem]
            text-topaz
          `}
        >
          {button.text}
        </button>
      </div>
    </div>
  );
};

export default News;
