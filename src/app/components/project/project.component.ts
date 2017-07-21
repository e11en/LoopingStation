import { Component } from '@angular/core';
import {Project} from '../../models/project.model';

@Component({
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class ProjectComponent {
    project: Project;

    constructor() {
        this.project = new Project();
    }

    AddTrack() {
        this.project.AddTrack();
    }
}
