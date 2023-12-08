import React from "react";
import { Modal, Form, Input, Button } from "antd";

const EditStoreModal = ({ visible, onCancel, onUpdate, initialData }) => {
  const [form] = Form.useForm();

  const handleUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        onUpdate(values);
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  return (
    <Modal 
      visible={visible}
      title="Editar Tienda"
      okText="Guardar Cambios"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={handleUpdate}
    >
      <Form   form={form} layout="vertical" initialValues={initialData}>
        <Form.Item
          name="coverPhotoUrl"
          label="URL de la Portada"
          rules={[{ required: true, message: "Por favor ingrese la URL de la portada" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="profilePictureUrl"
          label="URL de la Foto de Perfil"
          rules={[{ required: true, message: "Por favor ingrese la URL de la foto de perfil" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sellerName"
          label="Nombre del Vendedor"
          rules={[{ required: true, message: "Por favor ingrese el nombre del vendedor" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="sellerLocation"
          label="Ubicación del Vendedor"
          rules={[{ required: true, message: "Por favor ingrese la ubicación del vendedor" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditStoreModal;
