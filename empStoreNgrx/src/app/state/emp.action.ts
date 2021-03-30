import { createAction, props } from '@ngrx/store';
import { EmpData } from '../emp.model';

export const GetEmpList = createAction('[Emp List] - Get Emp List');

export const beginRetrieveEmpList = createAction('[Emp List] Emp retrieve');

export const SuccessRetrieveEmpList = createAction(
  '[Emp List] - Success Retrieve Emp List',
  props<{ payload: EmpData[] }>()
);

export const CreateNewEmp = createAction(
  '[Emp List] - Begin Create New Emp',
  props<{ payload: EmpData }>()
);

export const upDateEmp = createAction(
  '[Emp List] - Update Emp',
  props<{ payload: EmpData, index: number }>()
);

export const DeleteEmp = createAction(
  '[Emp List] - Delete Emp',
  props<{ payload: number }>()
);
export const ErrorToDoAction = createAction('[Emp List] - Error', props<Error>());