export * from "./FormSelect";

export const linkedinRegex =
  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(in)\/([-a-zA-Z0-9]+)\/*/gim;
export const githubRegex =
  /^(https?:\/\/)?(www\.)?github\.com\/(?<username>[a-zA-Z0-9_]{1,39})(?!\/)$/gim;
export const otherLinkRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/gm;

export function decodeJobType(jobType: string): string {
  jobType = jobType.toLowerCase();
  switch (jobType) {
    case "fulltime":
      return "Temps plein";
    case "apprenticeship":
      return "Alternance";
    case "parttime":
      return "Temps partiel";
    case "internship":
      return "Stage";
    case "freelance":
      return "Freelance";
    default:
      return "Non spécifié";
  }
}
