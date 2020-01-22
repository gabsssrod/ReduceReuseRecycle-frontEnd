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
<<<<<<< HEAD
			login: (userEmail, userPassword) => {
=======
			signin: (userEmail, userPassword) => {
>>>>>>> 28ed03b0b0c77b10da5fb44d5b3408581bee9b47
				let url = "https://3000-d1cfea70-bde1-44cf-9c02-be435462b6cb.ws-us02.gitpod.io/login";

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: userEmail,
<<<<<<< HEAD
						password: userEmail
					})
				});
=======
						password: userPassword
					})
				})
					.then(res => res.json())
					.then(response => {
						let token = response.token;
						let userID = response.id;
						let email = response.email;
						let first_name = response.first_name;
						let last_name = response.last_name;
						if (!token && !email && !firstname && !lastname) {
							swal(
								"Sorry we couldn't find an account with that email.",
								"Try to register first.!",
								"error",
								{
									button: "TRY AGAIN!"
								}
							);
							// alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
						} else {
							// alert('LOGIN SUCCESSFUL');
							localStorage.setItem("token", token);
							localStorage.setItem("userID", userID);
							localStorage.setItem("email", email);
							localStorage.setItem("firstname", first_name);
							localStorage.setItem("lastname", last_name);
							swal("LOGIN SUCCESSFUL!", "Welcome to eBaG", "success", {
								button: "Let's Clean"
							}).then(() => {
								window.location.href =
									"https://8080-aff6ad15-68ed-4bfd-9e85-23f281db0ae1.ws-us02.gitpod.io/";
							});
						}
					});
>>>>>>> 28ed03b0b0c77b10da5fb44d5b3408581bee9b47
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
