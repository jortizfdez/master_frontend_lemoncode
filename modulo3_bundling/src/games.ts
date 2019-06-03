import getGamingAvg from "./gameScoring";
const logo = require ('./content/kaijuHeader.jpg');

const scores: number[] = [100,30,75,88,23];
const gameAvgScore:number = getGamingAvg(scores);

const messageToDisplay: string = `Your average score is ${gameAvgScore}`;

document.write(messageToDisplay);

const img = document.createElement('img');
img.src = logo;

document.getElementById('imgContainer').appendChild(img);
