/*
 * All the routable components are gathered and exported here.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Routable components*/
import { ErrorComponent } from './components/error/error.component';
import { ProjectComponent } from './components/project/project.component';

/* Child components */
import { TracksComponent } from './components/tracks/tracks.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'project', pathMatch: 'full' },
    { path: 'project', component: ProjectComponent },
    { path: '**', component: ErrorComponent },
];

export const routableComponents = [
    ProjectComponent,
    ErrorComponent
];

export const childComponents = [
    TracksComponent
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

