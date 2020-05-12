import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.listOfRestaurants();
  }

  populateForm(i: Restaurant) {
    this.service.formData = Object.assign({}, i);
  }

  onDelete(id: number) {
    if (confirm('Do you confirm to delete this permanently?')) {
      this.service.deleteRestaurant(id).subscribe(res => {
        this.service.listOfRestaurants();
        this.toastr.info('Deleted Successfully');
      });
    }
  }
}
