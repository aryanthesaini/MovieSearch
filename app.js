



const form = document.querySelector('#searchForm');

const makeImages = (shows) => {
    for (let i of shows) {
        if (i.show.image) {

            const cardmain = document.createElement('div');
            console.log(i);
            cardmain.className = "card mainCard text-white";
            cardmain.style = `display: inline-table; background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${i.show.image.medium}); padding:3rem; margin:1%`;
            // console.log(i);
            const newImg = document.createElement('IMG');
            newImg.src = i.show.image.medium;
            newImg.className = "img-fluid";
            newImg.style = ' display: block;margin-left: auto;margin-right: auto;width: 50%; max-width: 200px;max-height:350px'
            cardmain.appendChild(newImg);
            const name = document.createElement('h2');
            name.innerText = i.show.name;
            name.style = 'text-align:center; padding-top:3rem; font-size:3rem'
            cardmain.appendChild(name);
            const summary = document.createElement('p');
            summary.style = 'font-weight:100';
            summary.innerHTML = i.show.summary;
            cardmain.appendChild(summary);
            document.querySelector('.blocks').appendChild(cardmain);
            // document.body.append(newImg);
        }
    }
}

const flushit = document.querySelector('.blocks')
form.addEventListener('submit', async function (e) {

    flushit.innerHTML = null;
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-page",
        start: "top",
        end: "100%",
        scrub: true,
        pin: true,
    },
});

tl.fromTo(".front-page", { clipPath: 'circle(8%)' }, { clipPath: 'circle(75%)', duration: 3 });
tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });






