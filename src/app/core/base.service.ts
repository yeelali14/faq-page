import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpService) { }

  public getAllQuestions() {
    return this.http.get("./assets/data/data.json").pipe((map(res => {
      return res;
    })));
  }
}
