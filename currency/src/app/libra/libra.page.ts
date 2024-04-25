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

  convertLibra() {
    
    const libra:any = document.getElementById('libra');
    const reais3:any = document.getElementById('reais3');

    if(libra.value > 0 && libra.value != "") {

      reais3.value = (libra.value * 6.45).toFixed(2);

      console.log(reais3.value)


    } else {

      libra.style.border = "1px solid red"

    }

}

}
