import NoteItem from "./note-item"

interface Note {
  id: string
  title: string
  description: string
  createdAt: Date
}

interface NoteListProps {
  notes: Note[]
  onDelete: (id: string) => void
  onEdit: (note: Note) => void
}

export default function NoteList({ notes, onDelete, onEdit }: NoteListProps) {
  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={() => onDelete(note.id)} onEdit={onEdit} />
      ))}
    </div>
  )
}
