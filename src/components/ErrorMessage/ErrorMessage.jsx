import toast from "react-hot-toast";
import s from "./ErrorMessege.module.css";
const ErrorMessage = () => {
  return (
    <div>
      <h2 className={s.ErrorMessage}>
        Something went wrong, please try again later.
      </h2>
      <button
        className={s.button}
        onClick={() => toast("Error message dismissed.")}
      >
        Dismiss
      </button>
      <button className={s.button} onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  );
};
export default ErrorMessage;
