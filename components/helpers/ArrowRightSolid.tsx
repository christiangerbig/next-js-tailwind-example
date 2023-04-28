import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ArrowRightSolid = (): JSX.Element => {
  return (
    <div
      className={`
        flex
        h-[4.5625rem]
        w-[4.5625rem]
        items-center
        justify-center
        rounded-full
        bg-debian-red
        text-white
      `}
    >
      <FontAwesomeIcon icon={faAngleRight} className="text-5xl text-white" />
    </div>
  );
};

export default ArrowRightSolid;
