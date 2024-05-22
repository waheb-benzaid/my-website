import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class HeaderComponent {
  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
