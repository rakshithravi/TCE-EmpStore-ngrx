import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import EmpState from './state/emp.state';
import * as EmpActions from './state/emp.action';


@Injectable({
  providedIn: 'root'
})
export class EmpFacadeService {
  empList$: Observable<EmpState>;

  constructor(
    private store: Store<{ empList: EmpState }>
  ) {
    this.empList$ = store.pipe(select('empList'));
  }

  loadAllEmpList() {
    this.store.dispatch(EmpActions.beginRetrieveEmpList());
  }

  addNewEmp(empData) {
    this.store.dispatch(EmpActions.CreateNewEmp({ payload: empData }));
  }

  deleteEmp(index) {
    this.store.dispatch(EmpActions.DeleteEmp({ payload: index }));
  }

  update(newValue, index) {
    this.store.dispatch(EmpActions.upDateEmp({ payload: newValue, index: index }));
  }
}
