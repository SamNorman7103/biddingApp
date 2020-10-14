const bidsContainer = document.querySelector("[data-bids]");
const placeBidButton1 = document.querySelector("[data-place-bid-button1]");
const placeBidInput1 = document.querySelector("[data-new-bid-input1]");
const placeBidButton2 = document.querySelector("[data-place-bid-button2]");
const placeBidInput2 = document.querySelector("[data-new-bid-input2]");


const bidsArray = [];

placeBidButton1.addEventListener("click", (e) => {
  e.preventDefault(); //prevents reload of page
  const bidValue = placeBidInput1.value;
  if (bidValue == null || bidValue == "") {
    console.log("empty");
    return;
  } else {
    bidsArray.push({User1: bidValue});
    placeBidInput1.value = null;
  }
  renderAndStore();
});

placeBidButton2.addEventListener("click", (e) => {
    e.preventDefault(); //prevents reload of page
    const bidValue = placeBidInput2.value;
    if (bidValue == null || bidValue == "") {
      console.log("empty");
      return;
    } else {
        bidsArray.push({User2: bidValue });
        placeBidInput2.value = null;
    }
    renderAndStore();
  }); 

function renderAndStore(){
    renderBids(bidsArray);
    storeToLocal(bidsArray);
}

function retrieveBids(){
    const storedBids = JSON.parse(localStorage.getItem("bids"));
    return storedBids;
}

function renderBids(bids) {
    clearElement(bidsContainer);
    bids.forEach((bid) => {
      const listElement = document.createElement("li");
      for (const [key, value] of Object.entries(bid)) {
        listElement.innerText = (`${key}: ${value}`);
      }
      bidsContainer.appendChild(listElement);
    });
  }

  function storeToLocal(arr){
    localStorage.setItem("bids", JSON.stringify(arr));
}
  
  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }