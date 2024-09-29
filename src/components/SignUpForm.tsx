"use client";

import React from "react";
import { Form, Input, Button, Checkbox, Typography, Image } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

import GoogleIcon from "../assets/googleicon.png";
import Logo from "../assets/rakbanklogos.png";

interface SignUpFormProps {
  onSubmit: any;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      data-testid="signupFormMain"
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      initialValues={{ termsAccepted: false }}
    >
      <div style={{ textAlign: "center", marginBottom: "-20px" }}>
        <Image src={Logo} width={220} height={220} preview={false} />
      </div>
      <Typography.Title level={3} data-testid="createAccountText">
        Create Account
      </Typography.Title>

      {/* Full Name */}
      <Form.Item
        name="name"
        rules={[
          { required: true, message: "Please enter your full name!" },
          { max: 50, message: "Full Name cannot exceed 50 characters" },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Full Name"
          size="large"
          className="custom-input-text"
          data-testid="fullNameInput"
        />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "The input is not valid email!" },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder="Email address"
          size="large"
          className="custom-input-text"
          data-testid="emailInput"
        />
      </Form.Item>

      {/* Password */}
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 8, message: "Password must be at least 8 characters!" },
          {
            pattern: /^[a-zA-Z0-9]+$/,
            message: "Password can only contain letters and numbers!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          size="large"
          className="custom-input-text"
          data-testid="passwordInput"
        />
      </Form.Item>

      {/* Terms and Conditions */}
      <Form.Item
        name="termsAccepted"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error("You must agree to the terms and privacy")
                  ),
          },
        ]}
      >
        <Checkbox data-testid="termscheckbox" className="custom-input-text">
          <span style={{ color: "gray" }}>
            {/* eslint-disable-next-line*/}I agree with{" "}
            <a href="#" style={{ color: "red" }}>
              Terms
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "red" }}>
              Privacy
            </a>
          </span>
        </Checkbox>
      </Form.Item>

      {/* Sign Up Button */}
      <Form.Item>
        <Button
          data-testid="signupbutton"
          type="primary"
          htmlType="submit"
          block
          size="large"
          style={{ backgroundColor: "red", borderColor: "red" }}
          className="custom-input-text"
        >
          SIGN UP
        </Button>
      </Form.Item>

      {/* Sign Up With Google Button */}
      <Form.Item>
        <Button
          type="primary"
          block
          size="large"
          style={{
            backgroundColor: "white",
            borderColor: "gray",
            WebkitTextFillColor: "gray",
          }}
          className="custom-input-text"
        >
          <div style={{ textAlign: "center", marginBottom: "5px" }}>
            <Image src={GoogleIcon} width={16} height={16} preview={false} />
          </div>
          Sign Up With Google
        </Button>
      </Form.Item>

      {/* Already have an account? Login */}
      <span style={{ color: "gray" }} className="custom-input-text">
        {/* eslint-disable-next-line*/}
        Already have an account?{" "}
        <a href="#" style={{ color: "red" }}>
          Log In
        </a>
      </span>
    </Form>
  );
};

export default SignUpForm;
