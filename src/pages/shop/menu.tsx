import { Button, Col, Modal, Row, Space, Table } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import EditForm from '../../components/EditForm';

function Menu() {
	
  const [isEditVisible, setIsEditVisible] = useState(false);

	const onEdit = () => {
		setIsEditVisible(false);
	}

	const onCancel = () => {
		setIsEditVisible(false);
	}

	const dataSource = [
		{
			key: "1",
      picture: <img width={100} height={100} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />,
      name: 'John',
      price: '09811133',
      action: <Space>
				<Button type="primary" onClick={() => setIsEditVisible(true)}>Edit</Button>
				<Button danger>Delete</Button>
			</Space>,
		},
		{
			key: "2",
      picture:  <img width={100} height={100} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />,
      name: 'John',
      price: '09811133',
      action: <Space>
				<Button type="primary" onClick={() => setIsEditVisible(true)}>Edit</Button>
				<Button danger>Delete</Button>
			</Space>,
		},
		{
			key: "3",
      picture:  <img width={100} height={100} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />,
      name: 'John',
      price: '09811133',
      action: <Space>
				<Button type="primary" onClick={() => setIsEditVisible(true)}>Edit</Button>
				<Button danger>Delete</Button>
			</Space>,
		},
    {
			key: "4",
      picture:  <img width={100} height={100} src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />,
      name: 'John',
      price: '09811133',
      action: <Space>
				<Button type="primary" onClick={() => setIsEditVisible(true)}>Edit</Button>
				<Button danger>Delete</Button>
			</Space>,
    },
  ];
  
  const columns = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      key: 'picture',
			width: '15%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
			width: '30%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
			width: '30%',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

	const [items, setItems] = useState(dataSource);
	console.log(items);
	
  return (
    <div className='mt'>
			<Row className='mt-5'>
				<Col span={12}>
					<Row>
						<Col span={12}>
								<Typography.Title level={4}>Shop Name</Typography.Title>
						</Col>
						<Col span={12}>
								Shop 1
						</Col>
					</Row>
					<Row>
						<Col span={12}>
								<Typography.Title level={4}>Phone Number</Typography.Title>
						</Col>
						<Col span={12}>
								0909xxxxxxxxx
						</Col>
					</Row>
				</Col>
				<Col span={12}>
					<Row>
						<Col span={12}>
								<Typography.Title level={4}>Shop Link</Typography.Title>
						</Col>
						<Col span={12}>
							<Space>
							<Button>
								Copy
							</Button>
							<Button>
								Share
							</Button>
							</Space>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
								<Typography.Title level={4}>
									<Link href="/view-orders">View Orders</Link>
								</Typography.Title>
						</Col>
					</Row>
				</Col>
			</Row>
			<Table dataSource={items} columns={columns} className="mt-5" />
			<Modal
          centered
          title="Edit Menu"
          visible={isEditVisible}
          onOk={onCancel}
          onCancel={onCancel}
          footer={false}
        >
          <EditForm onEdit={onEdit} />
        </Modal>
    </div>
  )
}

export default Menu
