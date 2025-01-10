const $ = document

const modalContent = $.querySelector('.modal-content')
const placeInput = $.querySelector('.place-input')
const placeForm = $.querySelector('.place-form')
const placeLabel = $.querySelector('.place-label')
const placeSecondLabel = $.querySelector('.place-second-label')

let playersPlaces = {}

function hiding(playersName) {
    // ... (other code, if needed)
  
    // Assuming placeForm is a form element
    placeForm.addEventListener('submit', (e) => {
      e.preventDefault();
    })
  
      // Assuming modalChanger updates a modal based on name and count
      let playerOnePromise = new Promise((resolve, reject) => {
        placeInput.value = ''
      modalChanger(playersName[0], 20); // Initial value for countdown
  
        let i = 20; // Initialize countdown timer
        let interval = setInterval(() => {
          i--;
          modalChanger(playersName[0], i); // Update modal with countdown
  
          if (i === 0) {
            if (!isNaN(placeInput.value)) {
              if (placeInput.value > 0 && placeInput.value <= 18) {
                playersPlaces.player1 = placeInput.value
                placeInput.value = ''
                clearInterval(interval);
                resolve(playerTwoPromise)
              } else {
                playersPlaces.player1 = Math.floor(Math.random() * 10)
                placeInput.value = ''
                clearInterval(interval);
                resolve(playerTwoPromise)
              }
            } else {
                playersPlaces.player1 = Math.floor(Math.random() * 10)
                placeInput.value = ''
                clearInterval(interval);
                resolve(playerTwoPromise)
            }
          }
        }, 1000);
      });
      let playerTwoPromise = () => { 
        placeInput.value = ''
        return new Promise((resolve, reject) => {
        modalChanger(playersName[1], 20); // Initial value for countdown
    
        let i = 20; // Initialize countdown timer
          let interval = setInterval(() => {
            i--;
            modalChanger(playersName[1], i); // Update modal with countdown
            
            if (i === 0) {
              if (!isNaN(placeInput.value)) {
                if (placeInput.value > 0 && placeInput.value <= 18) {
                  playersPlaces.player2 = placeInput.value
                  placeInput.value = ''
                  clearInterval(interval);
                  resolve(playerThreePromise)
                }else {
                  playersPlaces.player2 = Math.floor(Math.random() * 10)
                  placeInput.value = ''
                  clearInterval(interval);
                  resolve(playerThreePromise)
                }
              } else {
                  playersPlaces.player2 = Math.floor(Math.random() * 10)
                  placeInput.value = ''
                  clearInterval(interval);
                  resolve(playerThreePromise)
                }
            }
          }, 1000);
        });
      }
        let playerThreePromise = () => { 
          placeInput.value = ''
          return new Promise((resolve, reject) => {
            modalChanger(playersName[2], 20); // Initial value for countdown
            
            let i = 20; // Initialize countdown timer
              let interval = setInterval(() => {
                i--;
                modalChanger(playersName[2], i); // Update modal with countdown
        
                if (i === 0) {
                  if (!isNaN(placeInput.value)) {
                    if (placeInput.value > 0 && placeInput.value <= 18) {
                      playersPlaces.player3 = placeInput.value
                      placeInput.value = ''
                      clearInterval(interval);
                      resolve(playerFourPromise)
                    }else {
                      playersPlaces.player3 = Math.floor(Math.random() * 10)
                      placeInput.value = ''
                      clearInterval(interval);
                      resolve(playerFourPromise)
                  }
                  } else {
                      playersPlaces.player3 = Math.floor(Math.random() * 10)
                      placeInput.value = ''
                      clearInterval(interval);
                      resolve(playerFourPromise)
                  }
                }
              }, 1000);
            });
          }
            let playerFourPromise = () => { 
              placeInput.value = ''
              return new Promise((resolve, reject) => {
              modalChanger(playersName[3], 20); // Initial value for countdown
              
                  let i = 20; // Initialize countdown timer
                  let interval = setInterval(() => {
                    i--;
                    modalChanger(playersName[3], i); // Update modal with countdown
            
                    if (i === 0) {
                      if (!isNaN(placeInput.value)) {
                        if (placeInput.value > 0 && placeInput.value <= 18) {
                          playersPlaces.player4 = placeInput.value
                          placeInput.value = ''
                          clearInterval(interval);
                          localStorage.setItem('playersPalace',JSON.stringify(playersPlaces))
                          location.pathname = "/Dynamite/turnsloop.html"
                        } else {
                          playersPlaces.player4 = Math.floor(Math.random() * 10)
                          placeInput.value = ''
                          clearInterval(interval);
                          localStorage.setItem('playersPalace',JSON.stringify(playersPlaces))
                          location.pathname = "/Dynamite/turnsloop.html"
                        }
                      } else {
                        playersPlaces.player4 = Math.floor(Math.random() * 10)
                          placeInput.value = ''
                          clearInterval(interval);
                          playersPlaces
                          localStorage.setItem('playersPalace',JSON.stringify(playersPlaces))
                          location.pathname = "/Dynamite/turnsloop.html"
                        }
                    }
                  }, 1000);
                });
              }
    
    playerOnePromise
    .then(value => value())
    .then(value => value())
    .then(value => value())
    .then(value => value())
    function modalChanger (player,second) {
      placeLabel.innerHTML = `${player} choose your place`
      placeSecondLabel.innerHTML = `You have ${second} seconds to choose your place`
    }
  };

hiding(JSON.parse(localStorage.getItem('playersList')))