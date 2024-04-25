import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  constructor() { }

  ngOnInit() {

    const anchor:any = document.getElementById('anchor')

    if(window.location.href == "http://localhost:8100/tabs/dollar") {

    anchor.href = "http://localhost:8100/tabs/dollar"

    } if(window.location.href == "http://localhost:8100/tabs/euro") {


      anchor.href = "http://localhost:8100/tabs/euro"


  } if(window.location.href == "http://localhost:8100/tabs/libra") {

 anchor.href = "http://localhost:8100/tabs/libra"
}

  }

}
