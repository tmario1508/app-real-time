import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //Declaración de variables
  @Input() empresa: string;
  @Input() anio: number;

  ngOnInit(): void {
  }

}
