'use client';

import ProgressSteps from '@/components/common/ProcessSteps';
import OtpInputComponent from '@/components/Login/OtpInput';
import { Button, Col, Input, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(15);
  const [otp, setOtp] = useState('');
  const { t } = useTranslation('common');
  const router = useRouter();

  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  return (
    <>
      <ProgressSteps currentStep={1} />
      <Row
        style={{
          background: '#2a237e',
          color: '#fff',
          fontFamily: 'sans-serif',
          padding: 0,
        }}
        align="middle"
        justify="center"
      >
        <Col xs={24} sm={20} md={16} lg={12} xl={8} style={{ width: '100%' }}>
          <Space
            direction="vertical"
            size={32}
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 32,
              padding: 16,
            }}
          >
            <Typography.Title
              level={2}
              style={{ color: '#fff', fontWeight: 700, fontSize: 32 }}
            >
              {t('welcome')}
              <br />
              {t('title')}
            </Typography.Title>
            <Typography.Text style={{ color: '#fff' }}>
              {t('onboarding')}
            </Typography.Text>
            <Space direction="vertical" size={24} style={{ width: '100%' }}>
              <Typography.Text style={{ color: '#fff' }}>
                {t('enter_mobile')}
              </Typography.Text>
              <Input
                size="large"
                addonBefore={
                  <span
                    style={{
                      background: '#fff',
                      color: '#222',
                      padding: '0 12px',
                      borderRadius: '8px 0 0 8px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      height: 40,
                    }}
                  >
                    <span
                      role="img"
                      aria-label="UAE Flag"
                      style={{ marginRight: 4 }}
                    >
                      🇦🇪
                    </span>
                    +996
                  </span>
                }
                placeholder={t('phone_number_placeholder')}
                style={{
                  marginTop: 8,
                  borderRadius: 8,
                  background: '#fff',
                  color: '#222',
                }}
              />
              <Button
                type="primary"
                onClick={() => {
                  setOtpSent(true);
                  setTimer(15);
                }}
              >
                {t('get_otp')}
              </Button>
            </Space>
            {otpSent && (
              <Space direction="vertical" size={16} style={{ width: '100%' }}>
                <OtpInputComponent
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                />
                <div style={{ color: '#fff', marginTop: 8 }}>
                  sending the verification code in 0:
                  {timer < 10 ? `0${timer}` : timer}s
                </div>
              </Space>
            )}
            <Button type="primary" onClick={() => router.push('/onboarding')}>
              {t('get_credit')}
            </Button>
            <div style={{ color: '#fff', marginTop: 8 }}>
              {t('b2b_customers')}
            </div>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
