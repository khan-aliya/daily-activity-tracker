export default function ActivityCard({ activity }) {
  const { name, category, date, duration, image } = activity;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-36 object-cover"
        />
      )}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-bold text-indigo-700">{name}</h3>
        <p className="text-sm text-gray-600">{category}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{duration} mins</span>
        </div>
      </div>
    </div>
  );
}
