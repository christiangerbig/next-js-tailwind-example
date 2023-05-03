import {
  CardsDataContactItem,
  useCardsDataContact,
} from "../../custom-hooks/useCardsDataContact";
import ThumbnailCard from "./ThumbnailCard";

const ThumbnailCardCollection = (): JSX.Element => {
  const cardsDataContact = useCardsDataContact();

  return (
    <div className="mx-auto mt-[8.2225rem] w-full lg:max-w-[56rem]">
      {cardsDataContact.map(
        (
          { image, name, description, alignment }: CardsDataContactItem,
          index
        ): JSX.Element => {
          return (
            <ThumbnailCard
              image={image}
              name={name}
              description={description}
              alignment={alignment}
              key={`${image}${index.toString()}`}
            />
          );
        }
      )}
    </div>
  );
};

export default ThumbnailCardCollection;
