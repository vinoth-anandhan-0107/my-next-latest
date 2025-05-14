import { Button, Card, Col, Row, Typography } from 'antd';

interface CreditTermCardProps {
  days: number;
  interestRate: number;
}

const { Text, Title } = Typography;

const CreditTermCard = ({ days, interestRate }: CreditTermCardProps) => {
  return (
    <Card
      style={{
        maxWidth: 400,
        width: '100%',
        margin: '0 auto',
        borderRadius: 5,
        backgroundColor: '#E1EBFF',
      }}
    >
      <Row gutter={16} align="middle" justify="space-between">
        <Col>
          <Title level={5} style={{ margin: 0, fontWeight: 600 }}>
            Credit Term
          </Title>
          <Text type="secondary">Your repayment period</Text>
        </Col>

        <Col>
          <Button
            type="primary"
            className="custom-button"
          >
            <Row justify="center" align="middle">
              <Col span={24}>
                <Text style={{ fontWeight: 700, color: '#fff' }}>
                  {days} Days
                </Text>
              </Col>
              <Col span={24}>
                <Text style={{ color: '#fff' }}>{interestRate}% interest</Text>
              </Col>
            </Row>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CreditTermCard;
