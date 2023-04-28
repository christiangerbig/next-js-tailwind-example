import { useRouter } from "next/router";
import { Locale } from "@/typeDefinitions";
import translations from "../public/locale/translations";
import { StaticImageData } from "next/image";
import newsImage1 from "../public/images/automotive-gd4b583aa7_640.jpg";
import newsImage2 from "../public/images/SPD.png";
import newsImage3 from "../public/images/hass_ist_keine_alternative.png";
import newsImage4 from "../public/images/Food.jpeg";
import newsImage5 from "../public/images/SPD.png";
import newsImage6 from "../public/images/startup-g35f727787_640.jpg";

export interface CardsDataNewsItem {
  image: StaticImageData;
  headline: string;
  date: string;
  text: string;
}

export const useCardsDataNews = (): CardsDataNewsItem[] => {
  const { locale } = useRouter();
  const {
    news: {
      texts: {
        newsElement1,
        newsElement2,
        newsElement3,
        newsElement4,
        newsElement5,
        newsElement6,
      },
    },
  } = translations[locale as Locale];

  return [
    {
      image: newsImage1,
      headline: newsElement1.headline,
      date: newsElement1.date,
      text: newsElement1.text,
    },
    {
      image: newsImage2,
      headline: newsElement2.headline,
      date: newsElement2.date,
      text: newsElement2.text,
    },
    {
      image: newsImage3,
      headline: newsElement3.headline,
      date: newsElement3.date,
      text: newsElement3.text,
    },
    {
      image: newsImage4,
      headline: newsElement4.headline,
      date: newsElement4.date,
      text: newsElement4.text,
    },
    {
      image: newsImage5,
      headline: newsElement5.headline,
      date: newsElement5.date,
      text: newsElement5.text,
    },
    {
      image: newsImage6,
      headline: newsElement6.headline,
      date: newsElement6.date,
      text: newsElement6.text,
    },
  ];
};
