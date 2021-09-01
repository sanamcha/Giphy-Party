console.log("Let's get this party started!");

const $div = $("#gif");
const $input = $("#search");


$("form").on("submit", async function(e){
    e.preventDefault();
    let inputItem = $input.val();
    $input.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: { q:inputItem, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" }
     });
   
    giphyParty(response.data);  
    
});

function giphyParty(res){
    let results = res.data.length;
    if (results) {
        let random = Math.floor(Math.random() * results);
        let $newDiv = $("<div>");
        let $newImg = $("<img>", {src: res.data[random].images.original.url});
        $newDiv.append($newImg);
        $div.append($newDiv);
    }
}

$("#delete-gif").on("click", function() {
    $div.empty();
  });
