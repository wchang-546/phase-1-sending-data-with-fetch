/** const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}


fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        {console.log(object);}
    })
    .catch(function (error) {
        alert("Bad things! Ragnarok!");
        console.log(error.message);
    });


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({formData})
};
**/

const name = "Steve";
const email = "steve@steve.com";

function submitData() {
    const postRequest = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({name, email})
    };
    
    return fetch ("http://localhost:3000/users", postRequest)
        .then(response => {return response.json()})
        .then(function (object) {
            console.log(object)
            const newID = document.createElement("p")
            newID.textContent = object.id;
            document.body.appendChild(newID)
        })
        .catch(function (error) {
            console.log(error.message)
            const errorMessage = document.createElement("p")
            errorMessage.textContent = error.message
            document.body.appendChild(errorMessage)
        })
}

submitData();

