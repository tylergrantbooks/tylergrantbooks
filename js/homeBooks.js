const carouselTitles = ['The Rose Thorn Man', 'Quarantine Fever', 'The Night Locker']


function setCarouselBooks(allBooks) {
	const carouselBooks = carouselTitles.map(t => allBooks.find(book => book.title === t))

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
	let i = 0

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
	}).join('')

	$('#books_container').html(output)
}

function getCoverLink(title) {
	return `images/${title.replace(/ /g, '_')}.jpg`
}


$.getJSON('data/books.json', (allBooks) => {
	setCarouselBooks(allBooks)
	setAllBooks(allBooks)
})
