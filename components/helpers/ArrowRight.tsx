import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ArrowRightFilled = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center text-white">
      <FontAwesomeIcon icon={faAngleRight} className="text-5xl text-white" />
    </div>
  );
};

export default ArrowRightFilled;
