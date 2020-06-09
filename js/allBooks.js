let books = null

function setAllBooks(allBooks) {
	let i = 0

	const output = allBooks.map(book => {
		const { title } = book

		return `
			<div class="book_cover" onclick="showDetails(${i++})">
				<img src="${getCoverLink(title)}" alt="${title} coverart"/>
			</div>
		`
	}).join('')

	$('#all_books_covers').html(output)
}

function getCoverLink(title) {
	return `../images/${title.replace(/ /g, '_')}.jpg`
}

function showDetails(index) {
	$('#all_books_info').html(JSON.stringify(books[index]))
}

$.getJSON('../data/books.json', (allBooks) => {
	setAllBooks(allBooks)
	books = allBooks
})

