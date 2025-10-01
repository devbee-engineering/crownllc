
export type Location = {
    title: string;
    address: string;
    pobox: string;
    phone: string;
    email: string;
    image: string;
};
  
export const locations: Location[] = [
    {
      title: "UAE – Abu Dhabi",
      address: "Office 201, Al Waratha Building, Block 3, Khaleefa St",
      pobox: "324, Abu Dhabi — United Arab Emirates",
      phone: "+971 (0)2 626 7930",
      email: "dccauh@dcc-group.com",
      image: "/assets/locations/abu-dhabi.jpg",
    },
    {
      title: "KSA – Riyadh",
      address: "Tatweer Towers, Tower No 1, Ground Floor, King Fahad Rd",
      pobox: "25232, Riyadh 11466 — Kingdom of Saudi Arabia",
      phone: "+966 (0)11 200 8267",
      email: "dccksa@dcc-group.com",
      image: "/assets/locations/riyadh.jpg",
    },
];
