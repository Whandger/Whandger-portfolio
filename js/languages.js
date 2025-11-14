let langData = {};

async function loadTranslations() {
    const res = await fetch("languages.json");
    langData = await res.json();
}

function setLanguage(lang) {
    const text = langData[lang].title.replace(/\n/g, "<br>");
    const about = langData[lang].about.replace(/\n/g, "<br>");
    const projects = langData[lang].projects.replace(/\n/g, "<br>");
    const formation = langData[lang].formation.replace(/\n/g, "<br>");
    const contact = langData[lang].contact.replace(/\n/g, "<br>");

    document.getElementById("aboutText").innerHTML = text;
    document.getElementById("about").innerHTML = about;
    document.getElementById("projects").innerHTML = projects;
    document.getElementById("formation").innerHTML = formation;
    document.getElementById("contact").innerHTML = contact;
}

loadTranslations().then(() => setLanguage("en"));
