import { useState, useEffect } from 'react'
import Axios from 'axios'

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([])
  const [newName, setNewName] = useState(0)

  const getEmployee = () => {
    Axios.get('http://localhost:3001/employees')
    .then((res) => setEmployeeList(res.data))
  }

  useEffect(() => {
    getEmployee()
  }, [])

  const updateEmpName = (id) => {
    Axios.put('http://localhost:3001/update', {name: newName, id: id})
    .then(() => getEmployee())
  }

  const deleteEmp = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then(() => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id
        })
      )
    })
  }

  return (
    <div className='flex flex-col justify-center items-center mt-8 gap-6'>
      <h1 className='text-2xl font-bold'>Our Team</h1>
      {
        employeeList.map((employee) => (
          <div key={employee.id}>
            <h1 className='bg-pink-400 py-1.5 px-6 text-white'>Name:{employee.name}</h1>
            <h1 className='bg-pink-400 py-1.5 px-6 text-white'>Email:{employee.email}</h1>
            <h1 className='bg-pink-400 py-1.5 px-6 text-white'>Age:{employee.age}</h1>
            <h1 className='bg-pink-400 py-1.5 px-6 text-white'>Country:{employee.country}</h1>
            <h1 className='bg-pink-400 py-1.5 px-6 text-white'>CTC:{employee.ctc}</h1>
            <div className='mt-4 flex gap-2'>
              <input 
                type="text" 
                placeholder='username..' 
                className='border-2 border-zinc-500 rounded-lg py-1 px-2'
                onChange={(e) => setNewName(e.target.value)}
              />
              <button 
                className='bg-zinc-800 text-white p-2 rounded-xl transition duration-[250ms] hover:scale-105'
                onClick={() => {updateEmpName(employee.id)}}
              >
                Update
              </button>
              <button 
                className='bg-zinc-800 text-white p-2 rounded-xl transition duration-[250ms] hover:scale-105'
                onClick={() => {deleteEmp(employee.id)}}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EmployeeList