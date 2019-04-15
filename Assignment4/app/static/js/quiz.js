
var Ans = function()
{
  var ansq1=$('input[name=quest_647]:checked').val()
  var ansq2=$('input[name=quest_649]:checked').val()
  var ansq3=$('input[name=quest_650]:checked').val()
  var ansq4=$('input[name=quest_639]:checked').val()
  // console.log( ansq1)
  // console.log( ansq2)
  // console.log( ansq3)
  // console.log( ansq4)
  $.ajax({
    url: 'http://localhost:5000/addanswers',
    method: 'POST',
    data: {
      q1 : JSON.stringify(ansq1),
      q2 : JSON.stringify(ansq4),
      q3 : JSON.stringify(ansq3),
      q4 : JSON.stringify(ansq4)
    },
    success: function(response)
    {
      console.log(response)
    },
    error: function(response)
    {
      console.log(response);
      alert("Error incurred");
    }
  });
}
