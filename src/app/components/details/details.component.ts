import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingLocation } from "src/app/housingLocation";
import { HousingService } from "src/app/housing.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.css",
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService: HousingService = inject(HousingService);
  housingLocation:HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  })

  constructor() {
    //used to make changes
    const id = Number(this.route.snapshot.params["id"]); // we get the id of the page
    this.housingService.getHousingLocationById(id).then(housingLocation => {
      this.housingLocation = housingLocation
    })
  }

  submiForm() {
    this.housingService.submitForm(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    )
    this.applyForm.reset()
  }
}
