var fs = require('fs');
var pdf = require('html-pdf');
var dataObj = require('./pdfData.json');

//https://github.com/satyendra-singh-talentica/node-pdf.git
//Generate HTML from JSON - approach 1
var html = `
<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
    <h3>Sample Data</h3>
    <table border="2">
        <tr>
            <th>Col 1 - header</th>
            <th>Col 2 - header</th>
        </tr>
        <tr>
            <td>Company-Team</td>
            <td id='company-team-name'>Company is ${dataObj.INFO.company}-${dataObj.INFO.team}</td>
        </tr>
        <tr>
            <td>Members</td>
            <td id='member-count'>${dataObj.INFO.members}</td>
        </tr>
        <tr>
            <td>Time to finish</td>
            <td id='time-offset'>${dataObj.INFO.offset}</td>
        </tr>
    </table>
</body>
</html>
`

//Generate PDF from HTML
//var html = fs.readFileSync('./card.html', 'utf8');
var options = { format: 'Letter' };
 
pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});