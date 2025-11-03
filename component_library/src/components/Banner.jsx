import { BsCheckCircleFill } from "react-icons/bs";
import { PiWarningFill } from "react-icons/pi";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export default function Banner({ children, status = "neutral" }) {
  const colorClasses = {
    success: "text-green-800 bg-green-100",
    warning: "text-yellow-800 bg-yellow-100",
    error: "text-red-800 bg-red-100",
    neutral: "text-blue-800 bg-blue-100",
  };

  const icon = {
    success: <BsCheckCircleFill />,
    warning: <PiWarningFill />,
    error: <FaCircleXmark />,
    neutral: <FaCircleInfo />,
  };

  const colorClass = colorClasses[status];

  return <div>{children}</div>;
}
