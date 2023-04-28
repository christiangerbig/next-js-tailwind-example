import { useRouter } from "next/router";
import { Locale } from "../../typeDefinitions";
import translations from "../../public/locale/translations";
import {
  TilesKeyDataItem,
  useTilesKeyData,
} from "../../custom-hooks/useTilesKeyData";
import TileHeadline from "./TileHeadline";
import TileKeyData from "./TileKeyData";
import TileKeyDataDouble from "./TileKeyDataDouble";

const TileCollection = (): JSX.Element => {
  const { locale } = useRouter();
  const {
    about: {
      texts: {
        pahnkeGroup: { headlineTile, mediaVolumeTile },
      },
    },
  } = translations[locale as Locale];
  const tilesKeyData = useTilesKeyData();

  return (
    <div
      className={`
        mx-auto
        mt-24
        mb-40
        grid
        h-full
        w-full
        max-w-[60.7081rem]
        grid-flow-row
        grid-cols-3
        gap-6
        md:grid-cols-4
      `}
    >
      <TileHeadline headline={headlineTile.text} />
      {tilesKeyData.map(
        ({ amount, description }: TilesKeyDataItem, index): JSX.Element => {
          return (
            <TileKeyData
              amount={amount}
              description={description}
              key={`${description}${index.toString()}`}
            />
          );
        }
      )}
      <TileKeyDataDouble
        amount={mediaVolumeTile.amount}
        description={mediaVolumeTile.description}
      />
    </div>
  );
};

export default TileCollection;
