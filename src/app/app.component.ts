import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_MQTT_WebSocket';
  someValue:string="";
  someValues:Array<string> = new Array<string>();
  CallSomeFunction(){
    this.someValues.push(this.someValue);
    this.someValue="";
  }
}
