// Code for animated text, learned from https://www.youtube.com/watch?v=POX3dT-pB4E&t=41s, but had to change some things to get it to work for my website and aesthetics
const TypeWriter = function(textElement, words, wait = 3000) {
  this.textElement = text;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}


//Type Method
TypeWriter.prototype.type = function(){
  // Current Index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullText = this.words[current];
  // Check if isDeleting
  if(this.isDeleting){
    this.txt = fullText.substring(0,this.txt.length - 1);
        // Remove a character
  }
  else {
    this.txt = fullText.substring(0,this.txt.length + 1);
    // Add a character
  }

// Insert text into textElement
this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// Initial Type Speed
let typeSpeed = 200;
if(this.isDeleting) {
  typeSpeed /= 2;
}

// If Word is complete
if (!this.isDeleting && this.txt === fullText) {
  // make pause at end
  typeSpeed = this.wait;
  this.isDeleting = true;
}
else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  // Move to next word
  this.wordIndex ++;
  // Pause before we start typing
  typeSpeed= 500;
}


  setTimeout(() => this.type(),typeSpeed);
}
// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', initialize);

function initialize(){
  const textElement = document.querySelector('#text');
  const words = JSON.parse(text.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');
  // Initialize TypeWriter
  new TypeWriter (textElement, words, wait);
}
