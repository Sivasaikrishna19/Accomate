import { IAccommodation } from "../interfaces/accommodation.interface";

export const data: Array<IAccommodation> = [
  {
    type: "temporary",
    communityName: "Avalon at Morrisson Park",
    rent: 3300,
    distanceFromUniversity: 1.3,
    area: 1250,
    numberOfBed: 2,
    numberOfBath: 2,
    spotsAvailable: 1,
    startDate: "2023-07-13T01:27:59+0000",
    endDate: "2023-10-13T01:27:59+0000",
    gender: "male",
    lastUpdatedAt: "2023-06-13T01:27:59+0000",
    smokingAllowed: false,
    alcoholAllowed: true,
    address: "190 ryland street",
    status: "open",
    amenities: ["gym", "jacuzzi", "pool", "lobby"],
    postedBy: {
      name: "Siva Sai Krishna",
      phone: "408-210-4147",
      email: "sivasaikrishna.ms@gmail.com",
    },
    postedOn: "2023-06-13T01:27:59+0000",
  },
];
