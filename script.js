const search = document.getElementById("search");
const searchInput = document.getElementById("search-input");




const movies = [
    {
        title: 'Uri: The Surgical Strike',
        image: './uri.jpg',
        category: 'Action',
        desc: 'How\'s the josh?'
    },{
        title: 'Kesari',
        image: './kasari.jpg',
        category: 'Action',
        desc: 'The Battle of Saragarhi'
    },{
        title: 'Laal Kaptaan',
        image: './laalkaptan.jpg',
        category: 'Action',
        desc: 'Portraying a Naga Sadhu'
    },{
        title: 'War',
        image: './war.jpg',
        category: 'Action',
        desc: 'A RAW agent'
    },{
        title: 'Sahoo',
        image: './sahoo.jpg',
        category: 'Action',
        desc: 'An active underworld headed by the Roy family.'
    },{
        title: 'Gulabo Sitabo', 
        image: './gulabo.jpg',
        category: 'Drama',
        desc: 'Comedy'
    },{
        title:'Angrezi Medium',
        image: './angregi.jpg',
        category: 'Drama',
        desc: 'Comedy'
    },{
        title:'Dil Bechara',
        image: './dilbechara.jpg',
        category: 'Drama',
        desc:'Romance, Drama'
    },{
        title: 'Yaara',
        image: './yaara.jpg',
        category: 'Drama',
        desc:'Crime, Drama'
    },{
        title: 'Good Newwz', 
        image: './newwz.jpg',
        category: 'Drama',
        desc: 'Comedy, Drama'
    },{
        title: 'Mr. India',
        image: './mrindia.jpg',
        category: 'Sci-Fi',
        desc: 'Mogambo Khush hua'
    },{
        title: 'PK',
        image: './pk.jpg',
        category: 'Sci-Fi',
        desc: 'Twist, Comedy and An Alien.'
    },{
        title: 'Koi... Mil Gaya',
        image: './koimilgaya.jpg',
        category: 'Sci-Fi',
        desc:'Comedy and An Alien'
    },{
        title: 'Robot',
        image: './robot.jpg',
        category: 'Sci-Fi',
        desc: 'Advance AI Technology'
    },{
        title:'Action Replayy',
        image: './actionreply.jpg',
        category: 'Sci-Fi',
        desc: 'Comedy'
    }];

    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      const x = document.getElementsByClassName("mySlides");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }
    
    

async function showAllcard(){
    for(i=0; i <= movies.length; i++){
        try{
            const title =  movies[i].title;
            const desc =  movies[i].desc;
            const image = movies[i].image;
            const category = movies[i].category;
            await moviePack(title, desc, image, i, category);
     } 
        catch(e) {
            console.log(e);
        }   
    }
}
showAllcard();
function moviePack(title, desc , image, i){
    var htmlShow;
        htmlShow = `<div class="card" id="moviePic">
                      <img src="./images/${image}" alt="image" id="myImage">
                     <div class="pack">
                      <div class="title">
                          <h3>${title}</h3>
                          <h5>${desc}</h5>
                      </div>
                     </div>
                    </div>`;

            document.getElementById('package-'+ i).innerHTML = htmlShow; 
}

     selectionBar.addEventListener("click", e => {
                  e.preventDefault();
                  selectMovie();
             });
     search.addEventListener('submit', e => {
                 e.preventDefault();
                 searchMovie();
   });

 async function selectMovie(){
    const results = await movies.filter(myfunction);
        function myfunction(el)
        { 
            const select = document.getElementById("selectionBar").value.toUpperCase();
            const category = el.category.toUpperCase();
                return category == select;
        }
    for(i=0; i <= results.length; i++)
    try{ 
        await selectMovieShow(results[i].title, results[i].desc, results[i].image, i);
    }catch(e){
        console.log(e);
    }
  await  search.addEventListener('submit', e => {
        e.preventDefault();
        searchMovie();
});
}
  function selectMovieShow(title, desc, image, i){
          let htmlShow;
          htmlShow = `
                        <div class="card" id="moviePic">
                            <img src="./images/${image}" alt="image" id="myImage">
                            <div class="pack">
                                  <div class="title">
                                      <h3>${title}</h3>
                                      <h5>${desc}</h5>
                                  </div>
                            </div>
                        </div>`;
            document.getElementById('resultDiv-'+i).innerHTML = htmlShow; 
}

async function searchMovie() { 
    const movie = searchInput.value.toUpperCase();
    searchInput.value = '';
   try{  
        const results = await movies.find(myfunction);
        function myfunction(el)
        {
            const title = el.title.toUpperCase();
            return title == `${movie}`;             
        }
        searchMovieShow(results.title, results.desc, results.image, results.category);
    }
      catch(error) {
        console.log(error);
    }
  }
 
function searchMovieShow(title, desc, image){
          let htmlShow;
          htmlShow = `<div class="box" id="resultDiv-0">
                        <div class="card" id="moviePic">
                            <img src="./images/${image}" alt="image" id="myImage">
                            <div class="pack">
                                  <div class="title">
                                      <h3>${title}</h3>
                                      <h5>${desc}</h5>
                                  </div>
                            </div>
                        </div>
                      </div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div calss="box"></div> `;
            document.getElementById('searchDiv').innerHTML = htmlShow;
}