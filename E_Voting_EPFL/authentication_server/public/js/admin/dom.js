/**
* DOM generator.
* Allows to generate elements with associated functions.
*/

/**
* Create a clickable element with a given type.
* @param String elementType : the type of the element to create.
* @param String textToDisplay : the text to display on the element.
* @param function onClick : the function to execute when clicking on the created element.
* @return HTML Element : an element with the given attributes.
*/
function clickableElement(elementType, textToDisplay, onClick){
    var element = document.createElement(elementType);
    element.innerHTML = textToDisplay;
    element.addEventListener("click", onClick);
    return element;
}

/**
* Return a paragraph element with the given text.
* @param String textToDisplay : the text to display in the paragraph.
* @return HTMLParagraphElement an element representing a paragraph with the given text.
*/
function paragraph(textToDisplay) {
    var element = document.createElement("p");
    element.innerHTML = textToDisplay;
    return element;
}

/**
* Return a header h2 with the given text.
* @param String textToDisplay : the text to insert in the header.
* @return HTMLH2Element an element representing a header h2 element with the given text.
*/
function h2(textToDisplay) {
    var element = document.createElement("h2");
    element.innerHTML = textToDisplay;
    return element;
}

/**
* Return a header h3 with the given text.
* @param String textToDisplay : the text to insert in the header.
* @return HTMLH3Element an element representing a header h3 element with the given text.
*/
function h3(textToDisplay) {
    var element = document.createElement("h3");
    element.innerHTML = textToDisplay;
    return element;
}

/**
* Return a header h4 with the given text.
* @param String textToDisplay : the text to insert in the header.
* @return HTMLH4Element an element representing a header h4 element with the given text.
*/
function h4(textToDisplay) {
    var element = document.createElement("h4");
    element.innerHTML = textToDisplay;
    return element;
}

/**
* Returns an element representing a separation line.
* The specificities of this line can be found in the css class "underlined".
* @return HTMLDivElement an element representing a separation line.
*/
function separation_line(){
	var element = document.createElement("div");
	element.className += "underlined";
	return element;
}
