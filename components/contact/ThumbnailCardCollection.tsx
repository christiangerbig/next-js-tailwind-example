import {
  CardsDataContactItem,
  useCardsDataContact,
} from "../../custom-hooks/useCardsDataContact";
import ThumbnailCard from "./ThumbnailCard";

const ThumbnailCardCollection = () => {
  const cardsDataContact = useCardsDataContact();

  return (
    <div className="mx-auto mt-14 mt-[8.2225rem] lg:w-full lg:max-w-[56rem]">
      {cardsDataContact.map(
        (
          { image, name, description, alignment }: CardsDataContactItem,
          index
        ) => {
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
