import Image, { StaticImageData } from "next/image";

interface CarousselElementProps {
  image: StaticImageData;
  text: string;
  subtext: string;
}

const CarousselElement = ({
  image,
  text,
  subtext,
}: CarousselElementProps): JSX.Element => {
  return (
    <div className="flex-column flex flex-wrap items-center justify-center">
      <div className="h-[27.375rem] w-[27.375rem]">
        <Image
          src={image}
          alt="portrait"
          className={`
            h-full
            w-full
            rounded-[0.9375rem]
            opacity-100
            shadow-bottom-right
            shadow-debian-red
          `}
        />
      </div>
      <div>
        <div
          className={`
            ml-16
            mr-12
            flex
            h-[27.375rem]
            flex-col items-start
            justify-around
          text-haiti
          `}
        >
          <div
            className={`
              mb-20
              h-[12.375rem] w-full
              max-w-[26.5625rem]
              text-left
              text-[1.75rem]
              leading-[2.125rem]
              tracking-normal
              opacity-100
              md:mb-0
            `}
          >
            <p>{text}</p>
          </div>
          <div className="h-[3.4375rem] w-full max-w-[23.625rem]">
            <span
              className={`
                h-full
                text-left
                font-roboto-bold
                text-[1.5625rem]
                leading-[1.875rem]
                tracking-normal
                opacity-100
              `}
            >
              {subtext}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarousselElement;
