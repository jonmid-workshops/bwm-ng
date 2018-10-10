import { NgModule } from '@angular/core';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';

@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent
    ],
    imports: [
        // CommonModule,
        // RouterModule.forChild(routes),
        // HttpClientModule,
        // NgPipesModule,
        // MapModule,
        // Daterangepicker,
        // FormsModule,
        // EditableModule,
        // ImageUploadModule
    ],
    providers: []
})
export class RentalModule {}