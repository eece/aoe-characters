export interface IUnitDetail { 
    id: Number;
    name?: String; 
    description?: String; 
    expansion?: String ; 
    age: string; 
    cost: CostI; 
    build_time?: Number;
    reload_time?: Number;
    attack_delay?: Number;
    movement_rate?: Number;
    line_of_sight?: Number;
    hit_points?: Number;
    range?: Number;
    attack?: Number;
    armor?: String;
    accuracy?: String;
} 

interface CostI {
    Wood: Number;
    Gold: Number;
    Food: Number;
}