'use client';

import ProgressSteps from '@/components/common/ProcessSteps';
import OnBoardingExtraFields from '@/components/onboarding/OnboardingFields2';
import { Row } from 'antd';
const onBoarding = () => {
  return (
    <>
      <ProgressSteps currentStep={2} />
      <Row align="middle" justify="center">
        <OnBoardingExtraFields />
      </Row>
    </>
  );
};

export default onBoarding;
