import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "Name-ASC", label: "Sort by name (A-Z)" },
          { value: "Name-DESC", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by name price(low-high)" },
          { value: "regularPrice-desc", label: "Sort by name price(high-low)" },
          {
            value: "maxCapacity-asc",
            label: "Sort by name capacity(low-high)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by name capacity(high-low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
