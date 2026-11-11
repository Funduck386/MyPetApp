interface PetImageProps {
  image: string
  breed: string
}

function PetImage({ image, breed }: PetImageProps) {
  if (!breed) {
    return (
      <div className="flex h-96 w-full max-w-md items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-slate-400">
        Pick a breed to see its picture
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={breed}
      className="h-96 w-full max-w-md rounded-2xl object-cover shadow-lg"
    />
  )
}

export default PetImage