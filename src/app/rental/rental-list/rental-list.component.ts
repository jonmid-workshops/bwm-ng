import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
    selector: 'app-rental-list',
    templateUrl: './rental-list.component.html',
    styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
    // rentals: any[] = [1,2,3,4,5,6,7,8,9,10];
    /*
    rentals: any[] = [
        {
            id: 1,
            title: 'Central Apartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very nice apartment',
            dailyRate: 34,
            shared: false,
            createdAt: '11/10/2018'
        },
        {
            id: 2,
            title: 'Central Apartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very nice apartment',
            dailyRate: 34,
            shared: false,
            createdAt: '11/10/2018'
        },
        {
            id: 3,
            title: 'Central Apartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very nice apartment',
            dailyRate: 34,
            shared: false,
            createdAt: '11/10/2018'
        },
        {
            id: 4,
            title: 'Central Apartment',
            city: 'New York',
            street: 'Times Square',
            category: 'apartment',
            image: 'http://via.placeholder.com/350x250',
            bedrooms: 3,
            description: 'Very nice apartment',
            dailyRate: 34,
            shared: false,
            createdAt: '11/10/2018'
        }
    ];
    */

    rentals: any[] = [];

    constructor(private rentalService: RentalService) {}

    ngOnInit() {
        this.rentals = this.rentalService.getRentals();
    }
}
