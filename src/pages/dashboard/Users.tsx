import { BasePagination as Pagenation } from "components/Pagination";

function Users() {
  return (
    <div>
      <Pagenation
        totalData={38}
        countPerPage={5}
        pagelistDisplayLimit={5}
        notifier={(currentPage) => {
          console.log("현재 페이지가 뭔지 알려드립니다", currentPage);
        }}
      />
    </div>
  );
}

export default Users;
