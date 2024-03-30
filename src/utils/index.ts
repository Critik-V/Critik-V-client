export * from "./MatchRegex";
export * from "./preventDefault";

export const linkedinRegex =
  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(in)\/([-a-zA-Z0-9]+)\/*/gm;
export const githubRegex =
  /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/gim;
export const otherLinkRegex =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/gm;
