var niceArray = [
    "You're doing great, buddy. Keep it up.",
    "Killing it! You are absolutely killing it.",
    "Winning!",
    "You are made from the same particles as the sun."
   ];

   function generate() {
     return Math.floor(Math.random() * niceArray.length);
   }

   console.log(generate());

  
   $("button").on('click',
      function(){
        $('#result h1').html(niceArray[generate()]);
      })
