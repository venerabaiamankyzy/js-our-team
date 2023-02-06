// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//
// MILESTONE 2: stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1: Trasformare la stringa foto in una immagine effettiva
//
// BONUS 2: Organizzare i singoli membri in card/schede

// MILESTONE 0

const ourTeam = [
  {
    name: "Wayne",
    lastname: "Barnett",
    position: "Founder & CEO",
    photo: `<img src = "./img/wayne-barnett-founder-ceo.jpg">`,
  },

  {
    name: "Angela",
    lastname: "Caroll",
    position: "Chief Editor",
    photo: `<img src = "./img/angela-caroll-chief-editor.jpg">`,
  },

  {
    name: "Walter",
    lastname: "Gordon",
    position: "Office Manager",
    photo: `<img src = "./img/walter-gordon-office-manager.jpg"`,
  },

  {
    name: "Angela",
    lastname: "Lopez",
    position: "Social Media Manager	",
    photo: `<img src = "./img/angela-lopez-social-media-manager.jpg">`,
  },

  {
    name: "Scott",
    lastname: "Estrada",
    position: "Developer",
    photo: `<img src="./img/scott-estrada-developer.jpg">`,
  },

  {
    name: "Barbara",
    lastname: "Ramos",
    position: "Graphic Designer",
    photo: `<img src="./img/barbara-ramos-graphic-designer.jpg">`,
  },
];
// console.log(ourTeam);
// console.log(ourTeam[1]);
// console.log(ourTeam[1].name);

// MILESTONE 1
for (let i = 0; i < ourTeam.length; i++) {
  for (property in ourTeam[i]) {
    console.log(property + ": " + ourTeam[i][property]);
  }
}

// MILESTONE 2
const teamEl = document.getElementById("team");
for (let i = 0; i < ourTeam.length; i++) {
  teamEl.innerHTML += `
  
 <ul class="our-team d-flex p-5 border border-info">
    <li class="member">
      <div class = "d-flex flex-column justify-content-between >
        <img class="photo">${ourTeam[i].photo}</img>
        <h3 class="name mt-5">${ourTeam[i].name} ${ourTeam[i].lastname}</h3>
        <p class="position mt-2">${ourTeam[i].position}</p> 
      </div>   
    </li> 
</ul>`;
}
console.log(teamEl);
