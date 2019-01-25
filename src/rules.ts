class Rules{
    protected listRules: {
        [key:string]: number
    };
    constructor(){
        this.listRules  = {
            'diferencia_puntos':2,
            'maximo_puntos':25,
            'total_sets':5,
            'diferencia_sets_ganados':3
        };
    }
    public getAll(){
        return this.listRules;
    }
    
    public change(prop:string,value:number){
        if(this.listRules.hasOwnProperty(prop)){
            this.listRules[prop] = value;
        }else{
            throw("No existe esa regla");
        }
    }
}

export default Rules;