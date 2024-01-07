const result = document.querySelector('.result');
const form = document.querySelector('#search_box_form');
const inpputText = document.querySelector('#value');
const seeMoreBtn = document.querySelector('#see_more');

let key = '36emLjgET-RfIqVAbPKt_uAhrKYHgS4l4UcSk8Pwsiw';
let page ;
let inputValue ;


let imageApi = async () => {
    inputValue = inpputText.value;
    let apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${key}&per_page=12`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    let imgResults = data.results;
    imgResults.map((i)=>{
        let imgSrc = i.urls.small;
        let link = i.links.html;
        result.innerHTML += 
        `<div class="col-12 col-md-6 col-lg-4 p-2 overflow-hidden">
            <a href='${link}' target='_blank'>
                <img src="${imgSrc}" alt="">
            </a>
        </div>`
    })
    seeMoreBtn.classList.remove('d-none')
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    result.innerHTML = '';
    imageApi();
})

seeMoreBtn.addEventListener('click',()=>{
    page ++;
    imageApi();
})