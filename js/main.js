let home = document.getElementById("home");
let blog = document.getElementById("blog");
let about = document.getElementById("about");
let aboutme = document.getElementById("read");
let brand = document.getElementById("logo");

brand.onclick = ( () => window.open("index.html", "_self") );

    home.onclick = ( () => window.open( "index.html", "_self") );



    blog.onclick = ( () => window.open( "blog.html", "_self") );


    about.onclick = ( () => window.open( "about.html", "_self") );


    if( aboutme )aboutme.onclick = ( () => window.open("about.html", "_self") );



