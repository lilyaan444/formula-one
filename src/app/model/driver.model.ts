export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  id: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
  isFavorite: boolean;
  __collections__?: Record<string, unknown>;
}
