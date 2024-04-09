document.addEventListener("DOMContentLoaded", () => {
    //New letter button
    newLetterGenerator()
    
    //make love letter draggable
    // let elmnt = document.getElementsByClassName("love-letter")
    //     // console.log("top", elmt)
    // dragElement(elmnt);
  })



//GENERATE LOVE LETTER
  function newLetterGenerator() {
  let button = document.getElementById("generate")
  button.addEventListener("click", () => {
      // console.log("button clicked!");

    //innerHTML method
    let loveLetterDiv = `
      <div class="love-letter" >
        <div class="top">
          <span class="star"></span>
        </div>
        <div class="letter-content">
            <p class="quote"></p>
            <p class="author"></p>
        </div>
      </div>`;

    //Single Letter View
    // let newLetter = document.querySelector(".letter-content")

    // Multi Letter View
    const newLetter = document.createElement("div");
    newLetter.innerHTML = loveLetterDiv;
    console.log("loveLetterDiv",loveLetterDiv)
    
    //pass new letter into get random letter
    getRandomLetter(newLetter);

    //directly reference .love-letter div
    const loveLetterDivElement = newLetter.querySelector(".love-letter");

    // Apply the next color from the cycle
    const newColor = getNextColor();
    applyColor(loveLetterDivElement, newColor);

    // add the newly created element and its content into the DOM (Multi Letter View with innerHTML)
    const zineContainer = document.getElementById("web-zine");
    zineContainer.appendChild(loveLetterDivElement);
    })

    // const elmnt = document.querySelector(".love-letter");
    dragElement(document.querySelector(".love-letter"));
    console.log("element", elmnt)
  }

  //RANDOMIZE LETTERS
  function getRandomLetter(newLetter){
    let randomQuote = Math.floor(Math.random() * quotesArray.length)
    console.log(randomQuote, quotesArray[randomQuote]);
    displayLetter(quotesArray[randomQuote], newLetter);

    //delete entry from array once displayed
  }

  //DISPLAY LETTERS
  function displayLetter(quote, newLetter){
    console.log(quote)
    // For single letter view
    // let quoteContentDiv = document.querySelector(".letter-content")

    // To add new letter to view
    let quoteContentDiv = newLetter.querySelector(".letter-content");

    quoteContentDiv.innerHTML = quote
  }


//QUOTES
const quotesArray = [
  `“What if it is not an experiment, this creative life of refusal. This rarely institutionally-funded disloyal life of practice for a world as yet unnamable. This insistence on transformation when the bank account screams “conform.” What if this life as an independent experimental artist is not itself an independent experiment? What if it’s an interdependent ceremony?” 
  
  -- Alexis Pauline Gumbs :: "<a href="https://topicalcream.org/features/the-god-of-every-day/">The God of Every Day</a>"`,
	
  `“It doesn't matter if you think the goals are unattainable. They are. What matters is that they are impossible without the work, they cannot happen if you don't make the work.”
	
  -- Awkwaeke Emezi :: "<i>Dear Senthuran: Black Spirit Memoir</i>", Execution | Dear Nonso`,
                
  `“Sometimes we don't get the reassurances we want; we make the work anyway.”
  
  -- Awkwaeke Emezi :: "<i>Dear Senthuran: Black Spirit Memoir</i>", Canon | Dear Daniel`,

  `“First forget inspiration. Habit is more dependable. Habit will sustain you whether you’re inspired or not. Habit will help you finish and polish your stories. Inspiration won’t. Habit is persistence in practice.”
  
  -- Octavia Butler`,

  `“The white fathers have told us: 'l think, therefore I am.' But the Black mother within each one of us—the poet inside—whispers in our dreams: 'I feel, therefore I can be free.' Learn to use what you feel to move you toward action. Change, personal and political, does not come about in a day, nor a year. But it is our day-to-day decisions, the way in which we testify with our lives to those things in which we say we believe, that empower us. Your power is relative, but it is real. And if you do not learn to use it, it will be used, against you, and me, and our children. Change did not begin with you, and it will not end with you, but what you do with your life is an absolutely vital piece of that chain. The testimony of your daily living is the missing remnant in the fabric of our future.”
  
  -- Audre Lorde :: Oberlin College May 29, 1989`,

  `“They told me it was a hallucination, this waking dream I want for all of us, but now I know the truth. In a world where capitalism as usual makes complicit in drowning the planet, we are the ones who are already dolphins, the psychics, the visionaries. We could trust ourselves. Our adaptable foreheads were not made to be caged; we deserve the restful freedom to evolve, to -- as D'atra Jackson said at the North Caroline Emergent Strategy Immersion -- ‘surrender to your dreams’”
  
  -- Alexis Pauline Gumbs :: "<i>Undrowned</i>", Honor your Boundaries`,

  `“Our fear may not go away, but it will not stand in the way”
  
  -- bell hooks :: pulled from Seed a World Affirmations`,

  `“The moment we choose to love, we begin to move against domination, against oppression. The moment we choose to love we begin to move towards freedom, to act in ways that liberate ourselves and others. That action is the testimony of love as the practice of freedom”
  
  -- bell hooks :: Love as the Practice of Freedom`,

  `“How would we spend our time if we realized that the conflicts we are experiencing now urgently demand that we create more loving world as soon as possible?”
  
  -- Alexis Pauline Gumbs :: "<i>Undrowned</i>", Learn from Conflict`,

  `“Whether it’s been years, months or weeks since you’ve released work or visited the altar of your creative practice, it’s always the right time to return. Returning to our way of knowing, being and breathing reminds us of the possibility always available to us inside the non-linear loop of creative practice. If fear is excitement without breath, love lets the oxygen in. This radical self-love makes burn out much more difficult to take hold and easier to spot before it begins. Returning to desire is a practice of recharge, not depletion. Inside our breathwork, the spacious possibility that creative practice cultivates, we get to create worlds that nurture our wholeness and attract resources, relationships and opportunities we couldn’t imagine would find their way to us. But first, we must find our way back to ourselves…
  Over and
  Over and
  Over again.”

  -- Ayana Zaire Cotton :: "<a href="https://open.substack.com/pub/seedaschool/p/practice-doesnt-make-perfect-it-makes?r=aayhw&utm_campaign=post&utm_medium=web">Practice Doesn’t Make Perfect, It Makes Possibility</a>"` 
]


//CYCLE THROUGH COLOR PALETTER
  // Define color values
  const colors = ['#edcb59', '#BFA1B5', '#C4F16A'];
  let colorIndex = 0;

  // Get the next color from the array
  function getNextColor() {
      const color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
      return color;
  }

  // Function to apply the color to the "love-letter" div and its ".top" child
  function applyColor(element, color) {
      element.style.borderColor = color;
      element.querySelector('.top').style.backgroundColor = color;
  }


//DRAG LETTER FUNCTION
function dragElement(elmnt) {

  // console.log("element", elmnt)
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    //move the DIV from anywhere inside the DIV
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}