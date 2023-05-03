import {
  CardsDataAboutItem,
  useCardsDataAbout,
} from "../../custom-hooks/useCardsDataAbout";
import ThumbnailCard from "./ThumbnailCard";

const ThumbnailCollection = () => {
  const cardsDataAbout = useCardsDataAbout();

  return (
    <div
      className={`
        mb-0
        mt-[7.5619rem]
        flex
        flex-wrap
        items-start
        justify-center
        md:justify-around
        lg:justify-between
      `}
    >
      {cardsDataAbout.map(
        (
          {
            image,
            headline1,
            headline2,
            headline3,
            subtext,
          }: CardsDataAboutItem,
          index
        ) => {
          return (
            <ThumbnailCard
              image={image}
              subtitleHeadline={{
                line1: headline1,
                line2: headline2,
                line3: headline3,
              }}
              subtext={subtext}
              key={`${image}${index.toString()}`}
            />
          );
        }
      )}
    </div>
  );
};

export default ThumbnailCollection;
