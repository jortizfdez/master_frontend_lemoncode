export default function getGamingAvg(scores: number[]): number {
  return getGamingScore(scores) / scores.length;
}

function getGamingScore(scores: number[]) : number {
  return scores.reduce((score, count) => score + count);
}

console.log(`ESTAMOS EN EL ENTORNO: ${process.env.NODE_ENV}`);
console.log(`Api base: ${process.env.API_BASE}`);