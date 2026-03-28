import {Routes} from "@angular/router"
import { HomeComponent } from "./components/home/home.component"
import { DetailsComponent } from "./components/details/details.component"

const routeConfig:Routes = [
      {
            path:"",
            component:HomeComponent,
            title:"home sweet home"
      },
      {
            path:"details/:id",
            component:DetailsComponent,
            title:"details"
      }
]
export default routeConfig