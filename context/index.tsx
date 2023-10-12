import AdditionalInputsProvider from "./additionalInputs";
import CarouselProvider from "./carousel";
import CodeLinkOptProvider from "./codeLinkOptions";
import DisplayImageUrlInputsProvider from "./displayImageUrlInputs";
import InfoModalProvider from "./infoModal";
import ProjectProvider from "./project";
import StatesProvider from "./states";
import AuthProvider from "./auth";

const ContextProvider = ({ children }: any) => {
  return (
    <StatesProvider>
      <AuthProvider>
        <InfoModalProvider>
          <ProjectProvider>
            <CodeLinkOptProvider>
              <AdditionalInputsProvider>
                <DisplayImageUrlInputsProvider>
                  <CarouselProvider>{children}</CarouselProvider>
                </DisplayImageUrlInputsProvider>
              </AdditionalInputsProvider>
            </CodeLinkOptProvider>
          </ProjectProvider>
        </InfoModalProvider>
      </AuthProvider>
    </StatesProvider>
  );
};

export default ContextProvider;
