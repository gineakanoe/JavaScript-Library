
                -ASYNCHRONOUS PROGRAMING IN JAVASCRIPT-

-JavaScript is a single-threaded programming language
    -it reads each line of code then impliments that line

    EXAMPLE - an API call-
        -without asynchronous processing-
                        -------- -------                -------- -------
            Program     |       |       |               |       |       |       
            Thread      |   1   |   2   |               |   3   |   4   |
                        -------- ------- --------------- ------- --------
            Code                        |   Waiting     |
            Executed                    |   For         |
            Elsewhere                   |   Response    |
                                        ----------------
                        <==================== 60 ms ====================>

        -with asynchronous processing-
                        -------- ------- -------- -------
            Program     |       |       |       |       |       
            Thread      |   1   |   2   |   4   |   3   |
                        -------- ------- ------- --------
            Code                        |Waiting|
            Executed                    |for    |
            Elsewhere                   |Response|
                                        ---------
                        <============ 40 ms ===========>
    -With Async the thread does not halt while waiting for the data retrieval.
    -It continues to run until async is done then presents us that info.
    -Although optomized, it adds complexity.


CALLBACKS:
    -A callback function is a function executed by another function.
    -this occurs usually when data needs to be processed or modified in some way to be used later in orig function

    EXAMPLE:
        function callbackFunction(){
            const data = {
                name: 'Ralf Machio',
                age: 66,
                occupation: 'kickboxing'
            }
            return data;
        }  
        function showGreeting(dataFromFunction){
            return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
        }

        console.log(
            showGreeting(callbackFunction())
        )

    -In the "showGreeting(callbackFunction())" line of code, we are invoking the function above called "callbackFunction".
    -the purpose of "showGreeting()" function is to return a string built with data that will come from our argument.
    -the "callbackFunction()" is our argument

    -the "callbackFunction" is returning an object with 3 properties
        -name
        -age
        -occupation
    -after creating the function with the data, we can access them in orig "showGreeting()" function
    
    -by passing the "callbackFuntion()" as an argument in the "showGreeting()" function, an example dialogue is as follows:
        
        DEVELOPER: "Hey, I see that the function "showGreeting()" returns some fun text."
        COMPUTER: "Yup, it sure does! Try it out! Just give me a value and I'll put it inside of the sentence."
        DEVELOPER: "Okay, but first I need to do a couple steps to assemble the data for you."
        COMPUTER: "Oh sure! Take your time. Just remember to make it an object, that has the property of name. But do what you must."
    

How Callbacks Can Affect the Program Thread

    -Program thread: java reads the code one line at a time and then impliments that code.
    -our thread is at the mercy of the callback retrieving data especially if it is taking a long time
    -because of this, we need to consider when we are using callbacks
    -REFER to without async processing example above

    EXAMPLE:
        -adding a synchronous (NOT asynchronous) action (the for loop) to the above code

        function callbackFunction(){
            for(let i = 0; i < 100; i++){
                console.log(i)
            }

            const data = {
                name: 'Ralf Machio',
                age: 66,
                occupation: 'kickboxing'
            }
            return data;
        }  
        function showGreeting(dataFromFunction){
            return "hello " + dataFromFunction.name
        }

        console.log(
            showGreeting(callbackFunction())
        )

        -the code runs through all numbers 0-99 before it logs "hello Ralf Machio"


