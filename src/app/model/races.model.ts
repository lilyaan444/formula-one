export interface Races {
  Circuit: {
    Location: {
      country: string;
      lat: string;
      locality: string;
      long: string;
    };
    circuitId: string;
    circuitName: string;
    url: string;
  };
  Location: string;
  country: string;
  lat: string;
  long: string;
  locality: string;
  circuitID: string;
  circuitName: string;
  url: string;
  raceName: string;
  id: string;
  season: string;
  isFavorite: boolean;
  date: string;
  round: string;
  time: string;
  __collections__: Record<string, unknown>;
}
