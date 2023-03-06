import EmployeeList from "./components/EmployeeList"
import Form from "./components/Form"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Form />
      <EmployeeList />
    </div>
  )
}

export default App
