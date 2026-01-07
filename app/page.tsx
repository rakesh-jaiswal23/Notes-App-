"use client"

import { useState, useEffect } from "react"
import NoteForm from "@/components/note-form"
import NoteList from "@/components/note-list"
import Loader from "@/components/loader"
import EmptyState from "@/components/empty-state"

interface Note {
  id: string
  title: string
  description: string
  createdAt: Date
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  // Simulate API call on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const addNote = (title: string, description: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date(),
    }
    setNotes([newNote, ...notes])
  }

  const updateNote = (id: string, title: string, description: string) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title, description } : note)))
    setEditingNote(null)
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Notes</h1>
          <p className="mt-2 text-lg text-slate-600">Capture your thoughts and ideas in one place</p>
        </div>

        {/* Form Section */}
        <div className="mb-12">
          <NoteForm
            onAdd={addNote}
            editingNote={editingNote}
            onUpdate={updateNote}
            onCancelEdit={() => setEditingNote(null)}
          />
        </div>

        {/* Content Section */}
        {isLoading ? (
          <Loader />
        ) : notes.length === 0 ? (
          <EmptyState />
        ) : (
          <NoteList notes={notes} onDelete={deleteNote} onEdit={setEditingNote} />
        )}
      </div>
    </main>
  )
}
