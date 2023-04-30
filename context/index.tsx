import CodeLinkOptProvider from "./codeLinkOptions";
import InfoModalProvider from "./infoModal";
import ProjectProvider from "./project";
import SigninProvider from "./signin";
import StatesProvider from "./states";

const ContextProvider = ({ children }: any) => {
  return (
    <StatesProvider>
      <InfoModalProvider>
        <SigninProvider>
          <ProjectProvider>
            <CodeLinkOptProvider>{children}</CodeLinkOptProvider>
          </ProjectProvider>
        </SigninProvider>
      </InfoModalProvider>
    </StatesProvider>
  );
};

export default ContextProvider;
