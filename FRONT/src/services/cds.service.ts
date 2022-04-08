import { Cd } from "../models/Cd";

export class CdsService{

 cdsList: Cd[] = [
    {
      name: "Shakira",
      duree:250,
      description: ["Test Description 1", "Test Description 2", "Test Description 3"],
      isLended: true
    },
    {
      name: "GIMS",
      duree:124,
      description: ["Test Description 1", "Test Description 2", "Test Description 3"],
      isLended: false
    },
    {
      name: "ACDC",
      duree:311,
      description: ["Test Description 1", "Test Description 2", "Test Description 3"],
      isLended: false
    },
  ];
}
