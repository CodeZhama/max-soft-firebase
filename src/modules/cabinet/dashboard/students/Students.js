import React from "react";
import styled from "styled-components";
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
///
import { ContextFunc } from "../../../../context/Context";
import { db } from "../../../../firebase-config";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
///

const label = { inputProps: { "aria-label": "Checkbox demo" } };
//
export default function AddStudents() {
  const { openBars, students, getAllStudents } = ContextFunc();

  async function deleteStudent(id) {
    console.log("Hello");
    try {
      const studentDoc = doc(db, "students", id);
      await deleteDoc(studentDoc);
      getAllStudents();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledAddStudents openBars={openBars}>
      <Card>
        <div className="card__header">
          <Typography
            variant="p"
            component="div"
            sx={{ fontWeight: "700", fontSize: "20px", py: "10px", px: "10px" }}
          >
            O`quvchilar
          </Typography>
          <ButtonGroup sx={{ gap: "20px" }}>
            <IconButton>
              <SearchIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
            <IconButton>
              <CloudDownloadIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
            <IconButton>
              <LocalPrintshopIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
            <IconButton>
              <ViewWeekIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
            <IconButton>
              <FilterAltIcon sx={{ width: "25px", height: "25px" }} />
            </IconButton>
          </ButtonGroup>
        </div>
        <ListStyle>
          <div className="list__title">
            <div className="check__name">
              <Checkbox sx={{ width: "50px", height: "50px" }} {...label} />
              <div>Name</div>
            </div>
            <div className="title">Email</div>
            <div className="kpi__status">
              <div className="kpi">KPI</div>
              <div className="status">Status</div>
            </div>
            <div className="salary">Salary</div>
            <div className="action">Action</div>
          </div>

          <div className="fetch__data">
            {students?.map((item) => {
              return (
                <div className="fetch__data__item" key={item.id}>
                  <div className="fetch__check__name">
                    <Checkbox
                      sx={{ width: "50px", height: "50px" }}
                      {...label}
                    />
                    <div className="">{item.firstName}</div>
                  </div>
                  <div className="fetch__email">{item.email}</div>
                  <div className="fetch__kpi__status">
                    <div className="">{item.pinFl}</div>
                    <div className="">{item.status}</div>
                  </div>
                  <div className="">${item.salary}</div>
                  <div className="action__icons">
                    <div>
                      <Tooltip title="Dont work at the moment">
                        <BorderColorIcon />
                      </Tooltip>
                    </div>
                    <div onClick={() => deleteStudent(item.id)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ListStyle>
      </Card>
    </StyledAddStudents>
  );
}

const StyledAddStudents = styled.div`
  padding: 20px 10px 20px 5px;
  font-family: "Maven Pro", sans-serif;
  margin-left: ${(props) => (props.openBars ? "120px" : "340px")};
  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 0;
  }
`;

const ListStyle = styled.div`
  padding: 0 5px;
  .list__title {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 100px;
    padding: 10px 0;
    border-bottom: 1px solid #d2d2d2;
    .check__name {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .kpi__status {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
  }
  .fetch__data {
    &__item {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(5, 1fr);
      gap: 100px;
      padding: 10px 0;
      border-bottom: 1px solid #d2d2d2;
      .fetch__check__name {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .action__icons {
        display: flex;
        align-items: center;
        gap: 30px;
      }
      .fetch__email {
      }
      .fetch__kpi__status {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }
    }
  }
`;
