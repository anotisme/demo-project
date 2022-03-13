import { Button, Col, Row, Space, Table } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';

const dataSource = [
		{
			key: "1",
			id: '#12345',
			name: 'John',
			phone: '09811133',
			total: 12,
			status: 'Confirmed',
			orderTime: 'Mar 13 2022 09:28:23',
			view: <Link href="/shop/1">View</Link>,
		},
		{
			key: "2",
			id: "#12345",
			name: 'John',
			phone: '09811133',
			total: 12,
			status: 'Confirmed',
			orderTime: 'Mar 13 2022 09:28:23',
			view: <Link href="/shop/2">View</Link>,
		},
		{
			key: "3",
			id: "#12345",
			name: 'John',
			phone: '09811133',
			total: 12,
			status: 'Confirmed',
			orderTime: 'Mar 13 2022 09:28:23',
			view: <Link href="/shop/3">View</Link>,
		},
    {
			key: "4",
      id: "#12345",
      name: 'John',
      phone: '09811133',
      total: 12,
      status: 'Confirmed',
      orderTime: 'Mar 13 2022 09:28:23',
      view: <Link href="/shop/4">View</Link>,
    },
  ];
  
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Customer Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Order Time',
      dataIndex: 'orderTime',
      key: 'orderTime',
    },
    {
      title: '',
      dataIndex: 'view',
      key: 'view',
    },
  ];

function Shop() {
      
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
								<Link href="/shop/menu">View Menu</Link>
							</Typography.Title>
					</Col>
				</Row>
			</Col>
    </Row>
    <Table dataSource={dataSource} columns={columns} className="mt-5" />;
    </div>
  )
}

export default Shop
