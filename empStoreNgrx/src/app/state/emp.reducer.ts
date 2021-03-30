import { Action, createReducer, on } from '@ngrx/store';
import * as EmpActions from './emp.action';
import { EmpData } from '../emp.model';
import EmpState, { initializeState } from './emp.state';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(EmpActions.GetEmpList, state => state),
    on(EmpActions.SuccessRetrieveEmpList, (state: EmpState, { payload }) => {
        return { ...state, Emps: payload }
    }),
    on(EmpActions.CreateNewEmp, (state: EmpState, { payload }) => {
        return { ...state, Emps: [...state.Emps, payload], ToDoError: null };
    }),
    on(EmpActions.DeleteEmp, (state: EmpState, { payload }) => {
        return {
            ...state, Emps: [...state.Emps.slice(0, payload),
            ...state.Emps.slice(payload + 1)], ToDoError: null
        };
    }),
    on(EmpActions.upDateEmp, (state: EmpState, { payload, index }) => {
        return {
            ...state, Emps: [...state.Emps.slice(0, index),
                payload,
            ...state.Emps.slice(index + 1)], ToDoError: null
        };
    }),


    on(EmpActions.ErrorToDoAction, (state: EmpState, error: Error) => {
        console.log(error);
        return { ...state, EmpError: error };
    })
)

export function EmpListReducer(state: EmpState | undefined, action: Action) {
    return reducer(state, action);
}