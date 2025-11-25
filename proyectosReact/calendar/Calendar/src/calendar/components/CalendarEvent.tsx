export const CalendarEvent = ({event}:any) => {
    const {title,user } = event;

  return (
    <>
    <strong>{title}</strong>
    <strong>{user?.name}</strong>
    </>
  )
}
