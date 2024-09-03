import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "list",
        pathMatch: 'full'
    },
    {
        path: "list",
        title: "Users List",
        component: ListComponent
    }
];
