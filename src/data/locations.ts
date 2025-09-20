
export type Location = {
    title: string;
    addressLines: string[];
    pobox: string;
    country: string;
    phone: string;
    email: string;
    image: string;
};
  
export const locations: Location[] = [
    {
      title: "UAE - Dubai",
      addressLines: ["Building No 29, St 13", "Industrial Area 1, Ras Al Khor"],
      pobox: "PO Box 232, Dubai",
      country: "United Arab Emirates",
      phone: "+971 (0)4 333 7100",
      email: "dcc@dcc-group.com",
      image: "/assets/contact/contact_image-1.png",
    },
    {
      title: "UAE - Abu Dhabi",
      addressLines: ["Office 201, Al Waratha Building", "Block 3, Khaleefa St"],
      pobox: "PO Box 324, Abu Dhabi",
      country: "United Arab Emirates",
      phone: "+971 (0)2 626 7930",
      email: "dccauh@dcc-group.com",
      image: "/assets/contact/contact_image-2.png",
    },
    {
      title: "KSA - Riyadh",
      addressLines: ["Tatweer Towers, Tower No 1", "Ground Floor, King Fahad Rd"],
      pobox: "PO Box 25232, Riyadh 11466",
      country: "Kingdom of Saudi Arabia",
      phone: "+966 (0)11 200 8267",
      email: "dccksa@dcc-group.com",
      image: "/assets/contact/contact_image-3.png",
    },
];
