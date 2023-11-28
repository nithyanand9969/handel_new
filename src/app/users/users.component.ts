import { Component } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  loggedInUserName: string = '';

entityList: any;

  constructor() { }

  ngOnInit() {
    this.loggedInUserName = localStorage.getItem('userName') || ''; // Fetch the userName from localStorage
  }
  // const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [{
  //     label: 'Sample Dataset',
  //     backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //     borderColor: 'rgba(75, 192, 192, 1)',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //   }]
  // };
  
  // Chart configuration
  // const config = {
  //   type: 'line',
  //   data: data,
  // };
  
  // Create the chart
  // const ctx = document.getElementById('myChart').getContext('2d');
  // new Chart(ctx, config);

}
