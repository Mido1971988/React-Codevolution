import { Stack, TextField  } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker  } from '@mui/x-date-pickers'
import { useState } from 'react'

export const MuiDateTimePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [selectedTime, setSelectedTime] = useState<Date | null>(null)
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

    console.log({
        selectedDate,
        selectedTime,
        selectedDateTime
    })

    console.log(selectedDate && selectedDate.toISOString())

    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
        <DatePicker
            label='Date Picker'
            value={selectedDate}
            onChange={ (newValue : Date | null )  => {
                setSelectedDate(newValue)
            }}
            slots={{textField: TextField}}
        />
        <TimePicker
            label='Time Picker'
            value={selectedTime}
            onChange={(newValue : Date | null ) => {
            setSelectedTime(newValue)
            }}
            slots={{textField: TextField}}
        />
        <DateTimePicker
            label='Date Time Picker'
            value={selectedDateTime}
            onChange={(newValue : Date | null ) => {
            setSelectedDateTime(newValue)
            }}
            slots={{textField: TextField}}
        />
        </Stack>
    )
}