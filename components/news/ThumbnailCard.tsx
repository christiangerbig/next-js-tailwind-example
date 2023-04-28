import Image from "next/image";

interface ThumbnailCardProps {
  image: import("next/image").StaticImageData;
  headline: string;
  date: string;
  text: string;
}

const ThumbnailCard = ({
  image,
  headline,
  date,
  text,
}: ThumbnailCardProps): JSX.Element => {
  return (
    <div className="mt-12 mb-0 w-[21.625rem] bg-topaz">
      <div className="h-[21.625rem] w-[21.625rem]">
        <Image
          src={image}
          alt="news"
          className="h-full w-full rounded-[1.1875rem]"
        />
      </div>
      <article
        className={`
          bg-inherit
          mt-[1.5625rem]
          flex
          flex-col
          text-left
          text-white
        `}
      >
        <header>
          <div
            className={`
              mb-0
              h-[11.5rem]
              font-roboto-regular-900
              text-[2.375rem]
              leading-[2.875rem]
              tracking-normal
              opacity-100
            `}
          >
            <h1>{headline}</h1>
          </div>
          <div
            className={`
              mt-6
              mb-0
              text-[1.4375rem]
              leading-[1.8125rem]
              tracking-normal
              opacity-100
            `}
          >
            <span>{date}</span>
          </div>
        </header>
        <div className="mt-5 text-[1.4375rem] leading-[1.8125rem] tracking-normal opacity-100">
          <p>{text}</p>
        </div>
      </article>
    </div>
  );
};

export default ThumbnailCard;
