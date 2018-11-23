import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ListRoutes } from './list.routing';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ListRoutes)
  ],
  declarations: [ListComponent]
})
export class ListModule { }
