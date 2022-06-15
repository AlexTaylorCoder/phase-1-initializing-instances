class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink
    }
}
class Lunch {
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner extends Lunch{
    #dessert;
    constructor(salad,soup,entree,dessert) {
        super(salad,soup);
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let dinner = new Dinner('cesar','chicken','vodka','steak','ice cream')
