import { Customer } from "../pages/customers/customers.types";

const customers: Customer[] = [];
const last = [
  "McCoy",
  "Maldonado",
  "Bowman",
  "Davila",
  "Dickerson",
  "Armstrong",
  "Solomon",
  "Collier",
  "Levy",
  "Stuart",
  "Blackburn",
  "Coleman",
  "Hogan",
  "Bender",
  "Bradford",
  "Matthews",
  "Montgomery",
  "Rojas",
  "Li",
  "White",
  "Dorsey",
  "Kirk",
  "Church",
  "Norris",
  "Cantrell",
  "Hanson",
  "Golden",
  "Salgado",
  "Rowland",
  "Elliott",
  "Mathews",
  "Peck",
  "Martin",
  "O’Connor",
  "English",
  "James",
  "Estes",
  "Valdez",
  "Herrera",
  "Combs",
  "Caldwell",
  "Wiggins",
  "Reyna",
  "Francis",
  "Conrad",
  "Rush",
  "Mueller",
  "Finley",
  "Bean",
  "Daniels",
  "Foley",
  "Coleman",
  "Clements",
  "Owens",
  "Hardin",
  "Watson",
  "Church",
  "Gentry",
  "Sellers",
  "Leblanc",
  "Potts",
  "Serrano",
  "Zamora",
  "Brown",
  "Moses",
  "McCarty",
  "Frazier",
  "Hoffman",
  "Hawkins",
  "Lamb",
  "Knox",
  "Meadows",
  "Pope",
  "Houston",
  "Duran",
  "Lynch",
  "Ho",
  "Hopkins",
  "Gardner",
  "Mays",
  "Edwards",
  "Spence",
  "Shepherd",
  "Foley",
  "Bernal",
  "Watson",
  "Cunningham",
  "Combs",
  "Fitzgerald",
  "Pearson",
  "Chen",
  "Perez",
  "Stout",
  "Parra",
  "McDaniel",
  "McCann",
  "Correa",
  "Quintana",
  "Gomez",
  "Solamons",
  "Vaine"
];

const first = [
  "Magnolia",
  "Jett",
  "Elaina",
  "Francisco",
  "Rayne",
  "Flynn",
  "Presley",
  "Musa",
  "Ivory",
  "Harold",
  "Stormi",
  "Zahir",
  "Julia",
  "Sonny",
  "Lilyana",
  "Ander",
  "Lila",
  "Maximiliano",
  "Adaline",
  "Jorge",
  "Layla",
  "Enoch",
  "Ellis",
  "Terrance",
  "Arielle",
  "Harris",
  "Mariana",
  "Amias",
  "Avalynn",
  "Eliezer",
  "Noelle",
  "Jamir",
  "Crystal",
  "Mateo",
  "Charli",
  "Junior",
  "Quinn",
  "Hakeem",
  "Diana",
  "River",
  "Irene",
  "Rylan",
  "Capri",
  "Reginald",
  "Daniella",
  "Lincoln",
  "Bexley",
  "Kaiser",
  "Imani",
  "Calum",
  "Jenesis",
  "Xander",
  "Zaylee",
  "Micah",
  "Cara",
  "Adriel",
  "Vada",
  "Greyson",
  "Ayleen",
  "Isaiah",
  "Amelie",
  "Madden",
  "Novalee",
  "Alfred",
  "Allie",
  "Quentin",
  "Charlotte",
  "Niklaus",
  "Halo",
  "Callum",
  "Aspen",
  "Victor",
  "Amaia",
  "Valentin",
  "Pearl",
  "Gunnar",
  "Lylah",
  "Ismael",
  "Malia",
  "Morgan",
  "Gabriela",
  "Alan",
  "Denisse",
  "Adrian",
  "Aislinn",
  "Ronald",
  "Zaylee",
  "Eithan",
  "Hailey",
  "Alejandro",
  "Irene",
  "Peyton",
  "Kiara",
  "Emmanuel",
  "Eleanor",
  "Callahan",
  "Dalary",
  "Major",
  "Joyce",
  "Zakai",
  "Bruse",
];

function genID(key: number): string {
  return `CUS_${key}`;
}

function getFirstName(key: number): string {
  return first[key];
}

function getLastName(key: number): string {
  return last[key];
}

function getMobileNumber(): string {
  return `077-${Math.floor(1000000 + Math.random() * 9000000)}`;
}

function getEmail(key: number): string {
  return `${first[key]}.${last[key]}@example.com`;
}

function addCustomers() {
  for (let i = 1; i <= 100; i++) {
    customers.push({
      id: genID(i),
      first_name: getFirstName(i),
      last_name: getLastName(i),
      mobile: getMobileNumber(),
      email: getEmail(i),
      orders: [],
    });
  }
}

addCustomers();

export { customers };
