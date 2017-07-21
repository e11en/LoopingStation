import { Track } from './track.model';

export class Project {
    name: string;
    tracks: Array<Track>;

    constructor() {
        this.tracks = [new Track(1)];
    }

    AddTrack() {
        this.tracks.push(new Track(this.GetNextId()));
    }

    GetNextId(): number {
        const lastTrack = this.tracks.slice(-1)[0];
        return lastTrack ? lastTrack.id + 1 : 1;
    }
}
