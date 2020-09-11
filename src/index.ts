import fs from 'fs';
//encoding tells readfilesync whta type of content we expect to find inside the csv file. utf8 text content (string) otherwise we would get a buffer

//matches is now a big string that contains all diff matches
const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

// first we split on row
//then we map the rows to and array of strings that are split on the comma.

//get Man U wins
let manUnitedWins = 0;
//Enum - enumeration (is also a type) compiled to object in js
//By using Enums we are signaling to other engineers that this is a collection of very closely related values
//values cannot be added to enums at runtime
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

for (const match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
