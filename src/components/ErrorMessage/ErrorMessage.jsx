import toast from "react-hot-toast";

const ErrorMessage = () => {
  return (
    <div>
      <h2>Something went wrong, please try again later.</h2>
      <button onClick={() => toast("Error message dismissed.")}>Dismiss</button>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};
export default ErrorMessage;
