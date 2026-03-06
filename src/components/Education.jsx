import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">Education</h2>
      <p className="text-sm text-gray-600 mb-4">Add your educational background (scaffold).</p>
      <div className="space-y-2">
        <input className="w-full p-2 border rounded" placeholder="School / University" />
        <input className="w-full p-2 border rounded" placeholder="Degree" />
        <input className="w-full p-2 border rounded" placeholder="Year / Duration" />
      </div>
      <div className="mt-4 flex justify-between">
        <Link to="/personal" className="text-gray-600 hover:underline">← Back</Link>
        <Link to="/experience" className="text-green-600 hover:underline">Next →</Link>
      </div>
    </div>
  )
}

export default Education
