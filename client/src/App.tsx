import { useEffect, useState } from 'react'
import PetHeader from './Component/PetHeader'
import BreedSelect from './Component/BreedSelect'
import PetImage from './Component/PetImage'

const API_URL = 'http://localhost:3001'

function App() {
  const [breeds, setBreeds] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState('')

  // Runs once when the page loads: ask the server for the breed list
  useEffect(() => {
    fetch(`${API_URL}/api/breeds`)
      .then((res) => res.json())
      .then((data) => setBreeds(data))
      .catch(() => setError('Could not load breeds. Is the server running?'))
  }, [])

  // Runs every time the dropdown changes: ask the server for a picture
  const handleBreedChange = async (breed: string) => {
    setSelectedBreed(breed)
    setError('')

    if (breed === '') {
      setImage('')
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/breeds/${breed}/image`)
      const data = await res.json()
      setImage(data.image)
    } catch {
      setError('Could not load the picture.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <PetHeader title="My Pet App" />

      <main className="flex flex-col items-center gap-6 p-8">
        <BreedSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
        />

        {error && <p className="text-red-500">{error}</p>}

        <PetImage image={image} breed={selectedBreed} />
      </main>
    </div>
  )
}

export default App