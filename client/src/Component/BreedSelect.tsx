import type { ChangeEvent } from 'react'

interface BreedSelectProps {
  breeds: string[]
  selectedBreed: string
  onBreedChange: (breed: string) => void
}

function BreedSelect({ breeds, selectedBreed, onBreedChange }: BreedSelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onBreedChange(e.target.value)
  }

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1)

  return (
    <select
      value={selectedBreed}
      onChange={handleChange}
      className="w-64 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm focus:border-cyan-500 focus:outline-none"
    >
      <option value="">Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {capitalize(breed)}
        </option>
      ))}
    </select>
  )
}

export default BreedSelect