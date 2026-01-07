"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface Note {
  id: string
  title: string
  description: string
  createdAt: Date
}

interface NoteFormProps {
  onAdd: (title: string, description: string) => void
  editingNote: Note | null
  onUpdate: (id: string, title: string, description: string) => void
  onCancelEdit: () => void
}

export default function NoteForm({ onAdd, editingNote, onUpdate, onCancelEdit }: NoteFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title)
      setDescription(editingNote.description)
      setError("")
    } else {
      setTitle("")
      setDescription("")
    }
  }, [editingNote])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!title.trim()) {
      setError("Title is required")
      return
    }

    if (editingNote) {
      onUpdate(editingNote.id, title, description)
    } else {
      onAdd(title, description)
      setTitle("")
      setDescription("")
    }
  }

  const isSubmitDisabled = !title.trim()

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-slate-900">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (error) setError("")
            }}
            placeholder="Enter note title..."
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
          {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-slate-900">
            Description
            <span className="ml-1 text-xs font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add more details..."
            rows={3}
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white transition-all disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-slate-800 active:scale-95"
        >
          {editingNote ? "Update Note" : "Add Note"}
        </button>
      </form>

      {editingNote && (
        <button
          onClick={onCancelEdit}
          className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-900 transition-all hover:bg-slate-50 active:scale-95"
        >
          Cancel
        </button>
      )}
    </div>
  )
}
