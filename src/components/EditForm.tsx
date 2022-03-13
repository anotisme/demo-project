import { Row, Col, Form, Input, Button, Upload, message } from 'antd';
import { Store } from 'antd/lib/form/interface';

function EditForm({
  form,
  onEdit,
}: Store) {
	
	function beforeUpload(file: any) {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		return isJpgOrPng && isLt2M;
	}

	const uploadButton = (
		<div>
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);
	const imageUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  return (
      <Form
        layout="vertical"
        form={form}
        onFinish={onEdit}
      >
        <Row>
          <Col span={24}>
            <Form.Item name="name" label="Name" rules={[{
							required: true,
						}]}>
              <Input
                placeholder="Enter name"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="price"
              label="Price"
							rules={[{
								required: true,
							}]}
            >
              <Input type="number"
                placeholder="Enter price"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <div className="text-center">
              <Form.Item name="menuImage">
								<Upload
									name="menuImage"
									listType="picture-card"
									className="avatar-uploader"
									showUploadList={false}
									action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
									beforeUpload={beforeUpload}
								>
									{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
								</Upload>
              </Form.Item>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
          </Col>
          <Col span={8}>
            <div className="justify-center">
              <Button htmlType="submit" type="primary" block>
                Save
              </Button>
            </div>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </Form>
  );
}

export default EditForm;
