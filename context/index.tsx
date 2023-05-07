import AdditionalInputsProvider from "./additionalInputs";
import CarouselProvider from "./carousel";
import CodeLinkOptProvider from "./codeLinkOptions";
import DisplayImageUrlInputsProvider from "./displayImageUrlInputs";
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
            <CodeLinkOptProvider>
              <AdditionalInputsProvider>
                <DisplayImageUrlInputsProvider>
                  <CarouselProvider>{children}</CarouselProvider>
                </DisplayImageUrlInputsProvider>
              </AdditionalInputsProvider>
            </CodeLinkOptProvider>
          </ProjectProvider>
        </SigninProvider>
      </InfoModalProvider>
    </StatesProvider>
  );
};

export default ContextProvider;
