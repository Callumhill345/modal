function Modal(eleId, buttonId) {
    this.se = this;
    this.ele = eleId;
    //performs a check to see if button id was passed through constructor if not sets default modal-button as id
    if (buttonId == null) {
        console.error("No button id assigned in constructor falling back to default modal-button id");
    } else {
        this.modalOpenButton = buttonId;
    }
    this.open();
    this.hidden();
    this.borderClick();
}
//object global variables
Modal.prototype.borderSize = window.innerWidth * 0.10;
Modal.prototype.ele = "modal-wrapper";
Modal.prototype.modalOpenButton = "modal-button";
Modal.prototype.hiddenEle = false;
Modal.prototype.open = function() {
    let element = document.getElementById(this.ele);
    let t = this;
    if (document.getElementById(this.modalOpenButton) == null) {
        return console.error("Please define a button with id modal-button if custom button not defined in consutrctor");
    }
    document.getElementById(this.modalOpenButton).addEventListener("click", function(e) {
        if (t.hiddenEle == false) {
            let bordS = t.borderSize;
            element.style.display = "";
            element.style.border = bordS + "px solid rgba(0,0,0,0.0)";
            let opacity = 0.0;
            let fadeB = setInterval(function() {
                if (opacity.toFixed(1) == 0.8 || opacity >= 0.74) {
                    t.hiddenEle = true;
                    clearInterval(fadeB);
                } else {
                    element.style.border = bordS + "px solid rgba(0,0,0," + opacity.toFixed(1) + ")";
                    opacity = opacity + 0.02;
                }
            }, 1);
        } else {
            element.style.display = "none";
            t.hiddenEle = false;
        }
    });
}
Modal.prototype.borderClick = function() {
        //refer to global object
        let t = this;
        //add a click event listener to the modal body, this detects which border was clicked and fades out and closes the modal to make the modal more user friendly
        document.getElementById(this.ele).addEventListener("click", function(event) {
            if (event.offsetX <= 0 || event.offsetY <= 0 || event.offsetY >= parseInt(this.clientHeight) || event.offsetX > parseInt(this.clientWidth)) {
                let ob = this;
                let modalOpacity = 0.8;
                let bordS = t.borderSize;
                let hideModal = setInterval(function() {
                    if (modalOpacity == 0) {
                        ob.style.display = "none";
                        t.hiddenEle = false;
                        clearInterval(hideModal);
                    } else {
                        ob.style.border = bordS + "px solid rgba(0,0,0," + modalOpacity.toFixed(2) + ")";
                    }
                    modalOpacity = modalOpacity.toFixed(2) - 0.02;
                }, 1);
            }
        });
    }
    //init the modal on creation of new object
Modal.prototype.hidden = function() {
    //create a reference to the global scope
    let t = this;
    if (document.getElementById(this.ele) == null) {
        return console.error("Please define a modal wrapper id in constructor");
    } else {
        let element = document.getElementById(this.ele);
        let windowH = window.innerHeight;
        let windowW = window.innerWidth;
        //check screen sizes and set global border property based off of size
        if (window.innerWidth <= 768) {
            this.borderSize = windowW * 0.05;
        } else if (window.innerWidth > 769 || window.innerWidth <= 992) {
            this.borderSize = windowW * 0.04;
        } else if (window.innerWidth > 992 || window.innerWidth <= 1200) {
            this.borderSize = windowW * 0.10;
        } else {
            this.borderSize = windowW * 0.30;
        }
        //define modal body element
        let bordS = this.borderSize;
        element.style.display = "none";
        element.style.paddingTop = "2%";
        element.style.paddingLeft = "3%";
        element.style.paddingRight = "3%";
        element.style.boxSizing = "border-box";
        element.style.width = "100%";
        element.style.position = "absolute";
        element.style.top = "0";
        element.style.left = "0";
        element.style.zIndex = "1000";
        element.style.height = windowH + "px";
        element.style.backgroundColor = "white";
        element.style.border = bordS + "px solid rgba(0,0,0,0.8)";
        element.style.backgroundClip = "padding-box";
        element.style.overflowY = "auto";
        //create close button
        let closeB = document.createElement("a");
        let buttonWidthPlacement = bordS + 40;
        let buttonHeightPlacement = bordS + 10;
        closeB.id = "close-button";
        closeB.style.position = "fixed";
        closeB.style.top = parseInt(buttonHeightPlacement) + "px";
        closeB.style.right = parseInt(buttonWidthPlacement) + "px";
        closeB.innerHTML = "&times;";
        closeB.style.fontSize = "30px";
        closeB.style.textAlign = "center";
        closeB.style.fontWeight = "900";
        //add close button functionality
        closeB.onclick = function() {
            element.style.display = "none";
        }
        closeB.onmouseover = function() {
            this.style.cursor = "pointer";
            this.style.color = "orange";
        }
        closeB.onmouseleave = function() {
                this.style.color = "black";
            }
            //append to modal body
        element.appendChild(closeB);
    }
}
