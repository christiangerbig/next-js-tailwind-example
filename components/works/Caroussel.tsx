import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/images/crisps-gbb47bb1f7_640.jpg";
import ArrowLeft from "../helpers/ArrowLeft";
import ArrowRight from "../helpers/ArrowRight";
import CarousselElement from "./CarousselElement";

const Caroussel = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    works: {
      texts: {
        caroussel: { element1 },
      },
    },
  } = translations[locale as Locale];

  return (
    <div className="mt-[6.0269rem] mb-0">
      <div
        className={`
          flex
          h-[43.375rem]
          w-full
          max-w-[91.375rem]
          items-center
          justify-between
        `}
      >
        <button type="button" className="-mt-20">
          <ArrowLeft />
        </button>
        <CarousselElement
          image={image}
          subtext={{
            subtext1: element1.subtext1,
            subtext2: element1.subtext2,
          }}
        />
        <div
          className={`
            -mt-12
            flex
            h-[41.6875rem]
            flex-col
            items-start
            justify-start
          `}
        >
          <div className="flex basis-1/3 flex-col items-start justify-start">
            <button type="button">
              <FontAwesomeIcon
                icon={faMaximize}
                className="text-5xl text-white"
              />
            </button>
            <button type="button">
              <FontAwesomeIcon
                icon={faGripHorizontal}
                className="mt-3 text-5xl text-white"
              />
            </button>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center">
            <button type="button" className="-mt-8">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
