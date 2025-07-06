export type ClassType = 
   "Class 1"
  | "Class 2"
  | "Class 3"
  | "Class 4"
  | "Class 5"
  | "Class 6"
  | "Class 7"
  | "Class 8"
  | "Class 9"
  | "Class 10";

export type SubjectType = 
  | "Math"
  | "Science"
  | "English"
  | "History"
  | "Art"
  | "Geography"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "Computer Science";

export interface ClassSelectionProps {
  selectedClass: ClassType | "";
}

export interface SubjectSelectionProps {
  selectedSubject: SubjectType | ""
}
export const Status = {
    SUCCESS: 'success',
    LOADING: 'loading',
    ERROR: 'error',
} as const;

export type Status = typeof Status[keyof typeof Status];