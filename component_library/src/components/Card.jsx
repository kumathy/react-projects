import { HiOutlineCloudUpload } from "react-icons/hi";
import clsx from "clsx";

const COLOR_CLASSES = {
  gray: "bg-gray-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
};

export default function Card({
  children,
  logo = <HiOutlineCloudUpload></HiOutlineCloudUpload>,
  color = "blue",
  title = "Title",
}) {
  const colorClass = COLOR_CLASSES[color];

  const iconContainerClasses = clsx(
    "absolute",
    "-top-5 left-1/2 -translate-x-1/2",
    "size-10 flex items-center justify-center",
    "rounded-lg text-lg text-white shadow-[0px_10px_15px_-3px_#0000001A]",
    colorClass
  );

  const cardContainerClasses = clsx(
    "flex flex-col items-center",
    "max-w-100 min-h-50 px-6 pb-4",
    "rounded-lg bg-neutral-50",
    "transition hover:shadow-[0_4px_25px_0_#0000001A]"
  );

  return (
    <div className="relative w-fit">
      <div className={iconContainerClasses}>{logo}</div>
      <div className={cardContainerClasses}>
        <h1 className="mt-10 mb-2 text-lg text-center">{title}</h1>
        <p className="text-base text-center text-neutral-500">{children}</p>
      </div>
    </div>
  );
}
