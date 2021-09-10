import React, { useState } from 'react'
import Schedule from '../../containers/schedule'
import { mockdata } from './mock'
import { isTouchDevice } from '../../common/helpers/mobileLayout'
import { WeekSwitch } from '../../components/weekSwitch'

export const StudentsSchedule = () => {
  const [week, setWeek] = useState('first')
  const changeWeek = () => setWeek(week === 'first' ? 'second' : 'first')
  return (
    <div style={{ overflow: 'hidden' }}>
      <WeekSwitch week={week} setWeek={changeWeek} />
      <Schedule
        scheduleData={mockdata}
        group={mockdata.groupName}
        week={week}
        isMobile={isTouchDevice()}
      />
    </div>
  )
}

export default StudentsSchedule
