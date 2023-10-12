import styled from "@emotion/styled";
import { BaseTable } from "components/Table/Atom";
import { icons } from "modules/icons";
import { SelectColumn } from "react-data-grid";
import type { Column } from "react-data-grid";
import { css } from "@emotion/css";
import { useState } from "react";

function ReceptionTable() {
  interface Row {
    inboundDate: string;
    carNumber: number;
    vin: string;
    manager: string;
    progressState: string;
    deliveryState: string;
    options: "";
  }

  function createRows(): readonly Row[] {
    const rows: Row[] = [];

    for (let i = 1; i < 7; i++) {
      rows.push({
        inboundDate: Date.now().toLocaleString(),
        carNumber: 232323,
        vin: "vin" + i,
        manager: "manager" + i,
        progressState: "progressState",
        deliveryState: "deliveryState",
        options: "",
      });
    }

    return rows;
  }

  const columns: readonly Column<Row>[] = [
    {
      ...SelectColumn,
      width: "auto",
      maxWidth: 500,
      resizable: true,
      headerCellClass: css`
        & > * {
          justify-content: flex-start;
          padding-left: 24px;
        }
      `,
      cellClass: css`
        .rdg-checkbox-label {
          padding-left: 24px;
        }
      `,
    },
    {
      key: "inboundDate",
      name: "입고일시",
      resizable: true,
      cellClass: css`
        color: #dde1e8;
        font-size: 14px;
        font-family: Roboto;
        font-weight: 700;
        word-wrap: break-word;
      `,
    },
    {
      key: "carNumber",
      name: "차량번호",
      sortable: true,
      resizable: true,
      formatter: (props) => {
        console.log(props);
        return <>hello</>;
      },
    },
    {
      key: "vin",
      name: "VIN",
      sortable: true,
      resizable: true,
    },
    {
      key: "modelName",
      name: "모델명",
      sortable: true,
      resizable: true,
    },
    {
      key: "manager",
      name: "담당자",
      sortable: true,
      resizable: true,
    },
    {
      key: "progressState",
      name: "진행상태",
      sortable: true,
      resizable: true,
    },
    {
      key: "deliveryState",
      name: "출고상태",
      sortable: true,
      resizable: true,
    },
    {
      key: "options",
      name: "options",
      sortable: true,
      resizable: true,
      headerCellClass: css`
        justify-content: flex-end;
      `,
      cellClass: css`
        justify-content: flex-end;
      `,
      formatter(props) {
        return (
          <OptionBox>
            <OptionBtn>
              <icons.Eye_Icon />
            </OptionBtn>

            <OptionBtn>
              <icons.Pencil_Icon />
            </OptionBtn>

            <OptionBtn>
              <icons.Trash_Icon />
            </OptionBtn>
          </OptionBox>
        );
      },
    },
  ];

  const [rows, setRows] = useState(createRows);

  return <BaseTable columns={columns} rows={rows} />;
}

const OptionBox = styled.fieldset`
  display: flex;
  gap: 10px;
  border: none;
`;
const OptionBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ReceptionTable;
