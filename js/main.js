myForm = document.getElementById('myForm');






myForm.addEventListener( 'submit', (e) =>{
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteName').value;

     e.preventDefault();
     bookmark = {
         name:  siteName,
         url: siteUrl
     }
     if(localStorage.getItem('bookmarks')== null){
         
        //initialize array
         const bookmarks = [];
         bookmarks.push(bookmark);
         
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     }
     else{
         //get bookmarks from local storage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //add the bookmark to local storage
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     }
     
      
   
    
}
//fetching bokmarks



);
function fetchbookmarks(){
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
    //get output results
     const bookmarkresults = document.getElementById('bookmarkResults');
     
     //build output
     bookmarkresults.innerHTML = '';
     for(let i=0; i< bookmarks.length; i++){
         let name = bookmarks[i].name;
         let url = bookmarks[i].url;

         bookmarkresults.innerHTML += '<div class="well">' + 
                                        '<h3>' +name +
                                         '</h3>' + 
                                         '</div>'

     }
  }
