import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeftFilled = () => {
  return (
    <div className="flex items-center justify-center text-white">
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="text-4xl text-white lg:text-5xl"
      />
    </div>
  );
};

export default ArrowLeftFilled;
