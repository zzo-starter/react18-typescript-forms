# react18-typescript-forms
## setup environment

1. install node
2. intall VS Code
3. install extensions - Prettier

## create app

Via create-react-app (CRA) OR Vite (faster)

1. $> npm create vite@4.1.0 | @latest

   > > react-app
   > > React
   > > Typescript

2. $> cd react-app
3. $> npm install
4. $> npm run dev

## install Boostrap

1. npm i bootstrap@5.2.3

## form-component

- A) create form component

- B) handling form submission

- C) accessing form fields

- D) controlled components

## E React-Hook-Form Library

Use reactHookForm w built in useful functions

- 1. $> npm i react-hook-form@7.43
- 2. inspect REGISTER function properties/ events/ methods
- 3. use properties/ events on form fields
- 4. dont need use STATE HOOK to create the form object
- 5. dont need to handle submit form w custom handler; use REGISTER handleSubmit()
- 6. create function to handle form submission data

## F Form Validation using RHF

- 1. add field validation rules to each form field; validates before submitting
- 2. use FORMSTATE method from REACT HOOK FORM to display any field errors
- 3. inspect error object
- 4. destructure formState property since we will repeatedly use in our fields to display our error messages
- 5. add error messages to fields

## G Schema -Based Form Validation

Several existing libraries ~ Joi, Yup, Zod

- 1. $> npm i zod@3.20.6
- 2. @component import > import {zod} from "zod";
- 3. implement schema
- 4. now we integrate react-hook-forms w validation libraries (Joi, Yup, Zod)$>npm i @hookform/resolvers@2.9.11
- 5. @component import > import {zodResolver } from "@hookform/resolvers/zod";
- 6. implement resolver
- 7. update field error logic> errors.name && ( <p className="text-danger"> {errors.name.message}</p> )
- 8. can customize error messages

## H Disable Form Submit Button

issue is that if disabled; does not show errors???

- 1. @formState, we can use property to check if form is valid
- 2. @button use property to set/unset disabled
