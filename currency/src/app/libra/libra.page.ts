import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-libra',
  templateUrl: './libra.page.html',
  styleUrls: ['./libra.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage]
})
export class LibraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
