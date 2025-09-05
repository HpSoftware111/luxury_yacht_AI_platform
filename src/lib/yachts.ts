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
      "https://www.charterworld.com/images/800/yachts-1/Motor%20yacht%20O%27Pari%20-%20Photo%20%C2%A9%20Jeff%20Brown%20Photography.jpg",
      "https://www.charterworld.com/images/800/yachts-9/Motor%20yacht%20ROCK.IT%20credit%20Yachting%20Image.jpg",
      "https://www.charterworld.com/images/800/yachts-1/Photo_6554371_DJI_771_jpg_4200061_0_20228185042_photo_original.jpg",
      "https://www.charterworld.com/images/800/yachts-1/101%20Superyacht%20RED%20DRAGON.jpg",
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
      "https://www.charterworld.com/images/800/yachts-9/Octopus%20in%20the%20ice%20of%20Antarctica.jpg",
      "https://www.charterworld.com/images/800/yachts-1/Magnificent%20mega%20yacht%20O%27PTASIA.jpg",
      "https://www.charterworld.com/images/800/yachts-1/101%20Superyacht%20MALIA.jpg",
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
      "https://www.charterworld.com/images/800/yachts-1/Magnificent%20mega%20yacht%20O%27PTASIA.jpg",
      "https://www.charterworld.com/images/800/yachts-1/101%20Superyacht%20RED%20DRAGON.jpg",
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
      "https://www.charterworld.com/images/800/yachts-1/101%20Superyacht%20MALIA.jpg",
      "https://www.charterworld.com/images/800/yachts-2/%5BLUXURY-MOTOR-YACHT-GIANT%5D-296-26.jpg",
      "https://www.charterworld.com/images/800/yachts-9/Motor%20yacht%20ROCK.IT%20credit%20Yachting%20Image.jpg",
      "https://www.charterworld.com/images/800/yachts-1/Luxury%20superyacht%20SuRi.jpg",
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
      "https://www.charterworld.com/images/800/yachts-1/DRIFTWOOD%20superyacht%20profile.png",
      "https://www.charterworld.com/images/800/yachts-1/Photo_6554371_DJI_771_jpg_4200061_0_20228185042_photo_original.jpg",
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
      "https://www.charterworld.com/images/800/yachts-1/Photo_6554371_DJI_771_jpg_4200061_0_20228185042_photo_original.jpg",
      "https://www.charterworld.com/images/800/yachts-2/%5BLUXURY-MOTOR-YACHT-GIANT%5D-296-26.jpg",
      "https://www.charterworld.com/images/800/yachts-1/Luxury%20superyacht%20SuRi.jpg",
      "https://www.charterworld.com/images/800/yachts-2/%5BLUXURY-MOTOR-YACHT-GIANT%5D-296-26.jpg",
      "https://www.charterworld.com/images/800/yachts-9/Motor%20yacht%20ROCK.IT%20credit%20Yachting%20Image.jpg",
    ],
    amenities: ["Swimming Pool", "Spa", "Cinema Room", "Helipad", "Submersible Garage", "Beach Club"],
  },
];

export function getYachtById(id: number): Yacht | undefined {
    return yachts.find(yacht => yacht.id === id);
}
