import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../services/achievements.service';
import { Achievements } from '../achievements/achievements';

@Component({
    selector: 'app-achievements',
    templateUrl: 'achievements.component.html',
    styleUrls: ['achievements.component.css']
})

export class AchievementsComponent implements OnInit {

    achievements: Achievements[];
    charactersMarvel: any;
    constructor(private achievementsService: AchievementsService) {

    }

    ngOnInit() {
        this.achievementsService.allAPIMarvell().
                                 subscribe(charactersMarvel=> this.charactersMarvel = charactersMarvel);
    }
}