export default function Badge({ children, color = "gray", shape = "square" }) {
  const colorClasses = {
    gray: "text-gray-800 bg-gray-100",
    red: "text-red-800 bg-red-100",
    yellow: "text-yellow-800 bg-yellow-100",
    green: "text-green-800 bg-green-100",
    blue: "text-blue-800 bg-blue-100",
    indigo: "text-indigo-800 bg-indigo-100",
    purple: "text-purple-800 bg-purple-100",
    pink: "text-pink-800 bg-pink-100",
  };

  const shapeClasses = {
    square: "rounded-md",
    pill: "rounded-2xl",
  };

  const colorClass = colorClasses[color];
  const shapeClass = shapeClasses[shape];

  return (
    <div className={`size-fit px-3 py-1 ${colorClass} ${shapeClass}`}>
      {children}
    </div>
  );
}
