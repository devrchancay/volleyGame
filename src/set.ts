interface Sets{
    score(team:string):void;
    start():void;
}
export class Set implements Sets {
    idMatch:string;
    id:string='';
    pointsAwayTeam:number = 0;
    pointsHomeTeam:number = 0;
    constructor(idMatch:string){
        this.idMatch = idMatch;
    }
    setId(id:string){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    start(){
        this.id = Math.random().toString();
        return this.id;
    };
    score(team:string){
        if(team == "A")
            this.pointsAwayTeam++;
        else
            this.pointsHomeTeam++;    
    }
    getScore(){
        return {
            'pointsAwayTeam': this.pointsAwayTeam,
            'pointsHomeTeam' : this.pointsHomeTeam
        }
    }
}