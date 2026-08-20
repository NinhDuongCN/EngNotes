(()=>{
    const elFooter = document.querySelector('footer');
    const curYear = new Date().getFullYear();
    elFooter.innerHTML = `
        EngNotes · Noted by <a href="https://nguyenhx.vn" target="_blank" rel="noopener noreferrer">Nguyenhx</a> · &copy 2026${curYear > 2026 ? `-${curYear}` : ''}.
    `;
})();