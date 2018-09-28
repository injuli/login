import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const app_routes: Routes = [
    {path: 'table', component: TableComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'principal'}

];
@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {

}
