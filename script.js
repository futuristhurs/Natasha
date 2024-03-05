// Simple example to toggle "Completed" status of a task
const taskList = document.querySelector('.card ul');

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});

// Login form
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate form submission (replace with actual authentication logic)
    const role = loginForm.role.value;
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Implement role-based authentication logic here (replace placeholders)
    if (role === 'student') {
        // Check student credentials (replace with actual authentication process)
        if (username === 'student' && password === 'student123') {
            // Login successful (redirect to student page)
            window.location.href = 'student_dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid student credentials.';
        }
    } else if (role === 'supervisor') {
        // Check supervisor credentials (replace with actual authentication process)
        if (username === 'supervisor' && password === 'supervisor123') {
            // Login successful (redirect to supervisor page)
            window.location.href = 'supervisor_dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid supervisor credentials.';
        }
    } else if (role === 'university') {
        // Check university administrator credentials (replace with actual authentication process)
        if (username === 'university' && password === 'university123') {
            // Login successful (redirect to university page)
            window.location.href = 'university_dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid university administrator credentials.';
        }
    } else {
        errorMessage.textContent = 'Invalid role or credentials.';
    }
});


// Registering Form

const stepIndicator = document.getElementById('step-indicator');
const stepContent = document.getElementById('step-content');
const step1Form = document.getElementById('step-1-form');
const step2Form = document.getElementById('step-2-form');
const step3Form = document.getElementById('step-3-form');

let currentStep = 1;

step1Form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedRole = step1Form.role.value;

    // Update UI for next step based on selected role
    currentStep++;
    updateStepIndicator();
    updateStepContent(selectedRole);
});

step2Form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Access form data (school name, department, matric number)
    const schoolName = step2Form.schoolName.value;
    const department = step2Form.department.value;
    const matricNumber = step2Form.matricNumber.value;

    // Implement logic to store student data (replace with actual logic, e.g., using AJAX or local storage)
    console.log(`School Name: ${schoolName}`);
    console.log(`Department: ${department}`);
    console.log(`Matriculation Number: ${matricNumber}`);

    // Proceed to next step (replace with actual navigation logic)
    currentStep++;
    updateStepIndicator();

    // Assuming step 3 is final, display confirmation message
    stepContent.innerHTML = `<h2>Registration successful!</h2>`;
});

step3Form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Handle additional logic for step 3 if needed (e.g., finalizing registration)
});

function updateStepIndicator() {
    const steps = stepIndicator.querySelectorAll('.step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.remove('active');
    }
    steps[currentStep - 1].classList.add('active');
}

function updateStepContent(role) {
    // Clear existing content
    stepContent.innerHTML = '';

    // Add content based on selected role (replace with actual content)
    if (role === 'student') {
        // Add step 2 and 3 content for student registration
      } else if (role === 'supervisor') {
        // Add step 2 and 3 content for supervisor registration
      } else if (role === 'university') {
        // Add step 2 and 3 content for university administrator registration
      }
    }
    