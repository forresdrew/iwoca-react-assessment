import { useEffect, useState } from "react";
import "./App.css";
import Applications from "./Applications";
import Header from "./Header";
import ApplicationClient from "./api/ApplicationClient";
import Application from "./models/Application";
import DateUtils from "./utils/DateUtils";
import { Button } from "./ui/Button/Button";

function App() {
  const [applicationData, setApplicationData] = useState([] as Application[]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageIsLoading, setPageIsLoading] = useState(false);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const [dataLoadError, setDataLoadError] = useState(false);

  const loadData = async (): Promise<void> => {
    await new ApplicationClient()
      .getApplicationsByIndex(currentPage)
      .then(response => {
        const responseData = response.data as Application[];
        let apps: Application[] = [];

        responseData.forEach(app => {
          app.date_created = DateUtils.formatDateYYYYMMDD(app.date_created);
          app.expiry_date = DateUtils.formatDateYYYYMMDD(app.expiry_date);

          apps.push(app);
        });

        setApplicationData(apps);
      })
      .catch(e => {
        setDataLoadError(true);
      });

    setButtonIsLoading(false);
    setPageIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      // if first render
      if (!buttonIsLoading) {
        setPageIsLoading(true);
      }
      await loadData();
    })();
  }, [currentPage]);

  const onLoadMoreClicked = async (): Promise<void> => {
    setButtonIsLoading(true);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <Header />
      {dataLoadError ? (
        <div data-testid="load-error-container" className="centered-container">
          <h2>Unable to load data, refresh to try again</h2>
        </div>
      ) : pageIsLoading ? (
        <div data-testid="activity-indicator" className="centered-container">
          <div className="activity-indicator" />
        </div>
      ) : (
        <Applications applications={applicationData} />
      )}
      {!dataLoadError && applicationData.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <Button label="Load More" onClick={onLoadMoreClicked} isDisabled={buttonIsLoading} />
        </div>
      )}
    </div>
  );
}

export default App;
