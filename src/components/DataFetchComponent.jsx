import { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

const DataFetchComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Data Fetch Example</h2>
      <button onClick={fetchData}>Fetch Data</button>

      {loading ? (
        <div className="loader-container">
          <GridLoader color={"#ffffff"} loading={true} size={20} />
        </div>
      ) : (
        <div>
          {error ? (
            <p>Error occurred: {error}</p>
          ) : (
            <div>
              <p>ID: {data.id}</p>
              <p>Title: {data.title}</p>
              <p>Body: {data.body}</p>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default DataFetchComponent;
