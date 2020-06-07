function setCarouselBooks(allBooks) {
	const carouselBooks = allBooks.filter(book => ['Brights', 'Endangered', 'The Fall'].includes(book.title))

	let output = carouselBooks.map(book => {
		const { title, shortDescription, amazonLink, smashwordsLink } = book
	
		return `
			<div class="carousel-item">
				<img src="${getCoverLink(title)}" alt="${title} coverart">
				<div class="carousel_text">
					<h1>${title}</h1>
					${shortDescription.map(line => (`<p>${line}</p>`)).join('')}
					<div class="carousel_links cl_desktop">
						<a class="btn btn-light" href="${amazonLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Amazon</a>
						<a class="btn btn-light" href="${smashwordsLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Smashwords</a>
					</div>
				</div>
				<div class="carousel_links cl_mobile">
					<a class="btn btn-light" href="${amazonLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Amazon</a>
					<a class="btn btn-light" href="${smashwordsLink}" target="_blank" role="button"><i class="fab fa-amazon"></i> Smashwords</a>
				</div>
			</div>
		`
	})
	
	output[0] = output[0].replace('carousel-item', 'carousel-item active')
	$('.carousel-inner').html(output)
}

function setAllBooks(allBooks) {
	const output = allBooks.map(book => {
		const { title, shortDescription } = book

		return `
			<div class="book_item">
				<img class="book_item_image" src="${getCoverLink(title)}" alt="${title} coverart"/>
				<div class="book_item_overlay">
					${shortDescription.map(line => (`<p>${line}</p>`)).join('')}
				</div>
			</div>
		`
	})

	$('#books').html(output)
}

function getCoverLink(title) {
	return `images/${title.replace(/ /g, '_')}.jpg`
}


$.getJSON('books.json', (allBooks) => {
	setCarouselBooks(allBooks)
	setAllBooks(allBooks)
})
