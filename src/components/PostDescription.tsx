import "./styles/PostDescription.scss";
import { decodeJobType } from "@utils";
import AwesomeIcons from "./AwesomeIcons";

export function PostDescription({
  descData
}: {
  descData: {
    title: string;
    description: string;
    linkedinLink: string;
    githubLink: string;
    otherLink: string;
    jobtype: string;
    level: string;
  };
}): JSX.Element {
  return (
    <div id="single-post-description">
      <h2>{descData.title}</h2>
      <p>{descData.description}</p>
      <div className="types">
        <span>
          <AwesomeIcons type="solid" name="briefcase" /> {decodeJobType(descData.jobtype)}
        </span>
        <span>
          <AwesomeIcons type="solid" name="graduation-cap" />
          {descData.level.toLowerCase()}
        </span>
      </div>
      <div className="links">
        {descData.linkedinLink.length > 5 && (
          <a href={descData.linkedinLink} target="_blank">
            <AwesomeIcons name="linkedin" type="brands" />
            Linkedin
          </a>
        )}
        {descData.githubLink.length > 5 && (
          <a href={descData.githubLink} target="_blank">
            <AwesomeIcons name="github" type="brands" />
            Github
          </a>
        )}
        {descData.otherLink.length > 5 && (
          <a href={descData.otherLink} target="_blank">
            <AwesomeIcons name="link" type="solid" />
            Autre
          </a>
        )}
      </div>
    </div>
  );
}
