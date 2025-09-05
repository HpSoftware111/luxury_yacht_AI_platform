export type Yacht = {
  id: number;
  name: string;
  type: string;
  location: string;
  pricePerDay: number;
  cabins: number;
  guests: number;
  length: number; // in meters
  year: number;
  description: string;
  images: string[];
  amenities: string[];
  mainImage: string;
};

export const yachts: Yacht[] = [
  {
    id: 1,
    name: "Serenity",
    type: "Superyacht",
    location: "Monaco",
    pricePerDay: 12000,
    cabins: 6,
    guests: 12,
    length: 72,
    year: 2021,
    description: "Experience ultimate luxury aboard Serenity. With its stunning design, spacious decks, and state-of-the-art amenities, it's the perfect choice for a lavish getaway in the Mediterranean.",
    mainImage: "https://picsum.photos/seed/serenity/800/600",
    images: [
      "https://picsum.photos/seed/serenity-1/1200/800",
      "https://picsum.photos/seed/serenity-2/1200/800",
      "https://picsum.photos/seed/serenity-3/1200/800",
      "https://picsum.photos/seed/serenity-4/1200/800",
    ],
    amenities: ["Jacuzzi", "Jet Ski", "WiFi", "Cinema Room", "Gym", "Swimming Platform"],
  },
  {
    id: 2,
    name: "Ocean Dream",
    type: "Motor Yacht",
    location: "St. Tropez, France",
    pricePerDay: 8500,
    cabins: 4,
    guests: 8,
    length: 45,
    year: 2022,
    description: "Ocean Dream is a modern and elegant motor yacht, ideal for family holidays or entertaining guests. Enjoy breathtaking views and five-star service.",
    mainImage: "https://picsum.photos/seed/oceandream/800/600",
    images: [
      "https://picsum.photos/seed/oceandream-1/1200/800",
      "https://picsum.photos/seed/oceandream-2/1200/800",
      "https://picsum.photos/seed/oceandream-3/1200/800",
    ],
    amenities: ["Jacuzzi", "WiFi", "Sun Deck", "Water Toys", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Azure King",
    type: "Sailing Yacht",
    location: "Santorini, Greece",
    pricePerDay: 5000,
    cabins: 3,
    guests: 6,
    length: 30,
    year: 2019,
    description: "Feel the wind in your sails aboard the Azure King. This classic sailing yacht offers an authentic and intimate seafaring experience through the beautiful Greek islands.",
    mainImage: "https://picsum.photos/seed/azureking/800/600",
    images: [
      "https://picsum.photos/seed/azureking-1/1200/800",
      "https://picsum.photos/seed/azureking-2/1200/800",
    ],
    amenities: ["Snorkeling Gear", "WiFi", "Outdoor Dining"],
  },
  {
    id: 4,
    name: "The Voyager",
    type: "Explorer Yacht",
    location: "Galapagos Islands",
    pricePerDay: 15000,
    cabins: 7,
    guests: 14,
    length: 60,
    year: 2020,
    description: "Built for adventure, The Voyager can take you to the most remote corners of the globe in style and comfort. Equipped for long-range cruising and exploration.",
    mainImage: "https://picsum.photos/seed/voyager/800/600",
    images: [
      "https://picsum.photos/seed/voyager-1/1200/800",
      "https://picsum.photos/seed/voyager-2/1200/800",
      "https://picsum.photos/seed/voyager-3/1200/800",
      "https://picsum.photos/seed/voyager-4/1200/800",
    ],
    amenities: ["Submersible", "Helipad", "Research Lab", "Gym", "Sauna", "WiFi"],
  },
  {
    id: 5,
    name: "Starlight",
    type: "Catamaran",
    location: "The Maldives",
    pricePerDay: 3500,
    cabins: 4,
    guests: 8,
    length: 25,
    year: 2023,
    description: "Glide over crystal-clear waters on the Starlight catamaran. Its stability and spacious design make it perfect for a relaxing and luxurious island-hopping adventure.",
    mainImage: "https://picsum.photos/seed/starlight/800/600",
    images: [
      "https://picsum.photos/seed/starlight-1/1200/800",
      "https://picsum.photos/seed/starlight-2/12_00/800",
    ],
    amenities: ["Kayaks", "Paddleboards", "BBQ", "WiFi", "Trampoline"],
  },
  {
    id: 6,
    name: "Neptune's Trident",
    type: "Mega Yacht",
    location: "Dubai, UAE",
    pricePerDay: 25000,
    cabins: 10,
    guests: 20,
    length: 95,
    year: 2022,
    description: "The pinnacle of opulence, Neptune's Trident is a floating palace. Featuring a private cinema, a full spa, and a crew of 30, it offers an unparalleled level of luxury.",
    mainImage: "https://picsum.photos/seed/neptune/800/600",
    images: [
      "https://picsum.photos/seed/neptune-1/1200/800",
      "https://picsum.photos/seed/neptune-2/1200/800",
      "https://picsum.photos/seed/neptune-3/1200/800",
      "https://picsum.photos/seed/neptune-4/1200/800",
      "https://picsum.photos/seed/neptune-5/1200/800",
    ],
    amenities: ["Swimming Pool", "Spa", "Cinema Room", "Helipad", "Submersible Garage", "Beach Club"],
  },
];

export function getYachtById(id: number): Yacht | undefined {
    return yachts.find(yacht => yacht.id === id);
}
