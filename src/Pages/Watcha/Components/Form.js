import React from "react";
import FormLayout from "./FormLayout";
import Button from "./Button";
import Input from "./Input";
import "./Form.scss";

export default function Form({ type, title, inputData }) {
  return (
    <FormLayout>
      <div className="form">
        <h2>{title}</h2>
        <div>
          {inputData.map((input, idx) => (
            <Input key={idx} type={input.type} text={input.text} />
          ))}
        </div>
        <Button value={title} />
        {type === "signUp" && (
          <p className="isAlreadyLogin">
            이미 가입하셨나요? <span className="linkBtn">로그인</span>
          </p>
        )}
      </div>
    </FormLayout>
  );
}
