# Objetivos en javascript

Hemos visto los objetivos primitivos de javascript como: 

- Numbers
- Booleans
- Strings
- Symbols
- Null
- Underfined

Otros elementos en javascript muy utilizado, pero no son primitivos, ya que tienen "superpoderes" (metodos) son: 

- Arreglos 
- Objetos


 Ejemplos:

``` Javascript
var arr = []
var obj = {}
```

 Los arreglos se declaran utilizando `[]` los objetivos se declaran `{}`.

 Los arreglos tienen sus elementos ordenados por índices, en cambio los onjetos no tienen índices. Sus elementos se rescatan u objetos mediante **llaves**. 

 Ejemplos:

```javascript
var hero= {
    name: "Thor",
    weapon: "Martillos",
    hair: "Rubio"
}

console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])
```
 
```javascript
console.log(hero.name)
console.log(hero.weapon)
console.log(hero.hair)
```



