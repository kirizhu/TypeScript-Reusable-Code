import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
//Example of how we would instantiate
//new Summary(new WinsAnalysis(), new ConsoleReport());
