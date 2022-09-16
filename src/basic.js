import { LightningElement } from 'lwc';

    const option1 = 0.1;
    const option2 = 0.08;
    const option3 = 0.05;
    const option4 = 0.02;

export default class RadioGroupBasic extends LightningElement {
    value = '';

    get IncumbentOptions() {
        return [
            { label: 'Yes', value: option1 },
            { label: 'No', value: option2 },
        ];
    }

    get CustomerRelationshipOptions() {
        return [
            { label: 'Have identified the key decision maker(s) for the program and understand their perceptions of the program requirements, us, and our competition', value: option1 },
            { label: 'Have identified the key decision maker(s) for the program and understand some of their perceptions', value: option2 },
            { label: 'Have identified the key decision maker(s) for the program', value: option3 },
            { label: 'Have identified the key decision maker(s) for the program and understand some of their perceptions', value: option4 },
        ];
    }






    
}
