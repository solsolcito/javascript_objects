function Pokemon(name, id, height, hp, defense, attackPoints) {
    this.name = name,
    this.id = id
    this.height = height
    this.hp = hp
    this.defense = defense
    this.attackPoints = attackPoints
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    this.sayName = function () {
        return "mi nombre es " + this.name + "mi altura es " + this.height

    }
    this.attack = (enemy) => {
        enemy.hp -=(this.attackPoints - enemy.defense)

    }

    this.showStats = () => {
        return `Nombre: ${this.name}, Altura: ${this.height}, vida ${this.hp}, Defensa ${this.defense}, Ataque ${this.attackPoints}`
    }
}
let pikachu = new Pokemon('Pikachu', 25, 4, 35, 40, 55)
let charmander = new Pokemon('Charmender', 4, 6, 39, 52, 43)

 pikachu.attack(charmander)