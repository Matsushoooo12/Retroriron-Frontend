import React from 'react'
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, errors, getValues, reset, handleSubmit } = useForm();
    return (
        <ContactFormContainer>

        </ContactFormContainer>
    )
}

export default ContactForm

const ContactFormContainer = styled.form`
`