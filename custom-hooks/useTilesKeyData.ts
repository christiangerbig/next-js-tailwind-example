import { useRouter } from "next/router";
import { Locale } from "@/typeDefinitions";
import translations from "../public/locale/translations";

export interface TilesKeyDataItem {
  amount: string;
  description: string;
}

export const useTilesKeyData = (): TilesKeyDataItem[] => {
  const { locale } = useRouter();
  const {
    about: {
      texts: {
        pahnkeGroup: {
          employeesTile,
          brandingsTile,
          locationsTile,
          countriesTile,
          experienceTile,
        },
      },
    },
  } = translations[locale as Locale];

  return [
    {
      amount: employeesTile.amount,
      description: employeesTile.description,
    },
    {
      amount: brandingsTile.amount,
      description: brandingsTile.description,
    },
    {
      amount: locationsTile.amount,
      description: locationsTile.description,
    },
    {
      amount: countriesTile.amount,
      description: countriesTile.description,
    },
    {
      amount: experienceTile.amount,
      description: experienceTile.description,
    },
  ];
};
