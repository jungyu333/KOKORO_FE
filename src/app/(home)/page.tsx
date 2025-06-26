import BrandText from '@/shared/ui/BrandText';
import OnboardingIcon from '@/shared/ui/OnboardingIcon';
import * as S from './style';

const HomePage = () => {
  return (
    <S.Wrapper>
      <BrandText />

      <S.Space />

      <OnboardingIcon />
    </S.Wrapper>
  );
};

export default HomePage;
