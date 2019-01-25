import {Match} from"./src/match";
import {Set} from"./src/set";
import {Rules} from"./src/rules";

let homeTeam='',awayTeam='';

homeTeam = "Bsc";
awayTeam = 'Emelec';

let rules = new Rules().getAll();
//Empieza el match
let match = new Match(homeTeam,awayTeam);
match.start();
let idMatch = match.getId();

//Empieza el set
let totalSets = match.getTotalSets();
do {
    let currentSet = new Set(idMatch);
    currentSet.start();
    let idSet = currentSet.getId();
    //Empieza el set
    for(let x =0; x <= rules.maximo_puntos; x++){
        if(x % 2)
            currentSet.score("A");
        else
            currentSet.score("H")
    }
    let difference = (currentSet.getScore().pointsAwayTeam - currentSet.getScore().pointsHomeTeam);
    if(difference == rules.diferencia_puntos){
        //En este paso ganó alguien la contienda por llegar a los 25 puntos con una diferencia de 2
        continue;
    }
    totalSets = match.getTotalSets();
} while (totalSets <= rules.total_sets);