PROMISES: 
    -Def: The PROMISE object represents the eventual completion (or failure) of an asyncronous operation, and its resulting value
    -Basically: a PROMISE is code that is on its way after it finishes running somewhere else.

    EXAMPLE:
        -If you're good, Santa will bring you a gift- -the PROMISE
            -you do good things because you want the gift from Santa, but you don't just sit there until Dec 25th to see what Santa brings.  You do lots of other things throughout the year.
                
                -On Dec 25th, there are only 2 possible outcomes-
                    1. You've been good enough and get the promised gift
                    2. You've been naughty and get coal
        
        -When you buy a ticket to "Panic! at the Disco" concert in 4 months, you're PROMISEd you'll get to see the show and while   you're waiting until then you can do other stuff.

        -When you apply for a job, you will either get accepted or rejected. While waiting to hear back, you do other things. Then, when you get a response, you can decide what to do with it.

    STATES OF PROMISE:
        -PENDING: You wait until Dec 25th to receive you gift and find out if you were naughty or nice.
        -RESOLVED: You've been good and you get a cool gift from Santa.
        -Rejected: You've been naughty and only get a lump of coal.

    CREATING A PROMISE:

        EXAMPLE IN JAVASCRIPT:
            // Boolean declaration
            var amIGood = false;

            //Promise
            var iCanHasGift = new Promise(
                function (resolve, reject) {
                    if (amIGood) {
                        var gift = {
                            brand: 'HasMattelbro',
                            item: 'Turbo-Man action figure'
                        };
                        resolve(gift);      //fulfilled
                    }else {
                        var naughty = "You've made Santa's naughty list; enjoy your coal!";
                        reject(naughty);    //rejected
                    }
                }
            );

        BREAKDOWN:
            - amIGood - A boolean variable to define if you are naughty or nice
            - iCanHasGift - The Promise itself
            - resolve(gift) - You made nice list, here's your gift, promise is resolved
            - reject(naughty) - You're on the naughty list, here's your coal, promise is rejected

        SYNTAX:
            -proper syntax for a  promise:
                new Promise(/* executor */ function (resolve, reject) {...} );

    CONSUMING PROMISES:
        -TO COMSUME OUR PROMISE-

            // Promise call
            var checkTwice = function () {
                iCanHasGift
                    .then(function (fulfilled) {
                        // nice list = gift
                        console.log(fulfilled);
                    // output: {brand: 'HasMattelbro', item: 'Turbo-Man action figure'}
                    })
                    .catch(function (error) {
                        // naughty list = coal
                        console.log(error);
                    // output: "You've made Santa's naughty list; enjoy your coal"
                    });
            };

            checkTwice();

        BREAKDOWN:
            - checkTwice - function that consumes the promise "iCanHasGift"
            - .then - used with "function(fulfilled) {...}" if promise is resolved
            - .catch - used with "function(error){...}" if promise is rejected
            - fulfilled - the value passed in "resolve()". Ex. "gift" is the "fulfilled" value
            - error - the value passed in "reject()". Ex. "naughty" is the "error" value.


PROMISES CONTINUED: ASYNC
    -promises are asynchronous.
            -each promise starts when the previous succeeds and uses the previous promise's result

    EXAMPLE:

        // 2nd promise
        var playDate = function (gift) {
            return new Promise (
                function (resolve, reject) {
                    var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season.  What do you think of my new " + gift.brand + ' ' + gift item + '?';

                    resolve(message);
                }
            );
        };

        // Promise call
        var checkTwice = function () {
            console.log('before Christmas');        // log before
            iCanHasGift
                .then(playDate)
                .then(function (fulfilled) {
                    console.log(fulfilled);
                })
                .catch(function (error) {
                    console.log(error)
                });
            console.log('after opening gifts'); // log after
        }

        checkTwice()

        The correct log order is actually:
            1. before christmas
            2. after opening gifts
            3. Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?

    -This is where asynchronous programming fits in.  The code will run without blocking or waiting for the result.
    -Anything waiting for a PROMISE to proceed is put in ".then".


CHAINING PROMISES
    -CHAINED: Promises stacked on top of each other

    EXAMPLE:    
        - You promise your friend to go to their house to play with the toys you get for Christmas:

        // 2nd promise
        var playDate = function (gift) {
            return new Promise(
                function (resolve, reject) {
                    var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season.  What do you think of my new " + gift.brand + ' ' + gift item + '?';

                    resolve(message);
                }
            );
        };

        - "reject" isn't called; its optional
        -Refactor using "Promise.resolve"

                // 2nd promise
                var playDate = function (gift) {
                    var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season.  What do you think of my new " + gift.brand + ' ' + gift item + '?';

                    return Promise.resolve(message);
                };

        -Chain the two promises together: - Note, can only start "playDate" promise after "iCanHasGift" promise -

                // Promise call
                var checkTwice = function() {
                    iCanHasGift
                    .then(playDate)     //chain here
                    .then(function (fulfilled) {
                        console.log(fulfilled);
                        // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
                    })
                    .catch(function (error) {
                        // all I got was a lump of coal :(
                        console.log(error)
                        // output: "You've made Santa's naughty list; enjoy your coal!"
                    });
                };

                checkTwice();

SUMMARY:
    -Promises will take an unknown amount of time.
        Examples: images being loaded, API calls, page fully loaded, calling a complex function, etc.
    -Since JavaScript is a single threaded language, we want to be able to do things constantly and not stuck waiting around.
    -Promises help avoid that waiting.

    -See ".then" think PROMISE

    -API calls can take an unknown amount of time pending the internet
        -Always make API calls with Promises when possible