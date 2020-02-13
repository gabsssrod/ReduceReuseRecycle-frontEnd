const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			searchResults: [],
			token: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			materials: [
				{
					name: "plastic bottle",
					material: "plastic",
					recycle:
						"Please recycle in the plastics bin! Good to know: There are different types of plastic. Miami-Dade County recycles plastic bottle containers regardless of the number listed.",
					reduce:
						"On average, Americans spend about $100 per person each year on bottled water. Switching from single use plastic bottles to reusable bottle could save you $1,400 a year",
					reuse:
						"Health advocates advise against reusing bottles made from plastic #1 (polyethylene terephthalate, also known as PET or PETE), including most disposable water, soda, and juice bottles. Studies indicate that the containers may leach DEHP—another probable human carcinogen.",
					trash:
						"80% of plastic bottles never get recycled. 38 million plastic bottles go to landfill each year in America alone. The most effective way to handle this is by reducing your consumption."
				},
				{
					name: "pizza box",
					material: "cardboard",
					recycle:
						" Maybe! Pizza boxes are made from corrugated cardboard, however the cardboard becomes soiled with grease, cheese, and other foods once the pizza has been placed in the box. Once soiled, the paper cannot be recycled because the paper fibers will not be able to be separated from the oils during the pulping process. ONLY recycle if clean",
					reduce: "no reducing here",
					reuse: "use as a real neato water funnelz",
					trash: "It is usualy best to discard pizza boxes because they tend to be dirty."
				},
				{
					name: "glass bottle",
					material: "glass",
					recycle:
						"Please recycle in the plastics bin! Glass bottles and jars are 100% recyclable and can be recycled endlessly without any loss in purity or quality.",
					reduce: "Since glass is 100% recycable the focus should be on reusing and recycling.",
					reuse: "There are various ways to resuse glass bottles and jars. Here are some ideas: ",
					trash: "Over a ton of natural resources are saved for every ton of glass recycled."
				},
				{
					name: "plastic bag",
					material: "plastic",
					recycle:
						"Maybe! Make sure any bags you are recycling have a #2 or #4 plastic symbol on them. If not, you can’t be sure what plastic resin the bag is made from, so you’ll want to reuse it instead. Remove anything inside the bags, such as receipts, stickers, or crumbs. All these items will contaminate your bag load. Keep a bag collection bin in your house",
					reduce:
						"The best way to reduce your consumption of plastic bags is by switching over to resuable bags. However, keep in mind that for reusuable bags to make a positive impact you have to keep them for at least 10 years, due to the ammount of resources it takes to make them.",
					reuse:
						"You can reuse your plastic bags, for example, the plastic bags you get from the supermaket can be reused! Save the for your next grocery trip.",
					trash:
						"As a last resort! If your plastic bag is not a #2 or #4, after getting as much use of it as possible, you will need to trash it."
				},
				{
					name: "aerosol can",
					material: "metal",
					recycle:
						"No! These items are considered hazardous waste and should not go in the recycle cart. Take to a Home Chemical Collection Center for safe disposal.",
					reduce:
						"Minimize the number of different aerosol products used. Whenever possible, use rechargeable or pump-spray containers or refillable containers that use compressed air as the propellant instead of aerosols.",
					reuse: "Reuse is not recommended because of the hazardous risk they present.",
					trash:
						"No! These items are considered hazardous waste and should not go in the trash bin. Take to a Home Chemical Collection Center for safe disposal."
				},
				{
					name: "aluminum can",
					material: "metal",
					recycle:
						"Yes! Clean, empty aluminum cans used for drinks or food such as soda, soup and canned pet food are accepted recyclables.",
					reduce: "Ways to reduce may not be so obvious so, try focusing on recycling these items.",
					reuse:
						"Reuse your aluminum cans by taking them apart to make candle holders, coasters, jewelry, and belts.",
					trash: "No! These items are recycable!"
				},
				{
					name: "cardboard",
					material: "paper",
					recycle:
						"Yes! Clean, dry, empty, flattened packing boxes, cereal boxes, gift boxes and corrugated cardboard boxes are accepted recyclables.",
					reduce: "Ways to reduce may not be so obvious so, try focusing on recycling these items.",
					reuse: "These boxes can be used as storage.",
					trash: "No! These items are recycable!"
				},
				{
					name: "clothing",
					material: "varied",
					recycle: "No! Clothing should not be put in the recycling cart.",
					reduce: "Donate these items to donation centers.",
					reuse: "Clothing can be cut up and used as cleaning rags.",
					trash: "Yes! These items should be disposed of with household trash."
				},
				{
					name: "linen",
					material: "varied",
					recycle: "No! Linens should not be put in the recycling cart.",
					reduce: "Donate these items to donation centers.",
					reuse: "Linen can be cut up and used as cleaning rags.",
					trash: "Yes! These items should be disposed of with household trash."
				},
				{
					name: "egg carton",
					material: "Paper, foam, or plastic.",
					recycle: "Only paper egg cartons can go in the recycle cart.",
					reduce: "Ways to reduce may not be so obvious so, try focusing on recycling these items.",
					reuse: "Egg cartons can be reused as bird feeders!",
					trash: "Foam and plastic egg containers should go in your household trash bin."
				},
				{
					name: "electronics",
					material: "varied metals",
					recycle:
						"No! Electronics are not able to be recycled. These items can be considered hazardous waste",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Electronics can be donated to electronic donation centers. Many electronics can be reused for parts. Using donated electronics can be a great way to reduce as well.",
					trash:
						"These items can be considered hazardous waste. Dispose of these items at a Home Chemical Collection Center or an electronics recycling center. "
				},
				{
					name: "computer",
					material: "varied metals",
					recycle:
						"No! Electronics are not able to be recycled. These items can be considered hazardous waste",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Electronics can be donated to electronic donation centers. Many electronics can be reused for parts. Using donated electronics can be a great way to reduce as well.",
					trash:
						"These items can be considered hazardous waste. Dispose of these items at a Home Chemical Collection Center or an electronics recycling center. "
				},
				{
					name: "phone",
					material: "varied metals",
					recycle:
						"No! Electronics are not able to be recycled. These items can be considered hazardous waste",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Electronics can be donated to electronic donation centers. Many electronics can be reused for parts. Using donated electronics can be a great way to reduce as well.",
					trash:
						"These items can be considered hazardous waste. Dispose of these items at a Home Chemical Collection Center or an electronics recycling center. "
				},
				{
					name: "cd player",
					material: "varied metals",
					recycle:
						"No! Electronics are not able to be recycled. These items can be considered hazardous waste",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Electronics can be donated to electronic donation centers. Many electronics can be reused for parts. Using donated electronics can be a great way to reduce as well.",
					trash:
						"These items can be considered hazardous waste. Dispose of these items at a Home Chemical Collection Center or an electronics recycling center. "
				},
				{
					name: "television",
					material: "varied metals",
					recycle:
						"No! Electronics are not able to be recycled. These items can be considered hazardous waste",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Electronics can be donated to electronic donation centers. Many electronics can be reused for parts. Using donated electronics can be a great way to reduce as well.",
					trash:
						"These items can be considered hazardous waste. Dispose of these items at a Home Chemical Collection Center or an electronics recycling center. "
				},
				{
					name: "eyeglasses",
					material: "varied",
					recycle:
						"No! Used eyeglasses or sunglasses for adults or children including reading glasses, bifocals or non-prescription sunglasses (plastic or metal frames) are not accepted recyclables.",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Check with your eye doctor, Goodwill and Salvation Army to donate glasses to people in need.",
					trash: "Yes! These items are not recycable. Put these items in the trash bin."
				},
				{
					name: "motor oil",
					material: "oil",
					recycle:
						"No! Motor oil should not go in your recycle cart. Take used motor oil to a Home Chemical Collection Center.",
					reduce:
						"Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"If taken to a Home Chemical Collection Center oil can be safely recycled or disposed. Recycling used oil keeps it from polluting soil and water.",
					trash:
						"No! Motor oil should not go in your trash bin. Take used motor oil to a Home Chemical Collection Center."
				},
				{
					name: "paper",
					material: "paper",
					recycle:
						"Yes! Dry, single-layer paper such as newspapers, magazines, cataologs, telephone books, printer paper, mail, and paper packages are accepted recyclables. Paper must also be seperated from plastics and glass in order to be recycled properly. Be sure to sort paper into the paper bin! Tip: Don't recycle crumbled paper because it is costly for recycling centers.",
					reduce:
						"Think before you print! If you are wondering how to reduce paper in the office, printing less is an obvious choice. Take paperless notes. Use online or cloud storage for your files. When given the choice opt for online receipts.",
					reuse:
						"Use both sides of the paper. Cut off unused portions of paper to use as bookmarks. Use it as packing material.",
					trash: "No! These items should be recycled unless they are crumbled or wet."
				},
				{
					name: "newspaper",
					material: "paper",
					recycle:
						"Yes! Newspapers are one of the easiest items to recycle. Doing so can help to save up to 60 percent of the energy required to make brand new newsprint. Be sure to sort paper into the paper bin and not with the plastics and glass! Tip: Don't recycle crumbled paper because it is costly for recycling centers.",
					reduce:
						"Most newspaper companies are now available online. This option is a great way to reduce your use of newspapers.",
					reuse:
						"Use it as packing material. Reuse as giftwrap. Use it to make fire starting logs. Shred to use as garden mulch.",
					trash: "No! These items should be recycled unless they are crumbled or wet."
				},
				{
					name: "zip lock bags",
					material: "plastic film",
					recycle: "No! Zip lock bags are not accepted recyclables.",
					reduce:
						"Think before you buy! Ways to reduce may not be so obvious so, try focusing on donating these items and properly disposing.",
					reuse:
						"Rinse out and reuse zip lock bags or consider using reusable Tupperware to transport items.",
					trash: "Yes! Zip lock bags should be placed in your household trash bin."
				},
				{
					name: "receipts",
					material: "paper",
					recycle:
						"Maybe! If the receipt is shiny and smooth, it means it is coated with a toxic chemical and cannot be recycled. However, if the receipt is on plain paper and has a matte finish, it can be recycled. Please recycle in the paper bin!",
					reduce:
						"You can ask stores to email you a receipt instead of printing one out on paper. This will save you the trouble of having to sort through a massive pile of receipts later on—and it will help the retailer conserve paper, too!",
					reuse:
						"Sadly, its not that practical to reuse receipts, but we are always open to new ideas! Try focusing on properly disposing.",
					trash:
						"Maybe! If the receipt is shiny and smooth, it means it is coated with a toxic chemical and should be disposed in the trash."
				}
			],

			// <a src="https://www.bobvila.com/slideshow/17-creative-ways-to-reuse-cardboard-boxes-47420#party-decor">Here are some ideas you can try for a diy project.</a>

			daysPicked: [
				{
					first_day: "",
					second_day: ""
				}
			],

			events: [
				{
					eventImage: "https://waset.org/i/1140x400/static/images/cities/miami.jpg",
					eventName: "Environmental Chemistry and Pollution Control",
					eventDate: "March 12th, 2020",
					eventLocation: "Miami, Florida",
					eventdescription:
						"The IRC is a federated organization dedicated to bringing together a significant number of diverse scholarly events. The event provides an exceptional value for students, academics and industry researchers.",
					eventInfo:
						"https://waset.org/environmental-chemistry-and-pollution-control-conference-in-march-2020-in-miami"
				},
				{
					eventImage: "https://www.aere.org/assets/aere_sum20_meetingheader.jpg",
					eventName: "AERE Annual Summer Conference",
					eventDate: "June 3rd, 2020",
					eventLocation: "Miami, Florida",
					eventdescription:
						"AERE’s signature Summer Conference gathers the world’s leading environmental and natural resource economists for two days of outstanding academic programming in a collegial atmosphere.",
					eventInfo: "https://www.aere.org/summer-conference"
				},
				{
					eventImage: "https://booksandbooks.com/wp-content/uploads/2017/06/logobnb.png",
					eventName: "We Are The Guardians of Our Environment",
					eventDate: "February 27, 2020",
					eventLocation: "Miami, Florida",
					eventdescription:
						"Whats happening to our planet? Australia, The Amazon, rising sea levels, etc....? Joing the conversation along side experts of the field, and be part of the solution. Lets be the guardians of our planet!",
					eventInfo:
						"https://booksandbooks.com/event/90-minutes-of-solutions-we-are-the-guardians-of-our-environment/"
				},
				{
					eventImage:
						"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84128529%2F301804108155%2F1%2Foriginal.20191210-162930?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C5000%2C2500&s=4aa25faef7cb98b31879609a17842694",
					eventName: "Kids Research Environment & Wildlife",
					eventDate: "April 25, 2020",
					eventLocation: "Miami, Florida",
					eventdescription:
						"Jungle Islands Kids Research Environment & Wildlife: allows kids to learn while doing! This month theme: Biome Series: One of the things that makes Earth so amazing is the numerous biomes that make it up!",
					eventInfo:
						"https://www.eventbrite.com/e/kids-research-environment-wildlife-a-free-community-meet-up-tickets-85648341495?aff=ebdssbdestsearch"
				},
				{
					eventImage: "https://cdn.britannica.com/37/191237-050-574791A6/garden-Japanese.jpg",
					eventName: "Water Issues in our Landscapes, Gardens and Parks",
					eventDate: "Febuary 8, 2020",
					eventLocation: "Miami, Florida",
					eventdescription:
						"This seminar will look at increasing rainfall trends and explore solutions already in play around the world from China’s Sponge Cities to our own Miami Dade County Parks, Recreation and Open Spaces.",
					eventInfo:
						"https://www.eventbrite.com/e/water-issues-in-our-landscapes-gardens-and-parks-tickets-86034462393?aff=ebdssbdestsearch"
				}
			]
		},

		actions: {
			search: input => {
				console.log("search", input);
				const store = getStore();
				// let search = store.materials.filter((item)=> item.name == input)
				setStore({ searchResults: store.materials.filter(item => item.name.includes(input)) });
			},
			logout: () => {
				setStore({ token: null, searchResults: null });
				localStorage.setItem("token", "");
				localStorage.setItem("userID", "");
				localStorage.setItem("email", "");
				localStorage.setItem("firstname", "");
				localStorage.setItem("lastname", "");
			},
			signin: (userEmail, userPassword) => {
				let url = "https://3000-edfbb56f-0ae5-43ed-a401-89f784e78e29.ws-us02.gitpod.io/login";

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: userEmail,
						password: userPassword
					})
				})
					.then(res => res.json())
					.then(response => {
						let token = response.token;
						let id = response.id;
						let email = response.email;
						let first_name = response.first_name;
						let last_name = response.last_name;
						if (!email && !first_name && !last_name) {
							alert("Sorry we couldn't find an account with that email. Try to register first.! error");
						} else {
							setStore({ token: token });
							localStorage.setItem("token", token);
							localStorage.setItem("userID", id);
							localStorage.setItem("email", email);
							localStorage.setItem("firstname", first_name);
							localStorage.setItem("lastname", last_name);
							alert("LOGIN SUCCESSFUL!");
						}
					});
			},

			registration: (userFirstName, userLastName, userEmail, userPassword) => {
				let url = "https://3000-edfbb56f-0ae5-43ed-a401-89f784e78e29.ws-us02.gitpod.io/add_user";

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_name: userFirstName,
						last_name: userLastName,
						email: userEmail,
						password: userPassword
					})
				})
					.then(res => res.json())
					.then(response => {
						alert("LOGIN SUCCESSFUL!");
					});
			},

			addDays: (dayOne, dayTwo) => {
				let url = "https://3000-edfbb56f-0ae5-43ed-a401-89f784e78e29.ws-us02.gitpod.io/add_days";
				let userId = localStorage.getItem("userID");

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_day: dayOne,
						second_day: dayTwo,
						user_id: userId
					})
				}).then(() => {
					let url = "https://3000-edfbb56f-0ae5-43ed-a401-89f784e78e29.ws-us02.gitpod.io/get_days";

					fetch(url, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							userId: localStorage.getItem("userID")
						})
					})
						.then(r => r.json())
						.then(data => {
							setStore({ ...getStore, daysPicked: data });
						});
				});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
