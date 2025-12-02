import axios from "axios";

const SCRYFALL_API = "https://api.scryfall.com";

export async function searchCards(query: string) {
  const response = await axios.get(`${SCRYFALL_API}/cards/search`, {
    params: { q: query }
  });
  return response.data.data; // Scryfall returns { data: [...] }
}

export async function getCardById(id: string) {
  const response = await axios.get(`${SCRYFALL_API}/cards/${id}`);
  return response.data;
}

export type ScryfallCard = {
  id: string;
  name: string;
  image_uris?: {
    normal: string;
  };
  card_faces?: {
    image_uris: {
      normal: string;
    };
  }[];
};

