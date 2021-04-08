// all_books
function makeLink(link) {
	if (!link.length) return ''

	const iClass = (link.includes('amazon.com')) ? 'fab fa-amazon' : 'fas fa-book'
	const aText = (link.includes('amazon.com')) ? 'Amazon' : 'Smashwords'

	return `<a class="btn btn-outline-dark" href="${link}" target="_blank" rel="noopener noreferrer" role="button"><i class="${iClass}" aria-hidden="true"></i> ${aText}</a>`
}

const allBooks = booksJson.books.map(book => {
	if (!book.released) return ''

	const { title, fullCopy, links } = book

	const _title = title.replace(/ /g, '_')

	const aAmazon = makeLink(links.amazon)
	const aSmashwords = makeLink(links.smashwords)

	return `
		<div id="${_title}" class="book_item_full">
			<img src="../images/${_title}.jpg" alt="${title} coverart">
			<div class="book_item_full_text">
				<h1>${title}</h1>
				${fullCopy.map(c => `<p>${c}</p>`).join('')}
				<div class="book_item_full_links">
					${aAmazon}
					${aSmashwords}
				</div>
			</div>
		</div>

		<div id="${_title}" class="book_item_full_mobile">
			<img src="../images/${_title}.jpg" alt="${title} coverart">
			<h1>${title}</h1>
			${fullCopy.map(c => `<p>${c}</p>`).join('')}
			<div class="book_item_full_links">
				${aAmazon}
				${aSmashwords}
			</div>
		</div>
	`
}).join('')

$('#all_books').html(allBooks)
