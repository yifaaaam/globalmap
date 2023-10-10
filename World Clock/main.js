const allzone = document.getElementById('allzone');
const currentTime = document.getElementById('currentTime');
let intervalId = null; // Variable to store the interval ID

currentTime.innerText = new Date().toLocaleString('en-uk', { timeStyle: 'full' });

let timezonesData = []; // Store the timezone data from worldclock.json

fetch('worldclock.json')
  .then(res => res.json())
  .then(data => {
    timezonesData = data; // Store the data in the global variable
    populateTimezoneDropdown(); // Populate the dropdown initially
  })
  .catch(err => console.log(err));

allzone.oninput = () => {
  clearInterval(intervalId); // Clear the previous interval
  intervalId = setInterval(() => time(), 1000); // Set a new interval
};

function time() {
  const ctime = new Date().toLocaleString('en-uk', {
    timeZone: allzone.value,
    timeStyle: 'full'
  });
  currentTime.innerText = ctime;
}

// Function to populate the dropdown with timezones
function populateTimezoneDropdown() {
  allzone.innerHTML = ''; // Clear the dropdown

  timezonesData.forEach(e => {
    const option = document.createElement('option');
    option.innerText = e.timezone;
    allzone.appendChild(option);
  });
}

// Add event listener for the search input
const timezoneSearch = document.getElementById('timezoneSearch');
timezoneSearch.addEventListener('input', () => {
  const searchQuery = timezoneSearch.value.toLowerCase();
  const filteredTimezones = timezonesData.filter(timezone =>
    timezone.timezone.toLowerCase().includes(searchQuery)
  );
  populateTimezoneDropdown(filteredTimezones);
});
