import { useContext, createContext, React, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
const DashContext = createContext();

export default function Context({ children }) {
  const [openBars, setOpenBars] = useState(false);
  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");

  useEffect(() => {
    getAllStudents();
  }, []);

  async function getAllStudents() {
    try {
      const data = await getDocs(studentCollectionRef);
      let res = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStudents(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DashContext.Provider
      value={{
        openBars,
        setOpenBars,
        students,
        studentCollectionRef,
        getAllStudents,
      }}
    >
      {children}
    </DashContext.Provider>
  );
}

export const ContextFunc = () => {
  return useContext(DashContext);
};
