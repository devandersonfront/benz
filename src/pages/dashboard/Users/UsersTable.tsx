import styled from "@emotion/styled";
import { BaseTable } from "components/Table/Atom";
import { icons } from "modules/icons";
import { SelectColumn } from "react-data-grid";
import type { Column } from "react-data-grid";
import { css } from "@emotion/css";
import { useState } from "react";

function UsersTable() {
  interface Row {
    id: number;
    task: string;
    complete: number;
    priority: string;
    issueType: string;
  }

  function createRows(): readonly Row[] {
    const rows: Row[] = [];

    for (let i = 1; i < 7; i++) {
      rows.push({
        id: i,
        task: `Task ${i}`,
        complete: Math.min(100, Math.round(Math.random() * 110)),
        priority: ["Critical", "High", "Medium", "Low"][Math.round(Math.random() * 3)],
        issueType: ["Bug", "Improvement", "Epic", "Story"][Math.round(Math.random() * 3)],
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
      key: "id",
      name: "ID",
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
      key: "task",
      name: "Title",
      // renderEditCell: TextEditor,
      sortable: true,
      resizable: true,

      formatter: (props) => {
        console.log(props);
        return <>hello</>;
      },
    },
    {
      key: "priority",
      name: "Priority",
      sortable: true,
      resizable: true,
    },
    {
      key: "issueType",
      name: "Issue Type",
      sortable: true,
      resizable: true,
    },
    {
      key: "complete",
      name: "% Complete",
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

export default UsersTable;
