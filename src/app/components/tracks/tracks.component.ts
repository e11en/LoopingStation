import { Component } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Track } from "../../models/track.model";

@Component({
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
    tracks: Array<Track>;

    constructor(tracks: Array<Track>) {
        this.tracks = tracks;
    }
}
