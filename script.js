document.addEventListener("DOMContentLoaded", async function(){
    const respons = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json");
    const 
    console.log(respons.data)
    document.querySelector("#output").innerHTML= `<h1> Sample ${data.Name} </h1>`;

    document.querySelector("#name").innerHTML= respons.data.Name;
    document.querySelector("#phn").innerHTML= respons.data.Mobile;
    document.querySelector("#currentAddress").innerHTML= respons.data.Address["current Address"];
    document.querySelector("#permanentAddress").innerHTML= respons.data.Address["Permanent address"];


})