import {useMemo} from 'react';
import CustomizationProvider, {Flag} from 'providers/Customization';

interface IProps {
  children: React.ReactNode;
}

const flagValues = {
  [Flag.IsAnalyticsPageEnabled]: true,
  [Flag.IsAgentDataStoreEnabled]: false,
  [Flag.IsLocalModeEnabled]: false,
};

const getComponent = <T,>(id: string, fallback: React.ComponentType<T>) => fallback;
const getFlag = (flag: Flag) => flagValues[flag];
const getIsAllowed = () => true;

const CustomizationWrapper = ({children}: IProps) => {
  const customizationProviderValue = useMemo(() => ({getComponent, getFlag, getIsAllowed}), []);

  return <CustomizationProvider value={customizationProviderValue}>{children}</CustomizationProvider>;
};

export default CustomizationWrapper;
