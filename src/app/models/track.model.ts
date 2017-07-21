export class Track {
    id: number;
    name: string;
    audio: any;
    delay: number;
    pitch: [number, number];
    volume: number;
    time: string; // TODO: Figure this out
    effects: Array<string>; // TODO: Figure this out
    status: string;
    isSolo: boolean;
    isMuted: boolean;
    isRecording: boolean;
    isOverdub: boolean;

    constructor(id: number) {
        this.id = id;
        this.name = 'Track ' + id;
        this.audio = null;
        this.delay = 0;
        this.pitch = [0, 0];
        this.volume = 100;
        this.time = '00:03.45';
        this.effects = [];
        this.status = '';
        this.isSolo = false;
        this.isMuted = false;
        this.isRecording = false;
        this.isOverdub = false;
    }

    Mute() {
        this.isMuted = true;
        this.isSolo = false;
    }

    Solo() {
        this.isSolo = true;
        this.isMuted = false;
        // TODO: Mute all other tracks
    }

    SetStatus(status: string) {
        this.status = status;
    }

    StartRecording(overdub = false) {
        this.isRecording = true;
        this.isMuted = false;
        this.isOverdub = overdub;
        this.SetStatus('Recording');
        // TODO: Start record audio
    }

    StopRecording() {
        this.isRecording = false;
        this.isOverdub = false;
        // TODO: Stop recording audio
        this.SetStatus('');
    }

    AddEffect(effect: string) {
        this.effects.push(effect);
        // TODO: Add effect to audio
    }
}