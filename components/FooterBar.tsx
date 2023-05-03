import { useRouter } from "next/router";
import { Locale } from "../typeDefinitions";
import translations from "../public/locale/translations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStairs } from "@fortawesome/free-solid-svg-icons";

const FooterBar = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    footer: {
      texts: { title },
    },
  } = translations[locale as Locale];

  return (
    <footer className="bg-white">
      <div className="mb-0 flex flex-row">
        <div className="h-[0.9819rem] basis-1/6 bg-french-rose" />
        <div className="h-[0.9819rem]/ basis-1/6 bg-tealish-green" />
        <div className="h-[0.9819rem] basis-1/6 bg-burning-orange" />
        <div className="h-[0.9819rem] basis-1/6 bg-bright-neon-pink" />
        <div className="h-[0.9819rem]  basis-1/6 bg-bright-sky-blue" />
        <div className="h-[0.9819rem] basis-1/6 bg-coral-red" />
      </div>
      <div
        className={`
          mt-[4.54813rem]
          mb-[4.54813rem]
          flex
          items-center
          justify-center
          text-haiti
        `}
      >
        <div
          className={`
          flex items-center justify-center 
            bg-inherit
            flex
            h-[5.375rem]
            w-[13.8125rem]
            items-center
            justify-center
            text-left
            font-roboto-regular-900
            text-[2.5625rem]
            leading-[2.1875rem]
            tracking-[0.5125rem]
            opacity-100
          `}
        >
          <FontAwesomeIcon icon={faStairs} className="logo-lg mr-4" />
          <span className="whitespace-nowrap">{title}</span>
          <FontAwesomeIcon icon={faStairs} className="logo-lg ml-2" />
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
