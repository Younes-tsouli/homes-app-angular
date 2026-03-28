import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  housingLocationId = 0

  constructor() { //used to make changes
      this.housingLocationId = Number(this.route.snapshot.params["id"]) // we get the id of the page
  }
}
