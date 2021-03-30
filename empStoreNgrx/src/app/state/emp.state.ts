import { EmpData } from '../emp.model';

export default class EmpState {
    Emps: Array<EmpData>;
    EmpError: Error;
}

export const initializeState = (): EmpState => {
    return { Emps: Array<EmpData>(), EmpError: null };
};