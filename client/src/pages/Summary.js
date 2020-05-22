import React from "react";
import styled from "@emotion/styled";
import {
  TextButton,
  SvgTextButton,
  SliderDotsButton,
  SvgTextFooterButton,
  SvgButton,
  SVGSquareButton
} from "../components/Buttons";
import { Fire, Accident, Next } from "../assets/Icons";
import { H1, H2, H3 } from "../components/Headlines";
import Aside from "../components/Aside";
import {
  Field,
  IssueCrisisPotential,
  TextEntry,
  BiggerField,
  DetailLink,
  LinkEntry,
  FormReport
} from "../components/Forms";
import ContainerFlexRow from "../components/ContainerFlexRow";
import ContainerFlexCol from "../components/ContainerFlexCol";

import useSessionStorage from "../hooks/useSessionStorage";
import { useHistory } from "react-router-dom";
import calculateCrisisPotential from "../utils/calculateCrisisPotential";

import SaveData from "../api/SaveData";

const ContainerFlexRowWrap = styled(ContainerFlexRow)`
  width: 100%;
  padding: 0 4px 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Summary() {
  const history = useHistory();
  let type = sessionStorage.getItem("type");
  const [crisisPotential, setCrisisPotential] = useSessionStorage(
    "crisisPotential",
    calculateCrisisPotential(type)
  );
  // console.log("Summaray", type, crisisPotential);
  // let typeStored = setCrisisPotential(sessionStorage.getItem("type"));
  // const crisisPotential =
  //   calculateCrisisPotential(typeStored)
  // );

  const [timeDate, setTimeDate] = useSessionStorage("timeDate", new Date());

  const [employeeInjured, setEmployeeInjured] = useSessionStorage(
    "employeeInjured",
    ""
  );
  const [isSelected, setIsSelected] = React.useState(false);

  // loading State onSubmitting = true
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      type: type,
      timeDate: timeDate,
      country: sessionStorage.getItem("country"),
      city: sessionStorage.getItem("city"),
      crisisPotential: crisisPotential,
      site: sessionStorage.getItem("site")
    };
    await SaveData("/api/issues", data);
    history.push("/send");
  }

  return (
    <>
      <FormReport onSubmit={handleSubmit}>
        <H2>Summary and crisis potential</H2>
        <H1>Please check and report</H1>

        <Field>
          <ContainerFlexRowWrap>
            <div>
              <IssueCrisisPotential crisisPotential={crisisPotential}>
                {crisisPotential}
              </IssueCrisisPotential>
            </div>
            <div>
              <ContainerFlexCol>
                <H3>Crisis potential</H3>
                <span>based on your assessment</span>
              </ContainerFlexCol>
            </div>
            <div>
              <SVGSquareButton>{<Next />}</SVGSquareButton>
            </div>
          </ContainerFlexRowWrap>
        </Field>

        <BiggerField>
          <LinkEntry
            url="/report/1"
            sessionStorageValue="type"
            svg={<Next />}
          />
          <LinkEntry
            url="/report/2"
            sessionStorageValue="timeDate"
            svg={<Next />}
          />
          <LinkEntry
            url="/report/2"
            sessionStorageValue="site"
            svg={<Next />}
          />
        </BiggerField>

        <Aside>
          <SvgTextFooterButton
            svg={<Next />}
            text="Report issue to crisis management"
          ></SvgTextFooterButton>
        </Aside>
      </FormReport>
    </>
  );
}
