import Image, { StaticImageData } from "next/image";

interface CarousselElementProps {
  image: StaticImageData;
  text: string;
  subtext: string;
}

const CarousselElement = ({ image, text, subtext }: CarousselElementProps) => {
  return (
    <div className="flex-column flex flex-wrap items-center justify-center">
      <div className="lg:h-[27.375rem] lg:w-[27.375rem]">
        <Image
          src={image}
          alt="portrait"
          className={`
            h-full
            w-full
            opacity-100
            lg:rounded-[0.9375rem]
            lg:shadow-bottom-right
            lg:shadow-debian-red
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
              mb-1
              mt-4
              h-[12.375rem]
              w-full text-left
              text-[1.5rem]
              leading-[2.125rem]
              tracking-normal
              opacity-100
              md:mb-0
              lg:mb-20
              lg:max-w-[26.5625rem]
              lg:text-[1.75rem]
            `}
          >
            <p>{text}</p>
          </div>
          <div className="h-[3.4375rem] w-full lg:max-w-[23.625rem]">
            <span
              className={`
                h-full
                text-left
                font-roboto-bold
                text-[1.3rem]
                leading-[1.875rem]
                tracking-normal
                opacity-100
                lg:text-[1.5625rem]
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
