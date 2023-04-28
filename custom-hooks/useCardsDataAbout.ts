import { useRouter } from "next/router";
import { Locale } from "@/typeDefinitions";
import translations from "../public/locale/translations";
import { StaticImageData } from "next/image";
import officePeople from "../public/images/entrepreneur-ga6f35d129_640.jpg";
import officeStillLife from "../public/images/pencils-gb64db67b1_640.jpg";

export interface CardsDataAboutItem {
  image: StaticImageData;
  headline1: string;
  headline2: string;
  headline3: string;
  subtext: string;
}

export const useCardsDataAbout = (): CardsDataAboutItem[] => {
  const { locale } = useRouter();
  const {
    about: {
      texts: { introduction1, introduction2 },
    },
  } = translations[locale as Locale];

  return [
    {
      image: officePeople,
      headline1: introduction1.headline1,
      headline2: introduction1.headline2,
      headline3: introduction1.headline3,
      subtext: introduction1.text,
    },
    {
      image: officeStillLife,
      headline1: introduction2.headline1,
      headline2: introduction2.headline2,
      headline3: introduction2.headline3,
      subtext: introduction2.text,
    },
  ];
};
