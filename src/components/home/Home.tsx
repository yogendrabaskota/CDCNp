import { useState } from "react";
import { type ClassType, type SubjectType } from "../../types/classTypes";

const Home = () => {
  const [showClassDropdown, setShowClassDropdown] = useState<boolean>(false);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<ClassType | "">("");
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | "">("");


  
  // Class data from Class 1 to Class 10
  const classes: ClassType[] = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", 
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"
  ];

  // Subject data
  const subjects: SubjectType[] = [
    "Math", "Science", "English", "History", "Art",
    "Geography", "Physics", "Chemistry", "Biology", "Computer Science"
  ];

  const toggleClassDropdown = (): void => {
    setShowClassDropdown(!showClassDropdown);
    setShowSubjectDropdown(false);
  };

  const toggleSubjectDropdown = (): void => {
    setShowSubjectDropdown(!showSubjectDropdown);
    setShowClassDropdown(false);
  };

  const handleClassSelect = (classItem: ClassType): void => {
    setSelectedClass(classItem);
    setShowClassDropdown(false);
  };

  const handleSubjectSelect = (subject: SubjectType): void => {
    setSelectedSubject(subject);
    setShowSubjectDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 pt-24 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Welcome to Education Hub
        </h1>
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6 justify-center">
          {/* Enter Class Button and Dropdown */}
          <div className="relative">
            <button
              onClick={toggleClassDropdown}
              className="w-full md:w-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-between items-center"
            >
              {selectedClass || "Enter Class"}
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${showClassDropdown ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </button>
            
            {showClassDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {classes.map((classItem, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleClassSelect(classItem)}
                        className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                      >
                        {classItem}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Enter Subject Button and Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSubjectDropdown}
              className="w-full md:w-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-between items-center"
            >
              {selectedSubject || "Enter Subject"}
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${showSubjectDropdown ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            </button>
            
            {showSubjectDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {subjects.map((subject, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSubjectSelect(subject)}
                        className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                      >
                        {subject}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Selected Options Display */}
        {(selectedClass || selectedSubject) && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Your Selection:</h3>
            {selectedClass && (
              <p className="text-gray-700 dark:text-gray-200">Class: {selectedClass}</p>
            )}
            {selectedSubject && (
              <p className="text-gray-700 dark:text-gray-200">Subject: {selectedSubject}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;