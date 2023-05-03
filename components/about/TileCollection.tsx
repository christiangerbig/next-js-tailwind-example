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

const TileCollection = () => {
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
        mx-5
        mb-40
        mt-24
        grid
        h-full
        grid-flow-row
        grid-cols-2
        gap-6
        md:mx-auto
        md:max-w-[28.7081rem]
        lg:mx-28
        lg:max-w-[60.7081rem]
        lg:grid-cols-4
      `}
    >
      <TileHeadline headline={headlineTile.text} />
      {tilesKeyData.map(({ amount, description }: TilesKeyDataItem, index) => {
        return (
          <TileKeyData
            amount={amount}
            description={description}
            key={`${description}${index.toString()}`}
          />
        );
      })}
      <TileKeyDataDouble
        amount={mediaVolumeTile.amount}
        description={mediaVolumeTile.description}
      />
    </div>
  );
};

export default TileCollection;
