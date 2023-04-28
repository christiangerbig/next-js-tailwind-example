interface TileHeadlineProps {
  headline: string;
}

const TileHeadline = ({ headline }: TileHeadlineProps): JSX.Element => {
  return (
    <header
      className={`
        col-span-1
        h-full
        max-h-[13.8125rem]
        w-full
        max-w-[13.8125rem]
        text-left
        font-roboto-bold
        text-[2.9375rem]
        leading-[3.25rem]
        text-white
      `}
    >
      <h1>{headline}</h1>
    </header>
  );
};

export default TileHeadline;
