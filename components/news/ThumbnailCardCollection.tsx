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
        mb-24
        flex
        w-full
        max-w-[68.5rem]
        flex-wrap
        items-start
        justify-center
        md:justify-around
        lg:mt-[6.0706rem]
        lg:justify-between
      `}
    >
      {cardsDataNews.map(
        ({ image, headline, date, text }: CardsDataNewsItem, index) => {
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
