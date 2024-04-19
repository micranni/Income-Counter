function getInputs() {
    const regularShifts = parseInt(document.getElementById('regularInput').value) || 0;
    const liberoShifts = parseInt(document.getElementById('liberoInput').value) || 0;
    const coachingShifts = parseInt(document.getElementById('coachingInput').value) || 0;

    return { regularShifts, liberoShifts, coachingShifts };
}

function calculateCash(shifts) {
    const regularCash = shifts.regularShifts * 167;
    const liberoCash = shifts.liberoShifts * 200;
    const coachingCash = shifts.coachingShifts * 300;

    return { regularCash, liberoCash, coachingCash };
}

function displayShiftsAndCash() {
    const shifts = getInputs();
    const cash = calculateCash(shifts);

    document.getElementById('regularShiftDisplay').textContent = `${shifts.regularShifts} Regular Shifts`;
    document.getElementById('regularCashDisplay').textContent = `${cash.regularCash}`;

    document.getElementById('liberoShiftDisplay').textContent = `${shifts.liberoShifts} Libero Shifts`;
    document.getElementById('liberoCashDisplay').textContent = `${cash.liberoCash}`;

    document.getElementById('coachingShiftDisplay').textContent = `${shifts.coachingShifts} Coaching Shifts`;
    document.getElementById('coachingCashDisplay').textContent = `${cash.coachingCash}`;

    const totalShifts = shifts.regularShifts + shifts.liberoShifts + shifts.coachingShifts;
    const totalCash = cash.regularCash + cash.liberoCash + cash.coachingCash;

    document.getElementById('totalShiftDisplay').textContent = `${totalShifts} Total Shifts`;
    document.getElementById('totalCashDisplay').textContent = `${totalCash}`;
}

const regularButton = document.getElementById('regularButton');
const liberoButton = document.getElementById('liberoButton');
const coachingButton = document.getElementById('coachingButton');

regularButton.addEventListener('click', displayShiftsAndCash);
liberoButton.addEventListener('click', displayShiftsAndCash);
coachingButton.addEventListener('click', displayShiftsAndCash);
