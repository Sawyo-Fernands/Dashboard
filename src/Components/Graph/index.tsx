import './graph.scss'
import { ApexOptions } from "apexcharts";
import React from 'react'
import Chart from 'react-apexcharts'


const options: ApexOptions = {
    chart: {
        toolbar: {
            show: true,
        },
        zoom: {
            enabled: false
        },
        foreColor: 'blue',
        background:  'white',
    },
   
    grid: {
        show: true,
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: true
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: 'white'
        },
        axisTicks: {
            color: 'white'
        },
        categories: [
            '2022-03-18T00:00:00.000Z',
            '2022-04-19T00:00:00.000Z',
            '2022-05-20T00:00:00.000Z',
            '2022-06-21T00:00:00.000Z',
            '2022-07-22T00:00:00.000Z',
            '2022-09-23T00:00:00.000Z',
            '2022-09-24T00:00:00.000Z',
        ]
    },
    fill:{
        opacity: 0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom:0.7,
            opacityTo:0.3
        }
    }
} 

const series = [
{ name: "Vendas 2020", data: [50,550,300,150,400,550,800], },{name: "Vendas 2021", data: [150,650,220,800,260,650,400],}
];


export function Graph(){
    return(
    <section className="graph">
           <h2>Relatório de Vendas</h2>
       <Chart
                            options={options}
                            series={series}
                            type="area" 
                            height={250} 
                        />   
       </section>
    )
}