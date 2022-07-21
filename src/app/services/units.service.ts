import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IUnitDetail } from '../models/unitDetail.dto';
import { UnitsDataDto } from '../models/unitsData.dto';

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

  public getJSON(): Observable<UnitsDataDto> {
    return this.http.get<UnitsDataDto>(this._jsonURL);
  }
}
