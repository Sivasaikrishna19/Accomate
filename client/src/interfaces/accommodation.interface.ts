export interface IAccommodation {
  type: "temporary" | "permanent";
  communityName: string;
  rent: number;
  distanceFromUniversity: number;
  area: number;
  numberOfBed: number;
  numberOfBath: number;
  spotsAvailable: number;
  startDate: string;
  endDate: string;
  gender: "male" | "female";
  lastUpdatedAt: string;
  smokingAllowed: boolean;
  alcoholAllowed: boolean;
  address: string;
  status: "open" | "close";
  amenities: Array<string>;
  postedBy: {
    name: string;
    phone: string;
    email: string;
  };
  postedOn: string;
}
