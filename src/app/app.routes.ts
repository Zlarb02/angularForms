import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfileComponent },
    { path: '', component: UserProfileComponent }
];