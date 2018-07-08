function Modal(eleId,buttonId){
    this.se = this;
    this.ele = eleId;
    if(buttonId == null){
        console.error("No button id assigned in constructor falling back to default modal-button id");
    }else{
        this.modalOpenButton = buttonId;
    }
    this.open();
    this.hidden();
    this.borderClick();
}
Modal.prototype.ele = "";
Modal.prototype.modalOpenButton = "modal-button";
Modal.prototype.hiddenEle = false;
Modal.prototype.open = function(){
    let element = document.getElementById(this.ele);
    let t = this;
    if(document.getElementById(this.modalOpenButton) == null){
        return console.error("Please define a button with id modal-button if custom button not defined in consutrctor");
    }
    document.getElementById(this.modalOpenButton).addEventListener("click",function(e){

        if(t.hiddenEle == false){
            element.style.display = "";
            t.hiddenEle = true;

        }else{
            element.style.display = "none";
            t.hiddenEle = false;
        }
    });
}
Modal.prototype.borderClick = function(){
    document.getElementById(this.ele).addEventListener("click",function(event){
        if(event.offsetX <= parseInt(this.style.borderLeftWidth) || event.offsetX >= parseInt(this.style.borderRightWidth)||event.offsetY <= parseInt(this.style.borderTopWidth) || event.offsetY >= parseInt(this.style.borderBottomWidth)){
            console.log("border left or right clicked");
        }
    });


}
Modal.prototype.hidden = function(){
    if(document.getElementById(this.ele) == null){
        return console.error("Please define a modal wrapper id in constructor");
    }else{
        let element = document.getElementById(this.ele);
        let windowH = window.innerHeight;
        console.log("Window Height is "+ windowH);
        let windowW = window.innerWidth;
        console.log("Window Width is "+ windowW);
        let borderSize = windowW * 0.10;
        element.style.display = "none";
        element.style.boxSizing = "border-box";
        element.style.width = windowW+"px";
        element.style.position = "fixed";
        element.style.height = windowH+"px";
        element.style.backgroundColor = "white";
        element.style.border = borderSize+"px solid black";

    }

}

window.onload = function(){
    var modal = new Modal("mod","mod-button");
}




