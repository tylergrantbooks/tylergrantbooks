// carousel-indicators
const carouselIndicators = booksJson.featured
	.map(
		(book, index) =>
			`
				<li data-target="#featured_carousel" data-slide-to="${index}"></li>
			`
	)
	.join('')
	.replace(`data-slide-to="0"`, `data-slide-to="0" class="active"`);

$('.carousel-indicators').html(carouselIndicators);

// carousel-inner
function makeLink(link) {
	if (!link.length) return '';

	const iClass = link.includes('amazon.com') ? 'fab fa-amazon' : 'fas fa-book';
	const aText = link.includes('amazon.com') ? 'Amazon' : 'Smashwords';

	return `<a class="btn btn-light" href="${link}" target="_blank" rel="noopener noreferrer" role="button"><i class="${iClass}" aria-hidden="true"></i> ${aText}</a>`;
}

const carouselInner = booksJson.featured
	.map((bookTitle) => {
		const { title, shortCopy, links } = booksJson.books.find((book) => book.title === bookTitle);

		const _title = title.replace(/ /g, '_');

		const aAmazon = makeLink(links.amazon);
		const aSmashwords = makeLink(links.smashwords);

		return `
			<div class="carousel-item">
				<img src="images/${_title}.jpg" alt="${title} coverart">
				<div class="carousel_text">
					<h1>${title}</h1>
					${shortCopy.map((c) => `<p>${c}</p>`).join('')}
					<div class="carousel_links cl_desktop">
						${aAmazon}
						${aSmashwords}
					</div>
				</div>
				<div class="carousel_links cl_mobile">
					${aAmazon}
					${aSmashwords}
				</div>
			</div>
		`;
	})
	.join('')
	.replace('carousel-item', 'carousel-item active');

$('.carousel-inner').html(carouselInner);

// books_container
function makeBookItem({ title }) {
	const _title = title.replace(/ /g, '_');

	return `
		<a href="all-books/#${_title}" target="_blank">
			<img class="book_item_image" src="images/${_title}.jpg" alt="${title} coverart">
		</a>
	`;
}

const novelsHtml = booksJson.books
	.filter((book) => book.released && book.classification === 'novel')
	.map((book) => makeBookItem(book))
	.join('');

$('#novels_container').html(novelsHtml);

const shortStoriesHtml = booksJson.books
	.filter((book) => book.released && book.classification === 'short-story')
	.map((book) => makeBookItem(book))
	.join('');

$('#short_stories_container').html(shortStoriesHtml);

// coming_soon
function comingSoonHtml() {
	const book = booksJson.books.find((book) => !book.released);

	if (!book) return '';

	const { title, fullCopy } = book;
	const _title = title.replace(/ /g, '_');

	return `
		<h1>Coming Soon: &quot;${title}&quot;</h1>
		<div id="coming_soon_content">
			<img src="images/${_title}.jpg" alt="${title} coverart">
			<div>
				${fullCopy.map((c) => `<p>${c}</p>`).join('')}
			</div>
		</div>
	`;
}

$('#coming_soon').html(comingSoonHtml());
