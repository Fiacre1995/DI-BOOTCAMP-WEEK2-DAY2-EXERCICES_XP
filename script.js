/*Exercice1*/
let x = 5;
let y = 12;
if(x>y) {
    console.log("la variable x est la plus grande");
}else{
    console.log("la variable y est la plus grande");
}

/*Exercice2*/
let newDog = "Chihuahua";
newDogLength = newDog.length;
console.log(newDogLength);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
Uper = newDog.toUpperCase;
Lower = newDog.toLowerCase;
if(newDog === "Chihuahua"){
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée");
}else {
    console.log("Je m'en fous, je préfère les chats");
}

/*Exercice3*/
let nbr1 = prompt('Entrer un Nombre');
if(nbr1%2 == 0){
    console.log("nbr1 est un nombre pair");
}else{
    console.log("nbr1 est un nombre impair");
}

/*Exercice4*/
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
usersLength =console.log(users.length);
usersLength = parseInt(usersLength);
Taille = usersLength+2;
if(usersLength == 0){
console.log("personne n'est en ligne")
}else if(usersLength == 1){
console.log(users[0] +" est en ligne")   
}else if(usersLength == 2){
console.log(users[0] + "et" + users[1] + " sont en ligne ")
}else{
console.log(users[0] + "et" + users[1] + " sont en ligne et nous avons en plus " + Taille + " connectés" );
}
console.log(users[0]);