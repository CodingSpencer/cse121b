
let bomList = [];
let BoM = [];

const getBoM = async() => {
    const response = await fetch("https://raw.githubusercontent.com/bcbooks/scriptures-json/master/book-of-mormon.json");
if (response.ok) {
    const data = await response.json();
    bomList = data.books;
}
};

async function getBoMVerse() {
    const bookName = document.querySelector("#book").value;
    const bookIndex = bomList.findIndex(item => item.book === bookName);

    const chapter = parseInt(document.querySelector("#chapter").value, 10);
    const chapterIndex = bomList[bookIndex].chapters.findIndex(item => item.chapter === chapter);

    const verse = parseInt(document.querySelector("#verse").value, 10);
    const verseIndex = bomList[bookIndex].chapters[chapterIndex].verses.findIndex(item => item.verse === verse);

    const verseData = bomList[bookIndex].chapters[chapterIndex].verses[verseIndex];
    const reference = verseData.reference;
    const text = verseData.text;

    const element = document.querySelector("#favs");
    let scripture = `<p><strong>${reference}</strong></p><p>${text}</p>`;

    BoM.push(scripture);
    displayBoM();
}

function displayBoM() {
    document.querySelector("#favs").innerHTML = BoM.join("<hr>");
}

getBoM();

document.querySelector('#findBoMverse').addEventListener('click', getBoMVerse);
