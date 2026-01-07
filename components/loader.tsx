export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-slate-900 animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-600">Loading your notes...</p>
    </div>
  )
}
