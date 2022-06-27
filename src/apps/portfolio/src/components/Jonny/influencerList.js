import billBlewitt from "./billblewitt.jpeg";
import darbyDennis from "./darbydennis.jpeg";
import brianLees from "./brianlees.jpeg";
import leahBlewitt from "./leahblewitt.jpeg";
import williamBlewitt from "./williamBlewitt.jpeg";

const influencerList = [
    { name: "Bill Blewitt", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: billBlewitt },
    { name: "Darby Dennis", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: darbyDennis },
    { name: "William Allan Blewitt", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: williamBlewitt },
    { name: "Brian Lees", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: brianLees },
    { name: "Leah Blewitt", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: leahBlewitt }
]

let currentIndex = influencerList.length, randomIndex;

// While there remain elements to shuffle.
while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [influencerList[currentIndex], influencerList[randomIndex]] = [
        influencerList[randomIndex], influencerList[currentIndex]];
}

export default influencerList;