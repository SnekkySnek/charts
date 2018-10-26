import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";


@Injectable()

export class AppService {

    constructor(private http: HttpClient) { };



    public getIntersectionsData(): Observable<any> {
        return this.http.get('https://data.lacity.org/resource/w4g9-ux6z.json');
    };

    public getCodingViolationsData(): Observable<any> {
        return this.http.get('https://data.lacity.org/resource/7qi3-mqr5.json');
    };
}
