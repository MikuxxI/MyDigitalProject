export class Cd {
  duree: number;
  description: string[];
  isLended: Boolean;

  constructor(public name: string) {
    this.isLended = false;
    this.duree = 0;
  }

}
