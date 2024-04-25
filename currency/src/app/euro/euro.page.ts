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


  convertEuro() {
    
    const euro:any = document.getElementById('euro');
    const reais2:any = document.getElementById('reais2');

    if(euro.value > 0 && euro.value != "") {

      reais2.value = (euro.value * 5.54).toFixed(2);
      euro.style.border = "1px solid green"
      console.log(reais2.value)


    } else {

      euro.style.border = "1px solid red"

    }

}

}