import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AppService } from "./app.service";
import { Subject } from "rxjs/Subject";

@Injectable()

export class AppDataResolver implements Resolve<any> {
    constructor(protected appService: AppService){}
    resolve() {
        return this.appService.getData()
    }
}