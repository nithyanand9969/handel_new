import { Component } from '@angular/core';
import { TraderService } from './../services/trader.service';
import { Router } from '@angular/router';
import { ClientRegisteration } from '../model/client-registeration';
import { NetworkcallService } from '../service/networkcall.service';

@Component({
  selector: 'app-traderregister',
  templateUrl: './traderregister.component.html',
  styleUrls: ['./traderregister.component.scss']
})
export class TraderregisterComponent {

  TraderRigi:  ClientRegisteration = new ClientRegisteration();
constructor(private urlservice:NetworkcallService,private router:Router){}


submitData() {

  this.urlservice.createTraderRegi(this.TraderRigi).subscribe((res) => {
    console.log(res);
    this.router.navigate(['/home/user']);

  });


}

}

