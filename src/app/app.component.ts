import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [HeaderComponent, HomeComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
