export const getFormattedDate = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.getDate()

  const formattedHours = hours % 12 || 12 // Convert 0 to 12
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

  return `${formattedHours}:${formattedMinutes}${ampm} | ${month} ${day}`
}
