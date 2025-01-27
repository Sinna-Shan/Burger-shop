const Product = require("../models/product");
const products = [
  {
    name: "AquaClear 50 Power Filter",
    price: 3500,
    quantity: 15,
    description: "AquaClear 50 Power Filter for aquariums up to 50 gallons",
    discount: 10,
    category: "filter",
    brand: "AquaClear",
  },
  {
    name: "Fluval FX6 Canister Filter",
    price: 12000,
    quantity: 8,
    description:
      "Fluval FX6 High Performance Canister Filter for aquariums up to 400 gallons",
    discount: 10,
    category: "filter",
    brand: "Fluval",
  },
  {
    name: "Eheim Classic 2213 Canister Filter",
    price: 7800,
    quantity: 10,
    description:
      "Eheim Classic 2213 External Canister Filter for aquariums up to 55 gallons",
    discount: 10,
    category: "filter",
    brand: "Eheim",
  },
  {
    name: "Tetra Whisper Air Pump",
    price: 1500,
    quantity: 30,
    description:
      "Tetra Whisper Air Pump for deep water aquariums up to 60 gallons",
    discount: 10,
    category: "air pump",
    brand: "Tetra",
  },
  {
    name: "Aqueon Pro 100W Heater",
    price: 2200,
    quantity: 25,
    description:
      "Aqueon Pro 100W Submersible Heater for aquariums up to 30 gallons",
    discount: 10,
    category: "heater",
    brand: "Aqueon",
  },
  {
    name: "Hydor Koralia Nano Circulation Pump",
    price: 4500,
    quantity: 12,
    description:
      "Hydor Koralia Nano Circulation Pump for small aquariums and nano reefs",
    discount: 10,
    category: "water pump",
    brand: "Hydor",
  },
  {
    name: "Seachem Prime Water Conditioner",
    price: 1200,
    quantity: 50,
    description:
      "Seachem Prime Concentrated Conditioner, 250ml for all freshwater & saltwater tanks",
    discount: 10,
    category: "water conditioner",
    brand: "Seachem",
  },
  {
    name: "API Freshwater Master Test Kit",
    price: 2700,
    quantity: 20,
    description:
      "API Freshwater Master Test Kit with complete aquarium water test solutions",
    discount: 10,
    category: "test kit",
    brand: "API",
  },
  {
    name: "Marina Floating Thermometer",
    price: 700,
    quantity: 40,
    description: "Marina Floating Thermometer with suction cup for aquariums",
    discount: 10,
    category: "thermometer",
    brand: "Marina",
  },
  {
    name: "CaribSea Eco-Complete Planted Aquarium Substrate",
    price: 3200,
    quantity: 15,
    description:
      "CaribSea Eco-Complete Plant Substrate, 20 lbs, for freshwater planted aquariums",
    discount: 10,
    category: "substrate",
    brand: "CaribSea",
  },
  {
    name: "AquaClear Ammonia Remover",
    price: 1800,
    quantity: 35,
    description:
      "AquaClear Ammonia Remover, 3-Pack for AquaClear 50, 70, and 110 Power Filters",
    discount: 10,
    category: "filter media",
    brand: "AquaClear",
  },
  {
    name: "Fluval Plant 3.0 LED Light",
    price: 17500,
    quantity: 5,
    description: "Fluval Plant 3.0 LED Light for freshwater planted aquariums",
    discount: 10,
    category: "lighting",
    brand: "Fluval",
  },
  {
    name: "Eheim Jager 300W Heater",
    price: 3500,
    quantity: 20,
    description:
      "Eheim Jager 300W Adjustable Heater for aquariums up to 220 gallons",
    discount: 10,
    category: "heater",
    brand: "Eheim",
  },
  {
    name: "Tetra AquaSafe Plus Water Conditioner",
    price: 1000,
    quantity: 40,
    description:
      "Tetra AquaSafe Plus Water Conditioner for tap water treatment, 250ml",
    discount: 10,
    category: "water conditioner",
    brand: "Tetra",
  },
  {
    name: "Marineland Magnum Polishing Internal Canister Filter",
    price: 5400,
    quantity: 10,
    description:
      "Marineland Magnum Polishing Internal Canister Filter for aquariums up to 97 gallons",
    discount: 10,
    category: "filter",
    brand: "Marineland",
  },
  {
    name: "Penn-Plax Cascade 1000 Canister Filter",
    price: 6800,
    quantity: 8,
    description:
      "Penn-Plax Cascade 1000 Canister Filter for aquariums up to 100 gallons",
    discount: 10,
    category: "filter",
    brand: "Penn-Plax",
  },
  {
    name: "Fluval Bio-Foam Filter Media",
    price: 1400,
    quantity: 30,
    description:
      "Fluval Bio-Foam Filter Media for advanced biological filtration",
    discount: 10,
    category: "filter media",
    brand: "Fluval",
  },
  {
    name: "API Algaefix Algae Control",
    price: 1100,
    quantity: 35,
    description:
      "API Algaefix Algae Control Solution, 237ml for freshwater aquariums",
    discount: 10,
    category: "algae control",
    brand: "API",
  },
  {
    name: "Hydor Professional External Canister Filter 250",
    price: 7800,
    quantity: 7,
    description:
      "Hydor Professional External Canister Filter 250 for aquariums up to 75 gallons",
    discount: 10,
    category: "filter",
    brand: "Hydor",
  },
  {
    name: "Aqueon QuietFlow LED PRO Filter 75",
    price: 5200,
    quantity: 10,
    description:
      "Aqueon QuietFlow LED PRO Power Filter for aquariums up to 90 gallons",
    discount: 10,
    category: "filter",
    brand: "Aqueon",
  },
  {
    name: "Seachem Matrix Bio Media",
    price: 2600,
    quantity: 25,
    description:
      "Seachem Matrix Bio Media for optimal biological filtration, 1L",
    discount: 10,
    category: "filter media",
    brand: "Seachem",
  },
  {
    name: "Finnex Planted+ 24/7 LED Light",
    price: 14500,
    quantity: 6,
    description: "Finnex Planted+ 24/7 Fully Automated Aquarium LED Light",
    discount: 10,
    category: "lighting",
    brand: "Finnex",
  },
  {
    name: "Coralife BioCube Protein Skimmer",
    price: 4000,
    quantity: 12,
    description: "Coralife BioCube Protein Skimmer for all BioCube aquariums",
    discount: 10,
    category: "protein skimmer",
    brand: "Coralife",
  },
  {
    name: "Instant Ocean Reef Crystals Reef Salt",
    price: 5400,
    quantity: 18,
    description: "Instant Ocean Reef Crystals Reef Salt, 200 gallons mix",
    discount: 10,
    category: "salt mix",
    brand: "Instant Ocean",
  },
  {
    name: "Marina 5-in-1 Gravel Cleaner Kit",
    price: 1300,
    quantity: 40,
    description:
      "Marina 5-in-1 Gravel Cleaner Kit for easy aquarium maintenance",
    discount: 10,
    category: "cleaning",
    brand: "Marina",
  },
  {
    name: "Sicce Syncra Silent 2.0 Pump",
    price: 7500,
    quantity: 8,
    description:
      "Sicce Syncra Silent 2.0 Multifunction Pump for freshwater and saltwater",
    discount: 10,
    category: "water pump",
    brand: "Sicce",
  },
  {
    name: "JBL ProFlora u500 CO2 System",
    price: 15500,
    quantity: 4,
    description:
      "JBL ProFlora u500 Professional CO2 System for planted aquariums",
    discount: 10,
    category: "CO2 system",
    brand: "JBL",
  },
  {
    name: "Cobalt Aquatics Neo-Therm Heater 150W",
    price: 5400,
    quantity: 10,
    description:
      "Cobalt Aquatics Neo-Therm Heater for aquariums up to 40 gallons",
    discount: 10,
    category: "heater",
    brand: "Cobalt Aquatics",
  },
  {
    name: "Tunze Comline DOC Skimmer 9001",
    price: 8200,
    quantity: 6,
    description:
      "Tunze Comline DOC Protein Skimmer 9001 for saltwater aquariums up to 37 gallons",
    discount: 10,
    category: "protein skimmer",
    brand: "Tunze",
  },
  {
    name: "Fluval Carbon Filter Media",
    price: 1300,
    quantity: 30,
    description: "Fluval Carbon Filter Media for chemical filtration",
    discount: 10,
    category: "filter media",
    brand: "Fluval",
  },
  {
    name: "AquaTop Submersible UV Filter",
    price: 3700,
    quantity: 12,
    description:
      "AquaTop Submersible UV Filter with 7W UV sterilizer for aquariums up to 75 gallons",
    discount: 10,
    category: "UV filter",
    brand: "AquaTop",
  },
  {
    name: "Red Sea Coral Pro Salt",
    price: 6900,
    quantity: 15,
    description: "Red Sea Coral Pro Salt Mix, 175 gallons",
    discount: 10,
    category: "salt mix",
    brand: "Red Sea",
  },
  {
    name: "API Stress Coat Water Conditioner",
    price: 1200,
    quantity: 50,
    description:
      "API Stress Coat Water Conditioner for fresh and saltwater aquariums, 237ml",
    discount: 10,
    category: "water conditioner",
    brand: "API",
  },
  {
    name: "Marina iGlo LED Kit 5G",
    price: 4500,
    quantity: 10,
    description: "Marina iGlo 5-gallon aquarium kit with LED lighting",
    discount: 10,
    category: "aquarium kit",
    brand: "Marina",
  },
  {
    name: "Aquatic Life RO Buddie 4-Stage Reverse Osmosis System",
    price: 8500,
    quantity: 5,
    description:
      "Aquatic Life RO Buddie 4-Stage Reverse Osmosis System, 50 GPD",
    discount: 10,
    category: "reverse osmosis system",
    brand: "Aquatic Life",
  },
  {
    name: "Juwel Bioflow Filter System",
    price: 9800,
    quantity: 8,
    description:
      "Juwel Bioflow Filter System for superior filtration in large aquariums",
    discount: 10,
    category: "filter",
    brand: "Juwel",
  },
  {
    name: "Tetra LED Hood for Aquariums 30x12",
    price: 3500,
    quantity: 14,
    description:
      "Tetra LED Hood for 20-gallon long aquariums, fits 30x12 tank size",
    discount: 10,
    category: "lighting",
    brand: "Tetra",
  },
  {
    name: "Aquatic Life T5 HO Hybrid 4-Lamp Fixture",
    price: 23000,
    quantity: 4,
    description:
      "Aquatic Life T5 HO Hybrid 4-Lamp Fixture for reef and planted tanks",
    discount: 10,
    category: "lighting",
    brand: "Aquatic Life",
  },
  {
    name: "Instant Ocean Sea Salt",
    price: 4800,
    quantity: 18,
    description: "Instant Ocean Sea Salt Mix, 200 gallons",
    discount: 10,
    category: "salt mix",
    brand: "Instant Ocean",
  },
  {
    name: "Sera Siporax Bio Filter Media",
    price: 3000,
    quantity: 20,
    description: "Sera Siporax Professional Bio Filter Media, 1L",
    discount: 10,
    category: "filter media",
    brand: "Sera",
  },
  {
    name: "Tetra Whisper EX70 Filter",
    price: 4800,
    quantity: 12,
    description:
      "Tetra Whisper EX70 Power Filter for aquariums up to 70 gallons",
    discount: 10,
    category: "filter",
    brand: "Tetra",
  },
  {
    name: "Boyu EFU-35 External UV Filter",
    price: 6200,
    quantity: 9,
    description:
      "Boyu EFU-35 External UV Canister Filter with built-in UV sterilizer for aquariums",
    discount: 10,
    category: "filter",
    brand: "Boyu",
  },
  {
    name: "Aquael Turbo Filter 2000",
    price: 5200,
    quantity: 10,
    description: "Aquael Turbo Internal Filter 2000 for large aquariums",
    discount: 10,
    category: "filter",
    brand: "Aquael",
  },
  {
    name: "Eheim Pro 4+ Canister Filter 350",
    price: 13500,
    quantity: 6,
    description: "Eheim Pro 4+ Canister Filter for aquariums up to 120 gallons",
    discount: 10,
    category: "filter",
    brand: "Eheim",
  },
  {
    name: "Hagen AquaClear 110 Power Filter",
    price: 7200,
    quantity: 12,
    description:
      "Hagen AquaClear 110 Power Filter for aquariums up to 110 gallons",
    discount: 10,
    category: "filter",
    brand: "Hagen",
  },
];

(async () => {
  await Product.destroy({ where: {}, cascade: true });
  await Product.bulkCreate(products);
})();
