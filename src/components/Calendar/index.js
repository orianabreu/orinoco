import React, { useState } from 'react';
import DatePicker, {CalendarContainer} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button';

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = ({ value, onClick }) => (
        <Button onClick={onClick}>
            {value}
        </Button>
    );

    const MyContainer = ({ className, children }) => {
        return (
        <div style={{ padding: "5px", background: "#C0C5C1", color: "#f0f0f0" }}>
            <CalendarContainer className={className}>
            <div style={{ position: "relative" }}>{children}</div>
            </CalendarContainer>
        </div>
        );
    };
    return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        calendarContainer={MyContainer}
        customInput={<ExampleCustomInput />}
        />
    );
}