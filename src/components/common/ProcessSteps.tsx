'use client';

import { CheckCircleOutlined } from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';

const { Step } = Steps;

type ProgressStepsProps = {
  currentStep: number;
};

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  const steps = [
    {
      title: 'Business Info',
    },
    {
      title: 'Business Details',
    },
    {
      title: 'Business Info',
    },
  ];

  return (
    <Row justify="center" style={{ padding: '48px 16px' }}>
      <Col md={20} lg={16} xl={14}>
        <h2 style={{ textAlign: 'center', marginBottom: 40 }}>
          Get Approved in 3 Steps
        </h2>

        <Steps current={currentStep - 1}>
          {steps.map((step, index) => {
            const stepIndex = index + 1;
            const isCompleted = stepIndex < currentStep;
            const isCurrent = stepIndex === currentStep;
            return (
              <Step
                key={step.title + index}
                title={step.title}
                icon={
                  isCompleted ? (
                    <CheckCircleOutlined style={{ color: '#58b4ae' }} />
                  ) : undefined
                }
                status={isCompleted ? 'finish' : isCurrent ? 'process' : 'wait'}
              />
            );
          })}
        </Steps>
      </Col>
    </Row>
  );
}
