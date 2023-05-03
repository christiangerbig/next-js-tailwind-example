import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ArrowLeftSolid = () => {
  return (
    <div
      className={`
        flex
        h-[3rem]
        w-[3rem]
        items-center
        justify-center
        rounded-full
        bg-debian-red
        text-white
        lg:h-[4.5625rem]
        lg:w-[4.5625rem]
      `}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="text-3xl text-white lg:text-5xl"
      />
    </div>
  );
};

export default ArrowLeftSolid;
