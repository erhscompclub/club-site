function tab(times){
	var tab="";
	for(var a=0;a<times;a++){
		tab+="&emsp;&emsp;&emsp;";
	}
	return tab;
}

function languageDataTable(){
	var langData="<tr><td><u>Language</u></td><td><u>Type</u></td><td><u>Description</u></td></tr>";
	langData+="<tr><td>C</td><td>Procedural</td><td>The progenitor of all C-Based languages. Long ago, all programs were made with Assembly languages. This all changed when Dennis Ritchie created a program called a <i>compiler</i>. This program could convert C (a language made by Dennis) into any of several Assembly codes. Thus was born the most popular early high-level language.</td></tr>";
	langData+="<tr><td>HTML</td><td>Markup</td><td>HTML provides the bare bones of every webpage. HTML's tags store data for the basic elements of a webpage, such as text, pictures or <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">links</a>. HTML tags can be visually altered by CSS. Javascript can be used to code functionality that interacts with HTML tags.</td></tr>";
	langData+="<tr><td>HTML5</td><td>Markup</td><td>HTML5 is essentially the same language as HTML. The only difference is that HTML5's compiler was written to process new Javascript functions. These functions were designed to allow for more direct graphical manipulation on the webpage (the <code>canvas</code> tag).</td></tr>";
	langData+="<tr><td>Javascript</td><td>Object-Oriented, C-based</td><td>Javascript is like every programmer's common language. It is flexible, and is used to add functionality to every webpage on the internet. Like all C-based languages, Javascript has an extensive library dedicated to processing numerical data. In recent years HTML has been updated to allow for game creation with Javascript.</td></tr>";
	langData+="<tr><td>CSS</td><td>Procedural</td><td>CSS is a very unique language, designed specifically for its task. CSS is used only to alter the styling on HTML tags. With CSS, you can create <i>stylesheets</i>. Stylesheets are like a set of artistic rules that can be easily applied to multiple webpages.</td></tr>";
	langData+="<tr><td>XML</td><td>Markup</td><td>XML is often used to store data in a very orderly fashion. Javascript is used to access or alter the data stored in XML tags. XML is more of a way to store information rather than a full-fledged programming language.</td></tr>";
	langData+="<tr><td>PHP</td><td>Procedural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>jQuery</td><td>Procedural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Actionscript</td><td>Object-Oriented, C-based</td><td>Flash programs (like games or cool internet animations) are written in Actionscript. The latest version of the language is Actionscript 3. Flash programming is often not as secure as Java, and so is vulnerable to viruses. Actionscript has many built-in visual or gaming-focused functionalities.</td></tr>";
	langData+="<tr><td>C#</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>C++</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Objective C</td><td>Object-Oriented, C-based</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Ruby</td><td>Object-Oriented</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Python</td><td>Multi-Paradigm</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Perl</td><td>Multi-Paradigm</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Applescript</td><td>Natural</td><td>Coming soon...</td></tr>";
	langData+="<tr><td>Swift</td><td>Object-Oriented, C-Based</td><td>Coming soon...</td></tr>";
	//langData+="<tr><td></td><td></td><td></td></tr>";
	return langData;
}
var lessons=[
	{
		"name":"Javascript",
		"suggested":["Concepts","HTML"],
		"text":["<heading><u>Variables</u></heading></br></br>We covered variables in our concepts lesson. If you read through that, then you would know that variables are a way to store information within your code. ",
		"To create a variable in Javascript (no matter what type) just code something like this: <code>var health=100;</code> or this: <code>var name=\"Alex Lugo\";</code></br>",
		"While most languages require you to declare the data type that the variable stores (Like in Java or the C languages), Javascript is a bit more chill. Just use the <code>var</code> keyword, and your program will know that you're creating a variable. ",
		"Also, in any language, once you've created a variable, you no longer need to use the <code>var</code> keyword. Your program remembers that you created the variable.</br></br>",
		"<heading><u>Functions</u></heading></br></br>",
		"Functions are essentially little snippets of code that you save in your programs. ",
		"Think of them as custom commands you can create and then tell the program to do later. ",
		"This is called <i>defining</i> and <i>calling</i> a function. ",
		"In programming, most of the code you write will be within functions. Let's take a look a function, shall we?</br></br>",
		"<code>function hello(){</br>"+tab(1)+"alert(\"Was gucci?\");</br>}</code></br></br>",
		"The word <i>function</i> there lets the program know that you're about to create a function. The word <i>hello</i> is what I decided to call it, or the <i>name</i> of the function. ",
		"The parenthesis are, in fact, completely necessary to a function. Some functions use <i>parameters</i>, but this one doesn't. ",
		"Parameters are written in those parenthesis, but this function still needs parenthesis despite not having parameters. ",
		"Next we get on to the curly brackets. These are necessary too. All the code within the curly brackets is what will get run when you call the function. ",
		"<i>alert</i> is a function built in to Javascript, that pops up an alert box with text that matches the parameter inside it. ",
		"This is actually an example of calling a function with parameters. (See how they're written within the parenthesis?)</br></br>",
		"If you copied this code into a website and opened it up, it wouldn't do anything. Why? Because you haven't called the function <i>hello</i> yet. ",
		"To call a function, just write its name, open parenthesis, any parameters it might have, close parenthesis, and a semicolon. ",
		"Not all languages require a semicolon at the end of a line, but many do, so its a good habit to have.</br></br>",
		"<code>hello();</code></br></br>",
		"If we add the above line to our code, outside of the <i>hello</i> function, the function will <i>run</i>. ",
		"This means that the code within the function will do whatever it does. In this case, an alert box with a particulary DMV greeting should pop up. ",
		"Now, to make things more interesting, let's rewrite our hello function to add a parameter to the function.</br></br>",
		"<code>function hello(text){</br>"+tab(1)+"alert(text);</br>}</code></br></br>",
		"Now when we call this function, we can actually tell it what text to put into the alert box. ",
		"Note how the parameter in the function's parenthesis matches the parameter I placed in the <i>alert</i> function. ",
		"This means that whatever we enter the parameter as when we call the function is going to be the text passed into the <i>alert</i> function. ",
		"Also note: Now that our function requires a parameter, we cannot run it with <i>hello();</i>, since that passes no parameter to the function. Try this, instead:</br></br>",
		"<code>hello(\"Hello,\");</br>hello(\"It's me.\");</code></br></br>",
		"Now that I've had my fun with Adele references, let's get into function return types...</br>",
		"You may be thinking <i>\"Functions can do stuff, but can I get data from them?\"</i>. As a matter of fact, you can! ",
		"The <i>return</i> keyword in Javascript ends the function, as well as replaces the call with some data. Its easier if I just show you, so I will:</br></br>",
		"<code>function fromTheWindow(){</br>"+tab(1)+"return \"To the wall\";</br>}</br>alert(fromTheWindow());</code></br></br>",
		"You see how <i>fromTheWindow()</i> returns \"To the wall\", right? Well, that means that whenever we call <i>fromTheWindow</i>, ",
		"our program will replace it with what it returns. So when we pass it as <i>alert()</i>'s parameter, \"To the wall\" appears in a pop-up box. ",
		"Whelp, that's basically the basics of functions. Many programming languages use them, so they're crucial to know. Here are a few other functions that come built in to Javascript:</br></br>",
		"•<i>console.log(text);</i>"+tab(2)+"Prints <i>text</i> to the console</br>",
		"•<i>Math.random();</i>"+tab(2)+"Returns a random decimal from 0 to 1</br>",
		"•<i>Math.round(number);</i>"+tab(2)+"Returns <i>number</i>, but rounded to the nearest ones place</br>",
		"•<i>Math.floor(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round down</br>",
		"•<i>Math.ceil(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round up</br></br>",
		"<heading><u>Classes</u></heading></br></br>A class is essentially a type of object. Objects in programming are entities, or groups of data, that you can create and manipulate within the code. If the universe truly is just a computer simulation, then we'd all be objects of the Human class, reading this email from objects of the Computer class. ",
		"Creating a class in javascript is similar to making a function, although in most other languages there's more differentiation. Here's how you code a class:</br>",
		"<code>function Player(name){</br>"+tab(2)+"this.name=name;</br>"+tab(2)+"this.x=0;</br>"+tab(2)+"this.y=0;</br>"+tab(2)+"this.width=100;</br>"+tab(2)+"this.height=100;</br>"+tab(1)+"}</code></br>",
		"Classes don't have to capitalized, as Player is, but it'll help you differentiate between what is a function and what is a class. Most of the physics in my engine are designed to work on classes with x, y, width, and height variables, as this example has, so don't forget to add those to any classes you make that will use the engine's functionality. ",
		"Also, the word name within parenthesis is what's called a parameter. This means that when you create a new object of class Player, you can add data to it, and it will store that data with the this.name=name command. Now let's say you wanted to create a new player object so it can interact with the rest of the code. ",
		"Like functions, classes don't do anything unless they're called. Unlike functions, which are basically a set of instructions that run, objects are entities that live on in your code for as long as they are needed by it. This means that you can have multiple objects of the same class at a time. To make a new object, just do this:</br>",
		"<code>var alexLugo=new Player(\"Alex Lugo\");</code></br>This will create a new Player object with name \"Alex Lugo\", because that is the data that I passed into the name parameter."]
	},
	{
		"name":"Console",
		"suggested":["Javascript"],
		"text":["<heading><u>Console</u></heading></br></br>The console is a programmer's main way to access how a computer 'thinks'. In essence, ",
		"It is a testing ground for webpages. From the console, programmers can run new code from their webpage, check the values of pre-existing variables, ",
		"and read data printed from the website. Let's take a look at how to do all these tasks.</br></br><b><u>Accessing the Console</u></b></br>",
		"Before you can do anything on the console, however, you must know how to access it. How you go about doing this differs slightly from browser to browser, so I recommend you google it for whichever browser you're using.",
		"</br></br><b><u>Printing to the Console</u></b></br>Programmers often print messages to the console. ",
		"This can come in handy if the programmer wants to know the value of a variable at a certain point in the code, ",
		"or if the programmer wants to know if a certain section of code was even executed. To print to the console, you type this:</br></br>",
		"<code>console.log(\"Booty poppin'\");</code></br></br>This will cause your message (passed as a parameter into the <code>console.log()</code> function) ",
		"to appear in the console.</br></br><b><u>Running Code/Accessing Variables</u></b></br>From the console you can check the value of variables, ",
		"as well as run new code in your program. To run any code in the console, just type it as you would in Javascript. For example, ",
		"try typing <code>alert('Rare Pepes.')</code> into the console and hit enter. What happens is exactly what you would get if you added that code to your webpage in the first place. ",
		"This is a powerful tool that allows developers to experiment with their webpages without having to go back and rewrite code all the time. ",
		"To check the value of a variable, simply type the variable's name in the console and hit enter. The console will return the value of the variable in question. ",
		"Try creating a new variable in the console with <code>var alex=\"Awesome\"</code>. Then, type <code>alex</code>, hit enter, and watch as the console returns \"Awesome\". ",
		"You can also access clas data from the console. For example, create a new class called \"Person\" with parameter \"name\" and initialize a new instance of that class. ",
		"Give it whatever name you'd like. Then, run your program and go to the console. Type in the variable name of your instance of person, a dot, and \"name\". The console should return the string value of your person's name (whatever you passed as its name parameter). ",
		"The console is a programmer's best friend, giving him/her access to data he might not otherwise know within the program. A form of the console exists for nearly all programming languages, so it is immensly useful for a programmer to understand how to use it."]
	},
	{
		"name":"Clicking",
		"suggested":["Javascript"],
		"text":["<heading><u>Clicking in Javascript</u></heading></br><code><xmp><body onclick=\"click(event)\"></body></xmp>function click(e){</br>"+tab(1)+"alert(e.x+\", \"+e.y);</br>}</code></br></br>",
		"<code>onclick</code> is an attribute for the body tag. This attribute activates the code in quotes when the mouse clicks on the body tag.", 
		"The body tag usually comprises most of a webpage, so this onclick will work wherever you click. The code in quotes is the function <code>click(e)</code>, and ",
		"<code>event</code> is passed as its parameter. For this code to work, we must define the <code>click(e)</code> function with a parameter for event to be passed in to. ",
		"<code>event</code> is a built-in feature of javascript, and returns data for a special recent event (such as a mouse click). ",
		"Now let's look at our <code>click(e)</code> function. This function will open a popup box with the coordinates of your click. ",
		"To check what point was clicked on a page, simply call <code>e.x</code> or <code>e.y</code>, for the x and y coordinate respectively.</br></br>",
		"<b><u>Using Clicks with Canvas</u></b></br>Calling <code>e.x</code> or <code>e.y</code> will return the coordinates of a mouse click with respect to the HTML tag whose ",
		"onclick function was called. The coordinate (0,0) is the very upper-left corner of a tag. If you add an <code>onclick</code> attribute to a canvas tag, ",
		"then the click coordinates will directly fall on the coordinate system used to draw on the canvas. That means that if you click on a picture in the canvas, ",
		"you can compare <code>e</code>'s coordinates to the picture's coordinates and they will overlap. You can check to see if a picture on the canvas was clicked like this:</br></br>",
		"<code>function wasClicked(pic,e){</br>"+tab(1)+"if(e.x>=pic.x && e.x<=pic.x+pic.width){</br>"+tab(2)+"if(e.y>=pic.y && e.y<=pic.y+pic.height){</br>"+tab(3)+"return true;</br>"+tab(2)+"}</br>"+tab(1)+"}</br>"+tab(1)+"return false;</br>}</code></br></br>",
		"What this function does is that it checks to see whether e.x is between <code>pic</code>'s left side (<code>pic.x</code>) and its right side (<code>pic</code>'s left side plus its width). ",
		"If it is, then the code can then check to make sure <code>e.y</code> is between pic's top side and bottom side. If so, then that means that <code>e</code>'s ",
		"coordinates fall somewhere within <code>pic</code>, so the user must have clicked on <code>pic</code>. The function will return <code>true</code> if <code>pic</code> was clicked on, and <code>false</code> if it was not.</br></br>",
		"You can view an example of this code in action <a href='clickExample.html'>here</a> (Disclaimer: May not work in all browsers)."]
	},
	{
		"name":"GitHub",
		"suggested":[],
		"text":["<heading><u>Using GitHub for Team Projects</u></heading></br></br>GitHub is an online code repository, meaning that it allows for multiple people to access the same code from any computer. This simplifies any team programming project for obvious reasons. ",
		"Almost everyone in the tech world uses GitHub. The web GUI (Graphical User Interface) makes it especially easy to use. Just head on over to <a href=\"https://github.com\">GitHub</a>. Create an account for free, and remember the username and password an all that. ",
		"Next what you want to do is create a new project, or <i>repository</i> (fancy word, right? :P). From here, you can create new files, upload existing files, or edit files already uploaded to GitHub. ",
		"If you've made your repository public (I believe all free accounts' repositories are public), then others (like your teammates) can also contribute to your code (Provided you review their changes). ",
		"Now that you have a repository set up, just go ahead and start programming. First, you will want to edit your README doc so that the \"create new file\" options will appear in your project profile. ",
		"Have fun with your group projects!</br></br>And Git good at coding!"]
	},
	{
		"name":"HTML",
		"suggested":[],
		"text":["<heading><u>HTML</u></heading></br></br>HTML is the backbone of every webpage on the internet. It will provide you with the tools to create the bare bones of a website. ",
		"HTML is a relatively simple language, and can be augmented by two other languages: JavaScript and CSS. In html, you have something called <i>tags</i>. ",
		"Tags are the basic building blocks of HTML. Individual tags can even be customized using <i>attributes</i>. Here is an example of a complete tag:",
		"</br>"+tab(1)+"<xmp><font color=\"red\">Hello!</font></xmp></code></br><code>font</code> is the tag. <code>color</code> is an attribute.</br></br>",
		"<heading><u>Common HTML Tags</u></heading></br></br><xmp>•<html> - Every other tag in your webpage must come between <html> and </html>.</xmp>",
		"<xmp>•<title></title> - whatever you type between these tags will be set as the webpage's tab name.</xmp><xmp>•<body> - most of your html code will be within a <body> tag. <body> represents the background of your webpage.</xmp>",
		"<xmp>•<p> - sets apart text within the tag as a single paragraph.</xmp><xmp>•<font> - uses attributes to change some text's color, font size, and decoration.</xmp><xmp>•</br> - </br> doesn't require a <br> tag. It tells the webpage to skip down to the next time.</xmp>",
		"<xmp>•<a> - the attributes to this tag define a link.</xmp><xmp>•<img> - adds an image to your webpage.</xmp><xmp>•<canvas> - canvas is a tag used to draw graphics with javascript. It is used to make graphical games on a webpage.</xmp>",
		"<heading><u>Example Code</u></heading></br></br><font color=\"skyBlue\"><xmp><html></xmp><xmp><title>Webpage example</title></xmp><xmp><body background=\"skyBlue\"></xmp><xmp><!--P.S., here's a comment. Comments don't affect the webpage in any way, they're just here as notes--></xmp></font>",
		"<font color=\"skyBlue\"><xmp><h1>Here's a heading</h1></xmp><xmp>text outside of any tag shows up as just plain text on a webpage.</xmp><xmp></br><!--You'll want a </br> (a break tag) after plain text to indent to the next line on the page after it--></xmp><xmp><font size=\"6\" color=\"red\">Big red text!</font></br></xmp></font>",
		"<font color=\"skyBlue\"><xmp><a href=\"bit.ly/erhscompclub\">A link to the best webpage ever :P</a></xmp><xmp><p>Here's a paragraph. It will already be indented without a break tag because it's a pragraph. HTML already handles that for us.</p></xmp><xmp></body></xmp><xmp></html></xmp></font>"]
	},
	{
		"name":"Concepts",
		"suggested":[],
		"text":["<heading><u>Basic Programming Concepts</u></heading></br></br>There are hundreds of programming languages you could learn. Java, HTML, CSS, JavaScript, ActionScript, PHP, Haskell, the C languages, and many, many more. Most languages were created with a certain goal in mind. ",
		"For example, HTML is used to create the bare bones of a webpage, CSS beautifies those bones, and JavaScript adds functionality to the page (required for games). Java can create Android or desktop apps, and ActionScript is used for Flash games. ",
		"To fill so many varied purposes, different programming languages often have many differences between them. However, there are a few aspects that are present in most relevant modern programming languages.</br></br>",
		"<heading><u>Comments</u></heading></br></br>Sometimes in programming you want to temporarily \"delete\" code to see what would happen without it. ",
		"Or maybe you want to leave tips or explanations for fellow programmers working on the same project as you, to explain what your functions or variables are for. ",
		"Or maybe you're like me and leave half-written chapters of Computer Club history hidden in the code of the webpage ;D. At any rate, you can achieve all of these with comments. ",
		"Comments mark a section of your code so the program ignores it when it is run, so they're perfect for leaving messages for programmers only, or for removing small bits of code when testing your game. ",
		"There are a few different types of comments, and some that can only be used in certain languages. Here are the three most common types of comments:</br>"+tab(1)+"• ",
		"//comment goes here. This type of comment is used in Javascript, Java, the C languages, and Actionscript. It only works for a single line.</br>"+tab(1)+"• ",
		"/*comment goes here*/ this kind of comment works in the same languages as the // comment, and also in CSS. It can extend for multiple lines."+tab(1)+"<xmp>•<!--comment goes here-->This is used in HTML. It functions like the /**/ comment above.</xmp>",
		"<heading><u>camelCase</u></heading></br></br>Camel Case is a new way of writing sentences. The first word in the sentence is all lower-case. Every word after that has its first letter capitalized. Here's an example of Camel Case:</br>"+tab(1)+"thisIsACamelCaseSentence</br>",
		"Camel Case is usually used when writing method or class names, because in most programming languages, a space between two words means that they are two different things, and not a single name. ",
		"It's not necessary to use camel case as long as you don't put spaces between method names, class names, or variables...It's just the preferred way for programmers to name what they code.</br></br>",
		"<heading><u>Variables</u></heading></br></br>Almost every programming language has something called a variable. Variables are just a way for you to store important information in the code...something that could possiby change while the code is running (like player health in a game). ",
		"There are many different types of data that can be stored in a variable. Here's a quick list of the most popular data types:</br>"+tab(1)+"• string: words, letters, numbers, or whatever in quotes; Ex: \"Hello, there.\"</br>"+tab(1)+"• ",
		"int: a whole number; Ex: 1,-20,0,15648</br>"+tab(1)+"• boolean: a value that can only be true or false (Like whether or not a light switch is on)</br></br>",
		"<heading><u>Math</u></heading></br></br>Now that we're familiar with variables, let's talk about an even more fundamental concept in programming - math. Programming is essentially just a person telling a computer what math operations to do, and where to store the results. ",
		"For example, all files (images, 3D models, songs, videos) are displayed on a computer screen and/or heard through computer speakers because the files are stored as (or converted into) numbers that tell the computer which RGB values to put at what position of the screen or that describe a sound wave that must be produced by the speakers. ",
		"Now imagine a game, like Super Mario Bros. Mario's x and y positions on the screen, his speed in both dimensions, his current power-up, number of lives, and how many coins he has are all represented by numbers. Math (mainly addition, subtraction, multiplication, and division) is how the programmer manipulates these numbers to get the game to progress and change.",
		"In almost all languages, addition is represented by +, subtraction by -, multiplication by *, and division by /. Here are a few examples of operations using variables in Javascript:</br>"+tab(1)+"• ",
		"health-=damage; //the = right after - means that the variable on the left becomes itself minus the variable on the right</br>"+tab(1)+"• totalDamage=damage-armor //an example of a basic minus operation</br>"+tab(1)+"• ",
		"force=mass*acceleration; \\the basis of a physics engine in your game</br>"+tab(1)+"• damage*=2 //perhaps you run this code when you get a 2x damage buff</br></br>",
		"<heading><u>Methods</u></heading></br></br>You know how in Algebra you're introduced to functions? Well, since many programming languages are heavily based on math concepts, they have functions as well. Some languages call them methods, behaviors, or simply just functions. ",
		"They are all just different names used for the same thing. In essence, a function in math recieves data as an input, changes that data and then outputs the changes. Think of the simple function f(x)=2x+3. ",
		"The function inputs x, multiplies it by 2, adds 3, and then returns that value. In mathematics functions return numbers, usually for display on a graph. ",
		"In programming, however, that's not always the case. Sure a function can return numerical, string, boolean or other data types, but it doesn't always have to. ",
		"Some functions are just snippets of code that do stuff but don't return any value. This means that all you have to do to run that snippet of code is to \"call\" the function. ",
		"Without the function, you would have to copy and paste all the code somewhere else to run it in multiple places. Functions simplify that by allowing you to refer back to that snippet of code from anywhere else in your program. ",
		"Now, I'll explain one more thing: what does it mean to \"call\" a function? Well, functions have parameters (inputs, such as x), a return value, and a name. Where as the parameters and return value are optional, all functions have at least a name. ",
		"In all languages, you call a function by typing its name (though most languages require you to type a few other things such as parenthesis for syntax purposes). If you call a function somewhere in your code, ",
		"the code within the function itself will be run as if you had typed it all in place of your function call. Think of a function as a macro (for those of you familiar with gaming terms) or a custom command that you specify yourself. ",
		"Most programming languages come with built-in functions and allow you to make your own. There is a more specific guide on functions in Javascript in the Javascript lesson.</br></br><heading><u>Keywords</u></heading></br></br>",
		"All programming languages come with built-in <i>keywords</i>. To explain what keywords are I suppose I'll have to explain how programming languages themselves work. ",
		"Once you've written all your code, you \"run\" your program. Different languages are designed to code different things, and so are run on different platforms. Javascript is designed for web development, and so is run in a browser, while C runs from the command line to make executable .exe files. ",
		"When a program is run, the language's compiler scans through all your code and translates it into lower and lower-level languages (the lower a language's level is, the closer it is to pure binary code). This series of translation doesn't stop until your code is pure binary (usually). ",
		"Computers can't truly understand our programming languages, only binary code. Humans, however, find it hard to read binary so we created compilers and programming languages. ",
		"All languages have basic, fundamental commands and phrases. These are called keywords, and they let the compiler know what exactly your code is doing so it can make an accurate translation down to binary. ",
		"Keywords can vary drastically between languages. In Javascript, the <code>var</code> lets the compiler know you are making a variable. In Ruby, <code>puts</code> tells the compiler you want to display some text. ",
		"In most languages, the <code>return</code> keyword tells the compiler to exit a function with a specified output. You will learn more about keywords as you learn individual languages, such as Javascript."]
	},{
		"name":"Languages",
		"suggested":["Concepts"],
		"text":["<heading><u>Types of Languages</u></heading></br></br>Over the years, humans have created hundreds of different programming languages. ",
		"Some languages are similar to each other in syntax (~grammar or structure) and vocabulary, forming parallels to real-world language families. That is to say, there are lots of different types of languages. ",
		"Before I describe some of the hundreds of programming languages out there, let me first describe some of the types of languages that exist.</br>"+tab(1)+"• ",
		"Procedural: The first programming languages were <i>procedural</i>. Programmers created variables and functions all in one huge file. There was no creation or destruction of data (you did not create a new instance of a class, there were no classes). ",
		"These languages were not as dynamic as their successors, Object-Oriented languages.</br>"+tab(1)+"• Object-Oriented: Object-Oriented and Procedural languages are the two main types of programming languages. There are tons of smaller families that exist under these two categories. ",
		"Object-Oriented programming was developed in response to Procedural limitations. With Object-Oriented programming, the programmer can create <i>classes</i>, which are like the outline for a custom object. ",
		"An <i>object</i> is basically a collection of data (variables and functions), which makes data manipulation easier to understand by the programmer. Object-Oriented languages are more widely used today than Procedural languages.</br>"+tab(1)+"• ",
		"Multi-Paradigm: Programming paradigms are essentially styles of programming. Two popular paradigms are Procedural and Object-Oriented. Multi-Paradigm is exactly what the name suggests - a mix of two or more paradigms.</br>"+tab(1)+"• ",
		"C-based: This is the most common type of language for functional programming. Java, Javascript, Actionscript, are members of this language type. Some are procedural, some are object-oriented. ",
		"These languages are primarily math-based, so they are mainly used for storing/manipulating data (thus making them essential tools for game creation).</br>"+tab(1)+"• Markup: Markup languages include HTML and XML (which is more of a way to write data than an actual programming language). ",
		"Basically anything that ends in ML (\"Markup Language\") is part of this family. Members of this family do not use any math, and so cannot be used to make a game without assistance from a more math-based language. ",
		"Markup languages primarily use <i>tags</i> instead of variables or functions to store data. The prupose of Markup languages is to store data for use by more complex languages.</br>"+tab(1)+"• ",
		"Assembly Languages/Machine Code: Long ago, when the first computers were built, programmers used to write their code directly in binary (simply 1's and 0's). ",
		"This process was difficult to master, took a long time, and was very expensive. To fix this, programmers began to develop the first programming languages, called Assembly languages. ",
		"Assembly languages are all procedural, and are a step up from pure binary code in complexity. Assembly languages were the first of a type of language called \"Low Level\" programming languages. ",
		"This means that every type of CPU has its own Assembly language associated with it. Assembly languages are extremely simple math-based languages that can directly manipulate computer memory and other hardware.</br>"+tab(1)+"• ",
		"Natural: Natural languages are modeled after human speech, such as English. One example of a natural programming language is LiveCode.</br></br>",
		"<heading><u>Encyclopedia of Languages</u></heading></br></br>",
		"<table style=\"position:relative;width:90%;text-align:center;\"><tbody>"+languageDataTable()+"</tbody></table>"]
	},
	{
		"name":"Keyboard Controls",
		"suggested":["Javascript","HTML","Clicking"],
		"text":["<heading><u>The HTML Part</u></heading></br></br>There are two parts you have to code fi you want keyboard input functionality in your game. ",
		"One of these parts is written in html, the other is written in Javascript. For the html code, you'll want to add an <code>onkeypress</code> attribute to your <code>canvas</code> tag. ",
		"Give the attribute a javascript function as a value, with <code>event</code> passed in it as a parameter (something like <code>onclick(event)</code>). The onkeypress attribute in html adds an <i>event listener</i> to the canvas tag. ",
		"An event listener is a part of the program that waits for a certain event to happen (such as a key being pressed or the mouse being clicked). When you press a key, the onkeypress attribute calls the Javascript function you passed as its value. ",
		"Now, let's get to coding the Javascript portion of your keyboard input code.</br></br><heading><u>The Javascript Part</u></heading></br></br>",
		"So you have a function like this:</br><code>onclick(e){}</code></br><code>e</code> is the parameter for the function <code>onclick</code>. ",
		"In the html portion of your code, you pass <code>event</code> as the parameter of e. This function will run whenever you press a key on the keyboard. ",
		"Many games utilize keyboard controls, be they arrow keys for movement or the z button for special attacks. However, you would want a way to see which button specifically was pressed. ",
		"To find which button was pressed, you can run this code snippet: <code>e.keyCode</code>. <code>e.keyCode</code> returns the <i>key code</i> of whichever key was pressed last. ",
		"The <code>event</code> keyword that you passed into the onclick(e) function in the onkeypress attribute contains all the data of the pressed key. ",
		"This includes the key code of the event. Each key on the keyboard is represented by a unique number (its key code). To see which key was pressed, just use a simple <code>if</code> statement. like so:</br>"+tab(1)+"<code>",
		"if(e.keyCode==39){</br>"+tab(2)+"//right arrow key was pressed. Move player right</br>"+tab(1)+"}</br>39 is the key code for the right arrow key. ",
		"<a href=\"http://www.cambiaresearch.com/articles/15/javascript-key-codes\">Here is a list</a> of all the keycodes on the keyboard."]
	},
	{
		"name":"Useful Code",
		"suggested":["Javascript"],
		"text":["<heading><u>Random Number Generator</u></heading></br></br>Random number generators (or RNGs) are integral to many facets of game deisgn. ",
		"Perhaps you want an enemy that moves randomly across the screen, or you want semi-randomized dungeon design for better replayability in your game. At any rate, you want to be able to write code that can generate a random number between a specified minimum and maximum. Here is some simple code that does just that: </br>"+tab(1)+"<code>function ",
		"random(min,max){</br>"+tab(2)+"return Math.round(Math.random()*(max-min))+min;</br>"+tab(1)+"}</code></br>Let's take a look at this code piece by piece. This function returns a random whole number between <code>min</code> and <code>max</code>. <code>Math.random()</code> returns a random decimal from 0 to 1. ",
		"Multiplying this random number by another number, like <code>(max-min)</code> (<i>x</i> for short), will change the value generated to 0 to x. Let's say 0 was generated by <code>Math.random</code>. Zero times x is still zero. If a 1 was generated, 1 times x is x. ",
		"This is why multiplying the random number by a constant changes the maximum value generated. This value, however, is still a decimal. <code>Math.round()</code> fixes that by rounding the value to the closest whole number. After a whole number is randomly generated, it is added to <code>min</code>, the minimum value desired by the coder. ",
		"If zero is returned, zero plus minimum is the minimum value specified by the coder. If x is returned (x in this case is <code>(max-min)</code>) then minimum is added to that. Max minus min plus min is equal to max, the maximum value desired by the coder."]
	},
	{
		"name":"Physics",
		"suggested":["Javascript"],
		"text":["<heading><u>Physics</u></heading></br></br>Physics. That 7-letter word that gives all s/t juniors nightmares and high anxiety. In games, however, physics can be a bit more manageable. If you’ve never heard of a \”Physics engine,\” then you probably don’t know why you need to understand physics to make games. Actually, you only need to understand the physics that will feature in your game world. You don’t need to be a quantum mechanics major to make Candy Crush. You don’t even need to know how gravity works to make Tetris. In the real world, trillions upon trillions of atoms interact with force fields emitted by specialized particles. On our scale, this causes things like friction, magnetism, gravity, and electricity. In a game world, you can almost always simplify these things, depending on the kind of world you want to create.</br></br>",
			"<heading><u>Collision Detection</u></heading></br></br>Collision detection is probably the most confusing topic in this section. It’s simple to do, but the way it is explained can be abstract and difficult to visualize for some people. Anyway, here goes. Imagine a box surrounding each character on the screen. Each object you create in your code that you want to physically interact with other objects should have four variables: x, y, width and height. Now back to the box surrounding that character. Where is the box? Well, its left side is at the character’s x value. It’s right side is at x+width. It’s top is at y, and its bottom is at y+height. These boxes don’t really need to be programmed, they’re just a visualization. Since these boxes follow an object and share its dimensions, the box is essentially a representation of the object, right? And the best way to see if two objects are colliding is to check whether or not their boxes overlap. It’s easy to see when boxes overlap for us humans, but computers don’t think like us. They use math and numbers, so how can you tell when two boxes overlap using math? Well, if the right side of box 1 (x+width) is greater than box 2’s left side, but box 1’s left side (x) is less than box 2’s left side (I told you this was gonna get confusing), then they’re overlapping along the y axis. But what if the situation is reversed? What if box 1’s left side is less than box 2’s right side, and box 1’s right side is greater than box 2’s right side? Well, they’re still overlapping on the y axis in that case. That means that there’s two cases for you to check for. But what about overlapping on the x axis? Well, just take the mathematical process I described above and replace all x’s with y’s, and all width’s with height’s. That is how you check for an overlap along the x axis. Now, if box 1 and box 2 overlap along both the x and y axes, then they are touching and the two objects they represent are colliding with one another.",
			"</br>Now, there is more than just one way to check for collision. What I detailed above was one of the simplest yet functional collision detection algorithms. In some projects, you may only want to test collision on one or two sides of a character. Or, you may want to know what side(s) in particular two objects are colliding on. I plan on doing a mini-lesson series about more minute details of game creation, and the first will go more in-depth on this topic. Until then, see what you can do with a simple yes or no collision detection algorithm.",
			"</br></br><heading><u>Gravity</u></heading></br></br>In our world, gravity causes objects to accelerate towards the earth. Unless you’re making a game like Super Mario Galaxy, all you need to do is move characters downward at increasing speed to achieve realistic (or semi-realistic) gravity. To do this, just have yAcceleration and ySpeed variables for each character. Each frame, decrease the ySpeed variable by the yAcceleration variable, and increase the character’s y position by its ySpeed. Of course if the character’s feet are on the ground you probably want to set both yAcceleration and ySpeed to zero so the character won’t fall through the earth into the deep dark abyss that I call home ._.",
			"</br></br><heading><u>MLG Legit College Graduate Physics</u></heading></br></br>I’ve explained physics to enough of my classmates already, so if you want to do really real physics for your game I hope you have a background in physics already. Essentially, things move because forces are applied on them. F=ma, so the sum of all forces divided by the mass of an object is how fast they accelerate. As you know, you change your speed by an acceleration value, and you change your position by a speed value. Also good to remember is that forces, acceleration, and speed aren’t just just magnitudes, but directions as well. They are vectors. With a simple coordinate or magnitude and angle, you can store the data for a vector in your code. For gravity and such, one problem I used to run into was this: How do I use F=ma to get normal force to keep the characters from falling through the floor? The answer is simple. When a character lands on or jumps off of the ground, he/she exerts a force on the ground. Well, not just the ground, but the entire earth. The earth, according to Newton’s third law, exerts an equal force back at the character. That force is enough to launch the character up into the air (or at least counteract gravity, causing the player to not phase through the ground), but when divided by the earth’s colossal mass, it barely does anything to it. To have your characters jump using realistic physics, just have them exert a force on the ground sprite, whose mass should be immense (enough to make any force exerted on it yield a negligibly tiny decimal acceleration)."]
	}
]
