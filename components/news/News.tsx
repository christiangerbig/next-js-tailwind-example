import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ThumbnailCardCollection from "./ThumbnailCardCollection";

const News = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    news: { texts, button },
  } = translations[locale as Locale];

  return (
    <div
      className={`
        mb-0
        mt-[13rem]
        w-full
        max-w-[85rem]
        bg-topaz
        lg:rounded-[3.125rem]
      `}
    >
      <header
        className={`
          mb-0
          mt-[7.4638rem]
          flex
          items-center
          justify-center
          text-white
        `}
      >
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
          <h1>{texts.headline}</h1>
          <FontAwesomeIcon icon={faStar} className="logo-sm ml-2 lg:logo-md" />
        </div>
      </header>
      <ThumbnailCardCollection />
      <div className="relative -bottom-9 flex items-center justify-center">
        <button
          type="button"
          className={`
            rounded-[1rem]
            bg-white
            px-8
            py-2
            font-roboto-regular-900
            text-[1.1rem]
            leading-[2.5rem]
            tracking-[0.3463rem]
            text-topaz
            lg:rounded-full
            lg:px-16
            lg:py-4
            lg:text-[2.0625rem]
          `}
        >
          {button.text}
        </button>
      </div>
    </div>
  );
};

export default News;
