import React, { useState, useEffect } from 'react';
import '../style/daily-report.css';

import Header from './components/Header';
import CardViolationComp from './components/CardViolationComp';
import StatusViolationComp from './components/StatusViolationComp';
import DateInput from './components/DateInput';

import today from '../../../Functions/today';
import fetchData from '../../../api/getEventsByDay';
import { useSearchParams } from 'react-router-dom';

export default function DailyReport() {
  const [data, setData] = useState();
  const [events, setEvents] = useState();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // if there is no params set params to today date
    if (!searchParams.get('day')) {
      setDate(setSearchParams, today().split('/'));

      // when send false in fetchData function it take today date
      fetchData(setData, setEvents, false);
      setIsDataLoaded(true);
    } else {
      fetchData(setData, setEvents, getDate(searchParams));
      setIsDataLoaded(true);
    }
  }, [searchParams, setSearchParams]);

  const handleChangeDate = (event) => {
    const date = event.target.value.replaceAll('-', '/');
    setIsDataLoaded(false);

    setDate(setSearchParams, date.split('/'));
  };

  return (
    <div className="daily-report">
      <CardViolationComp data={data} />
      <Header>
        <DateInput
          onChange={handleChangeDate}
          value={inputDate(searchParams)}
        />
      </Header>
      <StatusViolationComp events={events} isViolationsLoaded={isDataLoaded} />
    </div>
  );
}

// to get date from param or for today and add it to input value
function inputDate(searchParams) {
  const date = getDate(searchParams) || today();
  return date.replaceAll('/', '-');
}

// to get date from params
function getDate(searchParams) {
  const day = searchParams.get('day');
  const month = searchParams.get('month');
  const year = searchParams.get('year');

  return day ? `${year}/${month}/${day}` : false;
}

// to set date to params
function setDate(setSearchParams, date) {
  setSearchParams({
    day: date[2],
    month: date[1],
    year: date[0],
  });
}
