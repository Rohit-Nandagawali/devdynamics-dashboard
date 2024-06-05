import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
const DailyActivity: React.FC = () => {


    const series = [
        {
            name: 'PR Open',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'PR Merged',
            data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
            name: 'Commits',
            data: [25, 37, 29, 48, 40, 101, 95]
        },
        {
            name: 'PR Reviewed',
            data: [22, 31, 39, 30, 33, 50, 43]
        },
        {
            name: 'PR Comments',
            data: [28, 35, 32, 49, 41, 107, 99]
        },
        {
            name: 'Incident Alerts',
            data: [13, 28, 40, 27, 30, 47, 37]
        },
        {
            name: 'Incidents Resolved',
            data: [21, 36, 25, 43, 39, 98, 87]
        }
    ];



    const options: ApexOptions = {
        labels: ["PR Open", "PR Merged", "Commits", "PR Reviewed", "PR Comments", "Incident Alerts", "Incidents Resolved"],

        colors: ["#EF6B6B", "#61CDBB", "#FAC76E", "#C2528B", "#0396A6", "#5F50A9", "#8F3519"],



        chart: {
            height: 350,
            type: 'area'
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },


        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }


    return (
        <ReactApexChart
            type="area"
            options={options}
            series={series}
            height={350}
        />
    );
};


export default DailyActivity