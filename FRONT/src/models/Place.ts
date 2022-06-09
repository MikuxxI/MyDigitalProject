import { Categorie } from "./Categorie";

export class Place {
  description: string;
  ville: string;
  photo: string;
  categorie: Categorie;
  adresse:string;

  constructor(public name: string) {
    this.description = "Test";
    this.ville = "Rennes";
    this.categorie.name = "Restaurant gastronomique";
  }
}
