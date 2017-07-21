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
    isReplaced: boolean;
    isOverdub: boolean;
    history: Array<[string, any]>;

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
        this.isReplaced = false;
        this.isOverdub = false;
        this.history = [];
    }

    Mute() {
        this.isMuted = !this.isMuted;
        this.isSolo = false;
        this.SetStatus(this.isMuted ? 'Muted' : '');
        console.log(this.isMuted ? 'Muted' : 'Un-muted');
    }

    Solo() {
        this.isSolo = !this.isSolo;
        this.isMuted = false;
        // TODO: Mute all other tracks
        this.SetStatus(this.isSolo ? 'Solo' : '');
        console.log(this.isSolo ? 'Solo' : 'Un-solo');
    }

    SetStatus(status: string) {
        this.status = status;
    }

    StartRecording(overdub = false, replace = false) {
        this.isRecording = true;
        this.isMuted = false;
        this.isReplaced = replace;
        this.isOverdub = overdub;

        console.log('Started recording, overdub:' + overdub + ' replace: ' + replace);
        this.SetStatus('Recording');
        // TODO: Start record audio
    }

    StopRecording() {
        this.isRecording = false;
        this.isOverdub = false;
        this.isReplaced = false;
        console.log('Stopped recording');
        // TODO: Stop recording audio
        this.SetStatus('');
    }

    AddEffect(effect: string) {
        this.effects.push(effect);
        // TODO: Add effect to audio
    }
}