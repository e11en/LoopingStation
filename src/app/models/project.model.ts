import { Track } from './track.model';

export class Project {
    name: string;
    tracks: Array<Track>;

    constructor() {
        this.tracks = [];
    }

    AddTrack() {
        this.tracks.push(new Track(this.GetNextId()));
    }

    GetNextId(): number {
        const nextId = this.tracks.slice(-1)[0].id + 1;
        return nextId ? nextId : 1;
    }
}
