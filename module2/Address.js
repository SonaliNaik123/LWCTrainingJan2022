import { LightningElement } from 'lwc';

export default class Assignment2 extends LightningElement {
    currAdd1;
    currAdd2;
    currLand;
    currZip;
    checkBoxValue;

    

    currentAdd1(event){
        this.currAdd1=event.target.value;
    }

    currentAdd2(event){
        this.currAdd2= event.target.value;
    }

    currentLandmark(event){
        this.currLand= event.target.value;
    }

    currentZipCode(event){
        this.currZip= event.target.value;
    }

    checkBox(event){
        this.checkBoxValue = event.target.checked;
    }


}
    
