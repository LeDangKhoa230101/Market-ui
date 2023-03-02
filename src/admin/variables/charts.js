// Weekly Sales
export const barCharDatatWeeklySales = [
    {
        name: 'Weekly Sales',
        data: [70, 80, 94, 90, 86, 10, 90],
    },
];

export const barChartOptionsWeeklySales = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        yaxis: {
            lines: {
                show: false,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        color: 'rgba(78, 151, 253, 0.85)',
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 6,
            columnWidth: '50px',
        },
    },
};

// Product Share
export const radialBarDataProductShare = [70];

export const radialBarOptionsProductShare = {
    chart: {
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '50%',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    color: '#111',
                    fontSize: '14px',
                    show: true,
                    offsetY: 5,
                },
            },
        },
    },
};

// Total Order
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
            yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export const areaDataTotalOrder = [
    {
        name: 'South',
        data: generateDayWiseTimeSeries(
            new Date('1 Feb 2023 GMT').getTime(),
            6,
            {
                min: 20,
                max: 80,
            },
        ),
    },
];

export const areaOptionsTotalOrder = {
    chart: {
        type: 'area',
        stacked: true,
        events: {
            selection: function (chart, e) {
                console.log(new Date(e.xaxis.min));
            },
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    toolbar: { show: false },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
    },
    grid: { show: false },
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
};

// Market Share
export const radialBarDataMarketShare = [44, 55, 67];

export const radialBarOptionsMarketShare = {
    chart: {
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '30%',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    fontSize: '14px',
                    offsetY: 6,
                },
                total: {
                    show: true,
                    label: {
                        show: false,
                    },
                    formatter: function (w) {
                        return 166;
                    },
                },
            },
        },
    },
    colors: ['#66a4fb', '#fdd266', '#d75a6e'],
};

// Analytics
export const lineDataAnalytics = [
    {
        name: 'Sales',
        type: 'column',
        data: [15, 45, 12, 50, 75, 13, 30, 99, 75, 90, 55, 15],
    },
    {
        name: 'Expense',
        type: 'column',
        data: [2, 48, 19, 59, 25, 9, 36, 9, 79, 70, 57, 5],
    },
];

export const lineOptionsAnalytics = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '28px',
            borderRadius: 4,
        },
    },
    colors: ['#68a6fd', '#9099ab'],
    stroke: {
        width: [4, 0, 0],
    },
    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        labels: {
            style: {
                fontSize: '14px',
                colors: '#9099ab',
                fontWeight: 400,
            },
        },
    },
    markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
            size: 8,
        },
    },
    yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
        labels: {
            style: {
                fontSize: '14px',
                colors: '#9099ab',
                fontWeight: 400,
            },
        },
    },
    legend: {
        position: 'top',
        fontSize: '14px',
    },
};

// Analytics Mobile
export const lineDataAnalyticsMobile = [
    {
        name: 'Sales',
        data: [15, 45, 12, 50, 75, 13, 30, 99, 75, 90, 55, 15],
    },
    {
        name: 'Expense',
        data: [2, 48, 19, 59, 25, 9, 36, 9, 79, 70, 57, 5],
    },
];

export const lineOptionsAnalyticsMobile = {
    chart: {
        type: 'bar',
        height: 700,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
            columnWidth: '28px',
            borderRadius: 4,
        },
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff'],
        },
    },
    colors: ['#68a6fd', '#9099ab'],
    stroke: {
        width: [4, 0, 0],
    },
    tooltip: {
        shared: true,
        intersect: false,
    },
    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        labels: {
            style: {
                fontSize: '14px',
                colors: '#9099ab',
                fontWeight: 400,
            },
        },
    },
    markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
            size: 8,
        },
    },
    // yaxis: {
    //     tickAmount: 5,
    //     min: 0,
    //     max: 100,
    //     labels: {
    //         style: {
    //             fontSize: '14px',
    //             colors: '#9099ab',
    //             fontWeight: 400,
    //         },
    //     },
    // },
    legend: {
        position: 'top',
        fontSize: '14px',
    },
};
