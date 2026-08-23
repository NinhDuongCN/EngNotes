function createCard_EngNotes(){
    const card = document.createElement("article");
    card.classList.add("card");
    card.classList.add("active");
    card.classList.add("maximized");
    card.id = "EngNotes";
    card.innerHTML = `
    <div class="card-controllers">
        <span class="card-title">EngNotes | Noted by Nguyenhx</span>
        <a class="card-controller btn minimize"></a>
        <a class="card-controller btn restore"></a>
        <a class="card-controller btn close"></a>
    </div>
    <div class="card-body">
        <iframe width="100%" height="300" frameborder="no" allow="autoplay; encrypted-media"
            src="https://engnotes.nguyenhx.vn"></iframe>
    </div>
`;
    return card;
}