import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EmpActions from './emp.action';
import { EmpServiceService } from '../emp-service.service';
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