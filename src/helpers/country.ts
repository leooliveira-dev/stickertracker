import { compact, uniq } from "lodash";
import stickers from "../content/stickers.json";
import countries from "../content/countries.json";

export const getCountry = (code: string) => {
  return countries.find(country => country.code === code);
}

export const getCountryName = (code: string, language?: "en" | "br") => {
  const country = getCountry(code);
  return country ? language === "br" ? country.br : country.en : "";
}

export const getAllCountries = () => {
  const allCountries = stickers.map((sticker) => {
    if (sticker.country) {
      return getCountry(sticker.country);
    }
  });
  return compact(uniq(allCountries));
}

export const getFlagClass = (code: string) => {
  return `fi fi-${code.toLocaleLowerCase()}`;
}