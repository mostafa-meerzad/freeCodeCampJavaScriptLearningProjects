function convertHTML(str) {
    var temp = str.split('');//turns string into an array of letters
    for (var i=0;i<temp.length;i++){ //loops through the temp array
        switch (temp[i]) { //start of a switch statement
            case '&': //if you see an &
                temp[i]='&amp;'; //change it to &amp;
                break; //end of this case
            case '<': //if you see a <
                temp[i]='&lt;';//change it to &lt;
                break;//end case
            case '>'://if you see a >
                temp[i]='&gt;';//change it to &gt;
                break;//end case
            case '"'://if you see a " inside '
                temp[i]='&quot;';//change it to &qout;
                break;//end case
            case "'"://if you see a ' inside "
                temp[i]="&apos;";//change it to &apos;
                break;//end case and switch
        }
    }
    temp = temp.join(''); //turns the array back into a string
    return temp;
}

console.log(convertHTML("Shindler's List"))