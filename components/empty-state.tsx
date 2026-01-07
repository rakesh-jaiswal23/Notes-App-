export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-20 text-center">
      <div className="text-5xl mb-4">📝</div>
      <h2 className="text-xl font-semibold text-slate-900">No notes available</h2>
      <p className="mt-2 text-slate-600">Add your first note to get started</p>
    </div>
  )
}
