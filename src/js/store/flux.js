const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
				}
			],
			daysPicked: [
				{
					first_day: "",
					second_day: ""
				}
			]
		},
		actions: {
			signin: (userEmail, userPassword) => {
				let url = "https://3000-eda8b61d-de48-414b-b2e4-45e48d3d5001.ws-us02.gitpod.io:443/login";

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
				let url = "https://3000-eda8b61d-de48-414b-b2e4-45e48d3d5001.ws-us02.gitpod.io:443/add_user";

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

			addDays: (dayOne, dayTwo, props) => {
				let url = "https://3000-eda8b61d-de48-414b-b2e4-45e48d3d5001.ws-us02.gitpod.io:443/add_days";
				let userId = localStorage.getItem("userID");

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_day: dayOne,
						second_day: dayTwo,
						user_id: userId
					})
				})
					.then(res => res.json())
					.then(response => {
						let first_day = response.first_day;
						let second_day = response.second_day;
						if (!first_day && !second_day) {
							alert("Please pick your pick up days");
						} else {
							alert("days set!");
							props.history.push("/profile");
						}
					});
			},

			getDays: (dayOne, dayTwo) => {
				let url = "https://3000-eda8b61d-de48-414b-b2e4-45e48d3d5001.ws-us02.gitpod.io:443/get_days";
				let userId = localStorage.getItem("userID");

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						first_day: dayOne,
						second_day: dayTwo,
						user_id: userId
					})
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
