import React from 'react';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";

const Analytics = () => {
  const chartConfig = {
    type: "line",
    height: 500,
    width: '100%',
    series: [
      {
        name: "Bookings",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        background: '#f1f5f9',
      },
      title: {
        text: 'PARTY Booking Analytics',
        align: 'left',
        style: {
          fontSize: '24px',
          color: '#000000',
        },
      },
      colors: ["#000000"], 
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          style: {
            colors: "#000000", 
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#000000", 
          },
        },
      },
      grid: {
        borderColor: "#000000", 
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div className="flex  bg-f1f5f9 scrollbar-hide overflow-y-scroll"> 
      {/* Sidebar */}
      <nav className="bg-gray-400 text-black ">
        <ul className="flex flex-col items-center">
        <li>
      <a2 href="#" className="flex items-center gap-2 p-4">
        <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" className="w-6 h-6 rounded-full"></img>
        <span className="font-semibold">AdminBoard</span>
      </a2>
    </li>
    <li>
      <a href='admin'><a2 href="/admin" className="flex items-center gap-2 p-4">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a2></a>
    </li>
    <li>
      <a href='profiles'><a2 href="/profiles" className="flex items-center gap-2 p-4">
        <i className="fas fa-user"></i>
        <span>Add Events</span>
      </a2></a>
    </li>
    <li>
      <a href='wallet'><a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-wallet"></i>
        <span>Wallet</span>
      </a2></a>
    </li>
    <li>
      <a href='analytics'><a2 href="analytics" className="flex items-center gap-2 p-4">
        <i className="fas fa-chart-bar"></i>
        <span>Analytics</span>
      </a2></a>
    </li>
    <li>
      <a href='tasks'><a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-tasks"></i>
        <span>Tasks</span>
      </a2></a>
    </li>
    {/* <li>
      <a href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-cog"></i>
        <span>Settings</span>
      </a>
    </li> */}
    {/* <li>
      <a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-question-circle"></i>
        <span>Help</span>
      </a2>
    </li> */}
    <li>
    <a href='homepage'> <a2 href="#" className="flex items-center gap-2 p-4">
        <i className="fas fa-sign-out-alt"></i>
        <span>Log out</span>
      </a2></a>
    </li>
        </ul>
      </nav>
      {/* Analytics Content */}
      <Card className="mx-auto w-full">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center bg-white text-black" 
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Party Booking Analytics
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Visualization of bookings using this chart.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Analytics;










// import React from 'react';
// import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
// import Chart from "react-apexcharts";

// const Analytics = () => {
//   const chartConfig = {
//     type: "line",
//     height: 500,
//     width: '100%',
//     series: [
//       {
//         name: "Bookings",
//         data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//       },
//     ],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//         background: '#f1f5f9',
//       },
//       title: {
//         text: 'Houseboat Booking Analytics',
//         align: 'left',
//         style: {
//           fontSize: '24px',
//           color: '#000000',
//         },
//       },
//       colors: ["#000000"], 
//       stroke: {
//         curve: "smooth",
//         width: 3,
//       },
//       xaxis: {
//         categories: [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//         ],
//         labels: {
//           style: {
//             colors: "#000000", 
//           },
//         },
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#000000", 
//           },
//         },
//       },
//       grid: {
//         borderColor: "#000000", 
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     },
//   };

//   return (
    
//     <div className="flex h-screen bg-f1f5f9 scrollbar-hide overflow-y-scroll"> 
//       <Card className="mx-auto w-full">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center bg-white text-black" 
//         >
//           <div>
//             <Typography variant="h6" color="blue-gray">
//               Houseboat Booking Analytics
//             </Typography>
//             <Typography
//               variant="small"
//               color="gray"
//               className="max-w-sm font-normal"
//             >
//               Visualize the booking trends for houseboats using this chart.
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="px-2 pb-0">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Analytics;










// import React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardBody from '@mui/material/CardContent';
// import { Typography } from '@mui/material';
// import Chart from 'chart.js/auto';

// const AdminAnalytics = () => {
//   const chartConfig = {
//     type: "line",
//     height: 500,
//     width: '100%',
//     series: [
//       {
//         name: "Bookings",
//         data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//       },
//     ],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//         background: '#f1f5f9',
//       },
//       title: {
//         text: 'Houseboat Booking Analytics',
//         align: 'left',
//         style: {
//           fontSize: '24px',
//           color: '#000000',
//         },
//       },
//       colors: ["#000000"], 
//       stroke: {
//         curve: "smooth",
//         width: 3,
//       },
//       xaxis: {
//         categories: [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//         ],
//         labels: {
//           style: {
//             colors: "#000000", 
//           },
//         },
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#000000", 
//           },
//         },
//       },
//       grid: {
//         borderColor: "#000000", 
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     },
//   };

//   return (
//     <div className="flex h-screen bg-f1f5f9 scrollbar-hide overflow-y-scroll"> 
//       <div className='flex'>
//         <nav className="bg-gray-400 text-white">
//           <ul className="flex flex-col items-center">
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <img src="https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="" className="w-6 h-6 rounded-full"></img>
//                 <span className="font-semibold">AdminBoard</span>
//               </a>
//             </li>
//             <li>
//               <a href="/admin" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-home"></i>
//                 <span>Home</span>
//               </a>
//             </li>
//             <li>
//               <a href="/profiles" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-user"></i>
//                 <span>Profiles</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-wallet"></i>
//                 <span>Wallet</span>
//               </a>
//             </li>
//             <li>
//               <a href="/analytics" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-chart-bar"></i>
//                 <span>Analytics</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-tasks"></i>
//                 <span>Tasks</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-cog"></i>
//                 <span>Settings</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-question-circle"></i>
//                 <span>Help</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center gap-2 p-4">
//                 <i className="fas fa-sign-out-alt"></i>
//                 <span>Log out</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <Card className="mx-auto w-full">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center bg-white text-black" 
//           >
//           <div>
//             <Typography variant="h6" color="blue-gray">
//               Houseboat Booking Analytics
//             </Typography>
//             <Typography
//               variant="small"
//               color="gray"
//               className="max-w-sm font-normal"
//             >
//               Visualize the booking trends for houseboats using this chart.
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="px-2 pb-0">
//           <canvas id="myChart" width="400" height="400"></canvas>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default AdminAnalytics;
