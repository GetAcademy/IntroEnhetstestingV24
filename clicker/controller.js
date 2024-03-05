function doClick() {
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    updateView();
}

function buyUpgrade() {
    if (points < costPerUpgrade) return;
    points -= costPerUpgrade;
    pointsPerClick++;
    costPerUpgrade *= 2;
    updateView();
}