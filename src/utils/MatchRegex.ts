export function MatchRegex(regex: RegExp, input: string): boolean {
  return regex.test(input);
}
