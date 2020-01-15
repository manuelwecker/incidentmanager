import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SliderDotsButton,
  SvgTextFooterButton,
  EnlargeButton
} from "../components/Buttons";
import { H1, H2, H3 } from "../components/Headlines";
import { useLocation, Link } from "react-router-dom";
import { Next, Accident } from "../assets/Icons";
import Aside from "../components/Aside";
import { Radio, FieldGroup, Field } from "../components/Forms";
import ContainerFlexRow from "../components/ContainerFlexRow";
import ContainerFlexCol from "../components/ContainerFlexCol";

const FieldEnlarge = styled(Field)``;

const Label = styled.label``;

const ContainerFlexColWrap = styled(ContainerFlexCol)`
  justify-content: space-between;
  padding: 4px;
  width: 100%;
`;

const ContainerFlexRowWrap = styled(ContainerFlexRow)`
  justify-content: space-between;
  padding: 4px;
  width: 100%;
`;

export default function ReportThree() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isEnlarged, setIsEnlarged] = React.useState(false);
  const location = useLocation();
  return (
    <>
      <H2>Involved people:</H2>
      <H1>Who is effected and injured?</H1>

      <FieldGroup>
        <FieldEnlarge>
          <Field>
            <ContainerFlexColWrap>
              <ContainerFlexRowWrap>
                <H3>Are there casualties?</H3>
                <EnlargeButton
                  onClick={() => setIsClicked(!isClicked)}
                  isClicked={isClicked}
                ></EnlargeButton>
              </ContainerFlexRowWrap>

              <ContainerFlexRowWrap>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>Yes</Label>
                </ContainerFlexCol>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>No</Label>
                </ContainerFlexCol>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>Unknown</Label>
                </ContainerFlexCol>
              </ContainerFlexRowWrap>
            </ContainerFlexColWrap>
          </Field>
        </FieldEnlarge>

        {isClicked && (
          <>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>Own employees</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>External employees</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>Other persons</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
          </>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldEnlarge>
          <Field>
            <ContainerFlexColWrap>
              <ContainerFlexRowWrap>
                <H3>Are there injured?</H3>
                <EnlargeButton
                  onClick={() => setIsEnlarged(!isEnlarged)}
                  isClicked={isEnlarged}
                ></EnlargeButton>
              </ContainerFlexRowWrap>

              <ContainerFlexRowWrap>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>Yes</Label>
                </ContainerFlexCol>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>No</Label>
                </ContainerFlexCol>
                <ContainerFlexCol>
                  <input type="checkbox"></input>
                  <Label>Unknown</Label>
                </ContainerFlexCol>
              </ContainerFlexRowWrap>
            </ContainerFlexColWrap>
          </Field>
        </FieldEnlarge>

        {isEnlarged && (
          <>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>Own employees</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>External employees</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
            <Field>
              <ContainerFlexRowWrap>
                <input type="checkbox" />
                <span>Other persons</span>
                <input type="text" placeholder="Count" />
              </ContainerFlexRowWrap>
            </Field>
          </>
        )}
      </FieldGroup>

      <SliderDotsButton />
      <Aside>
        <Link to="/report/4">
          <SvgTextFooterButton
            svg={<Next />}
            text="Next to step 4"
          ></SvgTextFooterButton>
        </Link>
      </Aside>
    </>
  );
}
