function firstWord(s) {
  // your code here
	 s = s.trim();


    const spaceIndex = s.indexOf(' ');

    if (spaceIndex === -1) {
        return s; 
    } else {
        return s.slice(0, spaceIndex);
    }
}

// Example usage
console.log(firstWord('see and stop'));  
            

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
