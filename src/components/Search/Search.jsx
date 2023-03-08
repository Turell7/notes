import { useState } from 'react'

export function Search() {
  const [input, setInput] = useState('')

  // console.log(input)
  return (
    <form>
      <div>
        <input className="form-control" type="text" placeholder="Search..." value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </form>
  )
}
