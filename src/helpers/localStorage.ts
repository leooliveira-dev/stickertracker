import stickers from "../content/stickers.json";

export const getLocalProfile = (): Profile => {
  const profile = localStorage.getItem("profile");
  if (!profile) return {
    name: "",
    contact: {
      whatsapp: "",
      instagram: "",
      facebook: "",
    },
    collection: {
      stickers: stickers,
      extras: []
    }
  };
  return JSON.parse(profile);
}

export const saveLocalProfile = (profile: Profile) => {
  localStorage.setItem("profile", JSON.stringify(profile));
}
