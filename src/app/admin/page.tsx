import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage your dictionary content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/all-words"
          className="group block p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C6.596 6.253 2 10.849 2 16.5S6.596 26.747 12 26.747s10-4.596 10-10.247S17.404 6.253 12 6.253z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                All Words
              </h2>
              <p className="text-sm text-gray-400">
                View and manage all dictionary words
              </p>
            </div>
          </div>
        </Link>

        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 opacity-50 cursor-not-allowed">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-600 rounded-lg">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-400">Settings</h2>
              <p className="text-sm text-gray-500">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
