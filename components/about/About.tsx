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
          bg-debian-red
          lg:rounded-t-[2.9375rem]
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
              ml-5 
              flex 
              items-center 
              justify-center 
              font-roboto-bold
              text-[1.9rem] 
              tracking-[0.6125rem] 
              opacity-100
              lg:ml-0
              lg:text-[3.0625rem]
              `}
          >
            <FontAwesomeIcon
              icon={faStar}
              className="logo-sm mr-4 lg:logo-md"
            />
            <h1>{headline}</h1>
            <FontAwesomeIcon
              icon={faStar}
              className="logo-sm ml-2 mr-4 lg:logo-md"
            />
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
          <hr className="border-dashed text-white" />
        </div>
        <TileCollection />
      </section>

      <Caroussel />

      <section className="mb-0 w-full max-w-[85rem] bg-debian-red lg:rounded-b-[2.9375rem]">
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
              ml-5
              text-left
              font-roboto-bold
              text-[1.9rem]
              leading-[3.25rem]
              tracking-normal
              text-white
              opacity-100
              lg:ml-0
              lg:text-[2.9375rem]
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
