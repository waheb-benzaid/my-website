import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
