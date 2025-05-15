'use client';

import ProgressSteps from '@/components/common/ProcessSteps';
import OnBoardingFields from '@/components/onboarding/onboardingFields';
import { Row } from 'antd';
const onBoarding = () => {
  return (
    <>
      <ProgressSteps currentStep={2} />
      <Row align="middle" justify="center">
        <OnBoardingFields />
      </Row>
    </>
  );
};

export default onBoarding;
