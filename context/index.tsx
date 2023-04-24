import InfoModalProvider from "./infoModal";
import SigninProvider from "./signin";
import StatesProvider from "./states";

const ContextProvider = ({ children }: any) => {
  return (
    <StatesProvider>
      <InfoModalProvider>
        <SigninProvider>{children}</SigninProvider>
      </InfoModalProvider>
    </StatesProvider>
  );
};

export default ContextProvider;
