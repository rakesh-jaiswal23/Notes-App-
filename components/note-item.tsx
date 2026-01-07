"use client"

import { useState } from "react"

interface Note {
  id: string
  title: string
  description: string
  createdAt: Date
}

interface NoteItemProps {
  note: Note
  onDelete: () => void
  onEdit: (note: Note) => void
}

export default function NoteItem({ note, onDelete, onEdit }: NoteItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => onDelete(), 150)
  }

  const formattedDate = new Date(note.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white p-4 transition-all duration-150 ${
        isDeleting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 break-words">{note.title}</h3>
          {note.description && <p className="mt-1 text-slate-600 break-words">{note.description}</p>}
          <p className="mt-3 text-xs text-slate-400">{formattedDate}</p>
        </div>
        <div className="shrink-0 flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-100 active:scale-95"
            aria-label={`Edit note: ${note.title}`}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-50 px-3 py-2 font-medium text-red-600 transition-colors hover:bg-red-100 active:scale-95"
            aria-label={`Delete note: ${note.title}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
