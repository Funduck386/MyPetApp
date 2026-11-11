import { useState } from 'react'
import PetHeader from './Component/PetHeader'
import BreedSelect from './Component/BreedSelect'

const fakeBreeds = ['beagle', 'bulldog', 'husky', 'poodle', 'pug']

function App() {
  const [selectedBreed, setSelectedBreed] = useState('')

  return (
    <div className="min-h-screen bg-slate-100">
      <PetHeader title="My Pet App" />

      <main className="flex flex-col items-center gap-6 p-8">
        <BreedSelect
          breeds={fakeBreeds}
          selectedBreed={selectedBreed}
          onBreedChange={setSelectedBreed}
        />

        <p className="text-slate-600">
          Selected: {selectedBreed || 'nothing yet'}
        </p>
      </main>
    </div>
  )
}

export default App