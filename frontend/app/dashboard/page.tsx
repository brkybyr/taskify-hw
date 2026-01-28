"use client";

import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
};

export default function DashboardPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY5NjQxMjQ1LCJpYXQiOjE3Njk2Mzc2NDUsImp0aSI6ImU3YzBkZTY2NTdlYzRiMTZhMTIyYTMzMTJlMGQ1Y2QyIiwidXNlcl9pZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIn0.YfZhYnOd4k4YE2ecYFUWGn6QWPnLFHEvraiEoM28f8c";

  useEffect(() => {
    fetch("http://localhost:8000/api/courses/", {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // 🔥 BU SATIR HER ŞEYİ ÇÖZÜYOR
        const list = Array.isArray(data) ? data : data.results || [];
        setCourses(list);
        setLoading(false);
      })
      .catch(() => {
        setCourses([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-white text-lg">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {courses.length === 0 && (
        <p className="text-slate-400">No courses found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold">
              {course.title}
            </h3>

            <p className="text-slate-400 mt-1">
              {course.description}
            </p>

            <div className="mt-4 text-sm text-slate-300">
              <p>Start: {course.start_date}</p>
              <p>End: {course.end_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
