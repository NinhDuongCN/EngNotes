

const createSearchHandler = (items, emptyElement) => {
    return (event) => {
        const keyword = event.target.value.trim().toLowerCase();
        let visibleItems = 0;

        items.forEach((item) => {
            const matches = (item.dataset.search || item.textContent).toLowerCase().includes(keyword);
            item.hidden = !matches;
            if (matches) visibleItems += 1;
        });

        if (emptyElement) {
            emptyElement.style.display = visibleItems ? 'none' : 'block';
        }
    };
};

const searchInput = document.querySelector('#verb-search');
const verbRows = [...document.querySelectorAll('#verb-list tr')];
const emptyRow = document.querySelector('#empty-row');

if (searchInput && emptyRow) {
    searchInput.addEventListener('input', createSearchHandler(verbRows, emptyRow));
}

const lessonSearch = document.querySelector('#lesson-search');
const lessonCards = [...document.querySelectorAll('.lesson-card')];
const lessonEmpty = document.querySelector('#lesson-empty');

if (lessonSearch && lessonEmpty) {
    lessonSearch.addEventListener('input', createSearchHandler(lessonCards, lessonEmpty));
}

const tenseSearch = document.querySelector('#tense-search');
const tenseCards = [...document.querySelectorAll('#tense-list .tense-card')];
const tenseEmpty = document.querySelector('#tense-empty');

if (tenseSearch && tenseEmpty) {
    tenseSearch.addEventListener('input', createSearchHandler(tenseCards, tenseEmpty));
}

const passiveSearch = document.querySelector('#passive-search');
const passiveCards = [...document.querySelectorAll('#passive-list .tense-card')];
const passiveEmpty = document.querySelector('#passive-empty');

if (passiveSearch && passiveEmpty) {
    passiveSearch.addEventListener('input', createSearchHandler(passiveCards, passiveEmpty));
}
