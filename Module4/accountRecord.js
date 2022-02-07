import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import Type from '@salesforce/schema/Account.Type';
import Rating from '@salesforce/schema/Account.Rating';
export default class account extends LightningElement {
    @api objectApiName;
    @api recordId;
    fields = [Name, AnnualRevenue, Type, Rating];
showFields=false;
    showAllFields(){
        this.showFields = true;

    }
    hideAllFields(){
        this.showFields = false;

    } 
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    resetFormAction(event) {
        this.template.querySelectorAll('lightning-input').forEach(element => { if(element.type === 'checkbox' || element.type === 'checkbox-button'){ element.checked = false; }else{ element.value = null; } });
     }
}
