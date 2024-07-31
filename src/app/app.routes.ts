import { Routes } from '@angular/router';
import { PhonecaseDisplayComponent } from './phonecases/phonecase-display/phonecase-display.component';
import { PhonecaseAddComponent } from './phonecases/phonecase-add/phonecase-add.component'
import { PhonecaseHomeComponent } from './phonecases/phonecase-home/phonecase-home.component';
import { ProgrammerAddComponent } from './programmers/programmer-add/programmer-add.component';
import { ProgrammerDisplayComponent } from './programmers/programmer-display/programmer-display.component';
import { ProgammerHomeComponent } from './programmers/progammer-home/progammer-home.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{'path': '', component: HomeComponent},
	{'path': 'viewPhonecases', component: PhonecaseHomeComponent},
	{'path': 'displayPhonecases', component: PhonecaseDisplayComponent},
	{'path': 'addPhonecases', component: PhonecaseAddComponent},
	{'path': 'addProgrammers', component: ProgrammerAddComponent},
	{'path': 'displayProgrammers', component: ProgrammerDisplayComponent},
	{'path': 'viewProgrammers', component: ProgammerHomeComponent}
];
