import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
