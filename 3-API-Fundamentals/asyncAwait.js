//async/await allows us to program using async requests while allowing other code to run in the background
//async functions are used to make normal JS functions asynchronous

//async function myTest(){
//    await console.log('Awaited');
//}

//const myTestTwo = async() => {
//    await console.log('something');
//}

const baseURL = 'https://api.spacexdata.com/v3/rockets';

async function fetchSpace(){
    let response = await fetch(baseURL);
    let rocketData = await response.json();
    console.log(rocketData);
    return rocketData;
}

fetchSpace().catch(error => console.log(error));
