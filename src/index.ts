import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

//create an instance of MatchReader and pass something  satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
