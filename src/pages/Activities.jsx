import { useState } from "react";
import ActivityCard from "../components/ActivityCard";

export default function Activities() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Yoga",
      category: "Self-care",
      date: "2025-12-15",
      duration: 30,
      image: "/images/yoga.jpg",
    },
    {
      id: 2,
      name: "Reading",
      category: "Productivity",
      date: "2025-12-15",
      duration: 45,
      image: "/images/reading.jpg",
    },
    {
      id: 3,
      name: "Watching TV",
      category: "Reward",
      date: "2025-12-15",
      duration: 60,
      image: "/images/tv.jpg",
    },
    // …more example data
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Your Activities
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {activities.map((act) => (
          <ActivityCard key={act.id} activity={act} />
        ))}
      </div>
    </div>
  );
}
