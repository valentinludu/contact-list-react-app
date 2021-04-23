import Select from "react-select";

const SelectField = ({ name, options, field, form, disabled, ...selectProps }) => {
    const customStyles = {
        control: () => ({
            display: "flex",
            padding: "11px 20px",
            border: "1px solid #c4c4c4",
            borderRadius: "24px",
            marginBottom: "32px",
        }),
        indicatorSeparator: () => ({
            display: "none"         
        }),
        indicatorsContainer: () => ({
            padding: "0"
        }),
        dropdownIndicator: () => ({
            padding:"0"
        })
    };

    return (
        <Select
            styles={customStyles}
            options={options}
            name={field.name}
            value={options ? options.find(option => option.value === field.value.value) : ''}
            onChange={option => form.setFieldValue(field.name, option)}
            onBlur={field.onBlur}
            isSearchable={false}
            isDisabled={disabled}
            {...selectProps}
        />
    )
};

export default SelectField;