// script.js
document.addEventListener('DOMContentLoaded', function () {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const currentDate = new Date()
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()]
  const utcTime = currentDate.toUTCString()

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]',
  ).textContent = dayOfWeek
  document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime
})

document.addEventListener('DOMContentLoaded', function () {
  // Create an array containing the names of the days of the week.
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  // Create a new Date object representing the current date and time.
  const currentDate = new Date()

  // Get the current day of the week (e.g., Monday, Tuesday) from the daysOfWeek array.
  // The getUTCDay() method returns an index (0 for Sunday, 1 for Monday, etc.),
  // so we use it to look up the corresponding day name in the array.
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()]

  // Get the current date and time in UTC format (e.g., "Tue, 07 Sep 2023 12:00:00 GMT").
  const utcTime = currentDate.toUTCString()

  // Find an HTML element with the attribute data-testid="currentDayOfTheWeek"
  // and update its text content to display the current day of the week.
  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]',
  ).textContent = dayOfWeek

  // Find an HTML element with the attribute data-testid="currentUTCTime"
  // and update its text content to display the current UTC time.
  document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime
})

document.addEventListener('DOMContentLoaded', function () {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const currentDate = new Date()
  const dayOfWeek = daysOfWeek(currentDate.getUTCDay)
})
