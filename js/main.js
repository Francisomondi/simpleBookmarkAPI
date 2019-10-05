myForm = document.getElementById('myForm');






myForm.addEventListener( 'submit', (e) =>{
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteName').value;

     e.preventDefault();
     bookmark = {
         name:  siteName,
         url: siteUrl
     }
    console.log(bookmark);
}
);
