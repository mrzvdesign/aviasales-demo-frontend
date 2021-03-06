import React, { Component } from "react";
import styled from "styled-components";

import DayPicker, { DateUtils } from "react-day-picker";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
import { withClickOutside } from "react-clickoutside";
import "./datepicker.css";

import calendar from "./calendar.svg";
import CheckOneDirection from "./CheckOneDirection";

const DateSelect = styled.div`
  cursor: pointer;
  flex-basis: 50%;
`;
const CalendarImg = styled.img`
  margin-right: 1rem;
`;

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  cursor: pointer;
`;

const Layout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 16.666667%;
  }
`;

const DateFields = Layout.extend`
  position: relative;
  display: flex;
  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

const Picker = styled.div`
  background: #fff;
  border: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const Departures = InputWrapper.extend`
  position: relative;
  margin-right: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
    margin-right: 2px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const Arrival = InputWrapper.extend`
  position: relative;
`;

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const PickerWithOutside = withClickOutside()(Picker);

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];

const LABELS = {
  nextMonth: "следующий месяц",
  previousMonth: "предыдущий месяц"
};

const prices = {
  25: ["43 606"],
  26: ["43 606"],
  27: ["42 606"],
  28: ["41 387"]
};

function dateFormat(day) {
  return day
    ? format(new Date(day), "DD MMMM, dd", {
        locale: ruLocale
      })
    : "";
}

export default class DatePicker extends Component {
  state = {
    from: "",
    to: "",
    isDateToOpen: false,
    isDateFromOpen: false
  };

  showDateTo = () => {
    this.setState({ isDateToOpen: !this.state.isDateToOpen });
  };

  showDateFrom = () => {
    this.setState({ isDateFromOpen: !this.state.isDateToOpen });
  };

  setDateTo = (day, { selected }) => {
    this.setState({
      to: selected ? undefined : day,
      isDateToOpen: false,
      isDateFromOpen: false
    });
  };

  setDateFrom = (day, { selected }) => {
    this.setState({
      from: selected ? undefined : day,
      isDateToOpen: false,
      isDateFromOpen: false
    });
  };

  onClickOutside = () => {
    this.setState({
      isDateToOpen: false,
      isDateFromOpen: false
    });
  };

  renderDay(day) {
    const date = day.getDate();
    const dateStyle = {
      fontSize: 18,
      fontWeight: 700,
      width: 40,
      height: 20,
      color: "#4A4A4A"
    };
    const priceStyle = {
      fontSize: "10px",
      textAlign: "center",
      color: "#00C455"
    };
    const cellStyle = {};
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {prices[date] &&
          prices[date].map((price, i) => (
            <div key={i} style={priceStyle}>
              {price}
            </div>
          ))}
      </div>
    );
  }
  render() {
    return (
      <DateFields>
        <DateSelect onClick={this.showDateTo}>
          <Departures>
            <Input
              date
              type="text"
              name="ddto"
              placeholder="Туда"
              value={dateFormat(this.state.to)}
              readOnly
            />
            <CalendarImg alt="Календарь" src={calendar} />
          </Departures>
        </DateSelect>
        <DateSelect onClick={this.showDateFrom}>
          <Arrival>
            <Input
              date
              type="text"
              name="ddfrom"
              placeholder="Обратно"
              value={dateFormat(this.state.from)}
              readOnly
            />
            <CalendarImg alt="Календарь" src={calendar} />
          </Arrival>
        </DateSelect>
        {this.state.isDateToOpen && (
          <PickerWithOutside onClickOutside={this.onClickOutside}>
            <DayPicker
              selectedDays={[new Date(this.state.to)]}
              disabledDays={[{ after: new Date(this.state.from) }]}
              onDayClick={this.setDateTo}
              locale={"ru"}
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              labels={LABELS}
              renderDay={this.renderDay}
            />
            <CheckOneDirection />
          </PickerWithOutside>
        )}
        {this.state.isDateFromOpen && (
          <PickerWithOutside onClickOutside={this.onClickOutside}>
            <DayPicker
              selectedDays={[new Date(this.state.from)]}
              disabledDays={[{ before: new Date(this.state.to) }]}
              onDayClick={this.setDateFrom}
              locale={"ru"}
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              firstDayOfWeek={1}
              labels={LABELS}
              renderDay={this.renderDay}
              onClickOutside={this.onClickOutside}
            />
            <CheckOneDirection />
          </PickerWithOutside>
        )}
      </DateFields>
    );
  }
}
