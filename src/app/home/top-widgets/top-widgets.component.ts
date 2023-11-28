import { Component } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { NetworkcallService } from 'src/app/service/networkcall.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {
  totalUsers: number = 0;

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  constructor(private networkcallService: NetworkcallService) {}

  fetchCorporateUsers(): void {

 
    this.networkcallService.getcorporateuser().subscribe(
      (res: any[]) => {
     
        this.totalUsers = res.length;
        console.log('Corporate users:', res);
      },
      (error: any) => {
        console.error('Error fetching corporate users:', error);
      }
    );
  }

}
