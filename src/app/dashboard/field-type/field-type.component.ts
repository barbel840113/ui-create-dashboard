import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormActions, EFormActions} from '../../store/actions/form.actions';
import { Store, select } from '@ngrx/store';
import { IFormTypeState } from '../../store/state/formtype.state';
import * as formActions from '../../store/actions/form.actions';
import { IAppState } from '../../store/state/app.state';
import { selectFormTypesList } from '../../store/selector/form.selector';
import { IFormType } from '../../applicationcore/interfaces/IFormType';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.css'],
})
export class FieldTypeComponent implements OnInit {
  
  public formType$: any;

  constructor(
    private _store: Store<IFormTypeState>
  ){
    this.formType$ = this._store.pipe(select(state => state.formtype), map(res => this.todo = res));
    
    this.formType$.subscribe(res => this.todo = res );
  }

  ngOnInit(): void {
    this._store.dispatch( new formActions.GetFormsType());
  }

  todo :IFormType[] = [];

  done : IFormType[] = [];

  drop(event: CdkDragDrop<IFormType[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
