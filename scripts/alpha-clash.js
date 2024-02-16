function play (){
    // console.log('play start now');
    // hide the home screen. to hide the screen add the class hidden to the home section
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // show the play ground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    // console.log(playGround.classList);
}