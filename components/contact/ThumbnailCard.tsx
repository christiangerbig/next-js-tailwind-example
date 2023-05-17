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
}: ThumbnailCardProps) => {
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
    <div className="lg:mt-20">
      <div
        className={`
          md:w-[23rem] 
          lg:w-[28rem] 
          md:h-[23rem] 
          lg:h-[28rem] 
          relative 
          z-20 
          ${alignImageContainer(imagePosition)}
        `}
      >
        <Image
          src={image}
          alt="portrait"
          className="lg:rounded-[1.1875rem] h-full w-full"
        />
      </div>
      <div
        className={`
          md:-mt-[22.3rem]
          lg:rounded-[1.1875rem]
          relative
          z-10
          mr-0
          flex
          h-[22.3rem]
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
