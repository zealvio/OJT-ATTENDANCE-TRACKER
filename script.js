// 1. DATA: Complete calendar from February 1 to May 31, 2026
let attendanceData = [
    // FEBRUARY 2026
    { date: "2026-02-01", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-02-02", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-02-03", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-02-04", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-02-05", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-02-06", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-02-07", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-02-08", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-02-09", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:10 PM", status: "WORKED" },
    { date: "2026-02-10", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:22 PM", status: "WORKED" },
    { date: "2026-02-11", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:32 PM", status: "WORKED" },
    { date: "2026-02-12", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:02 PM", status: "WORKED" },
    { date: "2026-02-13", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:16 PM", status: "WORKED" },
    { date: "2026-02-14", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-02-15", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:13 PM", status: "WORKED" },
    { date: "2026-02-16", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-02-17", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:04 PM", status: "WORKED" },
    { date: "2026-02-18", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:15 PM", status: "WORKED" },
    { date: "2026-02-19", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:08 PM", status: "WORKED" },
    { date: "2026-02-20", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:05 PM", status: "WORKED" },
    { date: "2026-02-21", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-02-22", in: "", bS: "", bE: "", out: "", status: "Absent/Off" },
    { date: "2026-02-23", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:19 PM", status: "WORKED" },
    { date: "2026-02-24", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:12 PM", status: "WORKED" },
    { date: "2026-02-25", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-02-26", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:50 PM", status: "WORKED" },
    { date: "2026-02-27", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:13 PM", status: "WORKED" },
    { date: "2026-02-28", in: "", bS: "", bE: "", out: "", status: "RD" },

    // MARCH 2026
    { date: "2026-03-01", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:12 PM", status: "WORKED" },
    { date: "2026-03-02", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:10 PM", status: "WORKED" },
    { date: "2026-03-03", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:17 PM", status: "WORKED" },
    { date: "2026-03-04", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:05 PM", status: "WORKED" },
    { date: "2026-03-05", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:16 PM", status: "WORKED" },
    { date: "2026-03-06", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:25 PM", status: "WORKED" },
    { date: "2026-03-07", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-03-08", in: "", bS: "", bE: "", out: "", status: "Absent/Off" },
    { date: "2026-03-09", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:05 PM", status: "WORKED" },
    { date: "2026-03-10", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:28 PM", status: "WORKED" },
    { date: "2026-03-11", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:26 PM", status: "WORKED" },
    { date: "2026-03-12", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-03-13", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:15 PM", status: "WORKED" },
    { date: "2026-03-14", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-03-15", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:23 PM", status: "WORKED" },
    { date: "2026-03-16", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:09 PM", status: "WORKED" },
    { date: "2026-03-17", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:08 PM", status: "WORKED" },
    { date: "2026-03-18", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:17 PM", status: "WORKED" },
    { date: "2026-03-19", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:09 PM", status: "WORKED" },
    { date: "2026-03-20", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:04 PM", status: "WORKED" },
    { date: "2026-03-21", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-03-22", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:21 PM", status: "WORKED" },
    { date: "2026-03-23", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-03-24", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:05 PM", status: "WORKED" },
    { date: "2026-03-25", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:08 PM", status: "WORKED" },
    { date: "2026-03-26", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:03 PM", status: "WORKED" },
    { date: "2026-03-27", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:17 PM", status: "WORKED" },
    { date: "2026-03-28", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-03-29", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:10 PM", status: "WORKED" },
    { date: "2026-03-30", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:09 PM", status: "WORKED" },
    { date: "2026-03-31", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:06 PM", status: "WORKED" },

    // APRIL 2026
    { date: "2026-04-01", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:05 PM", status: "WORKED" },
    { date: "2026-04-02", in: "", bS: "", bE: "", out: "", status: "Absent/Off" },
    { date: "2026-04-03", in: "", bS: "", bE: "", out: "", status: "Absent/Off" },
    { date: "2026-04-04", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-05", in: "", bS: "", bE: "", out: "", status: "Absent/Off" },
    { date: "2026-04-06", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-04-07", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:07 PM", status: "WORKED" },
    { date: "2026-04-08", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:08 PM", status: "WORKED" },
    { date: "2026-04-09", in: "06:00 AM", bS: "11:59 AM", bE: "12:00 PM", out: "02:11 PM", status: "WORKED" },
    { date: "2026-04-10", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-11", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-12", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-13", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-14", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-15", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-16", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-17", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-18", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-19", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-20", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-21", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-22", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-23", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-24", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-25", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-26", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-04-27", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-28", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-29", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-04-30", in: "", bS: "", bE: "", out: "", status: "" },

    // MAY 2026 (FULL MONTH ADDED)
    { date: "2026-05-01", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-02", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-03", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-04", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-05", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-06", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-07", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-08", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-09", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-10", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-11", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-12", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-13", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-14", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-15", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-16", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-17", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-18", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-19", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-20", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-21", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-22", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-23", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-24", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-25", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-26", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-27", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-28", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-29", in: "", bS: "", bE: "", out: "", status: "" },
    { date: "2026-05-30", in: "", bS: "", bE: "", out: "", status: "RD" },
    { date: "2026-05-31", in: "", bS: "", bE: "", out: "", status: "RD" }
];

// 2. UNDO ENGINE
let historyStack = [];
function saveHistory() {
    historyStack.push(JSON.stringify(attendanceData));
    if (historyStack.length > 50) historyStack.shift();
}

window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        if (historyStack.length > 0) {
            attendanceData = JSON.parse(historyStack.pop());
            renderTable();
        }
    }
});

// 3. SMART FORMATTER (6:00 AM Format)
function formatInputTime(raw) {
    let val = raw.trim().toUpperCase();
    if (!val) return "";

    // If only numeric "6" or "14"
    if (!isNaN(val)) {
        let hour = parseInt(val);
        let ampm = hour >= 12 ? "PM" : "AM";
        let displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        return `${displayHour}:00 ${ampm}`;
    }

    // If partial "6:30"
    if (val.includes(':') && !val.includes('AM') && !val.includes('PM')) {
        let parts = val.split(':');
        let hour = parseInt(parts[0]);
        let ampm = hour >= 12 ? "PM" : "AM";
        let displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
        let mins = parts[1].padStart(2, '0');
        return `${displayHour}:${mins} ${ampm}`;
    }

    return val; 
}

// 4. CALCULATION ENGINE
function calculateTotalHours(tIn, bS, bE, tOut) {
    if (!tIn || !tOut) return '--';

    const toMinutes = (timeStr) => {
        if (!timeStr) return 0;
        let [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;
        return hours * 60 + (minutes || 0);
    };

    try {
        let start = toMinutes(tIn);
        let end = toMinutes(tOut);
        let total = end - start;

        if (bS && bE) {
            total -= (toMinutes(bE) - toMinutes(bS));
        }

        if (total <= 0) return '0 Hours, 0 Minutes';
        let h = Math.floor(total / 60);
        let m = total % 60;
        return `${h} ${h === 1 ? 'Hour' : 'Hours'}, ${m} ${m === 1 ? 'Minute' : 'Minutes'}`;
    } catch (e) { return '--'; }
}

const tableBody = document.getElementById('tableBody');

// 5. RENDER
function renderTable() {
    tableBody.innerHTML = ''; 
    let dutyDayCounter = 0;

    attendanceData.forEach((entry, index) => {
        let row = document.createElement('tr');
        const fullDateDisplay = new Date(entry.date).toLocaleString('en-US', { month: 'long', day: 'numeric' });
        
        // Counter logic: only count WORKED days starting Feb 9
        let dayDisplay = (entry.status === "WORKED") ? `Day ${++dutyDayCounter}` : '';
        let statusClass = entry.status === "WORKED" ? 'worked' : (entry.status === "RD" ? 'rd-style' : 'absent-off');

        row.innerHTML = `
            <td class="ref-col">${fullDateDisplay}</td> 
            <td class="ref-col">${dayDisplay}</td>
            <td class="log-col"><input type="text" class="time-input" value="${entry.in}" onchange="updateData(${index}, 'in', this.value)"></td>
            <td class="log-col"><input type="text" class="time-input" value="${entry.bS}" onchange="updateData(${index}, 'bS', this.value)"></td>
            <td class="log-col"><input type="text" class="time-input" value="${entry.bE}" onchange="updateData(${index}, 'bE', this.value)"></td>
            <td class="log-col"><input type="text" class="time-input" value="${entry.out}" onchange="updateData(${index}, 'out', this.value)"></td>
            <td class="res-col" style="white-space: nowrap;">${calculateTotalHours(entry.in, entry.bS, entry.bE, entry.out)}</td>
            <td class="stat-col">
                <select class="chip ${statusClass}" onchange="updateData(${index}, 'status', this.value)">
                    <option value="" ${entry.status === '' ? 'selected' : ''}>Select...</option>
                    <option value="WORKED" ${entry.status === 'WORKED' ? 'selected' : ''}>Worked</option>
                    <option value="RD" ${entry.status === 'RD' ? 'selected' : ''}>RD</option>
                    <option value="Absent/Off" ${entry.status === 'Absent/Off' ? 'selected' : ''}>Absent</option>
                </select>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// 6. UPDATE DATA
window.updateData = function(index, field, value) {
    saveHistory();
    if (['in', 'bS', 'bE', 'out'].includes(field)) {
        attendanceData[index][field] = formatInputTime(value);
    } else {
        attendanceData[index][field] = value;
    }
    renderTable(); 
};

renderTable();