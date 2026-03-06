import { Link } from 'react-router-dom'

function Experience() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Experience</h2>
      <p className="text-sm text-gray-600 mb-4">Add work or project experience (scaffold).</p>
      <div className="space-y-2">
        <input className="w-full p-2 border rounded" placeholder="Role / Title" />
        <input className="w-full p-2 border rounded" placeholder="Company / Organization" />
        <input className="w-full p-2 border rounded" placeholder="Duration" />
      </div>
      <div className="mt-4 flex justify-between">
        <Link to="/education" className="text-gray-600 hover:underline">← Back</Link>
        <Link to="/research" className="text-green-600 hover:underline">Next →</Link>
      </div>
    </div>
  )
}

export default Experience
