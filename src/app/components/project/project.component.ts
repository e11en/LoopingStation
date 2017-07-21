import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
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
