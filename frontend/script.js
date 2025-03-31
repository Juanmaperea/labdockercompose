document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running");
    
    const services = [
        { name: "Service 1", url: "http://localhost:5001/api" },
        { name: "Service 2", url: "http://localhost:5002/api" },
        { name: "Service 3", url: "http://localhost:5003/api" },
        { name: "Service 4", url: "http://localhost:5004/api" },
        { name: "Service 5", url: "http://localhost:5005/api" },
        { name: "Service 6", url: "http://localhost:5006/api" },
        { name: "Service 7", url: "http://localhost:5007/api" },
        { name: "Service 8", url: "http://localhost:5008/api" },
        { name: "Service 9", url: "http://localhost:5009/api" },
        { name: "Service 10", url: "http://localhost:5010/api" },
        { name: "Service 11", url: "http://localhost:5011/api" }   
    ];

    const list = document.getElementById("services-list");
    
    services.forEach(service => {   
        console.log(`Attempting to fetch: ${service.url}`);
        fetch(service.url)
            .then(response => {
                console.log(`Response status: ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log("Data received:", data);
                const li = document.createElement("li");
                li.innerHTML = `<strong>${service.name}:</strong> ${data.message}`;
                list.appendChild(li);
            })
            .catch(error => {
                console.error("Error connecting to the service:", service.name, error);
                const li = document.createElement("li");
                li.innerHTML = `<strong>${service.name}:</strong> ❌ Not available`;
                li.style.color = "red";
                list.appendChild(li);
            });
    });
});
