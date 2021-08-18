const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    //hier moeten console.logs komen
    //1 Hoe ziet elk object eruit?
    console.log("Dit is de gehele persoon:", person);
    //2 Log alle namen
    console.log("Dit is de naam:", person.name);
    //3 Log het geboortejaar voor ieder persoon
    console.log("Dit is het geboortejaar:", 2021 - person.age);
    //4 Log alle namen en beroep
    console.log(person.name + " is een " + person.profession);
    //5 plaats if statement in loop die checkt of persoon ouder dan 50 is en console.log in if statement. Console.log werkt gewoon!!
    if (person.age > 50) {
      console.log("Deze persoon is ouder dan 50 jr:", person.name);
    }
  } 
