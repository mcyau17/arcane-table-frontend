export interface ScryfallCard {
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
}

export declare function searchCards(query: string): Promise<ScryfallCard[]>;
export declare function getCardById(id: string): Promise<ScryfallCard>;
