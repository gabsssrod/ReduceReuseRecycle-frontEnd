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
		},
		actions: {
            login : (userEmail, userPassword) => {
                
                let url = "https://3000-d1cfea70-bde1-44cf-9c02-be435462b6cb.ws-us02.gitpod.io/login"

				fetch(url, {
                    method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
                        email: userEmail,
						password: userEmail
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
