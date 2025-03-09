// task 2 Adding Support Tickets Dynamically
function addTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');

    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket'); // creating a div for tickets

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName; // section for customer's name

    const issueText= document.createElement('p');
    issueText.textContent = issueDescription; // section for issues

    const priorityState = document.createElement('span');
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute('class', priorityLevel.toLowerCase()); // section for priority level

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button'); // making a button to resolve ticket issue