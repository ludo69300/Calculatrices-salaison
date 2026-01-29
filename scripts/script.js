function calculFrRotation(vc, diam) {
	return parseInt((1000*vc)/(Math.PI*diam));
};
function calculAvance(n,fz,Z){
	return parseInt(n*fz*Z);
};
function calculAvanceZ(vc){
	document.getElementById("vitesseMaxAvanceZ").value = vc/2;
};
function claculSalaison() {
	console.log("Hellos");
	let inputsalaisonSelect = document.getElementById("salaisonSelect");
	let inputsalaisonPoids = document.getElementById("salaisonPoids");

	let indexsalaisonSelect = parseFloat(inputsalaisonSelect.value);
	let indexsalaisonPoids = parseInt(inputsalaisonPoids.value);

	inputsalaisonSelect.addEventListener("change", () => {
		indexsalaisonSelect = parseFloat(inputsalaisonSelect.value);
		calculssalaisonVide()
	});
	inputsalaisonPoids.addEventListener("change", () => {
		indexsalaisonPoids = parseInt(inputsalaisonPoids.value);
		calculssalaisonVide()
	});
	function calculssalaisonVide() {
		console.log("Hello World");
		document.getElementById("salaisonSel").value=indexsalaisonSelect*indexsalaisonPoids+' gr';
		document.getElementById("salaisonSucre").value=indexsalaisonSelect*indexsalaisonPoids/2+' gr';
		document.getElementById("salaisonPoivre").value=indexsalaisonPoids*0.001+' gr';
		document.getElementById("salaisonBaie").value=indexsalaisonPoids*0.001+' gr';
		document.getElementById("salaisonEpices").value=indexsalaisonPoids*0.0005+' gr';
		document.getElementById("salaisonLaurier").value=indexsalaisonPoids/500+' Feuilles';
	};
	let inputsaumureeau = document.getElementById("saumureeau");
	let indexsaumureeau = parseInt(inputsaumureeau.value);
	inputsaumureeau.addEventListener("change", () => {
		indexsaumureeau = parseInt(inputsaumureeau.value);
		document.getElementById("saumureSel").value=indexsaumureeau*60+' gr';
		document.getElementById("saumureSucre").value=indexsaumureeau*30+' gr';
		document.getElementById("saumurePoivre").value=indexsaumureeau*5+' gr';
		document.getElementById("saumureBaie").value=indexsaumureeau*10+' gr';
		document.getElementById("saumureSauge").value=indexsaumureeau*2+' gr';
		document.getElementById("saumureThym").value=indexsaumureeau+' branche(s)';
		document.getElementById("saumureClou").value=indexsaumureeau+' clou(s)';
		document.getElementById("saumureLaurier").value=indexsaumureeau*2+' Feuilles';
	});
	let inputcotePoids = document.getElementById("cotePoids");
	let indexcotePoids = parseInt(inputcotePoids.value);
	inputcotePoids.addEventListener("change", () => {
		indexcotePoids = parseInt(inputcotePoids.value);
		document.getElementById("coteSel").value=indexcotePoids*0.045+' gr';
	});
	let inputfoiePoids = document.getElementById("foiePoids");
	let indexfoiePoids = parseInt(inputfoiePoids.value);
	inputfoiePoids.addEventListener("change", () => {
		indexfoiePoids = parseInt(inputfoiePoids.value);
		document.getElementById("foieSel").value=indexsaumureeau*60+' gr';
		document.getElementById("saumureSucre").value=indexsaumureeau*30+' gr';
		document.getElementById("saumurePoivre").value=indexsaumureeau*5+' gr';
		document.getElementById("saumureBaie").value=indexsaumureeau*10+' gr';
		document.getElementById("saumureSauge").value=indexsaumureeau*2+' gr';
		document.getElementById("saumureThym").value=indexsaumureeau+' branche(s)';
		document.getElementById("saumureClou").value=indexsaumureeau+' clou(s)';
		document.getElementById("saumureLaurier").value=indexsaumureeau*2+' Feuilles';
	});
};
claculSalaison();