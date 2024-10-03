function TextParser(text){
    let lowerCase=text.toLowerCase();
    console.log("lowercase: "+lowerCase+" ," );
    console.log(`noSpaces ${text.replace(/ /g,"")} ,`);
    console.log(`contains Javascript: ${lowerCase.includes("javascript")} ,`);
    let NumOfa=0
    for(let i of text){
        if(i=="a"){
            NumOfa+=1
        }
    }
    console.log(`countofA: ${NumOfa} ,`)
    console.log(`replacedE: ${text.replace(/e/g,"X")} `)
}

TextParser("Javascript is an excellent programming language.")