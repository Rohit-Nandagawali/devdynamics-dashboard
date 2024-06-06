import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { DayWiseActivity } from '../../App';

interface DailyActivityChartProps {
    dayWiseActivityData: DayWiseActivity[] | undefined
}

const DailyActivityChart: React.FC<DailyActivityChartProps> = ({ dayWiseActivityData }) => {


    console.log("daywise activity data", dayWiseActivityData);


    // Define the interface for the series data
    interface SeriesData {
        name: string;
        data: number[];
    }

    const dailyActivityData = dayWiseActivityData


    // Extract labels and colors
    const labels = [
        'PR Open',
        'PR Merged',
        'Commits',
        'PR Reviewed',
        'PR Comments',
        'Incident Alerts',
        'Incidents Resolved'
    ];



    // Initialize series data structure with explicit type
    const seriesData: SeriesData[] = labels.map(label => ({
        name: label,
        data: []
    }));

    // Fill series data
    dayWiseActivityData?.forEach(entry => {
        entry.items.children.forEach(item => {
            const seriesIndex = labels.indexOf(item.label);
            if (seriesIndex !== -1) {
                seriesData[seriesIndex].data.push(parseInt(item.count, 10));
            }
        });
    });


    const options: ApexOptions = {
        labels: ["PR Open", "PR Merged", "Commits", "PR Reviewed", "PR Comments", "Incident Alerts", "Incidents Resolved"],

        colors: ["#EF6B6B", "#61CDBB", "#FAC76E", "#C2528B", "#0396A6", "#5F50A9", "#8F3519"],



        chart: {
            height: 300,
            type: 'area',

        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd/MM/yy'
            }
        },
        xaxis: {
            type: 'category',
            categories: dailyActivityData?.map(entry => entry.date),
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '0.6rem',
                    fontFamily: 'Manrope, Arial, sans-serif'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#ffffff', // Change this to your desired color
                    fontSize: '12px',
                    fontFamily: 'Manrope, Arial, sans-serif'
                }
            }
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Manrope, Arial, sans-serif',

            labels: {

                colors: '#ffffff',
                useSeriesColors: false
            }
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
            series={seriesData}
            height={350}
        />
    );
};


export default DailyActivityChart