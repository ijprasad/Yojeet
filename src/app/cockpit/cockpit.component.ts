import { Component, OnInit, EventEmitter, Output, ViewEncapsulation , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = 'Sample';
  //newServerContent ='Just a Sample Test';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
 
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement){


    this.serverCreated.emit({
      serverName: nameInput.value
      , serverContent: this.serverContentInput.nativeElement.value});
    //this.serverElements.push({type:'server', name:this.newServerName, content: this.newServerContent});
  }
  onAddBlueprint(nameInput: HTMLInputElement){
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({
      serverName: nameInput.value
      , serverContent: this.serverContentInput.nativeElement.value});
    //this.serverElements.push({type: 'blueprint', name:this.newServerName, content: this.newServerContent});
  }

}
