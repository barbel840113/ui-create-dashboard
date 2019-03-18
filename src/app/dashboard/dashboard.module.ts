import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { FieldTypeComponent } from './field-type/field-type.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DatetimepickerComponent } from '../applicationcore/fieldstypes/datetimepicker/datetimepicker.component';
import { DemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [IndexComponent, FormComponent, FieldTypeComponent, DatetimepickerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoMaterialModule,
    DragDropModule,
 
  ]
})
export class DashboardModule { }
