
// console.log("forNotes Loaded!");
function note(comment){
    let type = typeof comment;
    let par = "\n notes: \n";
    if(typeof comment == "string"){
        par += `\t→ ${comment} \n`;
    } else if (typeof comment == "object" && comment.length > 0){
        comment.forEach(line => {
            par += `\t→ ${line} \n`; 
        });
    }
    par += `\n`;
    console.log(par);
}