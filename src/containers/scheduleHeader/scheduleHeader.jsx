import {WeekDay} from "./scheduleHeader.style";

const ScheduleHeader = () => {
  const days = [
    {label: 'Понеділок', value: 'monday'},
    {label: 'Вівторок', value: 'tuesday'},
    {label: 'Середа', value: 'wednesday'},
    {label: 'Четвер', value: 'thursday'},
    {label: 'П\'ятниця', value: 'friday'},
    {label: 'Субота', value: 'saturday'},
  ]

  const renderedWeekDays = days.map(item => {
    return <WeekDay key={item.value}>{item.label}</WeekDay>
  })

  return (
      <>
        {renderedWeekDays}
      </>
  )
}

export default ScheduleHeader;