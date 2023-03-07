import { useState } from 'react'
import Axios from 'axios'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState('')
  const [ctc, setCtc] = useState(0)

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name,
      email,
      age,
      country,
      ctc
    })
  }

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-center my-8'>Kontrol</h1>

        <label className='font-bold'>Name</label>
        <input 
          type="text" 
          className='border-2 border-zinc-500 rounded-lg py-1 px-2'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label className='font-bold'>Email</label>
        <input 
          type="email" 
          className='border-2 border-zinc-500 rounded-lg py-1 px-2'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className='font-bold'>Age</label>
        <input 
          type="number"
          className='border-2 border-zinc-500 rounded-lg py-1 px-2'
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <label className='font-bold'>Country</label>
        <input 
          type="text"
          className='border-2 border-zinc-500 rounded-lg py-1 px-2'
          onChange={(e) => setCountry(e.target.value)} 
          value={country}
        />
        <label className='font-bold'>CTC</label>
        <input 
          type="number"
          className='border-2 border-zinc-500 rounded-lg py-1 px-2'
          onChange={(e) => setCtc(e.target.value)}
          value={ctc}
        />

        <button 
          className='mt-6 bg-zinc-800 text-white p-2.5 rounded-xl transition duration-[250ms] hover:scale-105'
          onClick={addEmployee}
        >
          Sumbit
        </button>
      </div>
    </>
  )
}

export default Form