import {Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/choose.css';
import demandForecasting from '../assets/demand-forecasting.jpg';
import supplyChain from '../assets/supplychainmgmt.jpg';
import transportMonitoring from '../assets/transport-monitoring.jpg';

function WhyChoose() {
  return (
    <>
    <Row className="justify-content-center">
    <Col xs={10} sm={8} md={4} lg={2} className="card-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={supplyChain} />
      <Card.Body>
        <Card.Title>Supply Chain Analysis</Card.Title>
        <Card.Text>
        Our software provides powerful supply chain analysis tools that help you optimize your supply chain operations, identify inefficiencies, and improve overall performance.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col xs={10} sm={8} md={4} lg={2} className="card-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={transportMonitoring} />
      <Card.Body>
        <Card.Title>Transport Monitoring</Card.Title>
        <Card.Text>
        Our software offers comprehensive transport monitoring capabilities, allowing you to track and manage your fleet in real-time. 
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col xs={10} sm={8} md={4} lg={2} className="card-container">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={demandForecasting} />
      <Card.Body>
        <Card.Title>Demand Forecasting</Card.Title>
        <Card.Text>
        Our software leverages advanced algorithms and historical data analysis to provide accurate demand forecasts. Anticipate future demand trends, optimize inventory levels, and improve supply chain efficiency. 
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </>
  );
}

export default WhyChoose;