//Enum - enumeration (is also a type) compiled to object in js
//By using Enums we are signaling to other engineers that this is a collection of very closely related values
//values cannot be added to enums at runtime
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}
