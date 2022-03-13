import { Button, Col, Row, Select, Space, Table } from 'antd';
import { Typography } from 'antd';
import Link from 'next/link';

const dataSource = [
		{
			key: "1",
      item: "Item 1",
      price: '$12.44',
      quantity: 20,
      subTotal: 12,
		},
		{
			key: "2",
      item: "Item 2",
      price: '$12.44',
      quantity: 20,
      subTotal: 12,
		},
		{
			key: "3",
      item: "Item 3",
      price: '$12.44',
      quantity: 20,
      subTotal: 12,
		},
    {
			key: "4",
      item: "Item 4",
      price: '$12.44',
      quantity: 20,
      subTotal: 12,
    },
  ];
  
  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Sub total',
      dataIndex: 'subTotal',
      key: 'subTotal',
    },
  ];


const { Option } = Select;

function Detail() {
      
  return (
    <div className='mt'>
    <Row>
			<Col span={12}>
				<Row>
					<Col span={12}>
							<Typography.Title level={4}>Order Name</Typography.Title>
					</Col>
					<Col span={12}>
							#12345
					</Col>
				</Row>
				<Row>
					<Col span={12}>
							<Typography.Title level={4}>Customer Name</Typography.Title>
					</Col>
					<Col span={12}>
							Michel
					</Col>
				</Row>
				<Row>
					<Col span={12}>
							<Typography.Title level={4}>Customer Phone</Typography.Title>
					</Col>
					<Col span={12}>
							0909xxxxxxxxx
					</Col>
				</Row>
			</Col>
			<Col span={12}>
			
				<Row>
					<Col span={12}>
						<Select placeholder="Select status" style={{width: "90%"}}>
							<Option value="canceled">Canceled</Option>
							<Option value="confirmed">Confirmed</Option>
							<Option value="inCart">In cart</Option>
						</Select>
					</Col>
					<Col span={12}>
						<Space>
						<Button>
							Canceled
						</Button>
						</Space>
					</Col>
				</Row>
				<Row className='mt-5'>
					<Col span={4}>
							<Typography.Title level={4}>
								Order Time
							</Typography.Title>
					</Col>
					<Col span={12} className="mt-2">
							<Typography.Text>
								Mar 13 2022 09:28:23
							</Typography.Text>
					</Col>
				</Row>
			</Col>
    </Row>
    <Table dataSource={dataSource} columns={columns} className="mt-5"
        pagination={false} />
		<Row className='flex justify-end'>
			<Col span={7} offset={18}>
			<Typography.Title level={5} className="mt-5">Total: $99.99</Typography.Title>
			</Col>
		</Row>
    </div>
  )
}

export default Detail
