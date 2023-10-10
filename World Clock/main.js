const allzone = document.getElementById('allzone');
const currentTime = document.getElementById('currentTime');
let intervalId = null;

currentTime.innerText = new Date().toLocaleString('en-uk', { timeStyle: 'full' });

let timezonesData = [];

fetch('worldclock.json')
  .then(res => res.json())
  .then(data => {
    timezonesData = data;
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

function populateTimezoneDropdown() {
  allzone.innerHTML = ''; // Clear the dropdown

  timezonesData.forEach(e => {
    const option = document.createElement('option');
    option.innerText = e.timezone;
    allzone.appendChild(option);
  });
}

const timezoneSearch = document.getElementById('timezoneSearch');
timezoneSearch.addEventListener('input', () => {
  searchTimezones();
});

timezoneSearch.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    searchTimezones();
  }
});

function searchTimezones() {
  const searchQuery = timezoneSearch.value.toLowerCase();
  const filteredTimezones = timezonesData.filter(timezone =>
    timezone.timezone.toLowerCase().includes(searchQuery)
  );
  populateTimezoneDropdown(filteredTimezones);
}
