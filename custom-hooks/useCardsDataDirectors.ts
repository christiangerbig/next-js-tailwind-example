import { useRouter } from "next/router";
import { Locale } from "@/typeDefinitions";
import translations from "../public/locale/translations";
import { StaticImageData } from "next/image";
import managingDirectorImage1 from "../public/images/Businessportrait1.jpg";
import managingDirectorImage2 from "../public/images/Businessportrait2.jpg";
import managingDirectorImage3 from "../public/images/startup-g35f727787_640.jpg";

export interface CardsDataDirectorsItem {
  image: StaticImageData;
  name: string;
  description: string;
}

export const useCardsDataDirectors = (): CardsDataDirectorsItem[] => {
  const { locale } = useRouter();
  const {
    about: {
      texts: {
        managingDirectors: { member1, member2, member3 },
      },
    },
  } = translations[locale as Locale];

  return [
    {
      image: managingDirectorImage1,
      name: member1.name,
      description: member1.description,
    },
    {
      image: managingDirectorImage2,
      name: member2.name,
      description: member2.description,
    },
    {
      image: managingDirectorImage3,
      name: member3.name,
      description: member3.description,
    },
  ];
};
