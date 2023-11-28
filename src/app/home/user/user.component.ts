import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkcallService } from 'src/app/service/networkcall.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  corporateUsers: any[] = [];
  selectedUser: any;
  totalUsers: number = 0;


  constructor(private networkService: NetworkcallService) {}

  ngOnInit(): void {
    this.fetchCorporateUsers();
  
  }

  fetchCorporateUsers(): void {
    this.networkService.getcorporateuser().subscribe(
      (res: any[]) => {
        this.corporateUsers = res;
        this.totalUsers = res.length;
        console.log('Corporate users:', res);
      },
      (error) => {
        console.error('Error fetching corporate users:', error);
      }
    );
  }

  selectUser(user: any): void {
    this.selectedUser = user;
    // Perform actions on user selection if needed
  }
 

 
}
