const aboutSchool = '{"Name":"SBOA","Year":"1988","Rank":"1","Students":"1000"}';
const object = JSON.parse(aboutSchool);


document.write("<h2> School Name = "+object.Name+"</h2>") ;
document.write("<h2>Year = "+object.Year+"</h2>");
document.write("<h2>Rank in the city ="+object.Rank+"</h2>");
document.write("<h2>No. of students studying ="+object.Students+"</h2>");
