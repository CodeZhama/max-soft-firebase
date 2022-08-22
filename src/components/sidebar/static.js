import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AssessmentIcon from "@mui/icons-material/Assessment";
const route = [
  {
    id: 1,
    path: "/",
    name: "Home",
    icon: <HomeOutlinedIcon sx={{ width: "42px", height: "42px" }} />,
    section: [
      {
        id: 11,
        type: "Landing Page",
        list: [
          // {
          //   id: 333,
          //   typeName: "Corparate",
          //   innericon: <CorporateFareIcon />,
          //   path: "/admin/corparate",
          // },
        ],
      },
      {
        id: 22,
        type: "Dashboard",
        list: [
          {
            id: 444,
            typeName: "O`quvchilar qo`shish",
            innericon: <AssessmentIcon />,
            path: "/admin/student/create",
          },
          {
            id: 555,
            typeName: "O`quvchilar royhati",
            innericon: <AssessmentIcon />,
            path: "/admin/students",
          },
          {
            id: 666,
            typeName: "To`lov noshqaruvi",
            innericon: <AssessmentIcon />,
            path: "/admin/payment",
          },
        ],
      },
      {
        id: 33,
        type: "Widgets",
        list: [
          // {
          //   id: 666,
          //   typeName: "Analytic",
          //   innericon: <AssessmentIcon />,
          //   path: "/admin/analytic",
          // },
          // {
          //   id: 777,
          //   typeName: "Marketing",
          //   innericon: <AssessmentIcon />,
          //   path: "/admin/marketing",
          // },
          // {
          //   id: 888,
          //   typeName: "Cryptocurrency",
          //   innericon: <AssessmentIcon />,
          //   path: "/admin/cryptocurrent",
          // },
        ],
      },
    ],
  },
  {
    id: 2,
    path: "/application",
    name: "Application",
    icon: <GridViewIcon sx={{ width: "42px", height: "42px" }} />,
  },
  {
    id: 3,
    path: "/pages",
    name: "Pages",
    icon: (
      <ImportantDevicesOutlinedIcon sx={{ width: "42px", height: "42px" }} />
    ),
  },
  {
    id: 4,
    path: "/tables",
    name: "Tables Charts",
    icon: <TableChartOutlinedIcon sx={{ width: "42px", height: "42px" }} />,
  },
  {
    id: 5,
    path: "/formbutton",
    name: "Form Button",
    icon: <CheckBoxOutlinedIcon sx={{ width: "42px", height: "42px" }} />,
  },
  {
    id: 6,
    path: "/collection",
    name: "Ui COllection",
    icon: <ExtensionOutlinedIcon sx={{ width: "42px", height: "42px" }} />,
  },
  {
    id: 7,
    path: "/leave",
    name: "One Leavel",
    icon: <LogoutOutlinedIcon sx={{ width: "42px", height: "42px" }} />,
  },
];

export default route;
