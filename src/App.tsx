import { Table } from "./Components";

function App() {
  const dataHeader = ["Name", "Age", "Country"];

  const dataBody = [
    { name: "John", age: "30", country: "USA" },
    { name: "Jane", age: "25", country: "Canada" },
    { name: "Bob", age: "20", country: "UK" },
    { name: "Mary", age: "35", country: "USA" },
    { name: "Peter", age: "40", country: "Canada" },
    { name: "Sam", age: "45", country: "UK" },
    { name: "Tom", age: "50", country: "USA" },
    { name: "Jack", age: "55", country: "Canada" },
    { name: "Jill", age: "60", country: "UK" },
    { name: "Max", age: "65", country: "USA" },
    { name: "Sara", age: "70", country: "Canada" },
    { name: "Mike", age: "75", country: "UK" },
    { name: "Paul", age: "80", country: "USA" },
    { name: "Linda", age: "85", country: "Canada" },
    { name: "John", age: "90", country: "UK" },
    { name: "Jane", age: "95", country: "USA" },
  ];

  const dataTable = { dataBody, dataHeader };

  return (
    <div>
      <Table {...dataTable} />
    </div>
  );
}

export default App;
