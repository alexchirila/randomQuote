document.getElementById("quote-random").innerHTML=randomQuote();

	function randomQuote(){
	
		quotes = {
			quote1 : { quote : "Do one thing every day that scares you.",
					   author : "Eleanor Roosevelt"},
			quote2 : { quote : "We are what we pretend to be, so we must be careful about what we pretend to be.",
					   author : "Kurt Vonnegut, Mother Night"},
			quote3 : { quote : "Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.",
					   author : "Neil Gaiman, The Sandman, Vol. 6: Fables and Reflections "},
			quote4 : { quote : "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
					   author : "Paulo Coelho, The Alchemist "},
			quote5 : { quote : "The flower that blooms in adversity is the rarest and most beautiful of all.",
					   author : "Walt Disney Company, Mulan "},
			quote6 : { quote : "You are the semicolon to my statements.",
					   author : "Unknown	"}
				};


			var objLength = Object.keys(quotes).length; // get the length of the quotes object
			
			var rnd = Math.ceil(Math.random() * objLength); // get a random number from 1 to the length of the quotes object

			var prop = "quote" + rnd;

			return quotes[prop].quote + "<br><br><i>" + quotes[prop].author + "</i>";


	}