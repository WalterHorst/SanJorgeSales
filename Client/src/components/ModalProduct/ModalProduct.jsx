import React, { useState } from "react";
import { Modal, Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ModalProduct.css";

const ModalForm = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Agregar Producto"
      okText="Agregar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Nombre del Producto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el nombre del producto",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Precio del Producto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el precio del producto",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Descripción del Producto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese la descripción del producto",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        
        <Form.Item
          name="brand"
          label="marca del Producto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese la marca del producto",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        
        <Form.Item
          name="category"
          label="categoria del Producto"
          rules={[
            {
              required: true,
              message: "Por favor ingrese la categoria del producto",
            },
          ]}
        >
            <Input.TextArea />
        </Form.Item>


        <Form.Item
          name="image"
          label="Imagen del Producto"
          // valuePropName="fileList"
          // getValueFromEvent={(e) =>
          //   e.fileList.map((file) => ({
          //     ...file,
          //     preview: URL.createObjectURL(file.originFileObj),
          //   }))
          // }
        >
           <Input.TextArea />

          {/* <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Subir Imagen</Button>
          </Upload> */}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
