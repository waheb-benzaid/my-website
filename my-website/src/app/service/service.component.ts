import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class ServiceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
