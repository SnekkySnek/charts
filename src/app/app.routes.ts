import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    {
        path: 'darby',
        loadChildren:'app/darby/darby.module#DarbyModule'
    },
    {
        path: 'intersections',
        loadChildren:'app/intersections/intersections.module#IntersectionsModule'
    },
    {
        path:'',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouteModule {}