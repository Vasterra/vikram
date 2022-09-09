export default [
    {
        id: 1,
        type: 'confirm',
        title: 'Do you have a manufacturer name or part number?'
    },
    {
        id: 2,
        type: 'input',
        title: 'Enter manufacturer name or part number'
    },
    {
        id: 3,
        type: 'select',
        title: 'Select measuring temperature range or probe type',
        options: [
            'Thermocouple',
            'RTD',
            'Thermistor',
            'Other'
        ]
    },
    {
        id: 4,
        type: 'input',
        title: 'Enter Thermocouple Type if available or skip'
    },
    {
        id: 5,
        type: 'select',
        title: 'Output Type',
        options: [
            'Relay',
            'SSR',
            'DC',
            'Other'
        ]
    },
    {
        id: 6,
        type: 'select',
        title: 'Display Size Requirement',
        options: [
            '1/4',
            '1/8',
            '1/16',
            'Larger',
            'None',
        ]
    },
    {
        id: 67,
        type: 'textarea',
        title: 'Other requirements',
    },
];