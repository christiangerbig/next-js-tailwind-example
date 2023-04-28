import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeftSolid = (): JSX.Element => {
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
      <FontAwesomeIcon icon={faAngleLeft} className="text-5xl text-white" />
    </div>
  );
};

export default ArrowLeftSolid;
