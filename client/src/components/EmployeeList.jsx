import { useState, useEffect } from 'react'
import Axios from 'axios'

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    const getEmployee = () => {
      Axios.get('http://localhost:3001/employees')
      .then((res) => setEmployeeList(res.data))
    }
    getEmployee()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center mt-8 gap-6'>
      <h1 className='text-2xl font-bold'>Our Team</h1>
      {
        employeeList.map((employee) => (
          <div key={employee.id}>
            <h1 className='bg-green-600 py-1.5 px-10 rounded-xl'>{employee.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default EmployeeList