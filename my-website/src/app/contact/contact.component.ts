import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule, NgClass],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
