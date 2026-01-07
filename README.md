# 📝 Notes App

A clean and modern **Notes App** built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. This app lets you create, edit, and delete notes with a smooth UI and simple state management.

---

## 🚀 Features

* ✍️ Create, edit, and delete notes
* 🕒 Auto-generated timestamps for notes
* ⚡ Fast UI with React 19 & Next.js
* 🎨 Modern UI using Tailwind CSS
* 🧩 Reusable components
* ⏳ Loading & empty states
* 📱 Fully responsive design

---

## 🛠 Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **UI**: Tailwind CSS, Radix UI
* **State Management**: React Hooks
* **Forms**: React Hook Form + Zod
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
git clone 
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
npm run start    # Start production server
npm run lint     # Run ESLint
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
Frontend Developer (React, Next.js)

---

## 📄 License

This project is open-source and free to use.

---

⭐ If you like this project, give it a star and feel free to contribute!
