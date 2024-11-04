const products = [
    { id: 1, nama: 'Laptop', harga: '10.000.000' },
    { id: 2, nama: 'Smartphone', harga: '5.000.000' },
    { id: 3, nama: 'Tablet', harga: '3.500.000' },
    { id: 4, nama: 'Headphone', harga: '750.000' },
    { id: 5, nama: 'Kamera', harga: '8.000.000' },
    { id: 6, nama: 'Smartwatch', harga: '2.000.000' },
    { id: 7, nama: 'Printer', harga: '1.500.000' },
    { id: 8, nama: 'Monitor', harga: '2.500.000' },
    { id: 9, nama: 'Keyboard', harga: '300.000' },
    { id: 10, nama: 'Mouse', harga: '150.000' },
];

const rowsPerPage = 3;
let currentPage = 1;

function renderTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = products.slice(start, end);

    pageData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.id}</td><td>${item.nama}</td><td>${item.harga}</td>`;
        tableBody.appendChild(row);
    });

    document.getElementById('page-info').textContent = `Halaman ${currentPage}`;
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === Math.ceil(products.length / rowsPerPage);
}

function changePage(direction) {
    currentPage += direction;
    renderTable();
}

// Initial render
renderTable();
