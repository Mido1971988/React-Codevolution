import { Box, TextField , Typography } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro'
import { useState } from 'react'

const FieldSeparator = () => {
    return (
        <Typography>To</Typography>
    )
}


export const MuiDateRangePicker = () => {
    const [value, setValue] = useState<DateRange<Date>>([null, null])
    console.log('value', value)
    return (
        <Box width='500px'>
            <DateRangePicker
                localeText={{start:"Check-in" , end:"Check-out"}}
                value={value}
                onChange={(newValue : DateRange<Date>) => {
                setValue(newValue)
                }}
                slots={{textField : TextField , fieldSeparator :  FieldSeparator }}
            />
        </Box>
    )
}