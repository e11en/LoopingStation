import { Component, Input } from '@angular/core';
import { Track } from '../../models/track.model';

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class TracksComponent {
    @Input() tracks: Array<Track>;

    ButtonColor(track: Track, type: string): string {
        switch (type) {
            case 'solo': return this.GetColor(track.isSolo);
            case 'mute': return this.GetColor(track.isMuted);
            case 'record': return this.GetColor(track.isRecording);
            case 'overdub': return this.GetColor(track.isOverdub);
            case 'replace': return this.GetColor(track.isReplaced);
        }
    }

    GetColor(active = false): string {
        return active ? 'red' : '';
    }

    DeleteTrack(track: Track) {
        for (let i = this.tracks.length - 1; i >= 0; i--) {
            if (this.tracks[i] === track) {
                this.tracks.splice(i, 1);
            }
        }
    }

    Record(track: Track, type: string) {
        if (track.isRecording) {
            track.StopRecording();
        } else {
            track.StartRecording(type === 'overdub', type === 'replace');
        }
    }
}
