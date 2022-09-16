import { LightningElement } from 'lwc';

export default class RadioGroupBasic extends LightningElement {
    value = '';

    get IncumbentOptions() {
        return [
            { label: 'Yes', value: 'option1' },
            { label: 'No', value: 'option2' },
        ];
    }

    get CustomerRelationshipOptions() {
        return [
            { label: 'Have identified the key decision maker(s) for the program and understand their perceptions of the program requirements, us, and our competition', value: 'option3' },
            { label: 'Have identified the key decision maker(s) for the program and understand some of their perceptions', value: 'option4' },
            { label: 'Have identified the key decision maker(s) for the program', value: 'option5' },
            { label: 'Do not know the key decision maker(s) for the program', value: 'option6' },
        ];
    }






    
}
