import { IUnitDetail } from "./unitDetail.dto";

export class UnitsDataDto { 
    units: Array<IUnitDetail> = []
}
export interface IFilter { 
    age ?: Number
    food ?: Number
    wood ?: Number
    gold ?: Number
}