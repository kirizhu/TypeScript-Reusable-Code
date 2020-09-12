import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
export class MatchReader extends CsvFileReader {
  mapRow(row: string): MatchData {
    return [
      return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type assertion
      row[6],
    ];(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // Type assertion
      row[6],
    ];
  }
}
