document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    const email = document.getElementById('email').value;

    const studentData = { name, age, grade, email };

    try {
        // Send data to the server
        const response = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData),
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').textContent = 'Student added successfully!';
            document.getElementById('message').style.color = 'green';
            document.getElementById('studentForm').reset();
        } else {
            document.getElementById('message').textContent = `Error: ${result.error}`;
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'Error connecting to server.';
        document.getElementById('message').style.color = 'red';
        console.error(error);
    }
});
