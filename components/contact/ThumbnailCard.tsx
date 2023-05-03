import Image, { StaticImageData } from "next/image";

interface ThumbnailCardProps {
  image: StaticImageData;
  name: string;
  description: string;
  alignment: {
    imagePosition: string;
    textContainerPosition: string;
    textPosition: string;
  };
}

const ThumbnailCard = ({
  image,
  name,
  description,
  alignment: { imagePosition, textContainerPosition, textPosition },
}: ThumbnailCardProps): JSX.Element => {
  // Styles functions
  const alignImageContainer = (position: string): string => {
    return position === "left" ? "mr-auto" : "ml-auto";
  };

  const alignTextContainer = (position: string): string => {
    return position === "left" ? "justify-start" : "justify-end";
  };

  const alignText = (position: string): string => {
    return position === "left" ? "text-left self-start" : "text-right self-end";
  };

  return (
    <div className="mt-20">
      <div
        className={`relative z-20 h-[24.8125rem] w-[24.8125rem] ${alignImageContainer(
          imagePosition
        )}`}
      >
        <Image
          src={image}
          alt="portrait"
          className="h-full w-full rounded-[1.1875rem]"
        />
      </div>
      <div
        className={`
          relative
          z-10
          -mt-[22.3rem]
          mr-0
          flex
          h-[22.3rem]
          rounded-[1.1875rem]
          border
          border-smokey-grey
          bg-white
          px-[8rem]
          ${alignTextContainer(textContainerPosition)}
        `}
      >
        <article className="bg-inherit flex flex-col self-center text-haiti">
          <header
            className={`
              mb-0
              h-full
              max-h-[6.5625rem]
              w-full
              max-w-[12.5625rem]
              font-roboto-bold
              text-[3.0625rem]
              leading-[2.75rem]
              tracking-normal
              opacity-100
              ${alignText(textPosition)}
            `}
          >
            <h1>{name}</h1>
          </header>
          <div
            className={` 
              mb-0
              mt-4
              h-full
              max-h-[1.875rem]
              w-full
              max-w-[16.625rem]
              pb-20
              text-[1.5rem]
              leading-[1.875rem]
              tracking-normal
              ${alignText(textPosition)}
            `}
          >
            <span>{description}</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ThumbnailCard;
