type CalendarEvent = {
    date: string;
    event: string;
};

fetch('/public/data/calendar.json')
    .then(response => response.json())
    .then((data: CalendarEvent[]) => {
        const calendarContainer = document.getElementById('calendar-container');
        if (calendarContainer) {
            data.forEach(item => {
                const eventDiv = document.createElement('div');
                eventDiv.innerHTML = `
                    <h3>${item.date}</h3>
                    <p>${item.event}</p>
                `;
                calendarContainer.appendChild(eventDiv);
            });
        }
    });
