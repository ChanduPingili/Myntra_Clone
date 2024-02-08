import "bootstrap/dist/css/bootstrap.min.css";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border "
        style={{ width: "3rem", height: "3rem" }}
        role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
