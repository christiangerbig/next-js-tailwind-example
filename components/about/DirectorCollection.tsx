import {
  CardsDataDirectorsItem,
  useCardsDataDirectors,
} from "../../custom-hooks/useCardsDataDirectors";
import DirectorCard from "./DirectorCard";

const DirectorCollection = () => {
  const cardsDataDirectors = useCardsDataDirectors();

  return (
    <div
      className={`
        mb-52
        mt-24
        flex
        flex-wrap
        items-start
        justify-around
        lg:justify-between
      `}
    >
      {cardsDataDirectors.map(
        ({ image, name, description }: CardsDataDirectorsItem, index) => {
          return (
            <DirectorCard
              image={image}
              name={name}
              description={description}
              key={`${image}${index.toString()}`}
            />
          );
        }
      )}
    </div>
  );
};

export default DirectorCollection;
