class Match{
    private id:string = '';
    public homeTeam:string ='';
    public awayTeam:string = '';
    protected totalSets:number = 0;
    protected status:string = '';

    constructor(homeTeam:string,awayTeam:string){
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }  

    setHomeTeam(team:string){
        this.homeTeam = team;
    }
    setAwayTeam(team:string){
        this.awayTeam = team;
    }
    getId(){
        return this.id;
    }
    setId(id:string){
        this.id = id;
    }
    getStatus(){
        return this.status;
    }
    start(){
        this.id = Math.random().toString();
        this.totalSets++;
        this.status = 'Iniciado';
    }
    finish(){
        this.status = 'Concluido';
    }
    getTotalSets(){
        return this.totalSets;
    }
}

export default Match;