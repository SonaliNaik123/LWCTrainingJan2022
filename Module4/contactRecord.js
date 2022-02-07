import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Contact.Name';
import Account from '@salesforce/schema/Contact.AccountId';

export default class ContactRecord extends LightningElement {
    @api objectApiName;
    @api recordId;
    fields = [Name,Account];
showFields=false;
    showAllFields(){
        this.showFields = true;

    }
    hideAllFields(){
        this.showFields = false;

    } 
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    resetFormAction(event) {
        this.template.querySelectorAll('lightning-input').forEach(element => { if(element.type === 'checkbox' || element.type === 'checkbox-button'){ element.checked = false; }else{ element.value = null; } });
     }
}
