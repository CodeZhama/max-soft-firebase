import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import CabinetLayout from "../layout/cabinet";
import Payment from "../modules/cabinet/dashboard/payment";
import Application from "../modules/main/application";
import Home from "../modules/main/home";
import AddStudents from "../modules/cabinet/dashboard/add-students";
import Students from "../modules/cabinet/dashboard/students";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CabinetLayout />}>
          <Route index element={<Home />} />
          <Route path="application" element={<Application />} />
          <Route path="admin/student/create" element={<AddStudents />} />
          <Route path="admin/students" element={<Students />} />
          <Route path="admin/payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
