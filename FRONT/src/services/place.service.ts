import { Place } from "../models/Place";

export class PlaceService {
  placeList: Place[] = [
    {
      name: "Castel J'Huly",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Rennes",
      adresse: "1 Rue Goulgatière",
      photo:
        "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Castel J'Huly",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Châteaubourg",
      adresse: "1 Rue Goulgatière",
      photo:
        "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },  
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Le Block Gourmand",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Bruz",
      adresse: "Place Marcel Pagnol",
      photo:
        "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/275899040_501926888201560_7957679296315586300_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mA6nGdGhXyIAX-1-3TN&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-ytUoSGmeZ3Xs3tuYZly8CdhQIBg6r_zESqPdzpy8tow&oe=62ABB5F5",
      categorie: {
        id: 1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0245341",
      longitude: "-1.745597",
    },
    {
      name: "Domaine de Cicé-Blossac",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: "Bruz",
      adresse :"Av. de la Chaise",
      photo:
        "https://www.tourisme-rennes.com/uploads/2020/11/635-restaurant-le-restaurant-du-domaine-de-cice-blossac-restaurant-traditionnel-bruz-16364-2115.jpg",
      categorie: {
        id:1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.031008",
      longitude: "-1.7597746",
    },
    {
      name: "Ti Miam",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse :"19 Ctr Antoine de Saint-Exupéry",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktqqFF-a6yXn2Hdghce3nzau-MsyH1n7GrHgqXzarSCAsjmOIQh8Df6CpLzMBxxNgtDA&usqp=CAU",
      categorie: {
        id:1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0456633",
      longitude: "-1.7419812",
    },
    {
      name: "Tandoori Curry",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse :"21 Rue de la Noé",
      photo:
        "https://10619-2.s.cdn12.com/rests/original/318_508120277.jpg",
      categorie: {
        id:1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0219973",
      longitude: "-1.7501688",
    },
    {
      name: "La Table D'Elya",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci purus. Quisque efficitur ultricies diam a pulvinar. Curabitur vehicula risus nulla, et tincidunt quam elementum ac. Suspendisse scelerisque molestie urna a tempor. Donec pulvinar mi sed ornare pellentesque. Vivamus.",
      ville: " Bruz",
      adresse :"Les Riniaux",
      photo:
        "https://images.b-reputation.com/screenshot-website-https-www-latabledelya-fr-2022-03-27-20-08-584242.jpg",
      categorie: {
        id:1,
        name: "Restaurant gastronomique",
      },
      latitude: "48.0627265",
      longitude: "-1.7533437",
    },
  ];
}
