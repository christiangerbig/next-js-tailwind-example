import Image, { StaticImageData } from "next/image";

interface CarousselElementProps {
  image: StaticImageData;
  subtext: {
    subtext1: string;
    subtext2: string;
  };
}

const CarousselElement = ({
  image,
  subtext: { subtext1, subtext2 },
}: CarousselElementProps): JSX.Element => {
  return (
    <div className="mb-0 w-full max-w-[75.875rem]">
      <div className="mb-0 h-[41.6875rem] rounded-[2.0625rem]">
        <Image
          src={image}
          alt="chips"
          className="h-full w-full rounded-[0.9375rem] opacity-100"
        />
      </div>
      <div className="mt-8 flex items-center justify-center text-white">
        <div className="font-roboto-regular-900 text-[2.0625rem] leading-[2.3125rem] tracking-normal">
          <span>{subtext1}</span>
        </div>
        <div className="ml-4 text-[2.0625rem] italic tracking-normal opacity-100">
          <span>{subtext2}</span>
        </div>
      </div>
    </div>
  );
};

export default CarousselElement;
