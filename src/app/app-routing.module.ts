import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ListingItemComponent } from './listing-item/listing-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListingItemComponent
  },
  {
    path: 'add',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
