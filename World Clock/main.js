const allzone = document.getElementById('allzone');
const currentTime = document.getElementById('currentTime');
let intervalId = null; // Variable to store the interval ID

// Initialize the current time
updateTime();

fetch('worldclock.json')
  .then(res => res.json())
  .then(data => {
    data.map(e => {
      const option = document.createElement('option')
      option.innerText = e.timezone
      allzone.appendChild(option)
    });
  })
  .catch(err => console.log(err))

allzone.oninput = () => {
  clearInterval(intervalId); // Clear the previous interval
  intervalId = setInterval(() => time(), 1000); // Set a new interval
}

function time() {
  const ctime = new Date().toLocaleString('en-uk', { timezone: allzone.value, timeStyle: 'full' })
  currentTime.innerText = ctime
}

// Function to initialize and update the current time
function updateTime() {
  const ctime = new Date().toLocaleString('en-uk', { timeZone: allzone.value, timeStyle: 'full' });
  currentTime.innerText = ctime;
  intervalId = setInterval(() => time(), 1000); // Start updating immediately
}

updateTime();
