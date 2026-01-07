# 📝 Notes App

A clean and modern **Notes App** built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. This app lets you create, edit, and delete notes with a smooth UI and simple state management.

---

## 🚀 Features

* ✍️ Add, edit, and delete notes
* ⏳ Loading and empty states for better UX
* 📱 Responsive and clean UI

---

## ▶️ How to Run

**Requirements**

* Node.js 18+

**Steps**

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🧩 Component Breakdown

* **NoteForm**: Handles adding and editing notes with basic validation
* **NoteList**: Renders the list of notes
* **NoteItem**: Displays a single note with edit & delete actions
* **Loader**: Shown while app is initializing
* **EmptyState**: Shown when no notes exist

---

## 🔁 State Explanation

* Notes state is managed in the main page using React `useState`
* Data flows top-down via props
* Child components trigger updates using callback functions

---

## ⚠️ Assumptions & Limitations

* Notes are stored in memory (no database)
* Data resets on page refresh
* API behavior is simulated using `setTimeout`

---

## 🛠 Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **UI**: Tailwind CSS, Radix UI
* **State Management**: React Hook
* **Icons**: Lucide React
* **Animations**: Tailwind + CSS transitions

---

## 📂 Project Structure

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ globals.css
components/
 ├─ note-form.tsx
 ├─ note-list.tsx
 ├─ note-item.tsx
 ├─ loader.tsx
 ├─ empty-state.tsx
lib/
public/
styles/
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/notes-app.git
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and visit:

```
http://localhost:3000
```

---

## 🧠 How It Works

* Notes are stored in local React state
* On page load, a fake API delay is simulated using `setTimeout`
* Notes can be edited or deleted instantly
* UI updates are smooth with transitions

---

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
```

---

## 📸 UI States

* **Loader** → while app is initializing
* **Empty State** → when no notes exist
* **Notes List** → when notes are added

---

## 🔮 Future Improvements

* Persist notes using LocalStorage / Database
* Authentication
* Search & filter notes
* Markdown support
* Cloud sync

---

## 👨‍💻 Author

**Rakesh Jaiswal**
Fullstack Developer (React, Next.js,Node.js)


