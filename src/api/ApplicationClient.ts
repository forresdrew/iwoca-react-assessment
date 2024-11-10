import axios from "axios";

class ApplicationClient {
  getApplicationsByIndex = async (page: number, limit: number = 5) => {
    return await axios.get(`http://localhost:3001/api/applications?_page=${page}&_limit=${limit}`);
  };
}

export default ApplicationClient;
