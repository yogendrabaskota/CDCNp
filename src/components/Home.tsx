import { useAppDispatch } from "../store/hooks";
import { addBooks } from "../store/bookSlice";
import { useState } from "react";
import books from "../components/data"; // adjust path as needed


const Home = () => {
  const dispatch = useAppDispatch()
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")

  const classOptions = Object.keys(books)

  const subjectOptions = selectedClass
    ? Object.keys(books[selectedClass])
    : [];

  const handleDoneClick = () => {
    if (selectedClass && selectedSubject) {
      dispatch(addBooks(selectedClass, selectedSubject))
    } else {
      alert("Please select both class and subject")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-24 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Welcome to Education Hub
        </h1>

        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 justify-center">
          {/* Class Dropdown */}
          <select
            className="w-full md:w-48 bg-blue-700 text-white dark:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            value={selectedClass}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              setSelectedSubject(""); // Reset subject when class changes
            }}
          >
            <option value="">Select Class</option>
            {classOptions.map((classNum) => (
              <option key={classNum} value={classNum}>
                Class {classNum}
              </option>
            ))}
          </select>

          {/* Subject Dropdown */}
          <select
            className="w-full md:w-48 bg-blue-700 text-white dark:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={!selectedClass}
          >
            <option value="">Select Subject</option>
            {subjectOptions.map((subject) => (
              <option key={subject} value={subject}>
                {subject.replaceAll("_", " ")}
              </option>
            ))}
          </select>
        </div>

        {/* Done Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleDoneClick}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
          >
            Done
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home
