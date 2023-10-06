import { BasePagination as Pagenation } from "components/Pagination/Atom";
import { BaseTable } from "components/Table/Atom";

function Users() {
  return (
    <div>
      <BaseTable />

      <Pagenation
        totalData={38}
        countPerPage={5}
        notifier={(currentPage) => {
          console.log("현재 페이지가 뭔지 알려드립니다", currentPage);
        }}
      />
    </div>
  );
}

export default Users;
