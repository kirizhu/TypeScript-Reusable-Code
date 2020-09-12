import fs from 'fs';
//encoding tells readfilesync whta type of content we expect to find inside the csv file. utf8 text content (string) otherwise we would get a buffer
import { dateStringToDate } from './utils';
export class CsvFileReader {
  // first we split on row
  //then we map the rows to and array of strings that are split on the comma.
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
        ];
      });
  }
}
