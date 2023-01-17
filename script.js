//your code here
var text = document.getElementById("evaluatedText").value;
var numWords = 0;
          
            // Loop through the text
            // and count spaces in it 
            for (var i = 0; i < text.length; i++) {
                var currentCharacter = text[i];
          
                // Check if the character is a space
                if (currentCharacter == " ") {
                    numWords += 1;
                }
            }
numWords += 1;
          
            // Display it as output
            document.getElementById("letterCount")
                .innerHTML = numWords;
