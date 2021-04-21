import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}> ();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}> ();

  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log('content input', this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      })
    //emit the server created event with the data to be passed;
    // i.e the details(serverName & content) added from the template

    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      //  serverContent: this.newServerContent 
       serverContent: this.serverContentInput.nativeElement.value
      })


    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
