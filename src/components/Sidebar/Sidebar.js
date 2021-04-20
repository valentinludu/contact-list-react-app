import { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../Button";
import FieldInput from "../FieldInput";
import * as Yup from "yup";
import FieldError from "../FieldError";
import FieldLabel from "../FieldLabel";
import Select from "react-select";
import styles from "./Sidebar.module.css";
import { ReactComponent as EditIcon } from "./assets/edit_icon.svg";

const Sidebar = ({ contact, categories, disabled, setDisabled, handleDelete, handleFormSubmit }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    if(!contact) return null;
    
    const { firstName, lastName, email, category, id } = contact;
    const handleSelected = (selectedOption) => setSelectedCategory(selectedOption);
    const handleEdit = () => setDisabled(false);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(1,'Too short').max(50, 'Too Long!').required('Required'),
        lastName: Yup.string().min(1,'Too short').max(50, 'Too Long!').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        category: Yup.string(),
      });

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
    }

    return (
        <aside className={styles.sidebar}>
            <Formik
                initialValues={{ firstName: firstName, lastName: lastName, email: email, category: { label: category, value: category } }}
                validationSchema={validationSchema}
                enableReinitialize={true}
            >
            {({ isSubmitting, errors, values, resetForm }) => {
                const handleReset = () => {
                    resetForm();
                    setDisabled(true);
                }
                return (
                    <Form className={styles.form}>
                        <div className={styles.editIconWrapper}>
                            {disabled ? (
                                <button type="button" onClick={handleEdit}><EditIcon /></button>
                            ) : (
                                <>
                                    <button type="button" onClick={handleReset}>CANCEL</button>
                                    <button type="button" onClick={() => handleFormSubmit(id, values.firstName, values.lastName, values.email, values.category)}>SAVE</button>
                                </>
                            )}
                        </div>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <FieldInput name="firstName" error={errors.firstName} disabled={isSubmitting || disabled} />
                        <FieldError error={errors.firstName} />
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <FieldInput name="lastName" error={errors.lastName} disabled={isSubmitting || disabled} />
                        <FieldError error={errors.lastName} />
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <FieldInput name="email" error={errors.email} disabled={isSubmitting || disabled} />
                        <FieldError error={errors.email} />
                        <FieldLabel htmlFor="category">Category</FieldLabel>
                        <Select
                            styles={customStyles}
                            className="fieldSelectContainer"
                            classNamePrefix="fieldSelect"
                            value={selectedCategory || values.category}
                            isSearchable={false}
                            isDisabled={isSubmitting || disabled}
                            onChange={handleSelected}
                            options={categories.map(category => ({ label: category, value: category.toLowerCase()}))}
                        />
                        {!disabled && (
                            <Button buttonBg="#011393" type="button" onClick={() => handleDelete(id)} disabled={isSubmitting}>Delete</Button>
                        )}
                    </Form>
                )}}
            </Formik>
        </aside>
    );
};

export default Sidebar;