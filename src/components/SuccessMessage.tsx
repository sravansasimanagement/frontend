"use client";

import { Typography, Image } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

import Logo from "../assets/rakbanklogos.png";

const SuccessMessage = () => (
  <div style={{ textAlign: "center", padding: "50px" }}>
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Image
        data-testid="logoImage"
        src={Logo}
        width={240}
        height={180}
        preview={false}
      />
    </div>

    <Typography.Title
      level={3}
      style={{ fontWeight: "bold", color: "#52c41a", fontSize: 28 }}
    >
      Successfully Submitted!
    </Typography.Title>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
      }}
    >
      <CheckCircleTwoTone
        data-testid="succesIcon"
        twoToneColor={["#52c41a", "#FFFF"]}
        style={{ fontSize: "128px" }}
      />
    </div>

    <Typography.Text style={{ color: "#52c41a", fontSize: 12 }}>
      Our representative will get in touch with you shortly.
    </Typography.Text>
  </div>
);

export default SuccessMessage;
