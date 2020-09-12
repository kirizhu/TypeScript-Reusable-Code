import fs from 'fs';
import { MatchResult } from './MatchResult';
//encoding tells readfilesync whta type of content we expect to find inside the csv file. utf8 text content (string) otherwise we would get a buffer
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  // first we split on row
  //then we map the rows to and array of strings that are split on the comma.
  data: MatchData[] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(
        (row: string[]): MatchData => {
          return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // Type assertion
            row[6],
          ];
        }
      );
  }
}
