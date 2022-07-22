import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IUnitDetail } from '../models/unitDetail.dto';
import { IFilter, UnitsDataDto } from '../models/unitsData.dto';
import { Ages } from '../models/ages';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private _jsonURL = 'assets/age-of-empires-units.json';
  constructor(private http: HttpClient) { }

  public getUnitById(id: Number): Observable<IUnitDetail | undefined> {
    return this.getJSON().pipe(map((data) => {
      return data.units.find((item) => item.id == id);
    }));
  }

  public getUnits(filter?: IFilter): Observable<Array<IUnitDetail> | undefined> {
    return this.getJSON().pipe(map((data) => {
      if(filter != undefined) {
        const _age = (filter.age) ? filter.age : 0;
        const _wood = (filter.wood != undefined) ? filter.wood : false;
        const _food = (filter.food != undefined) ? filter.food : false;
        const _gold = (filter.gold != undefined) ? filter.gold : false;
        if(_age) {
          data.units = data.units.filter((item) => Ages[item.age as keyof typeof Ages] === _age)
        }
        if(_wood !== false && _wood !== undefined){
          data.units = data.units.filter((item: IUnitDetail) => !item?.cost?.Wood || item?.cost?.Wood <= _wood)
        }
        if(_food !== false && _food !== undefined){
          data.units = data.units.filter((item: IUnitDetail) => !item?.cost?.Food || item?.cost?.Food <= _food)
        }
        if(_gold !== false && _gold !== undefined){
          data.units = data.units.filter((item: IUnitDetail) => !item?.cost?.Gold || item?.cost?.Gold <= _gold)
        }
      }
      return data.units;
    }));
  }

  public getJSON(): Observable<UnitsDataDto> {
    return this.http.get<UnitsDataDto>(this._jsonURL);
  }
}
