const profileName = document.getElementById('profile-name');
const profileRole = document.getElementById('profile-role');
const profileAvailability = document.getElementById('profile-availability');
const profileAge = document.getElementById('profile-age');
const profileLocation = document.getElementById('profile-location');
const profileYoe = document.getElementById('profile-yoe');
const profileEmail = document.getElementById('profile-email');
const editButton = document.getElementById('edit-button');
const formContainer = document.querySelector('.form-container');
const profileForm = document.getElementById('profile-form');
const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const availabilitySelect = document.getElementById('availability');
const ageInput = document.getElementById('age');
const locationInput = document.getElementById('location');
const yoeInput = document.getElementById('yoe');
const emailInput = document.getElementById('email');
const deleteButton = document.getElementById('delete-button');


function loadProfile() {
  const profileData = JSON.parse(localStorage.getItem('profileData')) || {};

  profileName.textContent = profileData.name || "Nama Anda";
  profileRole.textContent = profileData.role || "Front End Designer";
  profileAvailability.textContent = profileData.availability || "Full Time";
  profileAge.textContent = profileData.age || "19";
  profileLocation.textContent = profileData.location || "Jakarta";
  profileYoe.textContent = profileData.yoe || "2";
  profileEmail.textContent = profileData.email || "email@gmail.com";

  nameInput.value = profileData.name || "";
  roleInput.value = profileData.role || "";
  availabilitySelect.value = profileData.availability || "Full Time";
  ageInput.value = profileData.age || "";
  locationInput.value = profileData.location || "";
  yoeInput.value = profileData.yoe || "";
  emailInput.value = profileData.email || "";
}

function saveProfile() {
  const profileData = {
    name: nameInput.value,
    role: roleInput.value,
    availability: availabilitySelect.value,
    age: ageInput.value,
    location: locationInput.value,
    yoe: yoeInput.value,
    email: emailInput.value
  };
  localStorage.setItem('profileData', JSON.stringify(profileData));
  loadProfile();
  formContainer.style.display = "none";
}

function deleteProfile() {
  localStorage.removeItem('profileData');
  loadProfile();
  formContainer.style.display = "none";
}


//Error Handling: Check if elements exist before using them
if (editButton) {
  editButton.addEventListener('click', () => {
    if (formContainer) {
      formContainer.style.display = "block";
    } else {
      console.error("formContainer element not found!");
    }
  });
} else {
  console.error("editButton element not found!");
}

if (profileForm) {
  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveProfile();
  });
} else {
  console.error("profileForm element not found!");
}

if (deleteButton) {
  deleteButton.addEventListener('click', deleteProfile);
} else {
  console.error("deleteButton element not found!");
}

loadProfile();