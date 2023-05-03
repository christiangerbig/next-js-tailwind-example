import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import translations from "../../public/locale/translations";
import Caroussel from "./Caroussel";
import TileCollection from "./TileCollection";
import ThumbnailCardCollection from "./ThumbnailCardCollection";
import DirectorCollection from "./DirectorCollection";

const About = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    about: {
      texts: { headline, managingDirectors },
    },
  } = translations[locale as Locale];

  return (
    <>
      <section
        className={`
          mb-0
          w-full
          max-w-[85rem]
          rounded-t-[2.9375rem]
          bg-debian-red
        `}
      >
        <header
          className={`
            mb-0"
            mt-[10.4113rem]
            flex
            items-center
            justify-center
            text-white
          `}
        >
          <div
            className={`
              leading-[3.375rem 
              flex 
              items-center 
              justify-center 
              font-roboto-bold 
              text-[3.0625rem] 
              tracking-[0.6125rem] 
              opacity-100`}
          >
            <FontAwesomeIcon icon={faStar} className="logo-md mr-4" />
            <h1>{headline}</h1>
            <FontAwesomeIcon icon={faStar} className="logo-md ml-2" />
          </div>
        </header>
        <div className="w-full max-w-[60.7081rem] md:mx-auto">
          <ThumbnailCardCollection />
          <div
            className={`
              w-full,
              h-[3px],
              border-b-4,
              mb-0"
              mt-[2.8744rem]
              max-w-[60.7081rem]
              border-dashed
              border-white
            `}
          />
        </div>
        <TileCollection />
      </section>

      <Caroussel />

      <section className="mb-0 w-full max-w-[85rem] rounded-b-[2.9375rem] bg-debian-red">
        <div
          className={`
            items-between
            mx-auto
            mt-40
            flex
            w-full
            max-w-[60.7081rem]
            flex-col
            justify-center
          `}
        >
          <header
            className={`
              text-left
              font-roboto-bold
              text-[2.9375rem]
              leading-[3.25rem]
              tracking-normal
              text-white
              opacity-100
            `}
          >
            <h1>{managingDirectors.headline}</h1>
          </header>
          <DirectorCollection />
        </div>
      </section>
    </>
  );
};

export default About;
