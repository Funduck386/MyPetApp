interface PetHeaderProps {
  title: string
}

function PetHeader({ title }: PetHeaderProps) {
  return (
    <header className="w-full bg-white py-6 shadow-sm">
      <h1 className="text-center text-4xl font-bold text-slate-800">
        {title}
      </h1>
    </header>
  )
}

export default PetHeader