function setAllBooks(allBooks) {
	let output = allBooks.map(book => {
		const { title, longDescription, amazonLink, smashwordsLink } = book

		return `
			<div class="book_item_full">
				<img src="${getCoverLink(title)}" alt="${title} coverart">
				<div class="book_item_full_text">
					<h1>${title}</h1>
					${longDescription.map(line => (`<p>${line}</p>`)).join('')}
					<div class="book_item_full_links">
						<a class="btn btn-outline-dark" href="${amazonLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Amazon</a>
						<a class="btn btn-outline-dark" href="${smashwordsLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Smashwords</a>
					</div>
				</div>
			</div>

			<div class="book_item_full_mobile">
				<img src="${getCoverLink(title)}" alt="${title} coverart">
				<h1>${title}</h1>
				${longDescription.map(line => (`<p>${line}</p>`)).join('')}
				<div class="book_item_full_links">
					<a class="btn btn-outline-dark" href="${amazonLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Amazon</a>
					<a class="btn btn-outline-dark" href="${smashwordsLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Smashwords</a>
				</div>
			</div>
		`
	})

	$('#all_books').html(output)
}

function getCoverLink(title) {
	return `../images/${title.replace(/ /g, '_')}.jpg`
}

$.getJSON('../data/books.json', (allBooks) => {
	setAllBooks(allBooks)
})
