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
			]
		},
		actions: {
			signin: (userEmail, userPassword) => {
				let url = "https://3000-d1cfea70-bde1-44cf-9c02-be435462b6cb.ws-us02.gitpod.io/login";

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
						let password = response.password;
						let email = response.email;
						let first_name = response.first_name;
						let last_name = response.last_name;
						if (!password && !email && !firstname && !lastname) {
							alert("Sorry we couldn't find an account with that email. Try to register first.! error");
							// alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
						} else {
							// alert('LOGIN SUCCESSFUL');
							localStorage.setItem("password", password);
							localStorage.setItem("email", email);
							localStorage.setItem("firstname", first_name);
							localStorage.setItem("lastname", last_name);
							alert("LOGIN SUCCESSFUL!");
						}
					});
			},

			registration: (userFirstName, userLastName, userEmail, userPassword) => {
				let url = "https://3000-b87cf6f9-ed6e-41b6-8e61-6cec731e5a08.ws-us02.gitpod.io/add_user";

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
						let password = response.password;
						let email = response.email;
						let first_name = response.first_name;
						let last_name = response.last_name;
						if (!password && !email && !firstname && !lastname) {
							alert("Error. Try Again MotherFucker.");
							// alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
						} else {
							// alert('LOGIN SUCCESSFUL');
							localStorage.setItem("password", password);
							localStorage.setItem("email", email);
							localStorage.setItem("firstname", first_name);
							localStorage.setItem("lastname", last_name);
							alert("SIGN UP SUCCESSFUL!");
						}
					});
			},

			addDays: (dayOne, dayTwo) => {
				let url = "https://3000-d1cfea70-bde1-44cf-9c02-be435462b6cb.ws-us02.gitpod.io/add_days";
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
						}
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
