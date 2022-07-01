import { Place } from "../models/Place";

export class PlaceService {
  placeList: Place[] = [
    {
      name: "Castel J'Huly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Rennes",
      adresse: "1 Rue Goulgatière",
      photo:
        "https://fastly.4sqi.net/img/general/600x600/1367992001_ALQexpUzlX7-fCbJnQ0fai4ryubXVHPHmQf9sNv-qTc.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Castel J'Huly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Châteaubourg",
      adresse: "1 Rue Goulgatière",
      photo:
        "https://www.lespetitscrus.com/img/photos/small/petits_crus_02.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Le Block Gourmand",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Bruz",
      adresse: "Place Marcel Pagnol",
      photo:
        "https://fastly.4sqi.net/img/general/600x600/49312602_kjJWG2OfszZXCKxZHXzHeoiqAAQgU_5bNp1k1zR4DNA.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0245341",
      longitude: "-1.745597",
    },
    {
      name: "Domaine de Cicé-Blossac",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Bruz",
      adresse: "Av. de la Chaise",
      photo:
        "https://www.lespetitscrus.com/img/photos/small/petits_crus_01.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Ti Miam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse: "19 Ctr Antoine de Saint-Exupéry",
      photo:
        "https://www.lespetitscrus.com/img/photos/small/petits_crus_13.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0456633",
      longitude: "-1.7419812",
    },
    {
      name: "Tandoori Curry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse: "21 Rue de la Noé",
      photo:
        "https://d1heojj70xp7g3.cloudfront.net/enjkey-img/a76ce3485fb76e33802c7e6e0109f5c1b26e240e.xx_min.jpeg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0219973",
      longitude: "-1.7501688",
    },
    {
      name: "La Table D'Elya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse: "Les Riniaux",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/2f/1e/9f/table-d-hotes-estivale.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0627265",
      longitude: "-1.7533437",
    },
  ];
}
