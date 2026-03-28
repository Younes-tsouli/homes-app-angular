import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [HeaderComponent, RouterOutlet], // using router outlet automaticly shows the page at path '' = HomeComponent
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
