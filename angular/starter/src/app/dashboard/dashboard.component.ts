import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  rows = [];

  columns = [
    { name: 'Company', comparator: 'com' },
    { name: 'Name', sortable: false },
    { name: 'Gender', sortable: false }
  ];
  constructor(private subjectService: AuthenticationService) {
  }

  getData() {
    console.log('called');
    // this.subjectService.getData().subscribe((resp: any) => {
    //   console.log('data', resp);
    // },
    //   error => {
        // this.toastr.error(JSON.parse(error._body).message, 'Job Card');
        // this.isShowLoader = false;
    //  });
  }
}
