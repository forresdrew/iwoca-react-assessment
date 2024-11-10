import { FunctionComponent } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import Application from "./models/Application";

type ApplicationsProps = {
  applications: Application[];
};

const Applications: FunctionComponent<ApplicationsProps> = ({ applications }) => {
  return (
    <div className={styles.Applications}>
      {applications?.map(application => {
        return <SingleApplication key={application.id} application={application} />;
      })}
    </div>
  );
};

export default Applications;
