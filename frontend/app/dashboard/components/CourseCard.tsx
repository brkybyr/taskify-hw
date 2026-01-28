type Course = {
  id: number
  title: string
  description: string
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition">
      <h3 className="text-lg font-semibold text-white mb-2">
        {course.title}
      </h3>

      <p className="text-slate-400 text-sm">
        {course.description}
      </p>
    </div>
  )
}
