import { Injectable } from '@angular/core';
import { Achievements } from '../achievements/achievements';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export const API_Marvel_URL = "https://gateway.marvel.com:443/v1/public/characters?limit=15&ts=1&apikey=d72597496826cb29fc30c4b132f63abf&hash=e47c310d884b3e636ff018938570605e";

@Injectable()
export class AchievementsService {
    achievements: Achievements[];
    constructor(private http: Http) { }

    allAPIMarvell() {
        return this.http.get(API_Marvel_URL)
            .map(this.parseCharactersMarvel)
            .catch(this.handleError);
    }

    all(): Achievements[] {
        return [
            new Achievements("Mocking de datos en Angular", "Daniel"),
            new Achievements("Uso de servicios en Angular", "Daniel"),
            new Achievements("Tomar el curso de Ionic 2", "Daniel"),
        ];
    }

    parseCharactersMarvel(response: Response): Observable<Object> {
        let data = response.json().data.results;
        console.log(data);
        return data;
    }

    handleError(error: Response | any) {
        console.log(error);
        return Observable.throw("Algo Salió mal :(");
    }
}