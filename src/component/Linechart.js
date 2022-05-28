import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LineChart } from 'recharts';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const LineChart=()=>{

    const data={
 
         labels:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
     
         datasets:[{
     
     label:"Salary",
     data:[1000,4000,2000,7000,3000,7000,3000],
    //  backgroundColor: [ "rgba(255,99,132,0.4)","rgba(255,45,0.4)","rgba(255,99,132,0.4)","rgba(44,138,167,0.4)","rgba(255,99,132,0.4)","rgba(255,99,132,0.4)"],
    //  borderRadius:50,
     borderSkipped:false,
 
    //  barWidth:2,
         }]
     }
     
     
     const options = {
 
         responsive: true,
         legend: { 
           display: false
         },
         type: "line",
         scales: {
           xAxes: [
             {
               barPercentage: 4,
               stacked: true
             }
           ],
           yAxes: [
             {
               
               stacked: true
             }
           ]
         }
       };
     
 
 return(
 <>
 
 <div style={{width:"200px"}}>
 <Line data={data} height={70}   options={options} ></Line>
 </div>
 {/* <Doughnut data={data} /> */}
 
 
 
 
 </>
 
 
 
 )
 
 
 
 
 
 // export const options = {
 //   responsive: true,
 //   plugins: {
 //     legend: {
 //       position: 'top' ,
 //     },
 //     title: {
 //       display: true,
 //       text: 'Chart.js Bar Chart',
 //     },
 //   },
 // };
 
 
 // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
 
 // const numbers = [1,2,3,4,5,6,7,8]
 
 
 // export const data = {
 //   labels,
 //   datasets: [
 //     {
 //       label: 'Dataset 1',
 //       data: labels.map((val, i) => numbers[i] ),
 //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
 //     },
 //     {
 //       label: 'Dataset 2',
 //       data: labels.map((val, i) => numbers[i]),
 //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
 //     },
 //   ],
 // };
 
 // export default function Chartbar1() {
 //   return <Bar options={options} data={data} />;
 // }
 
 
 
 }
 export default LineChart