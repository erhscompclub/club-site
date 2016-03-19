function tab(times){
	var tab="";
	for(var a=0;a<times;a++){
		tab+="&emsp;&emsp;&emsp;";
	}
	return tab;
}
var lessons=[
	{
		"name":"ActionScript 3",
		"suggested":[],
		"text":["ActionScript 3 is the language used for programming Flash games. ",
		"Basically, if you want to make games like those on <a href='http://kongregate.com'>Kongregate</a> or <a href='http://maxgames.com'>Maxgames.com</a>, you need to know this language.</br>",
		"Lessons coming soon."]
	},
	{
		"name":"Javascript",
		"suggested":["Console"],
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
		"<code>function fromTheWindow(){</br>"+tab(1)+"return \"To the wall\";</br>}</br>console.log(fromTheWindow());</code></br></br>",
		"You see how <i>fromTheWindow()</i> returns \"To the wall\", right? Well, that means that whenever we call <i>fromTheWindow</i>, ",
		"our program will replace it with what it returns. So when we pass it as <i>console.log()</i>'s parameter, \"To the wall\" gets printed to the console. ",
		"Whelp, that's basically the basics of functions. Many programming languages use them, so they're crucial to know. Here are a few other functions that come built in to Javascript:</br></br>",
		"•<i>console.log(text);</i>"+tab(2)+"Prints <i>text</i> to the console</br>",
		"•<i>Math.random();</i>"+tab(2)+"Returns a random decimal from 0 to 1</br>",
		"•<i>Math.round(number);</i>"+tab(2)+"Returns <i>number</i>, but rounded to the nearest ones place</br>",
		"•<i>Math.floor(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round down</br>",
		"•<i>Math.ceil(number);</i>"+tab(2)+"Like <i>Math.round(number)</i>, but it'll only round up"]
	},
	{
		"name":"Lugonian Physics Engine",
		"suggested":["Javascript"],
		"text":["I wasn't that good with names..."]
	},
	{
		"name":"LPE v2.0",
		"suggested":["Javascript","Lugonian Physics Engine"],
		"text":["Coming soon...</br>(To a theater near you)</br>(Yes! I've always wanted to say that!)"]
	},
	{
		"name":"Console",
		"suggested":[],
		"text":["Console lesson coming soon..."]
	}
]