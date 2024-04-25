import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.page.html',
  styleUrls: ['./euro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class EuroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}