import {
  CardsDataNewsItem,
  useCardsDataNews,
} from "../../custom-hooks/useCardsDataNews";
import ThumbnailCard from "./ThumbnailCard";

const ThumbnailCardCollection = () => {
  const cardsDataNews = useCardsDataNews();

  return (
    <div
      className={`
        mx-auto
        mt-[6.0706rem]
        mb-24
        flex
        w-full
        max-w-[68.5rem]
        flex-wrap
        items-start
        justify-center
        md:justify-around
        lg:justify-between
      `}
    >
      {cardsDataNews.map(
        (
          { image, headline, date, text }: CardsDataNewsItem,
          index
        ): JSX.Element => {
          return (
            <ThumbnailCard
              image={image}
              headline={headline}
              date={date}
              text={text}
              key={`${image}${index.toString()}`}
            />
          );
        }
      )}
    </div>
  );
};

export default ThumbnailCardCollection;
