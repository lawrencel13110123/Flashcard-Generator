function clozeConstructor (text, cloze) {
	this.text = text; 
	this.cloze = cloze; 
	this.partial = this.text.replace(this.cloze, ".....")
};

// var test = new clozeConstructor("My name is Lawrence","Lawrence"); 
// console.log(test)

module.exports = clozeConstructor