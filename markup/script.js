// debugger;
card = [];
number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "T"];
suit = [`clubs`, `spades`, `diamonds`, `hearts`];
icon = [`jack`, `queen`, `king`, `clubs`];
image = "";
br = 9;

for (j = 0; j < 13; j++) {

    if (j === br) {
        br++;
        image = `<img class="person" src="images/${icon[br - 10]}.svg" alt="${icon[br - 10]}"></img>`;
    }

    for (i = 0; i < 4; i++) {

        if (j === 12) {
            image = `<img class="person" src="images/${suit[i]}.svg" alt="${suit[i]}"></img>`;
        }

        card.push(`<div class="card">
		<div class="card__info">${number[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>
        ${image}
		<div class="card__info">${number[j]}<img src="images/${suit[i]}.svg" alt="${suit[i]}"></div>
		</div>`)

    }
}

document.write(`<div class="wrapper">${card.join("")}<div>`);

