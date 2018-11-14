function randomizeArmy (){

    let checkedArmies = [];

    $("input:checkbox:checked").each(function () {
        checkedArmies.push(this.value)
    });

    let currentIndex = checkedArmies.length, temporaryValue, randomIndex;

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