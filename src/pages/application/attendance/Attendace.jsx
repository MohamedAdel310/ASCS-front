import React, { useState } from "react";
// import ChartDonate from "./components/Chart-donate";
import DonutChart from "./components/ChartDonat";
import TableDay from "./components/Table-day";
import "../style/attendance.css";
import "../../../components/search";
import employeeDataday from "./__delete__employeedata.json";
import Search from "../../../components/search";
import Filter from "./components/Filter";
import employeeDataweek from "./attendance_week.json";
import TableWeak from "./components/Table-weak";
import employeeDatamonth from "./attendance_month.json";
import TableMonth from "./components/Table-month";



export default function Attendance(props) {
  return (
    <div className="attendance">
      <div className="attendance--title">
        <h3>Attendance</h3>
        <div className="ends">
          <div className="day">Feb 9</div>
          <select name="date" id="date">
            <option value="1">Day</option>
            <option value="2">week</option>
            <option value="3">Month</option>
          </select>
        </div>
      </div>
      <div className="donate">
        <DonutChart
          percent=".25"
          num="10"
          text="Absense"
          charColorMain="#d92c8a"
          charColorSecond="#ffa8d7"
        />
        <DonutChart
          percent=".75"
          num="9"
          text="Late"
          charColorMain="#540375"
          charColorSecond="#d3a6e5"
        />
        <DonutChart
          percent=".5"
          num="25"
          text="Undertime"
          charColorMain="#ff7000"
          charColorSecond="#ffcaa0"
        />
        <DonutChart
          percent=".9"
          num="7"
          text="Overtime"
          charColorMain="#ffbf00"
          charColorSecond="#ffeebc"
        />
        {/* <ChartDonate num="9" text="Absense" clName="circle1" />
        <ChartDonate num="29" text="Late" clName="circle2" />
        <ChartDonate num="18" text="Undertime" clName="circle3" />
        <ChartDonate num="8" text="Overtime" clName="circle4" /> */}
      </div>
      <div className="search-box">
        <Search />
        <Filter />
      </div>
      <div className="attendance_day">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            <th>Status</th>
            <th>Arrival Time</th>
            <th>Leave Time</th>
        
          </tr>
        </thead>
        <tbody>
          {employeeDataday.map(
            ({ name, department,status,arriveTime,leaveTime }) => (
              <TableDay
                name={name}
                department={department}
                status={status}
                arriveTime={arriveTime}
                leaveTime={leaveTime}
              />
            )
          )}
        </tbody>
      </table>
      </div>
      <div className="attendance_week">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            <th>Feb9</th>
            <th>Feb10</th>
            <th>Feb11</th>
            <th>Feb12</th>
            <th>Feb14</th>
            <th>Feb15</th>
            <th>Feb16</th>
          </tr>
        </thead>
        <tbody>
          {employeeDataweek.map(
            ({ name, department,day1,day2,day3,day4,day5,day6,day7 }) => (
              <TableWeak
                name={name}
                department={department}
                day1={day1}
                day2={day2}
                day3={day3}
                day4={day4}
                day5={day5}
                day6={day6}
                day7={day7}
              />
            )
          )}
        </tbody>
      </table>
      </div>
      <div className="attendance_month">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Deparment</th>
            <th>Feb1</th>
            <th>Feb2</th>
            <th>Feb3</th>
            <th>Feb4</th>
            <th>Feb5</th>
            <th>Feb6</th>
            <th>Feb7</th>
            <th>Feb8</th>
            <th>Feb9</th>
            <th>Feb10</th>
            <th>Feb11</th>
            <th>Feb12</th>
            <th>Feb13</th>
            <th>Feb14</th>
            <th>Feb15</th>
            <th>Feb16</th>
            <th>Feb17</th>
            <th>Feb18</th>
            <th>Feb19</th>
            <th>Feb20</th>
            <th>Feb21</th>
            <th>Feb22</th>
            <th>Feb23</th>
            <th>Feb24</th>
            <th>Feb25</th>
            <th>Feb26</th>
            <th>Feb27</th>
            <th>Feb28</th>
            <th>Feb29</th>
            <th>Feb30</th>
          </tr>
        </thead>
        <tbody>
          {employeeDatamonth.map(
            ({ name, department,day1,day2,day3,day4,day5,day6,day7,day8,day9,
              day10,
              day11,
              day12,
              day13,
              day14,
              day15,
              day16,
              day17,
              day18,
              day19,
              day20,
              day21,
              day22,
              day23,
              day24,
              day25,
              day26,
              day27,
              day28,
              day29,
              day30, }) => (
              <TableMonth
                name={name}
                department={department}
                day1={day1}
                day2={day2}
                day3={day3}
                day4={day4}
                day5={day5}
                day6={day6}
                day7={day7}
                day8={day8}
                day9={day9}
                day10={day10}
                day11={day11}
                day12={day12}
                day13={day13}
                day14={day14}
                day15={day15}
                day16={day16}
                day17={day17}
                day18={day18}
                day19={day19}
                day20={day20}
                day21={day21}
                day22={day22}
                day23={day23}
                day24={day24}
                day25={day25}
                day26={day26}
                day27={day27}
                day28={day28}
                day29={day29}
                day30={day30}
              />
            )
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
