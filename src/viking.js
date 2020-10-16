// Soldier
class Soldier {
    constructor (health, strength) {
        this.strength = strength;
        this.health = health;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health,strength);
        this.name= name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 ) {
            return (`${this.name} has received ${damage} points of damage`);
        } else {
            return (`${this.name} has died in act of combat`);
        }
    }

    battleCry() {
        return ('Odin Owns You All!');
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength)  {
        super (health,strength);
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return (`A Saxon has received ${damage} points of damage`);
        } else {
            return (`A Saxon has died in combat`);
        }
    }
}


// War
class War {
    constructor() {
       this.vikingArmy =[ ];
        this.saxonArmy = [ ];
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    } 

    vikingAttack () {
        let randomIndexSaxon = [Math.floor(Math.random()*this.saxonArmy.length)]; // generates the index of the attacked saxon
        let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; // generates a the viking that will attack
        let randomSaxon = this.saxonArmy[randomIndexSaxon]; // generates a saxon with the previous index generated
        let result = randomSaxon.receiveDamage(randomViking.strength); // the generates saxon recieves the damage of the generated viking
        if (randomSaxon.health <1 ) {
            this.saxonArmy.splice(randomIndexSaxon); // the attacked Saxon is removed
        }
        return result; //it returns the result of the attack
    }

    saxonAttack () {
        let randomIndexViking = [Math.floor(Math.random()*this.vikingArmy.length)]; // generates the index of the attacked viking -> it gives us a number
        let randomViking = this.vikingArmy[randomIndexViking]; // genenerates the viking with the previous index generated
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let result = randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <1) {
            this.vikingArmy.splice(randomIndexViking);
        }
        return result;
    }
}









