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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-12 md:pt-24 px-4">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Welcome to Education Hub
        </h1>

        <div className="space-y-4">
          {/* Class Dropdown */}
          <div>
            <label htmlFor="class-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Class
            </label>
            <select
              id="class-select"
              className="w-full bg-blue-700 text-white dark:bg-blue-600 font-medium rounded-lg text-sm px-4 py-3 focus:outline-none"
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
          </div>

          {/* Subject Dropdown */}
          <div>
            <label htmlFor="subject-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject
            </label>
            <select
              id="subject-select"
              className="w-full bg-blue-700 text-white dark:bg-blue-600 font-medium rounded-lg text-sm px-4 py-3 focus:outline-none"
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
        </div>

        {/* Done Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleDoneClick}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home