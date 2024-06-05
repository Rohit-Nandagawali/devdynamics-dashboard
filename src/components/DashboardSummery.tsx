import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
const DashboardSummery: React.FC = () => {


    const series = [
        31, 40, 28, 51, 1, 3, 4

    ];

    const options: ApexOptions = {
        labels: ["PR Open", "PR Merged", "Commits", "PR Reviewed", "PR Comments", "Incident Alerts", "Incidents Resolved"],

        colors: ["#EF6B6B", "#61CDBB", "#FAC76E", "#C2528B", "#0396A6", "#5F50A9", "#8F3519"],

        stroke: {
            show: true,
            width: 2,
            colors: ['#292a2e']
        },

        chart: {
            width: 400,
            type: 'donut',
        },

        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    size: '70%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '.8rem',
                            fontFamily: 'Manrope, Arial, sans-serif',
                            fontWeight: 600,
                            color: undefined,
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: '32px',
                            fontFamily: 'Manrope, Arial, sans-serif',
                            fontWeight: 400,
                            color: "white",
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Manrope, Arial, sans-serif',
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
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
            type="donut"
            options={options}
            series={series}
            height={350}
        />
    );
};


export default DashboardSummery