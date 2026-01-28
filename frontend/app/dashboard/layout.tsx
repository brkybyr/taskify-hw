'use client'

import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6">
        <h1 className="text-2xl font-bold mb-10">
          Taskify
        </h1>

        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="block text-gray-300 hover:text-white transition"
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/courses"
            className="block text-gray-300 hover:text-white transition"
          >
            Courses
          </Link>

          <Link
            href="/dashboard/tasks"
            className="block text-gray-300 hover:text-white transition"
          >
            Tasks
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem('access')
              window.location.href = '/login'
            }}
            className="mt-10 text-red-400 hover:text-red-300"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}
