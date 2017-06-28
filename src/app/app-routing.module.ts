import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: AchievementsComponent },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'achievements', component: AchievementsComponent }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }