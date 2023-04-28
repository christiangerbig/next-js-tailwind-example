import { useRouter } from "next/router";
import { Locale } from "@/typeDefinitions";
import translations from "../public/locale/translations";
import { StaticImageData } from "next/image";
import contactImage1 from "../public/images/Businessportrait1.jpg";
import contactImage2 from "../public/images//ff2e21ce1088b767844327d75bbf9030.jpeg";
import contactImage3 from "../public/images//Businessportrait2.jpg";

export interface CardsDataContactItem {
  image: StaticImageData;
  name: string;
  description: string;
  alignment: {
    imagePosition: string;
    textContainerPosition: string;
    textPosition: string;
  };
}

export const useCardsDataContact = (): CardsDataContactItem[] => {
  const { locale } = useRouter();
  const {
    contact: {
      texts: { contact1, contact2, contact3 },
    },
  } = translations[locale as Locale];

  return [
    {
      image: contactImage1,
      name: contact1.name,
      description: contact1.description,
      alignment: {
        imagePosition: "left",
        textContainerPosition: "right",
        textPosition: "left",
      },
    },
    {
      image: contactImage2,
      name: contact2.name,
      description: contact2.description,
      alignment: {
        imagePosition: "right",
        textContainerPosition: "left",
        textPosition: "right",
      },
    },
    {
      image: contactImage3,
      name: contact3.name,
      description: contact3.description,
      alignment: {
        imagePosition: "left",
        textContainerPosition: "right",
        textPosition: "left",
      },
    },
  ];
};
