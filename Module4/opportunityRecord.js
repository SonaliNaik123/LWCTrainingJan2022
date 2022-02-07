import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Opportunity.Name';
import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import StageName from '@salesforce/schema/Opportunity.StageName';
import AccountId from '@salesforce/schema/Opportunity.AccountId';

export default class OpportunityRecord extends LightningElement {
    @api objectApiName;
    @api recordId;
    fields = [Name,CloseDate,StageName,AccountId];
showFields=false;
    showAllFields(){
        this.showFields = true;

    }
    hideAllFields(){
        this.showFields = false;

    } 
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    resetFormAction() {
        const inputfields = this.template.querySelector('lightning-input-field');
        if(inputfields)
        {
            inputfields.forEach(fields => {
                fields.reset();
                
            });
        }
        
     }
}
