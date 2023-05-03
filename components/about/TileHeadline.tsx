interface TileHeadlineProps {
  headline: string;
}

const TileHeadline = ({ headline }: TileHeadlineProps): JSX.Element => {
  return (
    <header
      className={`
        col-span-1
        text-left
        font-roboto-bold
        text-[2.4rem]
        leading-[3.25rem]
        text-white
        lg:max-h-[13.8125rem]
        lg:max-w-[13.8125rem]
        lg:text-[2.9375rem]
      `}
    >
      <h1>{headline}</h1>
    </header>
  );
};

export default TileHeadline;
