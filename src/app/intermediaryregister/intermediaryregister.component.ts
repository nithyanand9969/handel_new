import { Component } from '@angular/core';

@Component({
  selector: 'app-intermediaryregister',
  templateUrl: './intermediaryregister.component.html',
  styleUrls: ['./intermediaryregister.component.scss']
})
export class IntermediaryregisterComponent {
  
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
