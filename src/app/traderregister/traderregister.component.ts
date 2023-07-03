import { Component } from '@angular/core';

@Component({
  selector: 'app-traderregister',
  templateUrl: './traderregister.component.html',
  styleUrls: ['./traderregister.component.scss']
})
export class TraderregisterComponent {
  name:String =""
  file:any;

  getName(name:String){

    this.name = name;
  }
  getFile(event:any){

    this.file = event.target.files[0];
  }
  
  Create(data:object):void{
    console.warn(data)

  }

}
