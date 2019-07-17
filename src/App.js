/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		// console.log("Je suis prêt");
		// document.getElementById("app").innerHTML = "La page est chargée";
		var app, tableau, section, rangee, cellule;
		app = document.getElementById("app");
		tableau = document.createElement("table");
		app.appendChild(tableau);
		//tableau.setAttribute("border", "2");
		tableau.style.borderCollapse = "collapse";
		section = tableau.appendChild(document.createElement("tbody"));
		for (let b = 0; b < 256; b += 51) {
			rangee = section.appendChild(document.createElement("tr"));
			for (let g = 0; g < 256; g += 51) {
				for (let r = 0; r < 256; r += 51) {
					cellule = rangee.appendChild(document.createElement("td"));
					cellule.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
					cellule.style.width = "10px";
					cellule.style.height = "60px";
				}
			}
		}
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
