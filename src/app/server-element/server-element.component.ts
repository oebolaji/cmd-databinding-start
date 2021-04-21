import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None //Emulated Shadow DOM
})
export class ServerElementComponent implements OnInit {
 @Input('srvElement') element: {type:string, name:string, content:string};

  constructor() {

    console.log('constructor called!')
   }

  ngOnInit(): void {
    // console.log('element content',this.element.content)
    console.log('ngOnInIt called!')
  }

}
