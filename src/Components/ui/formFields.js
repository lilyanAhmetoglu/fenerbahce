import React from 'react';

const FormFields = ({formdata, id, change}) => {
    const renderTemplate = () => {
        let formTemplate = null;
        switch (formdata.element) {
            case ('input'):
                formTemplate=(
                    <div>
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event)=>change({event, id}) }
                        />
                    </div>
                )
                break;
        
            default:
                formTemplate=null;
        }
    return formTemplate;

    }
    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormFields;