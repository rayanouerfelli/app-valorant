//création de ma div main

let monChoix = document.createElement("div");
monChoix.classList.add("MonChoix");
document.getElementById("laPage").appendChild(monChoix);
let main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);

const urlskin = "https://valorant-api.com/v1/weapons/skinchromas";

// creation d'une div pour y mettre tous mes element dans mon main
let tableau1 = document.createElement("div");
tableau1.classList.add("tableau1");
main.appendChild(tableau1);

//Récuperation des données de l'api
let dataFetch;
getlesSkinArmes();

async function getlesSkinArmes() {
  const res = await fetch(urlskin);
  dataFetch = await res.json();
  //création d'un element select pour les skin
  let selectUnskin = document.createElement("select");
  selectUnskin.classList.add("select");
  //création d'une option de plus
  let optionUnskin = document.createElement("option");
  optionUnskin.innerText = "CHOISI UN SKIN";
  selectUnskin.appendChild(optionUnskin);
  tableau1.appendChild(selectUnskin);

  // Affichage de l'image correspondant à mon option.
  let imageElement = document.createElement("img");
  imageBoite.appendChild(imageElement);
  selectUnskin.addEventListener("change", () => {
    let selectedOption = selectUnskin.options[selectUnskin.selectedIndex];
    let selectedSkin = dataFetch.data.find(
      (unskin) => unskin.displayName === selectedOption.innerText
    );
    imageElement.setAttribute("src", selectedSkin.fullRender);
  });
}

//---------------------------------------------------------Choisir un Agents-----------------------------------------------------------------------------------------------------------------------------------------
const urlAgents = "https://valorant-api.com/v1/agents";
//Création d'une div pour y mettre tous mes éléments dans ma main.
let tableau2 = document.createElement("div");
tableau2.classList.add("tableau2");
main.appendChild(tableau2);
//Récuperation des données de l'api
let datasFetch;
getLesAgents();

async function getLesAgents() {
  const res = await fetch(urlAgents);
  datasFetch = await res.json();
  let lesAgents = datasFetch.data;
  console.log(lesAgents);
  // On filtre le tableau pour éliminer les objets(agents) dont la propriété fullPortrait est égale à null
  const lesAgentsFiltered = lesAgents.filter(
    (agent) => agent.fullPortrait != null
  );

  //création d'un element select pour les agents
  let selectUnAgent = document.createElement("select");
  selectUnAgent.classList.add("select");

  let optionUnAgent = document.createElement("option");
  optionUnAgent.innerText = "CHOISI UN AGENTS";
  selectUnAgent.appendChild(optionUnAgent);
  tableau2.appendChild(selectUnAgent);

  lesAgentsFiltered.forEach((unAgents) => {
    let Agents = document.createElement("option");
    console.log("c'est sa :", unAgents.abilities);
    Agents.textContent = unAgents.displayName;
    selectUnAgent.appendChild(Agents);
  });

  //Création de ma boîte pour mettre l'image qui correspond à l'agent choisi
  let imageBoite2 = document.createElement("div");
  imageBoite2.classList.add("boiteI2");
  tableau2.appendChild(imageBoite2);

  let imageElement2 = document.createElement("img");
  imageBoite2.appendChild(imageElement2);

  selectUnAgent.addEventListener("change", () => {
    let selectedOption = selectUnAgent.options[selectUnAgent.selectedIndex];
    let selectedAgent = lesAgentsFiltered.find(
      (unAgents) => unAgents.displayName === selectedOption.innerText
    );
    imageElement2.setAttribute("src", selectedAgent.fullPortrait);

    //Création de ma liste pour mettre les abilities qui correspond à l'agent choisi
    let selectAbilites = document.createElement("ul");
    selectAbilites.classList.add("ul");
    // Récupérez  l'élément ul
    let ulElement = document.querySelector("ul");
    if (ulElement) {
      let parentElement = ulElement.parentNode;
      // Supprimez ul de son parent
      parentElement.removeChild(ulElement);
    }
    selectedAgent.abilities.forEach((uneAbilite) => {
      let abilite = document.createElement("li");
      // abilite.textContent = uneAbilite.displayName;
      abilite.innerHTML = `<p>${uneAbilite.displayName}</p><img src='${uneAbilite.displayIcon}' alt=''/>`;
      selectAbilites.appendChild(abilite);
    });
    imageBoite2.appendChild(selectAbilites);
  });
}
//-----------------------------------------Création button radio ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Masquez les deux tableaux
tableau1.style.display = "none";
tableau2.style.display = "none";
//Créez un boutons radio pour les armes
const weaponButton = document.createElement("input");
weaponButton.setAttribute("type", "radio");
weaponButton.setAttribute("name", "accessType");
weaponButton.setAttribute("value", "weapons");
// Ajoutez les boutons radio à votre div principale
monChoix.appendChild(weaponButton);
const weaponLabel = document.createElement("label");
weaponLabel.setAttribute("for", "agents-radio");
weaponLabel.innerText = "skin d'armes";
monChoix.appendChild(weaponLabel);

//Créez un boutons radio pour les agents
const agentButton = document.createElement("input");
agentButton.setAttribute("type", "radio");
agentButton.setAttribute("name", "accessType");
agentButton.setAttribute("value", "agents");
agentButton.textContent = "agent";
agentButton.id = "agents-radio";
monChoix.appendChild(agentButton);
// Ajoutez les boutons radio à votre div principale
const agentLabel = document.createElement("label");
agentLabel.setAttribute("for", "agents-radio");
agentLabel.textContent = "Agents";
monChoix.appendChild(agentLabel);

// Crée événements pour les boutons radio
weaponButton.addEventListener("change", () => {
  // Si le bouton "Skins d'armes" est sélectionné, affichez les skins d'armes
  if (weaponButton.checked) {
    tableau1.style.display = "block";
    tableau2.style.display = "none";
  } else {
    tableau1.style.display = "none";
  }
});

agentButton.addEventListener("change", () => {
  // Si le bouton "Agents" est sélectionné, affichez les agents
  if (agentButton.checked) {
    tableau2.style.display = "block";
    tableau1.style.display = "none";
  } else {
    tableau2.style.display = "none";
  }
});


