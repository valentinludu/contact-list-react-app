import Select from "react-select";
import { useField } from "formik";

const SelectField = ({ name, ...selectProps }) => {
    const [field, , helpers] = useField(name);

    const customStyles = {
        control: () => ({
            display: "flex",
            padding: "15px 20px",
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
            value={field.defaultValue}
            onChange={(v) => helpers.setValue(v)}
            onBlur={() => helpers.setTouched(true)}
            {...selectProps}
        />
    )
};

export default SelectField;