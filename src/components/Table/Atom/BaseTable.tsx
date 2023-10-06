import styled from "@emotion/styled";
import DataGrid from "react-data-grid";

function BaseTable() {
  const ProgressBarFormatter = (props: any) => {
    console.log("props", props);
    return <div>{props.row.id}</div>;
  };

  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
    { key: "complete", name: "Complete", formatter: ProgressBarFormatter },
  ];

  const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 },
  ];
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

const Table = styled(DataGrid)`
  height: fit-content;
`;

export default BaseTable;
