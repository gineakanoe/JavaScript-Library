3.01 API, HTTP, JSON INTRO

                 ------- HTTP Request -------                                ---
     __   ------|                            |---->      _                ---   ---
  --   --                                  API Endpoints   --             ---------
 --      --                                          --      --   ------> |       |
-- Client --                                       --  Server  --          Database
 --      --                                          --      --   <------ |       |                   
  --   --                                              --  --             ---------
     --   <-----                             -------     -                ---   ---
                |------ HTTP Response ------|                                ---
       


API : Application Programming Interface
    -junction between client-side and server-side
    -allw clients to access the hard work done in the server without them knowing what the server is exactly doing.
    -can function as bridge between different languages (Java, C#, Node.js, etc)
    -provides info from server client is requesting

Client: 
    -where you are witing your front-end code, like HTML/CSS & JS
    -where you make requests to the API
    Two major jobs:
      -Display data for the user. Render items to the DOM
      -Make HTTP requests to the server.

HTTP: Hypertext Transfer Protcol

Example Requests: - Facebok -
    -A user writes a post and presses Post
    -A user goes to Instant Messenger to access a friends message
    -A user goes into their profile and updates their favorite bands.
    -A user deletes their profile

HTTP Verbs: - 4 Most Common -
    -POST
    -GET
    -PUT
    -DELETE

  POST:
      -Any time a user creates new information, that is usually a POST request.
        -Ex. when they write a new post and hit post.
  
  GET:
      -Any time a user is retrieving existing information, that is usually a GET request.
        -Ex. when a user goes to messenger and can see all their friends messages.
  
  PUT:
      -Any time a user is overwriting existing information or updating information, that is usually a PUT requet.
        -Ex. when a user updates their favorite brands they are dong a PUT request.
  
  DELETE:
      -Any time a user is deleting existing information, that is usually a DELETE request.
        -EX. when a user deletes their profile, they would be doing a DELETE request.


JSON: JavaScript Object Notation
    -Can convert any JavaScript object into readable text.
    -Are most common way used to pass data through HTTP requests.

JSON VS JAVASCRIPT:
    JSON:
      {
        "name": "Superman"
      }

    JavaScript:
        name: "Superman"

    JSON syntax is derived from JavaScript, so it looks similiar but not the same.
    JSON is a text-only format, for consistency across multiple languages.

    EXAMPLE:
      
      IN JSON:
        {
          "name":"Superman",
          "age": 79,
          "secretIdentity": "Clark Kent",
          "powers": [
            "Super strength",
            "Flight",
            "X-ray vision",
            "Super speed"
          ]
        }
      
      IN MINIFIED JSON:
        {"name":"Superman","age":79,"secretIdentity":"Clark Kent","powers":["Super strength","Heat vision","Flight","X-ray vision","Super speed"]}

    MINIFIED JSON:
      -removes all extra white space in you code.
      -No white space means a smaller file size.
      -Smaller file size means faster/better performance.


API ENDPOINTS:
    -the url that the client application uses to communicate with your server.

    EXAMPLE:
      - Viewing a post on your High School Alumni Facebook Group - 

      API Endpoint may look like: -(Not actual)-
        "https://api.facebook.com/users/{userID}/groups/{groupID}/posts/{postID}"

      -API for Spotify                                                              -HTTP VERB-
        -All urls begin with "http://api.spotify.com"
        -To get an artist's top tracks:
            -ENDPOINT is "/v1/artists/{id}/top-tracks"                                -GET-
        -Follow a playlise:
            ENDPOINT is "/v1/users/{owner_id}/playlists/{playlist_id}/followers"      -PUT- ???
        -Create a playlist:
            ENDPOINT is "/v1/users/{user_id}/playlists                                -POST-
        -Remove tracks from a playlist:
            ENDPOINT is "/v1/users/{user_id}/playlists/{playlist_id}/tracks"         -DELETE-


SERVER:
  -Depending on its context:
      -The software used to host/deliver web pages
      -The hardware that runs said software
      -Both the software and hardware working in tandem
  -receives request (like HTTP GET) from the clients and returns a response.
  -can contain url, image, some data, something else, or combination of that
  -may pass a request to database for more info and will wait to receive that response before sending it on to the client.

    EXAMPLE:
      -Login Request-
          -client sends username and password to server
          -server passes request along to database
          -database checks to see if it contains that username, and if password matches what is linked to that username.
          -database returns either success or failure response code to the server
          -server passes that response back to client to be displayed on-screen some way


RESPONSE:
  -Often seen as status codes
  -three digit numbers indicate if code is doing what we want.
  -status code catagories: -there are 5-

        VALUE   |   CATEGORY    |       EXPLANATION
          1xx     Informational     Request recieved; continuing process
          2xx     Success           The action was successfully recieved, understood, and accepted
          3xx     Redirection       Further action must be taken in order to complete the request
          4xx     Client Error      The request contains bad syntax or cannot be fulfilled
          5xx     Server Error      The server failed to fulfill an apparently valid request

  -Awesome Cats and Dogs illustrating HTTP Status Codes:  
        - https://http.cat/
        - https://httpstatusdogs.com/

  -Common codes
      -404- Not Found
          -usually result of broken or dead links
          -troubleshoot: check URL inputted correctly with no typos
      -401- Unauthorized
          -often occur because user needs to enter valid credentials to view a particular page
          -troubleshoot: make sure you have permission to access page
          -similar to -403- Forbidden
      -400- Bad Request
          -often due to syntax errors in code or the client side request
      -500- Internal Server Error
          -generic message thrown when unexpected error occurs
          -at least you know its on the server side and not the client side though...
      -502- Bad Gateway
          -server sent valid request, but somewhere another server returned an invalid response
          -think of christmas tree lights, if one light fails then the remaining lights all fail
      -418- I'm a Teapot
          - April Fool's joke from 1998 and is an inside joke among the industry
  -Data is passed using modified JSON


STATELESSNESS:
    -HTTP is used throughout web programming because it is a STATELESS language
          -the server does not store any data from the request
      -Inportanr because:
          -prevents secure information being compromised. 
              -if nothing is stored, nothing can be accessed
          -Allows an API to be deployed to multiple servers to spread out user traffic
              -nothing is dependant on certain info stored in only one place
          -Allows an API to focus only on client-side logic
              -no server-side logic means less code & therfore fewer things to take up time for each search
    -Since nothing is stored, important information needs to be provided with every request
        -such as key to allow access into the API
    -REMEMBER:
        -client must provide all required information in every request
        -no information from a request must ever be stored on the server.


REST: Representational State Transfer
    -introduced and defined by Roy Fielding in 2000 doctoral shape.
    -set of rules developers follow when creating API so it is RESTful

    ---THE RULES OF REST---
          -CLIENT AND SERVER ARE SEPERATE:
              -discribed above
          -STATELESS:
              -no client context is stored server-side EVER
          -CACHEABLE:
              -response from server lets client know if they are cacheable   -wha???
          -LAYERED SYSTEM:
              -can have intermediary server to improve load balances and speed when multiple users on system
          -CODE ON DEMAND:
              -Optional: ability to pass code from server to client, to allow client to run it.
          -UNIFORM INTERFACE:
              -Fundamental to REST
                -Indentification of resources:
                    -all resources have an identifier; seperate ways of conceptualizing those resouces; not simply the resource themselves
                    -resource can be in JSON or any format - not necessarily the structure or type of the resource on server
                -Self-descriptive messages:
                    -each message contains enough info to know what to do with it without needing outside info.
                    -Ex. it'll tell you its JSON so the client can interpret it.
                -Resource manipulation throu representations
                    -client has enough info to edit or delete resource
Our Use of APIs:  -FYI-  
    -many in use today are at least partially based on REST principles
    -often you will hear REST reffered to in the same breadth as API
    -REST was kind of default for APIs, but GraphQL APIs were developed recently
    -GraphQL uses some same ideas, but the format is different.
          


    




