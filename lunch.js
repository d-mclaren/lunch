// Client ID: 0te5ZTxwg8jGvkA72sfO3w
// API Key: SzfRO1iqhBw5r1GT-Huq3rEa2hpKFyyOzblGOHBcT7nzJUGp1_BhyDzrZIeu4YnAqCtFufJ3K486yLqPCIQkF9I1Xs-GE1eS08GCJb4QD8kGX1BZupv68sRCRljLXXYx

$('document').ready(function(){        
   var request = new XMLHttpRequest();   
   
   request.open("GET", "https://api.yelp.com/v3/businesses/search&location=nyc", true);
   
   request.setRequestHeader("Bearer", "SzfRO1iqhBw5r1GT-Huq3rEa2hpKFyyOzblGOHBcT7nzJUGp1_BhyDzrZIeu4YnAqCtFufJ3K486yLqPCIQkF9I1Xs-GE1eS08GCJb4QD8kGX1BZupv68sRCRljLXXYx");

   request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
   };

   request.send();
});