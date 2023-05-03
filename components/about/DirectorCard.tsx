import Image, { StaticImageData } from "next/image";

interface DirectorCardProps {
  image: StaticImageData;
  name: string;
  description: string;
}

const DirectorCard = ({ image, name, description }: DirectorCardProps) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center lg:mb-0">
      <div className="mb-0 h-[16.5rem] lg:h-[17.3125rem] ">
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
          flex-col
          items-center
          justify-start
          text-white
        `}
      >
        <header className="text-center font-roboto-regular-900 text-[1.1rem] leading-[1.3125rem] tracking-normal lg:text-[1.3125rem]">
          <h2>{name}</h2>
        </header>
        <div className="text-center leading-[1.3125rem] tracking-normal text-[1.1remn] lg:text-[1.0625remn]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
