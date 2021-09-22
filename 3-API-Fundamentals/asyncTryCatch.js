const fetchCharacter = async(id) => {
    try{
        const responce = await fetch(`https://www.swapi.tech/api/people/${id}`);
        console.log(responce);                        //! For some reason "response" errored but "responce" works...so weird

        if(responce.status === 404){
            throw "404 not found";
        }

        const data = await responce.json();
        //console.log(data.result.properties.name);

        const charcterName = data.result.properties.name;
        alert(`The Charater you picked is ${charcterName}`);

    }catch(error){
        alert(error);
    }
}

fetchCharacter(6);