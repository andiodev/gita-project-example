import { useEffect, useRef } from "react";
import Modal_ from "../../modal"
import Highcharts from 'highcharts';

const ChartUserModal = ({show=false, handlerClose}) => {

    const chart = useRef();

    useEffect(() => {
        const options = {
            chart: {
                type: 'column',
            },
            title: {
                text: '',
            },
            xAxis: {
                categories: ['مهر' , 'آبان' , 'آذر', 'دی', 'بهمن', 'اسفند'],
            },
            yAxis: {
                title: {
                    text: 'امتیاز',
                },
            },
            series: [
                {
                    name: 'شش ماه دوم سال 1402',
                    data: [8, 10, 15, 12, 6 , 7],
                },
            ],
        };
    
        show && Highcharts.chart(chart.current, options);
    }, [show]);

    return (
        <Modal_ show={show} handlerClose={handlerClose} title={'نمودار عملکرد'}>
            <div ref={chart} style={{margin:'20px 40px -10px 0'}}/>
        </Modal_>
    )
}

export default ChartUserModal