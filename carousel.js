const carouselBooks = [
	{
		title: "Brights",
		description: [
			"On a frigid November night, four hard-partying teenagers try to leave a party in a souped up Z28 Camaro. After a run in with the law, and a back road lesson on how to drive a stick, they are accosted by a wild-man in a jacked up 4x4 pickup with KC lights bright enough to blind anyone who crosses their path. The man is relentless, doing everything he can to force them off the road. Why? No one knows… until… after the crash."
		],
		amazonLink: "https://www.amazon.com/Brights-Tyler-Grants-Voices-Grant/dp/B0882NXW37/",
		smashwordsLink: "https://www.smashwords.com/books/view/1019756" 
	},
	{
		title: "Endangered",
		description: [
			"A birthday hike in the woods goes terribly wrong for Ally and Roy when a sudden fall takes away her ability to walk. Buried five miles in the dense Black Hills of Washington State, they struggle to survive the elements and the natural predators of the environment.",
			"Will they survive?"
		],
		amazonLink: "",
		smashwordsLink: "" 
	},
	{
		title: "The Fall",
		description: [
			"The Fall tells the unique story of the fall of Lucifer, the rise of evil, and the creation of the most sinister villain of all time. Let author, Tyler Grant, lead you through a complex web of uncertainty on a journey to understanding where fear is born, and why sometimes it's too hard to shut off the lights at night."
		],
		amazonLink: "https://www.amazon.com/Fall-First-Tyler-Grants-Voices-ebook/dp/B0878P9ZGB/",
		smashwordsLink: "https://www.smashwords.com/books/view/1017973" 
	}
]

let output = carouselBooks.map(book => {
	const { title, description, amazonLink, smashwordsLink } = book

	let item = (`
		<div class="carousel-item">
			<img src="images/${title.replace(' ', '_')}.jpg" alt="${title} coverart">
			<div class="carousel_text">
				<h1>${title}</h1>
				${description.map(line => {return `<p>${line}</p>`}).join('')}
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
	`)

	return item
})

output[0] = output[0].replace('carousel-item', 'carousel-item active')


$(".carousel-inner").html(output)
