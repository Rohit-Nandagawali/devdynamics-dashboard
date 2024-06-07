import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import { TotalActivity } from '../../types/types';

interface SummaryChartProps {
    totalActivity: TotalActivity[] | null;
    colors: string[] | undefined;
}

const SummaryChart: React.FC<SummaryChartProps> = ({ totalActivity, colors }) => {


    const series = totalActivity?.map((item) => (
        parseInt(item?.value)
    ))

    const options: ApexOptions = {
        labels: totalActivity?.map((item) => (
            item?.name
        )),

        colors: colors,

        stroke: {
            show: true,
            width: 2,
            colors: ['#1E1F24']
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
                    width: 300
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


export default SummaryChart