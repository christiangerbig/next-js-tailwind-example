interface TileKeyDataProps {
  amount: string;
  description: string;
}

const TileKeyData = ({ amount, description }: TileKeyDataProps) => {
  return (
    <div
      className={`
        col-span-1
        flex
        h-full
        max-h-[13.8125rem]
        w-full
        max-w-[13.8125rem]
        items-center
        justify-center
        rounded-2xl
        bg-white
        p-8
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
            w-20
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
    </div>
  );
};

export default TileKeyData;
