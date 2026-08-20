

const searchInput = document.querySelector('#verb-search');
const verbRows = [...document.querySelectorAll('#verb-list tr')];
const emptyRow = document.querySelector('#empty-row');

if (searchInput && emptyRow) {
    searchInput.addEventListener('input', (event) => {
        const keyword = event.target.value.trim().toLowerCase();
        let visibleRows = 0;

        verbRows.forEach((row) => {
            const matches = row.textContent.toLowerCase().includes(keyword);
            row.hidden = !matches;
            if (matches) visibleRows += 1;
        });

        emptyRow.style.display = visibleRows ? 'none' : 'block';
    });
}

const lessonSearch = document.querySelector('#lesson-search');
const lessonCards = [...document.querySelectorAll('.lesson-card')];
const lessonEmpty = document.querySelector('#lesson-empty');

if (lessonSearch && lessonEmpty) {
    lessonSearch.addEventListener('input', (event) => {
        const keyword = event.target.value.trim().toLowerCase();
        let visibleCards = 0;

        lessonCards.forEach((card) => {
            const matches = card.dataset.search.includes(keyword);
            card.hidden = !matches;
            if (matches) visibleCards += 1;
        });

        lessonEmpty.style.display = visibleCards ? 'none' : 'block';
    });
}
