import { Component } from '@angular/core';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-department-store';
  activePage : String = "inventory";

  setActivePage(activePage: String) {
    this.activePage = activePage;
  }
}
