import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';

declare var App:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private menuSvc: MainTopBarMenuService){

  }
  title = 'app-real-time';

  menuItems:any[] = [];

  ngOnInit(){
    //Load sidebar Script
    App.init()
    //Load Data
    this.getData()
  }

  getData(){
    this.menuSvc.getItemsMenu().subscribe((data: any) =>{
      //Async
      this.menuItems = data;
    })
  }

  litenChildMenuEvent(eventArgs: any){
    console.log('Los datos emitidos por el componente hijo topbar son: ', eventArgs);
    console.log('El indice seleccionado es: ', eventArgs.index);
    console.log('El item seleccionado es: ', eventArgs.name);
  }

}
