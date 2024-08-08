document.getElementById('calculationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    const montantDevis = parseFloat(document.getElementById('montantDevis').value) || 0;

    const montantToiture = parseFloat(document.getElementById('montantToiture').value) || 0;
    const superficieToiture = parseFloat(document.getElementById('superficieToiture').value) || 0;
    const remboursementToitureM2 = parseFloat(document.getElementById('remboursementToitureM2').value) || 0;

    const montantMurs = parseFloat(document.getElementById('montantMurs').value) || 0;
    const superficieMurs = parseFloat(document.getElementById('superficieMurs').value) || 0;
    const remboursementMursM2 = parseFloat(document.getElementById('remboursementMursM2').value) || 0;

    const montantSol = parseFloat(document.getElementById('montantSol').value) || 0;
    const superficieSol = parseFloat(document.getElementById('superficieSol').value) || 0;
    const remboursementSolM2 = parseFloat(document.getElementById('remboursementSolM2').value) || 0;

    const montantAutres = parseFloat(document.getElementById('montantAutres').value) || 0;
    const autres = parseFloat(document.getElementById('autres').value) || 0;
    const remboursementAutresM2 = parseFloat(document.getElementById('remboursementAutresM2').value) || 0;

    // Calcul des remboursements pour chaque section
    const remboursementToiture = superficieToiture * remboursementToitureM2;
    const remboursementMurs = superficieMurs * remboursementMursM2;
    const remboursementSol = superficieSol * remboursementSolM2;
    const remboursementAutres = autres * remboursementAutresM2;

    // Calcul du montant restant après remboursement pour chaque section
    const restantToiture = montantToiture - remboursementToiture;
    const restantMurs = montantMurs - remboursementMurs;
    const restantSol = montantSol - remboursementSol;
    const restantAutres = montantAutres - remboursementAutres;

    // Calcul du devis final
    const devisFinal = montantDevis - (restantToiture + restantMurs + restantSol + restantAutres);

    // Affichage du devis final
    document.getElementById('devisFinal').textContent = devisFinal.toFixed(2);
});
