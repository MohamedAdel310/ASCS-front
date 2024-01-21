import React, { useState, useEffect } from 'react';
import '../style/daily-report.css';

import Header from './components/Header';
import CardViolationComp from './components/CardViolationComp';
import StatusViolationComp from './components/StatusViolationComp';
import DateInput from './components/DateInput';

import today from '../../../Functions/today';
import fetchData from '../../../api/getEventsByDay';

export default function DailyReport() {
  const [data, setData] = useState();
  const [events, setEvents] = useState();
  const [day, setDay] = useState();
  const [isViolationsLoaded, setIsViolationsLoaded] = useState(false);

  useEffect(() => {
    fetchData(setData, setEvents, day);
    setIsViolationsLoaded(true);
  }, [day]);

  const handleChangeDate = (event) => {
    const date = event.target.value.replaceAll('-', '/');
    setIsViolationsLoaded(false);
    setDay(date);
  };

  return (
    <div className="daily-report">
      <CardViolationComp data={data} />
      <Header>
        <DateInput
          onChange={handleChangeDate}
          value={day?.replaceAll('/', '-') || today().replaceAll('/', '-')}
        />
      </Header>
      <StatusViolationComp
        events={events}
        isViolationsLoaded={isViolationsLoaded}
      />
    </div>
  );
}
