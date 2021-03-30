import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EmpActions from './emp.action';
import EmpState from '../state/emp.state';
import { EmpServiceService } from '../emp-service.service';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { EmpData } from '../emp.model';

@Injectable()
export class EmpEffects {
    constructor(
        private empServiceService: EmpServiceService,
        private actions$: Actions
    ) { }

    loadEmpList$ = createEffect(() => this.actions$.pipe(
        ofType(EmpActions.beginRetrieveEmpList),
        mergeMap(() => this.empServiceService.getEmpList()
            .pipe(
                map((data: EmpData[]) => {
                    return EmpActions.SuccessRetrieveEmpList({ payload: data });
                }),
                catchError((error: Error) => {
                    return of(EmpActions.ErrorToDoAction(error));
                })))
    )
    );
}