function tab(times){
	var tab="";
	for(var a=0;a<times;a++){
		tab+="&emsp;&emsp;&emsp;";
	}
	return tab;
}
var lessons=[
	{
		"name":"Javascript",
		"suggested":["HTML"],
		"text":["<heading><u>Functions</u></heading></br></br>",
		"Functions are essentially little snippets of code that you save in your programs. ",
		"Think of them as custom commands you can create and then tell the program to do later. ",
		"This called <i>defining</i> and <i>calling</i> a function. ",
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
		"Try creating a new variable in the console with <code>var alex=\"Awesome\"</code>. Then, type <code>alex</code>, hit enter, and watch as the console returns \"Awesome\"."]
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
		"Now that you have a repository set up, just go ahead and start programming. Have fun with your group projects!</br></br>",
		"And Git good at coding!"]
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
		"<heading><u>Example Code (Unfinished)</u></heading></br></br><xmp><html></xmp><xmp><title>Webpage example</title></xmp><xmp><body background=\"skyBlue\"></xmp><xmp><!--P.S., here's a comment. Comments don't affect the webpage in any way, they're just here as notes--></xmp>",
		"<xmp><h1>Here's a heading</h1></xmp><xmp>text outside of any tag shows up as just plain text on a webpage.</xmp><xmp></br><!--You'll want a </br> (a break tag) after plain text to indent to the next line on the page after it--></xmp><xmp><font size=\"6\" color=\"red\">Big red text!</font></br></xmp>",
		"<xmp><a href=\"bit.ly/erhscompclub\">A link to the best webpage ever :P</a></xmp><xmp><p>Here's a paragraph. It will already be indented without a break tag because it's a pragraph. HTML already handles that for us.</p></xmp>",
		"<xmp></body></xmp><xmp></html></xmp>"]
	}
]
