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

    get CustomerRequirementsOptions() {
        return [
            { label: 'Have a good understanding based on reliable sources', value: 'option3' },
            { label: 'Thoroughly understand, documented, and validated', value: 'option4' },
            { label: 'Have some understanding based on limited resources', value: 'option5' },
            { label: 'Have little or no idea', value: 'option6' },
        ];
    }

    get ResourceAvailabilityOptions() {
        return [
            { label: 'Have proven capture manager and “A” team available and committed', value: 'option3' },
            { label: 'Have a proven capture manager and some “A” team members available and committed', value: 'option4' },
            { label: 'Have team identified and available', value: 'option5' },
            { label: 'Have not identified team and committed to their availability', value: 'option6' },
        ];
    }

    get PastPerformanceOptions() {
        return [
            { label: 'At least two directly applicable, recent contracts with a positive customer write-up', value: 'option3' },
            { label: 'At least two directly applicable current or recently contracts with a positive customer write-up', value: 'option4' },
            { label: 'Closely aligned current or recently contracts with a positive customer write-up', value: 'option5' },
            { label: 'No closely aligned or directly applicable contracts', value: 'option6' },
        ];
    }

    get KnowledgeofCompetitionOptions() {
        return [
            { label: 'Thoroughly understand who competitors are', value: 'option3' },
            { label: 'Have good understanding of competitors based on reliable sources', value: 'option4' },
            { label: 'Know who competitors generically ought to be', value: 'option5' },
            { label: 'Do not know many of our competitors', value: 'option6' },
        ];
    }

    get TimingOptions() {
        return [
            { label: 'Have sufficient time to complete all capture process steps and executed the pursuit before the release of the Draft RFP', value: 'option3' },
            { label: 'Able to complete all capture process steps if effort is prioritized and executed the pursuit before the release of the RFP', value: 'option4' },
            { label: 'Requires an abbreviated capture process and executed pursuit after RFP Release', value: 'option5' },
            { label: 'Have potential for missing the deadline', value: 'option6' },
        ];
    }

    get InfluenceonProcessOptions() {
        return [
            { label: 'Know all decision makers and have strong influence over the decision making process', value: 'option3' },
            { label: 'Know some decision makers and have marginal influence over the decision making process', value: 'option4' },
            { label: 'Have no influence over the decision making process', value: 'option5' },
        ];
    }

    get CompetitiveDiscriminatorsOptions() {
        return [
            { label: 'Discriminators identified with customer and buy-in achieved', value: 'option3' },
            { label: 'Discriminators identified and in the process of vetting them with the customer', value: 'option4' },
            { label: 'Customer does not see any discriminators', value: 'option5' },
        ];
    }

    get TeamingOptions() {
        return [
            { label: 'No teaming is required for this opportunity', value: 'option3' },
            { label: 'Identified gaps in requirements and have selected teaming partners to fill those gaps', value: 'option4' },
            { label: 'Identified gaps in requirements and are still in the teaming partner selection process', value: 'option5' },
            { label: 'Identified gaps in requirements and have found no partners to fill those gaps.', value: 'option6' },
        ];
    }








    
}
