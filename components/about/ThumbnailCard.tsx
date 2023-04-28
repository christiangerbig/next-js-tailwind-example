import Image, { StaticImageData } from "next/image";

interface ThumbnailCardProps {
  image: StaticImageData;
  subtitleHeadline: {
    line1: string;
    line2: string;
    line3: string;
  };
  subtext: string;
}

const ThumbnailCard = ({
  image,
  subtitleHeadline: { line1, line2, line3 },
  subtext,
}: ThumbnailCardProps): JSX.Element => {
  return (
    <div className="w-[29.275rem]">
      <div className="mb-0 h-[29.5rem] w-[29.375rem]">
        <Image
          src={image}
          alt="thumbnail"
          className={`
            h-full
            w-full
            rounded-[1.25rem]
            opacity-100
            shadow-bottom
            shadow-white
          `}
        />
      </div>
      <article className="mt-[2.8744rem] text-left tracking-normal text-white">
        <header
          className={`
            mb-5
            p-1
            font-roboto-bold
            text-[2.0625rem]
            leading-[2.3125rem]
            tracking-normal
            opacity-100
          `}
        >
          <h1>{line1}</h1>
          <h1>{line2}</h1>
          <h1>{line3}</h1>
        </header>
        <div className="mt-0 p-0.5 text-[1.625rem] leading-[2.0625rem]">
          <p>{subtext}</p>
        </div>
      </article>
    </div>
  );
};

export default ThumbnailCard;
