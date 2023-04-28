import Image, { StaticImageData } from "next/image";

interface DirectorCardProps {
  image: StaticImageData;
  name: string;
  description: string;
}

const DirectorCard = ({
  image,
  name,
  description,
}: DirectorCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-0 h-[17.3125rem] w-[17.3125rem]">
        <Image
          src={image}
          alt="managing director"
          className="h-full w-full rounded-full opacity-100"
        />
      </div>
      <div
        className={`
          mt-8
          flex
          h-full
          max-h-[4.25rem]
          w-full
          max-w-[10.625rem]
          flex-col
          items-center
          justify-start
          text-white
        `}
      >
        <header className="text-center font-roboto-regular-900 text-[1.3125rem] leading-[1.3125rem] tracking-normal">
          <h2>{name}</h2>
        </header>
        <div className="text-center leading-[1.3125rem] tracking-normal text-[1.0625remn]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
