const books = [
	{
		title: 'Brights',
		details: 'Brights details'
	},
	{
		title: 'Endangered',
		details: 'Endangered details'
	},
	{
		title: 'The Fall',
		details: 'The Fall details'
	}
]


let htmlOutput = '';

for (let i = 0; i < 3; i++) {
	for (let book of books) {
		const { title, details } = book
		
		htmlOutput += `
			<div class="book_item">
				<img class="book_item_image" src="images/${title.replace(' ', '_')}.jpg" alt="${title} coverart"/>
				<div class="book_item_overlay">
					<p>${details}</p>
				</div>
			</div>
		`
	}
}

document.getElementById('books').innerHTML = htmlOutput
