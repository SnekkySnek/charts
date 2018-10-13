import { Injectable } from "@angular/core";
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";


@Injectable()

export class AppService {
  
    constructor(private http: HttpClient) {};



    public getData(): Observable<any>{
       return this.http.get('https://data.lacity.org/resource/w4g9-ux6z.json');
    };

};