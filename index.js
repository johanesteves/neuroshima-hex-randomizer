function randomizeArmy (){
    let checkedArmies = ["army1", "army2", "3", "4", "5", "6", "7"];

    var currentIndex = checkedArmies.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = checkedArmies[currentIndex];
        checkedArmies[currentIndex] = checkedArmies[randomIndex];
        checkedArmies[randomIndex] = temporaryValue;
    }

    alert( "Army 1: " + checkedArmies[0] + " vs Army 2: " + checkedArmies[1]);
}