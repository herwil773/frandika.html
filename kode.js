const data = [
    { no: 1, nama: 'frandika erlanda', usia: 25 },
    { no: 2, nama: 'anugrah dwi p', usia: 900 },
    { no: 3, nama: 'deva', usia: 18},
    { no: 4, nama: 'sartini', usia: 18 },
    { no: 5, nama: 'prabowo', usia: 70 },
    { no: 6, nama: 'gibran', usia: 36 },
    { no: 7, nama: 'jokowi 10tahun menjabat', usia: 60 },
    { no: 8, nama: 'elzio lihat mama baa', usia: 10 },
    { no: 9, nama: 'herwin saputra s.kom', usia: 30 },
    { no: 10, nama: 'dewi kuryati', usia: 37 },
]

const rowsPerPage = 3;
let currentPage = 1;

function renderTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.no}</td><td>${item.nama}</td><td>${item.usia}</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('page-info').textContent = `Halaman ${currentPage}`;
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === Math.ceil(data.length / rowsPerPage);
}

function changePage(direction) {
    currentPage += direction;
    renderTable();
}

// Initial render
renderTable();
