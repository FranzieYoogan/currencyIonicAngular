import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-dollar',
  templateUrl: './dollar.page.html',
  styleUrls: ['./dollar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,HeaderPage]
})
export class DollarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  convertDollars() {
    
    const dollars:any = document.getElementById('dollars');
    const reais:any = document.getElementById('reais');

    if(dollars.value > 0 && dollars.value != "") {

      reais.value = (dollars.value * 5.17).toFixed(2);

      console.log(reais.value)


    } else {

      dollars.style.border = "1px solid red"

    }



  }

}
