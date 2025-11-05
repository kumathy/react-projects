import { HiOutlineCloudUpload } from "react-icons/hi";

const DEFAULT_LOGO = <HiOutlineCloudUpload></HiOutlineCloudUpload>;
const DEFAULT_TITLE = "title";

export default function Card({
  children,
  logo = DEFAULT_LOGO,
  title = DEFAULT_TITLE,
}) {
  return (
    <div>
      {logo}
      <div>
        {title}
        {children}
      </div>
    </div>
  );
}
