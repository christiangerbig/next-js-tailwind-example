import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ArrowRightFilled = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <FontAwesomeIcon
        icon={faAngleRight}
        className="text-4xl text-white lg:text-5xl"
      />
    </div>
  );
};

export default ArrowRightFilled;
