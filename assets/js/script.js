

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

const modalSearch = document.querySelector('#modal-search');
const modalCards = [...document.querySelectorAll('#modal-list .tense-card')];
const modalEmpty = document.querySelector('#modal-empty');

if (modalSearch && modalEmpty) {
    modalSearch.addEventListener('input', createSearchHandler(modalCards, modalEmpty));
}

const conditionalSearch = document.querySelector('#conditional-search');
const conditionalCards = [...document.querySelectorAll('#conditional-list .tense-card')];
const conditionalEmpty = document.querySelector('#conditional-empty');

if (conditionalSearch && conditionalEmpty) {
    conditionalSearch.addEventListener('input', createSearchHandler(conditionalCards, conditionalEmpty));
}

const phrasalSearch = document.querySelector('#phrasal-search');
const phrasalRows = [...document.querySelectorAll('#phrasal-list tr')];
const phrasalEmpty = document.querySelector('#phrasal-empty');

if (phrasalSearch && phrasalEmpty) {
    phrasalSearch.addEventListener('input', createSearchHandler(phrasalRows, phrasalEmpty));
}

const newSearches = [
    ['#to-be-search', '#to-be-list .tense-card', '#to-be-empty'],
    ['#going-search', '#going-list .tense-card', '#going-empty'],
    ['#reported-search', '#reported-list .tense-card', '#reported-empty'],
    ['#clauses-search', '#clauses-list .tense-card', '#clauses-empty'],
    ['#articles-search', '#articles-list .tense-card', '#articles-empty'],
    ['#prepositions-search', '#prepositions-list .tense-card', '#prepositions-empty'],
    ['#collocations-search', '#collocations-list tr', '#collocations-empty'],
    ['#idioms-search', '#idioms-list tr', '#idioms-empty'],
    ['#verbs-search', '#verbs-list .tense-card', '#verbs-empty'],
    ['#used-search', '#used-list .tense-card', '#used-empty'],
    ['#nouns-search', '#nouns-list .tense-card', '#nouns-empty'],
    ['#pronouns-search', '#pronouns-list .tense-card', '#pronouns-empty'],
    ['#adjectives-search', '#adjectives-list .tense-card', '#adjectives-empty'],
    ['#comparisons-search', '#comparisons-list .tense-card', '#comparisons-empty'],
    ['#simple-search', '#simple-list .tense-card', '#simple-empty'],
    ['#compound-search', '#compound-list .tense-card', '#compound-empty'],
    ['#complex-search', '#complex-list .tense-card', '#complex-empty'],
    ['#tags-search', '#tags-list .tense-card', '#tags-empty'],
    ['#inversion-search', '#inversion-list .tense-card', '#inversion-empty'],
    ['#cleft-search', '#cleft-list .tense-card', '#cleft-empty']
];

newSearches.forEach(([searchSelector, itemSelector, emptySelector]) => {
    const search = document.querySelector(searchSelector);
    const items = [...document.querySelectorAll(itemSelector)];
    const empty = document.querySelector(emptySelector);

    if (search && empty) {
        search.addEventListener('input', createSearchHandler(items, empty));
    }
});
