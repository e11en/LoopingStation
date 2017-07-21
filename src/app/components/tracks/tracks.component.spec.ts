import { TestBed, async } from '@angular/core/testing';

import { CoreModule } from '../../core/core.module';
import { TracksComponent } from './tracks.component';

describe('TracksComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TracksComponent
            ],
            imports: [ CoreModule ]
        }).compileComponents();
    }));

    it('should create the example component', async(() => {
        const fixture = TestBed.createComponent(TracksComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
