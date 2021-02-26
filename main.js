var sentence = []
var sentence_display = []
function getpara1()
{
    var inputs = [];
    
    for(var i =1; i<=6;i++)
    {
        var student_name=document.getElementById("sentence_"+i).value;
        console.log(student_name);
        sentence.push(student_name);
    }
    console.log(sentence);
    var sentence_length = sentence.length;
    console.log(sentence_length);
    
    for(var m=0; m<sentence_length; m++)
    {
        sentence_display.push("<h2> name-"+sentence[m]+"</h2>");
        console.log(sentence_display);
    }

    var remove_commas = sentence_display.join(", ");
    document.getElementById("para1").innerHTML=remove_commas;
}