import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpData } from '../emp.model';
import { EmpServiceService } from '../emp-service.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import EmpState from '../state/emp.state';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/internal/operators/map';
import * as EmpActions from '../state/emp.action';
import { EmpFacadeService } from '../emp-facade.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar', 'action'];

  emps$: Observable<EmpData[]>;
  empSubscription: Subscription;

  constructor(
    public dialog: MatDialog,
    private empFacade: EmpFacadeService,
  ) {
    this.emps$ = this.empFacade.empList$.pipe(map(data => data.Emps));
  }

  ngOnInit() {
    this.empFacade.loadAllEmpList();
  }


  edit(event: EmpData, index: number) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '100%',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.empFacade.update(result, index);

    });
  }

  delete(event: EmpData) {
    this.empFacade.deleteEmp(event);
  }

  createNew() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.empFacade.addNewEmp(result);
    });

  }

}
