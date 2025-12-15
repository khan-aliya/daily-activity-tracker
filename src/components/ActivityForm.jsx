import { useState } from "react";
import { 
  GiMeditation, GiRunningShoe, GiCookingPot, GiBookshelf,
  GiVacuumCleaner, GiShoppingBag, GiIceCreamCone 
} from "react-icons/gi";

export default function ActivityForm({ onSubmit }) {
  const [activity, setActivity] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, activity, date, duration });
  };

  const activityOptions = [
    { label: "Yoga", icon: <GiMeditation /> },
    { label: "Walk", icon: <GiRunningShoe /> },
    { label: "Cooking", icon: <GiCookingPot /> },
    { label: "Reading", icon: <GiBookshelf /> },
    { label: "Cleaning", icon: <GiVacuumCleaner /> },
    { label: "Shopping", icon: <GiShoppingBag /> },
    { label: "Enjoying dessert", icon: <GiIceCreamCone /> },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600">
        Log Your Activity
      </h2>

      {/* Category Selector */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Category</label>
        <select
          className="border rounded-md p-2 focus:outline-none focus:ring-indigo-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category...</option>
          <option value="Self-care">Self-care</option>
          <option value="Productivity">Productivity</option>
          <option value="Reward">Reward</option>
        </select>
      </div>

      {/* Activity Options with Icons */}
      <div className="flex flex-wrap gap-3">
        {activityOptions.map((opt) => (
          <button
            type="button"
            key={opt.label}
            className={`
              flex items-center gap-2 border p-2 rounded-lg cursor-pointer transition
              ${activity === opt.label
                ? "bg-indigo-100 border-indigo-500"
                : "hover:bg-indigo-50"}
            `}
            onClick={() => setActivity(opt.label)}
          >
            <span className="text-2xl text-indigo-500">{opt.icon}</span>
            <span className="font-medium">{opt.label}</span>
          </button>
        ))}
      </div>

      {/* Date Input */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Date</label>
        <input
          type="date"
          className="border rounded-md p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      {/* Duration Input */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">Duration (mins)</label>
        <input
          type="number"
          className="border rounded-md p-2"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          min="1"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Save Activity
      </button>
    </form>
  );
}
