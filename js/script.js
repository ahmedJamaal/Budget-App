function getAllData() {
  var data;
  var dateLabel='.data-row';
  var request = new XMLHttpRequest();
  request.open("GET", "data.json");
  request.onreadystatechange = function() {
    var div = document.getElementById("pets");
    if (this.readyState == this.DONE && this.status == 200) {
      if (this.responseText != null) {
          data = this.responseText;
          data =JSON.parse(data);
          ///console.log(data);
          var length = data.BudgetData.length;
        ///  var temp=data.BudgetData[1];
          ///console.log(temp);
          ///console.log(temp.id);
          var id,description,value,type,time,date,html;



          for(var x=0; x<length; x++  )
          {
            id=data.BudgetData[x].id;
            description=data.BudgetData[x].description;
            value=data.BudgetData[x].value;
            type=data.BudgetData[x].type;
            time=data.BudgetData[x].time;
            date=data.BudgetData[x].date;
            html=`<tr> <td>${id}</td> <td>${description}</td> <td>${value}</td> <td>${type}</td> <td>${time}</td> <td>${date}</td> <td><a href="${onclick}"><i class='fa fa-edit'></i></a></td> <td><a href="#"><i class='fas fa-trash-alt'></i></a></td> </tr>`;
            document.querySelector(dateLabel).insertAdjacentHTML('beforeend',html);
             //console.log(table);///.BudgetData[1];

          }

      }else {
            console.log("Error: no data");
          }
        }

      };

      request.send();
//return object;
//console.log(object);
    }
var temp =getAllData();
console.log(temp);

function onclick () {
  console.log("edit");
}
