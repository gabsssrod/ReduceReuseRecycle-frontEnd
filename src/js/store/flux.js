const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			searchResults: [],
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
					name: "paolo",
					material: "plastic",
					recycle:
						"Maybe! Make sure any bags you are recycling have a #2 or #4 plastic symbol on them. If not, you can’t be sure what plastic resin the bag is made from, so you’ll want to reuse it instead. Remove anything inside the bags, such as receipts, stickers, or crumbs. All these items will contaminate your bag load. Keep a bag collection bin in your house",
					reduce:
						"The best way to reduce your consumption of plastic bags is by switching over to resuable bags. However, keep in mind that for reusuable bags to make a positive impact you have to keep them for at least 10 years, due to the ammount of resources it takes to make them.",
					reuse:
						"You can reuse your plastic bags, for example, the plastic bags you get from the supermaket can be reused! Save the for your next grocery trip.",
					trash:
						"As a last resort! If your plastic bag is not a #2 or #4, after getting as much use of it as possible, you will need to trash it."
				}
			],
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
					eventImage:
						"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F84420875%2F179314325957%2F1%2Foriginal.20191212-205055?w=1080&auto=format%2Ccompress&q=75&sharp=10&rect=145%2C86%2C774%2C387&s=4f18c3f5c248bcc755b16b35194d6389",
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
			signin: (userEmail, userPassword) => {
				let url = "https://3000-a38d8935-3b54-4171-8ee2-d7473a44e118.ws-us02.gitpod.io/login";

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
				let url = "https://3000-a38d8935-3b54-4171-8ee2-d7473a44e118.ws-us02.gitpod.io/add_user";

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
				let url = "https://3000-a38d8935-3b54-4171-8ee2-d7473a44e118.ws-us02.gitpod.io/add_days";
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
					let url = "https://3000-a38d8935-3b54-4171-8ee2-d7473a44e118.ws-us02.gitpod.io/get_days";

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
