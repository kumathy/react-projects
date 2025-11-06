import { BsCheckCircleFill } from "react-icons/bs";
import { PiWarningFill } from "react-icons/pi";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export default function Banner({ children, status = "neutral" }) {
  const colorClasses = {
    success: "text-green-800 bg-green-50",
    warning: "text-yellow-800 bg-yellow-50",
    error: "text-red-800 bg-red-50",
    neutral: "text-blue-800 bg-blue-50",
  };

  const icons = {
    success: <BsCheckCircleFill className="text-green-400" />,
    warning: <PiWarningFill className="text-yellow-400" />,
    error: <FaCircleXmark className="text-red-400" />,
    neutral: <FaCircleInfo className="text-blue-400" />,
  };

  const colorClass = colorClasses[status];
  const icon = icons[status];

  return (
    <div
      className={`w-full md:max-w-5xl px-4 py-3 flex gap-3 rounded-lg ${colorClass}`}
    >
      <div className="shrink-0 flex items-center h-6">{icon}</div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}
