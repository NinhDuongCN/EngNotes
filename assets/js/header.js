(() => {
    const elHeader = document.querySelector('header');
    elHeader.innerHTML = `
        <a href="/" class="logo" aria-label="Trang chủ">
            <div class="brand">EngNotes</div>
            <div class="header-note">Noted by Nguyenhx</div>
        </a>
        <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Chuyển sang dark mode" aria-pressed="false">
            <span aria-hidden="true">◐</span> <span id="theme-label">Dark mode</span>
        </button>`;
    
    const themeToggle = document.querySelector('#theme-toggle');
    const themeLabel = document.querySelector('#theme-label');
    const savedTheme = localStorage.getItem('engnotes-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function updateTheme(theme) {
        const isDark = theme === 'dark';
        document.documentElement.dataset.theme = theme;
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Chuyển sang light mode' : 'Chuyển sang dark mode');
        themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
    }

    updateTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    themeToggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('engnotes-theme', nextTheme);
        updateTheme(nextTheme);
    });

    if ('serviceWorker' in navigator && window.isSecureContext) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' });
        });
    }
})();
