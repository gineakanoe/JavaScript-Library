            --FETCH INTRO--

FETCH: Same as playing fetch with your dog.
    -FETCH API allows us to "fetch" or pull resources from across the web: 
            -ex. text files, code, data, etc.

    -Centered around 1 main concept:
        -generic deffinitions of objects known as "REQUEST" and "RESPPONSE"
        -since they're generic, they can be used anywhere you need them.

    -Basic FETCH model:
        1. "fetch()" method takes in desired resource's path as a Mandatory argument
        2. "Request" object returns a "Promise" that resolves to the argument's "Responce"
        3. After retrieving a "Response", a multitude of methods define the "body" content and how it will be handled.
        4. You can use "Request()" and "Responce()" constructors to directly create requests and response, but they are more likely to be created by other API functions.

    -Basic Fetch Components
        -"GlobalFetch"  - contains "fetch()" used to fetch resource
        -"Headers"      - HTTP response/request headers are queried and allow retrieving, updating, or deleting
        -"Request"      - Resource request. Contains method of the request (GET, POST, etc), the URL, associated headers, and more
        -"Response"     - Response to request. Contains headers and URL, but mainly replies with status codes to determine if request was successful or a failure.
        -"Body"         - contains method relating to main content of response/request that allows you to specify content type and how to handle it.

    EXAMPLE: -basic fetch-

        fetch('http://example.com/movies.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson)
            })

        COMPONENTS:
            -"http://example/movies.json" is the ARGUMENT, the path of our desired resource
            -"Response" object, will return with some JSON
            -However, this is only a HTTP response.
                -the "json()" method is required to extract the JSON


BENEFITS OF FETCH:

        -simpler that previous standard of XHR (XMLHttpRequest)
        -promised-based; allows us to write cleaner code
        -has "neat" definition for requests/responses.
            -you can write a function to modify a request before it's sent.
        -doesn't send cookies.  Authentication must be handled manually.


HTTP-SERVER:

    -To access some APIs without deploying an application:
        -create a virtual server on your machine to accept the return data using npm package called "http-server"
        -Run following command in terminal window:

            WINDOWS:    " npm install -g http-server "
            MAC:        " sudo npm install -g http-server "
                -"sudo" command is sometimes necessary to install npm packages globally.
                -requires administrator privileges for whatever console command follows it
                -can lead to some very bad unintended consequences so always try to install WITHOUT "sido" command first.
        
        -will install package globally so its accessible from any location.
        -type "http-server" into terminal once installed; should look similar to following:

            JavaScript-151-API aaron = $ http-server
            Starting up http-server, serving ./
            Available on:
                http://172.17.0.147:8080
                http://127.0.0.1:8080
            Hit CTRL-C to stop the server

        -go to "localhost:8080" and the app you're running should appear.
        -if error message saying port 8080 is in use or similar
            -add "-p" to specify a port number
        -A port number can be almost anything.
        -commonly used ports are: 80, 3000, 4000, 8080



