
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';         //1
const key = 'UA8FBE0dxZGwxGx2WYy2RjqCwdH63cay';                                     //2
let url;                                                                            //3

/*
    1. declare baseURL of the API.  This is the requires endpoint for the New York Times data.
    2. This is the key that was assigned to me when app was created in my account.  This is the 'key' variable. It IS user specific.
    3. 'let url' variable will be used to make a dynamic search url.
*/

//* REFERENCE TO DOM ELEMENTS

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');                                   //I don't think we use this term since its within the 'form' tag

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

    let pageNumber = 0;
    console.log('PageNumber:', pageNumber);
    let displayNav = false

//RESULTS SECTION
const section = document.querySelector('section');


nav.style.display = 'none';                                                             //This makes the 'next' and 'previous' buttons disappear until a search has been initiated

let pageNumber = 0;
let displayNav = false;                                                                 //Ensures navBar is not visible on home page; pageNumber 0.


//* EVENT LISTENERS


        //1                     //2
searchForm.addEventListener('submit', fetchResults);    //3.1
nextBtn.addEventListener('click', nextPage);            //3.2
previousBtn.addEventListener('click', previousPage);    //3.2

/*
    1. Want to submit a form with query: "sports", "politics", "weather", etc.
    2. Want to toggle through results when we click the next or previous button.
    3.
            1. With 'searchForm' variable we '.addEventListener' that fires off function 'fetchResults' when 'submit' is called. ('submit search button' fires off on a form not a button)
            2. When 'next' or 'previous' buttons are 'click'ed, the 'eventListener' fires off function called 'nextPage' and/or 'previousPage'
*/


//* FETCHRESULTS() & ACCESSING A REST API

/*                     //1
function fetchResults(e){
    console.log(e);             //2
    //Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page' + pageNumber + '&q=' + searchTerm.value;        //3
    console.log(url);       //4
}
*/

function nextPage(){
    console.log("Next button clicked");
}                                                           //5

function previousPage(){
    console.log("Previous button clicked");
}                                                           //5

/*
    1. (e) in JS is called an 'event handling function'.  'e' is similar to a variable that allows interaction with object (bunch of properties (variables) and methods (functions)).
    2. logging event object for learning purposes.
    3. creating a 'versatile query string'.
    4. log string so we can see it.
    5. add basic functions to define 'nextPage' and 'previousPage' and log them.  Without this, the app will get an error.  ..which I was getting until this point.
*/

//*PREVENTDEFAULT()
    //This form is not a form we are signing up with or filling out data to be saved in its database, which is its default. (to send a POST request)
    //This form is to GET data using a request. preventDefault() prevents a POST so we can use form to GET data instead.

function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?api-key=' + key + '%page=' + pageNumber + '&q=' + searchTerm.value;
    console.log("URL:", url);

    //Insert Here
    if(startDate.value !== '') {
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
    //End Here

    fetch(url)
        .then(function(result) {
            //console.log(result); -removed in displayResults
            return result.json();
        }) .then(function(json) {
            //console.log(json); -removed in displayResults ...good, 'cause this one was giving me errors
                displayResults(json);
        });
}
/*
function displayResults(json) {
    console.log("DisplayResults", json);
};
*/


    //What we did
    /*
    1. make the fetch request
    2. pass the NYT url
    3. create a promise '.then' that returns a response called 'result'.
    4. promise asynchronously returns a function ('result.json()') that converts the result into usable json format.
    5. Create second promise that has function that takes the 'json' object in.
    6. log the 'json' object for now....        which is erroring out on me...
    */


//* BEGINNING AND ENDING DATE

    // added end date and start date conditional statements (ifs) within the 'fetchResults' function
    // the (!== '') means that if there are date values they're added to url string; if blank the expression inside the conditionals are ignored.


//* DISPLAY RESULTS

/*
function displayResults(json) {
    console.log(json.response.docs);
}
*/

/*function displayResults(json) {
    let articles = json.response.docs;
    console.log(articles);
}
*/

function displayResults(json) {
    while (section.firstChild) {                            //*Clears out any articles before new search results are added
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;
    
    if(articles.length === 0) {
        console.log("No results");
        nav.style.display = 'block';                            //?shows the nav display if 10 items are in the array
    } else {
        //Display the data
        for(let i = 0; i < articles.length; i++) {
            //console.log(i);                                               //DOM CONTAINER
            let article = document.createElement('article');                //1
            let heading = document.createElement('h2');                     //2
            let link = document.createElement('a');                 //!1
            let img = document.createElement('img'); 
            let para = document.createElement('p'); 
            let clearfix = document.createElement('div')

            let current = articles[i];                              //!2
            console.log("Current:", current);                       //!3

            link.href = current.web_url;                            //!4
            link.textContent = current.headline.main;               //!5

            para.textContent = 'Keywords: '; 

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span'); 
                span.textContent += current.keywords[j].value + ' '; 
                para.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);                                   //3
            heading.appendChild(link);                              //!6
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix); 
            section.appendChild(article);                                   //4
            nav.style.display = 'none';                         //?hides the nav display if less than 10 items are in the array
        }
    }
};

/*
    1. We create an article variable that will create a node in the DOM that is an 'article' element. Remember that  is an HTML5 'article' element.
    2. We also create a heading variable that creates a node in the DOM that is an 'h2' element.
    3. We call appendChild() on the article element. This will create a child node on that element. We pass in 'heading' to the appendChild method. This means that there will be an 'h2' element created inside each 'article' element.
    4. Since we have a 'section' in our original 'html' file, we call the appendChild() method on the 'section' element. We pass in the 'article' to that. This way, the article is a child of 'section', and the 'h2' is a grandchild of 'section'.
*/

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
};

function previousPage(e) {
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}