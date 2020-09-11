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

console.log(matches);
