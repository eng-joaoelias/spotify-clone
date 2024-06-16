let audioPlayer = document.querySelector("#audioplayer");
var carregado = false;

var playBtn = document.querySelector("#playBtn");
var pauseBtn = document.querySelector("#pauseBtn");
var barraProgresso = document.querySelector(".player__control__progress2");

pauseBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    audioPlayer.pause();

    return false;
});

playBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audioPlayer.play();

    return false;
})

function playSong(file) {
    
    if (carregado == false) {
        audioPlayer.innerHTML = `
        <source src = "`+file+`" type = "audio/mp3"></source>`;
        carregado = true;
    }
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

document.querySelectorAll(".main__col").forEach(item => {
    item.addEventListener("click", event => {
        let imagem = item.getAttribute("data-image");
        let artista = item.getAttribute("data-artist");
        let nomeMusica = item.getAttribute("data-song");
        let caminhoMusica = item.getAttribute("data-file");

        let playerArtistComponent = document.querySelectorAll(".player__artist");

        playerArtistComponent[0].innerHTML = `
        <img src="`+imagem+`"/>
        <h3>`+artista+`<br/><span>`+nomeMusica+`</span></h3>
        `;

        playSong(caminhoMusica);
    });
});

audioPlayer.addEventListener("timeupdate", ()=>{
    setInterval(() => {
        var porcentagemMusica = 100*(audioPlayer.currentTime)/(audioPlayer.duration);
        barraProgresso.style.width = `${porcentagemMusica}`+"%";
    }, 1);
});