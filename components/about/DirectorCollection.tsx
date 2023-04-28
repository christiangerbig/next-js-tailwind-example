import {
  CardsDataDirectorsItem,
  useCardsDataDirectors,
} from "../../custom-hooks/useCardsDataDirectors";
import DirectorCard from "./DirectorCard";

const DirectorCollection = (): JSX.Element => {
  const cardsDataDirectors = useCardsDataDirectors();

  return (
    <div
      className={`
        mt-24
        mb-52
        flex
        flex-wrap
        items-start
        justify-around
        lg:justify-between
      `}
    >
      {cardsDataDirectors.map(
        (
          { image, name, description }: CardsDataDirectorsItem,
          index
        ): JSX.Element => {
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
