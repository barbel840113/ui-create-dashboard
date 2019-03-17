import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { FieldTypeComponent } from '../field-type/field-type.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [IndexComponent, FormComponent, FieldTypeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DragDropModule
  ]
})
export class DashboardModule { }
