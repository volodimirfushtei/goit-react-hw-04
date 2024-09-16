import s from "./Loader.module.css";
import { ProgressBar } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className={s.loader}>
      <ProgressBar
        visible={true}
        height="80"
        width="280"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
