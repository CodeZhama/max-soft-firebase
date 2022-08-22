import { Alert, Button, Card, OutlinedInput, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { ContextFunc } from "../../../../context/Context";
import { addDoc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { Stack } from "@mui/system";
///
export default function AddStudents() {
  const { openBars, studentCollectionRef, getAllStudents } = ContextFunc();

  const [moreInput, setMoreInput] = useState(false);
  const [isSend, setIsSend] = useState(false);
  //Inputs default
  const [contractNumber, setContractNumber] = useState("");
  const [email, setEmail] = useState("");
  const [enterData, setEnterData] = useState("");
  const [fillial, setFillial] = useState("");
  const [firsName, setFirstName] = useState("");
  const [happyDay, setHappyDay] = useState("");
  const [lastName, setLastName] = useState("");
  const [passNumber, setPassNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinFl, setPinFl] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");

  async function createStudent() {
    try {
      if (
        passNumber === "" ||
        contractNumber === "" ||
        email === "" ||
        enterData === "" ||
        fillial === "" ||
        firsName === "" ||
        happyDay === "" ||
        lastName === "" ||
        phoneNumber === "" ||
        pinFl === "" ||
        salary === "" ||
        status === ""
      ) {
        alert("Iltimos qoldirilgan inputni to`ldiring!");
      } else {
        const req = await addDoc(studentCollectionRef, {
          pass_number: passNumber,
          contract_number: contractNumber,
          email: email,
          enter_data: enterData,
          filial: fillial,
          firstName: firsName,
          happy_day: happyDay,
          lastName: lastName,
          phone_number: phoneNumber,
          pinFl: pinFl,
          salary: salary,
          status: status,
        });
        getAllStudents();
        setPassNumber("");
        setContractNumber("");
        setPhoneNumber("");
        setEmail("");
        setSalary("");
        setEnterData("");
        setFillial("");
        setPinFl("");
        setFirstName("");
        setLastName("");
        setHappyDay("");
        setStatus("");
        // setIsSend(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  function opneMoreInput() {
    setMoreInput(!moreInput);
  }

  return (
    <StyleAddStudents openBars={openBars}>
      {isSend ? (
        <Stack>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      ) : (
        ""
      )}
      <div className="addBtn__title">
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#283593",
            fontSize: "24px",
            fontWeight: "700",
            pl: "10px",
            pr: "8px",
          }}
        >
          O`quvchilarni qoshish
        </Typography>
        <Button
          onClick={createStudent}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Create student
        </Button>
      </div>

      <CardParentStyle>
        <CardItem>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Metrika/Pasport raqami
            </label>
            <OutlinedInput
              value={passNumber}
              onChange={(e) => {
                setPassNumber(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Familiya
            </label>
            <OutlinedInput
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="#" className="label__form">
              Shartnoma raqami
            </label>
            <OutlinedInput
              value={contractNumber}
              onChange={(e) => {
                setContractNumber(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              PINFL raqami
            </label>
            <OutlinedInput
              value={pinFl}
              onChange={(e) => {
                setPinFl(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
        </CardItem>
        {/*  */}
        <CardItem>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Qabul qilingan sana
            </label>
            <OutlinedInput
              value={enterData}
              onChange={(e) => {
                setEnterData(e.target.value);
              }}
              placeholder="05-05-2022"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Ism
            </label>
            <OutlinedInput
              value={firsName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Mobil raqam
            </label>
            <OutlinedInput
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
        </CardItem>
        {/*  */}
        <CardItem>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Status
            </label>
            <OutlinedInput
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              placeholder="05-05-2022"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Email
            </label>
            <OutlinedInput
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Maosh
            </label>
            <OutlinedInput
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
        </CardItem>
        {/*  */}
        <CardItem>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Tug`ilgan kun
            </label>
            <OutlinedInput
              value={happyDay}
              onChange={(e) => {
                setHappyDay(e.target.value);
              }}
              placeholder="05-05-2022"
            />
          </Typography>

          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="" className="label__form">
              Fillial
            </label>
            <OutlinedInput
              value={fillial}
              onChange={(e) => {
                setFillial(e.target.value);
              }}
              placeholder="YY611218"
            />
          </Typography>
        </CardItem>
      </CardParentStyle>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#1565C0", mt: "20px" }}
        endIcon={<AddIcon />}
        onClick={opneMoreInput}
      >
        Qoshimcha malumotlar!
      </Button>

      {moreInput && (
        <Card sx={{ mt: "20px", py: "40px", px: "20px" }}>
          <Typography variant="h6"></Typography>
        </Card>
      )}
    </StyleAddStudents>
  );
}

const StyleAddStudents = styled.div`
  background-color: #eeeff5;
  height: 120vh;
  padding: 20px 10px 0 20px;
  font-family: Maven Pro, sans-serif;
  margin-left: ${(props) => (props.openBars ? "110px" : "330px")};
  .addBtn__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  .label__form {
    font-weight: 700;
    margin-bottom: 2px;
  }
`;

const CardParentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px 0 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #ffffff;
  margin: 20px 0 0 0;
`;
