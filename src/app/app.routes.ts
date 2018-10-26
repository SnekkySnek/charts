import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { AppDataResolver } from "./app-data-resolver";

const routes = [
    {
        path: 'darby',
        loadChildren: 'app/darby/darby.module#DarbyModule'
    },
    {
        path: 'intersections',
        loadChildren: 'app/intersections/intersections.module#IntersectionsModule'
    },
    {
        path: 'coding-violations',
        loadChildren: 'app/coding-violations/coding-violations.module#CodingViolationsModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        // resolve: AppDataResolver
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule { }
