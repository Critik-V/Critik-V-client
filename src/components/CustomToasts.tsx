import { FC } from "react";
import AwesomeIcons from "./AwesomeIcons";
import "./styles/CustomToasts.scss";

export const FileRejectedToast: FC<{ dismiss: () => void }> = ({ dismiss }) => {
  return (
    <div className="custom-toast" data-type="file-rejected">
      <AwesomeIcons type="solid" name="file" />
      <p>Le fichier dépasse les 3Mo</p>
      <button onClick={dismiss}>&times;</button>
    </div>
  );
};
