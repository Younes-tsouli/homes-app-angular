import { Injectable } from "@angular/core";
import { HousingLocation } from "./housingLocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/location"

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return await data.json() ?? [] // ?? : if we get a nullish result we return an empty array
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {}
  }

  submitForm(firstName:string, lastName:string, email:string) {
      console.log("you have been submited")
  }
}
