import { ThemeProvider } from "@/components/theme-provider"
import NotesApp from "@/components/NotesApp"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NotesApp />
    </ThemeProvider>
  )
}

export default App