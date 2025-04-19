const monthYear = document.getElementById('monthYear');
const calendarDays = document.getElementById('calendarDays');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  monthYear.textContent = `${monthNames[month]} ${year}`;
  calendarDays.innerHTML = '';

  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();
  const prevMonthDays = prevLastDay.getDate();

  // Previous month's tail days
  for (let i = startDay - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    calendarDays.innerHTML += `<div class="calendar-day text-gray-400">${day}</div>`;
  }

  // Current month days
  for (let i = 1; i <= totalDays; i++) {
    const today = new Date();
    const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    calendarDays.innerHTML += `<div class="calendar-day ${isToday ? 'today bg-blue-200 font-bold rounded' : ''}">${i}</div>`;
  }

  // Fill remaining boxes from next month
  const totalBoxes = startDay + totalDays;
  const nextDays = 42 - totalBoxes;
  for (let i = 1; i <= nextDays; i++) {
    calendarDays.innerHTML += `<div class="calendar-day text-gray-400">${i}</div>`;
  }
}

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
