import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeftFilled = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center text-white">
      <FontAwesomeIcon icon={faAngleLeft} className="text-5xl text-white" />
    </div>
  );
};

export default ArrowLeftFilled;
