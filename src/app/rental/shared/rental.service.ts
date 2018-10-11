import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Rental } from './rental.model';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

    private rentals: any[] = [
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

    public getRentals(): any[] {
        const rentalObservable = new Observable();
        return this.rentals;
    }

    // constructor(private http: HttpClient) {}

    // public getRentalById(rentalId: string): Observable<any> {
    //     return this.http.get('/api/v1/rentals/' + rentalId);
    // }

    // public getRentals(): Observable<any> {
    //     return this.http.get('/api/v1/rentals');
    // }

    // public getRentalsByCity(city: string): Observable<any> {
    //     return this.http.get(`/api/v1/rentals?city=${city}`);
    // }

    // public createRental(rental: Rental): Observable<any> {
    //     return this.http.post('/api/v1/rentals', rental);
    // }

    // public getUserRentals(): Observable<any> {
    //     return this.http.get('/api/v1/rentals/manage');
    // }

    // public deleteRental(rentalId: string): Observable<any> {
    //     return this.http.delete(`/api/v1/rentals/${rentalId}`);
    // }

    // public updateDental(rentalId: string, rentalData: any): Observable<any> {
    //     return this.http.patch(`/api/v1/rentals/${rentalId}`, rentalData);
    // }

    // public verifyRentalUser(rentalId: string): Observable<any> {
    //     return this.http.get(`/api/v1/rentals/${rentalId}/verify-user`);
    // }
}