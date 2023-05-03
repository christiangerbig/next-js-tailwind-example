import Image from "next/image";
import logo from "../../public/images/Tribar.svg.png";

interface TileKeyDataDoubleProps {
  amount: string;
  description: string;
}

const TileKeyDataDouble = ({ amount, description }: TileKeyDataDoubleProps) => {
  return (
    <div
      className={`
        col-span-2
        flex
        h-full
        w-full

        items-center
        justify-around
        rounded-2xl
        bg-white
        p-8
        md:max-h-[13.8125rem]
        lg:max-w-[29.375rem]
      `}
    >
      <div className="flex h-[11rem] flex-col items-start justify-start">
        <span
          className={`
            font-roboto-regular-900
            text-[5rem]
            leading-[7.75rem]
            tracking-normal
            text-debian-red
            opacity-100
            lg:text-[6.375rem]
          `}
        >
          {amount}
        </span>
        <span
          className={`
            w-48
            font-roboto-bold
            text-[1.4rem]
            leading-[1.5625rem]
            tracking-normal
            text-haiti
            lg:text-[1.5625rem]
          `}
        >
          {description}
        </span>
      </div>
      <div className="ml-2 h-[9.3356rem] w-[7.6981rem]">
        <Image src={logo} alt="logo" className="h-full w-full opacity-100" />
      </div>
    </div>
  );
};

export default TileKeyDataDouble;
